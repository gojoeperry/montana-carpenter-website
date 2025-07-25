import { onCLS, onINP, onFCP, onLCP, onTTFB, Metric } from 'web-vitals';

// Types for performance monitoring
interface PerformanceEvent {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
  navigationType?: string;
}

interface CustomEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, string | number | boolean>;
}

// Web Vitals thresholds
const VITALS_THRESHOLDS = {
  CLS: { good: 0.1, poor: 0.25 },
  INP: { good: 200, poor: 500 },
  FCP: { good: 1800, poor: 3000 },
  LCP: { good: 2500, poor: 4000 },
  TTFB: { good: 800, poor: 1800 },
};

// Get rating based on thresholds
function getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  const thresholds = VITALS_THRESHOLDS[name as keyof typeof VITALS_THRESHOLDS];
  if (!thresholds) return 'good';
  
  if (value <= thresholds.good) return 'good';
  if (value <= thresholds.poor) return 'needs-improvement';
  return 'poor';
}

// Send to analytics (Google Analytics 4)
function sendToGA(event: PerformanceEvent) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event.name, {
      event_category: 'Web Vitals',
      event_label: event.id,
      value: Math.round(event.name === 'CLS' ? event.value * 1000 : event.value),
      custom_map: {
        metric_rating: event.rating,
        metric_delta: event.delta,
        navigation_type: event.navigationType,
      },
    });
  }
}

// Send custom events
export function trackEvent({ event, category, action, label, value, custom_parameters }: CustomEvent) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      ...custom_parameters,
    });
  }

  // Also send to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', { event, category, action, label, value, custom_parameters });
  }
}

// Track business-specific events
export const BusinessEvents = {
  // Contact form interactions
  contactFormStart: () => trackEvent({
    event: 'contact_form_start',
    category: 'Engagement',
    action: 'form_start',
    label: 'contact_form'
  }),

  contactFormComplete: (service?: string) => trackEvent({
    event: 'contact_form_complete',
    category: 'Conversion',
    action: 'form_complete',
    label: 'contact_form',
    custom_parameters: service ? { service_type: service } : undefined
  }),

  // Phone clicks
  phoneClick: (location: string) => trackEvent({
    event: 'phone_click',
    category: 'Engagement',
    action: 'click',
    label: 'phone_number',
    custom_parameters: { click_location: location }
  }),

  // Portfolio interactions
  portfolioView: (projectId: string) => trackEvent({
    event: 'portfolio_view',
    category: 'Engagement',
    action: 'view',
    label: 'portfolio_project',
    custom_parameters: { project_id: projectId }
  }),

  // Service page visits
  serviceView: (serviceName: string) => trackEvent({
    event: 'service_view',
    category: 'Engagement',
    action: 'view',
    label: 'service_page',
    custom_parameters: { service_name: serviceName }
  }),

  // Quote requests
  quoteRequest: (service: string, budget?: string) => trackEvent({
    event: 'quote_request',
    category: 'Lead',
    action: 'request',
    label: 'quote',
    custom_parameters: { 
      service_type: service,
      ...(budget ? { budget_range: budget } : {})
    }
  }),

  // Search usage
  searchUsed: (query: string, resultsCount: number) => trackEvent({
    event: 'site_search',
    category: 'Engagement',
    action: 'search',
    label: query,
    value: resultsCount
  }),

  // Page engagement time
  pageEngagement: (page: string, timeSpent: number) => trackEvent({
    event: 'page_engagement',
    category: 'Engagement',
    action: 'time_on_page',
    label: page,
    value: Math.round(timeSpent / 1000) // Convert to seconds
  }),
};

// Initialize Web Vitals tracking
export function initWebVitals() {
  if (typeof window === 'undefined') return;

  const handleMetric = (metric: Metric) => {
    const event: PerformanceEvent = {
      name: metric.name,
      value: metric.value,
      rating: getRating(metric.name, metric.value),
      delta: metric.delta,
      id: metric.id,
      navigationType: (performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming)?.type,
    };

    sendToGA(event);

    // Log poor scores to console in development
    if (process.env.NODE_ENV === 'development' && event.rating === 'poor') {
      console.warn(`Poor ${metric.name} score:`, metric.value);
    }
  };

  // Track all Core Web Vitals
  onCLS(handleMetric, { reportAllChanges: true });
  onINP(handleMetric);
  onFCP(handleMetric);
  onLCP(handleMetric, { reportAllChanges: true });
  onTTFB(handleMetric);
}

// Performance observer for custom metrics
export function initPerformanceObserver() {
  if (typeof window === 'undefined' || !window.PerformanceObserver) return;

  // Largest Contentful Paint observer
  const lcpObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1] as PerformanceEventTiming;
    
    if (lastEntry) {
      trackEvent({
        event: 'lcp_element',
        category: 'Performance',
        action: 'lcp_observed',
        label: 'lcp_element',
        value: Math.round(lastEntry.startTime)
      });
    }
  });

  try {
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
  } catch {
    console.warn('LCP observer not supported');
  }

  // Long tasks observer
  const longTaskObserver = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.duration > 50) { // Tasks longer than 50ms
        trackEvent({
          event: 'long_task',
          category: 'Performance',
          action: 'long_task_detected',
          label: 'blocking_task',
          value: Math.round(entry.duration)
        });
      }
    });
  });

  try {
    longTaskObserver.observe({ entryTypes: ['longtask'] });
  } catch {
    console.warn('Long task observer not supported');
  }
}

// Track resource loading performance
export function trackResourcePerformance() {
  if (typeof window === 'undefined') return;

  window.addEventListener('load', () => {
    // Get navigation timing
    const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (nav) {
      const metrics = {
        dns_lookup: nav.domainLookupEnd - nav.domainLookupStart,
        tcp_connect: nav.connectEnd - nav.connectStart,
        tls_handshake: nav.connectEnd - nav.secureConnectionStart,
        server_response: nav.responseStart - nav.requestStart,
        dom_interactive: nav.domInteractive - nav.fetchStart,
        dom_complete: nav.domComplete - nav.fetchStart,
        page_load: nav.loadEventEnd - nav.fetchStart,
      };

      Object.entries(metrics).forEach(([name, value]) => {
        if (value > 0) {
          trackEvent({
            event: 'resource_timing',
            category: 'Performance',
            action: name,
            label: 'navigation_timing',
            value: Math.round(value)
          });
        }
      });
    }

    // Track large resource loads
    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    resources
      .filter(resource => resource.transferSize > 100000) // > 100KB
      .forEach(resource => {
        trackEvent({
          event: 'large_resource',
          category: 'Performance',
          action: 'large_resource_loaded',
          label: resource.initiatorType,
          value: Math.round(resource.transferSize / 1024), // KB
          custom_parameters: {
            resource_name: resource.name.split('/').pop() || 'unknown',
            duration: Math.round(resource.duration)
          }
        });
      });
  });
}

// Error tracking
export function initErrorTracking() {
  if (typeof window === 'undefined') return;

  // Catch JavaScript errors
  window.addEventListener('error', (event) => {
    trackEvent({
      event: 'javascript_error',
      category: 'Error',
      action: 'uncaught_error',
      label: event.filename || 'unknown',
      custom_parameters: {
        error_message: event.message,
        line_number: event.lineno,
        column_number: event.colno,
        stack: event.error?.stack?.substring(0, 500)
      }
    });
  });

  // Catch unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    trackEvent({
      event: 'promise_rejection',
      category: 'Error',
      action: 'unhandled_rejection',
      label: 'promise_error',
      custom_parameters: {
        reason: String(event.reason).substring(0, 500)
      }
    });
  });
}

// Page visibility tracking
export function initVisibilityTracking() {
  if (typeof window === 'undefined') return;

  const pageLoadTime = Date.now();
  let isVisible = !document.hidden;
  let visibilityStart = pageLoadTime;

  const trackVisibilityChange = () => {
    const now = Date.now();
    
    if (!document.hidden && !isVisible) {
      // Page became visible
      isVisible = true;
      visibilityStart = now;
    } else if (document.hidden && isVisible) {
      // Page became hidden
      isVisible = false;
      const visibleTime = now - visibilityStart;
      
      if (visibleTime > 1000) { // Only track if visible for more than 1 second
        BusinessEvents.pageEngagement(window.location.pathname, visibleTime);
      }
    }
  };

  document.addEventListener('visibilitychange', trackVisibilityChange);

  // Track on page unload
  window.addEventListener('beforeunload', () => {
    if (isVisible) {
      const totalTime = Date.now() - visibilityStart;
      if (totalTime > 1000) {
        BusinessEvents.pageEngagement(window.location.pathname, totalTime);
      }
    }
  });
}

// Initialize all analytics
export function initAnalytics() {
  // Delay initialization to avoid blocking page load
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      initWebVitals();
      initPerformanceObserver();
      trackResourcePerformance();
      initErrorTracking();
      initVisibilityTracking();
    }, 1000);
  }
}

// Batch event sending to improve performance
class EventBatcher {
  private events: CustomEvent[] = [];
  private batchTimeout: NodeJS.Timeout | null = null;
  private readonly BATCH_SIZE = 10;
  private readonly BATCH_TIMEOUT = 5000; // 5 seconds

  add(event: CustomEvent) {
    this.events.push(event);
    
    if (this.events.length >= this.BATCH_SIZE) {
      this.flush();
    } else if (!this.batchTimeout) {
      this.batchTimeout = setTimeout(() => this.flush(), this.BATCH_TIMEOUT);
    }
  }

  private flush() {
    if (this.events.length === 0) return;

    // Send batched events
    this.events.forEach(event => trackEvent(event));
    
    // Clear batch
    this.events = [];
    if (this.batchTimeout) {
      clearTimeout(this.batchTimeout);
      this.batchTimeout = null;
    }
  }
}

export const eventBatcher = new EventBatcher();

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}
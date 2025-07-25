'use client';

import { useEffect } from 'react';

// Initialize Sentry for error tracking (optional)
interface SentryConfig {
  dsn: string;
  environment: string;
  tracesSampleRate: number;
}

export function ErrorTracking({ dsn, environment = 'production', tracesSampleRate = 0.1 }: SentryConfig) {
  useEffect(() => {
    // Only initialize in production and if DSN is provided
    if (process.env.NODE_ENV !== 'production' || !dsn) {
      return;
    }

    // Initialize Sentry (uncomment and install @sentry/nextjs if using Sentry)
    /*
    import * as Sentry from '@sentry/nextjs';
    
    Sentry.init({
      dsn,
      environment,
      tracesSampleRate,
      beforeSend(event) {
        // Filter out certain errors in production
        if (event.exception) {
          const error = event.exception.values?.[0];
          if (error?.value?.includes('ResizeObserver loop limit exceeded')) {
            return null; // Don't send this common browser error
          }
        }
        return event;
      },
      integrations: [
        new Sentry.BrowserTracing({
          // Custom routing instrumentation
          routingInstrumentation: Sentry.nextRouterInstrumentation(router),
        }),
      ],
    });
    */

    // Simple error tracking fallback
    const originalConsoleError = console.error;
    console.error = (...args) => {
      originalConsoleError(...args);
      
      // Send to your error tracking service
      const errorData = {
        message: args.join(' '),
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
        stack: new Error().stack,
      };

      // Send to your error tracking endpoint
      fetch('/api/errors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(errorData),
      }).catch(() => {
        // Silently fail if error tracking endpoint is not available
      });
    };

    // Global error handler
    window.addEventListener('error', (event) => {
      const errorData = {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        stack: event.error?.stack,
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
      };

      fetch('/api/errors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(errorData),
      }).catch(() => {
        // Silently fail
      });
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      const errorData = {
        message: `Unhandled promise rejection: ${event.reason}`,
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
        stack: event.reason?.stack,
      };

      fetch('/api/errors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(errorData),
      }).catch(() => {
        // Silently fail
      });
    });

  }, [dsn, environment, tracesSampleRate]);

  return null; // This component doesn't render anything
}

// Hook for manual error reporting
export function useErrorTracking() {
  const reportError = (error: Error, context?: Record<string, any>) => {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error:', error, 'Context:', context);
      return;
    }

    const errorData = {
      message: error.message,
      stack: error.stack,
      name: error.name,
      context,
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
    };

    fetch('/api/errors', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(errorData),
    }).catch(() => {
      // Silently fail if error tracking endpoint is not available
      console.error('Failed to report error:', error);
    });
  };

  const reportCustomEvent = (eventName: string, data?: Record<string, any>) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log('Custom event:', eventName, data);
      return;
    }

    const eventData = {
      eventName,
      data,
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
    };

    fetch('/api/analytics/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(eventData),
    }).catch(() => {
      // Silently fail
    });
  };

  return { reportError, reportCustomEvent };
}
import React, { useState, useEffect, useRef } from 'react';

// Intersection Observer hook for lazy loading
export function useIntersectionObserver(
  options: IntersectionObserverInit = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options,
      }
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [options]);

  return [targetRef, isIntersecting] as const;
}

// Debounce hook for search inputs
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Throttle hook for scroll events
export function useThrottle<T>(value: T, limit: number): T {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const lastRan = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastRan.current >= limit) {
        setThrottledValue(value);
        lastRan.current = Date.now();
      }
    }, limit - (Date.now() - lastRan.current));

    return () => {
      clearTimeout(handler);
    };
  }, [value, limit]);

  return throttledValue;
}

// Preload images for better perceived performance
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to preload image: ${src}`));
    img.src = src;
  });
}

// Preload multiple images
export function preloadImages(srcs: string[]): Promise<void[]> {
  return Promise.all(srcs.map(preloadImage));
}

// Generate blur data URLs for image placeholders
export function generateBlurDataURL(width: number, height: number, color = '#FAFAF8'): string {
  const svg = `
    <svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="${color}" offset="20%" />
          <stop stop-color="#e0e0e0" offset="50%" />
          <stop stop-color="${color}" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="#f0f0f0" />
      <rect id="r" width="${width}" height="${height}" fill="url(#g)" opacity="0.5" />
      <animate attributeName="x" from="-${width}" to="${width}" dur="1s" repeatCount="indefinite" />
    </svg>
  `;

  if (typeof window !== 'undefined') {
    return `data:image/svg+xml;base64,${btoa(svg)}`;
  } else {
    return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
  }
}

// Performance measurement utilities
export class PerformanceTimer {
  private marks: Map<string, number> = new Map();

  mark(name: string): void {
    this.marks.set(name, performance.now());
    
    if (typeof window !== 'undefined' && window.performance && 'mark' in window.performance) {
      performance.mark(name);
    }
  }

  measure(name: string, startMark: string, endMark?: string): number {
    const startTime = this.marks.get(startMark);
    const endTime = endMark ? this.marks.get(endMark) : performance.now();
    
    if (startTime === undefined || endTime === undefined) {
      console.warn(`Invalid marks for measurement ${name}`);
      return 0;
    }

    const duration = endTime - startTime;
    
    if (typeof window !== 'undefined' && window.performance && 'measure' in window.performance) {
      try {
        performance.measure(name, startMark, endMark);
      } catch (e) {
        console.warn('Performance measure failed:', e);
      }
    }

    return duration;
  }

  clear(): void {
    this.marks.clear();
    
    if (typeof window !== 'undefined' && window.performance && 'clearMarks' in window.performance) {
      performance.clearMarks();
      performance.clearMeasures();
    }
  }
}

// Global performance timer instance
export const performanceTimer = new PerformanceTimer();

// Component performance wrapper
export function withPerformanceTracking<P extends object>(
  Component: React.ComponentType<P>,
  componentName: string
) {
  const WrappedComponent = (props: P) => {
    useEffect(() => {
      performanceTimer.mark(`${componentName}-mount-start`);
      
      return () => {
        performanceTimer.mark(`${componentName}-unmount`);
        const mountDuration = performanceTimer.measure(
          `${componentName}-mount-duration`,
          `${componentName}-mount-start`,
          `${componentName}-unmount`
        );
        
        if (mountDuration > 100) { // Log if component takes more than 100ms
          console.log(`${componentName} mount duration:`, mountDuration.toFixed(2), 'ms');
        }
      };
    }, []);

    return <Component {...props} />;
  };

  WrappedComponent.displayName = `withPerformanceTracking(${componentName})`;
  return WrappedComponent;
}

// Resource loading utilities
export function loadScript(src: string, async = true, defer = false): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      resolve();
      return;
    }

    // Check if script already exists
    const existingScript = document.querySelector(`script[src="${src}"]`);
    if (existingScript) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = async;
    script.defer = defer;
    
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    
    document.head.appendChild(script);
  });
}

// Lazy load component with intersection observer
export function lazyLoadComponent<P = Record<string, unknown>>(
  importFunc: () => Promise<{ default: React.ComponentType<P> }>,
  fallback?: React.ComponentType
) {
  const LazyComponent = React.lazy(importFunc);
  
  return function LazyLoadedComponent(props: P) {
    const [shouldLoad, setShouldLoad] = useState(false);
    const [elementRef, isIntersecting] = useIntersectionObserver({
      threshold: 0.1,
      rootMargin: '100px',
    });

    useEffect(() => {
      if (isIntersecting) {
        setShouldLoad(true);
      }
    }, [isIntersecting]);

    if (!shouldLoad) {
      return (
        <div ref={elementRef} className="min-h-[200px] flex items-center justify-center">
          {fallback ? React.createElement(fallback) : <div>Loading...</div>}
        </div>
      );
    }

    return (
      <React.Suspense fallback={fallback ? React.createElement(fallback) : <div>Loading...</div>}>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <LazyComponent {...(props as any)} />
      </React.Suspense>
    );
  };
}

// Memory usage monitoring
export function monitorMemoryUsage() {
  if (typeof window === 'undefined' || !('memory' in performance)) {
    return null;
  }

  const memory = (performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
  
  if (!memory) {
    return null;
  }
  
  return {
    usedJSHeapSize: memory.usedJSHeapSize,
    totalJSHeapSize: memory.totalJSHeapSize,
    jsHeapSizeLimit: memory.jsHeapSizeLimit,
    usage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100,
  };
}

// FPS monitoring
export function createFPSMonitor() {
  let fps = 0;
  let lastTime = performance.now();
  let frames = 0;

  function tick() {
    frames++;
    const now = performance.now();
    
    if (now >= lastTime + 1000) {
      fps = Math.round((frames * 1000) / (now - lastTime));
      frames = 0;
      lastTime = now;
    }
    
    requestAnimationFrame(tick);
  }

  tick();

  return () => fps;
}

// Bundle size analyzer utilities
export function analyzeBundle() {
  if (typeof window === 'undefined') return;

  const resourceSizes = performance
    .getEntriesByType('resource')
    .filter((resource: PerformanceResourceTiming) => 
      resource.name.includes('.js') || resource.name.includes('.css')
    )
    .map((resource: PerformanceResourceTiming) => ({
      name: resource.name.split('/').pop(),
      size: resource.transferSize,
      type: resource.name.includes('.js') ? 'js' : 'css',
      duration: Math.round(resource.duration),
    }))
    .sort((a, b) => b.size - a.size);

  console.table(resourceSizes);
  
  const totalSize = resourceSizes.reduce((sum, resource) => sum + resource.size, 0);
  console.log(`Total bundle size: ${(totalSize / 1024).toFixed(2)} KB`);
}

// Progressive enhancement utilities
export function supportsWebP(): boolean {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
}

export function supportsAVIF(): boolean {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  
  return canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0;
}

// Connection speed detection
export function getConnectionSpeed() {
  if (typeof navigator === 'undefined' || !('connection' in navigator)) {
    return 'unknown';
  }

  const connection = (navigator as Navigator & { connection?: { effectiveType?: string; downlink?: number } }).connection;
  
  if (connection?.effectiveType) {
    return connection.effectiveType; // '4g', '3g', '2g', 'slow-2g'
  }
  
  if (connection?.downlink) {
    if (connection.downlink >= 10) return '4g';
    if (connection.downlink >= 1.5) return '3g';
    if (connection.downlink >= 0.6) return '2g';
    return 'slow-2g';
  }
  
  return 'unknown';
}

// Save data mode detection
export function isSaveDataMode(): boolean {
  if (typeof navigator === 'undefined' || !('connection' in navigator)) {
    return false;
  }

  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  return connection?.saveData === true;
}

// Critical resource loading
export function loadCriticalResources(resources: string[]) {
  if (typeof window === 'undefined') return;

  resources.forEach(resource => {
    const link = document.createElement('link');
    
    if (resource.endsWith('.css')) {
      link.rel = 'stylesheet';
      link.href = resource;
    } else if (resource.endsWith('.js')) {
      link.rel = 'modulepreload';
      link.href = resource;
    } else {
      link.rel = 'prefetch';
      link.href = resource;
    }
    
    document.head.appendChild(link);
  });
}
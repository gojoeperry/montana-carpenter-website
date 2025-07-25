'use client';

import { useEffect } from 'react';
import { initAnalytics } from '@/lib/analytics';

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  useEffect(() => {
    // Initialize analytics after the component mounts
    initAnalytics();
  }, []);

  return <>{children}</>;
}
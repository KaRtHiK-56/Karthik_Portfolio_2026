import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Component that tracks page views in Google Analytics on every route change.
 */
export function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    
    if (measurementId && window.gtag) {
      window.gtag('config', measurementId, {
        page_path: location.pathname + location.search,
      });
      
      // Log for debugging in development (optional)
      if (import.meta.env.DEV) {
        console.log(`[GA4] Page View Tracked: ${location.pathname}`);
      }
    }
  }, [location]);

  return null;
}

// Add gtag to the window object for TypeScript
declare global {
  interface Window {
    gtag: (command: string, id: string, config?: any) => void;
    dataLayer: any[];
  }
}

import { useCallback, useState } from 'react';
import { getTracking } from '../api/trackingApi';
import { UseTrackingState } from '../types/tracking';

export const useTracking = () => {
  const [state, setState] = useState<UseTrackingState>({
    data: null,
    loading: false,
    error: null,
  });

  const searchTracking = useCallback(async (trackingCode: string) => {
    if (!trackingCode.trim()) {
      setState({ data: null, loading: false, error: 'Please enter a tracking code' });
      return;
    }

    setState({ data: null, loading: true, error: null });

    try {
      const data = await getTracking(trackingCode.trim());
      setState({ data, loading: false, error: null });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to fetch tracking data';
      setState({ data: null, loading: false, error: errorMessage });
    }
  }, []);

  const clearResults = () => {
    setState({ data: null, loading: false, error: null });
  };

  return {
    ...state,
    searchTracking,
    clearResults,
  };
};
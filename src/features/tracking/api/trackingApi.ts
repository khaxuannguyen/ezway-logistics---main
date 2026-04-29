import axiosClient from '../../../api/axiosClient';
import { TrackingResponse, TrackingData, TrackingEvent } from '../types/tracking';

export const getTracking = async (trackingCode: string): Promise<TrackingData> => {
  const response = await axiosClient.get<TrackingResponse>(`/get-tracking?code=${trackingCode}`);

  if (response.data.status !== 200) {
    throw new Error(response.data.message || 'Failed to fetch tracking data');
  }

  const { package_code, package_tracking_code, carrier_code, trackings } = response.data;

  const safeTrackings = Array.isArray(trackings) ? trackings : [];

  const normalizedEvents: TrackingEvent[] = safeTrackings.map((event) => ({
    time: event?.time ?? '',
    location: event?.location ?? '',
    title: event?.title ?? 'Unknown',
  }));

  // Sort events by time, newest first
  const sortedEvents = normalizedEvents.sort((a: TrackingEvent, b: TrackingEvent) => new Date(b.time).getTime() - new Date(a.time).getTime());

  const currentStatus = sortedEvents[0]?.title || 'Unknown';
  const origin = sortedEvents[sortedEvents.length - 1]?.location || 'Unknown';
  const destination = sortedEvents[0]?.location || 'Unknown';

  return {
    packageCode: package_code || 'N/A',
    trackingCode: package_tracking_code || trackingCode,
    carrierCode: carrier_code || 'unknown',
    events: sortedEvents,
    currentStatus,
    origin,
    destination,
  };
};
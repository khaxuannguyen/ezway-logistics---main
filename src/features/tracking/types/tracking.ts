export interface TrackingResponse {
  status: number;
  message: string;
  package_code: string;
  package_tracking_code: string;
  carrier_code: string;
  trackings: TrackingEvent[];
}

export interface TrackingEvent {
  time: string;
  location: string;
  title: string;
}

export interface TrackingData {
  packageCode: string;
  trackingCode: string;
  carrierCode: string;
  events: TrackingEvent[];
  currentStatus: string;
  origin?: string;
  destination?: string;
  estimatedDelivery?: string;
}

export interface TrackingFormData {
  trackingCode: string;
}

export interface UseTrackingState {
  data: TrackingData | null;
  loading: boolean;
  error: string | null;
}
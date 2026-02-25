import React from "react";
import { TrackingSummary } from "./TrackingSummary";
import { ShippingInfo } from "./ShippingInfo";
import { TrackingTimeline } from "./TrackingTimeline";
import { TrackingData } from "../types/tracking";

interface TrackingResultsProps {
  data: TrackingData;
}

export const TrackingResults: React.FC<TrackingResultsProps> = ({ data }) => {
  return (
    <div id="tracking-results" className="space-y-6 mt-8">
      <TrackingSummary data={data} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ShippingInfo data={data} />
        <TrackingTimeline events={data.events} />
      </div>
    </div>
  );
};

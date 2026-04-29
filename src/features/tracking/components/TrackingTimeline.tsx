import React from "react";
import { MapPin, Clock } from "lucide-react";
import { TrackingEvent } from "../types/tracking";

interface TrackingTimelineProps {
  events: TrackingEvent[];
}

export const TrackingTimeline: React.FC<TrackingTimelineProps> = ({
  events,
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  const getStatusColor = (title: string, isLatest: boolean) => {
    if (isLatest) return "border-brand-blue bg-blue-50";

    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes("delivered")) return "border-green-500 bg-green-50";
    if (lowerTitle.includes("transit") || lowerTitle.includes("in transit"))
      return "border-blue-500 bg-blue-50";
    if (lowerTitle.includes("pending") || lowerTitle.includes("processing"))
      return "border-yellow-500 bg-yellow-50";
    return "border-gray-300 bg-gray-50";
  };

  const getStatusTextColor = (title: string, isLatest: boolean) => {
    if (isLatest) return "text-brand-blue";

    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes("delivered")) return "text-green-700";
    if (lowerTitle.includes("transit") || lowerTitle.includes("in transit"))
      return "text-blue-700";
    if (lowerTitle.includes("pending") || lowerTitle.includes("processing"))
      return "text-yellow-700";
    return "text-gray-700";
  };

  return (
    <div className="bg-white rounded-lg shadow-card p-6 border">
      <h3 className="text-xl font-bold text-brand-navy mb-6">
        Lịch sử theo dõi
      </h3>

      {(!events || events.length === 0) && (
        <div className="text-sm text-gray-600">Chưa có sự kiện theo dõi.</div>
      )}

      <div className="space-y-4">
        {events.map((event, index) => {
          const isLatest = index === 0;
          return (
            <div
              key={index}
              className={`relative flex items-start gap-4 p-4 rounded-lg border-2 transition-all duration-500 animate-fade-in-up ${getStatusColor(event.title, isLatest)}`}
            >
              {/* Timeline line */}
              {index < events.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-8 bg-gray-300"></div>
              )}

              {/* Status icon */}
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${isLatest ? "bg-brand-blue text-white" : "bg-white border-2 border-gray-300"}`}
              >
                {isLatest ? (
                  <MapPin size={20} />
                ) : (
                  <Clock size={16} className="text-gray-500" />
                )}
              </div>

              {/* Event content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h4
                    className={`font-semibold ${getStatusTextColor(event.title, isLatest)}`}
                  >
                    {event.title}
                  </h4>
                  <time className="text-sm text-gray-600 whitespace-nowrap">
                    {formatDate(event.time)}
                  </time>
                </div>
                {event.location && (
                  <p className="text-gray-700 mt-1">
                    <MapPin size={16} className="inline mr-1" />
                    {event.location}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

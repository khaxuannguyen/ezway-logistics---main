import React from "react";
import { MapPin, Truck, Package } from "lucide-react";
import { TrackingData } from "../types/tracking";

interface TrackingSummaryProps {
  data: TrackingData;
}

export const TrackingSummary: React.FC<TrackingSummaryProps> = ({ data }) => {
  const getStatusColor = (status: string) => {
    const lowerStatus = status.toLowerCase();
    if (lowerStatus.includes("delivered")) return "text-green-600 bg-green-100";
    if (lowerStatus.includes("transit") || lowerStatus.includes("in transit"))
      return "text-blue-600 bg-blue-100";
    if (lowerStatus.includes("pending") || lowerStatus.includes("processing"))
      return "text-yellow-600 bg-yellow-100";
    return "text-gray-600 bg-gray-100";
  };

  return (
    <div className="bg-white rounded-lg shadow-card p-6 border">
      <h3 className="text-xl font-bold text-brand-navy mb-4">
        Tóm tắt theo dõi
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex items-center gap-3">
          <Package className="text-brand-blue" size={24} />
          <div>
            <p className="text-sm text-gray-600">Mã tracking</p>
            <p className="font-semibold text-brand-navy">{data.trackingCode}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Truck className="text-brand-blue" size={24} />
          <div>
            <p className="text-sm text-gray-600">Nhà vận chuyển</p>
            <p className="font-semibold text-brand-navy capitalize">
              {data.carrierCode.replace("-", " ")}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div
            className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(data.currentStatus)}`}
          >
            {data.currentStatus}
          </div>
        </div>

        {(data.origin || data.destination) && (
          <div className="flex items-center gap-3">
            <MapPin className="text-brand-blue" size={24} />
            <div>
              <p className="text-sm text-gray-600">
                {data.origin && data.destination
                  ? `${data.origin} → ${data.destination}`
                  : data.origin
                    ? `Từ: ${data.origin}`
                    : `Đến: ${data.destination}`}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

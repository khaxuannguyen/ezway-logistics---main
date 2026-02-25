import React from "react";
import { Package, Truck, Clock } from "lucide-react";
import { TrackingData } from "../types/tracking";

interface ShippingInfoProps {
  data: TrackingData;
}

export const ShippingInfo: React.FC<ShippingInfoProps> = ({ data }) => {
  const getStatusBadgeColor = (status: string) => {
    const lowerStatus = status.toLowerCase();
    if (lowerStatus.includes("delivered")) return "bg-green-100 text-green-800";
    if (lowerStatus.includes("transit") || lowerStatus.includes("in transit"))
      return "bg-blue-100 text-blue-800";
    if (lowerStatus.includes("pending") || lowerStatus.includes("processing"))
      return "bg-yellow-100 text-yellow-800";
    return "bg-gray-100 text-gray-800";
  };

  return (
    <div className="bg-white rounded-lg shadow-card p-6 border">
      <h3 className="text-xl font-bold text-brand-navy mb-4">
        Thông tin vận chuyển
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="flex justify-center mb-2">
            <Package className="text-brand-blue" size={32} />
          </div>
          <p className="text-sm text-gray-600 mb-1">Mã kiện hàng</p>
          <p className="font-semibold text-brand-navy">{data.packageCode}</p>
        </div>

        <div className="text-center">
          <div className="flex justify-center mb-2">
            <Truck className="text-brand-blue" size={32} />
          </div>
          <p className="text-sm text-gray-600 mb-1">Nhà vận chuyển</p>
          <p className="font-semibold text-brand-navy capitalize">
            {data.carrierCode.replace("-", " ")}
          </p>
        </div>

        <div className="text-center">
          <div className="flex justify-center mb-2">
            <Clock className="text-brand-blue" size={32} />
          </div>
          <p className="text-sm text-gray-600 mb-1">Số sự kiện</p>
          <p className="font-semibold text-brand-navy">
            {data.events?.length ?? 0}
          </p>
        </div>
      </div>

      <div className="mt-6 text-center">
        <span
          className={`inline-flex px-4 py-2 rounded-full text-sm font-medium ${getStatusBadgeColor(data.currentStatus)}`}
        >
          {data.currentStatus}
        </span>
      </div>
    </div>
  );
};

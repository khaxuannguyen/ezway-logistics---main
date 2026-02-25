import React, { useState, FormEvent, useEffect } from "react";
import { Search } from "lucide-react";

interface TrackingFormProps {
  onSearch: (trackingCode: string) => void;
  loading: boolean;
  initialValue?: string;
}

export const TrackingForm: React.FC<TrackingFormProps> = ({
  onSearch,
  loading,
  initialValue = "",
}) => {
  const [trackingCode, setTrackingCode] = useState(initialValue);

  useEffect(() => {
    setTrackingCode(initialValue);
  }, [initialValue]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(trackingCode);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            value={trackingCode}
            onChange={(e) => setTrackingCode(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Nhập mã tracking..."
            className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-lg focus:border-brand-blue focus:outline-none transition-colors"
            disabled={loading}
          />
        </div>
        <button
          type="submit"
          disabled={loading || !trackingCode.trim()}
          className="px-8 py-4 bg-brand-blue hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 min-w-[140px]"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <>
              <Search size={20} />
              Tra cứu
            </>
          )}
        </button>
      </form>
    </div>
  );
};

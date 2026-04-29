import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { TrackingForm } from "./components/TrackingForm";
import { TrackingResults } from "./components/TrackingResults";
import { useTracking } from "./hooks/useTracking";

export const TrackingPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const codeFromUrl = (searchParams.get("code") ?? "").trim();
  const { data, loading, error, searchTracking } = useTracking();

  useEffect(() => {
    if (!codeFromUrl) return;
    searchTracking(codeFromUrl);
  }, [codeFromUrl, searchTracking]);

  useEffect(() => {
    if (loading) return;
    if (!data && !error) return;

    const scrollTimer = setTimeout(() => {
      document.getElementById("tracking-results")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);

    return () => clearTimeout(scrollTimer);
  }, [data, error, loading]);

  const handleSearch = (trackingCode: string) => {
    const code = trackingCode.trim();
    if (!code) return;
    setSearchParams({ code });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-brand-navy pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Tra Cứu Hành Trình Đơn Hàng
          </h1>
          <p className="text-slate-300 mb-8 text-sm md:text-base">
            Nhập mã vận đơn để xem trạng thái mới nhất và toàn bộ lịch sử giao
            vận.
          </p>

          <TrackingForm
            onSearch={handleSearch}
            loading={loading}
            initialValue={codeFromUrl}
          />

          {error && (
            <p id="tracking-results" className="text-red-200 mt-4 text-center">
              {error}
            </p>
          )}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">
        {!loading && !data && !error && (
          <div
            id="tracking-results"
            className="bg-white rounded-2xl border border-slate-200 p-8 text-center text-slate-600 shadow-soft"
          >
            Vui lòng nhập mã vận đơn để bắt đầu tra cứu.
          </div>
        )}

        {loading && (
          <div
            id="tracking-results"
            className="bg-white rounded-2xl border border-slate-200 p-8 text-center text-brand-blue shadow-soft"
          >
            <div className="inline-flex items-center gap-3">
              <div className="w-5 h-5 border-2 border-brand-blue border-t-transparent rounded-full animate-spin" />
              <span>Đang tải thông tin vận đơn...</span>
            </div>
          </div>
        )}

        {data && <TrackingResults data={data} />}
      </section>
    </div>
  );
};

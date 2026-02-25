import React, { useState, useEffect } from "react";
import { useLocation, Link, useSearchParams } from "react-router-dom";
import { Section, Button, Card } from "../components/UiElements";
import {
  Search,
  Package,
  MapPin,
  CheckCircle2,
  Truck,
  AlertCircle,
  Clock,
  Box,
  Layers,
  FileText,
  Copy,
  ArrowRight,
  Plane,
  Anchor,
  HelpCircle,
  ChevronRight,
} from "lucide-react";
import { Hero } from "../components/Hero";
import { TrackingForm, TrackingResults } from "../features/tracking";
import { useTracking } from "../features/tracking/hooks/useTracking";

export const Home: React.FC = () => {
  const navigate = useNavigate();

  // Redirect to unified tracking page (URL-driven)
  const handleSearch = (trackingCode: string) => {
    const code = trackingCode.trim();
    if (!code) return;
    navigate(`/tra-cuu?code=${encodeURIComponent(code)}`);
  };

  return (
    <>
      {/* Hero Section with Tracking */}
      <div className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-brand-blue/6 via-white to-surface overflow-hidden py-16 lg:py-24">
        {/* Background elements from Hero */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {/* ...existing decorations... */}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white border border-blue-100 rounded-full px-4 py-2 text-brand-blue text-sm font-bold shadow-sm animate-fade-in-up">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent/60 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="tracking-wide text-xs uppercase">
                Giải pháp Logistics Toàn Cầu
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-brand-navy tracking-tight">
              <span className="block">Vận chuyển</span>
              <span className="block mb-6">Quốc Tế</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-accent text-2xl md:text-3xl lg:text-4xl mt-3 pb-1 leading-[1.3]">
                Đơn giản - An toàn & Tiết Kiệm
              </span>
            </h1>

            <p className="text-base lg:text-lg text-body max-w-xl mx-auto leading-[1.7] mb-10">
              Dịch vụ mua hộ và vận chuyển chuyên nghiệp. Tỷ giá tốt nhất thị
              trường, cam kết bảo hiểm 100% giá trị hàng hóa.
            </p>

            {/* Tracking Form - now only redirects to unified tracking page */}
            <div className="max-w-2xl mx-auto">
              <TrackingForm onSearch={handleSearch} loading={false} />
            </div>

            {/* TrackingResults removed from Home - single source of truth on /tra-cuu */}
          </div>
        </div>
      </div>

      {/* Trusted By / Partners Strip */}
      <div className="border-b border-slate-100 bg-white py-12 overflow-hidden relative">
        {/* ...existing partner layout... */}
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-center text-sm md:text-base font-bold text-slate-400 uppercase tracking-widest mb-10">
            Đối tác vận chuyển & Thương mại điện tử hàng đầu
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {PARTNERS.map((p, i) => (
              <a
                key={i}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center transition-all duration-300 filter grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110 hover:drop-shadow-xl p-2"
                title={`Truy cập ${p.name}`}
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  className={`${p.h} w-auto object-contain`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <Section id="services" bg="light">
        <SectionHeader
          title="Dịch vụ Logistics Toàn Diện"
          subtitle="Giải pháp chuyên nghiệp"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {SERVICES.map((s, idx) => (
            <Card
              key={idx}
              className="h-full group border-t-4 border-t-transparent hover:border-t-primary transition-all"
            >
              <div
                className={`w-16 h-16 ${s.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-sm`}
              >
                <s.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-primary transition-colors">
                {s.title}
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                {s.desc}
              </p>
              <div className="mt-auto">
                <Link
                  to={s.link}
                  className="inline-flex items-center text-primary font-bold hover:text-accent transition-colors group-hover:translate-x-2 duration-300"
                >
                  Xem chi tiết <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* ...rest of Home page unchanged ... */}
    </>
  );
};

export const Tracking: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const code = searchParams.get("code") ?? "";
  const { data, loading, error, searchTracking, clearResults } = useTracking();

  // When URL query param changes -> trigger fetch
  useEffect(() => {
    if (code && code.trim()) {
      searchTracking(code.trim());
    } else {
      clearResults();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  // Scroll to results when data arrives
  useEffect(() => {
    if (data) {
      setTimeout(() => {
        document.getElementById("tracking-results")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [data]);

  // Handler used by TrackingForm to update URL (drives the state)
  const handleSearch = (trackingCode: string) => {
    const value = trackingCode.trim();
    if (!value) return;
    setSearchParams({ code: value });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero / Search area */}
      <div className="bg-brand-navy pt-28 pb-20 px-6 relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-accent text-xs font-bold uppercase tracking-wider mb-4">
            Real-time Tracking System
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
            Tra Cứu Hành Trình Đơn Hàng
          </h1>

          <div className="relative group max-w-2xl mx-auto shadow-2xl rounded-2xl animate-fade-in-up delay-200">
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
              {/* search icon is inside TrackingForm */}
            </div>

            {/* Unified form - updates URL which triggers fetch */}
            <TrackingForm onSearch={handleSearch} loading={loading} />
          </div>

          <p className="text-slate-400 mt-4 text-sm">
            Hệ thống hỗ trợ tra cứu vận đơn: EZWAY, DHL, FedEx, UPS, USPS.
          </p>
        </div>
      </div>

      {/* Results Section */}
      <Section className="min-h-[400px] -mt-16 relative z-20 pt-6">
        {error && (
          <div className="max-w-2xl mx-auto text-center p-8 bg-white rounded-3xl border border-red-100 shadow-xl">
            <h3 className="text-2xl font-bold text-brand-navy mb-3">
              Không tìm thấy vận đơn
            </h3>
            <p className="text-slate-600 mb-6">{error}</p>
          </div>
        )}

        {!data && !loading && !error && (
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 text-center shadow-card border border-slate-100">
            <h3 className="text-xl font-bold text-brand-navy mb-2">
              Chưa có thông tin tra cứu
            </h3>
            <p className="text-slate-500 max-w-md mx-auto">
              Vui lòng nhập mã vận đơn vào ô tìm kiếm phía trên để xem chi tiết
              hành trình đơn hàng của bạn.
            </p>
          </div>
        )}

        {loading && (
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 text-center shadow-card border border-slate-100">
            <div className="text-lg font-semibold text-brand-navy">
              Đang tìm kiếm...
            </div>
          </div>
        )}

        {data && <TrackingResults data={data} />}
      </Section>
    </div>
  );
};

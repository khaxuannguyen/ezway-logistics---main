import React from "react";
import { Link } from "react-router-dom";
import {
  Plane,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-slate-400 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-3">
              <div className="p-1.5 bg-brand-blue rounded-lg text-white">
                <Plane className="h-5 w-5" />
              </div>
              <div className="flex flex-col -space-y-0.5">
                <span className="text-2xl font-black tracking-tight text-white leading-none">
                  EZWAY
                </span>
                <span className="text-[10px] tracking-[0.15em] font-bold uppercase text-slate-500">
                  Moving Made Easy
                </span>
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm">
              Giải pháp vận chuyển quốc tế toàn diện. Chuyên tuyến Việt Nam đi
              Mỹ, Úc, Canada, Châu Âu và Dịch vụ Mua hộ hàng Mỹ chuyên nghiệp.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all duration-300 group"
                >
                  <Icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">
              Liên kết nhanh
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Mua hộ hàng Mỹ", path: "/mua-ho-hang-my" },
                { label: "Dịch vụ vận chuyển", path: "/dich-vu" },
                { label: "Bảng giá cước", path: "/gia-cuoc" },
                { label: "Theo dõi đơn hàng", path: "/tra-cuu" },
                { label: "Tin tức & Sự kiện", path: "/tin-tuc" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="hover:text-accent transition-colors flex items-center group text-sm"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-accent" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Dịch vụ</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">
                Gửi hàng đi Mỹ, Úc, Canada
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Vận chuyển đi Châu Âu
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Mua hộ eBay, Amazon (Mỹ)
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Dịch vụ Door-to-Door
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Thông quan hải quan
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Liên hệ</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-accent shrink-0 group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">
                  123 Nguyễn Văn Linh, Quận 7, TP. Hồ Chí Minh
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone className="h-5 w-5 text-accent shrink-0 group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors font-bold">
                  1900 1234 567
                </span>
                <a
                  href="https://wa.me/19001234567"
                  target="_blank"
                  rel="noreferrer"
                  className="ml-3 inline-flex items-center gap-2 text-sm text-accent hover:text-white transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M12.002 2.002c-5.523 0-10 4.477-10 10 0 1.773.43 3.43 1.18 4.92L2 22l4.24-1.12A9.966 9.966 0 0012 22c5.523 0 10-4.477 10-10s-4.477-10-10-10z"
                      fill="#22c55e"
                    />
                    <path
                      d="M17.47 15.302c-.23.64-1.29 1.22-1.77 1.32-.47.1-1.02.15-2.2-.16-3.05-.86-5.02-3.16-5.17-3.31-.15-.15-1.23-1.23-1.23-2.97 0-1.74 1.13-2.6 1.52-2.96.39-.36.86-.46 1.16-.46.3 0 .6 0 .86.01.28.01.64-.11 1-.11.36 0 .89-.12 1.37.84.47.96 1.56 3.3 1.7 3.54.14.24.23.53.06.85-.17.33-.26.55-.52.77-.26.22-.56.48-.8.74-.24.26-.5.54-.22.96.28.42 1.23 2.03 2.64 3.28 1.15 1 2.05 1.37 2.33 1.52.28.15.45.12.62-.07.17-.19.73-.85.93-1.22.2-.37.4-.34.68-.27.28.07 1.77.84 2.07.99.3.15.5.24.57.37.07.13.07.76-.16 1.4z"
                      fill="#fff"
                    />
                  </svg>
                  Chat
                </a>
              </li>
              <li className="flex items-center space-x-3 group">
                <Mail className="h-5 w-5 text-accent shrink-0 group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">
                  support@ezway.vn
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs gap-4">
          <p>
            &copy; {new Date().getFullYear()} EZWAY Logistics. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Điều khoản sử dụng
            </a>
            <a href="#" className="hover:text-white">
              Chính sách bảo mật
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

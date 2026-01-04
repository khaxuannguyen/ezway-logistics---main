import React from "react";
import { Phone, MessageCircle } from "lucide-react";

export const FloatingContact: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
      {/* Zalo Button */}
      <a
        href="https://zalo.me/0909123456"
        target="_blank"
        rel="noreferrer"
        className="group flex items-center justify-center w-14 h-14 bg-blue-600 rounded-full shadow-lg shadow-blue-600/30 hover:scale-110 transition-transform duration-300 relative"
        title="Chat Zalo"
      >
        <span className="absolute right-full mr-3 bg-white text-slate-700 text-xs font-bold px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat Zalo
        </span>
        <div className="text-white font-bold text-xl">Z</div>
      </a>

      {/* Hotline Button with Pulse Effect */}
      <a
        href="tel:19001234567"
        className="group flex items-center justify-center w-14 h-14 bg-brand-teal rounded-full shadow-lg shadow-teal-500/30 hover:scale-110 transition-transform duration-300 relative"
        title="Gọi Hotline"
      >
        {/* Ping Animation */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75 animate-ping"></span>

        <span className="absolute right-full mr-3 bg-white text-slate-700 text-xs font-bold px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          1900 1234 567
        </span>
        <Phone className="w-6 h-6 text-white relative z-10" />
      </a>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/19001234567"
        target="_blank"
        rel="noreferrer"
        className="group flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg shadow-green-500/30 hover:scale-110 transition-transform duration-300 relative"
        title="Chat WhatsApp"
      >
        <span className="absolute right-full mr-3 bg-white text-slate-700 text-xs font-bold px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat WhatsApp
        </span>
        <svg
          className="w-6 h-6 text-white"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M20.52 3.48A11.91 11.91 0 0012 0C5.373 0 .036 4.92 0 11.02 0.04 13.62.9 15.98 2.44 17.96L0 24l6.37-2.1A11.9 11.9 0 0012 24c6.627 0 11.96-4.92 12-11.02 0-1.85-.43-3.58-1.48-5.5z"
            fill="#fff"
            opacity="0.02"
          />
          <path
            d="M12.002 2.002c-5.523 0-10 4.477-10 10 0 1.773.43 3.43 1.18 4.92L2 22l4.24-1.12A9.966 9.966 0 0012 22c5.523 0 10-4.477 10-10s-4.477-10-10-10zm5.47 13.3c-.23.64-1.29 1.22-1.77 1.32-.47.1-1.02.15-2.2-.16-3.05-.86-5.02-3.16-5.17-3.31-.15-.15-1.23-1.23-1.23-2.97 0-1.74 1.13-2.6 1.52-2.96.39-.36.86-.46 1.16-.46.3 0 .6 0 .86.01.28.01.64-.11 1-.11.36 0 .89-.12 1.37.84.47.96 1.56 3.3 1.7 3.54.14.24.23.53.06.85-.17.33-.26.55-.52.77-.26.22-.56.48-.8.74-.24.26-.5.54-.22.96.28.42 1.23 2.03 2.64 3.28 1.15 1 2.05 1.37 2.33 1.52.28.15.45.12.62-.07.17-.19.73-.85.93-1.22.2-.37.4-.34.68-.27.28.07 1.77.84 2.07.99.3.15.5.24.57.37.07.13.07.76-.16 1.4z"
            fill="#fff"
          />
        </svg>
      </a>
    </div>
  );
};

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CLIENT_INFO } from '../data/beverages';

export const FloatingWhatsApp: React.FC = () => {
  const whatsAppUrl = `https://wa.me/${CLIENT_INFO.whatsappRaw}?text=${encodeURIComponent(
    "Assalam-o-Alaikum Kareem's Limca & Milk Soda! I would like to order fresh drinks in Rahim Yar Khan."
  )}`;

  return (
    <aside aria-label="WhatsApp quick order" className="fixed bottom-6 right-6 z-40 select-none">
      <a
        href={whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp (+92 300 7401447)"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.55)] hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Pulsing ring indicator */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping" />

        <MessageCircle className="w-7 h-7 fill-current relative z-10" />

        {/* Floating Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#122411] text-white text-xs font-bold py-1.5 px-3 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Order on WhatsApp
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-[#122411]" />
        </div>
      </a>
    </aside>
  );
};

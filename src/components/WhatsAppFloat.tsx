import React from 'react';
import { MessageCircle } from 'lucide-react';
import { openWhatsAppDirect, KHUZAMA_WHATSAPP_NUMBER } from '../utils/whatsapp';

export const WhatsAppFloat: React.FC = () => {
  const handleWhatsAppClick = () => {
    const text = `مرحباً خزامى، اطلعت على موقعكم وأرغب في الاستفسار عن تنظيم فعالية جديدة.`;
    const url = `https://wa.me/${KHUZAMA_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    openWhatsAppDirect(url);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center group">
      {/* توجيه أو نص صغير يظهر عند الهوفر */}
      <span className="absolute left-16 bg-[#180F29] text-white text-xs px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg whitespace-nowrap border border-[#C59CE4]/30 font-heading">
        تواصل معنا عبر الواتساب
      </span>

      {/* زر الأيقونة بدون حركات مزعجة تتداخل مع الظل */}
      <button
        onClick={handleWhatsAppClick}
        aria-label="تواصل عبر الواتساب"
        className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-[#25D366] to-[#20ba5a] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer border border-white/30"
      >
        <MessageCircle className="w-7 h-7 text-white fill-current" />
      </button>
    </div>
  );
};
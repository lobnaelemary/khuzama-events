import React from 'react';
import { X, ChevronRight, ChevronLeft, MessageCircle } from 'lucide-react';
import { openWhatsAppDirect, KHUZAMA_WHATSAPP_NUMBER } from '../utils/whatsapp';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  caption?: string;
  onNext?: () => void;
  onPrev?: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  caption,
  onNext,
  onPrev
}) => {
  if (!isOpen) return null;

  const handleLightboxWhatsApp = () => {
    const text = `مرحباً خزامى، اطلعت على هذا المشهد في معرض الأعمال وأرغب في مناقشة تجهيز فعالية مشابهة.`;
    const url = `https://wa.me/${KHUZAMA_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    openWhatsAppDirect(url);
  };

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
      dir="rtl"
    >
      {/* زر الإغلاق العلوي */}
      <button 
        onClick={onClose}
        className="absolute top-6 left-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-[#3D295C] text-white flex items-center justify-center transition-all cursor-pointer border border-white/20 shadow-xl hover:scale-105"
        aria-label="إغلاق"
      >
        <X className="w-6 h-6" />
      </button>

      {/* زر التالي (يمين في واجهة RTL) */}
      {onNext && (
        <button 
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute left-4 sm:left-8 z-50 w-14 h-14 rounded-full bg-[#3D295C] text-[#C59CE4] hover:bg-[#C59CE4] hover:text-[#180F29] flex items-center justify-center transition-all duration-300 shadow-2xl cursor-pointer border-2 border-[#C59CE4]/40 hover:scale-110"
          aria-label="التالي"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
      )}

      {/* زر السابق (يسار في واجهة RTL) */}
      {onPrev && (
        <button 
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute right-4 sm:right-8 z-50 w-14 h-14 rounded-full bg-[#3D295C] text-[#C59CE4] hover:bg-[#C59CE4] hover:text-[#180F29] flex items-center justify-center transition-all duration-300 shadow-2xl cursor-pointer border-2 border-[#C59CE4]/40 hover:scale-110"
          aria-label="السابق"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      )}

      {/* محتوى الصورة الرئيسي */}
      <div 
        className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageUrl}
          alt={caption || 'لقطة من أعمال خزامى'}
          referrerPolicy="no-referrer"
          className="max-w-full max-h-[70vh] rounded-2xl object-contain shadow-2xl border border-white/10"
        />

        {caption && (
          <div className="px-6 py-2 rounded-full bg-[#180F29]/90 text-white text-xs sm:text-sm font-medium border border-[#C59CE4]/30 text-center shadow-lg">
            {caption}
          </div>
        )}

        <div>
          <button
            onClick={handleLightboxWhatsApp}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-gradient-to-r from-[#533B78] via-[#432E61] to-[#3D295C] text-white font-bold text-xs sm:text-sm border border-[#C59CE4]/40 shadow-xl hover:border-[#C59CE4] transition-all duration-300 cursor-pointer hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 text-[#C59CE4] shrink-0" />
            <span className="font-heading">ناقش تجهيز هذا المشهد عبر واتساب</span>
          </button>
        </div>
      </div>
    </div>
  );
};
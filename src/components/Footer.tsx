import React from 'react';
import { KhuzamaLogo } from './KhuzamaLogo';
import { PageRoute } from '../types';
import { KHUZAMA_LOCATION, KHUZAMA_WHATSAPP_NUMBER } from '../utils/whatsapp';
import { MessageCircle, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onOpenWhatsAppModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenWhatsAppModal }) => {
  const handleLinkClick = (route: PageRoute) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#09050E] text-slate-300 border-t border-[#C59CE4]/20 pt-16 pb-12 overflow-hidden khuzama-pattern-dark">
      {/* Background Subtle Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#3D295C]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Info & CTA */}
          <div className="space-y-4 lg:col-span-1">
            <KhuzamaLogo variant="white" size="lg" />
            <p className="text-sm text-slate-400 leading-relaxed pt-2">
              شركة سعودية متخصصة في تخطيط وتصميم وتنفيذ الفعاليات والمؤتمرات المتميزة بحس إبداعي وانضباط تشغيلي ميداني.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenWhatsAppModal}
                className="inline-flex items-center justify-center gap-3 px-7 py-3 rounded-full bg-gradient-to-r from-[#533B78] via-[#432E61] to-[#3D295C] text-white font-bold text-xs sm:text-sm border border-[#C59CE4]/40 shadow-lg hover:border-[#C59CE4] hover:shadow-purple-900/50 transition-all duration-300 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#C59CE4]" />
                <span className="font-heading">ابدأ تجهيز فعاليتك</span>
              </button>
            </div>
          </div>

          {/* Column 2: أقسام الموقع الرئيسية */}
          <div>
            <h3 className="text-base font-bold text-white mb-4 font-heading border-r-2 border-[#C59CE4] pr-3">
              أقسام الموقع
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-[#C59CE4] transition-colors flex items-center gap-2 cursor-pointer">
                  <span className="text-[#C59CE4]">›</span> <span>الرئيسية</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('works')} className="hover:text-[#C59CE4] transition-colors flex items-center gap-2 cursor-pointer">
                  <span className="text-[#C59CE4]">›</span> <span>أعمالنا والمشاريع</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('about')} className="hover:text-[#C59CE4] transition-colors flex items-center gap-2 cursor-pointer">
                  <span className="text-[#C59CE4]">›</span> <span>من نحن وحلولنا</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('contact')} className="hover:text-[#C59CE4] transition-colors flex items-center gap-2 cursor-pointer">
                  <span className="text-[#C59CE4]">›</span> <span>تواصل معنا</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: الدعم والسياسات */}
          <div>
            <h3 className="text-base font-bold text-white mb-4 font-heading border-r-2 border-[#C59CE4] pr-3">
              الدعم والسياسات
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleLinkClick('faq')} className="hover:text-[#C59CE4] transition-colors cursor-pointer">
                  الأسئلة الشائعة (FAQ)
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('privacy')} className="hover:text-[#C59CE4] transition-colors cursor-pointer">
                  سياسة الخصوصية
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('terms')} className="hover:text-[#C59CE4] transition-colors cursor-pointer">
                  الشروط والأحكام
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: قنوات التواصل */}
          <div>
            <h3 className="text-base font-bold text-white mb-4 font-heading border-r-2 border-[#C59CE4] pr-3">
              قنوات التواصل
            </h3>
            <div className="text-xs text-slate-400 space-y-2.5 mb-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C59CE4] shrink-0" />
                <span>{KHUZAMA_LOCATION}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C59CE4] shrink-0" />
                <span dir="ltr">+{KHUZAMA_WHATSAPP_NUMBER}</span>
              </div>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              <a href={`https://wa.me/${KHUZAMA_WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-[#3D295C] hover:text-[#C59CE4] hover:border-[#C59CE4] transition-all" title="واتساب"><MessageCircle className="w-3.5 h-3.5" /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-[#3D295C] hover:text-[#C59CE4] hover:border-[#C59CE4] transition-all" title="إنستغرام"><Instagram className="w-3.5 h-3.5" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-[#3D295C] hover:text-[#C59CE4] hover:border-[#C59CE4] transition-all" title="لينكد إن"><Linkedin className="w-3.5 h-3.5" /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-[#3D295C] hover:text-[#C59CE4] hover:border-[#C59CE4] transition-all" title="تويتر"><Twitter className="w-3.5 h-3.5" /></a>
            </div>
          </div>
        </div>

        {/* Bottom Rights & Designly Credit */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="space-y-1 text-center md:text-right">
            <p>جميع الحقوق محفوظة © {new Date().getFullYear()} - مؤسسة خزامى لتنظيم الفعاليات</p>
            <p className="text-slate-500">السجل التجاري رقم: 1010892401 | المملكة العربية السعودية</p>
          </div>
          <div className="text-center">
            <span>موقع صُمِّم بعناية وحب من فريق ديزاينلي </span>
            <a href="https://www.designly-agency.com/" target="_blank" rel="noreferrer" className="text-[#C59CE4] hover:underline font-bold">
              DesignlyAgency
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
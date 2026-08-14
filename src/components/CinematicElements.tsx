import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Camera, Film, ChevronLeft, ChevronRight, MessageCircle, Star } from 'lucide-react';
import { Project } from '../types';

/* 1. Typewriter Effect Component */
interface TypewriterTextProps {
  words: string[];
  className?: string;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({ words, className = '' }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetWord = words[currentWordIndex];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(targetWord.substring(0, currentText.length + 1));
        if (currentText.length === targetWord.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(targetWord.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className={`inline-block font-thamanya ${className}`}>
      {currentText}
      <span className="animate-pulse text-[#C59CE4] inline-block font-extrabold mr-1">|</span>
    </span>
  );
};

/* 2. Aurora Starfield Background Component */
export const AuroraStarfield: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="aurora-bg"></div>
      {[...Array(16)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-[#C59CE4] animate-star-pulse"
          style={{
            top: `${(i * 19) % 95}%`,
            left: `${(i * 23) % 95}%`,
            width: `${(i % 3) * 2 + 2}px`,
            height: `${(i % 3) * 2 + 2}px`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${3 + (i % 3)}s`
          }}
        />
      ))}
    </div>
  );
};

/* 3. 3D Flip Card Component with Clean Soft Hover & Elegant Action Bar */
interface Flip3DCardProps {
  icon?: React.ReactNode;
  frontTitle: string;
  frontSubtitle?: string;
  frontDescription: string;
  backDetails: string[];
  backCtaLabel?: string;
  onBackCtaClick?: () => void;
}

export const Flip3DCard: React.FC<Flip3DCardProps> = ({
  icon,
  frontTitle,
  frontSubtitle,
  frontDescription,
  backDetails,
  backCtaLabel = 'استفسر الآن',
  onBackCtaClick
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="perspective-1000 w-full h-[410px] cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-transform duration-700 ease-out rounded-3xl"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* FRONT FACE */}
        <div 
          style={{ backfaceVisibility: 'hidden' }}
          className="absolute inset-0 w-full h-full bg-white rounded-[32px] p-8 border border-gray-100 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(24,15,41,0.08)] hover:border-[#C59CE4]/40 hover:-translate-y-1.5 transition-all duration-300"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              {icon ? (
                <div className="w-14 h-14 rounded-2xl bg-[#F2ECF7] border border-[#3D295C]/10 text-[#3D295C] flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-105">
                  {icon}
                </div>
              ) : (
                <div className="w-14 h-14 rounded-2xl bg-[#F2ECF7] text-[#3D295C] flex items-center justify-center shadow-inner">
                  <Sparkles className="w-6 h-6 text-[#3D295C]" />
                </div>
              )}
            </div>

            <h3 className="font-thamanya font-bold text-xl text-[#3D295C] pt-1">
              {frontTitle}
            </h3>
            {frontSubtitle && (
              <span className="text-xs font-semibold text-[#3D295C]/80 block">
                {frontSubtitle}
              </span>
            )}
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans line-clamp-4">
              {frontDescription}
            </p>
          </div>

          {/* Action Footer */}
          <div className="pt-2">
            <div className="flex items-center justify-between bg-[#F2ECF7] group-hover:bg-[#EAE0F2] px-4 py-3.5 rounded-2xl transition-all duration-300 shadow-2xs">
              <span className="font-heading text-xs font-bold text-[#3D295C]">استعراض المواصفات التشغيلية</span>
              <div className="w-7 h-7 rounded-full bg-white text-[#3D295C] flex items-center justify-center shadow-2xs transition-transform duration-300 group-hover:-translate-x-1">
                <ChevronLeft className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* BACK FACE */}
        <div 
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          className="absolute inset-0 w-full h-full bg-[#180F29] text-white rounded-[32px] p-8 border border-[#C59CE4]/30 flex flex-col justify-between shadow-2xl khuzama-pattern-dark"
        >
          <div className="space-y-3 overflow-y-auto max-h-[250px] pr-1">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <h4 className="font-thamanya font-bold text-base text-[#C59CE4]">
                المواصفات والخدمات
              </h4>
              <span className="text-[10px] text-white/50">أقلب للرئيسية</span>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/90">
              {backDetails.map((detail, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#C59CE4] shrink-0" />
                  <span className="leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onBackCtaClick?.();
            }}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#533B78] via-[#432E61] to-[#3D295C] text-white font-bold text-xs border border-[#C59CE4]/40 shadow-lg hover:border-[#C59CE4] hover:shadow-[0_0_20px_rgba(197,156,228,0.3)] transition-all cursor-pointer font-heading flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-[#C59CE4]" />
            <span>{backCtaLabel}</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

/* 4. Film Strip Scroll Reel Component */
interface FilmStripReelProps {
  projects: Project[];
  onSelectProject: (p: Project) => void;
  onOpenWhatsAppModal: (title?: string) => void;
}

export const FilmStripReel: React.FC<FilmStripReelProps> = ({
  projects,
  onSelectProject,
  onOpenWhatsAppModal
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const activeProject = projects[currentIndex];

  return (
    <div className="relative bg-[#180F29] text-white py-10 px-4 sm:px-8 rounded-3xl border border-[#C59CE4]/30 shadow-2xl overflow-hidden">
      <div className="h-6 w-full film-hole-pattern mb-6 opacity-60"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 relative group">
          <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border-4 border-[#231738] shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeProject.id}
                src={activeProject.coverImage}
                alt={activeProject.title}
                referrerPolicy="no-referrer"
                initial={{ opacity: 0, scale: 1.08, filter: 'blur(8px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.95, filter: 'blur(4px)' }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-[#180F29] via-transparent to-black/30"></div>

            

            <div className="absolute bottom-4 right-4 left-4 flex justify-between items-end text-white">
              <div>
                <span className="text-xs text-[#C59CE4] font-bold block">{activeProject.categoryLabel}</span>
                <h3 className="font-heading font-black text-xl sm:text-2xl text-white">
                  {activeProject.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="p-2.5 rounded-full bg-white/20 hover:bg-[#C59CE4] hover:text-[#231738] transition-colors cursor-pointer"
                  aria-label="السابق"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2.5 rounded-full bg-white/20 hover:bg-[#C59CE4] hover:text-[#231738] transition-colors cursor-pointer"
                  aria-label="التالي"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#C59CE4] bg-white/10 px-3.5 py-1 rounded-full border border-white/10">
              {activeProject.city} • {activeProject.year}
            </span>
            <h3 className="font-heading font-black text-2xl text-white">
              {activeProject.title}
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
              {activeProject.fullDescription}
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs text-[#C59CE4] font-bold block">الخدمات الميدانية الرئيسية:</span>
            <div className="flex flex-wrap gap-1.5">
              {activeProject.services.map((s, idx) => (
                <span key={idx} className="text-xs px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/90 font-sans shadow-sm">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onSelectProject(activeProject)}
              className="flex-1 py-3.5 px-6 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center justify-center gap-2 border border-[#C59CE4]/40 backdrop-blur-md shadow-lg transition-all cursor-pointer font-heading"
            >
              <span>تفاصيل المشهد</span>
              <ChevronLeft className="w-4 h-4 text-[#C59CE4]" />
            </button>

            <button
              onClick={() => onOpenWhatsAppModal(activeProject.title)}
              className="flex-1 py-3.5 px-6 rounded-full bg-[#C59CE4] text-[#180F29] hover:bg-[#d4b4ed] font-bold text-xs flex items-center justify-center gap-2 shadow-xl transition-all cursor-pointer font-heading"
            >
              <MessageCircle className="w-4 h-4" />
              <span>جهز مثل هذه الفعالية</span>
            </button>
          </div>
        </div>
      </div>

      <div className="h-6 w-full film-hole-pattern mt-6 opacity-60"></div>
    </div>
  );
};

/* 5. Infinite Marquee Component */
interface InfiniteMarqueeProps {
  items: string[];
}

export const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({ items }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap py-3 bg-[#231738] border-y border-[#C59CE4]/30 relative" dir="ltr">
      <div className="animate-ticker-reverse flex items-center gap-8">
        {[...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-white/90 font-medium hover:border-[#C59CE4] transition-colors"
            dir="rtl"
          >
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 6. Partners 3D Rotating Carousel Component */
export const PartnersCarousel3D: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef(0);
  const isHoveredRef = useRef(false);

  const partners = [
    {
      title: "وزارة الثقافة",
      location: "فعالية التراث الوطني",
      quote: "تنظيم احترافي ودقة متناهية في إدارة التفاصيل الميدانية طوال فترة المؤتمر."
    },
    {
      title: "هيئة الاتصالات والتقنية",
      location: "ملتقى التقنية المستقبلية",
      quote: "فريق عمل يملك زمام السيطرة ويقدم حلولاً مبتكرة لكل تحدٍ ميداني."
    },
    {
      title: "موسم الرياض",
      location: "منطقة الفعاليات الكبرى",
      quote: "تجربة ضيافة استثنائية وتنظيم راقٍ يليق بكبار الشخصيات والزوار."
    },
    {
      title: "شركة نيوم الصناعية",
      location: "اللقاء السنوي للاستثمار",
      quote: "شريك استراتيجي يمكن الاعتماد عليه لتنفيذ الهوية البصرية والميدانية باحترافية."
    },
    {
      title: "أرامكو السعودية",
      location: "معرض الابتكار الداخلي",
      quote: "انضباط وسرعة استجابة عالية جعلت الفعالية تخرج بأفضل صورة ممكنة."
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    const startAutoRotate = () => {
      interval = setInterval(() => {
        if (!isHoveredRef.current && trackRef.current) {
          rotationRef.current -= 0.15;
          trackRef.current.style.transform = `rotateY(${rotationRef.current}deg)`;
        }
      }, 16);
    };

    startAutoRotate();
    return () => clearInterval(interval);
  }, []);

  const handleMouseEnter = (index: number) => {
    isHoveredRef.current = true;
    if (trackRef.current) {
      const anglePerCard = 360 / partners.length;
      const targetRotation = -index * anglePerCard;
      let diff = (targetRotation - rotationRef.current) % 360;
      if (diff > 180) diff -= 360;
      if (diff < -180) diff += 360;
      rotationRef.current += diff;
      trackRef.current.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
      trackRef.current.style.transform = `rotateY(${rotationRef.current}deg)`;
    }
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    if (trackRef.current) {
      setTimeout(() => {
        if (!isHoveredRef.current && trackRef.current) {
          trackRef.current.style.transition = 'none';
        }
      }, 600);
    }
  };

  return (
    <div 
      ref={trackRef}
      className="relative w-[340px] h-[280px]"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {partners.map((partner, index) => {
        const angle = (360 / partners.length) * index;
        return (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className="absolute top-0 left-0 w-full h-full bg-[#231738] text-white border border-[#C59CE4]/40 rounded-3xl p-8 flex flex-col justify-between shadow-[0_20px_40px_rgba(61,41,92,0.15)] cursor-pointer hover:border-[#C59CE4] hover:shadow-[0_25px_50px_rgba(197,156,228,0.3)] transition-all duration-400 text-right"
            style={{
              transform: `rotateY(${angle}deg) translateZ(320px)`,
              backfaceVisibility: 'hidden'
            }}
          >
            <div className="flex text-[#C59CE4] gap-1 justify-end">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current text-[#C59CE4]" />
              ))}
            </div>

            <p className="text-sm text-white/95 italic leading-relaxed font-sans mt-4">
              "{partner.quote}"
            </p>

            <div className="pt-4 border-t border-white/15 mt-auto">
              <h3 className="font-thamanya font-bold text-lg text-white mb-1">
                {partner.title}
              </h3>
              <span className="text-xs text-[#C59CE4] font-sans block">
                {partner.location}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
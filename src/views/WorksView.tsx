import React, { useState, useEffect, useRef } from 'react';
import { PageRoute } from '../types';
import { Sparkles, MessageCircle, ArrowLeft, Play, MapPin, Building, CheckCircle } from 'lucide-react';
import { openWhatsAppDirect, KHUZAMA_WHATSAPP_NUMBER } from '../utils/whatsapp';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface WorksViewProps {
  onOpenWhatsAppModal: () => void;
  onNavigate: (route: PageRoute) => void;
  onSelectProject?: (projectId: string) => void;
}

interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  categoryKey: string;
  city: string;
  year: string;
  services: string[];
  image: string;
}

interface FieldMedia {
  url: string;
  title: string;
  tag: string;
}

export const WorksView: React.FC<WorksViewProps> = ({
  onOpenWhatsAppModal,
  onNavigate,
  onSelectProject
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('الكل');
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const perspectiveGridRef = useRef<HTMLDivElement>(null);
  
  // Curtain & Stage Refs
  const stageSectionRef = useRef<HTMLDivElement>(null);
  const leftCurtainRef = useRef<HTMLDivElement>(null);
  const rightCurtainRef = useRef<HTMLDivElement>(null);
  const topValanceRef = useRef<HTMLDivElement>(null);
  const curtainTitleRef = useRef<HTMLDivElement>(null);
  const curtainClosingTitleRef = useRef<HTMLDivElement>(null); 
  const stageContentRef = useRef<HTMLDivElement>(null);
  const frameWrapperRef = useRef<HTMLDivElement>(null);

  // Hero media loop list
  const [heroMediaIndex, setHeroMediaIndex] = useState<number>(0);
  const heroMediaList = [
    { type: 'image', url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80' },
    { type: 'image', url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=80' },
    { type: 'image', url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=80' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroMediaIndex((prev) => (prev + 1) % heroMediaList.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [heroMediaList.length]);

  const fieldMediaList: FieldMedia[] = [
    {
      url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
      title: 'تجهيزات المسرح الكبرى والتحكم الرقمي',
      tag: 'التجهيزات'
    },
    {
      url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
      title: 'هندسة الإضاءة والتحكم الصوتي الميداني',
      tag: 'الإضاءة'
    },
    {
      url: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80',
      title: 'بروتوكول الضيافة الفاخرة واستقبال الضيوف',
      tag: ' الضيافة'
    },
    {
      url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
      title: 'تفاصيل الديكورات والهويات البصرية التفاعلية',
      tag: ' الديكور'
    },
    {
      url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
      title: 'غرفة العمليات الميدانية وإدارة الحشود',
      tag: ' التشغيل'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Title Entrance
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -60, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power4.out' }
      );

      // 2. Perspective Cards Grid Animation
      if (perspectiveGridRef.current) {
        const cards = perspectiveGridRef.current.children;
        gsap.fromTo(
          cards,
          { opacity: 0, y: 100, rotationX: 45, transformPerspective: 1000 },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 1,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: perspectiveGridRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      // 3. Theatrical Stage Curtain & Scroll-Driven Image Slideshow & Re-closing
      if (stageSectionRef.current && leftCurtainRef.current && rightCurtainRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: stageSectionRef.current,
            start: 'top top',
            end: '+=3500', 
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            onUpdate: (self) => {
              const progress = self.progress;
              if (progress > 0.2 && progress < 0.75) {
                const totalSlides = fieldMediaList.length;
                const slideIndex = Math.min(
                  Math.floor(((progress - 0.2) / 0.55) * totalSlides),
                  totalSlides - 1
                );
                setCurrentSlide(slideIndex);
              }
            }
          }
        });

        tl.to(curtainTitleRef.current, { opacity: 0, scale: 0.9, duration: 0.05 }, 0)
          .to(leftCurtainRef.current, { xPercent: -90, ease: 'power2.inOut' }, 0.05)
          .to(rightCurtainRef.current, { xPercent: 90, ease: 'power2.inOut' }, 0.05)
          .to(topValanceRef.current, { yPercent: -100, opacity: 0, ease: 'power2.inOut' }, 0.05)
          .fromTo(
            stageContentRef.current,
            { scale: 0.4, opacity: 0, z: -600 },
            { scale: 1, opacity: 1, z: 0, ease: 'power3.out', duration: 0.3 },
            0.1
          )
          .to(stageContentRef.current, { opacity: 1, duration: 0.4 }, 0.35)
          .to(stageContentRef.current, { scale: 0.5, opacity: 0, duration: 0.15 }, 0.8)
          .to(leftCurtainRef.current, { xPercent: 0, ease: 'power2.inOut' }, 0.85)
          .to(rightCurtainRef.current, { xPercent: 0, ease: 'power2.inOut' }, 0.85)
          .to(topValanceRef.current, { yPercent: 0, opacity: 1, ease: 'power2.inOut' }, 0.85)
          .fromTo(
            curtainClosingTitleRef.current,
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 0.15 },
            0.9
          );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [activeCategory, fieldMediaList.length]);

  const categories = [
    'الكل',
    'فعاليات حكومية',
    'فعاليات الشركات',
    'مؤتمرات وملتقيات',
    'معارض وأجنحة',
    'فعاليات الموظفين',
    'تجارب ترفيهية',
    'مناسبات خاصة'
  ];

  const projects: Project[] = [
    {
      id: 'founding-day',
      title: 'تنفيذ وتنظيم احتفالية يوم التأسيس',
      client: 'وزارة الثقافة',
      category: 'فعاليات حكومية',
      categoryKey: 'فعاليات حكومية',
      city: 'الرياض',
      year: '2025',
      services: ['هوية بصرية', 'ضيافة', 'ديكورات تراثية', 'تنظيم ميداني'],
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'tech-summit',
      title: 'ملتقى التقنيات المستقبلية الذكية',
      client: 'هيئة الاتصالات والتقنية',
      category: 'مؤتمرات وملتقيات',
      categoryKey: 'مؤتمرات وملتقيات',
      city: 'الرياض',
      year: '2025',
      services: ['هندسة المسارح', 'إدارة المتحدثين', 'شاشات عملاقة', 'تشغيل ميداني'],
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'luxury-expo',
      title: 'معرض الابتكار والهندسة المعمارية',
      client: 'مجموعة النخبة العقارية',
      category: 'معارض وأجنحة',
      categoryKey: 'معارض وأجنحة',
      city: 'الجدة',
      year: '2026',
      services: ['تصميم وبناء الأجنحة', 'تجربة الزائر', 'إضاءات تفاعلية'],
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'corporate-gala',
      title: 'الحفل السنوي وتدشين الهوية الجديدة',
      client: 'شركة نيوم الصناعية',
      category: 'فعاليات الشركات',
      categoryKey: 'فعاليات الشركات',
      city: 'تبوك',
      year: '2026',
      services: ['إدارة الفعالية', 'عروض بصرية سينمائية', 'بروتوكول كبار الشخصيات'],
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'family-day',
      title: 'يوم العائلة المفتوح للموظفين',
      client: 'مجموعة أرامكو السعودية',
      category: 'فعاليات الموظفين',
      categoryKey: 'فعاليات الموظفين',
      city: 'الظهران',
      year: '2025',
      services: ['أنشطة تفاعلية', 'مسرح وعروض ترفيهية', 'مناطق الأطفال والضيافة'],
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'entertainment-season',
      title: 'تجربة الممشى الفني التفاعلي',
      client: 'موسم الرياض',
      category: 'تجارب ترفيهية',
      categoryKey: 'تجارب ترفيهية',
      city: 'الرياض',
      year: '2026',
      services: ['إنشاءات مؤقتة', 'مؤثرات بصرية وصوتية', 'إدارة الحشود'],
      image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  const filteredProjects = activeCategory === 'الكل' 
    ? projects 
    : projects.filter(p => p.categoryKey === activeCategory);

  const handleProjectClick = (projectId: string) => {
    if (onSelectProject) {
      onSelectProject(projectId);
    } else {
      onNavigate('project-detail' as PageRoute);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWorksWhatsApp = () => {
    const text = `مرحباً خزامى، اطلعت على أعمالكم وأرغب في مناقشة مشروع فعالية جديدة.`;
    const url = `https://wa.me/${KHUZAMA_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    openWhatsAppDirect(url);
  };

  // ==========================================
  // مخصص لصور الستائر والمثلث العلوي (من مجلد assets المحلي)
  // ==========================================

  // 1. ستايل المثلث العلوي (حطي اسم صورتك مكان top-triangle.jpg)
  const topValanceStyle = {
    backgroundImage: ` url('/assets/img/top-triangle.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  // 2. ستايل الستارة اليسار (حطي اسم صورتك مكان left-curtain.jpg)
  const leftCurtainStyle = {
    backgroundImage: `url('/assets/img/right (2).jpeg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  // 3. ستايل الستارة اليمين (حطي اسم صورتك مكان right-curtain.jpg)
  const rightCurtainStyle = {
    backgroundImage: `linear-gradient(to left, rgba(24, 15, 41, 0.2), rgba(24, 15, 41, 0.6)), url('/assets/img/right (1).jpeg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div ref={containerRef} className="pt-24 pb-0 space-y-20 overflow-hidden bg-[#F8F7F4]" dir="rtl">
      
      {/* SECTION 1: HERO */}
      <section className="bg-[#180F29] text-white py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden khuzama-pattern-dark border-b border-[#C59CE4]/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C59CE4]/25 via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <h1 ref={titleRef} className="font-heading font-black text-4xl sm:text-7xl text-white tracking-tight leading-[1.1]">
            من أرض المشروع… لقطات من التجربة.
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-purple-100/90 leading-relaxed font-sans">
          استكشف مجموعة من الفعاليات والتجارب  التي خططنا لها، صممنا تفاصيلها، وبدقة تشغيلية مطلقة أثرناها
          </p>

          <div 
            className="pt-6 relative max-w-4xl mx-auto rounded-[36px] overflow-hidden border border-[#C59CE4]/40 shadow-[0_30px_80px_rgba(0,0,0,0.7)] group"
          >
            <div className="h-[340px] sm:h-[480px] w-full relative overflow-hidden">
              {heroMediaList.map((media, idx) => (
                <img 
                  key={idx}
                  src={media.url} 
                  alt="عرض مباشر لقطات الفعاليات" 
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    idx === heroMediaIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                  }`}
                  referrerPolicy="no-referrer"
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-[#180F29]/60 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CATEGORIES FILTER TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-30">
        <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-2xl border border-gray-100 flex items-center justify-start sm:justify-center overflow-x-auto gap-3 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-heading font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#3D295C] text-white shadow-lg shadow-[#3D295C]/40 scale-105'
                    : 'bg-[#F8F7F4] text-gray-700 hover:bg-[#F2ECF7] hover:text-[#3D295C] border border-gray-200/80'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: PROJECTS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ perspective: '1200px' }}>
        <div ref={perspectiveGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className="bg-[#241A38] text-white rounded-[32px] overflow-hidden border border-[#C59CE4]/30 shadow-xl hover:shadow-[0_30px_70px_rgba(197,156,228,0.25)] hover:border-[#C59CE4] transition-all duration-500 group flex flex-col justify-between cursor-pointer relative transform hover:-translate-y-2 text-right"
            >
              <div className="h-68 sm:h-76 w-full relative overflow-hidden bg-gray-900">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241A38] via-[#241A38]/30 to-transparent"></div>
                
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-[#180F29]/90 backdrop-blur-md text-[#C59CE4] border border-[#C59CE4]/40 text-xs font-bold px-3.5 py-1.5 rounded-full font-heading shadow-md">
                    {project.category}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 left-4 z-10 flex items-center justify-between text-white flex-row-reverse">
                  <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-medium">
                    <Building className="w-3.5 h-3.5 text-[#C59CE4]" />
                    <span>{project.client}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#C59CE4]" />
                    <span>{project.city} - {project.year}</span>
                  </div>
                </div>
              </div>

              <div className="p-7 space-y-4 flex-1 flex flex-col justify-between text-right bg-[#241A38]">
                <div className="space-y-2">
                  <h3 className="font-heading font-bold text-xl text-white group-hover:text-[#C59CE4] transition-colors leading-relaxed">
                    {project.title}
                  </h3>
                </div>

                <div className="space-y-3 pt-4 border-t border-[#C59CE4]/20">
                  <div className="space-y-2.5">
                    {project.services.map((srv, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-3 text-xs sm:text-sm text-purple-100/90 flex-row">
                        <CheckCircle className="w-4 h-4 text-[#C59CE4] shrink-0" />
                        <span className="font-sans">{srv}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center justify-between text-sm font-bold bg-[#3D295C]/40 hover:bg-[#3D295C] px-5 py-3.5 rounded-full border border-[#C59CE4]/40 text-[#C59CE4] group-hover:border-[#C59CE4] group-hover:text-white transition-all flex-row mt-5 shadow-md">
                    <span className="font-heading tracking-wide">استعراض تفاصيل المشروع</span>
                    <div className="w-8 h-8 rounded-full bg-[#180F29] text-[#C59CE4] group-hover:bg-[#C59CE4] group-hover:text-[#180F29] transition-all flex items-center justify-center shrink-0">
                      <ArrowLeft className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: TRUE THEATRICAL STAGE & SCROLL-DRIVEN FRAME CAROUSEL */}
      <section 
        ref={stageSectionRef} 
        className="bg-[#F8F7F4] h-screen w-full relative overflow-hidden flex flex-col justify-center items-center m-0 p-0 border-0"
      >
        <div 
          ref={stageContentRef} 
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10 w-full opacity-0 pt-4 text-center"
        >
          <div className="space-y-2 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-[#3D295C] bg-[#F2ECF7] border border-[#C59CE4]/40 px-4 py-1.5 rounded-full font-heading inline-block shadow-sm">
              كواليس الميدان
            </span>
          </div>

          <div 
            ref={frameWrapperRef}
            className="relative max-w-4xl mx-auto h-[380px] sm:h-[480px] rounded-[36px] overflow-hidden shadow-2xl border-4 border-white bg-gray-900 group origin-center"
          >
            {fieldMediaList.map((media, idx) => {
              const isActive = idx === currentSlide;
              return (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                    isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <img 
                    src={media.url} 
                    alt={media.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#180F29]/95 via-[#180F29]/30 to-transparent"></div>
                  
                  <span className="absolute top-6 right-6 bg-[#180F29]/90 backdrop-blur-md text-[#C59CE4] border border-[#C59CE4]/30 text-xs font-bold px-4 py-1.5 rounded-full font-heading shadow-md z-20">
                    {media.tag}
                  </span>

                  <div className="absolute bottom-8 right-8 left-8 text-right z-20 space-y-2">
                    <h3 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-wide">
                      {media.title}
                    </h3>
                  </div>
                </div>
              );
            })}

            <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2 z-30">
              {fieldMediaList.map((_, dotIdx) => (
                <span
                  key={dotIdx}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    dotIdx === currentSlide ? 'w-8 bg-[#C59CE4]' : 'w-2 bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* --- المثلث العلوي (Top Valance) --- */}
        <div 
          ref={topValanceRef}
          className="absolute top-0 inset-x-0 h-36 sm:h-44 z-30 border-b-4 border-[#C59CE4]/40 flex items-center justify-center pt-10 shadow-lg"
          style={{ 
            ...topValanceStyle,
            clipPath: 'polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%)' 
          }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="text-white font-heading font-black text-sm sm:text-base tracking-[0.3em] uppercase opacity-100 mt-[-15px] relative z-10 drop-shadow-md">
            خزامى للفعاليات
          </div>
        </div>

        {/* --- الستارة اليسار (Left Curtain) --- */}
        <div 
          ref={leftCurtainRef} 
          className="absolute inset-y-0 left-0 w-1/2 z-20 flex items-center justify-end overflow-hidden shadow-2xl"
          style={leftCurtainStyle}
        >
          <div className="absolute inset-0 bg-[#180F29]/20"></div>
        </div>

        {/* --- الستارة اليمين (Right Curtain) --- */}
        <div 
          ref={rightCurtainRef} 
          className="absolute inset-y-0 right-0 w-1/2 z-20 flex items-center justify-start overflow-hidden shadow-2xl"
          style={rightCurtainStyle}
        >
          <div className="absolute inset-0 bg-[#180F29]/20"></div>
        </div>

        <div 
          ref={curtainTitleRef}
          className="absolute inset-0 z-40 flex flex-col items-center justify-center text-center px-4 pointer-events-none pt-24"
        >
          <div className="max-w-3xl space-y-4 p-8 rounded-3xl bg-[#180F29]/85 backdrop-blur-md border border-[#C59CE4]/30 shadow-2xl">
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight leading-relaxed">
              تفاصيل قد لا يراها الضيف… لكنها تصنع التجربة.
            </h2>
          </div>
        </div>

        <div 
          ref={curtainClosingTitleRef}
          className="absolute inset-0 z-40 flex flex-col items-center justify-center text-center px-4 pointer-events-none opacity-0 pt-24"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-auto">
            <div className="bg-[#180F29] rounded-3xl p-8 sm:p-12 text-center text-white border border-[#C59CE4]/30 shadow-2xl khuzama-pattern-dark relative overflow-hidden space-y-6">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C59CE4]/10 via-transparent to-transparent pointer-events-none"></div>
              
              <div className="relative z-10 max-w-xl mx-auto space-y-3">
                <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight leading-relaxed">
                  من كواليس الميدان إلى منصة النجاح
                </h2>
                <p className="text-xs sm:text-sm text-purple-100/80 leading-relaxed font-sans">
                  نصنع لك تجربة استثنائية تبدأ بمحادثة بسيطة وتستمر في الذاكرة
                </p>
              </div>
              <div className="relative z-10 pt-2">
                <button
                  onClick={handleWorksWhatsApp}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#533B78] via-[#432E61] to-[#3D295C] text-white font-bold text-sm sm:text-base border border-[#C59CE4]/40 shadow-xl hover:border-[#C59CE4] hover:shadow-purple-900/50 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 text-[#C59CE4]" />
                  <span className="font-heading">ابدأ تجهيز فعاليتك</span>
                </button>
              </div>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
};
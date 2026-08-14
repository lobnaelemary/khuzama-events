import React, { useRef } from 'react';
import { PageRoute, Project } from '../types';
import { PROJECTS_DATA, SOLUTIONS_DATA, TESTIMONIALS_DATA } from '../data/mockData';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TypewriterText, AuroraStarfield, Flip3DCard, FilmStripReel, InfiniteMarquee, PartnersCarousel3D } from '../components/CinematicElements';
import { MessageCircle, Target, ChevronLeft, Eye, Footprints, Layers, ClipboardCheck, Palette, Video as VideoIcon, HeartHandshake, ShieldCheck } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (route: PageRoute) => void;
  onSelectProject: (project: Project) => void;
  onOpenWhatsAppModal: (projectTitle?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onSelectProject,
  onOpenWhatsAppModal
}) => {

  // Stats Counters
  const stats = [
    { value: '+10', label: 'سنوات من الخبرة الميدانية' },
    { value: '+150', label: 'فعالية ومؤتمر مكتمل بنجاح' },
    { value: '+14', label: 'مدينة ومنطقة جغرافية بالمملكة' },
    { value: '+50 ألف', label: 'ضيف وزائر تمت خدمتهم' }
  ];

  // Client Logos / Entities ticker
  const clientLogos = [
    'وزارة الثقافة',
    'هيئة الاتصالات والتقنية',
    'مجموعة النخبة العقارية',
    'شركة نيوم الصناعية',
    'أرامكو السعودية',
    'موسم الرياض',
    'هيئة الترفيه والسياحة',
    'مؤتمر التقنية المستقبلية'
  ];

  const philosophyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: philosophyProgress } = useScroll({
    target: philosophyRef,
    offset: ['start end', 'end start'],
  });
  const philosophyBgY = useTransform(philosophyProgress, [0, 1], ['-12%', '12%']);

  return (
    <div className="space-y-0 overflow-hidden bg-[#F8F7F4]" dir="rtl">
      
      {/* SECTION 1: HERO SECTION WITH VIDEO BACKGROUND */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-white pt-28 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/assets/public/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#180F29]/80 z-0"></div>
        <AuroraStarfield />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full khuzama-glass-neon text-[#E8D0FF] text-xs sm:text-sm font-bold tracking-wide neon-border-pulse"
          >
            <span className="font-heading">شركة سعودية متخصصة في تخطيط وتصميم وتنفيذ الفعاليات</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35, rotateX: 12 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-thamanya font-black text-3xl sm:text-6xl lg:text-7xl text-white leading-tight pt-2"
          >
            من أول تصور... <br className="hidden sm:inline" />
            <span className="text-gradient-liquid">
              إلى <TypewriterText words={['آخر ضيف.', 'أرقى حضور.', 'أبهر نتيجة.', 'أثر يخلد.']} />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-3xl mx-auto text-base sm:text-xl text-white/85 leading-relaxed font-light font-sans pt-2"
          >
            نصمم الفكرة، نخطط التفاصيل، وندير التنفيذ ميدانيًا لنصنع فعالية متكاملة تعكس حضورك وتبقى في ذاكرة ضيوفك.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
          >
            <button
              id="hero-cta-btn"
              onClick={() => onOpenWhatsAppModal()}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#533B78] via-[#432E61] to-[#3D295C] text-white font-bold text-sm sm:text-base border border-[#C59CE4]/40 shadow-xl hover:border-[#C59CE4] hover:shadow-purple-900/50 transition-all cursor-pointer font-heading"
            >
              <MessageCircle className="w-5 h-5 text-[#C59CE4] shrink-0" />
              <span>ابدأ تجهيز فعاليتك</span>
            </button>

            <button
              id="hero-explore-works-btn"
              onClick={() => {
                onNavigate('works');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/20 backdrop-blur-md transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg font-heading"
            >
              <Eye className="w-5 h-5 text-[#C59CE4]" />
              <span>استعرض أعمالنا</span>
              <ChevronLeft className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* INFINITE MARQUEE TICKER */}
      <InfiniteMarquee items={clientLogos} />

      {/* SECTION 2: TRUST BAR & METRICS (الحركة المحبوبة مستعادة هنا ببراعة) */}
      <motion.section
        initial={{ opacity: 0, y: 50, rotateX: 6 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8 }}
        className="bg-[#180F29] text-white py-16 border-b border-[#C59CE4]/20 relative khuzama-pattern-dark"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#C59CE4] bg-white/5 px-3.5 py-1 rounded-full border border-white/10 font-heading">
              ثقة بُنيت في الميدان
            </span>
            <h2 className="font-thamanya font-black text-2xl sm:text-3xl text-white pt-1">
              مؤشرات نجاح وخبرة مؤسسية موثوقة
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center perspective-1000 pt-4">
            {stats.map((st, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, rotateY: 5, z: 20 }}
                className="khuzama-glass-neon p-6 rounded-3xl border border-[#C59CE4]/30 space-y-2 hover:border-[#C59CE4] hover:shadow-[0_10px_30px_rgba(197,156,228,0.15)] transition-all duration-300 shadow-xl"
              >
                <div className="font-thamanya font-black text-3xl sm:text-4xl text-gradient-liquid">
                  {st.value}
                </div>
                <div className="text-xs sm:text-sm text-white/80 font-semibold font-sans">
                  {st.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SECTION 3: CINEMATIC FILM STRIP REEL */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 text-right">
          <div className="space-y-3">
            <span className="inline-block text-xs font-bold text-[#3D295C] bg-[#F0E6F7] px-3.5 py-1 rounded-full border border-[#C59CE4]/30 font-heading">
              أعمال تحكي التجربة
            </span>
            <h2 className="font-thamanya font-black text-2xl sm:text-4xl text-[#1A181E] pt-1">
              شاهد تجارب تحولت من فكرة إلى مشهد متكامل.
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl font-sans pt-1">
              لكل فعالية هدفها وشخصيتها وتفاصيلها الخاصة، تصفح المشاهد السينمائية لأبرز المشاريع المنفذة.
            </p>
          </div>

          <button
            id="view-all-works-btn"
            onClick={() => {
              onNavigate('works');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#3D295C] border border-[#C59CE4]/30 hover:border-[#C59CE4] shadow-md hover:shadow-lg transition-all cursor-pointer self-start md:self-end font-heading font-bold text-xs sm:text-sm shrink-0"
          >
            <span>استعراض كافة الأعمال</span>
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>

        <FilmStripReel
          projects={PROJECTS_DATA}
          onSelectProject={onSelectProject}
          onOpenWhatsAppModal={onOpenWhatsAppModal}
        />
      </motion.section>

      {/* SECTION 4: فلسفة خزامى */}
      <section
        ref={philosophyRef}
        className="relative bg-gradient-to-b from-[#231738] to-[#180F29] text-white py-28 px-4 sm:px-6 lg:px-8 border-y border-[#C59CE4]/20 overflow-hidden"
      >
        <motion.div
          style={{ y: philosophyBgY }}
          className="absolute inset-0 khuzama-pattern-dark pointer-events-none"
        />

        <div className="relative z-10 max-w-4xl mx-auto space-y-16 text-right">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-block text-xs font-bold text-[#C59CE4] uppercase tracking-wider bg-white/10 px-3.5 py-1 rounded-full border border-white/10 font-heading">
              فلسفة خزامى
            </span>
            <h2 className="font-thamanya font-black text-2xl sm:text-4xl text-white pt-1">
              خلف كل فعالية ناجحة… تفاصيل تم التخطيط لها جيدًا.
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-sans pt-2">
              خزامى شركة سعودية متخصصة في تخطيط وتصميم وتنفيذ الفعاليات والتجارب المتكاملة. نعمل مع الجهات الحكومية والشركات والمؤسسات لصناعة فعاليات تجمع بين الفكرة الإبداعية، الدقة التشغيلية، وجودة تجربة الحضور.
            </p>
          </div>

          <div className="relative space-y-12 pb-24 pt-4">
            {[
              {
                icon: <Target className="w-6 h-6" />,
                title: "نفهم الهدف",
                desc: "نبدأ بفهم رسالة الفعالية والجمهور والنتيجة المطلوبة بدقة تامة قبل البدء في خطط التنفيذ.",
                stepNum: "1"
              },
              {
                icon: <Layers className="w-6 h-6" />,
                title: "نمسك الصورة كاملة",
                desc: "ندير التصميم والتجهيزات والموردين والكوادر والضيافة ضمن خطة موحدة دون أي تشتت.",
                stepNum: "2"
              },
              {
                icon: <Footprints className="w-6 h-6" />,
                title: "نكون في الميدان",
                desc: "نتابع التنفيذ لحظة بلحظة، ونتعامل مع التفاصيل الميدانية قبل أن تؤثر في تجربة الضيف.",
                stepNum: "3"
              }
            ].map((card, index) => {
              const startRange = index * 0.28;
              const endRange = startRange + 0.35;
              const cardScale = useTransform(philosophyProgress, [startRange, endRange], [0.45, 1]);
              const cardOpacity = useTransform(philosophyProgress, [startRange, startRange + 0.2], [0.1, 1]);

              return (
                <motion.div
                  key={index}
                  style={{ scale: cardScale, opacity: cardOpacity, transformOrigin: 'center center' }}
                  className="relative khuzama-glass-dark p-8 sm:p-10 rounded-3xl border border-[#C59CE4]/40 hover:border-[#C59CE4] transition-colors shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 backdrop-blur-2xl overflow-hidden"
                >
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 font-thamanya font-black text-7xl sm:text-9xl text-white/[0.04] select-none pointer-events-none z-0">
                    {card.stepNum}
                  </div>
                  <div className="relative z-10 flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#C59CE4]/20 text-[#C59CE4] border border-[#C59CE4]/40 flex items-center justify-center shadow-inner shrink-0">
                      {card.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-thamanya font-bold text-xl sm:text-2xl text-white">{card.title}</h3>
                      <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans max-w-xl">{card.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 5: OUR SOLUTIONS WITH 3D CARDS */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 text-right"
      >
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block text-xs font-bold text-[#3D295C] bg-[#F0E6F7] px-3.5 py-1 rounded-full border border-[#C59CE4]/30 font-heading">
            حلولنا المتكاملة
          </span>
          <h2 className="font-thamanya font-black text-2xl sm:text-4xl text-[#1A181E] pt-1">
            نمسك الصورة كاملة... ونضبط كل تفصيلة.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {SOLUTIONS_DATA.map((sol, index) => {
            const solutionIcons = [
              <ClipboardCheck className="w-6 h-6 text-[#3D295C]" />,
              <Palette className="w-6 h-6 text-[#3D295C]" />,
              <VideoIcon className="w-6 h-6 text-[#3D295C]" />,
              <HeartHandshake className="w-6 h-6 text-[#3D295C]" />,
              <span className="w-6 h-6 flex items-center justify-center"><Target className="w-6 h-6 text-[#3D295C]" /></span>,
              <ShieldCheck className="w-6 h-6 text-[#3D295C]" />
            ];

            return (
              <div 
                key={sol.id} 
                className="group relative cursor-pointer rounded-[32px] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(61,41,92,0.12)]"
              >
                <Flip3DCard
                  icon={solutionIcons[index % solutionIcons.length]}
                  frontTitle={sol.title}
                  frontSubtitle={sol.subtitle}
                  frontDescription={sol.description}
                  backDetails={sol.features}
                  backCtaLabel={`تجهيز ${sol.title}`}
                  onBackCtaClick={() => onOpenWhatsAppModal(`استفسار عن خدمة ${sol.title}`)}
                />
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* SECTION 6: قصة خزامى ومدخل من نحن (مع إطار زهرة الخزامى المتحركة) */}
      <section className="relative bg-gradient-to-b from-[#180F29] via-[#231738] to-[#180F29] text-white py-28 px-4 sm:px-6 lg:px-8 border-y border-[#C59CE4]/20 overflow-hidden khuzama-pattern-dark">
        <div className="absolute inset-0 bg-radial-glow opacity-50 pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-right order-2 lg:order-1"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full khuzama-glass-neon text-[#E8D0FF] text-xs font-bold tracking-wide border border-[#C59CE4]/30 font-heading">
              <span>جذورنا وعمق هويتنا</span>
            </span>

            <h2 className="font-thamanya font-black text-3xl sm:text-5xl text-white leading-tight pt-1">
              لماذا اخترنا اسم <span className="text-gradient-liquid">"خزامى"؟</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-white/85 leading-relaxed font-sans overflow-hidden pt-2">
              <motion.p initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                تنمو زهرة الخزامى في قلب الصحراء القاسية، متحملة أقسى الظروف لتزهر بجمال هادئ وعطر فريد يملأ المكان بحضوره.
              </motion.p>
              <motion.p initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
                من هذه الصلابة والجمال استلهمنا فلسفتنا <strong className="text-[#C59CE4] font-semibold">إدارة متكاملة .. بلا عشوائية</strong> فنحن لا نبيع تجهيزات مؤقتة، بل نصنع التنظيم المحكم وسط زحام التفاصيل لنبني معك شراكة تبدأ من الغاية الاستراتيجية وتنتهي بتنظيم ميداني دقيق.
              </motion.p>
              <motion.p initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }}>
                خلاصة تجربتنا تترك أثراً طيباً يظل عالقاً في الذاكرة طويلاً، تماماً مثل الأثر الذي يتركه عطر الخزامى بعد انطفاء الأضواء ومغادرة آخر ضيف.
              </motion.p>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.8 }} className="pt-4">
              <button
                onClick={() => {
                  onNavigate('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#533B78] via-[#432E61] to-[#3D295C] text-white font-bold text-xs sm:text-sm border border-[#C59CE4]/40 shadow-lg hover:border-[#C59CE4] hover:shadow-purple-900/40 transition-all cursor-pointer font-heading"
              >
                <span>تعرّف على قصتنا ورؤيتنا كاملة</span>
                <ChevronLeft className="w-4 h-4 text-[#C59CE4]" />
              </button>
            </motion.div>

          </motion.div>

          {/* إطار زهرة الخزامى المتحركة العضوية للصورة */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 flex justify-center relative order-1 lg:order-2"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.08, 1],
                opacity: [0.4, 0.7, 0.4] 
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute -inset-4 bg-gradient-to-r from-[#C59CE4]/30 to-[#3D295C]/50 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-2xl pointer-events-none"
            />

            <motion.div
              animate={{ 
                y: [0, -10, 0],
                borderRadius: [
                  "60% 40% 30% 70% / 60% 30% 70% 40%",
                  "30% 60% 70% 40% / 50% 60% 30% 50%",
                  "60% 40% 30% 70% / 60% 30% 70% 40%"
                ]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative w-full max-w-md h-[420px] overflow-hidden border-2 border-[#C59CE4]/50 shadow-[0_20px_60px_rgba(197,156,228,0.25)] group bg-[#241A38]"
            >
              <img
                src="/assets/public/images/story.jpg"
                alt="قصة خزامى وتجارب الفعاليات"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#180F29] via-transparent to-transparent opacity-70"></div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 7: PARTNERS IN SUCCESS */}
      <section className="relative w-full py-28 px-4 overflow-hidden flex flex-col items-center justify-center bg-[#F8F7F4] border-y border-gray-200">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16 relative z-10 flex flex-col items-center justify-center">
          <span className="inline-block text-xs font-bold text-[#3D295C] bg-[#F0E6F7] px-3.5 py-1 rounded-full border border-[#C59CE4]/30 font-heading w-fit">
            شركاء النجاح
          </span>
          <h2 className="font-thamanya font-black text-3xl sm:text-4xl text-[#1A181E] text-center w-full pt-1">
            جهات وثقت بنا، وتجارب نفخر بها.
          </h2>
        </div>

        <div className="relative w-full max-w-[1200px] h-[400px] flex items-center justify-center perspective-[1500px] z-20">
          <PartnersCarousel3D />
        </div>
      </section>

      {/* SECTION 8: FINAL CTA BANNER */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-[#180F29] rounded-3xl p-8 sm:p-12 text-center text-white border border-[#C59CE4]/30 shadow-2xl khuzama-pattern-dark relative overflow-hidden space-y-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C59CE4]/10 via-transparent to-transparent pointer-events-none"></div>
          
          <div className="relative z-10 max-w-xl mx-auto space-y-3">
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
              عندك فكرة؟ نبدأ منها.
            </h3>
            <p className="text-xs sm:text-sm text-purple-100/80 leading-relaxed font-sans">
              شاركنا نوع الفعالية، المدينة، التاريخ المتوقع وعدد الحضور، وفريق خزامى يتواصل معك لفهم التفاصيل.
            </p>
          </div>
          <div className="relative z-10 pt-2">
            <button
              id="final-cta-btn"
              onClick={() => onOpenWhatsAppModal()}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#533B78] via-[#432E61] to-[#3D295C] text-white font-bold text-sm sm:text-base border border-[#C59CE4]/40 shadow-xl hover:border-[#C59CE4] hover:shadow-purple-900/50 transition-all cursor-pointer font-heading"
            >
              <MessageCircle className="w-5 h-5 text-[#C59CE4] shrink-0" />
              <span>ابدأ تجهيز فعاليتك</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
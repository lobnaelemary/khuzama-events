import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { Sparkles, Target, Compass, Eye, CheckCircle, MessageCircle, ArrowLeft, Building2, Briefcase, Mic2, LayoutGrid, Users2, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AboutViewProps {
  onOpenWhatsAppModal: () => void;
  onNavigate: (route: PageRoute) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onOpenWhatsAppModal,
  onNavigate
}) => {
  const [activeTab, setActiveTab] = useState<'about' | 'vision' | 'mission'>('about');
  const [activeMethodStep, setActiveMethodStep] = useState<number>(0);

  // التبديل التلقائي لقصة خزامى (القصة، الرؤية، الرسالة)
  useEffect(() => {
    const tabs: ('about' | 'vision' | 'mission')[] = ['about', 'vision', 'mission'];
    const interval = setInterval(() => {
      setActiveTab((prevTab) => {
        const nextIndex = (tabs.indexOf(prevTab) + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const methodologySteps = [
    { step: '1', title: 'نسمع ونفهم', desc: 'الاستماع العميق لأهدافك ومتطلباتك الأساسية لفهم رؤيتك بدقة.' },
    { step: '2', title: 'نبني التصور', desc: 'بلورة الأفكار وصياغة الهوية والتصور الأولي للفعالية باحترافية.' },
    { step: '3', title: 'نخطط التنفيذ', desc: 'وضع الجداول الزمنية، خطط الموردين، وتفاصيل الميزانية بدقة.' },
    { step: '4', title: 'ننتج ونجهز', desc: 'بدء عمليات الإنتاج الفني، التجهيز، والديكورات على أرض الواقع.' },
    { step: '5', title: 'ندير الميدان', desc: 'الإشراف الميداني المباشر وإدارة التشغيل لحظة بلحظة وبمرونة.' },
    { step: '6', title: 'نوثق ونسلم', desc: 'تقييم النتائج، تسليم المخرجات، والتوثيق الاحترافي للمشروع.' }
  ];

  // التبديل التلقائي لخطوات منهجية العمل لتوجيه عقل وبصر المستخدم
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMethodStep((prevStep) => (prevStep + 1) % methodologySteps.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [methodologySteps.length]);

  const values = [
    { title: 'التفاصيل تصنع الفرق', desc: 'كل عنصر داخل الفعالية جزء من تجربة واحدة متكاملة.' },
    { title: 'الالتزام قبل الوعود', desc: 'نخطط بواقعية نلتزم تماماً بما يتم اعتماده.' },
    { title: 'الشراكة في العمل', desc: 'نعمل مع العميل كفريق واحد بروح مشتركة.' },
    { title: 'الحضور في الميدان', desc: 'الإشراف المباشر جزء أساسي وثابت من جودة التنفيذ.' },
    { title: 'المرونة', desc: 'نتعامل مع المتغيرات بسرعة وذكاء دون التأثير في تجربة الحضور.' }
  ];

  const solutions = [
    {
      title: 'تخطيط وإدارة الفعاليات',
      desc: 'إدارة شاملة لكافة مراحل الفعالية بدقة وسلاسة.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
      items: ['الجدول الزمني', 'إدارة الحشود والمدعوين', 'التنسيق الإداري والميداني']
    },
    {
      title: 'الفكرة والهوية الإبداعية',
      desc: 'صناعة مفاهيم مبتكرة تعكس هوية ورسالة الجهة.',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
      items: ['ابتكار المفاهيم', 'تصميم الهوية البصرية', 'إخراج المحتوى الإبداعي']
    },
    {
      title: 'الإنتاج الفني والتجهيزات',
      desc: 'تجهيز المسارح والحلول التقنية المتطورة.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
      items: ['هندسة الصوت والإضاءة', 'تصميم وبناء المسارح', 'الشاشات والتقنيات التفاعلية']
    },
    {
      title: 'تجربة الضيف والضيافة',
      desc: 'انطباع أول فاخر واهتمام استثنائي بكل مدعو.',
      image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80',
      items: ['بروتوكول الاستقبال', 'الضيافة الفاخرة والديكورات', 'إدارة كبار الشخصيات VIP']
    },
    {
      title: 'البرامج والأنشطة',
      desc: 'تنسيق الفعاليات المصاحبة والفقرات التفاعلية.',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80',
      items: ['جدول العروض والفقرات', 'تنسيق المتحدثين', 'الأنشطة الترفيهية والتفاعلية']
    },
    {
      title: 'التشغيل الميداني واللوجستيات',
      desc: 'متابعة حية ودقيقة لكل تفصيلة على أرض الواقع.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
      items: ['الكوادر البشرية الميدانية', 'إدارة اللوجستيات والنقل', 'غرفة العمليات وإدارة الطوارئ']
    }
  ];

  const sectors = [
    { 
      title: 'الجهات الحكومية وشبه الحكومية', 
      desc: 'فعاليات وطنية ورسمية ومؤسسية تراعي الهوية والبروتوكول ومتطلبات التشغيل بدقة تامة.',
      icon: Building2
    },
    { 
      title: 'الشركات والمؤسسات', 
      desc: 'حفلات الشركات، الأيام المفتوحة، فعاليات الموظفين، والاجتماعات وإطلاق المنتجات.',
      icon: Briefcase
    },
    { 
      title: 'المؤتمرات والملتقيات', 
      desc: 'التسجيل، المسرح، المحتوى البصري، إدارة المتحدثين، الضيافة والتشغيل.',
      icon: Mic2
    },
    { 
      title: 'المعارض والأجنحة', 
      desc: 'تصميم وتنفيذ الأجنحة، وتجربة الزائر، والشاشات، والمطبوعات والتشغيل.',
      icon: LayoutGrid
    },
    { 
      title: 'فعاليات الموظفين والتجارب', 
      desc: 'الأنشطة، والمسابقات، والعروض، ومناطق الأطفال والتجارب العائلية المميزة.',
      icon: Users2
    },
    { 
      title: 'المناسبات الخاصة', 
      desc: 'تصميم التجربة، والديكور، والضيافة، والتنسيق والتشغيل الكامل.',
      icon: Star
    }
  ];

  const whyKhuzamaPoints = [
    'فريق واحد يدير المشروع من البداية للنهاية',
    'خبرة واسعة مع الجهات الحكومية والمؤسسات الكبرى',
    'إدارة متكاملة واحترافية للموردين والشركاء',
    'حلول إبداعية مبتكرة وقابلة للتنفيذ الواقعي',
    'إشراف ميداني مباشر يضمن أعلى معايير الجودة',
    'مرونة عالية في التعامل الفوري مع المتغيرات',
    'عناية فائقة بتجربة الضيف وانطباعه الأخير',
    'تنظيم وتسليم واضح وموثوق للمشروع في موعده'
  ];

  return (
    <div className="pt-24 pb-16 space-y-16 overflow-hidden bg-[#F8F7F4]">
      
      {/* SECTION 1: HERO */}
      <section className="bg-[#180F29] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden khuzama-pattern-dark border-b border-[#C59CE4]/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C59CE4]/15 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <span className="inline-flex items-center gap-2 text-xs font-bold text-[#3D295C] bg-[#C59CE4] px-4 py-1.5 rounded-full shadow-md font-heading">
            <span>عن خزامى</span>
          </span>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight leading-relaxed"
          >
            فريق يعرف كيف تتحول الفكرة إلى تجربة.
          </motion.h1>
          <p className="max-w-3xl mx-auto text-sm sm:text-base text-purple-100/90 leading-relaxed">
            نعمل في خزامى على صناعة فعاليات مدروسة تبدأ بفهم الهدف، وتكتمل من خلال التخطيط والتصميم والتجهيز والإدارة الميدانية.
          </p>
        </div>
      </section>

      {/* SECTION 2 & 3: STORY MODE INTERACTIVE SPLIT SCREEN */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#180F29] rounded-[40px] p-8 sm:p-14 border border-[#C59CE4]/30 shadow-2xl khuzama-pattern-dark relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#3D295C]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10"> 
            <div className="lg:col-span-5 space-y-6 text-right">
              <div className="space-y-3">
                <span className="inline-block bg-[#C59CE4]/20 text-[#C59CE4] px-3.5 py-1 rounded-full text-xs font-bold border border-[#C59CE4]/40 font-heading">
                  رحلة خزامى
                </span>
                <motion.h2 
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="font-heading font-black text-3xl sm:text-4xl text-white leading-relaxed"
                >
                  قصتنا، رؤيتنا، ورسالتنا في الميدان.
                </motion.h2>
                <p className="text-xs sm:text-sm text-purple-100/80 leading-relaxed">
                  نستعرض لك تباعاً فصول قصتنا ورؤيتنا ورسالتنا للتعرف عن قرب على منهجية عملنا.
                </p>
              </div>
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={() => setActiveTab('about')}
                  className={`w-full text-right px-5 py-4 rounded-2xl font-heading text-sm transition-all flex items-center justify-between cursor-pointer border ${
                    activeTab === 'about'
                      ? 'bg-[#C59CE4] text-[#3D295C] border-[#C59CE4] font-bold shadow-lg scale-[1.02]'
                      : 'bg-white/5 text-purple-100 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Compass className="w-4 h-4 shrink-0" />
                    <span>قصتنا الملهمة</span>
                  </div>
                  <ArrowLeft className={`w-4 h-4 ${activeTab === 'about' ? 'opacity-100' : 'opacity-40'}`} />
                </button>
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`w-full text-right px-5 py-4 rounded-2xl font-heading text-sm transition-all flex items-center justify-between cursor-pointer border ${
                    activeTab === 'vision'
                      ? 'bg-[#C59CE4] text-[#3D295C] border-[#C59CE4] font-bold shadow-lg scale-[1.02]'
                      : 'bg-white/5 text-purple-100 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Eye className="w-4 h-4 shrink-0" />
                    <span>رؤيتنا المستقبلية</span>
                  </div>
                  <ArrowLeft className={`w-4 h-4 ${activeTab === 'vision' ? 'opacity-100' : 'opacity-40'}`} />
                </button>
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`w-full text-right px-5 py-4 rounded-2xl font-heading text-sm transition-all flex items-center justify-between cursor-pointer border ${
                    activeTab === 'mission'
                      ? 'bg-[#C59CE4] text-[#3D295C] border-[#C59CE4] font-bold shadow-lg scale-[1.02]'
                      : 'bg-white/5 text-purple-100 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Target className="w-4 h-4 shrink-0" />
                    <span>رسالتنا في العمل</span>
                  </div>
                  <ArrowLeft className={`w-4 h-4 ${activeTab === 'mission' ? 'opacity-100' : 'opacity-40'}`} />
                </button>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-2xl min-h-[340px] flex flex-col justify-center relative overflow-hidden text-gray-800">
                <AnimatePresence mode="wait">
                  {activeTab === 'about' && (
                    <motion.div
                      key="about"
                      initial={{ opacity: 0, scale: 0.95, x: 20 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.95, x: -20 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-4 text-right"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-[#F2ECF7] border border-[#C59CE4]/30 text-[#3D295C] flex items-center justify-center">
                        <Compass className="w-6 h-6" />
                      </div>
                      <h3 className="font-heading font-black text-2xl text-[#3D295C]">حضور يبدأ من التفاصيل</h3>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        خزامى شركة سعودية متخصصة في تخطيط وتصميم وتنفيذ الفعاليات والتجارب المتكاملة. نعمل مع الجهات الحكومية والشركات والمؤسسات على بناء فعاليات تعكس هوية الجهة، وتحقق أهدافها، وتمنح الحضور تجربة منظمة ومميزة.
                      </p>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        يجمع فريقنا بين الإبداع والتنظيم والتشغيل الميداني، ونتولى إدارة تفاصيل المشروع من التصور الأول حتى انتهاء الفعالية وتسليم مخرجاتها.
                      </p>
                    </motion.div>
                  )}
                  {activeTab === 'vision' && (
                    <motion.div
                      key="vision"
                      initial={{ opacity: 0, scale: 0.95, x: 20 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.95, x: -20 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-4 text-right"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-[#F2ECF7] border border-[#C59CE4]/30 text-[#3D295C] flex items-center justify-center">
                        <Eye className="w-6 h-6" />
                      </div>
                      <h3 className="font-heading font-black text-2xl text-[#3D295C]">رؤيتنا</h3>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        أن تكون خزامى شريكًا موثوقًا في صناعة فعاليات وتجارب سعودية ذات حضور مؤثر وتنفيذ احترافي.
                      </p>
                      <div className="pt-4">
                        <span className="text-xs font-bold text-[#3D295C] bg-[#F2ECF7] px-3.5 py-1.5 rounded-full border border-[#C59CE4]/30 inline-block">
                          طموح سعودي بلا حدود
                        </span>
                      </div>
                    </motion.div>
                  )}
                  {activeTab === 'mission' && (
                    <motion.div
                      key="mission"
                      initial={{ opacity: 0, scale: 0.95, x: 20 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.95, x: -20 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-4 text-right"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-[#F2ECF7] border border-[#C59CE4]/30 text-[#3D295C] flex items-center justify-center">
                        <Target className="w-6 h-6" />
                      </div>
                      <h3 className="font-heading font-black text-2xl text-[#3D295C]">رسالتنا</h3>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        تحويل أهداف عملائنا إلى فعاليات متكاملة تجمع بين الفكرة الواضحة، والتصميم المدروس، والتنفيذ المنظم.
                      </p>
                      <div className="pt-4">
                        <span className="text-xs font-bold text-[#3D295C] bg-[#F2ECF7] px-3.5 py-1.5 rounded-full border border-[#C59CE4]/30 inline-block">
                          دقة تشغيلية وإبداع ميداني
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: VALUES */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 lg:pl-8 space-y-4 text-right"
          >
            <span className="text-xs font-bold text-[#3D295C] bg-[#F2ECF7] px-3.5 py-1 rounded-full border border-[#C59CE4]/20 font-heading inline-block">
              قيمنا
            </span>
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-heading font-black text-3xl sm:text-4xl text-[#3D295C] leading-relaxed"
            >
              مبادئ نؤمن بها ونترجمها واقعاً
            </motion.h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              كل قيمة نتبناها في خزامى تمثل ركيزة أساسية لعملنا الميداني والإبداعي؛ لضمان تقديم تجارب استثنائية تبقى في ذاكرة ضيوفك وتفوق تطلعاتك.
            </p>
          </motion.div>
          <div className="lg:col-span-7 space-y-4">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white p-6 sm:p-7 rounded-3xl border border-gray-100 shadow-md hover:border-[#C59CE4] hover:shadow-xl hover:scale-[1.02] hover:bg-gradient-to-l hover:from-[#F2ECF7]/40 hover:to-white transition-all duration-300 flex items-center justify-between relative overflow-hidden group cursor-pointer"
              >
                <span className="font-heading font-black text-3xl sm:text-4xl text-gray-200 group-hover:text-[#3D295C] transition-colors shrink-0 ml-6">
                  {i + 1}
                </span>
                <div className="space-y-1 relative z-10 text-right flex-1">
                  <h4 className="font-heading font-bold text-lg sm:text-xl text-[#3D295C] group-hover:text-[#533B78] transition-colors">
                    {v.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: OUR SOLUTIONS */}
      <section className="bg-[#180F29] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden khuzama-pattern-dark border-y border-[#C59CE4]/20">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-[#180F29] bg-[#C59CE4] px-4 py-1.5 rounded-full font-heading inline-block shadow-lg">حلولنا</span>         
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-relaxed"
            >
              حلول تبدأ من الهدف… لا من قائمة التجهيزات.
            </motion.h2>
            <p className="text-sm sm:text-base text-purple-100/80 leading-relaxed">
              تصميم متكامل لكل زاوية في فعاليتك، مرسوم بعناية لضمان تجربة لا تُنسى.
            </p>
          </div>        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((sol, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#241A38] rounded-[32px] border border-[#C59CE4]/30 overflow-hidden relative group flex flex-col justify-between shadow-2xl hover:border-[#C59CE4] hover:shadow-[0_20px_50px_rgba(197,156,228,0.2)] transition-all duration-300 cursor-pointer"
              >
                <div className="h-52 w-full relative overflow-hidden shrink-0">
                  <motion.img 
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                    src={sol.image} 
                    alt={sol.title} 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#241A38] via-[#241A38]/30 to-transparent"></div>
                  <span className="absolute top-4 right-4 bg-[#180F29]/80 backdrop-blur-md text-[#C59CE4] border border-[#C59CE4]/30 text-xs font-bold px-3 py-1 rounded-full font-heading">
                    {index + 1}
                  </span>
                </div>
                <div className="p-7 space-y-4 flex-1 flex flex-col justify-between text-right">
                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-xl text-white group-hover:text-[#C59CE4] transition-colors">{sol.title}</h3>
                    <p className="text-xs sm:text-sm text-purple-100/80 leading-relaxed">{sol.desc}</p>
                  </div>
                  <div className="space-y-2 pt-4 border-t border-[#C59CE4]/20">
                    <ul className="space-y-2">
                      {sol.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-xs text-purple-100/90">
                          <CheckCircle className="w-4 h-4 text-[#C59CE4] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: SECTORS WE SERVE */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-[#3D295C] bg-[#F2ECF7] px-4 py-1.5 rounded-full border border-[#C59CE4]/30 font-heading inline-block shadow-sm">
              القطاعات المستهدفة
            </span>         
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#3D295C] tracking-tight leading-relaxed pb-2"
            >
              لكل قطاع طريقته… ولكل تجربة تفاصيلها.
            </motion.h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
              نصمم بيئة عمل متكاملة تناسب طبيعة كل جهة وتلبي أرفع المعايير الخاصة بها.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sec, i) => {
              const IconComponent = sec.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white p-8 rounded-[32px] border border-gray-200/80 shadow-md hover:shadow-2xl hover:border-[#C59CE4] hover:bg-gradient-to-l hover:from-[#F2ECF7]/40 hover:to-white transition-all duration-300 flex flex-col justify-between text-right relative overflow-hidden group cursor-pointer"
                >
                  <span className="absolute top-2 left-5 font-heading font-black text-6xl sm:text-7xl text-gray-100 group-hover:text-[#3D295C]/10 transition-colors select-none pointer-events-none">
                    {i + 1}
                  </span>
                  <div className="space-y-6 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-[#F2ECF7] border border-[#C59CE4]/30 text-[#3D295C] flex items-center justify-center group-hover:bg-[#3D295C] group-hover:text-white transition-all duration-300 shadow-sm">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-heading font-bold text-xl text-[#3D295C] group-hover:text-[#533B78] transition-colors">
                        {sec.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {sec.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7: METHODOLOGY */}
      <section className="bg-[#180F29] text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden khuzama-pattern-dark border-y border-[#C59CE4]/20">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-[#3D295C] bg-[#C59CE4] px-4 py-1.5 rounded-full font-heading inline-block">
              منهجية العمل
            </span>
            
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-relaxed"
            >
              كيف نمشي معك؟
            </motion.h2>
            <p className="text-sm sm:text-base text-purple-100/90 leading-relaxed">
              رحلة متكاملة مرسومة بخطوات دقيقة، تمشي معك من الفكرة وحتى تسليم الفعالية بنجاح.
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto h-[1500px] hidden md:block">
            <div className="absolute inset-0 flex justify-center pointer-events-none z-0">
              <svg className="h-full w-full stroke-[#C59CE4] stroke-[5] fill-none stroke-round" viewBox="0 0 100 1400" preserveAspectRatio="none">
                <path d="M 50 50 C 130 200, -30 320, 50 500 C 130 680, -30 800, 50 980 C 130 1160, -30 1280, 50 1350" />
              </svg>
            </div>
            {methodologySteps.map((item, index) => {
              const isActive = activeMethodStep === index;
              const curvePositions = [
                { top: '40px', alignRight: false },
                { top: '280px', alignRight: true },
                { top: '520px', alignRight: false },
                { top: '760px', alignRight: true },
                { top: '1000px', alignRight: false },
                { top: '1240px', alignRight: true }
              ];
              const pos = curvePositions[index];
              return (
                <div 
                  key={index}
                  style={{ top: pos.top }}
                  className={`absolute w-full flex items-center cursor-pointer z-10 ${
                    pos.alignRight ? 'flex-row-reverse' : 'flex-row'
                  }`}
                  onClick={() => setActiveMethodStep(index)}
                  onMouseEnter={() => setActiveMethodStep(index)}
                >
                  <div className={`w-[calc(50%-65px)] p-7 sm:p-8 rounded-[32px] border transition-all duration-500 relative overflow-hidden group ${
                    isActive 
                      ? 'bg-white text-[#180F29] border-[#C59CE4] shadow-[0_0_60px_rgba(197,156,228,0.7)] scale-105' 
                      : 'bg-[#241A38]/90 backdrop-blur-md text-white border-[#C59CE4]/30 hover:bg-[#241A38] hover:border-[#C59CE4]'
                  }`}>
                    <span className={`absolute -top-6 -right-2 font-heading font-black text-8xl sm:text-9xl select-none pointer-events-none transition-all duration-300 ${
                      isActive ? 'text-gray-200 opacity-100' : 'text-white/10 opacity-70'
                    }`}>
                      {item.step}
                    </span>
                    <div className="relative z-10 space-y-2 text-right">
                      <h4 className={`font-heading font-bold text-xl sm:text-2xl pt-2 ${isActive ? 'text-[#3D295C]' : 'text-white'}`}>
                        {item.title}
                      </h4>
                      <p className={`text-xs sm:text-sm leading-relaxed ${isActive ? 'text-gray-700' : 'text-purple-100/80'}`}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center shrink-0 w-[130px] relative z-20">
                    <div className={`w-10 h-10 rounded-full border-2 transition-all duration-500 flex items-center justify-center ${
                      isActive 
                        ? 'bg-[#C59CE4] border-white shadow-[0_0_35px_#C59CE4] scale-125' 
                        : 'bg-[#180F29] border-[#C59CE4]/40 opacity-60'
                    }`}>
                      {isActive && <div className="w-3.5 h-3.5 rounded-full bg-[#180F29]" />}
                    </div>
                  </div>
                  <div className="w-[calc(50%-65px)]" />
                </div>
              );
            })}
          </div>
          <div className="space-y-6 md:hidden">
            {methodologySteps.map((item, index) => {
              const isActive = activeMethodStep === index;
              return (
                <div 
                  key={index}
                  onClick={() => setActiveMethodStep(index)}
                  className={`p-6 rounded-3xl text-right relative overflow-hidden shadow-lg transition-all duration-300 ${
                    isActive 
                      ? 'bg-white text-[#180F29] border-2 border-[#C59CE4] scale-105' 
                      : 'bg-[#241A38] border border-[#C59CE4]/30 text-white'
                  }`}
                >
                  <span className={`absolute top-2 left-4 text-6xl font-black ${isActive ? 'text-gray-200' : 'text-white/10'}`}>{item.step}</span>
                  <h4 className={`font-heading font-bold text-xl ${isActive ? 'text-[#3D295C]' : 'text-[#C59CE4]'}`}>{item.step} / {item.title}</h4>
                  <p className={`text-xs leading-relaxed ${isActive ? 'text-gray-700' : 'text-purple-100/80'}`}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 8: WHY KHUZAMA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 lg:pl-8 space-y-4 text-right"
          >
            <span className="text-xs font-bold text-[#3D295C] bg-[#F2ECF7] px-3.5 py-1 rounded-full border border-[#C59CE4]/20 font-heading inline-block">
              لماذا خزامى؟
            </span>      
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-heading font-black text-3xl sm:text-4xl text-[#3D295C] leading-relaxed"
            >
              لأن نجاح الفعالية لا يعتمد على المشهد وحده.
            </motion.h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              ركائز ثابتة ومعايير دقيقة نصنع بها الفرق في كل تفصيلة ميدانية لضمان نجاح استثنائي.
            </p>
          </motion.div>
          <div className="lg:col-span-7 space-y-4">
            {whyKhuzamaPoints.map((point, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white p-6 sm:p-7 rounded-3xl border border-gray-100 shadow-md hover:border-[#C59CE4] hover:shadow-xl hover:scale-[1.02] hover:bg-gradient-to-l hover:from-[#F2ECF7]/40 hover:to-white transition-all duration-300 flex items-center justify-between relative overflow-hidden group cursor-pointer"
              >
                <span className="font-heading font-black text-3xl sm:text-4xl text-gray-200 group-hover:text-[#3D295C] transition-colors shrink-0 ml-6">
                  {i + 1}
                </span>
                <div className="space-y-1 relative z-10 text-right flex-1">
                  <h4 className="font-heading font-bold text-base sm:text-lg text-gray-800 group-hover:text-[#3D295C] transition-colors leading-relaxed">
                    {point}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA BANNER */}
      {/* SECTION 9: FINAL CTA BANNER */}
<section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
  <div className="bg-[#180F29] rounded-3xl p-8 sm:p-12 text-center text-white border border-[#C59CE4]/30 shadow-2xl khuzama-pattern-dark relative overflow-hidden space-y-6">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C59CE4]/10 via-transparent to-transparent pointer-events-none"></div>    
    <div className="relative z-10 max-w-xl mx-auto space-y-3">
      <motion.h3 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="font-heading font-black text-2xl sm:text-3xl text-white"
      >
        كل فعالية تبدأ بتفاصيل بسيطة
      </motion.h3>
      <p className="text-xs sm:text-sm text-purple-100/80 leading-relaxed">
        فريق خزامى متواجد في محادثة واتساب المباشرة للإجابة عن كافة الاستفسارات ومناقشة تفاصيل فعاليتك.
      </p>
    </div>
    <div className="relative z-10 pt-2">
      <button
        onClick={() => onOpenWhatsAppModal()}
        className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#533B78] via-[#432E61] to-[#3D295C] text-white font-bold text-sm sm:text-base border border-[#C59CE4]/40 shadow-xl hover:border-[#C59CE4] hover:shadow-purple-900/50 transition-all cursor-pointer"
      >
        <MessageCircle className="w-5 h-5 text-[#C59CE4]" />
        <span className="font-heading">ابدأ تجهيز فعاليتك</span>
      </button>
    </div>
  </div>
</section>
    </div>
  );
};
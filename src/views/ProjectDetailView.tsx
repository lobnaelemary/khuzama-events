import React, { useState } from 'react';
import { PageRoute, Project } from '../types';
import { LightboxModal } from '../components/LightboxModal';
import { ChevronLeft, ChevronRight, MapPin, Users, Clock, CheckCircle, Building2, Image as ImageIcon, X, MessageCircle } from 'lucide-react';
import { getProjectWhatsAppUrl, openWhatsAppDirect } from '../utils/whatsapp';
import { motion } from 'framer-motion';

interface ProjectDetailViewProps {
  project?: Project | null;
  onNavigate: (route: PageRoute) => void;
  onOpenWhatsAppModal: () => void;
}

export const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({
  project: externalProject,
  onNavigate,
  onOpenWhatsAppModal
}) => {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(null);

  const dummyProject = {
    title: "احتفالية يوم التأسيس المجيدة",
    client: "جهة حكومية رسمية",
    categoryName: "فعاليات حكومية",
    city: "الرياض",
    year: "2024",
    attendees: "+50,000 زائر",
    duration: "5 أيام",
    heroImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80",
    fullDescription: "صنعنا ملحمة وطنية خالدة تستحضر عبق التاريخ بروح العصر. تولينا التخطيط الهندسي الشامل، تصميم مسرح الحدث الرئيسي، هندسة الهوية الحية، وإدارة تفاصيل الضيافة والحشود بدقة ميدانية لا تُغفل شيئاً.",
    scopeOfWork: [
      "تصميم الهوية البصرية وشاشات العرض التفاعلية",
      "بناء وتجهيز المسرح الرئيسي والإنشاءات المؤقتة",
      "هندسة الصوت الميداني والإضاءات السينمائية",
      "إدارة البروتوكول والضيافة التراثية الفاخرة",
      "التنظيم الميداني وإدارة حركة الجماهير والأمن",
      "التوثيق المرئي والتلفزيوني المتكامل للمشروع"
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80" },
      { url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80" },
      { url: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80" },
      { url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80" },
      { url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80" }
    ]
  };

  const project = (externalProject && externalProject.title) ? externalProject : dummyProject;

  const handleBackToWorks = () => {
    onNavigate('works');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLaunchWhatsApp = () => {
    let text = `مرحباً خزامى، اطلعت على مشروع "${project.title}" وأرغب في مناقشة فعالية قريبة منه.`;
    const url = `https://wa.me/966532111992?text=${encodeURIComponent(text)}`;
    openWhatsAppDirect(url);
  };

  const scopeItems = (project as any).scopeOfWork || (project as any).scope || (project as any).services || dummyProject.scopeOfWork;
  const descriptionText = (project as any).fullDescription || (project as any).description || dummyProject.fullDescription;
  const coverImg = (project as any).heroImage || (project as any).coverImage || (project as any).image || dummyProject.heroImage;
  const galleryList = (project as any).gallery || dummyProject.gallery;

  return (
    <div className="min-h-screen bg-[#F8F7F4] pt-20 pb-20 space-y-12 overflow-hidden" dir="rtl">
      
      {/* 1. القسم الأول: غلاف المشروع وزر العودة الفاتح المدمج */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-[32px] overflow-hidden bg-[#180F29] text-white shadow-2xl h-[420px] sm:h-[480px] flex flex-col justify-end p-6 sm:p-12 khuzama-pattern-dark border border-[#C59CE4]/30"
        >
          {coverImg && (
            <motion.img
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              src={coverImg}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#180F29] via-[#180F29]/40 to-transparent" />

          {/* زر العودة */}
          <motion.button
            whileHover={{ scale: 1.03, x: -3 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleBackToWorks}
            className="absolute top-6 left-6 z-30 inline-flex items-center gap-2 text-xs font-bold text-[#3D295C] bg-white/95 hover:bg-white px-5 py-2.5 rounded-full backdrop-blur-md transition-all duration-300 cursor-pointer shadow-xl border border-[#C59CE4]/40 font-heading"
          >
            <ChevronRight className="w-4 h-4 text-[#3D295C]" />
            <span>العودة لصفحة أعمالنا</span>
          </motion.button>

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight"
            >
              {project.title}
            </motion.h1>
          </div>
        </motion.div>
      </section>

      {/* 2. شريط المعلومات السريعة (4 بنود) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 lg:divide-x lg:divide-x-reverse divide-gray-100 items-center"
        >
          <div className="flex items-center justify-start gap-4 pt-4 sm:pt-0">
            <div className="w-12 h-12 rounded-2xl bg-[#F2ECF7] text-[#3D295C] flex items-center justify-center shrink-0 border border-[#C59CE4]/30">
              <Building2 className="w-6 h-6 text-[#3D295C]" />
            </div>
            <div className="space-y-0.5 text-right">
              <span className="text-[11px] text-gray-400 block font-medium font-heading">الجهة المعنية</span>
              <span className="font-bold text-sm text-[#3D295C]">{project.client}</span>
            </div>
          </div>

          <div className="flex items-center justify-start gap-4 pt-4 sm:pt-0 lg:pr-6">
            <div className="w-12 h-12 rounded-2xl bg-[#F2ECF7] text-[#3D295C] flex items-center justify-center shrink-0 border border-[#C59CE4]/30">
              <MapPin className="w-6 h-6 text-[#3D295C]" />
            </div>
            <div className="space-y-0.5 text-right">
              <span className="text-[11px] text-gray-400 block font-medium font-heading">المدينة والسنة</span>
              <span className="font-bold text-sm text-[#3D295C]">{project.city || 'الرياض'} — {project.year || '2024'}</span>
            </div>
          </div>

          <div className="flex items-center justify-start gap-4 pt-4 sm:pt-0 lg:pr-6">
            <div className="w-12 h-12 rounded-2xl bg-[#F2ECF7] text-[#3D295C] flex items-center justify-center shrink-0 border border-[#C59CE4]/30">
              <Clock className="w-6 h-6 text-[#3D295C]" />
            </div>
            <div className="space-y-0.5 text-right">
              <span className="text-[11px] text-gray-400 block font-medium font-heading">مدة التجهيز والتنفيذ</span>
              <span className="font-bold text-sm text-[#3D295C]">{(project as any).duration || '5 أيام'}</span>
            </div>
          </div>

          <div className="flex items-center justify-start gap-4 pt-4 sm:pt-0 lg:pr-6">
            <div className="w-12 h-12 rounded-2xl bg-[#F2ECF7] text-[#3D295C] flex items-center justify-center shrink-0 border border-[#C59CE4]/30">
              <Users className="w-6 h-6 text-[#3D295C]" />
            </div>
            <div className="space-y-0.5 text-right">
              <span className="text-[11px] text-gray-400 block font-medium font-heading">عدد الحضور</span>
              <span className="font-bold text-sm text-[#3D295C]">{(project as any).attendees || '+50,000 زائر'}</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. نظرة عامة على المشروع (محسّنة بأسلوب UX Writing) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-3xl p-8 sm:p-10 shadow-md border border-gray-100 space-y-4 text-right"
        >
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#3D295C] bg-[#F2ECF7] px-3.5 py-1 rounded-full border border-[#C59CE4]/20 inline-block font-heading">
              نظرة عامة
            </span>
            <motion.h3 
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-heading font-black text-2xl sm:text-3xl text-[#3D295C]"
            >
             معلومات المشروع
            </motion.h3>
          </div>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-sans">
            {descriptionText}
          </p>
        </motion.div>
      </section>

      {/* 4. ما الذي توليناه في هذا المشروع؟ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-[#180F29] rounded-3xl p-8 sm:p-12 shadow-2xl border border-[#C59CE4]/30 khuzama-pattern-dark space-y-6 text-right"
        >
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#3D295C] bg-[#C59CE4] px-4 py-1.5 rounded-full font-heading inline-block shadow-lg">
              نطاق العمل
            </span>
            <motion.h3 
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-heading font-black text-2xl sm:text-3xl text-white"
            >
              ما الذي توليناه في هذا المشروع؟
            </motion.h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {scopeItems.map((srv: string, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ scale: 1.01, backgroundColor: '#2b1f42' }}
                className="p-5 rounded-2xl bg-[#241A38] border border-[#C59CE4]/20 flex items-center justify-between text-white shadow-md hover:border-[#C59CE4] transition-all cursor-pointer"
              >
                <span className="text-sm sm:text-base font-medium font-sans">{srv}</span>
                <div className="w-8 h-8 rounded-full bg-[#180F29] text-[#C59CE4] flex items-center justify-center shrink-0 border border-[#C59CE4]/30">
                  <CheckCircle className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 5. لقطات من التجربة (معرض صور نقي وخالٍ من الشروحات) */}
      {galleryList && galleryList.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="space-y-2 text-right">
            <span className="text-xs font-bold text-[#3D295C] bg-[#F2ECF7] px-3.5 py-1 rounded-full border border-[#C59CE4]/20 inline-block font-heading">
              المعرض المرئي
            </span>
            <motion.h3 
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-heading font-black text-2xl sm:text-3xl text-[#3D295C]"
            >
              لقطات من التجربة
            </motion.h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryList.map((media: any, idx: number) => {
              const imgUrl = typeof media === 'string' ? media : media.url;
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setActiveGalleryIndex(idx)}
                  className="group relative h-64 sm:h-72 rounded-3xl overflow-hidden bg-black cursor-pointer shadow-xl border border-gray-200"
                >
                  <img
                    src={imgUrl}
                    alt="معرض المشروع"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center shadow-lg">
                      <ImageIcon className="w-5 h-5" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      )}

      {/* 6. الدعوة الختامية للمشروع */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-[#180F29] rounded-3xl p-8 sm:p-14 text-center text-white border border-[#C59CE4]/30 shadow-2xl khuzama-pattern-dark relative overflow-hidden space-y-6"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C59CE4]/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative z-10 max-w-xl mx-auto space-y-3">
            <motion.h3 
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-heading font-black text-2xl sm:text-3xl text-white"
            >
              تبحث عن تجربة قريبة من هذا المشروع؟
            </motion.h3>
            <p className="text-xs sm:text-sm text-purple-100/80 leading-relaxed font-sans">
              شاركنا تفاصيل فعاليتك، وفريق خزامى يساعدك في بناء تصور يناسب هدفك وموقعك وجمهورك.
            </p>
          </div>
          <div className="relative z-10 pt-2">
            <button
              onClick={handleLaunchWhatsApp}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#533B78] via-[#432E61] to-[#3D295C] text-white font-bold text-sm sm:text-base border border-[#C59CE4]/40 shadow-xl hover:border-[#C59CE4] hover:shadow-purple-900/50 transition-all cursor-pointer hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 text-[#C59CE4] shrink-0" />
              <span className="font-heading">ابدأ تجهيز فعاليتك</span>
            </button>
          </div>
        </motion.div>
      </section>

      {/* Lightbox Modal */}
      {activeGalleryIndex !== null && galleryList && (
        <LightboxModalClean
          isOpen={activeGalleryIndex !== null}
          onClose={() => setActiveGalleryIndex(null)}
          imageUrl={typeof galleryList[activeGalleryIndex] === 'string' ? galleryList[activeGalleryIndex] : galleryList[activeGalleryIndex].url}
          onNext={() =>
            setActiveGalleryIndex((activeGalleryIndex + 1) % galleryList.length)
          }
          onPrev={() =>
            setActiveGalleryIndex(
              (activeGalleryIndex - 1 + galleryList.length) % galleryList.length
            )
          }
        />
      )}

    </div>
  );
};

interface LightboxCleanProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  onNext: () => void;
  onPrev: () => void;
}

const LightboxModalClean: React.FC<LightboxCleanProps> = ({
  isOpen,
  onClose,
  imageUrl,
  onNext,
  onPrev
}) => {
  if (!isOpen) return null;

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
    >
      <button 
        onClick={onClose}
        className="absolute top-6 left-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-[#3D295C] text-white flex items-center justify-center transition-all cursor-pointer border border-white/20 shadow-xl hover:scale-105"
        aria-label="إغلاق"
      >
        <X className="w-6 h-6" />
      </button>

      {/* تم تغيير السهم ليصبح يميناً في الواجهة العربية (RTL) */}
      <button 
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute left-4 sm:left-8 z-50 w-14 h-14 rounded-full bg-[#3D295C] text-[#C59CE4] hover:bg-[#C59CE4] hover:text-[#180F29] flex items-center justify-center transition-all duration-300 shadow-2xl cursor-pointer border-2 border-[#C59CE4]/40 hover:scale-110"
        aria-label="التالي"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      {/* تم تغيير السهم ليصبح يساراً في الواجهة العربية (RTL) */}
      <button 
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute right-4 sm:right-8 z-50 w-14 h-14 rounded-full bg-[#3D295C] text-[#C59CE4] hover:bg-[#C59CE4] hover:text-[#180F29] flex items-center justify-center transition-all duration-300 shadow-2xl cursor-pointer border-2 border-[#C59CE4]/40 hover:scale-110"
        aria-label="السابق"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      <div 
        className="relative max-w-5xl max-h-[85vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageUrl}
          alt="صورة مكبرة"
          referrerPolicy="no-referrer"
          className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl border border-white/10"
        />
      </div>
    </div>
  );
};
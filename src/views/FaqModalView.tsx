import React, { useState } from 'react';
import { PageRoute } from '../types';
import { HelpCircle, ChevronDown, MessageCircle, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const FAQ_DATA = [
  {
    id: 'faq-1',
    question: 'ما أنواع الفعاليات التي تنفذها خزامى؟',
    answer: 'ننفذ مجموعة واسعة من الفعاليات المتكاملة تشمل: الفعاليات الحكومية والرسمية، حفلات ومناسبات الشركات، المؤتمرات والملتقيات، المعارض والأجنحة، فعاليات الموظفين، والمناسبات الخاصة.'
  },
  {
    id: 'faq-2',
    question: 'هل تتولون المشروع كاملًا؟',
    answer: 'نعم بكل تأكيد. نمسك الصورة كاملة من فكرة الفعالية والتصميم الإبداعي وصولاً إلى التجهيز والتشغيل والإشراف الميداني الكامل، لنضمن لك تجربة متكاملة دون تشتيت بين عدة موردين.'
  },
  {
    id: 'faq-3',
    question: 'هل يمكن التعاقد على خدمة محددة؟',
    answer: 'نعم، رغم أننا نفضل إدارة المشروعات بشكل متكامل لضمان جودة وتناغم التجربة، إلا أنه يمكننا التنسيق لتقديم خدمات محددة بناءً على احتياج الفعالية ونطاق العمل المطلوب.'
  },
  {
    id: 'faq-4',
    question: 'هل توفرون تصميم هوية الفعالية؟',
    answer: 'نعم، نبدأ فعالياتنا دائماً من الفكرة والهوية الإبداعية، حيث نصمم هوية بصرية مخصصة تعكس رسالة الفعالية وتخلق تجربة بصرية متناغمة للحضور.'
  },
  {
    id: 'faq-5',
    question: 'هل توفرون المسرح والصوت والإضاءة؟',
    answer: 'نعم، نتولى الإنتاج الفني والتجهيزات الكاملة بما يشمل تصميم وبناء المسارح، الشاشات، أنظمة الصوت، الإضاءات الاحترافية، والديكورات والأجنحة المؤقتة.'
  },
  {
    id: 'faq-6',
    question: 'هل توفرون الضيافة والكوادر؟',
    answer: 'نعم، نوفر كافة خدمات تجربة الضيف والضيافة المتكاملة، بالإضافة إلى إدارة الكوادر، الاستقبال, التسجيل، تنظيم الدخول، والبروتوكول الميداني.'
  },
  {
    id: 'faq-7',
    question: 'هل تعملون خارج الرياض؟',
    answer: 'مقرنا الرئيسي في الرياض، ونسعد بتخطيط وتنفيذ الفعاليات في مختلف مدن ومناطق المملكة العربية السعودية بناءً على طبيعة المشروع.'
  },
  {
    id: 'faq-8',
    question: 'كم يحتاج تجهيز الفعالية من وقت؟',
    answer: 'يختلف الوقت باختلاف حجم الفعالية ونطاق عملها (سواء كانت مؤتمراً، احتفالية وطنية، أو إطلاق منتج). تواصل معنا لنقوم بدراسة الجدول الزمني المناسب فوراً.'
  },
  {
    id: 'faq-9',
    question: 'ما المعلومات المطلوبة للبدء؟',
    answer: 'يسهل علينا البدء بمعلومات أساسية تشمل: نوع الفعالية، المدينة، التاريخ المتوقع، عدد الحضور التقريبي، وأي متطلبات أو أهداف ترغب بتحقيقها.'
  },
  {
    id: 'faq-10',
    question: 'كيف أبدأ التواصل معكم؟',
    answer: 'الأمر أبسط ما يكون؛ لا توجد نماذج تسجيل طويلة أو معقدة، فقط اضغط على زر «ابدأ تجهيز فعاليتك» لتفتح معك محادثة واتساب مباشرة مع فريقنا لمناقشة التفاصيل.'
  }
];

interface FaqModalViewProps {
  onOpenWhatsAppModal: () => void;
  onNavigate: (route: PageRoute) => void;
}

export const FaqModalView: React.FC<FaqModalViewProps> = ({
  onOpenWhatsAppModal,
  onNavigate
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="pt-24 pb-20 space-y-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header المميز بخلفية وتصميم راقي مع أيكون الأسئلة في البادج */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#3D295C] via-[#2A1B42] to-[#180F29] text-white p-8 sm:p-12 text-center space-y-4 border border-[#C59CE4]/30 shadow-xl khuzama-pattern-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C59CE4]/15 via-transparent to-transparent pointer-events-none"></div>
        <div className="relative z-10 space-y-3">
          <span className="inline-flex items-center gap-2 text-xs font-bold text-[#3D295C] bg-[#C59CE4] px-4 py-1.5 rounded-full shadow-md">
            <HelpCircle className="w-4 h-4 text-[#3D295C]" />
            <span>مركز المعرفة والإجابات الفورية</span>
          </span>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight"
          >
            الأسئلة الشائعة عن خدمات خزامى
          </motion.h1>

          <p className="text-xs sm:text-sm text-purple-100/90 max-w-xl mx-auto leading-relaxed">
            تجد هنا إجابات واضحة ومباشرة عن طريقة العمل، نطاق الخدمات، والتنظيم الميداني المتكامل.
          </p>
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {FAQ_DATA.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={item.id}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'bg-white border-[#C59CE4] shadow-md ring-1 ring-[#C59CE4]/20'
                  : 'bg-white border-gray-100 hover:border-[#C59CE4]/50'
              }`}
            >
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full text-right p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
              >
                <span className="font-heading font-bold text-base sm:text-lg text-[#3D295C]">
                  {item.question}
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-[#3D295C] text-white rotate-180 shadow-sm' : 'bg-[#F2ECF7] text-[#3D295C]'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-0 text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-gray-100/80 mt-1 bg-[#F8F7F4]/40">
                  <p className="pt-3">{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer CTA Banner مع البوتن الموثق بالصورة بدقة */}
      <div className="bg-[#180F29] text-white p-8 sm:p-10 rounded-3xl text-center space-y-4 border border-[#C59CE4]/30 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-xl mx-auto space-y-3">
          <motion.h3 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-heading font-black text-xl sm:text-2xl text-white"
          >
            هل لديك سؤال آخر؟
          </motion.h3>
          <p className="text-xs sm:text-sm text-purple-100/80 max-w-md mx-auto leading-relaxed">
            فريق خزامى متواجد في محادثة واتساب المباشرة للإجابة عن كافة الاستفسارات ومناقشة تفاصيل فعاليتك.
          </p>
        </div>
        <div className="pt-2 flex justify-center relative z-10">
          <button
            onClick={onOpenWhatsAppModal}
            className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#533B78] via-[#432E61] to-[#3D295C] text-white font-bold text-sm border border-[#C59CE4]/40 shadow-lg hover:border-[#C59CE4] hover:shadow-purple-900/50 transition-all duration-300 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 text-[#C59CE4]" />
            <span>ابدأ تجهيز فعاليتك</span>
          </button>
        </div>
      </div>

    </div>
  );
};
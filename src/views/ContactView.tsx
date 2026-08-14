import React, { useState } from 'react';
import { PageRoute } from '../types';
import { KHUZAMA_LOCATION, KHUZAMA_WHATSAPP_NUMBER, KHUZAMA_EMAIL, openWhatsAppDirect } from '../utils/whatsapp';
import { MessageCircle, MapPin, Mail, Clock, CheckCircle, Building, Users, ChevronDown, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactViewProps {
  onOpenWhatsAppModal: () => void;
  onNavigate: (route: PageRoute) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({
  onOpenWhatsAppModal,
  onNavigate
}) => {
  const [eventType, setEventType] = useState('فعالية حكومية أو رسمية');
  const [city, setCity] = useState('الرياض');
  const [attendees, setAttendees] = useState('1,000 إلى 5,000 زائر');
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'تخيط وتنفيذ متكامل',
    'تجهيز المسرح والصوت والإضاءة'
  ]);

  const eventTypes = [
    'فعالية حكومية أو رسمية',
    'مؤتمر أو ملتقى أعمال',
    'جناح معرض أو بوث',
    'حفل شركة وتدشين هوية',
    'يوم مفتوح للموظفين والعائلات',
    'مناسبة خاصة لكبار الشخصيات'
  ];

  const cities = ['الرياض', 'جدة', 'المنطقة الشرقية', 'العلا', 'أبها / عسير', 'مدينة أخرى'];
  const attendeeCounts = ['أقل من 500 ضيف', '500 - 2,000 ضيف', '2,000 - 10,000 ضيف', '+10,000 ضيف'];

  const availableServices = [
    'تخيط وتنفيذ متكامل',
    'الهوية البصرية والمحتوى',
    'تجهيز المسرح والصوت والإضاءة',
    'بروتوكول واستقبال الضيوف',
    'الضيافة الفاخرة والديكورات',
    'التشغيل والكوادر الميدانية'
  ];

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleLaunchWhatsApp = () => {
    let text = `مرحباً خزامى، أرغب في بدء تجهيز فعالية جديدة.`;
    text += `\nنوع الفعالية: ${eventType}`;
    text += `\nالمدينة: ${city}`;
    text += `\nعدد الحضور التقريبي: ${attendees}`;
    if (selectedServices.length > 0) {
      text += `\nالخدمات المطلوبة: ${selectedServices.join(' - ')}`;
    }
    const url = `https://wa.me/966532111992?text=${encodeURIComponent(text)}`;
    openWhatsAppDirect(url);
  };

  return (
    <div className="pt-20 pb-16 space-y-16 overflow-hidden bg-[#F8F7F4]">
      
      {/* SECTION 1: HERO - تم توحيد الـ pt-32 لتطابق باقي الصفحات تماماً */}
      <section className="bg-[#180F29] text-white pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden khuzama-pattern-dark border-b border-[#C59CE4]/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C59CE4]/15 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <span className="inline-flex items-center gap-2 text-xs font-bold text-[#3D295C] bg-[#C59CE4] px-4 py-1.5 rounded-full shadow-md">
            <PhoneCall className="w-3.5 h-3.5 text-[#3D295C]" />
            <span>تواصل مباشر وحي</span>
          </span>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight"
          >
            لنبدأ من فكرتك
          </motion.h1>
          <p className="max-w-4xl mx-auto text-sm sm:text-base text-purple-100/90 leading-relaxed">
            اختر تفاصيل فعاليتك أدناه أو أرسل لنا مباشرة عبر واتساب، وسيتواصل معك فريق خزامى لفهم الاحتياج والخطوات التالية
          </p>
        </div>
      </section>

      {/* SECTION 2: INTERACTIVE FORM & CARDS BELOW */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Main Interactive Form */}
        <div className="bg-white p-6 sm:p-12 rounded-3xl border border-gray-100 shadow-xl space-y-6">
          <div className="space-y-2 border-b border-gray-100 pb-4 text-center sm:text-right">
            <span className="text-xs font-bold text-[#3D295C] bg-[#F2ECF7] px-3.5 py-1 rounded-full border border-[#C59CE4]/20 inline-block">
              محددات سريعة
            </span>
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-heading font-black text-xl sm:text-2xl text-[#3D295C]"
            >
              خصص تفاصيل فعاليتك للانتقال الفوري
            </motion.h2>
            <p className="text-xs sm:text-sm text-gray-600">
              حدد الخيارات التي تناسب مشروعك لتجهيز رسالة واتساب جاهزة ومخصصة بدقة:
            </p>
          </div>

          <div className="space-y-5">
            {/* Step 1: Event Type */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#3D295C] font-heading">
                <Building className="w-4 h-4 text-[#C59CE4]" />
                <span>1. ما هو نوع الفعالية؟</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {eventTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setEventType(type)}
                    className={`px-3.5 py-2.5 rounded-xl text-xs font-medium text-right transition-all border cursor-pointer ${
                      eventType === type
                        ? 'bg-[#3D295C] text-white border-[#3D295C] font-bold shadow-md'
                        : 'bg-[#F8F7F4] text-gray-700 border-gray-200 hover:border-[#C59CE4]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: City & Attendees */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#3D295C] font-heading">
                  <MapPin className="w-4 h-4 text-[#C59CE4]" />
                  <span>2. المدينة:</span>
                </label>
                <div className="relative">
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-[#F8F7F4] border border-gray-200 rounded-2xl px-4 py-3 text-xs text-gray-800 appearance-none focus:outline-none focus:border-[#3D295C] cursor-pointer"
                  >
                    {cities.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                    <ChevronDown className="w-4 h-4 text-[#3D295C]" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#3D295C] font-heading">
                  <Users className="w-4 h-4 text-[#C59CE4]" />
                  <span>3. عدد الحضور التقريبي:</span>
                </label>
                <div className="relative">
                  <select
                    value={attendees}
                    onChange={(e) => setAttendees(e.target.value)}
                    className="w-full bg-[#F8F7F4] border border-gray-200 rounded-2xl px-4 py-3 text-xs text-gray-800 appearance-none focus:outline-none focus:border-[#3D295C] cursor-pointer"
                  >
                    {attendeeCounts.map((count) => (
                      <option key={count} value={count}>{count}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                    <ChevronDown className="w-4 h-4 text-[#3D295C]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Services Selection */}
            <div className="space-y-2 pt-1">
              <label className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#3D295C] font-heading">
                <span>4. الخدمات المطلوبة (اختياري):</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {availableServices.map((srv) => {
                  const isChecked = selectedServices.includes(srv);
                  return (
                    <button
                      key={srv}
                      type="button"
                      onClick={() => toggleService(srv)}
                      className={`px-3.5 py-2.5 rounded-xl text-xs font-medium text-right transition-all flex items-center justify-between border cursor-pointer ${
                        isChecked
                          ? 'bg-[#3D295C] text-white border-[#3D295C] font-semibold'
                          : 'bg-[#F8F7F4] text-gray-700 border-gray-200 hover:border-[#C59CE4]'
                      }`}
                    >
                      <span className="truncate">{srv}</span>
                      {isChecked && <CheckCircle className="w-4 h-4 text-[#C59CE4] shrink-0 mr-1" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100">
            <button
              onClick={handleLaunchWhatsApp}
              className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-full bg-gradient-to-r from-[#533B78] via-[#432E61] to-[#3D295C] text-white font-bold text-sm border border-[#C59CE4]/40 shadow-xl hover:border-[#C59CE4] hover:shadow-purple-900/50 transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 text-[#C59CE4]" />
              <span className="font-heading">إرسال</span>
            </button>
          </div>
        </div>

        {/* Dynamic Small Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: WhatsApp Direct */}
          <a
            href={`https://wa.me/${KHUZAMA_WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="bg-[#180F29] text-white p-5 rounded-3xl border border-[#C59CE4]/30 shadow-xl khuzama-pattern-dark relative overflow-hidden flex flex-col items-center text-center gap-3 group cursor-pointer hover:-translate-y-1.5 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#C59CE4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-12 h-12 rounded-2xl bg-[#C59CE4]/20 border border-[#C59CE4]/40 text-[#C59CE4] flex items-center justify-center shrink-0 shadow-inner">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div className="relative z-10 space-y-1">
              <span className="text-purple-200/70 block text-xs font-medium">واتساب المباشر</span>
              <span className="font-bold text-sm text-white group-hover:text-[#C59CE4] transition-colors" dir="ltr">
                +{KHUZAMA_WHATSAPP_NUMBER}
              </span>
            </div>
          </a>

          {/* Card 2: Email */}
          <a
            href={`mailto:${KHUZAMA_EMAIL}`}
            className="bg-[#180F29] text-white p-5 rounded-3xl border border-[#C59CE4]/30 shadow-xl khuzama-pattern-dark relative overflow-hidden flex flex-col items-center text-center gap-3 group cursor-pointer hover:-translate-y-1.5 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#C59CE4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-12 h-12 rounded-2xl bg-[#C59CE4]/20 border border-[#C59CE4]/40 text-[#C59CE4] flex items-center justify-center shrink-0 shadow-inner">
              <Mail className="w-6 h-6" />
            </div>
            <div className="relative z-10 space-y-1">
              <span className="text-purple-200/70 block text-xs font-medium">البريد الإلكتروني</span>
              <span className="font-bold text-xs text-white group-hover:text-[#C59CE4] transition-colors truncate block max-w-[200px]">
                {KHUZAMA_EMAIL}
              </span>
            </div>
          </a>

          {/* Card 3: Location */}
          <div className="bg-[#180F29] text-white p-5 rounded-3xl border border-[#C59CE4]/30 shadow-xl khuzama-pattern-dark relative overflow-hidden flex flex-col items-center text-center gap-3 group hover:-translate-y-1.5 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-[#C59CE4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-12 h-12 rounded-2xl bg-[#C59CE4]/20 border border-[#C59CE4]/40 text-[#C59CE4] flex items-center justify-center shrink-0 shadow-inner">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="relative z-10 space-y-1">
              <span className="text-purple-200/70 block text-xs font-medium">المقر الرئيسي</span>
              <span className="font-bold text-xs text-white group-hover:text-[#C59CE4] transition-colors leading-tight block">
                {KHUZAMA_LOCATION}
              </span>
            </div>
          </div>

          {/* Card 4: Working Hours */}
          <div className="bg-[#180F29] text-white p-5 rounded-3xl border border-[#C59CE4]/30 shadow-xl khuzama-pattern-dark relative overflow-hidden flex flex-col items-center text-center gap-3 group hover:-translate-y-1.5 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-[#C59CE4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-12 h-12 rounded-2xl bg-[#C59CE4]/20 border border-[#C59CE4]/40 text-[#C59CE4] flex items-center justify-center shrink-0 shadow-inner">
              <Clock className="w-6 h-6" />
            </div>
            <div className="relative z-10 space-y-1">
              <span className="text-purple-200/70 block text-xs font-medium">ساعات العمل</span>
              <span className="font-bold text-xs text-white">السبت - الخميس: 8ص - 5م</span>
            </div>
          </div>

        </div>

      </section>

      {/* SECTION 4: LOCATION MAP */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#C59CE4]/40 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <div className="flex items-center gap-2 text-[#3D295C]">
              <MapPin className="w-5 h-5" />
              <h3 className="font-heading font-bold text-lg text-[#3D295C]">موقع مقر خزامى الرئيسي (الرياض)</h3>
            </div>
            <span className="text-xs text-gray-500 font-medium hidden sm:inline">طريق صلاح الدين الأيوبي - حي الورود</span>
          </div>

          <div className="h-64 sm:h-80 w-full rounded-2xl overflow-hidden border border-[#C59CE4]/50 shadow-inner relative">
            <iframe
              title="خريطة مقر شركة خزامى"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.6256401323094!2d46.75312902485435!3d24.671010978053452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f042f2004a441%3A0x99206ac1ae47d179!2z2LfYsdmK2YIg2LXZhNin2K0g2KfZhNiv2YrZhiDYp9mE2KPZitmI2KjZitiMINin2YTYsdmK2KfYtiDYp9mE2LPYudmI2K_Zitip!5e0!3m2!1sar!2seg!4v1786245475866!5m2!1sar!2seg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* SECTION 5: FINAL CTA BANNER - تم تصحيح الزر ليعمل بسلاسة مع الدالة */}
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
              مشروعك القادم يبدأ بمحادثة
            </motion.h3>
            <p className="text-xs sm:text-sm text-purple-100/80 leading-relaxed">
              شاركنا نوع الفعالية، المدينة، التاريخ المتوقع وعدد الحضور، وفريق خزامى يتواصل معك لفهم التفاصيل وبناء تصور متكامل
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
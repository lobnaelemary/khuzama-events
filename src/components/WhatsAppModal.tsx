import React, { useState } from 'react';
import { X, MessageCircle, Sparkles, CheckCircle, MapPin, Users, Building } from 'lucide-react';
import { openWhatsAppDirect } from '../utils/whatsapp';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetProjectTitle?: string;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  presetProjectTitle
}) => {
  const [eventType, setEventType] = useState('فعالية حكومية أو رسمية');
  const [city, setCity] = useState('الرياض');
  const [date, setDate] = useState('خلال الأشهر القادمة');
  const [attendees, setAttendees] = useState('1,000 إلى 5,000 زائر');
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'تخيط وتنفيذ متكامل',
    'تجهيز المسرح والصوت والإضاءة'
  ]);

  if (!isOpen) return null;

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
    if (presetProjectTitle) {
      text = `مرحباً خزامى، اطلعت على مشروع «${presetProjectTitle}» وأرغب في مناقشة فعالية قريبة منه.`;
    } else {
      text += `\nنوع الفعالية: ${eventType}`;
      text += `\nالمدينة: ${city}`;
      text += `\nالتاريخ المتوقع: ${date}`;
      text += `\nعدد الحضور التقريبي: ${attendees}`;
      if (selectedServices.length > 0) {
        text += `\nالخدمات المطلوبة: ${selectedServices.join(' - ')}`;
      }
    }
    const url = `https://wa.me/966532111992?text=${encodeURIComponent(text)}`;
    openWhatsAppDirect(url);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#231738] text-white rounded-3xl shadow-2xl border border-[#C59CE4]/30 overflow-hidden max-h-[90vh] flex flex-col khuzama-pattern-dark">
        
        {/* Header المطابق للهوية */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-[#281B3E] via-[#3D295C] to-[#281B3E] border-b border-[#C59CE4]/20 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#C59CE4]/20 border border-[#C59CE4]/40 flex items-center justify-center text-[#C59CE4] shadow-inner">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
                ابدأ تجهيز فعاليتك مع خزامى
              </h3>
              <p className="text-xs sm:text-sm text-purple-200/80">
                محادثة مباشرة ومستمرة بدون نماذج معقدة
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/60 hover:text-white rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-5 overflow-y-auto custom-scrollbar flex-1">
          {presetProjectTitle ? (
            <div className="bg-[#3D295C]/50 border border-[#C59CE4]/30 rounded-2xl p-5 text-center space-y-2">
              <span className="text-xs text-[#C59CE4] font-semibold">المشروع المحدد:</span>
              <h4 className="font-heading font-bold text-lg text-white">{presetProjectTitle}</h4>
              
            </div>
          ) : (
            <>
              {/* Step 1: Event Type */}
              <div className="space-y-2.5">
                <label className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#C59CE4] font-heading">
                  <Building className="w-4 h-4" />
                  <span>1. ما هو نوع الفعالية؟</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {eventTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setEventType(type)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-medium text-right transition-all border cursor-pointer ${
                        eventType === type
                          ? 'bg-[#C59CE4] text-[#3D295C] border-[#C59CE4] font-bold shadow-md'
                          : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: City & Attendees */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* City */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#C59CE4] font-heading">
                    <MapPin className="w-4 h-4" />
                    <span>2. المدينة:</span>
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-[#180F29] border border-[#C59CE4]/30 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C59CE4]"
                  >
                    {cities.map((c) => (
                      <option key={c} value={c} className="bg-[#231738]">
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Attendees */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#C59CE4] font-heading">
                    <Users className="w-4 h-4" />
                    <span>3. عدد الحضور التقريبي:</span>
                  </label>
                  <select
                    value={attendees}
                    onChange={(e) => setAttendees(e.target.value)}
                    className="w-full bg-[#180F29] border border-[#C59CE4]/30 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C59CE4]"
                  >
                    {attendeeCounts.map((count) => (
                      <option key={count} value={count} className="bg-[#231738]">
                        {count}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Services Selection */}
              <div className="space-y-2.5 pt-1">
                <label className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#C59CE4] font-heading">
                  <Sparkles className="w-4 h-4" />
                  <span>4. الخدمات المطلوبة (اختياري):</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {availableServices.map((srv) => {
                    const isChecked = selectedServices.includes(srv);
                    return (
                      <button
                        key={srv}
                        type="button"
                        onClick={() => toggleService(srv)}
                        className={`px-3 py-2.5 rounded-xl text-xs font-medium text-right transition-all flex items-center justify-between border cursor-pointer ${
                          isChecked
                            ? 'bg-[#3D295C] text-white border-[#C59CE4] font-semibold'
                            : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10'
                        }`}
                      >
                        <span className="truncate">{srv}</span>
                        {isChecked && <CheckCircle className="w-3.5 h-3.5 text-[#C59CE4] shrink-0 mr-1" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </>
          )}

          {/* Quick Notice */}
          <div className="bg-white/5 p-3.5 rounded-2xl border border-white/10 flex items-center gap-2.5 text-xs text-purple-100/80">
            <CheckCircle className="w-4 h-4 text-[#C59CE4] shrink-0" />
            <span>سيفتح تطبيق واتساب فوراً برفقة الرسالة المحضرة تلقائياً. فريقنا متواجد لخدمتك.</span>
          </div>
        </div>

        {/* Modal Actions مع البوتن الموحد والأيقونة الصحيحة تماماً */}
        <div className="p-4 sm:p-5 bg-[#180F29] border-t border-[#C59CE4]/20 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-5 py-3 rounded-xl bg-white/10 text-white text-xs font-medium hover:bg-white/20 transition-colors cursor-pointer"
          >
            إلغاء
          </button>

          <button
            id="modal-launch-whatsapp-btn"
            onClick={handleLaunchWhatsApp}
            className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#533B78] via-[#432E61] to-[#3D295C] text-white font-bold text-sm border border-[#C59CE4]/40 shadow-lg hover:border-[#C59CE4] hover:shadow-purple-900/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 text-[#C59CE4]" />
            <span className="font-heading">ارسال</span>
          </button>
        </div>
      </div>
    </div>
  );
};
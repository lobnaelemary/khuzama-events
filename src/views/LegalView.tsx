import React from 'react';
import { PageRoute } from '../types';
import { ShieldCheck, Lock, FileText, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface LegalViewProps {
  type: 'privacy' | 'terms';
  onNavigate: (route: PageRoute) => void;
}

export const LegalView: React.FC<LegalViewProps> = ({ type, onNavigate }) => {
  const isPrivacy = type === 'privacy';

  return (
    <div className="pt-24 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header المطابق تماماً لصفحة الأسئلة الشائعة بالمللِي مع حركة الديزاين سيستم */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#3D295C] via-[#2A1B42] to-[#180F29] text-white p-8 sm:p-12 text-center space-y-4 border border-[#C59CE4]/30 shadow-xl khuzama-pattern-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C59CE4]/15 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="relative z-10 space-y-3">
          <span className="inline-flex items-center gap-2 text-xs font-bold text-[#3D295C] bg-[#C59CE4] px-4 py-1.5 rounded-full shadow-md">
            {isPrivacy ? <Lock className="w-3.5 h-3.5 text-[#3D295C]" /> : <FileText className="w-3.5 h-3.5 text-[#3D295C]" />}
            <span>الوثائق القانونية الرسمية</span>
          </span>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight"
          >
            {isPrivacy ? 'سياسة الخصوصية وحماية البيانات' : 'الشروط والأحكام لاستخدام المنصة'}
          </motion.h1>

          <p className="text-xs sm:text-sm text-purple-100/90 max-w-xl mx-auto leading-relaxed">
            تاريخ آخر تحديث: أغسطس 2026 • شركة خزامى لإدارة الفعاليات ذ.م.م
          </p>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm space-y-8">

        {/* Content */}
        {isPrivacy ? (
          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <p className="text-gray-600 bg-[#F8F7F4] p-4 rounded-xl border border-[#C59CE8]/20">
              نولي في "خزامى" اهتماماً بالغاً لخصوصيتك وحماية بياناتك التقنية. توضح هذه السياسة بشفافية تامة كيف نجمع ونستخدم ونحمي المعلومات عند زيارتك لمنصتنا الإلكترونية.
            </p>

            <section className="space-y-2">
              <h3 className="font-heading font-bold text-lg text-[#3D295C]">1. البيانات التقنية المجمعة</h3>
              <p>
                عند تصفحك للموقع، نجمع تلقائياً بعض البيانات التقنية غير الشخصية (مثل نوع المتصفح، نظام التشغيل، وعنوان البروتوكول التقني بشكل مجهول الهوية)؛ بهدف أساسي وهو تطوير سرعة الموقع وضمان عمله بكفاءة عالية على جميع الأجهزة.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-heading font-bold text-lg text-[#3D295C]">2. ملفات تعريف الارتباط (Cookies)</h3>
              <p>
                نستخدم ملفات تعريف الارتباط الوظيفية المؤقتة لتحسين استجابة الصفحات، تذكر تفضيلات العرض البصرية لديك، ومنحك تجربة تصفح سلسة ومريحة دون تتبع أو انتهاك لأي معلومات شخصية سرية.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-heading font-bold text-lg text-[#3D295C]">3. بيانات التحليلات وخدمات Google</h3>
              <p>
                نعتمد على أدوات موثوقة (مثل Google Analytics) لتقييم حركة المرور وفهم كيفية تفاعل الزوار مع محتوى ومشاريع الموقع، إلى جانب قياس كفاءة الحملات التسويقية والإعلانية (مثل Google Ads) لتحسين ظهورنا الرقمي للجمهور المهتم بخدماتنا.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-heading font-bold text-lg text-[#3D295C]">4. تتبع نقرات واتساب</h3>
              <p>
                لقياس مدى كفاءة المنصة كأداة تسويقية وتحسين معدلات الاستجابة، نقوم بتتبع إحصائي مجمع للنقرات على أزرار التواصل المباشر (مثل زر «ابدأ تجهيز فعاليتك»)، علماً بأن المحادثة تنتقل بك مباشرة إلى تطبيق واتساب وتخضع لسرية المكاتبات التجارية.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-heading font-bold text-lg text-[#3D295C]">5. كيفية استخدام المعلومات</h3>
              <p className="mb-2">تُستخدم البيانات المجمعة حصراً في الأغراض التالية:</p>
              <ul className="space-y-1 pr-4 list-disc text-gray-700">
                <li>تطوير وتحديث أداء الموقع وسرعة استجابته.</li>
                <li>قياس فعالية الحملات الإعلانية والتسويقية.</li>
                <li>فهم اهتمامات العملاء وتسهيل بناء العروض والتجهيزات الميدانية عند التواصل معنا.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h3 className="font-heading font-bold text-lg text-[#3D295C]">6. عدم بيع أو مشاركة بيانات المستخدمين</h3>
              <p>
                تلتزم شركة خزامى التزاماً قاطعاً وأخلاقياً بعدم بيع، تأجير، أو مشاركة أي بيانات أو معلومات تخص زوار الموقع مع أي طرف ثالث أو جهة خارجية لأغراض تجارية إطلاقاً وتحت أي ظرف.
              </p>
            </section>

            <section className="space-y-2 bg-[#F8F7F4] p-5 rounded-2xl border border-[#C59CE8]/30 mt-6">
              <h3 className="font-heading font-bold text-base text-[#3D295C] mb-2">وسائل التواصل المتعلقة بالخصوصية</h3>
              <p>
                إذا كانت لديك أي استفسارات أو ملاحظات تتعلق بسياسة الخصوصية أو حماية بياناتك، يسعدنا تواصلك معنا مباشرة عبر البريد الإلكتروني الرسمي: <strong className="text-[#3D295C]">info@khuzama.sa</strong>
              </p>
            </section>
          </div>
        ) : (
          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <p className="text-gray-600 bg-[#F8F7F4] p-4 rounded-xl border border-[#C59CE8]/20">
              تحدد هذه الوثيقة الشروط والأحكام المنظمة لاستخدام منصة "خزامى" الإلكترونية. باستخدامك للموقع، فإنك توافق تماماً على الالتزام بها.
            </p>

            <section className="space-y-2">
              <h3 className="font-heading font-bold text-lg text-[#3D295C]">1. شروط استخدام المنصة</h3>
              <p>
                موقع "خزامى" مخصص حصرياً لعرض الأعمال السابقة، التعريف بخدمات تخطيط وتنفيذ الفعاليات، وتسهيل التواصل المباشر مع فريقنا. يُحظر استخدام المنصة لأي غرض يخالف الأنظمة والقوانين المعمول بها في المملكة العربية السعودية.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-heading font-bold text-lg text-[#3D295C]">2. حقوق الملكية الفكرية والمحتوى</h3>
              <p>
                جميع المواد البصرية، الصور، الفيديوهات، التصاميم، العناوين، والنصوص المنشورة على المنصة هي ملكية فكرية حصرية لشركة "خزامى" أو مرخصة لها رسمياً من قبل الجهات المالكة للمشاريع.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-heading font-bold text-lg text-[#3D295C]">3. منع إعادة الاستخدام بدون تصريح</h3>
              <p>
                يُمنع منعاً باتاً نسخ، اقتباس، أو إعادة استخدام أي من صور المشاريع، الهوية البصرية، أو مواد الفعاليات المنفذة لأغراض تجارية أو ترويجية دون الحصول على إذن كتابي مسبق من شركة خزامى.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-heading font-bold text-lg text-[#3D295C]">4. استخدام شعارات الجهات والعملاء</h3>
              <p>
                تُعرض شعارات الجهات الحكومية والشركات والعملاء على المنصة حصرياً لأغراض توثيق المشاريع السابقة المُرخص بنشرها، ولا تُعد بأي حال من الأحوال ترخيصاً صريحاً لاستخدام تلك الشعارات خارج نطاق هذه المنصة.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-heading font-bold text-lg text-[#3D295C]">5. دقة المعلومات والتعاقد الميداني</h3>
              <p>
                نحرص دائماً على تحديث ودقة كافة المعلومات المعروضة. ومع ذلك، فإن محتوى الموقع هو لأرض العرض والتصور المبدئي، ولا يُعتبر عرضاً تعاقدياً ملزماً حتى يتم توقيع العقود والاتفاقيات التنفيذية الرسمية المباشرة مع العميل.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-heading font-bold text-lg text-[#3D295C]">6. حدود المسؤولية</h3>
              <p>
                لا تتحمل شركة خزامى المسؤولية عن أي أضرار مباشرة أو غير مباشرة قد تنشأ عن استخدام الموقع أو الاعتماد على الروابط الخارجية المرتبطة به.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-heading font-bold text-lg text-[#3D295C]">7. النظام القانوني المطبق</h3>
              <p>
                تخضع هذه الشروط والأحكام وتُفسر وفقاً لأنظمة وقوانين المملكة العربية السعودية، وتختص المحاكم السعودية بمدينة الرياض بالفصل في أي نزاع قد ينشأ عنها.
              </p>
            </section>

            <section className="space-y-2 bg-[#F8F7F4] p-5 rounded-2xl border border-[#C59CE8]/30 mt-6">
              <h3 className="font-heading font-bold text-base text-[#3D295C] mb-2">بيانات المنشأة الرسمية</h3>
              <ul className="space-y-1 text-xs sm:text-sm text-gray-700">
                <li>• <strong className="text-[#3D295C]">اسم المنشأة:</strong> شركة خزامى لتخطيط وتنفيذ الفعاليات (ذ.م.م)</li>
                <li>• <strong className="text-[#3D295C]">سجل تجاري رقم:</strong> 1010892401</li>
                <li>• <strong className="text-[#3D295C]">المقر الرئيسي:</strong> الرياض، المملكة العربية السعودية</li>
              </ul>
            </section>
          </div>
        )}

      </div>

    </div>
  );
};
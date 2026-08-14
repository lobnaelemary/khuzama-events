/**
 * WhatsApp integration utility according to KHUZAMA strategic brand guidelines
 * Phone: +966532111992 (Default Saudi Khuzama Line)
 */

export const KHUZAMA_WHATSAPP_NUMBER = "966532111992";
export const KHUZAMA_EMAIL = "info@khuzama.sa";
export const KHUZAMA_LOCATION = "الرياض، حي الورود - شارع صلاح الدين الأيوبي";

export function getGeneralWhatsAppUrl(details?: {
  type?: string;
  city?: string;
  date?: string;
  attendees?: string;
}): string {
  let message = "مرحباً خزامى، أرغب في بدء تجهيز فعالية جديدة.";
  if (details) {
    if (details.type) message += `\nنوع الفعالية: ${details.type}`;
    if (details.city) message += `\nالمدينة: ${details.city}`;
    if (details.date) message += `\nالتاريخ المتوقع: ${details.date}`;
    if (details.attendees) message += `\nعدد الحضور التقريبي: ${details.attendees}`;
  }
  return `https://wa.me/${KHUZAMA_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getProjectWhatsAppUrl(projectTitle: string): string {
  const message = `مرحباً خزامى، اطلعت على مشروع «${projectTitle}»، وأرغب في مناقشة فعالية قريبة منه.`;
  return `https://wa.me/${KHUZAMA_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getWorksWhatsAppUrl(): string {
  const message = "مرحباً خزامى، اطلعت على أعمالكم وأرغب في مناقشة مشروع فعالية جديدة.";
  return `https://wa.me/${KHUZAMA_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsAppDirect(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

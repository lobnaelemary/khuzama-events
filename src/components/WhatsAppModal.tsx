import React from 'react';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle?: string;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  projectTitle
}) => {
  if (!isOpen) return null;

  // رقم الواتساب الخاص بكم (غيري الرقم هنا لرقمكم الفعلي)
  const phoneNumber = "+966532111992"; 
  
  // الرسالة الجاهزة اللي هتروح للواتساب
  const message = projectTitle 
    ? `مرحباً خزامى، أود الاستفسار وتجهيز فعالية بخصوص مشروع: ${projectTitle}`
    : `مرحباً خزامى، أود بدء تجهيز فعاليتي معكم والتعرف على التفاصيل.`;

  // فتح الواتساب دايركت فوراً
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
  
  // قفل المودال فوراً بعد الفتح
  onClose();

  return null;
};
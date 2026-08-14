import React from 'react';

interface KhuzamaLogoProps {
  className?: string;
  variant?: 'full' | 'inline' | 'white' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  logoUrl?: string; // أضفنا خاصية رابط اللوجو لتعديلها براحتك
}

export const KhuzamaLogo: React.FC<KhuzamaLogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
  logoUrl = '/public/assets/img/logo.png' // حطي لينك صورتك هنا كقيمة افتراضية أو ابعتيه من المكون مباشرة
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-11',
    lg: 'h-14',
    xl: 'h-20'
  };

  const isWhite = variant === 'white';
  const textColor = isWhite ? '#FFFFFF' : '#1A181E';
  const subtextColor = isWhite ? 'rgba(255, 255, 255, 0.8)' : '#3D295C';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* عرض الصورة بدلاً من كود الـ SVG */}
      <div className={`relative flex items-center justify-center shrink-0 ${sizeClasses[size]}`}>
        <img
          src={logoUrl}
          alt="خزامى"
          referrerPolicy="no-referrer"
          className="h-full w-auto object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-right">
        <div className="flex items-baseline gap-2">
          
          
        </div>
        
      </div>
    </div>
  );
};
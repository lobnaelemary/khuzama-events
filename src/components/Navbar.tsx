import React, { useState, useEffect } from 'react';
import { KhuzamaLogo } from './KhuzamaLogo';
import { PageRoute } from '../types';
import { MessageCircle, Menu, X, ArrowUpLeft } from 'lucide-react';

interface NavbarProps {
  activeRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenWhatsAppModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeRoute, onNavigate, onOpenWhatsAppModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'works', label: 'أعمالنا' },
    { id: 'about', label: 'من نحن' },
    { id: 'contact', label: 'تواصل معنا' }
  ];

  const handleNavClick = (id: PageRoute) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pointer-events-none transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-28'
      }`}
    >
      <div className="max-w-7xl mx-auto pointer-events-auto bg-[#180F29]/95 backdrop-blur-md border border-[#C59CE4]/30 rounded-full py-2.5 px-6 shadow-2xl flex items-center justify-between transition-all duration-300">      
        
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="lg:hidden p-2 text-[#C59CE4] hover:bg-white/10 rounded-full transition-colors cursor-pointer"
          aria-label="القائمة"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        <button onClick={() => handleNavClick('home')} className="flex items-center focus:outline-none cursor-pointer">
          <KhuzamaLogo variant="white" size="sm" />
        </button>

        <nav className="hidden lg:flex items-center gap-1 bg-black/30 border border-white/10 rounded-full px-3 py-1">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => handleNavClick(item.id)} 
              className={`px-4 py-1.5 rounded-full text-xs font-bold font-heading transition-all cursor-pointer ${activeRoute === item.id ? 'bg-[#C59CE4] text-[#3D295C] shadow-sm' : 'text-white hover:text-[#C59CE4]'}`}>
              {item.label}
            </button>
          ))}
        </nav>

        <button 
          onClick={onOpenWhatsAppModal} 
          className="flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#533B78] to-[#3D295C] text-white font-bold text-xs border border-[#C59CE4]/40 hover:border-[#C59CE4] shadow-md transition-all cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 text-[#C59CE4]" />
          <span className="font-heading">ابدأ فعاليتك</span>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 max-w-7xl mx-auto pointer-events-auto bg-[#180F29] border border-[#C59CE4]/30 p-6 rounded-3xl space-y-3 shadow-2xl">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => handleNavClick(item.id)} className="w-full text-right px-4 py-3 rounded-xl text-white hover:bg-white/10 flex justify-between items-center text-sm font-heading cursor-pointer">
              <span>{item.label}</span>
              <ArrowUpLeft className="w-4 h-4 opacity-60" />
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
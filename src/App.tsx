import React, { useState } from 'react';
import { PageRoute, Project } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppModal } from './components/WhatsAppModal';
import { WhatsAppFloat } from './components/WhatsAppFloat'; // استيراد أيقونة الواتساب العائمة
import { HomeView } from './views/HomeView';
import { WorksView } from './views/WorksView';
import { ProjectDetailView } from './views/ProjectDetailView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import { FaqModalView } from './views/FaqModalView';
import { LegalView } from './views/LegalView';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeRoute, setActiveRoute] = useState<PageRoute>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [whatsAppPresetTitle, setWhatsAppPresetTitle] = useState<string | undefined>(undefined);

  const handleNavigate = (route: PageRoute) => {
    setActiveRoute(route);
    if (route !== 'project-detail') {
      setSelectedProject(null);
    }
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    setActiveRoute('project-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenWhatsAppModal = (projectTitle?: string) => {
    setWhatsAppPresetTitle(projectTitle);
    setIsWhatsAppModalOpen(true);
  };

  return (
    /* إرجاع الخلفية العامة للوضع الأصلي المناسب لصفحة التواصل وباقي الصفحات */
    <div className="min-h-screen flex flex-col bg-[#FBF9F6] text-[#1A181E] dir-rtl font-sans selection:bg-[#3D295C] selection:text-white relative">
      {/* Sticky Top Navigation */}
      <Navbar
        activeRoute={activeRoute}
        onNavigate={handleNavigate}
        onOpenWhatsAppModal={() => handleOpenWhatsAppModal()}
      />

      {/* Main Content Router with Smooth Fade Transitions */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRoute + (selectedProject?.id || '')}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            {activeRoute === 'home' && (
              <HomeView
                onNavigate={handleNavigate}
                onSelectProject={handleSelectProject}
                onOpenWhatsAppModal={handleOpenWhatsAppModal}
              />
            )}

            {activeRoute === 'works' && (
              <WorksView
                onSelectProject={handleSelectProject}
                onOpenWhatsAppModal={handleOpenWhatsAppModal}
              />
            )}

            {activeRoute === 'project-detail' && selectedProject && (
              <ProjectDetailView
                project={selectedProject}
                onNavigate={handleNavigate}
                onOpenWhatsAppModal={handleOpenWhatsAppModal}
              />
            )}

            {activeRoute === 'about' && (
              <AboutView
                onNavigate={handleNavigate}
                onOpenWhatsAppModal={handleOpenWhatsAppModal}
              />
            )}

            {activeRoute === 'contact' && (
              <ContactView
                onNavigate={handleNavigate}
                onOpenWhatsAppModal={handleOpenWhatsAppModal}
              />
            )}

            {activeRoute === 'faq' && (
              <FaqModalView
                onNavigate={handleNavigate}
                onOpenWhatsAppModal={handleOpenWhatsAppModal}
              />
            )}

            {(activeRoute === 'privacy' || activeRoute === 'terms') && (
              <LegalView type={activeRoute} onNavigate={handleNavigate} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenWhatsAppModal={() => handleOpenWhatsAppModal()}
      />

      {/* WhatsApp Conversion Interactive Modal */}
      <WhatsAppModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
        presetProjectTitle={whatsAppPresetTitle}
      />

      {/* Fixed Floating WhatsApp Button (ثابت في كل الصفحات تحت على الشمال) */}
      <WhatsAppFloat />
    </div>
  );
}
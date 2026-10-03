import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustLogos from './components/TrustLogos';
import HowItWorks from './components/HowItWorks';
import InteractiveScanDemo from './components/InteractiveScanDemo';
import UseCases from './components/UseCases';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import CtaBanner from './components/CtaBanner';
import PrivacyRibbon from './components/PrivacyRibbon';
import Footer from './components/Footer';
import ActivationModal from './components/ActivationModal';
import ParentDashboard from './components/ParentDashboard';
import './App.css';

export default function App() {
  const [currentView, setCurrentView] = useState('landing'); // 'landing' | 'dashboard'
  const [isActivationOpen, setIsActivationOpen] = useState(false);
  const [activationCode, setActivationCode] = useState('');

  const handleOpenActivation = (code = '') => {
    setActivationCode(code || 'KT-7842');
    setIsActivationOpen(true);
  };

  const handleToggleDashboard = () => {
    setCurrentView(prev => prev === 'landing' ? 'dashboard' : 'landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCompleteActivation = (data) => {
    setCurrentView('dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-root">
      {/* Top Navigation */}
      <Navbar 
        currentView={currentView}
        onOpenActivation={() => handleOpenActivation()}
        onToggleDashboard={handleToggleDashboard}
      />

      {/* Main View Switcher */}
      {currentView === 'landing' ? (
        <main>
          {/* 1. Hero Section */}
          <Hero onOpenActivation={handleOpenActivation} />

          {/* 2. Trust Badges / Partners Bar */}
          <TrustLogos />

          {/* 3. How KiddieTag works (3 steps) */}
          <HowItWorks onOpenActivation={() => handleOpenActivation()} />

          {/* 4. Experience the tag scan in action (Live Interactive QR & Simulator) */}
          <InteractiveScanDemo onOpenActivation={() => handleOpenActivation()} />

          {/* 5. Designed for anywhere kids wander (4 Use Cases) */}
          <UseCases onOpenActivation={() => handleOpenActivation()} />

          {/* 6. What caring parents say (Testimonials) */}
          <Testimonials />

          {/* 7. Pricing (Monthly / Yearly toggle & plans) */}
          <Pricing onOpenActivation={() => handleOpenActivation()} />

          {/* 8. Frequently Asked Questions (Accordion) */}
          <Faq />

          {/* 9. High-impact CTA Banner */}
          <CtaBanner 
            onOpenActivation={() => handleOpenActivation()}
            onToggleDashboard={handleToggleDashboard}
          />

          {/* 10. Privacy & Trust Ribbon */}
          <PrivacyRibbon />
        </main>
      ) : (
        <main>
          {/* Parent Dashboard View */}
          <ParentDashboard 
            onBackToLanding={handleToggleDashboard}
            onOpenActivation={() => handleOpenActivation()}
          />
        </main>
      )}

      {/* Footer */}
      <Footer onOpenActivation={() => handleOpenActivation()} />

      {/* Interactive Tag Registration / Activation Modal */}
      <ActivationModal 
        isOpen={isActivationOpen}
        onClose={() => setIsActivationOpen(false)}
        initialCode={activationCode}
        onCompleteActivation={handleCompleteActivation}
      />
    </div>
  );
}

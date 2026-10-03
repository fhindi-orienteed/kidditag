import React, { useState } from 'react';
import {
  ShieldCheck,
  Gift,
  User,
  Menu,
  X,
  ChevronRight,
  Sparkles,
  LayoutDashboard
} from 'lucide-react';

export default function Navbar({ onOpenActivation, onToggleDashboard, currentView }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    if (currentView === 'dashboard') {
      onToggleDashboard();
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar-wrapper">
      <div className="container">
        <nav className="navbar" aria-label="Main Navigation">
          {/* Brand Logo */}
          <div className="nav-brand" onClick={() => currentView === 'dashboard' && onToggleDashboard()}>
            <div className="brand-icon-box">
              <ShieldCheck size={22} strokeWidth={2.4} />
            </div>
            <span className="brand-name">KiddieTag</span>
          </div>

          {/* Desktop Nav Links */}
          <ul className="nav-links">
            <li>
              <a
                href="#how-it-works"
                className="nav-link"
                onClick={(e) => scrollToSection(e, 'how-it-works')}
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="#scan-demo"
                className="nav-link"
                onClick={(e) => scrollToSection(e, 'scan-demo')}
              >
                Demo
              </a>
            </li>
            <li>
              <a
                href="#reviews"
                className="nav-link"
                onClick={(e) => scrollToSection(e, 'reviews')}
              >
                Reviews
              </a>
            </li>
            <li>
              <a
                href="#use-cases"
                className="nav-link"
                onClick={(e) => scrollToSection(e, 'use-cases')}
              >
                For Groups
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="nav-link"
                onClick={(e) => scrollToSection(e, 'pricing')}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="nav-link"
                onClick={(e) => scrollToSection(e, 'faq')}
              >
                FAQ
              </a>
            </li>
          </ul>

          {/* Nav Actions */}
          <div className="nav-actions">

            <button
              className="nav-cta-btn"
              onClick={() => onOpenActivation()}
              id="nav-register-btn"
            >
              <span>Login</span>
              <ChevronRight size={16} />
            </button>


            {/* Mobile Hamburger Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li>
            <a href="#how-it-works" className="nav-link" onClick={(e) => scrollToSection(e, 'how-it-works')}>
              How It Works
            </a>
          </li>
          <li>
            <a href="#scan-demo" className="nav-link" onClick={(e) => scrollToSection(e, 'scan-demo')}>
              Demo
            </a>
          </li>
          <li>
            <a href="#reviews" className="nav-link" onClick={(e) => scrollToSection(e, 'reviews')}>
              Reviews
            </a>
          </li>
          <li>
            <a href="#use-cases" className="nav-link" onClick={(e) => scrollToSection(e, 'use-cases')}>
              For Groups & Schools
            </a>
          </li>
          <li>
            <a href="#pricing" className="nav-link" onClick={(e) => scrollToSection(e, 'pricing')}>
              Pricing & Plans
            </a>
          </li>
          <li>
            <a href="#faq" className="nav-link" onClick={(e) => scrollToSection(e, 'faq')}>
              Frequently Asked Questions
            </a>
          </li>
        </ul>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
          <button
            className="btn-primary"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenActivation();
            }}
          >
            Register a Tag ⚡
          </button>
          <button
            className="btn-secondary"
            onClick={() => {
              setMobileMenuOpen(false);
              onToggleDashboard();
            }}
          >
            <LayoutDashboard size={18} />
            <span>Open Parent Dashboard</span>
          </button>
        </div>
      </div>
    </header>
  );
}

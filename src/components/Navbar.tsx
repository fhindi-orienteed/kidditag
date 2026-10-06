import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  ShieldCheck,
  Menu,
  X,
  ChevronRight,
} from 'lucide-react';

interface NavbarProps {
  onOpenActivation?: () => void;
}

export default function Navbar({ onOpenActivation }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
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
          <Link to="/" className="nav-brand">
            <div className="brand-icon-box">
              <ShieldCheck size={22} strokeWidth={2.4} />
            </div>
            <span className="brand-name">KiddieTag</span>
          </Link>

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
            <Link
              to="/auth/login"
              className="nav-cta-btn"
              id="nav-login-btn"
            >
              <span>Login</span>
            </Link>

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
          <Link
            to="/auth/login"
            className="btn-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Login to Dashboard</span>
            <ChevronRight size={16} />
          </Link>
          <button
            className="btn-secondary"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenActivation?.();
            }}
          >
            Register a Tag ⚡
          </button>
        </div>
      </div>
    </header>
  );
}

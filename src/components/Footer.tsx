import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Phone, Check } from 'lucide-react';

interface FooterProps {
  onOpenActivation?: () => void;
}

export default function Footer({ onOpenActivation: _onOpenActivation }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Top 4-Column Grid */}
        <div className="footer-top-grid">
          {/* Col 1: Brand & Newsletter */}
          <div className="footer-brand-col">
            <div className="nav-brand">
              <div className="brand-icon-box">
                <ShieldCheck size={22} strokeWidth={2.4} />
              </div>
              <span className="brand-name">KiddieTag</span>
            </div>

            <p className="footer-desc">
              Smart QR safety badges and wristbands that keep children safe, give parents immediate peace of mind, and protect privacy worldwide.
            </p>

            <form className="footer-newsletter-box" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Enter email for 15% off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="footer-newsletter-btn">
                {subscribed ? <Check size={14} /> : <ArrowRight size={14} />}
              </button>
            </form>
            {subscribed && (
              <span style={{ fontSize: '0.78rem', color: 'var(--accent-green)', fontWeight: 600 }}>
                ✓ Subscribed! Welcome to the KiddieTag family.
              </span>
            )}
          </div>

          {/* Col 2: Products & Tags */}
          <div className="footer-col">
            <h4>Products & Tags</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item"><a href="#pricing">Silicone Wristband Tags</a></li>
              <li className="footer-link-item"><a href="#pricing">Backpack & Gear Badges</a></li>
              <li className="footer-link-item"><a href="#pricing">Iron-On Clothing Labels</a></li>
              <li className="footer-link-item"><a href="#pricing">Medical Alert Smart Badges</a></li>
              <li className="footer-link-item"><a href="#pricing">Bulk Packs for Schools</a></li>
            </ul>
          </div>

          {/* Col 3: Use Cases */}
          <div className="footer-col">
            <h4>Use Cases</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item"><a href="#use-cases">School & Field Trips</a></li>
              <li className="footer-link-item"><a href="#use-cases">Theme Parks & Waterparks</a></li>
              <li className="footer-link-item"><a href="#use-cases">Summer Camps & Sports</a></li>
              <li className="footer-link-item"><a href="#use-cases">Travel, Cruises & Airports</a></li>
              <li className="footer-link-item"><a href="#use-cases">Non-Verbal & Special Needs</a></li>
            </ul>
          </div>

          {/* Col 4: Parent Support Card */}
          <div className="footer-col">
            <div className="footer-support-card">
              <h5>
                <Phone size={16} />
                <span>24/7 Parent Support</span>
              </h5>
              <p>
                Emergency helpdesk is standing by around the clock for lost tag assistance and account verification.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: '0.82rem', fontWeight: 600, color: 'var(--brand-purple)' }}>
                <span>📞 Hotline: 1-800-KID-SAFE</span>
                <span>💬 Live Agent Chat Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="footer-bottom-bar">
          <p>© 2026 KiddieTag Technologies Inc. All rights reserved.</p>
          <div className="footer-legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/privacy">Child Safeguard Protocol</Link>
            <Link to="/contact">Support Center</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

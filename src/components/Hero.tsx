import React, { useState } from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  PhoneCall, 
  AlertTriangle, 
  MapPin, 
  Sparkles, 
  Lock,
} from 'lucide-react';

interface HeroProps {
  onOpenActivation?: (code?: string) => void;
}

export default function Hero({ onOpenActivation }: HeroProps) {
  const [activationInput, setActivationInput] = useState('');
  const [callSimulated, setCallSimulated] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onOpenActivation?.(activationInput);
  };

  const handleSimulateCall = () => {
    setCallSimulated(true);
    setTimeout(() => {
      setCallSimulated(false);
    }, 4000);
  };

  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Headline and Call-to-actions */}
          <div className="hero-content">
            {/* Top Pill Badge */}
            <div className="section-pill green">
              <Sparkles size={14} />
              <span>NO APP REQUIRED FOR FINDER • INSTANT SMS ALERT</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-headline">
              Smart QR safety tags that{' '}
              <span className="highlight-purple">speak for your child</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle">
              Instant tags connect when lost kids need help without sharing your personal phone number. A single scan gives emergency responders critical medical information, allergies, and emergency contacts while keeping your identity safe.
            </p>

            {/* Activation Input Box */}
            <form className="hero-input-box" onSubmit={handleSubmit}>
              <input 
                type="text"
                placeholder="Enter your email or activation code"
                value={activationInput}
                onChange={(e) => setActivationInput(e.target.value)}
                id="hero-activation-input"
              />
              <button 
                type="submit" 
                className="btn-primary"
                id="hero-activate-btn"
                style={{ padding: '10px 22px', fontSize: '0.92rem' }}
              >
                <span>Activate Tag</span>
                <span>⚡</span>
              </button>
            </form>

            {/* Trust Bullets */}
            <div className="hero-trust-bullets">
              <span className="hero-trust-bullet">
                <CheckCircle2 size={16} />
                <span>Guaranteed 100% Free Lifetime</span>
              </span>
              <span className="hero-trust-bullet">
                <Lock size={16} style={{ color: 'var(--brand-purple)' }} />
                <span>Works seamlessly on all Android & Apple devices</span>
              </span>
            </div>

            {/* Social Proof */}
            <div className="hero-social-proof">
              <div className="avatar-stack">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=faces" alt="Parent Avatar" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces" alt="Parent Avatar" />
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=faces" alt="Parent Avatar" />
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces" alt="Parent Avatar" />
              </div>
              <p className="social-proof-text">
                Trusted by <strong>12,000+ parents</strong> across schools, parks, & travel venues
              </p>
            </div>
          </div>

          {/* Right Column: Hero Live Interactive Preview Card */}
          <div className="hero-card-container">
            <div className="hero-preview-card">
              {/* Header with QR and Kid Meta */}
              <div className="preview-card-header">
                <div className="preview-qr-mini">
                  {/* Clean SVG QR code with mini center shield */}
                  <svg viewBox="0 0 100 100" width="100%" height="100%">
                    <rect x="5" y="5" width="30" height="30" fill="none" stroke="#582be8" strokeWidth="6" rx="4" />
                    <rect x="14" y="14" width="12" height="12" fill="#582be8" rx="2" />
                    
                    <rect x="65" y="5" width="30" height="30" fill="none" stroke="#582be8" strokeWidth="6" rx="4" />
                    <rect x="74" y="14" width="12" height="12" fill="#582be8" rx="2" />
                    
                    <rect x="5" y="65" width="30" height="30" fill="none" stroke="#582be8" strokeWidth="6" rx="4" />
                    <rect x="14" y="74" width="12" height="12" fill="#582be8" rx="2" />
                    
                    {/* Data dots */}
                    <rect x="44" y="12" width="6" height="18" fill="#140d3a" rx="2" />
                    <rect x="54" y="24" width="6" height="12" fill="#582be8" rx="2" />
                    <rect x="12" y="44" width="18" height="6" fill="#140d3a" rx="2" />
                    <rect x="42" y="42" width="16" height="16" fill="#0ea76b" rx="4" />
                    <rect x="68" y="44" width="20" height="6" fill="#582be8" rx="2" />
                    <rect x="44" y="68" width="6" height="20" fill="#140d3a" rx="2" />
                    <rect x="64" y="64" width="12" height="12" fill="#582be8" rx="2" />
                    <rect x="80" y="80" width="8" height="8" fill="#140d3a" rx="2" />
                  </svg>
                </div>

                <div className="preview-child-meta">
                  <div className="child-name-row">
                    <h3 className="preview-child-name">Alex Robinson (Age 6)</h3>
                    <span className="pill-alert-mini">Severe Allergy</span>
                  </div>
                  <p className="preview-scan-subtext">
                    Scan reveals parent contacts + vital allergy and medical protocol
                  </p>
                </div>
              </div>

              {/* Location Badge */}
              <div className="preview-location-badge">
                <MapPin size={15} style={{ color: 'var(--brand-purple)' }} />
                <span>Location shared: <strong>Central Park Zoo</strong> (Just now)</span>
              </div>

              {/* Call Parent Button */}
              <button 
                className="preview-call-btn"
                onClick={handleSimulateCall}
                id="hero-call-parent-btn"
              >
                <PhoneCall size={18} />
                <span>
                  {callSimulated 
                    ? 'Connecting via Secure Proxy...' 
                    : 'Call Parent: (555) 0198'}
                </span>
              </button>

              {/* Medical Notice Box */}
              <div className="preview-medical-alert">
                <div className="medical-alert-title">
                  <AlertTriangle size={15} />
                  <span>Important Medical Alert</span>
                </div>
                <p className="medical-alert-text">
                  Severe peanut allergy. EpiPen carried in backpack side pocket. In emergency, please administer immediately and call 911.
                </p>
              </div>

              {/* Bottom Shield Note */}
              <div className="preview-footer-shield">
                <ShieldCheck size={14} style={{ color: 'var(--accent-green)' }} />
                <span>Scanned via Secure KiddieTag Shield - Real phone number hidden</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

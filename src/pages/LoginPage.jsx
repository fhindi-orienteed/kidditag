import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2, 
  Sparkles,
  MapPin,
  Smartphone,
  Shield,
  AlertCircle
} from 'lucide-react';

export default function LoginPage({ onOpenActivation }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email || !password) {
      setErrorMsg('Please enter both your email and password.');
      return;
    }

    setIsLoading(true);

    // Simulate login authentication
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 900);
  };

  return (
    <div className="login-page-wrapper">
      {/* Main Login Grid */}
      <div className="login-main-container">
        <div className="login-grid">
          {/* Left Column: Form Card */}
          <div className="login-card-container">
            <div className="login-card">
              {/* Brand and Back Link */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                <Link to="/" className="nav-brand" style={{ gap: 8 }}>
                  <div className="brand-icon-box" style={{ width: 34, height: 34 }}>
                    <ShieldCheck size={18} strokeWidth={2.4} />
                  </div>
                  <span className="brand-name" style={{ fontSize: '1.2rem' }}>KiddieTag</span>
                </Link>

                <Link to="/" className="login-back-btn" style={{ fontSize: '0.82rem', padding: '6px 12px' }}>
                  <ArrowLeft size={14} />
                  <span>Back to Home</span>
                </Link>
              </div>
              <div className="login-header">
                <div className="section-pill purple" style={{ marginBottom: 12 }}>
                  <Sparkles size={13} />
                  <span>CAREGIVER PORTAL</span>
                </div>
                <h1 className="login-title">Welcome back</h1>
                <p className="login-subtitle">
                  Sign in to manage your child's KiddieTag profiles and view instant scan alerts.
                </p>
              </div>

              {errorMsg && (
                <div className="login-error-alert">
                  <AlertCircle size={16} />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Social Login Buttons */}
              <div className="social-login-grid">
                <button 
                  type="button" 
                  className="social-btn"
                  onClick={() => navigate('/dashboard')}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
                    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.97 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.93 6.72-4.93z"/>
                  </svg>
                  <span>Google</span>
                </button>

                <button 
                  type="button" 
                  className="social-btn"
                  onClick={() => navigate('/dashboard')}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.42c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.98.6-2.63 1.35-.57.65-1.07 1.72-.94 2.74 1.01.08 2.02-.49 2.64-1.24z"/>
                  </svg>
                  <span>Apple</span>
                </button>
              </div>

              <div className="login-divider">
                <span>or sign in with email</span>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                  <label htmlFor="login-email">Email Address</label>
                  <div className="input-with-icon">
                    <Mail size={18} className="input-icon" />
                    <input 
                      id="login-email"
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="form-label-row">
                    <label htmlFor="login-password">Password</label>
                    <a href="#forgot" onClick={(e) => { e.preventDefault(); alert('Password reset link sent to ' + (email || 'your email')); }} className="forgot-link">
                      Forgot password?
                    </a>
                  </div>
                  <div className="input-with-icon">
                    <Lock size={18} className="input-icon" />
                    <input 
                      id="login-password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button 
                      type="button" 
                      className="password-toggle-btn"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="form-options-row">
                  <label className="checkbox-label">
                    <input 
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <span>Remember this device</span>
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="btn-primary login-submit-btn"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span>Signing in...</span>
                  ) : (
                    <>
                      <span>Sign In to Dashboard</span>
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>

              {/* Tag Activation Quick Link */}
              <div className="login-card-footer">
                <p>
                  Have a new physical tag?{' '}
                  <button 
                    type="button" 
                    className="link-highlight"
                    onClick={() => {
                      if (onOpenActivation) onOpenActivation();
                    }}
                  >
                    Activate without logging in →
                  </button>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase & Peace of Mind Panel */}
          <div className="login-showcase-panel">
            <div className="showcase-glow-orb"></div>

            <div className="showcase-content">
              <div className="section-pill green" style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#34d399', border: '1px solid rgba(52, 211, 153, 0.4)' }}>
                <ShieldCheck size={14} />
                <span>24/7 ACTIVE CHILD SAFEGUARD</span>
              </div>

              <h2 className="showcase-title">
                Smart safety tags that keep you connected, anywhere kids roam.
              </h2>

              <p className="showcase-desc">
                Log into your dashboard to update allergy instructions, review scan GPS coordinates, and add emergency phone contacts in real time.
              </p>

              {/* Feature Pill Highlights */}
              <div className="showcase-features-list">
                <div className="showcase-feature-item">
                  <div className="feature-icon-box">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4>Instant GPS Scan Alerts</h4>
                    <p>Receive SMS & Google Maps link the second someone scans your tag.</p>
                  </div>
                </div>

                <div className="showcase-feature-item">
                  <div className="feature-icon-box">
                    <Shield size={18} />
                  </div>
                  <div>
                    <h4>Private Proxy Calling</h4>
                    <p>Good Samaritans can reach you with 1 click without seeing your private cell.</p>
                  </div>
                </div>

                <div className="showcase-feature-item">
                  <div className="feature-icon-box">
                    <Smartphone size={18} />
                  </div>
                  <div>
                    <h4>Zero Apps Required for Finders</h4>
                    <p>Works natively on every iOS and Android smartphone camera.</p>
                  </div>
                </div>
              </div>

              {/* Live Scan Notification Card preview */}
              <div className="showcase-preview-pill">
                <span className="live-pulse-dot"></span>
                <span><strong>Live Safety Shield Active:</strong> Over 12,000 children protected today</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

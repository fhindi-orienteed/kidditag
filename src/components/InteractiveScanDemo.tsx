import { useState } from 'react';
import { 
  PhoneCall, 
  AlertTriangle, 
  MapPin, 
  Sparkles, 
  ShieldAlert, 
  Check 
} from 'lucide-react';

interface InteractiveScanDemoProps {
  onOpenActivation?: () => void;
}

export default function InteractiveScanDemo({ onOpenActivation: _onOpenActivation }: InteractiveScanDemoProps) {
  const [activeTab, setActiveTab] = useState<'finder' | 'parent'>('finder');
  const [isScanning, setIsScanning] = useState(false);
  const [callStatus, setCallStatus] = useState<'Mother' | 'Father' | null>(null);
  const [acknowledged, setAcknowledged] = useState(false);

  const triggerScanEffect = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setActiveTab('finder');
    }, 1200);
  };

  const handleCall = (parent: 'Mother' | 'Father') => {
    setCallStatus(parent);
    setTimeout(() => {
      setCallStatus(null);
    }, 3500);
  };

  return (
    <section className="scan-demo-section" id="scan-demo">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill green">
            <Sparkles size={13} />
            <span>INTERACTIVE DEMO</span>
          </div>
          <h2 className="section-title">Experience the tag scan in action</h2>
          <p className="section-desc">
            Try scanning with your phone's camera or click the interactive demo below to see what a Good Samaritan sees when they scan this child's KiddieTag.
          </p>
        </div>

        {/* Demo Interactive Container */}
        <div className="demo-container-card">
          {/* Left Column: QR Code & Scanner */}
          <div className="demo-qr-side">
            <div 
              className={`qr-code-frame ${isScanning ? 'scanning' : ''}`}
              onClick={triggerScanEffect}
              title="Click to simulate scan"
            >
              {/* Laser animation */}
              <div className="qr-scanning-laser"></div>

              {/* High Quality Scalable SVG QR Code with center emblem */}
              <svg viewBox="0 0 160 160" width="100%" height="100%">
                {/* Background */}
                <rect width="160" height="160" fill="#ffffff" />

                {/* Corner Markers */}
                {/* Top Left */}
                <rect x="10" y="10" width="45" height="45" fill="none" stroke="#582be8" strokeWidth="8" rx="8" />
                <rect x="23" y="23" width="19" height="19" fill="#582be8" rx="4" />

                {/* Top Right */}
                <rect x="105" y="10" width="45" height="45" fill="none" stroke="#582be8" strokeWidth="8" rx="8" />
                <rect x="118" y="23" width="19" height="19" fill="#582be8" rx="4" />

                {/* Bottom Left */}
                <rect x="10" y="105" width="45" height="45" fill="none" stroke="#582be8" strokeWidth="8" rx="8" />
                <rect x="23" y="118" width="19" height="19" fill="#582be8" rx="4" />

                {/* QR Grid Patterns */}
                <rect x="65" y="14" width="10" height="24" fill="#140d3a" rx="3" />
                <rect x="85" y="14" width="10" height="14" fill="#582be8" rx="3" />
                <rect x="65" y="44" width="30" height="10" fill="#140d3a" rx="3" />

                <rect x="14" y="65" width="22" height="10" fill="#140d3a" rx="3" />
                <rect x="24" y="85" width="14" height="10" fill="#582be8" rx="3" />

                {/* Center Badge */}
                <rect x="58" y="58" width="44" height="44" fill="#f4f0ff" stroke="#ded5fb" strokeWidth="2" rx="10" />
                <path d="M80 66 L92 72 L92 84 C92 90 86 96 80 98 C74 96 68 90 68 84 L68 72 Z" fill="#582be8" />
                <path d="M76 82 L79 85 L85 78" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />

                {/* Bottom Right Patterns */}
                <rect x="110" y="65" width="12" height="28" fill="#140d3a" rx="3" />
                <rect x="130" y="75" width="18" height="10" fill="#582be8" rx="3" />
                <rect x="65" y="110" width="12" height="32" fill="#582be8" rx="3" />
                <rect x="85" y="125" width="22" height="10" fill="#140d3a" rx="3" />
                <rect x="115" y="115" width="32" height="10" fill="#140d3a" rx="3" />
                <rect x="125" y="135" width="20" height="14" fill="#582be8" rx="3" />
              </svg>
            </div>

            <button 
              className="qr-hint-btn"
              onClick={triggerScanEffect}
              id="simulate-scan-trigger-btn"
            >
              {isScanning ? '⚡ SCANNING TAG...' : '⚡ SCAN OR CLICK TO SEE HOW IT WORKS'}
            </button>

            <p className="qr-helper-text">
              Point your phone camera at the code or click the button above to simulate a live tag scan.
            </p>
          </div>

          {/* Right Column: Simulated Screen (Finder View vs Parent Dashboard) */}
          <div className="demo-screen-side">
            {/* View Switcher Tabs */}
            <div className="demo-tabs-bar">
              <div className="demo-tabs-group">
                <button 
                  className={`demo-tab-btn ${activeTab === 'finder' ? 'active' : ''}`}
                  onClick={() => setActiveTab('finder')}
                  id="tab-finder-view"
                >
                  Finder View
                </button>
                <button 
                  className={`demo-tab-btn ${activeTab === 'parent' ? 'active' : ''}`}
                  onClick={() => setActiveTab('parent')}
                  id="tab-parent-dashboard"
                >
                  Parent Dashboard
                </button>
              </div>

              <span className="demo-tag-status-badge">
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent-green)' }}></span>
                <span>Active Tag: KT-7842</span>
              </span>
            </div>

            {/* TAB 1: FINDER VIEW */}
            {activeTab === 'finder' && (
              <div className="profile-simulation-card">
                {/* Child Identity Header */}
                <div className="profile-header-strip">
                  <div className="profile-child-identity">
                    <div className="child-avatar-ring">
                      👧
                    </div>
                    <div className="child-meta-text">
                      <h4>Maya Sinclair (Age 5)</h4>
                      <p>Scan Location • Brooklyn Bridge Park, Pier 6</p>
                    </div>
                  </div>
                  <span className="badge-save" style={{ background: '#ecfdf5', color: '#047857' }}>
                    Shield Protected
                  </span>
                </div>

                {/* Direct Action Emergency Buttons */}
                <div className="profile-action-buttons">
                  <button 
                    className="action-btn-green"
                    onClick={() => handleCall('Mother')}
                    id="finder-call-mother-btn"
                  >
                    <PhoneCall size={18} />
                    <span>
                      {callStatus === 'Mother' ? 'Dialing Mother...' : 'Call Mother (Primary)'}
                    </span>
                  </button>

                  <button 
                    className="action-btn-purple"
                    onClick={() => handleCall('Father')}
                    id="finder-call-father-btn"
                  >
                    <PhoneCall size={18} />
                    <span>
                      {callStatus === 'Father' ? 'Dialing Father...' : 'Call Father (Secondary)'}
                    </span>
                  </button>
                </div>

                {/* Medical Alert Box */}
                <div className="profile-alert-box">
                  <h5>
                    <AlertTriangle size={16} />
                    <span>Important Medical Condition</span>
                  </h5>
                  <p>
                    Asthma (inhaler located in the front zipper pouch of pink backpack), allergic to bee stings. If Maya is found alone or distressed, please stay with her in a safe, visible spot and call parents immediately.
                  </p>
                </div>

                {/* GPS Notification Ping */}
                <div className="gps-ping-alert">
                  <MapPin size={18} style={{ color: 'var(--accent-green)', flexShrink: 0 }} />
                  <div>
                    <strong>Instant Alert Sent:</strong> Finder's GPS location was dispatched to parents via priority SMS & WhatsApp.
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: PARENT DASHBOARD VIEW */}
            {activeTab === 'parent' && (
              <div className="dashboard-preview-card">
                {/* Alert Notification Header */}
                <div className="scan-alert-banner">
                  <div className="scan-alert-left">
                    <ShieldAlert size={20} />
                    <span>Tag Scanned! Maya's Backpack Tag at Brooklyn Bridge Park</span>
                  </div>
                  <span style={{ fontSize: '0.78rem', color: '#92400e', fontWeight: 600 }}>Just now</span>
                </div>

                {/* Simulated Map Display */}
                <div className="simulated-map-box">
                  <div className="map-grid-bg"></div>
                  <div className="map-pin-pulse">
                    <div className="map-pin-marker">
                      <MapPin size={18} />
                    </div>
                    <span className="map-label-tag">📍 Pier 6 Playground (Accuracy: 5m)</span>
                  </div>
                </div>

                {/* Parent Status Quick Action */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                  <div style={{ fontSize: '0.84rem', color: 'var(--text-body)' }}>
                    Finder IP & GPS timestamp verified • Phone proxy ready
                  </div>
                  <button 
                    className="btn-primary" 
                    style={{ padding: '8px 18px', fontSize: '0.85rem' }}
                    onClick={() => setAcknowledged(true)}
                  >
                    {acknowledged ? (
                      <>
                        <Check size={14} />
                        <span>Acknowledged</span>
                      </>
                    ) : (
                      'Acknowledge & Call Finder'
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

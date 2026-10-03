import React, { useState } from 'react';
import { 
  ShieldCheck, 
  LayoutDashboard, 
  Tag, 
  Users, 
  MapPin, 
  PhoneCall, 
  HeartPulse, 
  Settings, 
  Plus, 
  Search, 
  Bell, 
  AlertTriangle, 
  Menu, 
  X, 
  LogOut, 
  ArrowLeft, 
  QrCode, 
  Check, 
  ExternalLink, 
  Clock, 
  Smartphone,
  Shield,
  Radio,
  Eye,
  ChevronRight
} from 'lucide-react';

export default function ParentDashboard({ onBackToLanding, onOpenActivation }) {
  const [activeTab, setActiveTab] = useState('overview'); // overview | tags | children | map | contacts | medical | settings
  const [selectedChild, setSelectedChild] = useState('maya');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [lostModeActive, setLostModeActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [medicalNotes, setMedicalNotes] = useState(
    'Asthma (inhaler located in front pouch of pink backpack), allergic to bee stings. Administer inhaler if breathing becomes strained.'
  );
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [acknowledgedAlert, setAcknowledgedAlert] = useState(false);

  // Mock data
  const childrenData = {
    maya: {
      name: 'Maya Sinclair',
      age: 5,
      gender: 'Female',
      bloodType: 'O+',
      avatar: '👧',
      tags: [
        { id: 'KT-7842', type: 'Silicone Wristband', color: 'Purple', status: 'Active', scans: 4, lastScan: '14 mins ago', location: 'Brooklyn Bridge Park, Pier 6' },
        { id: 'KT-9104', type: 'Backpack Safety Badge', color: 'Teal', status: 'Active', scans: 1, lastScan: 'Yesterday at 3:15 PM', location: 'Prospect Park Zoo' },
        { id: 'KT-3381', type: 'Shoe Lace Tag', color: 'Pink', status: 'Active', scans: 0, lastScan: 'Never scanned', location: 'Ready for use' }
      ],
      contacts: [
        { name: 'Sarah Sinclair (Mother)', phone: '(555) 234-8901', priority: 'Primary Emergency', status: 'Verified' },
        { name: 'David Sinclair (Father)', phone: '(555) 234-8902', priority: 'Secondary Emergency', status: 'Verified' },
        { name: 'Dr. Evelyn Reed (Pediatrician)', phone: '(555) 901-4455', priority: 'Doctor', status: 'Active' }
      ],
      scanHistory: [
        {
          id: 1,
          location: 'Brooklyn Bridge Park, Pier 6',
          time: 'Today at 2:14 PM',
          scanner: 'Safari iOS • Verified Good Samaritan',
          action: 'Called Mother via Proxy',
          resolved: true,
          coords: '40.6928° N, 73.9997° W'
        },
        {
          id: 2,
          location: 'Prospect Park Zoo Entrance',
          time: 'Yesterday at 3:15 PM',
          scanner: 'Chrome Android • Park Staff',
          action: 'Instant GPS pin sent via SMS',
          resolved: true,
          coords: '40.6655° N, 73.9654° W'
        }
      ]
    },
    leo: {
      name: 'Leo Sinclair',
      age: 3,
      gender: 'Male',
      bloodType: 'A+',
      avatar: '👦',
      tags: [
        { id: 'KT-4412', type: 'Silicone Wristband', color: 'Blue', status: 'Active', scans: 2, lastScan: '3 days ago', location: 'Central Park Carousel' },
        { id: 'KT-6629', type: 'Jacket Clip Tag', color: 'Yellow', status: 'Active', scans: 0, lastScan: 'Never scanned', location: 'Ready for use' }
      ],
      contacts: [
        { name: 'Sarah Sinclair (Mother)', phone: '(555) 234-8901', priority: 'Primary Emergency', status: 'Verified' },
        { name: 'David Sinclair (Father)', phone: '(555) 234-8902', priority: 'Secondary Emergency', status: 'Verified' }
      ],
      scanHistory: [
        {
          id: 1,
          location: 'Central Park Carousel',
          time: 'Sep 30, 2026 at 11:20 AM',
          scanner: 'Safari iOS',
          action: 'SMS Ping Acknowledged',
          resolved: true,
          coords: '40.7688° N, 73.9744° W'
        }
      ]
    }
  };

  const currentChild = childrenData[selectedChild] || childrenData.maya;

  const handleSaveMedical = (e) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const navItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'tags', label: 'Smart Tags', icon: Tag, count: currentChild.tags.length },
    { id: 'children', label: 'Children Profiles', icon: Users, count: 2 },
    { id: 'map', label: 'Live Scan Map', icon: MapPin, badge: 'Live' },
    { id: 'contacts', label: 'Emergency Contacts', icon: PhoneCall },
    { id: 'medical', label: 'Medical & Allergy', icon: HeartPulse },
    { id: 'settings', label: 'Safety & Settings', icon: Settings }
  ];

  return (
    <div className="full-dashboard-app">
      {/* Mobile Sidebar Overlay */}
      {mobileSidebarOpen && (
        <div 
          className="dash-sidebar-overlay"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* -----------------------------------------------------------
          LEFT SIDEBAR
          ----------------------------------------------------------- */}
      <aside className={`dash-sidebar ${mobileSidebarOpen ? 'open' : ''}`}>
        {/* Sidebar Brand Header */}
        <div className="dash-sidebar-header">
          <div className="dash-sidebar-brand" onClick={onBackToLanding}>
            <div className="brand-icon-box">
              <ShieldCheck size={22} strokeWidth={2.4} />
            </div>
            <div>
              <div className="dash-brand-title">KiddieTag</div>
              <span className="dash-brand-badge">CAREGIVER HUB</span>
            </div>
          </div>

          <button 
            className="dash-sidebar-close-btn"
            onClick={() => setMobileSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Child Selector Mini Bar */}
        <div className="dash-child-switcher-box">
          <div className="dash-child-switcher-label">Active Child Profile</div>
          <div className="dash-child-pill-row">
            <button 
              className={`dash-child-mini-btn ${selectedChild === 'maya' ? 'active' : ''}`}
              onClick={() => setSelectedChild('maya')}
            >
              <span>👧</span>
              <span>Maya (5)</span>
            </button>
            <button 
              className={`dash-child-mini-btn ${selectedChild === 'leo' ? 'active' : ''}`}
              onClick={() => setSelectedChild('leo')}
            >
              <span>👦</span>
              <span>Leo (3)</span>
            </button>
          </div>
        </div>

        {/* Sidebar Navigation Items */}
        <nav className="dash-sidebar-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button 
                key={item.id}
                className={`dash-nav-btn ${isActive ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileSidebarOpen(false);
                }}
              >
                <div className="dash-nav-btn-left">
                  <Icon size={19} className="dash-nav-icon" />
                  <span className="dash-nav-label">{item.label}</span>
                </div>
                {item.count !== undefined && (
                  <span className="dash-nav-count">{item.count}</span>
                )}
                {item.badge && (
                  <span className="dash-nav-live-pill">{item.badge}</span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Sidebar Bottom / Footer Actions */}
        <div className="dash-sidebar-footer">
          <button 
            className="dash-activate-tag-btn"
            onClick={() => onOpenActivation()}
          >
            <Plus size={16} />
            <span>Activate New Tag ⚡</span>
          </button>

          {/* User Profile Snippet */}
          <div className="dash-user-card">
            <div className="dash-user-avatar">SS</div>
            <div className="dash-user-info">
              <div className="dash-user-name">Sarah Sinclair</div>
              <div className="dash-user-plan">Family Care • Active</div>
            </div>
          </div>

          {/* Back & Sign Out */}
          <div className="dash-footer-nav-row">
            <button className="dash-footer-link" onClick={onBackToLanding}>
              <ArrowLeft size={15} />
              <span>Back to Site</span>
            </button>
            <button className="dash-footer-link danger" onClick={onBackToLanding}>
              <LogOut size={15} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* -----------------------------------------------------------
          MAIN CONTENT AREA
          ----------------------------------------------------------- */}
      <div className="dash-main-area">
        {/* Top App Bar */}
        <header className="dash-topbar">
          <div className="dash-topbar-left">
            <button 
              className="dash-hamburger-btn"
              onClick={() => setMobileSidebarOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu size={22} />
            </button>

            <div>
              <h1 className="dash-topbar-title">
                {activeTab === 'overview' && 'Caregiver Overview'}
                {activeTab === 'tags' && 'Smart Tags Manager'}
                {activeTab === 'children' && 'Child Profiles'}
                {activeTab === 'map' && 'Live GPS Scan Radar'}
                {activeTab === 'contacts' && 'Emergency Contacts'}
                {activeTab === 'medical' && 'Medical & Allergy Protocol'}
                {activeTab === 'settings' && 'Safety & Privacy Settings'}
              </h1>
              <div className="dash-topbar-status">
                <span className="dash-pulse-dot"></span>
                <span>Active Protection for {currentChild.name} • End-to-End Encrypted</span>
              </div>
            </div>
          </div>

          <div className="dash-topbar-right">
            {/* Search Input */}
            <div className="dash-search-box">
              <Search size={16} className="dash-search-icon" />
              <input 
                type="text" 
                placeholder="Search tags, contacts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Lost Child Broadcast Button */}
            <button 
              className={`dash-lost-mode-btn ${lostModeActive ? 'active' : ''}`}
              onClick={() => setLostModeActive(!lostModeActive)}
              title="Click to toggle emergency broadcast"
            >
              <AlertTriangle size={16} />
              <span>{lostModeActive ? '🚨 LOST MODE ACTIVE' : 'Lost Child Mode'}</span>
            </button>

            {/* Notification Bell */}
            <button 
              className="dash-bell-btn"
              onClick={() => setActiveTab('map')}
              title="View Scan Alerts"
            >
              <Bell size={18} />
              <span className="dash-bell-count">1</span>
            </button>
          </div>
        </header>

        {/* Scrollable View Content */}
        <main className="dash-content-scroll">
          {/* Emergency Alert Banner */}
          {!acknowledgedAlert && (
            <div className="dash-alert-strip">
              <div className="dash-alert-strip-left">
                <Radio size={20} className="dash-alert-pulse-icon" />
                <div>
                  <strong>Live Tag Scan:</strong> {currentChild.name}'s tag was scanned at <strong>{currentChild.scanHistory[0].location}</strong> ({currentChild.tags[0].lastScan}).
                </div>
              </div>
              <div className="dash-alert-strip-actions">
                <button 
                  className="btn-primary" 
                  style={{ padding: '6px 14px', fontSize: '0.8rem' }}
                  onClick={() => alert(`Calling Good Samaritan via Safe Proxy: Proxy connecting...`)}
                >
                  <PhoneCall size={14} />
                  <span>Call Finder (Proxy)</span>
                </button>
                <button 
                  className="dash-alert-dismiss"
                  onClick={() => setAcknowledgedAlert(true)}
                >
                  Acknowledge
                </button>
              </div>
            </div>
          )}

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="dash-view-container">
              {/* 4 Quick Stat Cards */}
              <div className="dash-stat-grid">
                <div className="dash-metric-card">
                  <div className="dash-metric-header">
                    <span className="dash-metric-label">Active Linked Tags</span>
                    <Tag size={18} className="dash-metric-icon purple" />
                  </div>
                  <div className="dash-metric-value">{currentChild.tags.length}</div>
                  <div className="dash-metric-sub green">✓ 100% Synced to Profile</div>
                </div>

                <div className="dash-metric-card">
                  <div className="dash-metric-header">
                    <span className="dash-metric-label">Total Scans Logged</span>
                    <Clock size={18} className="dash-metric-icon blue" />
                  </div>
                  <div className="dash-metric-value">{currentChild.scanHistory.length}</div>
                  <div className="dash-metric-sub">Last scan {currentChild.tags[0].lastScan}</div>
                </div>

                <div className="dash-metric-card">
                  <div className="dash-metric-header">
                    <span className="dash-metric-label">Safe Call Proxy</span>
                    <Smartphone size={18} className="dash-metric-icon green" />
                  </div>
                  <div className="dash-metric-value" style={{ color: 'var(--accent-green)', fontSize: '1.4rem' }}>
                    Shielded
                  </div>
                  <div className="dash-metric-sub">Cell numbers private</div>
                </div>

                <div className="dash-metric-card">
                  <div className="dash-metric-header">
                    <span className="dash-metric-label">Child Safeguard</span>
                    <ShieldCheck size={18} className="dash-metric-icon violet" />
                  </div>
                  <div className="dash-metric-value" style={{ fontSize: '1.4rem' }}>
                    High Security
                  </div>
                  <div className="dash-metric-sub green">COPPA & HIPAA Certified</div>
                </div>
              </div>

              {/* 2-Column Split: Map & Tags (Left) | Medical & Contacts (Right) */}
              <div className="dash-split-grid">
                {/* Left Column */}
                <div className="dash-split-col">
                  {/* Map Preview Card */}
                  <div className="dash-card">
                    <div className="dash-card-header">
                      <div>
                        <h2 className="dash-card-title">Live Scan Location</h2>
                        <p className="dash-card-sub">GPS coordinates sent instantly upon tag scan.</p>
                      </div>
                      <button 
                        className="btn-secondary"
                        style={{ padding: '6px 14px', fontSize: '0.8rem' }}
                        onClick={() => setActiveTab('map')}
                      >
                        Full Map View
                      </button>
                    </div>

                    <div className="simulated-map-box" style={{ height: 180 }}>
                      <div className="map-grid-bg"></div>
                      <div className="map-pin-pulse">
                        <div className="map-pin-marker">
                          <MapPin size={18} />
                        </div>
                        <span className="map-label-tag">
                          📍 {currentChild.scanHistory[0].location} (Accuracy 5m)
                        </span>
                      </div>
                    </div>

                    <div className="dash-map-footer">
                      <div className="dash-map-meta">
                        <span>Coordinates: <strong>{currentChild.scanHistory[0].coords}</strong></span>
                        <span>• Device: {currentChild.scanHistory[0].scanner}</span>
                      </div>
                    </div>
                  </div>

                  {/* Registered Physical Tags List */}
                  <div className="dash-card">
                    <div className="dash-card-header">
                      <div>
                        <h2 className="dash-card-title">Registered Physical Tags</h2>
                        <p className="dash-card-sub">Wristbands and badges linked to {currentChild.name}.</p>
                      </div>
                      <button 
                        className="btn-primary"
                        style={{ padding: '6px 14px', fontSize: '0.8rem' }}
                        onClick={() => onOpenActivation()}
                      >
                        <Plus size={14} />
                        <span>Add Tag</span>
                      </button>
                    </div>

                    <div className="dash-tag-list">
                      {currentChild.tags.map((tag, idx) => (
                        <div key={idx} className="dash-tag-item">
                          <div className="dash-tag-item-left">
                            <div className="dash-tag-icon-box">
                              <QrCode size={20} />
                            </div>
                            <div>
                              <div className="dash-tag-name-row">
                                <strong>{tag.type}</strong>
                                <span className="badge-save" style={{ fontSize: '0.68rem', padding: '2px 8px' }}>
                                  {tag.status}
                                </span>
                              </div>
                              <div className="dash-tag-id-sub">
                                ID: <code>{tag.id}</code> • {tag.lastScan}
                              </div>
                            </div>
                          </div>

                          <div className="dash-tag-actions">
                            <button 
                              className="btn-secondary"
                              style={{ padding: '6px 12px', fontSize: '0.78rem' }}
                              onClick={() => alert(`Simulating scan for tag ${tag.id} — Opening Good Samaritan Web View`)}
                            >
                              <ExternalLink size={13} />
                              <span>Test Scan</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="dash-split-col">
                  {/* Medical Condition Alert Card */}
                  <div className="dash-card">
                    <div className="dash-card-header">
                      <div>
                        <h2 className="dash-card-title">Vital Medical & Allergy Alert</h2>
                        <p className="dash-card-sub">Instantly visible to anyone who scans the tag.</p>
                      </div>
                    </div>

                    <form onSubmit={handleSaveMedical}>
                      <textarea 
                        value={medicalNotes}
                        onChange={(e) => setMedicalNotes(e.target.value)}
                        rows={4}
                        className="dash-textarea"
                      />
                      <div className="dash-textarea-footer">
                        <span className="dash-saved-indicator">
                          {savedSuccess ? '✓ Saved to physical tag cloud profile!' : '🔒 Encrypted on AWS Health Vault'}
                        </span>
                        <button type="submit" className="btn-primary" style={{ padding: '7px 16px', fontSize: '0.82rem' }}>
                          Save Protocol
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* Emergency Contacts Card */}
                  <div className="dash-card">
                    <div className="dash-card-header">
                      <div>
                        <h2 className="dash-card-title">Emergency Contacts</h2>
                        <p className="dash-card-sub">Notified in order via priority SMS and proxy call.</p>
                      </div>
                      <button 
                        className="btn-secondary"
                        style={{ padding: '6px 12px', fontSize: '0.78rem' }}
                        onClick={() => setActiveTab('contacts')}
                      >
                        Manage
                      </button>
                    </div>

                    <div className="dash-contact-list">
                      {currentChild.contacts.map((contact, idx) => (
                        <div key={idx} className="dash-contact-item">
                          <div>
                            <div className="dash-contact-name-row">
                              <strong>{contact.name}</strong>
                              <span className="dash-priority-pill">{contact.priority}</span>
                            </div>
                            <div className="dash-contact-phone">{contact.phone}</div>
                          </div>
                          <button 
                            className="dash-call-test-btn"
                            onClick={() => alert(`Testing proxy call to ${contact.name}`)}
                            title="Test proxy dialer"
                          >
                            <PhoneCall size={14} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recent Scan History */}
                  <div className="dash-card">
                    <div className="dash-card-header">
                      <div>
                        <h2 className="dash-card-title">Scan Log Timeline</h2>
                        <p className="dash-card-sub">Chronological history of all scans.</p>
                      </div>
                    </div>

                    <div className="dash-timeline-list">
                      {currentChild.scanHistory.map((item) => (
                        <div key={item.id} className="dash-timeline-item">
                          <div className="dash-timeline-bullet"></div>
                          <div className="dash-timeline-content">
                            <div className="dash-timeline-title">{item.location}</div>
                            <div className="dash-timeline-meta">{item.scanner} • {item.action}</div>
                            <div className="dash-timeline-time">{item.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SMART TAGS */}
          {activeTab === 'tags' && (
            <div className="dash-view-container">
              <div className="dash-section-headline-row">
                <div>
                  <h2 className="dash-section-h2">Physical Smart Tags ({currentChild.tags.length})</h2>
                  <p className="dash-card-sub">All active tags linked to {currentChild.name}. Passive NFC & QR - zero charging needed.</p>
                </div>
                <button className="btn-primary" onClick={() => onOpenActivation()}>
                  <Plus size={16} />
                  <span>Register Another Tag</span>
                </button>
              </div>

              <div className="dash-cards-grid-3">
                {currentChild.tags.map((tag, idx) => (
                  <div key={idx} className="dash-tag-card-full">
                    <div className="dash-tag-card-top">
                      <div className="dash-qr-box-small">
                        <QrCode size={40} style={{ color: 'var(--brand-purple)' }} />
                      </div>
                      <span className="badge-save">{tag.status}</span>
                    </div>

                    <h3 className="dash-tag-card-name">{tag.type}</h3>
                    <p className="dash-tag-card-pin">Tag Code: <strong>{tag.id}</strong></p>
                    <p className="dash-tag-card-desc">Color: {tag.color} • Built for waterproof child play</p>

                    <div className="dash-tag-card-stats">
                      <div>
                        <span className="stat-label">Scans:</span>
                        <strong>{tag.scans}</strong>
                      </div>
                      <div>
                        <span className="stat-label">Last Ping:</span>
                        <strong>{tag.lastScan}</strong>
                      </div>
                    </div>

                    <div className="dash-tag-card-btns">
                      <button 
                        className="btn-secondary" 
                        style={{ width: '100%', fontSize: '0.82rem' }}
                        onClick={() => alert(`Simulating scan for tag ${tag.id}`)}
                      >
                        <ExternalLink size={14} />
                        <span>Simulate Scan</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: CHILDREN PROFILES */}
          {activeTab === 'children' && (
            <div className="dash-view-container">
              <div className="dash-section-headline-row">
                <div>
                  <h2 className="dash-section-h2">Children Under Your Care</h2>
                  <p className="dash-card-sub">Profiles, medical specifics, and tags assigned to each child.</p>
                </div>
                <button className="btn-primary" onClick={() => onOpenActivation()}>
                  <Plus size={16} />
                  <span>Add Child</span>
                </button>
              </div>

              <div className="dash-cards-grid-2">
                {/* Maya */}
                <div className={`dash-child-full-card ${selectedChild === 'maya' ? 'selected' : ''}`}>
                  <div className="dash-child-card-header">
                    <div className="dash-child-avatar-big">👧</div>
                    <div>
                      <h3 className="dash-child-name">Maya Sinclair</h3>
                      <p className="dash-child-details">Age 5 • Female • Blood O+</p>
                    </div>
                  </div>
                  <div className="dash-child-meta-list">
                    <div>🏷️ <strong>3 Active Tags</strong> (Wristband, Backpack, Shoes)</div>
                    <div>⚠️ <strong>Allergies:</strong> Peanut allergy, asthma inhaler in bag</div>
                    <div>📞 <strong>Contacts:</strong> Mom (Primary), Dad (Secondary)</div>
                  </div>
                  <button 
                    className="btn-primary" 
                    style={{ width: '100%', marginTop: 16 }}
                    onClick={() => {
                      setSelectedChild('maya');
                      setActiveTab('overview');
                    }}
                  >
                    Manage Maya's Dashboard →
                  </button>
                </div>

                {/* Leo */}
                <div className={`dash-child-full-card ${selectedChild === 'leo' ? 'selected' : ''}`}>
                  <div className="dash-child-card-header">
                    <div className="dash-child-avatar-big">👦</div>
                    <div>
                      <h3 className="dash-child-name">Leo Sinclair</h3>
                      <p className="dash-child-details">Age 3 • Male • Blood A+</p>
                    </div>
                  </div>
                  <div className="dash-child-meta-list">
                    <div>🏷️ <strong>2 Active Tags</strong> (Wristband, Jacket Clip)</div>
                    <div>⚠️ <strong>Allergies:</strong> No known food allergies</div>
                    <div>📞 <strong>Contacts:</strong> Mom (Primary), Dad (Secondary)</div>
                  </div>
                  <button 
                    className="btn-secondary" 
                    style={{ width: '100%', marginTop: 16 }}
                    onClick={() => {
                      setSelectedChild('leo');
                      setActiveTab('overview');
                    }}
                  >
                    Manage Leo's Dashboard →
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: LIVE SCAN MAP */}
          {activeTab === 'map' && (
            <div className="dash-view-container">
              <div className="dash-card">
                <div className="dash-card-header">
                  <div>
                    <h2 className="dash-card-title">Live GPS Scan Radar for {currentChild.name}</h2>
                    <p className="dash-card-sub">High-precision map coordinates triggered when tags are scanned.</p>
                  </div>
                  <span className="badge-save">● Live Radar Active</span>
                </div>

                <div className="simulated-map-box" style={{ height: 340 }}>
                  <div className="map-grid-bg"></div>
                  <div className="map-pin-pulse">
                    <div className="map-pin-marker">
                      <MapPin size={22} />
                    </div>
                    <span className="map-label-tag">
                      📍 {currentChild.scanHistory[0].location} (Exact Accuracy 5m)
                    </span>
                  </div>
                </div>

                <div style={{ marginTop: 20 }}>
                  <h3 style={{ fontSize: '1rem', marginBottom: 12 }}>Scan Incident Log:</h3>
                  <div className="dash-timeline-list">
                    {currentChild.scanHistory.map((item) => (
                      <div key={item.id} className="dash-timeline-item">
                        <div className="dash-timeline-bullet"></div>
                        <div className="dash-timeline-content">
                          <div className="dash-timeline-title">📍 {item.location} ({item.coords})</div>
                          <div className="dash-timeline-meta">{item.scanner} • {item.action}</div>
                          <div className="dash-timeline-time">{item.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: EMERGENCY CONTACTS */}
          {activeTab === 'contacts' && (
            <div className="dash-view-container">
              <div className="dash-card">
                <div className="dash-card-header">
                  <div>
                    <h2 className="dash-card-title">Emergency Contact Priority List</h2>
                    <p className="dash-card-sub">When your child's tag is scanned, finders can call these verified numbers.</p>
                  </div>
                  <button className="btn-primary" onClick={() => alert('Add Contact modal')}>
                    <Plus size={14} />
                    <span>Add New Contact</span>
                  </button>
                </div>

                <div className="dash-contact-list">
                  {currentChild.contacts.map((contact, idx) => (
                    <div key={idx} className="dash-contact-item">
                      <div>
                        <div className="dash-contact-name-row">
                          <strong>{contact.name}</strong>
                          <span className="dash-priority-pill">{contact.priority}</span>
                        </div>
                        <div className="dash-contact-phone">{contact.phone} • Status: {contact.status}</div>
                      </div>
                      <div style={{ display: 'flex', gap: 8 }}>
                        <button 
                          className="btn-secondary" 
                          style={{ padding: '6px 12px', fontSize: '0.78rem' }}
                          onClick={() => alert(`Simulating test call to ${contact.name}`)}
                        >
                          <PhoneCall size={14} />
                          <span>Test Call</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: MEDICAL & ALLERGY */}
          {activeTab === 'medical' && (
            <div className="dash-view-container">
              <div className="dash-card">
                <div className="dash-card-header">
                  <div>
                    <h2 className="dash-card-title">Critical Medical & Allergy Instructions</h2>
                    <p className="dash-card-sub">First responders and Good Samaritans will immediately read this upon tag scan.</p>
                  </div>
                </div>

                <form onSubmit={handleSaveMedical}>
                  <textarea 
                    value={medicalNotes}
                    onChange={(e) => setMedicalNotes(e.target.value)}
                    rows={6}
                    className="dash-textarea"
                  />
                  <div className="dash-textarea-footer">
                    <span className="dash-saved-indicator">
                      {savedSuccess ? '✓ Successfully updated cloud protocol!' : '🔒 Encrypted and private until tag is scanned.'}
                    </span>
                    <button type="submit" className="btn-primary">
                      Save Medical Instructions
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* TAB 7: SETTINGS */}
          {activeTab === 'settings' && (
            <div className="dash-view-container">
              <div className="dash-card">
                <h2 className="dash-card-title" style={{ marginBottom: 16 }}>Privacy & Safe Proxy Settings</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <strong>Safe Call Proxy Protection</strong>
                      <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Masks your personal cell phone number when finders tap to call.</p>
                    </div>
                    <span className="badge-save">Active</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-light)', paddingTop: 14 }}>
                    <div>
                      <strong>Instant SMS & WhatsApp Ping</strong>
                      <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Dispatches immediate Google Maps link to parents upon scan.</p>
                    </div>
                    <span className="badge-save">Enabled</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-light)', paddingTop: 14 }}>
                    <div>
                      <strong>Account Plan</strong>
                      <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Family Care Membership ($19.99/year)</p>
                    </div>
                    <button className="btn-secondary" style={{ padding: '6px 14px', fontSize: '0.8rem' }} onClick={() => alert('Manage Billing')}>
                      Manage Subscription
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

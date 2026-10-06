import { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import type { ChildProfile } from '../types';
import { initialChildrenData } from '../pages/dashboard/mockData';
import type { DashboardContextType } from '../pages/dashboard/context';
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
  Radio
} from 'lucide-react';

interface DashboardLayoutProps {
  onOpenActivation?: () => void;
}

export default function DashboardLayout({ onOpenActivation }: DashboardLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const [childrenData] = useState<Record<string, ChildProfile>>(initialChildrenData);
  const [selectedChild, setSelectedChild] = useState<string>('maya');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [lostModeActive, setLostModeActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [acknowledgedAlert, setAcknowledgedAlert] = useState(false);

  const currentChild = childrenData[selectedChild] || childrenData.maya;

  const navItems = [
    { id: 'overview', path: '/dashboard', label: 'Overview', icon: LayoutDashboard },
    { id: 'tags', path: '/dashboard/tags', label: 'Smart Tags', icon: Tag, count: currentChild.tags.length },
    { id: 'children', path: '/dashboard/children', label: 'Children Profiles', icon: Users, count: 2 },
    { id: 'map', path: '/dashboard/map', label: 'Live Scan Map', icon: MapPin, badge: 'Live' },
    { id: 'contacts', path: '/dashboard/contacts', label: 'Emergency Contacts', icon: PhoneCall },
    { id: 'medical', path: '/dashboard/medical', label: 'Medical & Allergy', icon: HeartPulse },
    { id: 'settings', path: '/dashboard/settings', label: 'Safety & Settings', icon: Settings }
  ];

  const getPageTitle = () => {
    if (location.pathname === '/dashboard/tags') return 'Smart Tags Manager';
    if (location.pathname === '/dashboard/children') return 'Child Profiles';
    if (location.pathname === '/dashboard/map') return 'Live GPS Scan Radar';
    if (location.pathname === '/dashboard/contacts') return 'Emergency Contacts';
    if (location.pathname === '/dashboard/medical') return 'Medical & Allergy Protocol';
    if (location.pathname === '/dashboard/settings') return 'Safety & Privacy Settings';
    return 'Caregiver Overview';
  };

  const contextValue: DashboardContextType = {
    selectedChild,
    setSelectedChild,
    currentChild,
    childrenData,
    searchQuery,
    setSearchQuery,
    lostModeActive,
    setLostModeActive,
    onOpenActivation
  };

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
          <div className="dash-sidebar-brand" onClick={() => navigate('/')}>
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
            const isActive = item.path === '/dashboard'
              ? location.pathname === '/dashboard'
              : location.pathname.startsWith(item.path);

            return (
              <button
                key={item.id}
                className={`dash-nav-btn ${isActive ? 'active' : ''}`}
                onClick={() => {
                  navigate(item.path);
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
            onClick={() => onOpenActivation?.()}
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
            <button className="dash-footer-link" onClick={() => navigate('/')}>
              <ArrowLeft size={15} />
              <span>Back to Site</span>
            </button>
            <button className="dash-footer-link danger" onClick={() => navigate('/auth/login')}>
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
              <h1 className="dash-topbar-title">{getPageTitle()}</h1>
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
              onClick={() => navigate('/dashboard/map')}
              title="View Scan Alerts"
            >
              <Bell size={18} />
              <span className="dash-bell-count">1</span>
            </button>
          </div>
        </header>

        {/* Scrollable View Content with Outlet */}
        <main className="dash-content-scroll">
          {/* Emergency Alert Banner */}
          {!acknowledgedAlert && currentChild.scanHistory.length > 0 && (
            <div className="dash-alert-strip">
              <div className="dash-alert-strip-left">
                <Radio size={20} className="dash-alert-pulse-icon" />
                <div>
                  <strong>Live Tag Scan:</strong> {currentChild.name}'s tag was scanned at <strong>{currentChild.scanHistory[0].location}</strong> ({currentChild.tags[0]?.lastScan || 'Recently'}).
                </div>
              </div>
              <div className="dash-alert-strip-actions">
                <button
                  className="btn-primary"
                  style={{ padding: '6px 14px', fontSize: '0.8rem' }}
                  onClick={() => alert('Calling Good Samaritan via Safe Proxy: Proxy connecting...')}
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

          {/* Child Route View */}
          <Outlet context={contextValue} />
        </main>
      </div>
    </div>
  );
}

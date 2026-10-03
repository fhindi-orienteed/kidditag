import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Plus, 
  MapPin, 
  Phone, 
  QrCode, 
  AlertTriangle, 
  Smartphone, 
  Clock, 
  Edit3, 
  Check, 
  ArrowLeft,
  ChevronRight,
  ExternalLink,
  Trash2
} from 'lucide-react';

export default function ParentDashboard({ onBackToLanding, onOpenActivation }) {
  const [selectedChild, setSelectedChild] = useState('maya');
  const [medicalNotes, setMedicalNotes] = useState(
    'Asthma (inhaler located in front pouch of backpack), allergic to bee stings.'
  );
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Mock data for children
  const childrenData = {
    maya: {
      name: 'Maya Sinclair',
      age: 5,
      avatar: '👧',
      tags: [
        { id: 'KT-7842', type: 'Silicone Wristband', color: 'Purple', status: 'Active', scans: 4, lastScan: '14 mins ago' },
        { id: 'KT-9104', type: 'Backpack Tag', color: 'Teal', status: 'Active', scans: 1, lastScan: 'Yesterday' },
        { id: 'KT-3381', type: 'Shoe Lace Tag', color: 'Pink', status: 'Active', scans: 0, lastScan: 'Never' }
      ],
      contacts: [
        { name: 'Sarah Sinclair (Mother)', phone: '(555) 234-8901', priority: 'Primary' },
        { name: 'David Sinclair (Father)', phone: '(555) 234-8902', priority: 'Secondary' },
        { name: 'Dr. Evelyn Reed (Pediatrician)', phone: '(555) 901-4455', priority: 'Medical' }
      ],
      scanHistory: [
        {
          id: 1,
          location: 'Brooklyn Bridge Park, Pier 6',
          time: 'Today at 2:14 PM',
          scanner: 'Safari iOS • Verified Good Samaritan',
          action: 'Called Mother via Proxy',
          resolved: true
        },
        {
          id: 2,
          location: 'Central Park Carousel',
          time: 'Sep 28, 2026 at 11:30 AM',
          scanner: 'Chrome Android • Zoo Staff',
          action: 'GPS alert delivered',
          resolved: true
        }
      ]
    },
    leo: {
      name: 'Leo Sinclair',
      age: 3,
      avatar: '👦',
      tags: [
        { id: 'KT-4412', type: 'Silicone Wristband', color: 'Blue', status: 'Active', scans: 2, lastScan: '3 days ago' },
        { id: 'KT-6629', type: 'Jacket Clip Tag', color: 'Yellow', status: 'Active', scans: 0, lastScan: 'Never' }
      ],
      contacts: [
        { name: 'Sarah Sinclair (Mother)', phone: '(555) 234-8901', priority: 'Primary' },
        { name: 'David Sinclair (Father)', phone: '(555) 234-8902', priority: 'Secondary' }
      ],
      scanHistory: [
        {
          id: 1,
          location: 'Lincoln Center Plaza',
          time: 'Sep 22, 2026 at 4:10 PM',
          scanner: 'Safari iOS',
          action: 'SMS Ping Acknowledged',
          resolved: true
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

  return (
    <div className="dashboard-page-container">
      <div className="container">
        {/* Header navigation bar */}
        <div className="dashboard-header-bar">
          <div>
            <div className="dashboard-breadcrumbs">
              <span onClick={onBackToLanding} style={{ cursor: 'pointer', color: 'var(--brand-purple)' }}>
                Home
              </span>
              <span>/</span>
              <span>Parent Dashboard</span>
            </div>
            <h1 style={{ fontSize: '1.9rem', marginTop: 4 }}>Caregiver Command Center</h1>
          </div>

          <div style={{ display: 'flex', gap: 12 }}>
            <button className="btn-secondary" onClick={onBackToLanding} style={{ padding: '8px 18px' }}>
              <ArrowLeft size={16} />
              <span>Back to Landing Page</span>
            </button>
            <button className="btn-primary" onClick={() => onOpenActivation()} style={{ padding: '8px 20px' }}>
              <Plus size={16} />
              <span>Link New Tag</span>
            </button>
          </div>
        </div>

        {/* 3 Overview Stat Cards */}
        <div className="dash-stats-row" style={{ marginBottom: 32 }}>
          <div className="dash-stat-card">
            <div className="dash-stat-label">Active Protected Tags</div>
            <div className="dash-stat-value" style={{ color: 'var(--brand-purple)' }}>
              {currentChild.tags.length}
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--accent-green)', fontWeight: 600, marginTop: 4 }}>
              ✓ All tags synced to cloud profile
            </div>
          </div>

          <div className="dash-stat-card">
            <div className="dash-stat-label">Total Emergency Scans</div>
            <div className="dash-stat-value" style={{ color: 'var(--text-main)' }}>
              {currentChild.scanHistory.length}
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 4 }}>
              Last scan logged {currentChild.tags[0].lastScan}
            </div>
          </div>

          <div className="dash-stat-card">
            <div className="dash-stat-label">Shield Privacy Status</div>
            <div className="dash-stat-value" style={{ color: 'var(--accent-green)', fontSize: '1.4rem' }}>
              Protected
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-body)', marginTop: 4 }}>
              End-to-End Safe Call Proxy Active
            </div>
          </div>
        </div>

        {/* Main Dashboard Layout */}
        <div className="dashboard-grid-layout">
          {/* Left Sidebar: Child Profiles & Quick Switcher */}
          <div className="dashboard-sidebar-card">
            <div>
              <h3 style={{ fontSize: '1rem', marginBottom: 12, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Your Children
              </h3>
              <div className="dashboard-child-tabs">
                <button 
                  className={`child-select-btn ${selectedChild === 'maya' ? 'active' : ''}`}
                  onClick={() => setSelectedChild('maya')}
                >
                  <span style={{ fontSize: '1.4rem' }}>👧</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.94rem' }}>Maya Sinclair</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Age 5 • 3 Tags</div>
                  </div>
                </button>

                <button 
                  className={`child-select-btn ${selectedChild === 'leo' ? 'active' : ''}`}
                  onClick={() => setSelectedChild('leo')}
                >
                  <span style={{ fontSize: '1.4rem' }}>👦</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.94rem' }}>Leo Sinclair</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Age 3 • 2 Tags</div>
                  </div>
                </button>

                <button 
                  className="child-select-btn"
                  onClick={() => onOpenActivation()}
                  style={{ border: '1px dashed var(--border-card)', background: 'transparent' }}
                >
                  <Plus size={18} style={{ color: 'var(--brand-purple)' }} />
                  <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--brand-purple)' }}>
                    Add Another Child
                  </span>
                </button>
              </div>
            </div>

            {/* Quick Emergency Mode Toggle */}
            <div style={{
              background: '#fef2f2',
              border: '1px solid #fed7d7',
              borderRadius: 'var(--radius-md)',
              padding: 16
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#b91c1c', fontWeight: 700, fontSize: '0.88rem', marginBottom: 6 }}>
                <AlertTriangle size={16} />
                <span>Lost Child Broadcast</span>
              </div>
              <p style={{ fontSize: '0.78rem', color: '#7f1d1d', lineHeight: 1.45, marginBottom: 12 }}>
                Activate to send priority broadcast alert to all local venue security stations.
              </p>
              <button 
                className="btn-primary" 
                style={{ 
                  background: '#dc2626', 
                  width: '100%', 
                  padding: '8px 12px', 
                  fontSize: '0.82rem',
                  boxShadow: 'none'
                }}
                onClick={() => alert('🚨 Emergency broadcast test mode activated for ' + currentChild.name)}
              >
                Trigger Lost Mode
              </button>
            </div>
          </div>

          {/* Right Main Content */}
          <div className="dashboard-main-content">
            {/* Registered Tags List */}
            <div style={{
              background: '#ffffff',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--border-card)',
              padding: 28,
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                <div>
                  <h2 style={{ fontSize: '1.3rem', marginBottom: 4 }}>Registered Tags for {currentChild.name}</h2>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Physical badges, wristbands, and gear stickers linked to this emergency profile.
                  </p>
                </div>
                <button 
                  className="btn-secondary" 
                  onClick={() => onOpenActivation()}
                  style={{ padding: '7px 16px', fontSize: '0.84rem' }}
                >
                  <Plus size={14} />
                  <span>Add Tag</span>
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {currentChild.tags.map((tag, idx) => (
                  <div 
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '14px 18px',
                      background: 'var(--bg-subtle)',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-card)',
                      flexWrap: 'wrap',
                      gap: 12
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                      <div style={{
                        width: 42,
                        height: 42,
                        borderRadius: 'var(--radius-sm)',
                        background: '#ffffff',
                        border: '1px solid var(--border-card)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--brand-purple)'
                      }}>
                        <QrCode size={22} />
                      </div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <span style={{ fontWeight: 700, fontSize: '0.94rem' }}>{tag.type}</span>
                          <span className="badge-save" style={{ fontSize: '0.7rem' }}>{tag.status}</span>
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 2 }}>
                          Tag ID: <strong>{tag.id}</strong> • Last scan: {tag.lastScan}
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <button 
                        className="btn-secondary" 
                        style={{ padding: '6px 14px', fontSize: '0.8rem' }}
                        onClick={() => alert(`Simulating scan for tag ${tag.id} — Opens Finder Web Profile`)}
                      >
                        <ExternalLink size={14} />
                        <span>Test Scan</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Medical Info & Emergency Contacts Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 24 }}>
              {/* Emergency Medical Notes */}
              <div style={{
                background: '#ffffff',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border-card)',
                padding: 24,
                boxShadow: 'var(--shadow-sm)'
              }}>
                <h3 style={{ fontSize: '1.15rem', marginBottom: 6 }}>Vital Medical & Allergy Alert</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: 16 }}>
                  Visible to anyone who scans {currentChild.name}'s tag in an emergency.
                </p>

                <form onSubmit={handleSaveMedical}>
                  <textarea 
                    value={medicalNotes}
                    onChange={(e) => setMedicalNotes(e.target.value)}
                    rows={4}
                    style={{
                      width: '100%',
                      fontFamily: 'inherit',
                      background: 'var(--bg-subtle)',
                      border: '1px solid var(--border-card)',
                      borderRadius: 'var(--radius-md)',
                      padding: '12px 14px',
                      fontSize: '0.88rem',
                      lineHeight: 1.5,
                      marginBottom: 12
                    }}
                  />
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--accent-green)', fontWeight: 600 }}>
                      {savedSuccess ? '✓ Successfully saved to live tag cloud!' : ''}
                    </span>
                    <button type="submit" className="btn-primary" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
                      Save Updates
                    </button>
                  </div>
                </form>
              </div>

              {/* Emergency Contacts List */}
              <div style={{
                background: '#ffffff',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border-card)',
                padding: 24,
                boxShadow: 'var(--shadow-sm)'
              }}>
                <h3 style={{ fontSize: '1.15rem', marginBottom: 6 }}>Emergency Contacts</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: 14 }}>
                  Notified instantly via SMS and call proxy.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {currentChild.contacts.map((contact, idx) => (
                    <div 
                      key={idx}
                      style={{
                        padding: '10px 12px',
                        background: 'var(--bg-subtle)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-card)'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontWeight: 600, fontSize: '0.88rem' }}>{contact.name}</span>
                        <span style={{ fontSize: '0.7rem', padding: '2px 6px', background: '#eef2ff', color: 'var(--brand-purple)', borderRadius: 4, fontWeight: 700 }}>
                          {contact.priority}
                        </span>
                      </div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: 2 }}>
                        {contact.phone}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Scan Activity History */}
            <div style={{
              background: '#ffffff',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--border-card)',
              padding: 24,
              boxShadow: 'var(--shadow-sm)'
            }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: 6 }}>Recent Scan Activity Log</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: 16 }}>
                Real-time records of every scan attempt, location ping, and parent communication.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {currentChild.scanHistory.map((log) => (
                  <div 
                    key={log.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 16px',
                      background: '#f8fafc',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-card)',
                      flexWrap: 'wrap',
                      gap: 8
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <MapPin size={18} style={{ color: 'var(--brand-purple)' }} />
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{log.location}</div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                          {log.scanner} • {log.action}
                        </div>
                      </div>
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-body)', fontWeight: 600 }}>
                      {log.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

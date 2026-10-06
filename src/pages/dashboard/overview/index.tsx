import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Tag, 
  Clock, 
  Smartphone, 
  ShieldCheck, 
  MapPin, 
  Plus, 
  QrCode, 
  ExternalLink, 
  PhoneCall 
} from 'lucide-react';
import { useDashboardContext } from '../context';
import { initialChildrenData } from '../mockData';

interface OverviewPageProps {
  onOpenActivation?: () => void;
}

export default function OverviewPage({ onOpenActivation: propOpenActivation }: OverviewPageProps) {
  const navigate = useNavigate();
  const ctx = useDashboardContext();

  const currentChild = ctx?.currentChild || initialChildrenData.maya;
  const onOpenActivation = propOpenActivation || ctx?.onOpenActivation;

  const [medicalNotes, setMedicalNotes] = useState(
    'Asthma (inhaler located in front pouch of pink backpack), allergic to bee stings. Administer inhaler if breathing becomes strained.'
  );
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSaveMedical = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
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
          <div className="dash-metric-sub">Last scan {currentChild.tags[0]?.lastScan || 'N/A'}</div>
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
                onClick={() => navigate('/dashboard/map')}
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
                  📍 {currentChild.scanHistory[0]?.location || 'No scans recorded'} (Accuracy 5m)
                </span>
              </div>
            </div>

            <div className="dash-map-footer">
              <div className="dash-map-meta">
                <span>Coordinates: <strong>{currentChild.scanHistory[0]?.coords || 'N/A'}</strong></span>
                <span>• Device: {currentChild.scanHistory[0]?.scanner || 'N/A'}</span>
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
                onClick={() => onOpenActivation?.()}
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
                onClick={() => navigate('/dashboard/contacts')}
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
  );
}

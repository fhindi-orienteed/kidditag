import { QrCode, Plus, ExternalLink } from 'lucide-react';
import { useDashboardContext } from '../context';
import { initialChildrenData } from '../mockData';

interface TagsPageProps {
  onBackToLanding?: () => void;
  onOpenActivation?: () => void;
}

export default function TagsPage({ onOpenActivation: propOpenActivation }: TagsPageProps) {
  const ctx = useDashboardContext();
  const currentChild = ctx?.currentChild || initialChildrenData.maya;
  const onOpenActivation = propOpenActivation || ctx?.onOpenActivation;

  return (
    <div className="dash-view-container">
      <div className="dash-section-headline-row">
        <div>
          <h2 className="dash-section-h2">Physical Smart Tags ({currentChild.tags.length})</h2>
          <p className="dash-card-sub">
            All active tags linked to {currentChild.name}. Passive NFC & QR - zero charging needed.
          </p>
        </div>
        <button className="btn-primary" onClick={() => onOpenActivation?.()}>
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
  );
}

import { QrCode } from 'lucide-react';
import type { Tag } from '../../../types';

interface TagsCardProps {
  tag: Tag;
}

export default function TagsCard({ tag }: TagsCardProps) {

  return (
    <div className="dash-tag-card-full">
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
    </div>
  );
}

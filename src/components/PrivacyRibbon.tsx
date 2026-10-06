import { Lock, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function PrivacyRibbon() {
  return (
    <div className="privacy-ribbon">
      <div className="container">
        <div className="privacy-ribbon-content">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Lock size={16} />
            <span>
              <strong>PRIVACY FIRST:</strong> We never sell or share family data. All emergency profiles are end-to-end encrypted.
            </span>
          </div>

          <div className="privacy-badges-group">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <ShieldCheck size={16} />
              <span>HIPAA Compliant</span>
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <HeartHandshake size={16} />
              <span>COPPA Certified Protection</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

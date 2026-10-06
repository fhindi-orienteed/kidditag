import { MapPin, Shield, ShieldCheck, Smartphone } from "lucide-react";

export default function LoginPageDetails() {
  return (
    <div className="login-showcase-panel">
      <div className="showcase-glow-orb"></div>

      <div className="showcase-content">
        <div
          className="section-pill green"
          style={{
            background: "rgba(16, 185, 129, 0.2)",
            color: "#34d399",
            border: "1px solid rgba(52, 211, 153, 0.4)",
          }}
        >
          <ShieldCheck size={14} />
          <span>24/7 ACTIVE CHILD SAFEGUARD</span>
        </div>

        <h2 className="showcase-title">
          Smart safety tags that keep you connected, anywhere kids roam.
        </h2>

        <p className="showcase-desc">
          Log into your dashboard to update allergy instructions, review scan
          GPS coordinates, and add emergency phone contacts in real time.
        </p>

        {/* Feature Pill Highlights */}
        <div className="showcase-features-list">
          <div className="showcase-feature-item">
            <div className="feature-icon-box">
              <MapPin size={18} />
            </div>
            <div>
              <h4>Instant GPS Scan Alerts</h4>
              <p>
                Receive SMS & Google Maps link the second someone scans your
                tag.
              </p>
            </div>
          </div>

          <div className="showcase-feature-item">
            <div className="feature-icon-box">
              <Shield size={18} />
            </div>
            <div>
              <h4>Private Proxy Calling</h4>
              <p>
                Good Samaritans can reach you with 1 click without seeing your
                private cell.
              </p>
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
          <p className="showcase-preview-title">Live Safety Shield Active:</p>
          <p className="showcase-preview-desc">
            Over 12,000 children protected today
          </p>
        </div>
      </div>
    </div>
  );
}

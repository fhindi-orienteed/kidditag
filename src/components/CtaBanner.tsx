import { Sparkles, ArrowRight, LayoutDashboard } from 'lucide-react';

interface CtaBannerProps {
  onOpenActivation?: () => void;
  onToggleDashboard?: () => void;
}

export default function CtaBanner({ onOpenActivation, onToggleDashboard }: CtaBannerProps) {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-banner-card">
          <div className="cta-content-left">
            <div className="cta-pill">
              <Sparkles size={14} />
              <span>30-Day Money-Back Guarantee • Fast Free Shipping</span>
            </div>

            <h2 className="cta-title">
              Give your little explorer safety that travels with them.
            </h2>

            <p className="cta-subtitle">
              Join thousands of caregivers who have chosen safety at theme parks, playgrounds, on school buses, and family vacations.
            </p>
          </div>

          <div className="cta-actions-right">
            <button 
              className="btn-white"
              onClick={() => onOpenActivation?.()}
              id="cta-order-btn"
            >
              <span>Order a KiddieTag Now</span>
              <ArrowRight size={16} />
            </button>
            <button 
              className="btn-outline-white"
              onClick={onToggleDashboard}
              id="cta-dashboard-btn"
            >
              <LayoutDashboard size={17} />
              <span>Explore Dashboard</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

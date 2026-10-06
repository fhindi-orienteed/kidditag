import { useState } from 'react';
import { Check } from 'lucide-react';

interface PricingProps {
  onOpenActivation?: () => void;
}

export default function Pricing({ onOpenActivation }: PricingProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">Pricing</h2>
          <p className="section-desc">
            One-time tag purchase, or optional Family Care membership for auto SMS pings and family management. Always affordable.
          </p>
        </div>

        {/* Billing Cycle Toggle */}
        <div className="billing-toggle-wrapper">
          <div className="billing-toggle-container">
            <button
              className={`billing-toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button
              className={`billing-toggle-btn ${billingCycle === 'yearly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('yearly')}
            >
              Yearly <span className="badge-save" style={{ marginLeft: 6 }}>SAVE 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-grid">
          {/* Plan 1: Explorer */}
          <div className="pricing-card">
            <h3 className="pricing-plan-name">Explorer</h3>
            <p className="pricing-plan-desc">Perfect for single child or occasional outings</p>

            <div className="pricing-price-row">
              <span className="price-amount">Free</span>
              <span className="price-period" style={{ marginLeft: 8 }}>/ forever with tag</span>
            </div>

            <button
              className="btn-secondary pricing-cta-btn"
              onClick={() => onOpenActivation?.()}
              id="plan-explorer-btn"
            >
              Get Started
            </button>

            <ul className="pricing-features-list">
              <li className="pricing-feature-item">
                <Check size={18} />
                <span>Lifetime QR tag profile hosting</span>
              </li>
              <li className="pricing-feature-item">
                <Check size={18} />
                <span>Mobile QR web page (no app required)</span>
              </li>
              <li className="pricing-feature-item">
                <Check size={18} />
                <span>Multi-parent emergency phone numbers</span>
              </li>
              <li className="pricing-feature-item">
                <Check size={18} />
                <span>Vital medical condition & allergy notes</span>
              </li>
              <li className="pricing-feature-item">
                <Check size={18} />
                <span>Standard email notification on scan</span>
              </li>
            </ul>
          </div>

          {/* Plan 2: Family Care (Featured) */}
          <div className="pricing-card featured">
            <span className="featured-badge-top">BEST VALUE</span>
            <h3 className="pricing-plan-name">Family Care</h3>
            <p className="pricing-plan-desc">Complete protection for the entire family</p>

            <div className="pricing-price-row">
              <span className="price-currency">$</span>
              <span className="price-amount">{billingCycle === 'monthly' ? '1.99' : '19.99'}</span>
              <span className="price-period">
                {billingCycle === 'monthly' ? '/ month' : '/ year (billed annually)'}
              </span>
            </div>

            <button
              className="btn-primary pricing-cta-btn"
              onClick={() => onOpenActivation?.()}
              id="plan-family-btn"
            >
              Subscribe Now
            </button>

            <ul className="pricing-features-list">
              <li className="pricing-feature-item">
                <Check size={18} />
                <span><strong>Unlimited</strong> child profiles & tag linkings</span>
              </li>
              <li className="pricing-feature-item">
                <Check size={18} />
                <span><strong>Instant SMS & WhatsApp</strong> emergency alerts</span>
              </li>
              <li className="pricing-feature-item">
                <Check size={18} />
                <span><strong>Real-time GPS pin</strong> on Google Maps</span>
              </li>
              <li className="pricing-feature-item">
                <Check size={18} />
                <span>Safe phone proxy (masks private cell number)</span>
              </li>
              <li className="pricing-feature-item">
                <Check size={18} />
                <span>24/7 Priority Emergency Support hotline</span>
              </li>
              <li className="pricing-feature-item">
                <Check size={18} />
                <span>Free replacement tag if lost or worn</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

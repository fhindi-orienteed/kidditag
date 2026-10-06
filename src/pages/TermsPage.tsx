import { FileText, ArrowLeft, Shield, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsPage() {
  return (
    <div className="content-page-wrapper">
      <div className="container">
        {/* Breadcrumb Header */}
        <div className="content-page-header">
          <Link to="/" className="back-link">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>

          <div className="section-pill purple" style={{ marginTop: 12, marginBottom: 12 }}>
            <FileText size={14} />
            <span>LEGAL AGREEMENT & SERVICE POLICIES</span>
          </div>

          <h1 className="content-page-title">Terms of Service</h1>
          <p className="content-page-subtitle">
            Please read these terms carefully before purchasing physical KiddieTag products or activating your caregiver account. By using KiddieTag, you agree to be bound by these policies.
          </p>
          <div className="content-page-meta">
            <span>Last Updated: October 1, 2026</span>
            <span>•</span>
            <span>Applies to all Web & Mobile Services</span>
          </div>
        </div>

        {/* Highlight Alert Box */}
        <div className="terms-notice-card">
          <div className="terms-notice-icon">
            <AlertTriangle size={24} />
          </div>
          <div>
            <h4>Emergency Medical & 911 Notice</h4>
            <p>
              KiddieTag provides rapid communication facilitation between lost children finders and caregivers. 
              <strong> KiddieTag is not a substitute for municipal emergency services.</strong> In life-threatening emergencies, finders and caregivers should always dial 911 immediately.
            </p>
          </div>
        </div>

        {/* Detailed Sections Card */}
        <div className="legal-article-card">
          <section className="legal-section">
            <h2>1. Service Overview</h2>
            <p>
              KiddieTag Technologies Inc. ("KiddieTag", "we", "us") manufactures passive QR & NFC identification wristbands, badges, and labels, alongside hosting dynamic cloud emergency caregiver profiles.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Caregiver Responsibilities</h2>
            <p>
              By registering a physical tag, you represent and warrant that:
            </p>
            <ul>
              <li>You are the parent, legal guardian, or authorized educator/caregiver of the child linked to the tag.</li>
              <li>Emergency contact numbers entered into the portal are accurate, active, and monitored.</li>
              <li>Medical allergies, medications, and protocol notes entered are truthful and up to date.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Lifetime Hosting & Family Care Memberships</h2>
            <p>
              <strong>Free Lifetime Hosting:</strong> All physical tags purchased include lifetime web profile hosting, allowing anyone scanning the QR code to view designated emergency numbers without an app.
            </p>
            <p>
              <strong>Family Care Membership:</strong> Optional premium subscriptions ($1.99/mo or $19.99/yr) add automated SMS dispatcher pings, Google Maps GPS coordinate relay, safe phone number masking proxy, and free replacement tags. You may cancel at any time with no penalties.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Physical Tag Warranty & 30-Day Guarantee</h2>
            <p>
              All silicone wristbands and stainless badges come with a 30-day money-back guarantee. If a tag is damaged due to normal playground rough-and-tumble wear within the first year, active Family Care members receive a free replacement tag upon request.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Limitation of Liability</h2>
            <p>
              While KiddieTag provides high-availability cloud servers (99.98% uptime) and encrypted telecommunication proxies, KiddieTag cannot guarantee third-party mobile carrier cellular reception, finder GPS device accuracy, or smartphone battery conditions during emergency incidents.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Questions Regarding Terms</h2>
            <p>
              For legal questions, school district licensing contracts, or compliance documentation, contact:
            </p>
            <div className="contact-callout-box">
              <Shield size={18} />
              <span>Legal Dept: <strong>legal@kidditag.com</strong> • KiddieTag Technologies Inc.</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

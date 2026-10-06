import { ShieldCheck, Lock, EyeOff, HeartHandshake, ArrowLeft, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPage() {
  return (
    <div className="content-page-wrapper">
      <div className="container">
        {/* Breadcrumb Header */}
        <div className="content-page-header">
          <Link to="/" className="back-link">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>

          <div className="section-pill green" style={{ marginTop: 12, marginBottom: 12 }}>
            <ShieldCheck size={14} />
            <span>COPPA & HIPAA COMPLIANT PRIVACY PROTOCOL</span>
          </div>

          <h1 className="content-page-title">Privacy Policy</h1>
          <p className="content-page-subtitle">
            At KiddieTag, child safety and caregiver privacy are our foundational mission. We design our tags, cloud infrastructure, and proxy calling system so your family stays protected without compromising sensitive personal data.
          </p>
          <div className="content-page-meta">
            <span>Effective Date: October 1, 2026</span>
            <span>•</span>
            <span>Version 2.4</span>
          </div>
        </div>

        {/* 4 Core Privacy Pillars */}
        <div className="privacy-pillars-grid">
          <div className="pillar-card">
            <div className="pillar-icon-box purple">
              <Lock size={22} />
            </div>
            <h3>Masked Phone Calling</h3>
            <p>
              When a finder taps to call from a scanned tag, our secure VoIP proxy connects the call without revealing your personal cell phone number.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon-box green">
              <ShieldCheck size={22} />
            </div>
            <h3>AES-256 Cloud Encryption</h3>
            <p>
              All child medical protocols, emergency contacts, and allergy alerts are encrypted at rest and in transit via AWS Health Vault standards.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon-box violet">
              <EyeOff size={22} />
            </div>
            <h3>Zero Data Selling or Ads</h3>
            <p>
              We never sell family information, advertise to children, or share contact directories with data brokers. Ever.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon-box blue">
              <HeartHandshake size={22} />
            </div>
            <h3>Instant Profile Revocation</h3>
            <p>
              You maintain total control. Deactivate a lost tag or wipe child emergency profiles instantly from your caregiver dashboard with 1 click.
            </p>
          </div>
        </div>

        {/* Detailed Legal Sections */}
        <div className="legal-article-card">
          <section className="legal-section">
            <h2>1. Information We Collect</h2>
            <p>
              We collect only the minimal data necessary to reunite lost children with authorized caregivers and communicate critical medical directives:
            </p>
            <ul>
              <li><strong>Caregiver Account Data:</strong> Name, verified email address, and billing information (processed via PCI-compliant Stripe).</li>
              <li><strong>Child Profile Data:</strong> First name or nickname, age, optional blood type, and emergency contact phone numbers provided by parents.</li>
              <li><strong>Critical Safety & Allergy Directives:</strong> Voluntary instructions you enter (such as EpiPen location, asthma notes, or sensory sensitivities).</li>
              <li><strong>What We Do NOT Collect:</strong> Home addresses, Social Security numbers, government IDs, or passive background GPS coordinates from children.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>2. How Finder Scans & Location Coordinates Work</h2>
            <p>
              KiddieTag physical tags use passive QR and NFC technology. The physical tags do not emit radiation or store on-tag batteries:
            </p>
            <ul>
              <li>When a Good Samaritan scans a tag, their mobile web browser requests permission to share their approximate GPS coordinates.</li>
              <li>If granted, this location is dispatched directly to the caregiver via priority SMS alert and pinned on your dashboard map.</li>
              <li>Finders never receive access to your child's historic routes or home location.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Safe Proxy Calling Protocol</h2>
            <p>
              To protect caregivers from spam, unwanted contact, or unsolicited callbacks after an incident is resolved, KiddieTag routes finder phone calls through a secure telecommunication proxy. The finder sees a temporary virtual number, and you receive an identified emergency screen with child identification before connecting.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Compliance with COPPA & Children's Privacy Laws</h2>
            <p>
              We strictly comply with the Children's Online Privacy Protection Act (COPPA). KiddieTag is engineered exclusively for parents, guardians, and authorized school educators over the age of 18. We do not permit minors to register accounts, nor do we market services directly to children.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Data Retention & Deletion Rights</h2>
            <p>
              You have the right to inspect, download, or permanently erase all family records stored with KiddieTag. Upon choosing "Delete Account" in your caregiver settings, all cloud records, scan timeline logs, and tag associations are cryptographically shredded within 24 hours.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Contacting our Data Protection Office</h2>
            <p>
              For privacy inquiries, HIPAA compliance verification, or educator group data processing agreements:
            </p>
            <div className="contact-callout-box">
              <Mail size={18} />
              <span>Email: <strong>privacy@kidditag.com</strong> • Attention: Chief Privacy Officer</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

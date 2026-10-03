import React from 'react';
import { 
  Tag, 
  ShieldCheck, 
  BellRing, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function HowItWorks({ onOpenActivation }) {
  const steps = [
    {
      step: 'STEP 01',
      title: 'Get & customize tag',
      desc: "Order pre-printed silicone wristbands, waterproof stickers, or stainless tags. Customize child's medical info, emergency contacts & allergy alerts. 100% free forever.",
      linkText: 'Order now for $12 one-time',
      icon: Tag,
      colorClass: 'purple'
    },
    {
      step: 'STEP 02',
      title: 'Attach to clothes & gear',
      desc: 'Attach durable silicone band, iron-on label, or keychain tag onto backpacks, jackets, coats, or water bottles. Waterproof, scratch-resistant, built for rough & tumble play.',
      linkText: 'See 100% kid-proof materials',
      icon: ShieldCheck,
      colorClass: 'green'
    },
    {
      step: 'STEP 03',
      title: 'Get reunited instantly',
      desc: 'When someone scans the tag, they can immediately contact you with 1-click without revealing your phone number, or view crucial medical notes & send GPS ping of the scan location.',
      linkText: 'Read how SMS alerts work',
      icon: BellRing,
      colorClass: 'violet'
    }
  ];

  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill purple">
            <Sparkles size={13} />
            <span>SIMPLE AND POWERFUL SAFETY</span>
          </div>
          <h2 className="section-title">How KiddieTag works</h2>
          <p className="section-desc">
            Attach durable, waterproof smart tags to your child's backpack, clothing, shoes, or wristband. Anyone can scan without needing an app or exposing your personal contact information.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="steps-grid">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="step-card">
                <div className={`step-icon-box ${item.colorClass}`}>
                  <Icon size={26} />
                </div>
                <span className="step-pill">{item.step}</span>
                <h3 className="step-title">{item.title}</h3>
                <p className="step-desc">{item.desc}</p>
                <a 
                  href="#pricing" 
                  className="step-link"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenActivation();
                  }}
                >
                  <span>{item.linkText}</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

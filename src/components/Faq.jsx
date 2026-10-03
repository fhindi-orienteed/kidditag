import React, { useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0); // Open first item by default like the image

  const faqs = [
    {
      q: 'Does the person who finds my child need to download an app?',
      a: 'No! Any smartphone with a standard camera can scan the QR code instantly. It opens a lightweight, fast-loading web page with the emergency info and direct tap-to-call buttons. No apps, downloads, or logins required.'
    },
    {
      q: 'What happens if our phone number or allergy info changes?',
      a: "You can update your child's profile anytime from your online dashboard. Because the physical tag points to your dynamic cloud profile, changes update immediately in real-time without needing to re-order or re-print tags."
    },
    {
      q: "How is our family's address & personal data kept safe?",
      a: 'You have complete control over what is displayed. We never display home addresses or private identifiers. You can also enable our safe-call proxy routing so your personal cell phone number remains hidden from finders.'
    },
    {
      q: 'Can I get KiddieTag packs for my school, team, or daycare?',
      a: 'Yes! We provide custom bulk packs for schools, field trips, daycares, sports leagues, and summer camps. Our educator packs include group management portals, classroom rosters, and special bulk discounts.'
    }
  ];

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        {/* Header */}
        <div className="section-header">

          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-desc">
            Everything you need to know about tag security, scanning, and privacy.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="faq-list">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`faq-card ${isOpen ? 'open' : ''}`}>
                <button
                  className="faq-question-btn"
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown className="faq-icon-rotator" size={20} />
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

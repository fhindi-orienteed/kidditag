import React from 'react';
import { 
  FerrisWheel, 
  Tent, 
  GraduationCap, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';

export default function TrustLogos() {
  const trustPartners = [
    {
      icon: FerrisWheel,
      label: 'Theme Park Approved',
      sub: 'Disney, Universal & Parks'
    },
    {
      icon: Tent,
      label: 'Camp Network',
      sub: '500+ Summer Camps'
    },
    {
      icon: GraduationCap,
      label: 'National PTA Partners',
      sub: 'School & Field Trip Safety'
    },
    {
      icon: ShieldCheck,
      label: 'Triple Shield Protection',
      sub: 'Encrypted & Private'
    }
  ];

  return (
    <section className="partners-section">
      <div className="container">
        <p className="partners-title">
          Trusted at theme parks, ski resorts, summer camps, schools & after-school care:
        </p>

        <div className="partners-grid">
          {trustPartners.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="partner-item">
                <div className="partner-icon-circle">
                  <Icon size={18} />
                </div>
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

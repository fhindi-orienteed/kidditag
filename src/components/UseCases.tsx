import { 
  Backpack, 
  Waves, 
  Compass, 
  Plane, 
  ArrowRight, 
  Sparkles,
  type LucideIcon,
} from 'lucide-react';

interface UseCasesProps {
  onOpenActivation?: () => void;
}

interface CaseItem {
  title: string;
  desc: string;
  linkText: string;
  icon: LucideIcon;
  colorClass: string;
}

export default function UseCases({ onOpenActivation }: UseCasesProps) {
  const cases: CaseItem[] = [
    {
      title: 'School & Field Trips',
      desc: 'Never lose sight of young students during zoo trips, museum visits, or bus transit. Teachers and chaperones can identify lost kids instantly.',
      linkText: 'Backpack & Bag Tags',
      icon: Backpack,
      colorClass: 'blue'
    },
    {
      title: 'Theme Parks & Waterparks',
      desc: "100% waterproof silicone bands won't peel, tear, or wash off in pools or rides. Parents get alerted immediately while in line.",
      linkText: 'Waterproof Bands',
      icon: Waves,
      colorClass: 'green'
    },
    {
      title: 'Sports Camps & Resorts',
      desc: 'Crucial for allergic children at day camp, ski schools, gymnastics, or large events. Keeps coaches & counselors aware of health needs.',
      linkText: 'Camp & Event Tags',
      icon: Compass,
      colorClass: 'purple'
    },
    {
      title: 'Airports & Crowded Places',
      desc: 'High-risk crowded terminals, train stations, busy markets, and festivals. Instant phone connect brings relief in seconds.',
      linkText: 'Travel Safety Tags',
      icon: Plane,
      colorClass: 'coral'
    }
  ];

  return (
    <section className="use-cases-section" id="use-cases">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-pill purple">
            <Sparkles size={13} />
            <span>FOR EVERY ADVENTURE</span>
          </div>
          <h2 className="section-title">Designed for anywhere kids wander</h2>
          <p className="section-desc">
            Engineered to withstand playground mud, theme park water rides, ski slopes, and crowded airports.
          </p>
        </div>

        {/* 4 Use Case Cards */}
        <div className="use-cases-grid">
          {cases.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="use-case-card">
                <div className={`use-case-icon-box ${item.colorClass}`}>
                  <Icon size={24} />
                </div>
                <h3 className="use-case-title">{item.title}</h3>
                <p className="use-case-desc">{item.desc}</p>
                <a 
                  href="#pricing" 
                  className="use-case-link"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenActivation?.();
                  }}
                >
                  <span>{item.linkText}</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

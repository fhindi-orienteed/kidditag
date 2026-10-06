import { Plus } from 'lucide-react';
import { useDashboardContext } from '../context';
import { initialChildrenData } from '../mockData';
import TagsCard from './TagCard';

interface TagsPageProps {
  onBackToLanding?: () => void;
  onOpenActivation?: () => void;
}

export default function TagsPage({ onOpenActivation: propOpenActivation }: TagsPageProps) {
  const ctx = useDashboardContext();
  const currentChild = ctx?.currentChild || initialChildrenData.maya;
  const onOpenActivation = propOpenActivation || ctx?.onOpenActivation;

  return (
    <div className="dash-view-container">
      <div className="dash-section-headline-row">
        <div>
          <h2 className="dash-section-h2">Physical Smart Tags ({currentChild.tags.length})</h2>
          <p className="dash-card-sub">
            All active tags linked to {currentChild.name}. Passive NFC & QR - zero charging needed.
          </p>
        </div>
        <button className="btn-primary" onClick={() => onOpenActivation?.()}>
          <Plus size={16} />
          <span>Register Another Tag</span>
        </button>
      </div>

      <div className="dash-cards-grid-3">
        {currentChild.tags.map((tag, idx) => (
          <TagsCard key={idx} tag={tag} />
        ))}
      </div>
    </div>
  );
}

import { Plus } from 'lucide-react';
import { useDashboardContext } from '../context';
import { initialChildrenData } from '../mockData';

interface ChildrenPageProps {
  onOpenActivation?: () => void;
}

export default function ChildrenPage({ onOpenActivation: propOpenActivation }: ChildrenPageProps) {
  const ctx = useDashboardContext();

  const selectedChild = ctx?.selectedChild || 'maya';
  const setSelectedChild = ctx?.setSelectedChild || (() => {});
  const childrenData = ctx?.childrenData || initialChildrenData;
  const onOpenActivation = propOpenActivation || ctx?.onOpenActivation;

  return (
    <div className="dash-view-container">
      <div className="dash-section-headline-row">
        <div>
          <h2 className="dash-section-h2">Children Under Your Care</h2>
          <p className="dash-card-sub">Profiles, medical specifics, and tags assigned to each child.</p>
        </div>
        <button className="btn-primary" onClick={() => onOpenActivation?.()}>
          <Plus size={16} />
          <span>Add Child</span>
        </button>
      </div>

      <div className="dash-cards-grid-2">
        {Object.entries(childrenData).map(([key, child]) => (
          <div 
            key={key} 
            className={`dash-child-full-card ${selectedChild === key ? 'selected' : ''}`}
          >
            <div className="dash-child-card-header">
              <div className="dash-child-avatar-big">{child.avatar}</div>
              <div>
                <h3 className="dash-child-name">{child.name}</h3>
                <p className="dash-child-details">Age {child.age} • {child.gender} • Blood {child.bloodType}</p>
              </div>
            </div>
            <div className="dash-child-meta-list">
              <div>🏷️ <strong>{child.tags.length} Active Tags</strong> ({child.tags.map(t => t.type).join(', ')})</div>
              <div>⚠️ <strong>Allergies:</strong> {key === 'maya' ? 'Peanut allergy, asthma inhaler in bag' : 'No known food allergies'}</div>
              <div>📞 <strong>Contacts:</strong> {child.contacts.map(c => c.name.split(' ')[0]).join(', ')}</div>
            </div>
            <button 
              className={selectedChild === key ? 'btn-primary' : 'btn-secondary'}
              style={{ width: '100%', marginTop: 16 }}
              onClick={() => setSelectedChild(key)}
            >
              {selectedChild === key ? `✓ Active Profile: ${child.name}` : `Select ${child.name}'s Profile`}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

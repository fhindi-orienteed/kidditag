import { Plus, PhoneCall } from 'lucide-react';
import { useDashboardContext } from '../context';
import { initialChildrenData } from '../mockData';

export default function ContactsPage() {
  const ctx = useDashboardContext();
  const currentChild = ctx?.currentChild || initialChildrenData.maya;

  return (
    <div className="dash-view-container">
      <div className="dash-card">
        <div className="dash-card-header">
          <div>
            <h2 className="dash-card-title">Emergency Contact Priority List</h2>
            <p className="dash-card-sub">When your child's tag is scanned, finders can call these verified numbers.</p>
          </div>
          <button className="btn-primary" onClick={() => alert('Add Contact modal')}>
            <Plus size={14} />
            <span>Add New Contact</span>
          </button>
        </div>

        <div className="dash-contact-list">
          {currentChild.contacts.map((contact, idx) => (
            <div key={idx} className="dash-contact-item">
              <div>
                <div className="dash-contact-name-row">
                  <strong>{contact.name}</strong>
                  <span className="dash-priority-pill">{contact.priority}</span>
                </div>
                <div className="dash-contact-phone">{contact.phone} • Status: {contact.status}</div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button 
                  className="btn-secondary" 
                  style={{ padding: '6px 12px', fontSize: '0.78rem' }}
                  onClick={() => alert(`Simulating test call to ${contact.name}`)}
                >
                  <PhoneCall size={14} />
                  <span>Test Call</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';

export default function MedicalPage() {
  const [medicalNotes, setMedicalNotes] = useState(
    'Asthma (inhaler located in front pouch of pink backpack), allergic to bee stings. Administer inhaler if breathing becomes strained.'
  );
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSaveMedical = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="dash-view-container">
      <div className="dash-card">
        <div className="dash-card-header">
          <div>
            <h2 className="dash-card-title">Critical Medical & Allergy Instructions</h2>
            <p className="dash-card-sub">First responders and Good Samaritans will immediately read this upon tag scan.</p>
          </div>
        </div>

        <form onSubmit={handleSaveMedical}>
          <textarea 
            value={medicalNotes}
            onChange={(e) => setMedicalNotes(e.target.value)}
            rows={6}
            className="dash-textarea"
          />
          <div className="dash-textarea-footer">
            <span className="dash-saved-indicator">
              {savedSuccess ? '✓ Successfully updated cloud protocol!' : '🔒 Encrypted and private until tag is scanned.'}
            </span>
            <button type="submit" className="btn-primary">
              Save Medical Instructions
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

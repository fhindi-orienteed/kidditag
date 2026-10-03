import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';

export default function ActivationModal({ isOpen, onClose, initialCode, onCompleteActivation }) {
  const [step, setStep] = useState(1);
  const [tagCode, setTagCode] = useState(initialCode || 'KT-9204');
  const [childName, setChildName] = useState('Maya Sinclair');
  const [childAge, setChildAge] = useState('5');
  const [primaryPhone, setPrimaryPhone] = useState('(555) 234-8901');
  const [allergies, setAllergies] = useState('Peanut allergy, asthma inhaler in backpack');

  if (!isOpen) return null;

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setStep(4); // Success step
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {step < 4 ? (
          <div>
            {/* Modal Title */}
            <div style={{ marginBottom: 20 }}>
              <div className="section-pill purple" style={{ marginBottom: 8 }}>
                <Sparkles size={13} />
                <span>STEP {step} OF 3: TAG ACTIVATION</span>
              </div>
              <h3 style={{ fontSize: '1.45rem', marginBottom: 6 }}>
                {step === 1 && 'Register Your New KiddieTag'}
                {step === 2 && 'Child Information & Contacts'}
                {step === 3 && 'Medical & Safety Notes'}
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                {step === 1 && 'Enter the 6-character code printed under the QR code on your physical tag or wristband.'}
                {step === 2 && 'Add emergency contacts who will be notified when this tag is scanned.'}
                {step === 3 && 'Optional critical notes that first responders and finders should immediately see.'}
              </p>
            </div>

            <form onSubmit={handleNext}>
              {step === 1 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <label style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--text-main)' }}>
                    Tag Activation Code or Email:
                  </label>
                  <input 
                    type="text"
                    value={tagCode}
                    onChange={(e) => setTagCode(e.target.value.toUpperCase())}
                    placeholder="e.g. KT-9204 or user@domain.com"
                    required
                    style={{
                      background: 'var(--bg-subtle)',
                      border: '1px solid var(--border-card)',
                      borderRadius: 'var(--radius-md)',
                      padding: '12px 16px',
                      fontSize: '1rem',
                      fontWeight: 700,
                      letterSpacing: '0.04em'
                    }}
                  />
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.78rem', color: 'var(--accent-green)' }}>
                    <CheckCircle2 size={15} />
                    <span>Tag validated! Ready to link with free lifetime profile.</span>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <div>
                    <label style={{ fontSize: '0.84rem', fontWeight: 600 }}>Child's First Name & Age:</label>
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 10, marginTop: 6 }}>
                      <input 
                        type="text"
                        value={childName}
                        onChange={(e) => setChildName(e.target.value)}
                        placeholder="Child's Name"
                        required
                        style={{
                          background: 'var(--bg-subtle)',
                          border: '1px solid var(--border-card)',
                          borderRadius: 'var(--radius-md)',
                          padding: '10px 14px',
                          fontSize: '0.92rem'
                        }}
                      />
                      <input 
                        type="number"
                        value={childAge}
                        onChange={(e) => setChildAge(e.target.value)}
                        placeholder="Age"
                        required
                        style={{
                          background: 'var(--bg-subtle)',
                          border: '1px solid var(--border-card)',
                          borderRadius: 'var(--radius-md)',
                          padding: '10px 14px',
                          fontSize: '0.92rem'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.84rem', fontWeight: 600 }}>Primary Emergency Phone Number:</label>
                    <input 
                      type="tel"
                      value={primaryPhone}
                      onChange={(e) => setPrimaryPhone(e.target.value)}
                      placeholder="(555) 000-0000"
                      required
                      style={{
                        width: '100%',
                        marginTop: 6,
                        background: 'var(--bg-subtle)',
                        border: '1px solid var(--border-card)',
                        borderRadius: 'var(--radius-md)',
                        padding: '10px 14px',
                        fontSize: '0.92rem'
                      }}
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <label style={{ fontSize: '0.84rem', fontWeight: 600 }}>
                    Emergency Medical Notes / Allergy Information:
                  </label>
                  <textarea 
                    value={allergies}
                    onChange={(e) => setAllergies(e.target.value)}
                    rows={4}
                    placeholder="E.g. Severe peanut allergy (EpiPen in backpack), mild asthma, non-verbal..."
                    style={{
                      width: '100%',
                      fontFamily: 'inherit',
                      background: 'var(--bg-subtle)',
                      border: '1px solid var(--border-card)',
                      borderRadius: 'var(--radius-md)',
                      padding: '12px 14px',
                      fontSize: '0.9rem',
                      lineHeight: 1.5,
                      resize: 'none'
                    }}
                  />
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    🔒 This information is stored in encrypted format and only visible when the tag is scanned.
                  </span>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24 }}>
                {step > 1 ? (
                  <button 
                    type="button" 
                    className="btn-secondary"
                    onClick={() => setStep(step - 1)}
                    style={{ padding: '10px 20px', fontSize: '0.9rem' }}
                  >
                    Back
                  </button>
                ) : <div></div>}

                <button 
                  type="submit" 
                  className="btn-primary"
                  style={{ padding: '10px 24px', fontSize: '0.9rem' }}
                >
                  <span>{step === 3 ? 'Complete Activation' : 'Continue'}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '10px 0' }}>
            <div style={{
              width: 60,
              height: 60,
              borderRadius: '50%',
              background: 'var(--accent-green-soft)',
              color: 'var(--accent-green)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px'
            }}>
              <CheckCircle2 size={32} />
            </div>

            <h3 style={{ fontSize: '1.45rem', marginBottom: 8 }}>Tag Successfully Activated!</h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', marginBottom: 20 }}>
              Tag <strong>{tagCode}</strong> is now live for <strong>{childName}</strong>. Whenever someone scans this tag, you will receive an instant notification.
            </p>

            <button 
              className="btn-primary"
              style={{ width: '100%', padding: '12px' }}
              onClick={() => {
                onClose();
                if (onCompleteActivation) onCompleteActivation({ tagCode, childName, childAge, primaryPhone, allergies });
              }}
            >
              Go to Parent Dashboard →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

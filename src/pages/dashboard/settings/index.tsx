export default function SettingsPage() {
  return (
    <div className="dash-view-container">
      <div className="dash-card">
        <h2 className="dash-card-title" style={{ marginBottom: 16 }}>Privacy & Safe Proxy Settings</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <strong>Safe Call Proxy Protection</strong>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Masks your personal cell phone number when finders tap to call.</p>
            </div>
            <span className="badge-save">Active</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-light)', paddingTop: 14 }}>
            <div>
              <strong>Instant SMS & WhatsApp Ping</strong>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Dispatches immediate Google Maps link to parents upon scan.</p>
            </div>
            <span className="badge-save">Enabled</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-light)', paddingTop: 14 }}>
            <div>
              <strong>Account Plan</strong>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Family Care Membership ($19.99/year)</p>
            </div>
            <button className="btn-secondary" style={{ padding: '6px 14px', fontSize: '0.8rem' }} onClick={() => alert('Manage Billing')}>
              Manage Subscription
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { MapPin } from 'lucide-react';
import { useDashboardContext } from '../context';
import { initialChildrenData } from '../mockData';

export default function MapPage() {
  const ctx = useDashboardContext();
  const currentChild = ctx?.currentChild || initialChildrenData.maya;

  return (
    <div className="dash-view-container">
      <div className="dash-card">
        <div className="dash-card-header">
          <div>
            <h2 className="dash-card-title">Live GPS Scan Radar for {currentChild.name}</h2>
            <p className="dash-card-sub">High-precision map coordinates triggered when tags are scanned.</p>
          </div>
          <span className="badge-save">● Live Radar Active</span>
        </div>

        <div className="simulated-map-box" style={{ height: 340 }}>
          <div className="map-grid-bg"></div>
          <div className="map-pin-pulse">
            <div className="map-pin-marker">
              <MapPin size={22} />
            </div>
            <span className="map-label-tag">
              📍 {currentChild.scanHistory[0]?.location || 'Central Park Zoo'} (Exact Accuracy 5m)
            </span>
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <h3 style={{ fontSize: '1rem', marginBottom: 12 }}>Scan Incident Log:</h3>
          <div className="dash-timeline-list">
            {currentChild.scanHistory.map((item) => (
              <div key={item.id} className="dash-timeline-item">
                <div className="dash-timeline-bullet"></div>
                <div className="dash-timeline-content">
                  <div className="dash-timeline-title">📍 {item.location} ({item.coords})</div>
                  <div className="dash-timeline-meta">{item.scanner} • {item.action}</div>
                  <div className="dash-timeline-time">{item.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

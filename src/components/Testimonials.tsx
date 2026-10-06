import { Star, CheckCircle, Sparkles } from 'lucide-react';

interface ReviewItem {
  quote: string;
  author: string;
  location: string;
  tag: string;
  initials: string;
}

export default function Testimonials() {
  const reviews: ReviewItem[] = [
    {
      quote:
        '“My 4-year-old wandered off in Disney World for 4 minutes. A kind family scanned his KiddieTag and called me instantly. Best peace of mind I ever spent.”',
      author: 'Laura M.',
      location: 'Orlando, FL',
      tag: 'Verified Parent of 2',
      initials: 'LM'
    },
    {
      quote:
        '“Our son has a severe nut allergy and non-verbal autism. Having his allergy & calm-down notes pop up when scanned gives our whole family immense relief.”',
      author: 'David R.',
      location: 'Denver, CO',
      tag: 'Verified School Parent',
      initials: 'DR'
    },
    {
      quote:
        '“The scan alerted me with the exact GPS pin on Google Maps within seconds of a staff member scanning his wristband at the airport. Worth every single penny!”',
      author: 'Priya S.',
      location: 'Chicago, IL',
      tag: 'Verified Frequent Traveler',
      initials: 'PS'
    }
  ];

  return (
    <section className="testimonials-section" id="reviews">
      <div className="container">
        {/* Header row */}
        <div className="testimonials-header-row">
          <div>
            <div className="section-pill purple">
              <Sparkles size={13} />
              <span>PARENT REVIEWS</span>
            </div>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              What caring parents say
            </h2>
          </div>

          <div className="testimonials-rating-badge">
            <div className="stars-row">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" stroke="none" />
              ))}
            </div>
            <span><strong>4.9 / 5.0</strong> (over 3,420+ verified reviews)</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {reviews.map((rev, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="card-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" stroke="none" />
                ))}
              </div>

              <p className="testimonial-quote">{rev.quote}</p>

              <div className="testimonial-author-row">
                <div className="author-avatar">{rev.initials}</div>
                <div className="author-info">
                  <h5>{rev.author} ({rev.location})</h5>
                  <p>
                    <CheckCircle size={13} />
                    <span>{rev.tag}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

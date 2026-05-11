import { useCountUp } from '../hooks/useScrollReveal';
import { testimonials } from '../data/testimonials';
import './Testimonials.css';

const stats = [
  { value: 50000, suffix: '+', label: 'Statues Sold', icon: '🪵' },
  { value: 40, suffix: '+', label: 'Years Experience', icon: '🏛️' },
  { value: 50, suffix: '+', label: 'Countries Shipped', icon: '🌍' },
  { value: 327, suffix: '', label: 'Instagram Posts', icon: '📸' },
];

export default function Testimonials() {
  return (
    <div className="testimonials-page" id="testimonials-page">
      <section className="testimonials-hero">
        <div className="container">
          <span className="badge badge-gold">⭐ Trust & Reviews</span>
          <h1>What Our Customers Say</h1>
          <p className="section-subtitle">
            Thousands of satisfied customers worldwide trust Natarajan WoodCarvings
            for museum-quality handcrafted art.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="testimonials-stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <TestimonialStat key={i} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section">
        <div className="container">
          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <div key={t.id} className="testimonial-card">
                <div className="testimonial-card__stars">
                  {'⭐'.repeat(t.rating)}
                </div>
                <p className="testimonial-card__text">"{t.text}"</p>
                <div className="testimonial-card__footer">
                  <div className="testimonial-card__avatar">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <strong className="testimonial-card__name">{t.name}</strong>
                    <span className="testimonial-card__location">{t.location}</span>
                  </div>
                </div>
                <span className="testimonial-card__product">📦 {t.product}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section testimonials-awards-section">
        <div className="container">
          <div className="section-header">
            <h2>Awards & Recognition</h2>
            <p className="section-subtitle">Recognized by government and industry for excellence in wood carving</p>
          </div>
          <div className="testimonials-awards-grid">
            <div className="testimonials-award-card">
              <span className="testimonials-award-icon">🏆</span>
              <h4>Poompuhar Award</h4>
              <p>Tamil Nadu Government recognition for outstanding craftsmanship in traditional wood carving arts.</p>
            </div>
            <div className="testimonials-award-card">
              <span className="testimonials-award-icon">📍</span>
              <h4>GI Tag Certification (2021)</h4>
              <p>Geographical Indication tag certifying the authentic origin and quality of Kallakurichi wood carvings.</p>
            </div>
            <div className="testimonials-award-card">
              <span className="testimonials-award-icon">🌐</span>
              <h4>Export Excellence</h4>
              <p>Recognized for exceptional quality in international exports, serving collectors in 50+ countries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="section testimonials-ig-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Follow Our Journey on Instagram</h2>
          <p className="section-subtitle" style={{ marginBottom: '2rem' }}>327 posts · New carvings and workshop updates every week</p>
          <a href="https://www.instagram.com/natarajan_woodcarvings/" className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
            📸 Follow @natarajan_woodcarvings
          </a>
        </div>
      </section>
    </div>
  );
}

function TestimonialStat({ value, suffix, label, icon }: { value: number; suffix: string; label: string; icon: string }) {
  const { count, ref } = useCountUp(value, 2000);
  return (
    <div className="stat-card" ref={ref}>
      <span className="stat-card__icon">{icon}</span>
      <span className="stat-card__value">{count.toLocaleString()}{suffix}</span>
      <span className="stat-card__label">{label}</span>
    </div>
  );
}

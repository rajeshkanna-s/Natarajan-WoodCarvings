import { Link } from 'react-router-dom';
import './Craftsmanship.css';

const steps = [
  { num: '01', title: 'Wood Selection', icon: '🌳', desc: 'Premium seasoned wood — Teak, Rosewood, Vaagai, or Sandalwood — is carefully selected based on grain, density, and the intended sculpture. Each wood type brings unique character.' },
  { num: '02', title: 'Paper Design', icon: '📐', desc: 'Master artisans sketch the design on paper, defining proportions according to Shilpa Shastra (ancient Indian sculpture guidelines). Every deity follows sacred ratios.' },
  { num: '03', title: 'Ink Transfer', icon: '✒️', desc: 'The finalized design is traced onto the wood block using traditional ink transfer techniques, creating the blueprint for the carving process.' },
  { num: '04', title: 'Hand Carving', icon: '🔨', desc: 'Using chisels, gouges, and mallets, artisans bring the wood to life. This stage takes days to weeks depending on complexity — every detail is carved by hand.' },
  { num: '05', title: 'Buffing & Finishing', icon: '✨', desc: 'Final polishing with sandpaper and natural oils reveals the wood\'s beauty. Painted pieces receive multiple coats of natural pigments and gold leaf accents.' },
];

const woodTypes = [
  { name: 'Teak Wood', desc: 'Durable, termite-resistant. Ideal for large statues and outdoor pieces.', color: '#8B6914' },
  { name: 'Rosewood', desc: 'Rich dark grain, premium finish. Perfect for deity statues and heirloom pieces.', color: '#4A1A2E' },
  { name: 'Vaagai Wood', desc: 'Lightweight, fine-grained. Traditional choice for intricate temple carvings.', color: '#C4A35A' },
  { name: 'Sandalwood', desc: 'Fragrant, sacred. Used for small deity figurines and special commissions.', color: '#D2B48C' },
];

export default function Craftsmanship() {
  return (
    <div className="craft-page" id="craftsmanship-page">
      <section className="craft-hero">
        <div className="container">
          <span className="badge badge-gold">🔨 The Process</span>
          <h1>Our Craftsmanship</h1>
          <p className="section-subtitle">
            From raw timber to divine art — discover the meticulous 5-step journey that 
            transforms a block of wood into a masterpiece.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section">
        <div className="container">
          <div className="craft-steps">
            {steps.map((step, i) => (
              <div key={i} className="craft-step">
                <div className="craft-step__visual">
                  <div className="craft-step__num">{step.num}</div>
                  <div className="craft-step__icon">{step.icon}</div>
                  {i < steps.length - 1 && <div className="craft-step__line"></div>}
                </div>
                <div className="craft-step__content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
                <div className="craft-step__img-wrap">
                  <img src={`/images/gallery/product-${i + 15}.jpg`} alt={step.title} loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wood Types */}
      <section className="section craft-woods-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Wood Types</h2>
            <p className="section-subtitle">Each wood species brings its own character, grain, and soul to the sculpture</p>
          </div>
          <div className="craft-woods-grid">
            {woodTypes.map((wood, i) => (
              <div key={i} className="craft-wood-card">
                <div className="craft-wood-swatch" style={{ background: wood.color }}></div>
                <h4>{wood.name}</h4>
                <p>{wood.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Watch the Magic Unfold</h2>
            <p className="section-subtitle">See our artisans at work — transforming raw wood into divine art</p>
          </div>
          <div className="craft-video-wrap">
            <video controls poster="/images/gallery/product-6.jpg" preload="metadata" className="craft-video">
              <source src="/videos/natarajan_woodcarvings_1594207741_2348705031364432929_8122844416.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section craft-cta-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Want a Custom Piece?</h2>
          <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
            Tell us your vision and our master artisans will bring it to life.
          </p>
          <Link to="/custom-orders" className="btn btn-gold btn-lg">Start Custom Order →</Link>
        </div>
      </section>
    </div>
  );
}

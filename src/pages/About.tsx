import './About.css';

const timeline = [
  { year: '9th Century', title: 'Chola Dynasty Origins', desc: 'Wood carving tradition flourishes in Tamil Nadu under the great Chola rulers, adorning temples across the region.' },
  { year: '1985', title: 'Natarajan WoodCarvings Founded', desc: 'Mr. Natarajan establishes his workshop in Kallakurichi, carrying forward the ancestral craft with passion and precision.' },
  { year: '2000s', title: 'National Recognition', desc: 'Award-winning craftsmanship gains recognition across India. Export operations begin to serve international collectors.' },
  { year: '2018', title: 'Poompuhar Award', desc: 'Honored with the prestigious Poompuhar Award by the Tamil Nadu Government for excellence in traditional wood carving.' },
  { year: '2021', title: 'GI Tag Certification', desc: 'Kallakurichi wood carving receives Geographical Indication (GI) tag, recognizing its unique heritage and authenticity.' },
  { year: 'Today', title: 'Global Presence', desc: 'Exporting to 50+ countries, with 500+ statue varieties and 1,000+ satisfied customers worldwide.' },
];

export default function About() {
  return (
    <div className="about-page" id="about-page">
      <section className="about-hero">
        <div className="container">
          <span className="badge badge-gold">🏛️ Our Story</span>
          <h1>About Natarajan WoodCarvings</h1>
          <p className="section-subtitle">
            Four decades of transforming sacred wood into divine art, 
            preserving an ancient Tamil Nadu tradition for the world.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section">
        <div className="container">
          <div className="about-founder">
            <div className="about-founder__img-wrap">
              <img src="/images/gallery/product-2.jpg" alt="Painted Hanuman statue by Natarajan WoodCarvings" className="about-founder__img" loading="lazy" />
              <div className="about-founder__badge">
                <span>🏆</span>
                <div>
                  <strong>Poompuhar Award</strong>
                  <small>Winner</small>
                </div>
              </div>
            </div>
            <div className="about-founder__content">
              <h2>The Master Behind the Art</h2>
              <div className="gold-divider" style={{ margin: '1.5rem 0', marginLeft: 0 }}></div>
              <p>
                Born into a family of wood carvers in Kallakurichi, Mr. Natarajan learned the art of
                chiseling at the age of 12. What began as an apprenticeship under his father evolved into
                a lifelong passion that has produced some of the finest wooden sculptures in South India.
              </p>
              <p>
                His mastery over the craft earned him the coveted <strong>Poompuhar Award</strong> from
                the Tamil Nadu Government — a recognition reserved for artisans who demonstrate exceptional
                skill and dedication to preserving traditional art forms.
              </p>
              <p>
                Today, he leads a team of 15+ skilled artisans, each trained in the intricate techniques
                of traditional Tamil wood carving, ensuring that every piece that leaves the workshop
                meets the highest standards of artistic excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section about-mv-section">
        <div className="container">
          <div className="about-mv-grid">
            <div className="about-mv-card">
              <span className="about-mv-icon">🎯</span>
              <h3>Our Mission</h3>
              <p>
                To preserve and elevate the ancient art of Tamil wood carving by creating museum-quality
                handcrafted statues that bridge heritage and modernity — making divine art accessible to
                homes and temples worldwide.
              </p>
            </div>
            <div className="about-mv-card">
              <span className="about-mv-icon">🔭</span>
              <h3>Our Vision</h3>
              <p>
                To be globally recognized as the premier destination for handcrafted wooden art, fostering
                a new generation of artisans while honoring the thousand-year legacy of Chola craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Our Journey Through Time</h2>
            <p className="section-subtitle">From ancient Chola temples to modern homes worldwide</p>
          </div>
          <div className="about-timeline">
            {timeline.map((item, i) => (
              <div key={i} className={`about-timeline__item ${i % 2 === 0 ? 'about-timeline__item--left' : 'about-timeline__item--right'}`}>
                <div className="about-timeline__dot"></div>
                <div className="about-timeline__card">
                  <span className="about-timeline__year">{item.year}</span>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Gallery */}
      <section className="section about-workshop-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Workshop</h2>
            <p className="section-subtitle">Where raw wood transforms into divine art</p>
          </div>
          <div className="about-workshop-grid">
            {[7, 8, 10, 14].map((n) => (
              <div key={n} className="about-workshop-img-wrap">
                <img src={`/images/gallery/product-${n}.jpg`} alt="Workshop" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

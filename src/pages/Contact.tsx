import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const update = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production this would POST to the Express API
    const waMsg = `Hello Natarajan WoodCarvings!\n\nContact Form Inquiry:\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nSubject: ${form.subject}\n\nMessage: ${form.message}`;
    window.open(`https://wa.me/919092342219?text=${encodeURIComponent(waMsg)}`, '_blank');
    setSent(true);
  };

  return (
    <div className="contact-page" id="contact-page">
      <section className="contact-hero">
        <div className="container">
          <span className="badge badge-gold">📞 Get In Touch</span>
          <h1>Contact Us</h1>
          <p className="section-subtitle">
            Visit our workshop, call us, or send a message — we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <div className="contact-info-card">
                <span className="contact-info-icon">📍</span>
                <div>
                  <h4>Workshop Address</h4>
                  <p>Anna Nagar East, Kallakurichi<br />Tamil Nadu 606202, India</p>
                </div>
              </div>

              <div className="contact-info-card">
                <span className="contact-info-icon">📞</span>
                <div>
                  <h4>Phone / WhatsApp</h4>
                  <p><a href="tel:+919092342219">+91 90923 42219</a></p>
                </div>
              </div>

              <div className="contact-info-card">
                <span className="contact-info-icon">✉️</span>
                <div>
                  <h4>Email</h4>
                  <p><a href="mailto:info@natarajanwoodcarvings.com">info@natarajanwoodcarvings.com</a></p>
                </div>
              </div>

              <div className="contact-info-card">
                <span className="contact-info-icon">⏰</span>
                <div>
                  <h4>Business Hours</h4>
                  <p>Monday – Saturday: 9:00 AM – 7:00 PM<br />Sunday: Closed</p>
                </div>
              </div>

              <a
                href="https://wa.me/919092342219?text=Hello!%20I%20want%20to%20know%20more%20about%20your%20wood%20carvings."
                className="btn btn-whatsapp btn-lg contact-wa-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Chat on WhatsApp
              </a>

              <div className="contact-social">
                <a href="https://www.instagram.com/natarajan_woodcarvings/" target="_blank" rel="noopener noreferrer" className="contact-social-link">📸 Instagram</a>
                <a href="https://www.facebook.com/natarajanwoodcarvings" target="_blank" rel="noopener noreferrer" className="contact-social-link">👍 Facebook</a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrap">
              {!sent ? (
                <form onSubmit={handleSubmit} id="contact-form">
                  <h3>Send Us a Message</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Your Name *</label>
                      <input className="form-input" required value={form.name} onChange={e => update('name', e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input className="form-input" type="tel" value={form.phone} onChange={e => update('phone', e.target.value)} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input className="form-input" type="email" required value={form.email} onChange={e => update('email', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <select className="form-select" value={form.subject} onChange={e => update('subject', e.target.value)}>
                      <option value="">Select a topic</option>
                      <option>Product Inquiry</option>
                      <option>Custom Order</option>
                      <option>Shipping Question</option>
                      <option>Bulk Order</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea className="form-textarea" required value={form.message} onChange={e => update('message', e.target.value)} placeholder="How can we help you?" />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                    Send Message →
                  </button>
                </form>
              ) : (
                <div className="contact-success">
                  <span className="contact-success-icon">✅</span>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We'll get back to you within 24 hours. You can also chat with us directly on WhatsApp for faster response.</p>
                  <button className="btn btn-outline" onClick={() => setSent(false)}>Send Another Message</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="contact-map-section">
        <iframe
          title="Natarajan WoodCarvings Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d978.9!2d78.9638912!3d11.7274605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab66fa6ba87159%3A0xdd0a1bd1c64a8893!2sNatarajan%20Wood%20Carvings%20-%20Kallakurichi!5e0!3m2!1sen!2sin!4v1717000000000"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          id="google-map-embed"
        ></iframe>
      </section>
    </div>
  );
}

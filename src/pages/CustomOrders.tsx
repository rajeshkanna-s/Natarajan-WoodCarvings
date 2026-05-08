import { useState } from 'react';
import './CustomOrders.css';

const statueTypes = ['Deity Statue', 'Wall Mount Panel', 'Temple Arch', 'Pooja Mandap', 'Decorative Pillar', 'Modern Art Piece', 'Custom Design'];
const woodOptions = ['Teak Wood', 'Rosewood', 'Vaagai Wood', 'Sandalwood', 'Not Sure — Need Guidance'];
const finishOptions = ['Natural Polish', 'Painted (Traditional)', 'Gold Leaf Accent', 'Antique Finish', 'Raw/Unfinished'];
const budgetRanges = ['₹5,000 – ₹15,000', '₹15,000 – ₹50,000', '₹50,000 – ₹1,00,000', '₹1,00,000 – ₹5,00,000', '₹5,00,000+', 'Need Quote First'];

export default function CustomOrders() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    statueType: '', deityName: '', woodType: '', finish: '',
    height: '', width: '', budget: '',
    name: '', phone: '', email: '', notes: '',
  });

  const update = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }));

  const generateWhatsAppMsg = () => {
    return `Hello Natarajan WoodCarvings! I'd like to place a custom order:\n\n` +
      `📋 *Order Details*\n` +
      `• Type: ${form.statueType}\n` +
      `• Deity/Design: ${form.deityName || 'N/A'}\n` +
      `• Wood: ${form.woodType}\n` +
      `• Finish: ${form.finish}\n` +
      `• Size: ${form.height} × ${form.width}\n` +
      `• Budget: ${form.budget}\n\n` +
      `👤 *Contact*\n` +
      `• Name: ${form.name}\n` +
      `• Phone: ${form.phone}\n` +
      `• Email: ${form.email}\n\n` +
      `📝 Notes: ${form.notes || 'None'}`;
  };

  const handleSubmit = () => {
    const msg = generateWhatsAppMsg();
    window.open(`https://wa.me/919092342219?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="custom-page" id="custom-orders-page">
      <section className="custom-hero">
        <div className="container">
          <span className="badge badge-gold">✨ Bespoke Creations</span>
          <h1>Custom Orders</h1>
          <p className="section-subtitle">
            Tell us your vision — our master artisans will bring it to life in wood.
            Fill the form below and we'll connect on WhatsApp for details.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="custom-form-wrap">
            {/* Step Indicator */}
            <div className="custom-steps-indicator">
              {[1, 2, 3].map(s => (
                <div key={s} className={`custom-step-dot ${step >= s ? 'custom-step-dot--active' : ''}`}>
                  <span>{s}</span>
                  <small>{s === 1 ? 'Design' : s === 2 ? 'Dimensions' : 'Contact'}</small>
                </div>
              ))}
              <div className="custom-steps-line">
                <div className="custom-steps-line-fill" style={{ width: `${((step - 1) / 2) * 100}%` }}></div>
              </div>
            </div>

            {/* Step 1: Design */}
            {step === 1 && (
              <div className="custom-form-step" id="custom-step-1">
                <h3>Step 1: What would you like?</h3>
                <div className="form-group">
                  <label className="form-label">Statue Type *</label>
                  <div className="custom-option-grid">
                    {statueTypes.map(t => (
                      <button key={t} className={`custom-option ${form.statueType === t ? 'custom-option--selected' : ''}`} onClick={() => update('statueType', t)}>{t}</button>
                    ))}
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Deity / Design Name</label>
                  <input className="form-input" placeholder="e.g., Lord Ganesha, Nataraja, Custom peacock..." value={form.deityName} onChange={e => update('deityName', e.target.value)} />
                </div>
                <div className="custom-form-nav">
                  <div></div>
                  <button className="btn btn-primary" onClick={() => setStep(2)} disabled={!form.statueType}>Next: Dimensions →</button>
                </div>
              </div>
            )}

            {/* Step 2: Dimensions */}
            {step === 2 && (
              <div className="custom-form-step" id="custom-step-2">
                <h3>Step 2: Specifications</h3>
                <div className="form-group">
                  <label className="form-label">Wood Type *</label>
                  <div className="custom-option-grid">
                    {woodOptions.map(w => (
                      <button key={w} className={`custom-option ${form.woodType === w ? 'custom-option--selected' : ''}`} onClick={() => update('woodType', w)}>{w}</button>
                    ))}
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Finish Preference *</label>
                  <div className="custom-option-grid">
                    {finishOptions.map(f => (
                      <button key={f} className={`custom-option ${form.finish === f ? 'custom-option--selected' : ''}`} onClick={() => update('finish', f)}>{f}</button>
                    ))}
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Height (approx)</label>
                    <input className="form-input" placeholder="e.g., 2 feet" value={form.height} onChange={e => update('height', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Width (approx)</label>
                    <input className="form-input" placeholder="e.g., 1.5 feet" value={form.width} onChange={e => update('width', e.target.value)} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Budget Range *</label>
                  <div className="custom-option-grid">
                    {budgetRanges.map(b => (
                      <button key={b} className={`custom-option ${form.budget === b ? 'custom-option--selected' : ''}`} onClick={() => update('budget', b)}>{b}</button>
                    ))}
                  </div>
                </div>
                <div className="custom-form-nav">
                  <button className="btn btn-outline" onClick={() => setStep(1)}>← Back</button>
                  <button className="btn btn-primary" onClick={() => setStep(3)} disabled={!form.woodType || !form.finish || !form.budget}>Next: Contact →</button>
                </div>
              </div>
            )}

            {/* Step 3: Contact */}
            {step === 3 && (
              <div className="custom-form-step" id="custom-step-3">
                <h3>Step 3: Your Contact Details</h3>
                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input className="form-input" placeholder="Full name" value={form.name} onChange={e => update('name', e.target.value)} />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input className="form-input" type="tel" placeholder="+91 ..." value={form.phone} onChange={e => update('phone', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input className="form-input" type="email" placeholder="your@email.com" value={form.email} onChange={e => update('email', e.target.value)} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Additional Notes</label>
                  <textarea className="form-textarea" placeholder="Any specific requirements, reference images description, etc." value={form.notes} onChange={e => update('notes', e.target.value)} />
                </div>

                {/* Summary */}
                <div className="custom-summary">
                  <h4>📋 Order Summary</h4>
                  <div className="custom-summary-grid">
                    <span>Type:</span><strong>{form.statueType}</strong>
                    <span>Design:</span><strong>{form.deityName || '—'}</strong>
                    <span>Wood:</span><strong>{form.woodType}</strong>
                    <span>Finish:</span><strong>{form.finish}</strong>
                    <span>Size:</span><strong>{form.height || '—'} × {form.width || '—'}</strong>
                    <span>Budget:</span><strong>{form.budget}</strong>
                  </div>
                </div>

                <div className="custom-form-nav">
                  <button className="btn btn-outline" onClick={() => setStep(2)}>← Back</button>
                  <button className="btn btn-whatsapp btn-lg" onClick={handleSubmit} disabled={!form.name || !form.phone}>
                    💬 Send via WhatsApp
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

import React, { useState } from "react";

/* ─── Palette & Tokens ─── */
const C = {
  ink: "#0f1a0f",
  forest: "#1a3d1a",
  sage: "#2d6a2d",
  fern: "#4a9a4a",
  mint: "#a8d5a8",
  foam: "#e8f4e8",
  cream: "#faf8f4",
  gold: "#c8a96e",
  goldLight: "#f0e6d0",
  white: "#ffffff",
  muted: "#5a7a5a",
  error: "#c0392b",
};

/* ─── Fonts injection ─── */
const FONTS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=Cinzel:wght@400;500;600&display=swap');
`;

/* ─── Hours data ─── */
const HOURS = [
  { day: "Monday",    time: "2:30 pm – 5:30 pm" },
  { day: "Tuesday",   time: "2:30 pm – 5:30 pm" },
  { day: "Wednesday", time: "9:00 am – 5:30 pm" },
  { day: "Thursday",  time: "9:00 am – 5:30 pm" },
  { day: "Friday",    time: "9:00 am – 5:30 pm" },
  { day: "Saturday",  time: "9:00 am – 5:30 pm" },
  { day: "Sunday",    time: "Closed",             closed: true },
];

/* ─── Global CSS ─── */
const GLOBAL_CSS = `
  ${FONTS}
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: ${C.cream}; }

  .contact-root {
    min-height: 100vh;
    background: ${C.cream};
    font-family: 'DM Sans', sans-serif;
    color: ${C.ink};
    overflow-x: hidden;
  }

  /* ── Hero ── */
  .hero {
    position: relative;
    min-height: 380px;
    display: flex;
    align-items: flex-end;
    padding: 0 24px 64px;
    overflow: hidden;
  }
  .hero-bg {
    position: absolute; inset: 0;
    background: linear-gradient(160deg, ${C.ink} 0%, ${C.forest} 45%, #1e4a1e 75%, ${C.sage} 100%);
  }
  .hero-texture {
    position: absolute; inset: 0;
    background-image:
      radial-gradient(ellipse 60% 40% at 80% 50%, rgba(74,154,74,0.15) 0%, transparent 70%),
      radial-gradient(ellipse 40% 60% at 10% 80%, rgba(200,169,110,0.1) 0%, transparent 70%);
  }
  .hero-om {
    position: absolute;
    right: -20px; top: 50%; transform: translateY(-52%);
    font-size: clamp(220px, 30vw, 360px);
    font-family: serif;
    color: rgba(255,255,255,0.04);
    line-height: 1;
    user-select: none;
    pointer-events: none;
  }
  .hero-line {
    position: absolute;
    left: 0; bottom: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${C.gold}66, transparent);
  }
  .hero-content {
    position: relative; z-index: 1;
    max-width: 1100px; margin: 0 auto; width: 100%;
    display: flex; flex-direction: column; gap: 10px;
    opacity: 0; transform: translateY(30px);
    animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s forwards;
  }
  .hero-eyebrow {
    font-family: 'Cinzel', serif;
    font-size: 11px; letter-spacing: 5px;
    color: ${C.gold}; text-transform: uppercase;
    display: flex; align-items: center; gap: 14px;
  }
  .hero-eyebrow::before {
    content: ''; display: block;
    width: 36px; height: 1px; background: ${C.gold};
  }
  .hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(48px, 7vw, 80px);
    font-weight: 700; color: ${C.white};
    line-height: 1.05; letter-spacing: -1px;
  }
  .hero-title em { font-style: italic; color: ${C.mint}; }
  .hero-sub {
    font-size: 15px; color: rgba(255,255,255,0.65);
    font-weight: 300; max-width: 480px; line-height: 1.7;
  }
  .hero-phone-chip {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.2);
    backdrop-filter: blur(8px);
    border-radius: 100px;
    padding: 8px 20px;
    font-size: 14px; font-weight: 600; color: ${C.white};
    width: fit-content; margin-top: 4px;
    text-decoration: none;
    transition: background 0.2s, border-color 0.2s;
  }
  .hero-phone-chip:hover {
    background: rgba(255,255,255,0.18);
    border-color: rgba(255,255,255,0.4);
  }

  /* ── Layout ── */
  .main-wrap {
    max-width: 1100px; margin: 0 auto;
    padding: 0 24px 80px;
    display: grid;
    grid-template-columns: 1fr 1.45fr;
    gap: 28px;
    margin-top: -48px;
    position: relative; z-index: 10;
  }
  @media (max-width: 820px) {
    .main-wrap { grid-template-columns: 1fr; margin-top: -32px; }
  }

  /* ── Cards ── */
  .card {
    background: ${C.white};
    border-radius: 20px;
    box-shadow: 0 4px 40px rgba(15,26,15,0.10), 0 1px 0 rgba(255,255,255,0.8) inset;
    border: 1px solid rgba(74,154,74,0.12);
    overflow: hidden;
  }

  .left-col {
    display: flex; flex-direction: column; gap: 24px;
    opacity: 0; transform: translateY(24px);
    animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.35s forwards;
  }

  .prac-header {
    background: linear-gradient(135deg, ${C.forest} 0%, ${C.sage} 100%);
    padding: 28px 28px 24px;
    position: relative;
  }
  .prac-name {
    font-family: 'Playfair Display', serif;
    font-size: 30px; font-weight: 600;
    color: ${C.white}; line-height: 1.1;
  }

  .info-list { padding: 24px 28px; display: flex; flex-direction: column; gap: 18px; }
  .info-row { display: flex; align-items: flex-start; gap: 14px; }
  .info-icon-wrap {
    width: 38px; height: 38px; border-radius: 12px;
    background: ${C.foam};
    border: 1px solid ${C.mint}44;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .info-label {
    font-family: 'Cinzel', serif;
    font-size: 9px; letter-spacing: 2px; text-transform: uppercase;
    color: ${C.muted}; margin-bottom: 3px;
  }
  .info-value {
    font-size: 14px; font-weight: 500; color: ${C.ink};
    line-height: 1.55; white-space: pre-line;
  }

  .divider { height: 1px; background: linear-gradient(90deg, transparent, ${C.mint}55, transparent); margin: 4px 28px; }

  /* ── Social Buttons ── */
  .social-row { padding: 16px 28px 28px; display: flex; gap: 10px; }
  .social-btn {
    width: 44px; height: 44px; border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: none; outline: none; text-decoration: none;
    color: ${C.forest}; background: ${C.foam};
  }
  .social-btn:hover { transform: translateY(-4px); box-shadow: 0 8px 15px rgba(0,0,0,0.1); }
  
  .social-fb:hover { background: #1877F2; color: white; }
  
  /* Instagram Glyph Styling */
  .social-ig:hover { 
    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
    color: white; 
  }
  
  .social-wa:hover { background: #25D366; color: white; }

  /* ── Opening Hours ── */
  .hours-header {
    padding: 22px 28px 16px;
    display: flex; align-items: center; gap: 12px;
    border-bottom: 1px solid ${C.foam};
  }
  .hours-title {
    font-family: 'Playfair Display', serif;
    font-size: 20px; font-weight: 600; color: ${C.forest};
  }
  .hours-list { padding: 8px 20px 20px; }
  .hour-row {
    display: flex; justify-content: space-between; align-items: center;
    padding: 9px 8px; border-radius: 8px;
    font-size: 13.5px;
  }
  .hour-row.today { background: ${C.foam}; }
  .hour-day-name { font-weight: 500; color: ${C.ink}; }
  .hour-day-name.today { font-weight: 700; color: ${C.forest}; }
  .hour-time { font-weight: 600; font-size: 13px; color: ${C.muted}; }
  .hour-time.today { color: ${C.sage}; }
  .hour-time.closed { color: ${C.error}; }

  /* ── Form ── */
  .form-header {
    background: linear-gradient(160deg, ${C.ink} 0%, ${C.forest} 100%);
    padding: 36px 40px 32px;
    position: relative; overflow: hidden;
  }
  .form-header-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(28px, 3.5vw, 38px);
    font-weight: 700; color: ${C.white};
    line-height: 1.15;
  }
  .form-body { padding: 36px 40px 40px; display: flex; flex-direction: column; gap: 26px; }
  .field-group { display: flex; flex-direction: column; gap: 7px; }
  .field-label {
    font-family: 'Cinzel', serif;
    font-size: 12px; letter-spacing: 2px; text-transform: uppercase;
    color: ${C.ink}; font-weight: 600;
  }
  .field-input {
    width: 100%; padding: 13px 16px;
    background: ${C.cream}; border: 1.5px solid ${C.mint}55;
    border-radius: 10px; font-family: inherit; font-size: 14px;
    outline: none; transition: all 0.2s;
  }
  .field-input:focus { border-color: ${C.sage}; background: white; box-shadow: 0 0 0 4px ${C.sage}15; }
  .submit-btn {
    width: 100%; padding: 18px;
    background: linear-gradient(135deg, ${C.sage} 0%, ${C.forest} 100%);
    color: ${C.white}; border: none; border-radius: 12px;
    font-family: 'Cinzel', serif; letter-spacing: 3px; cursor: pointer;
    font-size: 12px; font-weight: 600; text-transform: uppercase;
    transition: transform 0.2s;
  }
  .submit-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(0,0,0,0.2); }

  @keyframes fadeUp {
    to { opacity: 1; transform: translateY(0); }
  }

  .footer {
    text-align: center; padding: 40px 24px;
    font-family: 'Cinzel', serif;
    font-size: 10px; letter-spacing: 2px;
    color: ${C.muted}; text-transform: uppercase;
    border-top: 1px solid ${C.mint}33;
    max-width: 1100px; margin: 0 auto;
  }
`;

/* ─── SVG Icons ─── */
const IconPin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const IconPhone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.1 13.15a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2.5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 17.92z"/>
  </svg>
);
const IconEmail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
);

/* THE PRECISE INSTAGRAM GLYPH (Standard Footer Style) */
const IconInstagram = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const ContactPage: React.FC = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (form.firstName && form.email) setSubmitted(true);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />
<div id="contact-section" className="contact-root">


        {/* ── Hero ── */}
        <div className="hero">
          <div className="hero-bg" />
          <div className="hero-texture" />
          <div className="hero-om">ॐ</div>
          <div className="hero-line" />
          <div className="hero-content">
            <div className="hero-eyebrow">Contact Us</div>
            <h1 className="hero-title">Start Your<br /><em>Ayurvedic Life</em></h1>
            <p className="hero-sub">Connect with Sejal Shah for personalized consultations and traditional healing therapies.</p>
          </div>
        </div>

        {/* ── Main Layout ── */}
        <div className="main-wrap">
          <div className="left-col">
            {/* Contact Details Card */}
            <div className="card">
              <div className="prac-header">
                <div className="prac-name">Sejal Shah</div>
              </div>
              <div className="info-list">
                {[
                  { icon: <IconPin />, label: "Clinic Location", value: "2 Redmires Road\nAveley, WA – 6069" },
                  { icon: <IconPhone />, label: "Call Us",   value: "0433 401 505" },
                  { icon: <IconEmail />, label: "Email Us",   value: "omayurveda@hotmail.com" },
                ].map(({ icon, label, value }) => (
                  <div className="info-row" key={label}>
                    <div className="info-icon-wrap">{icon}</div>
                    <div>
                      <div className="info-label">{label}</div>
                      <div className="info-value">{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="divider" />

              <div className="social-row">
                <a className="social-btn social-fb" href="#" aria-label="Facebook">
                   <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </a>
                
                <a className="social-btn social-ig" href="#" aria-label="Instagram">
                  <IconInstagram size={24} />
                </a>

                <a className="social-btn social-wa" href="#" aria-label="WhatsApp">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </a>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="card">
              <div className="hours-header">
                <span className="hours-title">Opening Hours</span>
              </div>
              <div className="hours-list">
                {HOURS.map(({ day, time, closed }) => (
                  <div className="hour-row" key={day}>
                    <span className="hour-day-name">{day}</span>
                    <span className={`hour-time ${closed ? "closed" : ""}`}>{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="right-col">
            <div className="card">
              <div className="form-header">
                <h2 className="form-header-title">Schedule a <em>Consultation</em></h2>
              </div>
              <div className="form-body">
                <div className="field-group">
                  <label className="field-label">Your Name</label>
                  <input className="field-input" placeholder="Enter your full name" onChange={(e) => setForm({...form, firstName: e.target.value})} />
                </div>
                <div className="field-group">
                  <label className="field-label">Email Address</label>
                  <input className="field-input" type="email" placeholder="email@example.com" onChange={(e) => setForm({...form, email: e.target.value})} />
                </div>
                <div className="field-group">
                  <label className="field-label">Message</label>
                  <textarea className="field-input" rows={4} placeholder="How can we help you?" />
                </div>
                <button className="submit-btn" onClick={handleSubmit}>
                  {submitted ? "Message Sent!" : "Submit Appointment Request"}
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default ContactPage;
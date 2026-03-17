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
  .hero-title em {
    font-style: italic; color: ${C.mint};
  }
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
  .hero-phone-chip svg { flex-shrink: 0; }

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

  /* ── Left column ── */
  .left-col {
    display: flex; flex-direction: column; gap: 24px;
    opacity: 0; transform: translateY(24px);
    animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.35s forwards;
  }

  /* Practitioner card */
  .prac-header {
    background: linear-gradient(135deg, ${C.forest} 0%, ${C.sage} 100%);
    padding: 28px 28px 24px;
    position: relative; overflow: hidden;
  }
  .prac-header::after {
    content: ''; position: absolute;
    right: -24px; bottom: -24px;
    width: 100px; height: 100px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.1);
  }
  .prac-header::before {
    content: ''; position: absolute;
    right: 8px; bottom: 8px;
    width: 60px; height: 60px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.08);
  }
  .prac-role-badge {
    display: inline-flex; align-items: center; gap: 6px;
    background: rgba(255,255,255,0.12);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 100px;
    padding: 4px 12px; margin-bottom: 12px;
    font-family: 'Cinzel', serif;
    font-size: 9.5px; letter-spacing: 2px; color: ${C.mint};
    text-transform: uppercase;
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

  .online-badge {
    margin: 0 28px;
    display: flex; align-items: center; gap: 10px;
    background: linear-gradient(135deg, ${C.foam}, ${C.goldLight}55);
    border: 1px solid ${C.gold}44;
    border-radius: 12px; padding: 12px 16px;
  }
  .online-badge-dot {
    width: 8px; height: 8px; border-radius: 50%; background: ${C.fern};
    box-shadow: 0 0 0 3px ${C.fern}30;
    animation: pulse 2s infinite;
  }
  .online-badge-text { font-size: 13px; font-weight: 600; color: ${C.sage}; }

  .social-row { padding: 16px 28px 28px; display: flex; gap: 10px; }
  .social-btn {
    width: 42px; height: 42px; border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; transition: transform 0.2s, box-shadow 0.2s;
    border: none; outline: none;
    text-decoration: none;
  }
  .social-btn:hover { transform: translateY(-3px); }
  .social-fb { background: #1877F222; color: #1877F2; }
  .social-fb:hover { box-shadow: 0 6px 20px #1877F233; }
  .social-ig { background: #E1306C22; color: #E1306C; }
  .social-ig:hover { box-shadow: 0 6px 20px #E1306C33; }
  .social-wa { background: #25D36622; color: #25D366; }
  .social-wa:hover { box-shadow: 0 6px 20px #25D36633; }

  /* Hours card */
  .hours-header {
    padding: 22px 28px 16px;
    display: flex; align-items: center; gap: 12px;
    border-bottom: 1px solid ${C.foam};
  }
  .hours-icon-wrap {
    width: 40px; height: 40px; border-radius: 12px;
    background: linear-gradient(135deg, ${C.forest}, ${C.sage});
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
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
    transition: background 0.15s;
  }
  .hour-row.today { background: ${C.foam}; }
  .hour-row-day { display: flex; align-items: center; gap: 8px; }
  .today-pip { width: 7px; height: 7px; border-radius: 50%; background: ${C.fern}; animation: pulse 2s infinite; }
  .today-tag {
    font-family: 'Cinzel', serif;
    font-size: 8px; letter-spacing: 1.5px; text-transform: uppercase;
    color: ${C.fern}; background: ${C.fern}18;
    border: 1px solid ${C.fern}33;
    padding: 2px 7px; border-radius: 4px;
  }
  .hour-day-name { font-weight: 500; color: ${C.ink}; }
  .hour-day-name.today { font-weight: 700; color: ${C.forest}; }
  .hour-time { font-weight: 600; font-size: 13px; color: ${C.muted}; }
  .hour-time.today { color: ${C.sage}; }
  .hour-time.closed { color: ${C.error}; }
  .hours-separator { height: 1px; background: ${C.foam}; margin: 2px 8px; }

  /* Map */
  .map-card { border-radius: 20px; overflow: hidden; box-shadow: 0 4px 24px rgba(15,26,15,0.12); position: relative; }
  .map-label {
    position: absolute; bottom: 14px; left: 14px;
    background: ${C.forest};
    color: ${C.white}; border-radius: 10px;
    padding: 8px 14px; font-size: 12px; font-weight: 600;
    display: flex; align-items: center; gap: 6px;
    box-shadow: 0 4px 16px rgba(15,26,15,0.4);
    pointer-events: none;
  }

  /* ── Right column – Form ── */
  .right-col {
    opacity: 0; transform: translateY(24px);
    animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.5s forwards;
  }
  .form-card { height: 100%; display: flex; flex-direction: column; }

  .form-header {
    background: linear-gradient(160deg, ${C.ink} 0%, ${C.forest} 100%);
    padding: 36px 40px 32px;
    position: relative; overflow: hidden;
  }
  .form-header-orb {
    position: absolute; right: -40px; top: -40px;
    width: 180px; height: 180px; border-radius: 50%;
    background: radial-gradient(circle, ${C.sage}30, transparent 70%);
  }
  .form-header-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(28px, 3.5vw, 38px);
    font-weight: 700; color: ${C.white};
    line-height: 1.15; position: relative; z-index: 1;
    margin-bottom: 10px;
  }
  .form-header-title em { font-style: italic; color: ${C.mint}; }
  .form-header-sub {
    font-size: 14px; color: rgba(255,255,255,0.6);
    font-weight: 300; line-height: 1.65;
    position: relative; z-index: 1;
  }
  .required-star { color: ${C.gold}; font-weight: 700; }

  .form-body { padding: 36px 40px 40px; flex: 1; display: flex; flex-direction: column; gap: 26px; }
  @media (max-width: 600px) { .form-body { padding: 24px; } .form-header { padding: 28px 24px; } }

  .field-group { display: flex; flex-direction: column; gap: 7px; }
  .field-label {
    font-family: 'Cinzel', serif;
    font-size: 15px; letter-spacing: 2px; text-transform: uppercase;
    color: #000000;
    display: flex; align-items: center; gap: 4px;
  }
  .name-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }

  .field-input {
    width: 100%;
    font-family: 'DM Sans', sans-serif;
    font-size: 14.5px; color: ${C.ink};
    background: ${C.cream};
    border: 1.5px solid ${C.mint}55;
    border-radius: 10px;
    padding: 13px 16px;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
    resize: none;
  }
  .field-input::placeholder { color: ${C.muted}88; }
  .field-input:hover { border-color: ${C.fern}77; background: ${C.white}; }
  .field-input:focus { border-color: ${C.sage}; box-shadow: 0 0 0 3px ${C.sage}18; background: ${C.white}; }
  .field-input.error { border-color: ${C.error}66; background: #fff5f5; }
  .field-input.error:focus { box-shadow: 0 0 0 3px ${C.error}15; }
  .field-error { font-size: 12px; color: ${C.error}; font-weight: 500; margin-top: 2px; }

  .submit-btn {
    width: 100%; padding: 16px;
    background: linear-gradient(135deg, ${C.sage} 0%, ${C.forest} 60%, ${C.ink} 100%);
    color: ${C.white};
    font-family: 'Cinzel', serif;
    font-size: 12px; letter-spacing: 3px; text-transform: uppercase;
    font-weight: 500;
    border: none; border-radius: 12px; cursor: pointer;
    display: flex; align-items: center; justify-content: center; gap: 12px;
    box-shadow: 0 8px 32px rgba(15,26,15,0.3);
    transition: transform 0.22s, box-shadow 0.22s, filter 0.22s;
    position: relative; overflow: hidden;
  }
  .submit-btn::before {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(135deg, ${C.fern}40, transparent);
    opacity: 0; transition: opacity 0.22s;
  }
  .submit-btn:hover { transform: translateY(-2px); box-shadow: 0 14px 40px rgba(15,26,15,0.35); }
  .submit-btn:hover::before { opacity: 1; }
  .submit-btn:active { transform: translateY(0); }
  .btn-arrow {
    width: 28px; height: 28px; border-radius: 8px;
    background: rgba(255,255,255,0.15);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }

  .form-footer-note {
    text-align: center; font-size: 13px; color: ${C.muted};
    line-height: 1.6;
  }
  .form-footer-note a {
    color: ${C.forest}; font-weight: 600; text-decoration: none;
    border-bottom: 1px solid ${C.fern}55;
    transition: color 0.15s, border-color 0.15s;
  }
  .form-footer-note a:hover { color: ${C.sage}; border-color: ${C.sage}; }

  /* Success */
  .success-body {
    padding: 60px 40px;
    flex: 1; display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    text-align: center; gap: 16px;
  }
  .success-circle {
    width: 80px; height: 80px; border-radius: 50%;
    background: linear-gradient(135deg, ${C.foam}, ${C.mint}55);
    border: 2px solid ${C.fern}44;
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 8px;
  }
  .success-title {
    font-family: 'Playfair Display', serif;
    font-size: 30px; font-weight: 600; color: ${C.forest};
  }
  .success-sub { font-size: 15px; color: ${C.muted}; line-height: 1.7; max-width: 360px; }
  .reset-btn {
    margin-top: 8px;
    padding: 12px 32px;
    border: 1.5px solid ${C.sage}55;
    border-radius: 100px; background: transparent;
    font-family: 'DM Sans', sans-serif;
    font-size: 13.5px; font-weight: 600; color: ${C.forest};
    cursor: pointer; transition: background 0.2s, border-color 0.2s;
  }
  .reset-btn:hover { background: ${C.foam}; border-color: ${C.sage}; }

  /* Snack */
  .snack {
    position: fixed; bottom: 28px; left: 50%; transform: translateX(-50%);
    background: ${C.forest};
    color: ${C.white};
    padding: 14px 28px; border-radius: 100px;
    font-size: 14px; font-weight: 500;
    box-shadow: 0 8px 32px rgba(15,26,15,0.3);
    display: flex; align-items: center; gap: 10px;
    z-index: 9999;
    animation: snackIn 0.4s cubic-bezier(0.16,1,0.3,1) forwards;
  }
  .snack.out { animation: snackOut 0.3s ease-in forwards; }

  /* Footer */
  .footer {
    text-align: center; padding: 24px;
    font-family: 'Cinzel', serif;
    font-size: 10.5px; letter-spacing: 2px;
    color: ${C.muted}; text-transform: uppercase;
    border-top: 1px solid ${C.mint}33;
    margin: 0 24px 0;
    max-width: 1100px; margin: 0 auto;
  }

  /* ── Animations ── */
  @keyframes fadeUp {
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes pulse {
    0%,100% { box-shadow: 0 0 0 3px rgba(74,154,74,0.3); }
    50% { box-shadow: 0 0 0 6px rgba(74,154,74,0.08); }
  }
  @keyframes snackIn {
    from { opacity:0; transform: translateX(-50%) translateY(20px); }
    to   { opacity:1; transform: translateX(-50%) translateY(0); }
  }
  @keyframes snackOut {
    to { opacity:0; transform: translateX(-50%) translateY(20px); }
  }
  @keyframes checkPop {
    from { transform: scale(0.5); opacity: 0; }
    to   { transform: scale(1);   opacity: 1; }
  }
  .success-circle svg { animation: checkPop 0.5s cubic-bezier(0.16,1,0.3,1) 0.2s both; }
`;

/* ─── SVG Icons ─── */
const IconPin = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.fern} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const IconPhone = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.fern} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.1 13.15a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2.5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 17.92z"/>
  </svg>
);
const IconEmail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.fern} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
);
const IconClock = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.white} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
  </svg>
);
const IconCam = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={C.sage} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="23,7 16,12 23,17 23,7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
  </svg>
);
const IconSend = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22,2 15,22 11,13 2,9 22,2"/>
  </svg>
);
const IconCheck = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={C.fern} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20,6 9,17 4,12"/>
  </svg>
);
const IconPhoneSmall = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.1 13.15a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2.5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 17.92z"/>
  </svg>
);

const SocialIcon = ({ d, size = 18 }: { d: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d={d} /></svg>
);

const FB_PATH = "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z";
const IG_PATH = "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.8 2h8.4A5.8 5.8 0 0122 7.8v8.4A5.8 5.8 0 0116.2 22H7.8A5.8 5.8 0 012 16.2V7.8A5.8 5.8 0 017.8 2z";
const WA_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

/* ─── Component ─── */
const ContactPage: React.FC = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", comment: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [snack, setSnack] = useState(false);
  const [snackOut, setSnackOut] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    if (!form.phone.trim()) e.phone = "Required";
    if (!form.comment.trim()) e.comment = "Required";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSubmitted(true);
    setSnack(true);
    setTimeout(() => setSnackOut(true), 3400);
    setTimeout(() => { setSnack(false); setSnackOut(false); }, 3800);
  };

  const change = (k: string) => (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [k]: ev.target.value }));
    if (errors[k]) setErrors(e => { const n = { ...e }; delete n[k]; return n; });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />
      <div className="contact-root">

        {/* ── Hero ── */}
        <div className="hero">
          <div className="hero-bg" />
          <div className="hero-texture" />
          <div className="hero-om">ॐ</div>
          <div className="hero-line" />
          <div className="hero-content" style={{ maxWidth: 1100, margin: "0 auto", width: "100%" }}>
            <div className="hero-eyebrow">Get In Touch</div>
            <h1 className="hero-title">
              Begin Your<br /><em>Healing Journey</em>
            </h1>
            <p className="hero-sub">Book a consultation with Sejal Shah and discover the transformative power of Ayurveda.</p>
            <a href="tel:0433401505" className="hero-phone-chip">
              <IconPhoneSmall /> 0433 401 505
            </a>
          </div>
        </div>

        {/* ── Main Layout ── */}
        <div className="main-wrap">

          {/* ── LEFT COLUMN ── */}
          <div className="left-col">

            {/* Practitioner + Contact Card */}
            <div className="card">
              <div className="prac-header">
                <div className="prac-role-badge">✦ Ayurveda Practitioner</div>
                <div className="prac-name">Sejal Shah</div>
              </div>
              <div className="info-list">
                {[
                  { icon: <IconPin />, label: "Address", value: "2 Redmires Road\nAveley, WA – 6069" },
                  { icon: <IconPhone />, label: "Phone",   value: "0433 401 505" },
                  { icon: <IconEmail />, label: "Email",   value: "omayurveda@hotmail.com" },
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

              <div className="online-badge" style={{ margin: "16px 28px" }}>
                <div className="online-badge-dot" />
                <IconCam />
                <span className="online-badge-text">Online Consultations Available</span>
              </div>

              <div className="social-row">
                <a className="social-btn social-fb" href="#" aria-label="Facebook">
                  <SocialIcon d={FB_PATH} size={18} />
                </a>
                <a className="social-btn social-ig" href="#" aria-label="Instagram">
                  <SocialIcon d={IG_PATH} size={18} />
                </a>
                <a className="social-btn social-wa" href="#" aria-label="WhatsApp">
                  <SocialIcon d={WA_PATH} size={18} />
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="card">
              <div className="hours-header">
                <div className="hours-icon-wrap"><IconClock /></div>
                <span className="hours-title">Opening Hours</span>
              </div>
              <div className="hours-list">
                {(() => {
                  const today = new Date().toLocaleDateString("en-AU", { weekday: "long" });
                  return HOURS.map(({ day, time, closed }, i) => {
                    const isToday = today === day;
                    return (
                      <React.Fragment key={day}>
                        {i > 0 && !isToday && !HOURS[i - 1]?.day && <div className="hours-separator" />}
                        <div className={`hour-row${isToday ? " today" : ""}`}>
                          <div className="hour-row-day">
                            {isToday && <div className="today-pip" />}
                            <span className={`hour-day-name${isToday ? " today" : ""}`}>{day}</span>
                            {isToday && <span className="today-tag">Today</span>}
                          </div>
                          <span className={`hour-time${closed ? " closed" : isToday ? " today" : ""}`}>{time}</span>
                        </div>
                        {i < HOURS.length - 1 && <div className="hours-separator" />}
                      </React.Fragment>
                    );
                  });
                })()}
              </div>
            </div>

           

          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="right-col">
            <div className="card form-card">
              <div className="form-header">
                <div className="form-header-orb" />
                <h2 className="form-header-title">
                  Book Your<br /><em>Appointment</em>
                </h2>
                <p className="form-header-sub">
                  Fill in the form below and we'll confirm your booking shortly.{" "}
                  <span className="required-star">* Required fields</span>
                </p>
              </div>

              {!submitted ? (
                <div className="form-body">

                  {/* Name */}
                  <div className="field-group">
                    <label className="field-label">Full Name <span className="required-star">*</span></label>
                    <div className="name-grid">
                      <div>
                        <input
                          className={`field-input${errors.firstName ? " error" : ""}`}
                          placeholder="First"
                          value={form.firstName}
                          onChange={change("firstName")}
                        />
                        {errors.firstName && <div className="field-error">{errors.firstName}</div>}
                      </div>
                      <div>
                        <input
                          className={`field-input${errors.lastName ? " error" : ""}`}
                          placeholder="Last"
                          value={form.lastName}
                          onChange={change("lastName")}
                        />
                        {errors.lastName && <div className="field-error">{errors.lastName}</div>}
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="field-group">
                    <label className="field-label">Email Address <span className="required-star">*</span></label>
                    <input
                      className={`field-input${errors.email ? " error" : ""}`}
                      type="email" placeholder="you@example.com"
                      value={form.email}
                      onChange={change("email")}
                    />
                    {errors.email && <div className="field-error">{errors.email}</div>}
                  </div>

                  {/* Phone */}
                  <div className="field-group">
                    <label className="field-label">Phone Number <span className="required-star">*</span></label>
                    <input
                      className={`field-input${errors.phone ? " error" : ""}`}
                      type="tel" placeholder="04XX XXX XXX"
                      value={form.phone}
                      onChange={change("phone")}
                    />
                    {errors.phone && <div className="field-error">{errors.phone}</div>}
                  </div>

                  {/* Message */}
                  <div className="field-group">
                    <label className="field-label">Message / Comment <span className="required-star">*</span></label>
                    <textarea
                      className={`field-input${errors.comment ? " error" : ""}`}
                      placeholder="Tell us about your health goals, preferred package, or any questions..."
                      rows={6}
                      value={form.comment}
                      onChange={change("comment")}
                    />
                    {errors.comment && <div className="field-error">{errors.comment}</div>}
                  </div>

                  {/* Submit */}
                  <button className="submit-btn" onClick={handleSubmit}>
                    Submit Appointment Request
                    <span className="btn-arrow"><IconSend /></span>
                  </button>

                  <p className="form-footer-note">
                    Or call us directly on{" "}
                    <a href="tel:0433401505">0433 401 505</a>
                  </p>
                </div>
              ) : (
                <div className="success-body">
                  <div className="success-circle"><IconCheck /></div>
                  <h3 className="success-title">Thank you, {form.firstName}!</h3>
                  <p className="success-sub">
                    Your appointment request has been received. We'll be in touch shortly to confirm your booking.
                  </p>
                  <button
                    className="reset-btn"
                    onClick={() => { setForm({ firstName: "", lastName: "", email: "", phone: "", comment: "" }); setSubmitted(false); setErrors({}); }}
                  >
                    Submit Another Request
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div style={{ padding: "32px 24px 40px" }}>
          <p className="footer">© 2024 OM Ayurveda · All Rights Reserved</p>
        </div>
      </div>

      {snack && (
        <div className={`snack${snackOut ? " out" : ""}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20,6 9,17 4,12"/></svg>
          Appointment request submitted!
        </div>
      )}
    </>
  );
};

export default ContactPage;
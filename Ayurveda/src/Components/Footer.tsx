import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
/* ══════════════════════════════════════════
   TOKENS  —  Dark Green & White (matches site theme)
══════════════════════════════════════════ */
const C = {
  bg:      "#0a1a0a",
  card:    "#112011",
  surface: "#172817",
  border:  "#1e3a1e",
  mid:     "#245424",
  green:   "#2e7d32",
  bright:  "#4caf50",
  mint:    "#a5d6a7",
  white:   "#ffffff",
  sub:     "#b2ccb2",
  muted:   "#6a8f6a",
  dim:     "#2a3e2a",
  gold:    "#c8a96e",
};

/* ══════════════════════════════════════════
   CSS
══════════════════════════════════════════ */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600;700&family=Cinzel:wght@400;500&display=swap');

/* ── Root ── */
.ft{
  position:relative;overflow:hidden;
  background:${C.bg};
  font-family:'Jost',sans-serif;
  color:${C.white};
}

/* ══ ANIMATED BACKGROUND ══ */
/* Floating orbs */
.ft-orb{
  position:absolute;border-radius:50%;pointer-events:none;
  filter:blur(60px);
}
.ft-orb-1{
  width:420px;height:420px;
  background:radial-gradient(circle,#1b5e2022,transparent 70%);
  top:-100px;left:-80px;
  animation:orbFloat1 14s ease-in-out infinite;
}
.ft-orb-2{
  width:320px;height:320px;
  background:radial-gradient(circle,#2e7d3218,transparent 70%);
  bottom:-60px;right:10%;
  animation:orbFloat2 11s ease-in-out 2s infinite;
}
.ft-orb-3{
  width:240px;height:240px;
  background:radial-gradient(circle,#4caf5012,transparent 70%);
  top:40%;left:45%;
  animation:orbFloat3 9s ease-in-out 1s infinite;
}
@keyframes orbFloat1{0%,100%{transform:translate(0,0) scale(1);}50%{transform:translate(40px,-30px) scale(1.08);}}
@keyframes orbFloat2{0%,100%{transform:translate(0,0) scale(1);}50%{transform:translate(-30px,20px) scale(1.05);}}
@keyframes orbFloat3{0%,100%{transform:translate(0,0) scale(1);}50%{transform:translate(20px,-20px) scale(1.1);}}

/* Moving dot-grid */
.ft-grid{
  position:absolute;inset:0;pointer-events:none;
  background-image:radial-gradient(circle,${C.mid}40 1px,transparent 1px);
  background-size:28px 28px;
  animation:gridDrift 20s linear infinite;
  opacity:.35;
}
@keyframes gridDrift{from{background-position:0 0;}to{background-position:28px 28px;}}

/* Diagonal stripe overlay */
.ft-stripes{
  position:absolute;inset:0;pointer-events:none;
  background-image:repeating-linear-gradient(
    -55deg,transparent,transparent 60px,
    ${C.border}18 60px,${C.border}18 61px
  );
  opacity:.6;
}

/* Spinning OM watermark */
.ft-om{
  position:absolute;right:-40px;bottom:-60px;
  font-family:serif;font-size:380px;
  color:${C.surface};line-height:1;
  user-select:none;pointer-events:none;
  animation:omSpin 60s linear infinite;
}
@keyframes omSpin{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}

/* Shimmer line at top */
.ft-shimmer{
  position:absolute;top:0;left:0;right:0;height:2px;
  background:linear-gradient(90deg,transparent,${C.bright}88,${C.gold}88,${C.bright}88,transparent);
  background-size:200% 100%;
  animation:shimmerMove 3s linear infinite;
}
@keyframes shimmerMove{0%{background-position:200% 0;}100%{background-position:-200% 0;}}

/* ══ CONTENT ══ */
.ft-inner{
  position:relative;z-index:1;
  max-width:1260px;margin:0 auto;
  padding:72px clamp(24px,5vw,80px) 0;
}

/* Top section: brand + columns + map */
.ft-top{
  display:grid;
  grid-template-columns:1.4fr 1fr 1fr 1.5fr;
  gap:48px;
  padding-bottom:56px;
  border-bottom:1px solid ${C.border};
}
@media(max-width:1024px){.ft-top{grid-template-columns:1fr 1fr;gap:36px;}}
@media(max-width:600px){.ft-top{grid-template-columns:1fr;gap:28px;}}

/* Brand column */
.ft-brand{}
.ft-logo{
  font-family:'Cormorant Garamond',serif;
  font-size:34px;font-weight:700;color:${C.white};
  line-height:1;margin-bottom:6px;
  display:flex;align-items:center;gap:10px;
}
  .ft-logo-img {
  width: 140px;       /* adjust size to fit footer */
  height: auto;
  object-fit: contain;
}
.ft-logo-om{
  font-family:serif;font-size:38px;
  background:linear-gradient(135deg,${C.bright},${C.gold});
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;
  background-clip:text;
  animation:logoPulse 3s ease-in-out infinite;
}
@keyframes logoPulse{0%,100%{filter:brightness(1);}50%{filter:brightness(1.3);}}
.ft-tagline{
  font-family:'Cormorant Garamond',serif;font-style:italic;
  font-size:14px;color:${C.gold};letter-spacing:.5px;margin-bottom:16px;
}
.ft-desc{
  font-size:13.5px;font-weight:300;color:${C.sub};
  line-height:1.8;max-width:280px;margin-bottom:24px;
}

/* Social icons */
.ft-socials{display:flex;gap:10px;}
.ft-soc{
  width:40px;height:40px;border-radius:11px;
  display:flex;align-items:center;justify-content:center;
  text-decoration:none;border:1px solid;
  transition:transform .2s,box-shadow .2s;
  cursor:pointer;
}
.ft-soc:hover{transform:translateY(-3px);}
.ft-soc-fb{background:#1877F214;border-color:#1877F230;color:#1877F2;}
.ft-soc-fb:hover{box-shadow:0 6px 20px #1877F230;}
.ft-soc-ig{background:#E1306C14;border-color:#E1306C30;color:#E1306C;}
.ft-soc-ig:hover{box-shadow:0 6px 20px #E1306C30;}
.ft-soc-wa{background:#25D36614;border-color:#25D36630;color:#25D366;}
.ft-soc-wa:hover{box-shadow:0 6px 20px #25D36630;}

/* Column headings */
.ft-col-title{
  font-family:'Cinzel',serif;font-size:10px;letter-spacing:3.5px;
  text-transform:uppercase;color:${C.bright};
  margin-bottom:20px;
  display:flex;align-items:center;gap:10px;
}
.ft-col-title::after{content:'';flex:1;height:1px;background:linear-gradient(90deg,${C.border},transparent);}

/* Nav links */
.ft-links{display:flex;flex-direction:column;gap:10px;}
.ft-link{
  font-size:13.5px;font-weight:400;color:${C.sub};
  text-decoration:none;cursor:pointer;
  display:flex;align-items:center;gap:8px;
  transition:color .2s,gap .2s;
  width:fit-content;
}
.ft-link::before{
  content:'';width:0;height:1px;background:${C.bright};
  transition:width .25s;flex-shrink:0;
}
.ft-link:hover{color:${C.white};}
.ft-link:hover::before{width:16px;}

/* Contact details */
.ft-contacts{display:flex;flex-direction:column;gap:14px;}
.ft-contact-row{display:flex;align-items:flex-start;gap:12px;}
.ft-contact-icon{
  width:34px;height:34px;border-radius:10px;flex-shrink:0;
  background:${C.surface};border:1px solid ${C.mid}55;
  display:flex;align-items:center;justify-content:center;
}
.ft-contact-lbl{font-family:'Cinzel',serif;font-size:8px;letter-spacing:1.5px;text-transform:uppercase;color:${C.bright};margin-bottom:2px;}
.ft-contact-val{font-size:13px;color:${C.sub};line-height:1.5;}

/* Hours compact */
.ft-hours{display:flex;flex-direction:column;gap:6px;margin-top:4px;}
.ft-hour-row{display:flex;justify-content:space-between;font-size:12.5px;color:${C.sub};padding:4px 0;border-bottom:1px solid ${C.border}44;}
.ft-hour-row:last-child{border-bottom:none;}
.ft-hour-day{font-weight:500;}
.ft-hour-day.today{color:${C.bright};font-weight:700;}
.ft-hour-time{color:${C.muted};}
.ft-hour-time.today{color:${C.bright};}
.ft-hour-time.closed{color:#ef5350;}

/* ══ MAP COLUMN ══ */
.ft-map-col{}
.ft-map-wrap{
  border-radius:16px;overflow:hidden;
  border:1px solid ${C.border};
  position:relative;
  box-shadow:0 8px 32px #00000044;
  /* subtle glow */
  box-shadow:0 0 0 1px ${C.mid}33,0 8px 32px #00000055;
  transition:box-shadow .3s;
}
.ft-map-wrap:hover{
  box-shadow:0 0 0 1px ${C.bright}44,0 12px 40px #00000066;
}
.ft-map-wrap iframe{
  display:block;border:0;width:100%;height:220px;
  filter:invert(92%) hue-rotate(148deg) brightness(0.82) saturate(0.6);
}
.ft-map-badge{
  position:absolute;bottom:12px;left:12px;
  background:${C.card}ee;backdrop-filter:blur(8px);
  border:1px solid ${C.bright}33;
  color:${C.mint};border-radius:9px;
  padding:8px 14px;font-size:11.5px;font-weight:500;
  display:flex;align-items:center;gap:7px;
  font-family:'Cinzel',serif;letter-spacing:.4px;pointer-events:none;
}
/* Online badge below map */
.ft-online{
  margin-top:12px;
  display:flex;align-items:center;gap:10px;
  background:${C.surface};border:1px solid ${C.mid}44;
  border-radius:10px;padding:10px 14px;
}
.ft-online-dot{
  width:8px;height:8px;border-radius:50%;background:${C.bright};
  box-shadow:0 0 0 3px ${C.bright}28;animation:pulse 2s infinite;flex-shrink:0;
}
.ft-online-txt{font-size:12.5px;font-weight:500;color:${C.mint};}
@keyframes pulse{0%,100%{box-shadow:0 0 0 3px ${C.bright}28;}50%{box-shadow:0 0 0 7px ${C.bright}08;}}

/* ══ MIDDLE STRIP — CTA ══ */
.ft-cta{
  position:relative;z-index:1;
  margin:0 clamp(24px,5vw,80px);
  background:linear-gradient(135deg,${C.surface},${C.card});
  border:1px solid ${C.border};border-radius:20px;
  padding:36px 48px;
  display:flex;align-items:center;justify-content:space-between;
  gap:24px;flex-wrap:wrap;
  overflow:hidden;
  transform:translateY(-1px);
}
.ft-cta::before{
  content:'ॐ';position:absolute;right:-10px;top:50%;transform:translateY(-50%);
  font-family:serif;font-size:160px;color:${C.mid}20;pointer-events:none;line-height:1;
}
.ft-cta-text{}
.ft-cta-eyebrow{
  font-family:'Cinzel',serif;font-size:9px;letter-spacing:3px;
  text-transform:uppercase;color:${C.bright};margin-bottom:6px;
}
.ft-cta-h{
  font-family:'Cormorant Garamond',serif;font-size:clamp(22px,2.5vw,28px);
  font-weight:700;color:${C.white};line-height:1.2;
}
.ft-cta-h em{font-style:italic;color:${C.mint};}
.ft-cta-btn{
  display:inline-flex;align-items:center;gap:10px;
  background:${C.white};color:${C.bg};
  font-family:'Cinzel',serif;font-size:10.5px;letter-spacing:2.5px;
  text-transform:uppercase;font-weight:500;
  border:none;border-radius:100px;padding:14px 32px;cursor:pointer;
  box-shadow:0 8px 28px ${C.green}44;
  transition:transform .22s,box-shadow .22s,background .2s;
  white-space:nowrap;flex-shrink:0;text-decoration:none;
}
.ft-cta-btn:hover{
  background:#e8f5e8;transform:translateY(-2px);
  box-shadow:0 14px 40px ${C.bright}44;
}

/* ══ BOTTOM BAR ══ */
.ft-bottom{
  position:relative;z-index:1;
  max-width:1260px;margin:0 auto;
  padding:24px clamp(24px,5vw,80px) 32px;
  display:flex;align-items:center;justify-content:space-between;
  flex-wrap:wrap;gap:16px;
  border-top:1px solid ${C.border};
}
.ft-copy{font-size:12px;font-weight:300;color:${C.muted};}
.ft-copy b{color:${C.bright}77;font-weight:400;}
.ft-bottom-links{display:flex;gap:24px;}
.ft-bottom-link{
  font-size:11.5px;color:${C.muted};text-decoration:none;cursor:pointer;
  font-family:'Cinzel',serif;letter-spacing:.5px;
  transition:color .15s;
}
.ft-bottom-link:hover{color:${C.mint};}

/* ── fade-in animation ── */
.ft-fade{opacity:0;transform:translateY(20px);}
.ft-fade.vis{opacity:1;transform:translateY(0);transition:opacity .7s cubic-bezier(.16,1,.3,1),transform .7s cubic-bezier(.16,1,.3,1);}
`;

/* ══════════════════════════════════════════
   ICONS
══════════════════════════════════════════ */
const I = ({ d, s = 16, c = C.bright, fill = false }: any) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={fill ? c : "none"} stroke={fill ? "none" : c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {typeof d === "string"
      ? <path d={d} />
      : d}
  </svg>
);

const PIN_D   = "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z";
const PHONE_D = "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 005 5l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 17z";
const MAIL_D  = "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z";

  <circle cx="12" cy="12" r="10" stroke={C.bright} strokeWidth="1.8" fill="none"/>
  <polyline points="12,6 12,12 16,14" stroke={C.bright} strokeWidth="1.8" strokeLinecap="round" fill="none"/>
</>;
const CAM_D   = <>
  <polygon points="23,7 16,12 23,17 23,7" fill={C.bright}/>
  <rect x="1" y="5" width="15" height="14" rx="2" stroke={C.bright} strokeWidth="1.8" fill="none"/>
</>;


const SocSvg = ({ d, s = 19 }: { d: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d={d} /></svg>
);
const FB = "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z";
const IG = "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.8 2h8.4A5.8 5.8 0 0122 7.8v8.4A5.8 5.8 0 0116.2 22H7.8A5.8 5.8 0 012 16.2V7.8A5.8 5.8 0 017.8 2z";
const WA = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */

  { day: "Monday",    time: "2:30 – 5:30 pm" },
  { day: "Tuesday",   time: "2:30 – 5:30 pm" },
  { day: "Wednesday", time: "9:00 am – 5:30 pm" },
  { day: "Thursday",  time: "9:00 am – 5:30 pm" },
  { day: "Friday",    time: "9:00 am – 5:30 pm" },
  { day: "Saturday",  time: "9:00 am – 5:30 pm" },
  { day: "Sunday",    time: "Closed",             closed: true },
];

/* ══════════════════════════════════════════
   useFadeIn
══════════════════════════════════════════ */
function useFadeIn(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => setVis(true), delay); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);
  return { ref, vis };
}

/* ══════════════════════════════════════════
   FOOTER COMPONENT
══════════════════════════════════════════ */
const Footer: React.FC = () => {
  const navigate = useNavigate();


  const { ref: r1, vis: v1 } = useFadeIn(0);
  const { ref: r2, vis: v2 } = useFadeIn(100);
  const { ref: r3, vis: v3 } = useFadeIn(200);
  const { ref: r4, vis: v4 } = useFadeIn(300);
  // const { ref: rCta, vis: vCta } = useFadeIn(0);

  const nav = (path: string) => { navigate(path); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {/* ── CTA strip — sits above the dark footer ── */}
      <div style={{ background: "#0d1f0d", paddingTop: 48, paddingBottom: 0 }}>
        
      </div>

      {/* ── Main footer ── */}
      <footer className="ft">
        {/* Animated background layers */}
        <div className="ft-grid" />
        <div className="ft-stripes" />
        <div className="ft-orb ft-orb-1" />
        <div className="ft-orb ft-orb-2" />
        <div className="ft-orb ft-orb-3" />
        <div className="ft-om">ॐ</div>
        <div className="ft-shimmer" />

        {/* ── Main content grid ── */}
        <div className="ft-inner">
          <div className="ft-top">

            {/* COL 1 — Brand */}
            <div
              ref={r1}
              className={`ft-brand ft-fade${v1 ? " vis" : ""}`}
            >
              <img
  className="ft-logo-img"
  src={logo}
  alt="OM Ayurveda Logo"
/>
              <div className="ft-socials">
                <a className="ft-soc ft-soc-fb" href="#" aria-label="Facebook"><SocSvg d={FB} /></a>
                <a className="ft-soc ft-soc-ig" href="#" aria-label="Instagram"><SocSvg d={IG} /></a>
                <a className="ft-soc ft-soc-wa" href="https://wa.me/61433401505" aria-label="WhatsApp"><SocSvg d={WA} /></a>
              </div>
            </div>

            {/* COL 2 — Quick Links */}
            <div
              ref={r2}
              className={`ft-fade${v2 ? " vis" : ""}`}
              style={{ transitionDelay: "0.1s" }}
            >
              <div className="ft-col-title">Quick Links</div>
              <nav className="ft-links">
                {[
                  { label: "Home",            path: "/"             },
                  { label: "About Us",        path: "/about"        },
                  { label: "Packages",        path: "/packages"     },
                  { label: "Testimonials",    path: "/testimonials" },
                  { label: "Contact Us",      path: "/contact"      },
                ].map(({ label, path }) => (
                  <a key={label} className="ft-link" onClick={() => nav(path)} href="#">
                    {label}
                  </a>
                ))}
              </nav>

              
              
            </div>

            {/* COL 3 — Contact */}
            <div
              ref={r3}
              className={`ft-fade${v3 ? " vis" : ""}`}
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="ft-col-title">Contact</div>
              <div className="ft-contacts">
                {[
                  {
                    icon: <I d={PIN_D} />,
                    label: "Address",
                    val: "2 Redmires Road\nAveley, WA – 6069",
                  },
                  {
                    icon: <I d={PHONE_D} />,
                    label: "Phone",
                    val: "0433 401 505",
                  },
                  {
                    icon: <I d={<><path d={MAIL_D}/><polyline points="22,6 12,13 2,6" stroke={C.bright} strokeWidth="1.8" fill="none"/></>} />,
                    label: "Email",
                    val: "omayurveda@hotmail.com",
                  },
                ].map(({ icon, label, val }) => (
                  <div className="ft-contact-row" key={label}>
                    <div className="ft-contact-icon">{icon}</div>
                    <div>
                      <div className="ft-contact-lbl">{label}</div>
                      <div className="ft-contact-val" style={{ whiteSpace: "pre-line" }}>{val}</div>
                    </div>
                  </div>
                ))}

                {/* Online consultation */}
                <div className="ft-contact-row" style={{ marginTop: 4 }}>
                  <div className="ft-contact-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      {CAM_D}
                    </svg>
                  </div>
                  <div>
                    <div className="ft-contact-lbl">Online</div>
                    <div className="ft-contact-val">Consultations available</div>
                  </div>
                </div>
              </div>
            </div>

            {/* COL 4 — Map */}
            <div
              ref={r4}
              className={`ft-map-col ft-fade${v4 ? " vis" : ""}`}
              style={{ transitionDelay: "0.3s" }}
            >
              <div className="ft-col-title">Find Us</div>
              <div className="ft-map-wrap">
                <iframe
                  title="OM Ayurveda Location"
                  src="https://maps.google.com/maps?q=2+Redmires+Road,+Aveley+WA+6069&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="ft-map-badge">
                  <I d={PIN_D} s={12} c={C.gold} />
                  Aveley, WA 6069
                </div>
              </div>
              <div className="ft-online">
                <div className="ft-online-dot" />
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {CAM_D}
                </svg>
                <span className="ft-online-txt">Online Consultations Available</span>
              </div>
            </div>

          </div>{/* /ft-top */}
        </div>{/* /ft-inner */}

        {/* ── Bottom bar ── */}
        <div className="ft-bottom">
          <p className="ft-copy">
            © {new Date().getFullYear()} <b>OM Ayurveda</b> · All Rights Reserved · Natural Health Care Centre, Perth WA
          </p>
          <div className="ft-bottom-links">
            {["Privacy Policy", "Terms of Use", "Sitemap"].map(l => (
              <a key={l} className="ft-bottom-link" href="#">{l}</a>
            ))}
          </div>
        </div>

      </footer>
    </>
  );
};

export default Footer;
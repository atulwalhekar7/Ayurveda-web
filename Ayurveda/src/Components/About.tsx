import React, { useEffect, useRef, useState } from "react";

// ─── Fade-in hook ──────────────────────────────────────────────────────────────
function useFadeIn(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// ─── About Page ───────────────────────────────────────────────────────────────
const About: React.FC = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400;1,600;1,700&family=Jost:wght@300;400;500;600&display=swap');

        :root {
          --dg: #0d2010;
          --dg2: #1a5c30;
          --dg3: #2e8b57;
          --mint: #7ecfa0;
          --light: #eaf5ee;
          --cream: #f7fbf7;
          --white: #ffffff;
          --text: #1c2e1c;
          --body: #3a4a3a;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: var(--white); }

        .about-page {
          font-family: 'Jost', sans-serif;
          color: var(--text);
          overflow-x: hidden;
        }

        /* ── Fade animation ── */
        .fade-up {
          opacity: 0;
          transform: translateY(44px);
          transition: opacity 0.85s cubic-bezier(0.16,1,0.3,1), transform 0.85s cubic-bezier(0.16,1,0.3,1);
        }
        .fade-up.visible { opacity: 1; transform: translateY(0); }
        .fade-up.delay-1 { transition-delay: 0.12s; }
        .fade-up.delay-2 { transition-delay: 0.24s; }
        .fade-up.delay-3 { transition-delay: 0.36s; }

        /* ── Section header ── */
        .section-eyebrow {
          font-family: 'Jost', sans-serif;
          font-weight: 600;
          font-size: 0.7rem;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--dg3);
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }
        .section-eyebrow::before {
          content: '';
          display: block;
          width: 28px;
          height: 1.5px;
          background: var(--dg3);
        }

        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 700;
          font-size: clamp(2.2rem, 5vw, 3.4rem);
          color: var(--dg);
          line-height: 1.08;
          margin-bottom: 10px;
        }
        .section-title em { font-style: italic; color: var(--dg3); }

        .title-bar {
          width: 52px;
          height: 3px;
          background: linear-gradient(to right, var(--dg), var(--dg3));
          border-radius: 2px;
          margin-bottom: 28px;
        }

        .body-text {
          font-family: 'Jost', sans-serif;
          font-size: 1rem;
          line-height: 1.9;
          color: var(--body);
          margin-bottom: 20px;
        }

        /* ── ABOUT OM AYURVEDA ─────────────────────────────────────── */
        .about-section {
          padding: 100px 0;
          background: var(--white);
        }
        .container {
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr; gap: 48px; }
        }

        /* Image mosaic */
        .mosaic {
          position: relative;
          height: 500px;
        }
        .mosaic-img-1 {
          position: absolute;
          top: 0; left: 0;
          width: 65%;
          height: 62%;
          border-radius: 16px;
          object-fit: cover;
          box-shadow: 0 16px 48px rgba(13,32,16,0.28);
          z-index: 2;
        }
        .mosaic-img-2 {
          position: absolute;
          bottom: 0; right: 0;
          width: 60%;
          height: 56%;
          border-radius: 16px;
          object-fit: cover;
          box-shadow: 0 16px 48px rgba(13,32,16,0.32);
          z-index: 3;
          border: 5px solid var(--white);
        }
        .mosaic-blob {
          position: absolute;
          bottom: 10%;
          left: 5%;
          width: 42%;
          height: 32%;
          border-radius: 50%;
          background: var(--light);
          z-index: 1;
          filter: blur(28px);
          opacity: 0.85;
        }
        .mosaic-badge {
          position: absolute;
          top: 38%;
          left: 56%;
          transform: translate(-50%, -50%);
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--dg3), var(--dg2));
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
          box-shadow: 0 6px 24px rgba(13,32,16,0.4);
          font-size: 1.6rem;
          color: var(--white);
          font-family: serif;
        }

        /* Pills */
        .pills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 32px;
        }
        .pill {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 8px 18px;
          border-radius: 30px;
          border: 1.5px solid rgba(46,139,87,0.35);
          background: var(--light);
          color: var(--dg);
          font-family: 'Jost', sans-serif;
          font-weight: 600;
          font-size: 0.78rem;
          letter-spacing: 0.04em;
        }
        .pill-icon { font-size: 0.9rem; }

        .btn-primary {
          display: inline-block;
          font-family: 'Jost', sans-serif;
          font-weight: 600;
          font-size: 0.78rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--white);
          background: linear-gradient(135deg, var(--dg2), var(--dg));
          border: none;
          padding: 14px 38px;
          cursor: pointer;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
          transition: filter 0.3s, transform 0.3s;
          box-shadow: 0 6px 24px rgba(13,32,16,0.35);
        }
        .btn-primary:hover { filter: brightness(1.18); transform: translateY(-2px); }

        /* Quote cards */
        .quote-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-top: 56px;
        }
        @media (max-width: 700px) { .quote-grid { grid-template-columns: 1fr; } }

        .quote-card {
          padding: 32px;
          border-radius: 16px;
          border: 1px solid rgba(46,139,87,0.18);
          background: var(--cream);
          position: relative;
          overflow: hidden;
        }
        .quote-card::before {
          content: '"';
          position: absolute;
          top: 8px; right: 18px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 7rem;
          color: rgba(46,139,87,0.08);
          line-height: 1;
        }
        .quote-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 700;
          font-size: 1.4rem;
          color: var(--dg);
          margin-bottom: 12px;
        }
        .quote-card-text {
          font-family: 'Jost', sans-serif;
          font-size: 0.92rem;
          line-height: 1.85;
          color: var(--body);
        }

        .welcome-line {
          text-align: center;
          margin-top: 52px;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.1rem, 2.5vw, 1.5rem);
          font-weight: 600;
          font-style: italic;
          color: var(--dg3);
          letter-spacing: 0.04em;
        }

        /* ── LEAF DIVIDER ── */
        .leaf-divider {
          display: flex;
          align-items: center;
          gap: 16px;
          margin: 52px 0 0;
        }
        .leaf-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(46,139,87,0.35));
        }
        .leaf-line.rev { background: linear-gradient(to left, transparent, rgba(46,139,87,0.35)); }
        .leaf-icon { font-size: 1.3rem; }

        /* ── SECTION DIVIDER ── */
        .section-divider {
          border: none;
          border-top: 1px solid rgba(46,139,87,0.15);
        }

        /* ── PRACTITIONER SECTION ── */
        .practitioner-section {
          padding: 100px 0;
          background: var(--light);
          position: relative;
          overflow: hidden;
        }
        .practitioner-section::before {
          content: 'ॐ';
          position: absolute;
          right: -40px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 28rem;
          font-family: serif;
          color: rgba(46,139,87,0.04);
          pointer-events: none;
          line-height: 1;
        }
        .practitioner-grid {
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 72px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .practitioner-grid { grid-template-columns: 1fr; gap: 48px; }
        }

        .practitioner-img-wrap {
          position: relative;
        }
        .practitioner-img {
          width: 100%;
          height: 480px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(13,32,16,0.28);
        }
        .practitioner-badge {
          position: absolute;
          bottom: -16px;
          right: -16px;
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--dg3), var(--dg2));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.9rem;
          color: var(--white);
          font-family: serif;
          box-shadow: 0 8px 24px rgba(13,32,16,0.4);
          border: 4px solid var(--white);
          z-index: 4;
        }
        .practitioner-tag {
          position: absolute;
          top: 24px;
          left: -20px;
          background: var(--white);
          padding: 12px 20px;
          border-radius: 10px;
          box-shadow: 0 8px 32px rgba(13,32,16,0.18);
          z-index: 4;
        }
        .practitioner-tag-name {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--dg);
        }
        .practitioner-tag-role {
          font-family: 'Jost', sans-serif;
          font-size: 0.72rem;
          color: var(--dg3);
          letter-spacing: 0.08em;
          font-weight: 500;
        }

        /* ── AYURVEDA SECTION ── */
        .ayurveda-section {
          padding: 100px 0;
          background: var(--white);
        }
        .ayurveda-grid {
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: 80px;
          align-items: flex-start;
        }
        @media (max-width: 900px) {
          .ayurveda-grid { grid-template-columns: 1fr; gap: 48px; }
        }

        /* Shloka box */
        .shloka-box {
          margin: 32px 0;
          padding: 28px 28px 28px 32px;
          border-left: 4px solid var(--dg);
          background: var(--light);
          border-radius: 0 16px 16px 0;
        }
        .shloka-text {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--dg);
          font-style: italic;
          letter-spacing: 0.04em;
          line-height: 1.6;
          margin-bottom: 14px;
        }
        .shloka-label {
          font-family: 'Jost', sans-serif;
          font-weight: 600;
          font-size: 0.78rem;
          color: var(--dg3);
          margin-bottom: 10px;
          letter-spacing: 0.05em;
        }
        .shloka-point {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 6px;
        }
        .shloka-dot {
          color: var(--dg3);
          font-size: 1.1rem;
          line-height: 1.7;
          flex-shrink: 0;
        }
        .shloka-point-text {
          font-family: 'Jost', sans-serif;
          font-size: 0.92rem;
          color: var(--body);
          line-height: 1.8;
        }

        /* Right column sticky */
        .ayurveda-right {
          position: sticky;
          top: 100px;
        }

        /* Ayurveda mosaic */
        .ay-mosaic {
          position: relative;
          height: 420px;
          margin-bottom: 28px;
        }
        .ay-mosaic-img-1 {
          position: absolute;
          top: 0; right: 0;
          width: 65%;
          height: 62%;
          border-radius: 16px;
          object-fit: cover;
          box-shadow: 0 16px 48px rgba(13,32,16,0.28);
          z-index: 2;
        }
        .ay-mosaic-img-2 {
          position: absolute;
          bottom: 0; left: 0;
          width: 60%;
          height: 56%;
          border-radius: 16px;
          object-fit: cover;
          box-shadow: 0 16px 48px rgba(13,32,16,0.28);
          z-index: 3;
          border: 5px solid var(--white);
        }
        .ay-mosaic-badge {
          position: absolute;
          top: 40%;
          right: 56%;
          transform: translate(50%, -50%);
          width: 60px; height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--dg3), var(--dg2));
          display: flex; align-items: center; justify-content: center;
          z-index: 5;
          box-shadow: 0 6px 24px rgba(13,32,16,0.4);
          font-size: 1.5rem; color: var(--white); font-family: serif;
        }

        /* Stats */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        .stat-card {
          padding: 20px 12px;
          border-radius: 12px;
          background: var(--light);
          text-align: center;
          border: 1px solid rgba(46,139,87,0.18);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .stat-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(13,32,16,0.14); }
        .stat-value {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 700;
          font-size: 1.9rem;
          color: var(--dg);
          line-height: 1;
          margin-bottom: 6px;
        }
        .stat-label {
          font-family: 'Jost', sans-serif;
          font-size: 0.68rem;
          color: var(--dg3);
          font-weight: 500;
          letter-spacing: 0.06em;
        }
      `}</style>

      <div className="about-page">

        {/* ══════════════════════════════════════
            SECTION 1 — About OM Ayurveda
        ══════════════════════════════════════ */}
        <AboutOmSection />

        <hr className="section-divider" />

        {/* ══════════════════════════════════════
            SECTION 2 — Practitioner
        ══════════════════════════════════════ */}
        <PractitionerSection />

        <hr className="section-divider" />

        {/* ══════════════════════════════════════
            SECTION 3 — About Ayurveda
        ══════════════════════════════════════ */}
        <AyurvedaSection />
      </div>
    </>
  );
};


// ─── Section Components ────────────────────────────────────────────────────────

const AboutOmSection: React.FC = () => {
  const { ref, visible } = useFadeIn();
  return (
    <section className="about-section">
      <div className="container">
        <div className={`about-grid fade-up ${visible ? "visible" : ""}`} ref={ref}>

          {/* Left — Image Mosaic */}
          <div className="mosaic">
            <div className="mosaic-blob" />
            <img
              className="mosaic-img-1"
              src="https://images.unsplash.com/photo-1591971788241-0d58d58c90b5?w=800&q=80"
              alt="Ayurvedic herbs and oils"
            />
            <img
              className="mosaic-img-2"
              src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80"
              alt="Ayurvedic massage treatment"
            />
            <div className="mosaic-badge">ॐ</div>
          </div>

          {/* Right — Content */}
          <div>
            <p className="section-eyebrow">Who We Are</p>
            <h2 className="section-title">About <em>OM</em> Ayurveda</h2>
            <div className="title-bar" />

            <p className="body-text">
              OM Ayurveda has a <strong>Holistic approach</strong> which takes the entire or "whole" person into account when finding the correct path for one's wellness. We believe that in order to heal a natural body, the body must be treated with natural forms of medicine. In other words, the <em>whole</em> being needs to be kept balanced by using <em>whole</em> herbs and <em>whole</em> natural ingredients.
            </p>
            <p className="body-text">
              At OM Ayurveda we carefully examine each individual as a unique person and provide person-specific therapies for health maintenance and wellness. Whether it is diet or lifestyle changes, herbal medicine, Panchakarma / detoxification therapies, Pranayama/Breathing Exercise or yoga.
            </p>
            <p className="body-text">
              This can be any one or combination of individually planned treatments — our aim is to give you information and choices when it comes to your all-natural healthcare. Many people feel that alternative medicine is something that is new. Actually, it's very ancient. By going back to the old ways of healing, we can make use of the information and implement it in today's modern world.
            </p>

            <div className="pills">
              {[
                { icon: "🌿", label: "Preventative Health" },
                { icon: "💚", label: "Holistic Way" },
                { icon: "✨", label: "Natural Healing" },
              ].map(({ icon, label }) => (
                <div className="pill" key={label}>
                  <span className="pill-icon">{icon}</span>
                  {label}
                </div>
              ))}
            </div>

           
          </div>
        </div>

       

      </div>
    </section>
  );
};


const QuoteCards: React.FC = () => {
  const { ref, visible } = useFadeIn();
  return (
    <div className={`quote-grid fade-up ${visible ? "visible" : ""}`} ref={ref}>
      {[
        {
          title: "Preventative Health",
          text: "We believe in all-natural preventative health maintenance. Minimizing your exposure to toxic chemicals is the key to staying healthy. We provide all medicines made from natural sources — treating you in a Holistic Way.",
        },
        {
          title: "Your Choice",
          text: "It's all about choice when it comes to your own method of healing and staying healthy. We believe that by choosing all-natural methods whenever possible... you're choosing wisely.",
        },
      ].map(({ title, text }) => (
        <div className="quote-card" key={title}>
          <div className="quote-card-title">{title}</div>
          <p className="quote-card-text">{text}</p>
        </div>
      ))}
    </div>
  );
};


const PractitionerSection: React.FC = () => {
  const { ref, visible } = useFadeIn();
  return (
    <section className="practitioner-section">
      <div className="container">
        <div className={`practitioner-grid fade-up ${visible ? "visible" : ""}`} ref={ref}>

          {/* Left — Image */}
          <div className="practitioner-img-wrap">
            <img
              className="practitioner-img"
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
              alt="Ayurveda Practitioner"
            />
            <div className="practitioner-tag">
              <div className="practitioner-tag-name">Dr. Practitioner</div>
              <div className="practitioner-tag-role">Ayurveda Specialist</div>
            </div>
            <div className="practitioner-badge">ॐ</div>
          </div>

          {/* Right — Content */}
          <div>
            <p className="section-eyebrow">Meet Our Expert</p>
            <h2 className="section-title">About <em>Practitioner</em></h2>
            <div className="title-bar" />

            <p className="body-text">
              Our practitioner brings decades of expertise in Ayurvedic healing. With a deep understanding of Tridosha theory and a compassionate approach, she provides individualized care tailored to each patient's unique constitution and health goals.
            </p>
            <p className="body-text">
              Trained in traditional Ayurvedic medicine, she specializes in Panchakarma therapies, herbal formulations, dietary planning, and mind-body wellness programs.
            </p>

            <div className="pills" style={{ marginTop: 8 }}>
              {[
                { icon: "🎓", label: "Certified Specialist" },
                { icon: "🌿", label: "Panchakarma Expert" },
                { icon: "🧘", label: "Mind-Body Wellness" },
              ].map(({ icon, label }) => (
                <div className="pill" key={label}>
                  <span className="pill-icon">{icon}</span>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const AyurvedaSection: React.FC = () => {
  const { ref, visible } = useFadeIn();
  return (
    <section className="ayurveda-section">
      <div className="container">
        <div className={`ayurveda-grid fade-up ${visible ? "visible" : ""}`} ref={ref}>

          {/* Left — Content */}
        

          {/* Right — Sticky images + stats */}
        
         
        </div>
      </div>
    </section>
  );
};

export default About;
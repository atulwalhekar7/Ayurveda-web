import { useState, useEffect } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1600&q=80",
    heading: "Trusted for Centuries",
    subheading: "Healing for Generations",
    description:
      "Ancient wisdom meets modern wellness. Experience the transformative power of authentic Ayurvedic healing.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=80",
    heading: "Nature's Sacred Balance",
    subheading: "Restore. Rejuvenate. Renew.",
    description:
      "Holistic therapies rooted in 5,000 years of Vedic tradition, crafted for your unique body constitution.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1600&q=80",
    heading: "The Art of Ayurveda",
    subheading: "Where Healing Begins Within",
    description:
      "Discover personalised treatments that harmonise mind, body, and spirit for lasting vitality.",
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length, "right");
    }, 5500);
    return () => clearInterval(timer);
  }, [current]);

  const goTo = (index: number, dir: "left" | "right") => {
    if (animating || index === current) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 700);
  };

  const prev = () => goTo((current - 1 + slides.length) % slides.length, "left");
  const next = () => goTo((current + 1) % slides.length, "right");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400;1,600&family=Jost:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .banner-root {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 520px;
          overflow: hidden;
          font-family: 'Jost', sans-serif;
          background: #0d1f12;
        }

        /* Slide images */
        .slide {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: opacity 0.7s ease, transform 1.2s ease;
          transform: scale(1.04);
        }
        .slide.active {
          opacity: 1;
          transform: scale(1);
          z-index: 1;
        }
        .slide.inactive {
          opacity: 0;
          z-index: 0;
        }
        .slide.exit-left {
          opacity: 0;
          transform: scale(1.08) translateX(-3%);
        }
        .slide.exit-right {
          opacity: 0;
          transform: scale(1.08) translateX(3%);
        }

        /* Overlay layers — deep forest green tint */
        .slide-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            105deg,
            rgba(5, 28, 13, 0.82) 0%,
            rgba(10, 40, 20, 0.52) 50%,
            rgba(3, 20, 10, 0.78) 100%
          );
          z-index: 2;
        }

        /* Decorative botanical lines */
        .deco-line {
          position: absolute;
          z-index: 3;
          pointer-events: none;
        }
        .deco-line-left {
          left: 3%;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 45%;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.35), transparent);
        }
        .deco-line-right {
          right: 3%;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 45%;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.35), transparent);
        }
        .deco-om {
          position: absolute;
          top: 16px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          font-size: 1.1rem;
          letter-spacing: 0.35em;
          color: rgba(255,255,255,0.85);
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          text-transform: uppercase;
          white-space: nowrap;
        }

        /* Content */
        .banner-content {
          position: absolute;
          inset: 0;
          z-index: 5;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 1.5rem;
        }

        .brand-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 1.6rem;
          opacity: 0;
          animation: fadeUp 0.8s ease 0.2s forwards;
        }
        .badge-line {
          width: 40px;
          height: 1px;
          background: rgba(255,255,255,0.5);
        }
        .badge-text {
          font-family: 'Jost', sans-serif;
          font-weight: 400;
          font-size: 0.72rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.75);
        }

        .slide-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.8rem, 7vw, 5.8rem);
          font-weight: 300;
          color: #ffffff;
          line-height: 1.08;
          letter-spacing: -0.01em;
          margin-bottom: 0.5rem;
          opacity: 0;
          animation: fadeUp 0.9s ease 0.35s forwards;
          text-shadow: 0 4px 40px rgba(0,0,0,0.5);
        }
        .slide-heading em {
          font-style: italic;
          color: #7ecfa0;
        }

        .divider-ornament {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 1rem auto 1rem;
          opacity: 0;
          animation: fadeUp 0.8s ease 0.5s forwards;
        }
        .orn-line {
          width: 60px;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.5));
        }
        .orn-line.rev {
          background: linear-gradient(to left, transparent, rgba(255,255,255,0.5));
        }
        .orn-leaf {
          font-size: 1rem;
          color: rgba(126, 207, 160, 0.9);
        }

        .slide-subheading {
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          font-size: clamp(1rem, 2.5vw, 1.45rem);
          color: rgba(255,255,255,0.78);
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 1.4rem;
          opacity: 0;
          animation: fadeUp 0.8s ease 0.6s forwards;
        }

        .slide-desc {
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          font-size: clamp(0.82rem, 1.5vw, 1rem);
          color: rgba(220, 240, 228, 0.72);
          max-width: 540px;
          line-height: 1.8;
          letter-spacing: 0.04em;
          margin-bottom: 2.4rem;
          opacity: 0;
          animation: fadeUp 0.8s ease 0.75s forwards;
        }

        .cta-group {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
          opacity: 0;
          animation: fadeUp 0.8s ease 0.9s forwards;
        }
        .btn-primary {
          padding: 14px 38px;
          background: linear-gradient(135deg, #1a5c30 0%, #2e8b57 50%, #1a5c30 100%);
          color: #ffffff;
          font-family: 'Jost', sans-serif;
          font-weight: 500;
          font-size: 0.78rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
          transition: filter 0.3s ease, transform 0.3s ease;
          box-shadow: 0 4px 20px rgba(30, 90, 50, 0.45);
        }
        .btn-primary:hover {
          filter: brightness(1.18);
          transform: translateY(-2px);
        }
        .btn-secondary {
          padding: 13px 38px;
          background: transparent;
          color: rgba(255,255,255,0.85);
          font-family: 'Jost', sans-serif;
          font-weight: 400;
          font-size: 0.78rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          border: 1px solid rgba(255,255,255,0.38);
          cursor: pointer;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
          transition: background 0.3s ease, color 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
        }
        .btn-secondary:hover {
          background: rgba(255,255,255,0.1);
          color: #ffffff;
          border-color: rgba(255,255,255,0.7);
          transform: translateY(-2px);
        }

        /* Key re-trigger animation on slide change */
        .content-key-enter .brand-badge,
        .content-key-enter .slide-heading,
        .content-key-enter .divider-ornament,
        .content-key-enter .slide-subheading,
        .content-key-enter .slide-desc,
        .content-key-enter .cta-group {
          opacity: 0;
          animation-name: fadeUp;
          animation-fill-mode: forwards;
          animation-timing-function: ease;
        }
        .content-key-enter .brand-badge    { animation-duration: 0.8s; animation-delay: 0.2s; }
        .content-key-enter .slide-heading  { animation-duration: 0.9s; animation-delay: 0.35s; }
        .content-key-enter .divider-ornament{ animation-duration: 0.8s; animation-delay: 0.5s; }
        .content-key-enter .slide-subheading{ animation-duration: 0.8s; animation-delay: 0.6s; }
        .content-key-enter .slide-desc     { animation-duration: 0.8s; animation-delay: 0.75s; }
        .content-key-enter .cta-group      { animation-duration: 0.8s; animation-delay: 0.9s; }

        /* Nav arrows */
        .nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 48px;
          height: 48px;
          border: 1px solid rgba(255,255,255,0.3);
          background: rgba(5, 28, 13, 0.5);
          color: rgba(255,255,255,0.8);
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.3s, border-color 0.3s, color 0.3s;
          backdrop-filter: blur(6px);
        }
        .nav-btn:hover {
          background: rgba(46, 139, 87, 0.4);
          border-color: rgba(255,255,255,0.7);
          color: #ffffff;
        }
        .nav-btn.left { left: 2.5%; }
        .nav-btn.right { right: 2.5%; }

        /* Dots */
        .dots {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255,255,255,0.3);
          cursor: pointer;
          transition: background 0.3s, transform 0.3s;
          border: none;
        }
        .dot.active {
          background: rgba(255,255,255,0.9);
          transform: scale(1.5);
        }

        /* Progress bar */
        .progress-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          background: linear-gradient(90deg, #2e8b57, #7ecfa0);
          z-index: 10;
          animation: progress 5.5s linear infinite;
          transform-origin: left;
        }
        @keyframes progress {
          from { width: 0%; }
          to   { width: 100%; }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Bottom left scroll hint */
        .scroll-hint {
          position: absolute;
          bottom: 24px;
          left: 3.5%;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 10px;
          color: rgba(255,255,255,0.4);
          font-family: 'Jost', sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }
        .scroll-hint-line {
          width: 32px;
          height: 1px;
          background: rgba(255,255,255,0.3);
        }

        /* Slide count */
        .slide-count {
          position: absolute;
          bottom: 24px;
          right: 3.5%;
          z-index: 10;
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.1em;
        }
        .slide-count span {
          color: rgba(255,255,255,0.85);
          font-size: 1.1rem;
        }
      `}</style>

      <div className="banner-root">
        {/* Slides */}
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`slide ${
              i === current
                ? "active"
                : animating
                ? direction === "right"
                  ? "exit-left"
                  : "exit-right"
                : "inactive"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}

        {/* Overlay */}
        <div className="slide-overlay" />

        {/* Deco elements */}
        <div className="deco-line deco-line-left" />
        <div className="deco-line deco-line-right" />
        <div className="deco-om">ॐ Om Ayurveda</div>

        {/* Main content */}
        <div className="banner-content">
          <div
            key={current}
            className={`content-key-enter`}
            style={{ display: "contents" }}
          >
            <div className="brand-badge">
              <span className="badge-line" />
              <span className="badge-text">Est. since ancient times</span>
              <span className="badge-line" />
            </div>

            <h1 className="slide-heading">
              {slides[current].heading.split(" ").map((w, i) =>
                i % 3 === 1 ? <em key={i}> {w} </em> : ` ${w}`
              )}
            </h1>

            <div className="divider-ornament">
              <span className="orn-line" />
              <span className="orn-leaf">✦</span>
              <span className="orn-line rev" />
            </div>

            <p className="slide-subheading">{slides[current].subheading}</p>
            <p className="slide-desc">{slides[current].description}</p>

            <div className="cta-group">
              <button className="btn-primary">Book a Consultation</button>
              <button className="btn-secondary">Explore Therapies</button>
            </div>
          </div>
        </div>

        {/* Nav arrows */}
        <button className="nav-btn left" onClick={prev}>&#8592;</button>
        <button className="nav-btn right" onClick={next}>&#8594;</button>

        {/* Dots */}
        <div className="dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === current ? "active" : ""}`}
              onClick={() => goTo(i, i > current ? "right" : "left")}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="progress-bar" key={current} />

        {/* Bottom hints */}
        <div className="scroll-hint">
          <span className="scroll-hint-line" />
          Scroll down
        </div>
        <div className="slide-count">
          <span>{String(current + 1).padStart(2, "0")}</span> / {String(slides.length).padStart(2, "0")}
        </div>
      </div>
    </>
  );
}
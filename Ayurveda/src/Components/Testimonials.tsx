import React, { useState, useRef, useEffect } from "react";
import { Box, Container, Typography, Button, Chip } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import StarIcon from "@mui/icons-material/Star";

const theme = createTheme({
  palette: { primary: { main: "#1B5E20" }, secondary: { main: "#2E7D32" } },
  typography: { fontFamily: "'Jost', sans-serif" },
});

const DG = "#1B5E20";
const MG = "#2E7D32";
const AG = "#4CAF50";
const LG = "#E8F5E9";
const WH = "#FFFFFF";
const CREAM = "#F4FAF4";
const TEXT = "#1c2e1c";
const MUTED = "#4a6349";
const MAPS_URL =
  "https://www.google.com/maps/place/OM+Ayurveda+-+A+Holistic+Healthcare+Centre";

const testimonials = [
  {
    id: 1,
    name: "Ravinder Kaur",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "I had severe pain in my hands and couldn't move properly. After treatment here, I feel much better. The therapies and medicines really worked. Highly recommend for arthritis problems.",
    tag: "Arthritis",
    stars: 5,
  },
  {
    id: 2,
    name: "Kajol Arora",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Amazing experience! The treatment plan improved my immunity and overall health. The clinic environment is calm and very relaxing. Truly holistic care.",
    tag: "Immunity",
    stars: 5,
  },
  {
    id: 3,
    name: "Dhwani Shah",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    text: "Very knowledgeable doctor. My skin issues improved from the root. The advice is always practical and effective. Highly satisfied with the service.",
    tag: "Skin Health",
    stars: 5,
  },
  {
    id: 4,
    name: "Arian Kazemi",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Holistic approach and very helpful. I saw improvement even after one session. Highly recommended.",
    tag: "Holistic Care",
    stars: 5,
  },
  {
    id: 5,
    name: "Jalpa Patel",
    image: "https://randomuser.me/api/portraits/women/25.jpg",
    text: "Excellent service. I recovered quickly and felt better within days. Very caring and attentive treatment.",
    tag: "Recovery",
    stars: 5,
  },
  {
    id: 6,
    name: "Mayank",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "Digestive issues improved significantly. Natural treatment worked better than expected. Felt relief from heartburn.",
    tag: "Digestion",
    stars: 5,
  },
];

// const avatarColors = [...] // unused


function useFadeIn(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => setVis(true), delay);
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);
  return { ref, vis };
}

// Animated Star Rating
const StarRating: React.FC<{ count: number; hovered: boolean }> = ({ count, hovered }) => (
  <Box sx={{ display: "flex", gap: 0.25 }}>
    {Array.from({ length: count }).map((_, i) => (
      <StarIcon
        key={i}
        sx={{
          fontSize: 14,
          color: "#F59E0B",
          transition: `transform 0.22s cubic-bezier(0.34,1.56,0.64,1) ${i * 55}ms`,
          transform: hovered ? "scale(1.45)" : "scale(1)",
        }}
      />
    ))}
  </Box>
);

// Testimonial Card
const TestimonialCard: React.FC<{
  t: (typeof testimonials)[0];
  index: number;
}> = ({ t, index }) => {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { ref, vis } = useFadeIn((index % 2) * 90);
  const isLong = t.text.length > 200;
  const displayText = !expanded && isLong ? t.text.slice(0, 200) + "..." : t.text;

  const handleCardClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("button")) return;
    window.open(MAPS_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <Box
      ref={ref}
      onClick={handleCardClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        opacity: vis ? 1 : 0,
        transform: vis
          ? hovered
            ? "translateY(-8px) scale(1.018)"
            : "translateY(0) scale(1)"
          : "translateY(32px)",
        transition: `
          opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${(index % 2) * 90}ms,
          transform 0.42s cubic-bezier(0.22,1,0.36,1),
          box-shadow 0.42s cubic-bezier(0.22,1,0.36,1),
          border-color 0.3s ease
        `,
        background: WH,
        borderRadius: "20px",
        border: `1.5px solid ${hovered ? "transparent" : `${AG}22`}`,
        boxShadow: hovered
          ? `0 24px 60px ${DG}2e, 0 0 0 2px ${AG}`
          : `0 2px 20px ${DG}0e`,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: "20px",
          background: `linear-gradient(135deg, ${AG}18 0%, transparent 60%)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.38s ease",
          pointerEvents: "none",
          zIndex: 1,
        },
      }}
    >
      {/* Animated top accent bar */}
      <Box
        sx={{
          height: hovered ? 4 : 3,
          background: `linear-gradient(to right, ${DG}, ${AG})`,
          transition: "height 0.3s ease",
          position: "relative",
          zIndex: 2,
        }}
      />

      <Box sx={{ p: 3, flex: 1, display: "flex", flexDirection: "column", gap: 2, position: "relative", zIndex: 2 }}>
        {/* Quote icon + tag */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <FormatQuoteIcon
            sx={{
              fontSize: 36,
              color: hovered ? `${AG}bb` : `${AG}55`,
              mt: -0.5,
              ml: -0.5,
              transition: "color 0.3s ease, transform 0.4s cubic-bezier(0.22,1,0.36,1)",
              transform: hovered ? "scale(1.18) rotate(-6deg)" : "scale(1) rotate(0deg)",
            }}
          />
          <Chip
            label={t.tag}
            size="small"
            sx={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 600,
              fontSize: 10,
              letterSpacing: 0.5,
              background: hovered ? "#C8E6C9" : LG,
              color: hovered ? DG : MG,
              border: `1px solid ${AG}44`,
              height: 22,
              transition: "background 0.3s ease, color 0.3s ease",
            }}
          />
        </Box>

        {/* Review text */}
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontFamily: "'Jost', sans-serif", fontSize: 14, lineHeight: 1.8, color: TEXT }}>
            {displayText}
          </Typography>
          {isLong && (
            <Button
              onClick={() => setExpanded(!expanded)}
              size="small"
              disableRipple
              sx={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 600,
                fontSize: 12,
                color: MG,
                textTransform: "none",
                p: 0,
                mt: 0.5,
                minWidth: 0,
                "&:hover": { background: "transparent", color: DG },
              }}
            >
              {expanded ? "Show less ↑" : "Read more ↓"}
            </Button>
          )}
        </Box>

        {/* Divider */}
        <Box
          sx={{
            height: "1px",
            background: hovered ? `${AG}44` : `${AG}22`,
            transition: "background 0.3s ease",
          }}
        />

        {/* Author row */}
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box
              sx={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                overflow: "hidden",
                flexShrink: 0,
                border: `2px solid ${hovered ? AG : "transparent"}`,
                boxShadow: hovered ? `0 0 0 4px ${AG}28` : `0 2px 8px ${DG}22`,
                transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.4s cubic-bezier(0.22,1,0.36,1)",
                transform: hovered ? "scale(1.1)" : "scale(1)",
              }}
            >
              <img
                src={t.image}
                alt={t.name}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 700,
                  fontSize: 16,
                  color: hovered ? "#0a3d0a" : DG,
                  lineHeight: 1.2,
                  transition: "color 0.25s ease",
                }}
              >
                {t.name}
              </Typography>
              <Typography sx={{ fontFamily: "'Jost', sans-serif", fontSize: 11, color: MUTED, letterSpacing: 0.3 }}>
                Verified Patient
              </Typography>
            </Box>
          </Box>
          <StarRating count={t.stars} hovered={hovered} />
        </Box>

        {/* Maps hint — fades in on hover */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 0.75,
            mt: 0.5,
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(6px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
            pointerEvents: "none",
          }}
        >
          <svg width="11" height="13" viewBox="0 0 11 13" fill="none">
            <path
              d="M5.5 0C3.015 0 1 2.015 1 4.5c0 3.375 4.5 8.5 4.5 8.5S10 7.875 10 4.5C10 2.015 7.985 0 5.5 0zm0 6.125A1.625 1.625 0 1 1 5.5 2.875a1.625 1.625 0 0 1 0 3.25z"
              fill={MG}
            />
          </svg>
          <Typography
            sx={{
              fontFamily: "'Jost', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              color: MG,
              letterSpacing: 0.4,
            }}
          >
            View on Google Maps ↗
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

// Main Page
const OMAyurvedaTestimonialsPage: React.FC = () => {
  const { ref: heroRef, vis: heroVis } = useFadeIn(0);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;0,800;1,600;1,700&family=Jost:wght@400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: ${CREAM}; }
      `}</style>

      <Box sx={{ background: CREAM, minHeight: "100vh", pb: 12 }}>

        {/* Hero */}
        <Box
          sx={{
            background: `linear-gradient(150deg, ${DG} 0%, ${MG} 55%, #3d7035 100%)`,
            py: { xs: 8, md: 11 },
            px: 2,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {[
            { s: 300, t: "-12%", l: "-6%", d: "9s", dl: "0s" },
            { s: 180, t: "60%", l: "84%", d: "7s", dl: "2s" },
            { s: 130, t: "30%", l: "50%", d: "11s", dl: "1.5s" },
          ].map((c, i) => (
            <Box
              key={i}
              sx={{
                position: "absolute", width: c.s, height: c.s,
                borderRadius: "50%", background: "#ffffff07",
                top: c.t, left: c.l,
                animation: `floatBlob${i} ${c.d} ease-in-out ${c.dl} infinite`,
                [`@keyframes floatBlob${i}`]: {
                  "0%,100%": { transform: "translateY(0) scale(1)" },
                  "50%": { transform: "translateY(-16px) scale(1.05)" },
                },
              }}
            />
          ))}

          <Typography
            sx={{
              position: "absolute", right: { xs: -12, md: 72 }, top: "50%",
              transform: "translateY(-50%)", fontSize: { xs: 180, md: 260 },
              fontFamily: "serif", color: "#ffffff07", lineHeight: 1,
              userSelect: "none", pointerEvents: "none",
              animation: "omSpin 50s linear infinite",
              "@keyframes omSpin": {
                from: { transform: "translateY(-50%) rotate(0deg)" },
                to: { transform: "translateY(-50%) rotate(360deg)" },
              },
            }}
          >
            ॐ
          </Typography>

          <Container maxWidth="md">
            <Box
              ref={heroRef}
              sx={{
                opacity: heroVis ? 1 : 0,
                transform: heroVis ? "translateY(0)" : "translateY(28px)",
                transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Jost', sans-serif", fontWeight: 600,
                  fontSize: 12, letterSpacing: 5, color: AG,
                  textTransform: "uppercase", mb: 2,
                  animation: heroVis ? "fadeUp 0.6s ease 0.1s both" : "none",
                  "@keyframes fadeUp": {
                    from: { opacity: 0, transform: "translateY(14px)" },
                    to: { opacity: 1, transform: "translateY(0)" },
                  },
                }}
              >
                Patient Stories
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Cormorant Garamond', serif", fontWeight: 700,
                  fontSize: { xs: 42, md: 64 }, color: WH,
                  lineHeight: 1.05, mb: 2.5,
                  animation: heroVis ? "fadeUp 0.7s ease 0.2s both" : "none",
                }}
              >
                Testimonials
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: { xs: 15, md: 17 }, color: "#ffffffbb",
                  maxWidth: 540, mx: "auto", lineHeight: 1.8, mb: 5,
                  animation: heroVis ? "fadeUp 0.7s ease 0.3s both" : "none",
                }}
              >
                Real experiences from our patients. Every story is a journey toward holistic health and natural healing.
              </Typography>
              <Box
                sx={{
                  display: "flex", justifyContent: "center",
                  gap: { xs: 4, md: 8 }, flexWrap: "wrap",
                  animation: heroVis ? "fadeUp 0.7s ease 0.4s both" : "none",
                }}
              />
            </Box>
          </Container>
        </Box>

        {/* Cards Grid */}
        <Container maxWidth="lg" sx={{ mt: 7 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 3,
            }}
          >
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} t={t} index={i} />
            ))}
          </Box>
        </Container>

        {/* Bottom CTA */}
        <Container maxWidth="sm" sx={{ mt: 9 }}>
          <Box
            sx={{
              background: `linear-gradient(135deg, ${DG}, ${MG})`,
              borderRadius: "22px",
              px: { xs: 4, md: 6 }, py: 6,
              textAlign: "center",
              position: "relative", overflow: "hidden",
            }}
          >
            <Typography
              sx={{
                position: "absolute", right: 14, top: "50%",
                transform: "translateY(-50%)",
                fontSize: 140, fontFamily: "serif",
                color: "#ffffff07", lineHeight: 1, userSelect: "none",
                animation: "omSpin 30s linear infinite",
              }}
            >
              ॐ
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700, fontSize: { xs: 26, md: 34 },
                color: WH, lineHeight: 1.25, mb: 1.5, position: "relative",
              }}
            >
              Ready to start your healing journey?
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Jost', sans-serif",
                fontSize: 15, color: "#ffffffbb",
                mb: 3.5, lineHeight: 1.75, position: "relative",
              }}
            >
              Join our community of patients who have transformed their health through Ayurveda.
            </Typography>
            <Button
              variant="contained"
              sx={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 700, fontSize: 13.5, letterSpacing: 1.5,
                textTransform: "uppercase",
                background: WH, color: DG,
                borderRadius: "8px", px: 5, py: 1.5,
                boxShadow: "none", position: "relative",
                transition: "all .25s ease",
                "&:hover": { background: LG, transform: "translateY(-3px)", boxShadow: `0 10px 28px #00000033` },
              }}
            >
              Book Consultation
            </Button>
          </Box>
        </Container>

        {/* Footer */}
        <Box sx={{ textAlign: "center", mt: 8, pb: 2 }}>
          <Typography sx={{ fontFamily: "'Jost', sans-serif", fontSize: 13, color: MUTED }}>
            © 2024 by OM Ayurveda. All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default OMAyurvedaTestimonialsPage;
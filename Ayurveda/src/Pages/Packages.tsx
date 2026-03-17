import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Chip,
  Collapse,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SpaIcon from "@mui/icons-material/Spa";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AirIcon from "@mui/icons-material/Air";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import ShieldIcon from "@mui/icons-material/Shield";
import WomanIcon from "@mui/icons-material/Woman";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

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

/* ─── Package data ─────────────────────────────────────────────────────────── */
const packages = [
  {
    id: 1, icon: <SpaIcon />, name: "Wellness Package",
    sanskrit: "Ojas Sthapan Chikitsa", price: "$1500",
    sessions: "5 sets of treatments + initial consultation",
    color: DG, tag: "Most Popular",
    description: "Ojas is a vital energy reserve that supports a person's immunity. By enhancing Ojas into a person, we promote health and avoid sickness. Combination of 3 optimum Ayurvedic treatments called Abhyangam, Sweda and Shirodhara along with individualised pranayama & meditation sessions are offered. Series of 5 or 7 or more treatments are recommended according to the need of the individual keeping health condition, age and weather in mind.",
  },
  {
    id: 2, icon: <FavoriteIcon />, name: "Stress Reduction Package",
    sanskrit: "Manas Shanti Chikitsa", price: "$1150",
    sessions: "7 Shirodhara + Breath Work & Meditation + initial consultation",
    color: MG, tag: "Recommended",
    description: "Stress is an inevitable part of our modern hectic life. Ayurvedic treatments such as Shirodhara integrated and personalized to your body type is the best answer. Manasshanti Chikitsa focuses on fatigue syndromes, hypertension, high cholesterol, diabetes, blood pressure, headaches, insomnia, depression, anxiety, psychosomatic and cardiovascular ailments. Ayurvedic therapies improve systemic circulation and help you attain a calm temperance of mind.",
  },
  {
    id: 3, icon: <LocalHospitalIcon />, name: "Detox & Rehab Package",
    sanskrit: "Shodhana Chikitsa", price: "From $700",
    sessions: "Customised based on assessment",
    color: DG, tag: "Cleanse",
    description: "The detoxification and rehabilitation program at OM Ayurveda aids in regaining previously lost equilibrium and balance. De-addiction and detoxification therapies such as herbal oil massages, Shirodhara, Tailam and herbal steam would be administered to cleanse and prepare the body. Thorough Rasayana will be advised to make you feel rejuvenated. Close care and attention will be provided to all guests for this package.",
  },
  {
    id: 4, icon: <AirIcon />, name: "Respiratory Health Package",
    sanskrit: "Pranavaha Stotas Chikitsa", price: "$950",
    sessions: "7 sets of treatments + initial consultation",
    color: MG, tag: "Breath",
    description: "Respiratory health in Ayurveda helps with asthma, bronchitis, allergic rhinitis, hay fever and other related breathing disorders. Caused by the disturbance in digestive fire and toxins build up, which leads to disturbances in respiratory passages. This package will include Nasya therapy along with herbs, diet and lifestyle regimes and pranayama/breathing exercises.",
  },
  {
    id: 5, icon: <FaceRetouchingNaturalIcon />, name: "Skin Rejuvination Package",
    sanskrit: "Tvak Chikitsa", price: "$850",
    sessions: "5 sets of treatments + initial consultation",
    color: DG, tag: "Glow",
    description: "Skin rejuvenation in Ayurveda helps with eczema, psoriasis, acne, dry skin and other various skin ailments. Ayurveda talks of 7 layers of the skin, and its remedies extend themselves to the deepest layers of the body. With the help of Abhyanga and sweda, along with specific herbs, recipes, yoga, lifestyle changes — take it back home to continue repairing the benefits of this package.",
  },
  {
    id: 6, icon: <VisibilityIcon />, name: "Eye Rejuvination Package",
    sanskrit: "Netra Chikitsa", price: "$1150",
    sessions: "7 sets of treatments on each eye + initial consultation",
    color: MG, tag: "Vision",
    description: "In today's world we are constantly surrounded by screens, devices and gadgets. Due to over usage, so many eye related issues arise such as dry and itchy eyes, burning of eyes, eye strains, muscular degeneration or any other ophthalmic conditions. This treatment can also be done preventatively to protect your eye health.",
  },
  {
    id: 7, icon: <AccessibilityNewIcon />, name: "Joint Improvement Package",
    sanskrit: "Sandhi Chikitsa", price: "$600",
    sessions: "7 sets of treatments + initial consultation",
    color: DG, tag: "Mobility",
    description: "Healthy joints package is the Ayurvedic remedy for arthritis, osteoarthritis, rheumatoid arthritis, and other joint-related conditions. Ayurvedic therapies work to reduce inflammation, improve circulation, and strengthen surrounding muscles and tissues. Specific herbal formulations, dietary guidance, and tailored lifestyle modifications are combined for optimal joint health.",
  },
  {
    id: 8, icon: <ShieldIcon />, name: "Immunity Build-up Package",
    sanskrit: "Rasayana Chikitsa", price: "Custom",
    sessions: "Book initial consultation for a customised package",
    color: MG, tag: "Immunity",
    description: "This unique package is a gift from Ayurveda to the world! Rasayana therapy is one of the eight branches of Ayurveda and is specifically designed to rejuvenate the body, mind and spirit. The package is tailored according to individual constitution and health goals to maximise immunity and overall vitality.",
  },
  {
    id: 9, icon: <WomanIcon />, name: "Healthy Menopause Package",
    sanskrit: "Stri Swasthya Chikitsa", price: "Custom",
    sessions: "Book initial consultation for a customised package",
    color: DG, tag: "Women's Health",
    description: "Specially designed for women from the age of 35 to 55. Menopause is a phase in a woman's life when she is in need of help and guidance more than ever before. The hormonal imbalance which leads to lack of confidence, hot flushes, night sweats, metabolic disorders, sleep disturbances, anxiety, irritability — just to name a few. We will custom design this package according to your personalised need.",
  },
  {
    id: 10, icon: <ChildCareIcon />, name: "Healthy Mum – Healthy Family",
    sanskrit: "Prasuti Paricharya", price: "Custom",
    sessions: "Book initial consultation for a customised package",
    color: MG, tag: "Postnatal",
    description: "Being a mum is the most precious gift on earth. As the mother gives birth, her immunity level goes down, energy level is decreased and Vata Dosha is disturbed. This package is exclusively designed to help new mums during this phase. With proper diet, lifestyle changes, massage and steam — it helps in regulating hormones, muscles and ligaments repair, soreness, and increasing quality of milk production.",
  },
];

/* ─── Intersection-observer hook ───────────────────────────────────────────── */
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
      { threshold: 0.06 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);
  return { ref, vis };
}

/* ─── Individual Package Card ───────────────────────────────────────────────── */
const PackageCard: React.FC<{
  pkg: (typeof packages)[0];
  animDelay: number;
  fromLeft: boolean;
}> = ({ pkg, animDelay, fromLeft }) => {
  const [expanded, setExpanded] = useState(false);
  const { ref, vis } = useFadeIn(animDelay);
  const isCustom = pkg.price === "Custom";

  return (
    <Box
      ref={ref}
      sx={{
        opacity: vis ? 1 : 0,
        transform: vis
          ? "translateX(0) translateY(0)"
          : `translateX(${fromLeft ? "-56px" : "56px"}) translateY(16px)`,
        transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${animDelay}ms,
                     transform 0.65s cubic-bezier(0.16,1,0.3,1) ${animDelay}ms`,
        display: "flex",
        flexDirection: "column",
        borderRadius: "18px",
        overflow: "hidden",
        border: `1.5px solid ${AG}22`,
        background: WH,
        boxShadow: `0 2px 16px ${DG}0f`,
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: `0 20px 48px ${DG}26, 0 4px 14px ${DG}10`,
          border: `1.5px solid ${AG}66`,
          transition: "all .3s cubic-bezier(0.16,1,0.3,1)",
        },
      }}
    >
      {/* ── Colored top banner ── */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${pkg.color} 0%, ${pkg.color}cc 100%)`,
          px: 3,
          pt: 3,
          pb: 2.5,
          position: "relative",
          overflow: "hidden",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: -28,
            right: -16,
            width: 110,
            height: 110,
            borderRadius: "50%",
            background: "#ffffff09",
          },
        }}
      >
        {/* Watermark OM */}
        <Typography
          sx={{
            position: "absolute",
            right: 14,
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: 68,
            fontFamily: "serif",
            color: "#ffffff13",
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          ॐ
        </Typography>

        {/* Icon + Tag row */}
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1.5 }}>
          <Box
            sx={{
              width: 38,
              height: 38,
              borderRadius: "11px",
              background: "#ffffff22",
              border: "1px solid #ffffff30",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: WH,
              "& svg": { fontSize: 19 },
            }}
          >
            {pkg.icon}
          </Box>
          <Chip
            label={pkg.tag}
            size="small"
            sx={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 700,
              fontSize: 10,
              letterSpacing: 0.8,
              background: "#ffffff22",
              color: WH,
              border: "1px solid #ffffff35",
              height: 22,
            }}
          />
        </Box>

        {/* Name */}
        <Typography
          sx={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            fontSize: { xs: 20, md: 22 },
            color: WH,
            lineHeight: 1.25,
            mb: 0.35,
          }}
        >
          {pkg.name}
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 500,
            fontSize: 11,
            color: "#ffffffaa",
            letterSpacing: 0.8,
            fontStyle: "italic",
          }}
        >
          {pkg.sanskrit}
        </Typography>
      </Box>

      {/* ── Price strip ── */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 0.5,
          px: 3,
          py: 1.5,
          background: LG,
          borderBottom: `1px solid ${AG}22`,
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            fontSize: isCustom ? 16 : 25,
            color: DG,
            lineHeight: 1,
          }}
        >
          {pkg.price}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 0.5, maxWidth: "58%" }}>
          <CalendarMonthIcon sx={{ fontSize: 12, color: MG, mt: 0.15, flexShrink: 0 }} />
          <Typography
            sx={{
              fontFamily: "'Jost', sans-serif",
              fontSize: 10.5,
              fontWeight: 600,
              color: MG,
              letterSpacing: 0.2,
              textTransform: "uppercase",
              lineHeight: 1.35,
            }}
          >
            {pkg.sessions}
          </Typography>
        </Box>
      </Box>

      {/* ── Description ── */}
      <Box sx={{ px: 3, pt: 2.5, pb: 0.5, flex: 1 }}>
        <Collapse in={expanded} collapsedSize={64}>
          <Typography
            sx={{
              fontFamily: "'Jost', sans-serif",
              fontSize: 13.5,
              lineHeight: 1.8,
              color: TEXT,
            }}
          >
            {pkg.description}
          </Typography>
        </Collapse>
        <Button
          onClick={() => setExpanded(!expanded)}
          size="small"
          endIcon={
            expanded
              ? <ExpandLessIcon sx={{ fontSize: "13px !important" }} />
              : <ExpandMoreIcon sx={{ fontSize: "13px !important" }} />
          }
          disableRipple
          sx={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 600,
            fontSize: 11.5,
            color: MG,
            textTransform: "none",
            p: 0,
            mt: 0.5,
            minWidth: 0,
            "&:hover": { background: "transparent", color: DG },
          }}
        >
          {expanded ? "Show less" : "Read more"}
        </Button>
      </Box>

      {/* ── CTA ── */}
      {/* <Box sx={{ px: 3, pb: 3, pt: 2 }}>
        <Button
          fullWidth
          variant="contained"
          sx={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 700,
            fontSize: 12,
            letterSpacing: 1.4,
            textTransform: "uppercase",
            background: `linear-gradient(135deg, ${MG}, ${DG})`,
            color: WH,
            borderRadius: "8px",
            py: 1.15,
            boxShadow: `0 3px 12px ${DG}33`,
            transition: "all .22s ease",
            "&:hover": {
              background: `linear-gradient(135deg, ${DG}, #0d2b0a)`,
              boxShadow: `0 6px 20px ${DG}44`,
              transform: "translateY(-1px)",
            },
          }}
        >
          {isCustom ? "Book Consultation" : "Book This Package"}
        </Button>
      </Box> */}
    </Box>
  );
};

/* ─── Single row: exactly 2 cards side by side ──────────────────────────────── */

  <Grid container spacing={3} sx={{ mb: 3 }} alignItems="stretch" wrap="nowrap"
    style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "24px" }}
  >
    <Box sx={{ minWidth: 0 }}>
      <PackageCard pkg={left} fromLeft={true} animDelay={rowIndex * 80} />
    </Box>
    {right ? (
      <Box sx={{ minWidth: 0 }}>
        <PackageCard pkg={right} fromLeft={false} animDelay={rowIndex * 80 + 90} />
      </Box>
    ) : (
      <Box sx={{ minWidth: 0 }} />
    )}
  </Grid>
);

/* ─── Hero ──────────────────────────────────────────────────────────────────── */
const Hero: React.FC = () => {
  const { ref, vis } = useFadeIn(0);
  return (
    <Box
      sx={{
        background: `linear-gradient(150deg, ${DG} 0%, ${MG} 55%, #3d7035 100%)`,
        py: { xs: 8, md: 11 },
        px: 2,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating ambient circles */}
      {[
        { size: 320, top: "-15%", left: "-8%", dur: "9s", del: "0s" },
        { size: 180, top: "65%", left: "82%", dur: "7s", del: "2s" },
        { size: 140, top: "35%", left: "48%", dur: "11s", del: "1s" },
      ].map((c, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            width: c.size,
            height: c.size,
            borderRadius: "50%",
            background: "#ffffff06",
            top: c.top,
            left: c.left,
            animation: `floatBubble${i} ${c.dur} ease-in-out ${c.del} infinite`,
            [`@keyframes floatBubble${i}`]: {
              "0%,100%": { transform: "translateY(0) scale(1)" },
              "50%": { transform: "translateY(-18px) scale(1.05)" },
            },
          }}
        />
      ))}

      {/* Spinning OM watermark */}
      <Typography
        sx={{
          position: "absolute",
          right: { xs: -16, md: 72 },
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: { xs: 190, md: 270 },
          fontFamily: "serif",
          color: "#ffffff07",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          animation: "omSpin 50s linear infinite",
          "@keyframes omSpin": {
            from: { transform: "translateY(-50%) rotate(0deg)" },
            to: { transform: "translateY(-50%) rotate(360deg)" },
          },
        }}
      >
        ॐ
      </Typography>

      <Container maxWidth="lg">
        <Box
          ref={ref}
          sx={{
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: 5,
              color: AG,
              textTransform: "uppercase",
              mb: 2,
              animation: vis ? "fadeUp 0.6s ease 0.1s both" : "none",
              "@keyframes fadeUp": {
                from: { opacity: 0, transform: "translateY(14px)" },
                to: { opacity: 1, transform: "translateY(0)" },
              },
            }}
          >
            Healing Plans
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              fontSize: { xs: 44, md: 66 },
              color: WH,
              lineHeight: 1.05,
              mb: 2.5,
              animation: vis ? "fadeUp 0.7s ease 0.2s both" : "none",
            }}
          >
            Our Packages
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Jost', sans-serif",
              fontSize: { xs: 15, md: 17 },
              color: "#ffffffbb",
              maxWidth: 620,
              mx: "auto",
              lineHeight: 1.8,
              mb: 5,
              animation: vis ? "fadeUp 0.7s ease 0.3s both" : "none",
            }}
          >
            All packages start with an initial consultation with the practitioner.
            You will be advised which treatment plan best suits your health goals.
          </Typography>

          {/* Stats */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: { xs: 4, md: 8 },
              flexWrap: "wrap",
              animation: vis ? "fadeUp 0.7s ease 0.4s both" : "none",
            }}
          >
            {[
              { val: "10", label: "Packages" },
              { val: "5000+", label: "Years of Wisdom" },
              { val: "100%", label: "Natural Medicine" },
            ].map(({ val, label }) => (
              <Box key={label} sx={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 700,
                    fontSize: { xs: 32, md: 42 },
                    color: WH,
                    lineHeight: 1,
                  }}
                >
                  {val}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: 11,
                    color: "#ffffffaa",
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                    mt: 0.4,
                  }}
                >
                  {label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

/* ─── Page ──────────────────────────────────────────────────────────────────── */
const OMAyurvedaPackagesPage: React.FC = () => {
  const { ref: noticeRef, vis: noticeVis } = useFadeIn(0);

  // Pair packages into rows of 2: [0,1], [2,3], [4,5], [6,7], [8,9]
  const rows: Array<[(typeof packages)[0], (typeof packages)[0] | undefined]> = [];
  for (let i = 0; i < packages.length; i += 2) {
    rows.push([packages[i], packages[i + 1]]);
  }

  return (
    <ThemeProvider theme={theme}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;0,800;1,600;1,700&family=Jost:wght@400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: ${CREAM}; }
      `}</style>

      <Box sx={{ background: CREAM, minHeight: "100vh", pb: 10 }}>
        <Hero />

        {/* Payment notice */}
        <Container maxWidth="lg" sx={{ mt: 5 }}>
          <Box
            ref={noticeRef}
            sx={{
              opacity: noticeVis ? 1 : 0,
              transform: noticeVis ? "translateY(0)" : "translateY(18px)",
              transition: "all 0.6s cubic-bezier(0.16,1,0.3,1)",
              background: `${DG}0c`,
              border: `1.5px solid ${AG}44`,
              borderRadius: "14px",
              px: { xs: 3, md: 4 },
              py: 2.5,
              display: "flex",
              alignItems: "flex-start",
              gap: 1.5,
            }}
          >
            <Box sx={{ fontSize: 20, mt: 0.2, flexShrink: 0 }}>💳</Box>
            <Typography sx={{ fontFamily: "'Jost', sans-serif", fontSize: 14, color: MUTED, lineHeight: 1.75, fontWeight: 500 }}>
              <Box component="strong" sx={{ color: DG, fontWeight: 700 }}>Please note:</Box>{" "}
              To avail package prices, one transaction is preferred. If the price is above $1000, payment plans can be arranged upon request. If on payment plans — payment within three months is mandatory.
            </Typography>
          </Box>
        </Container>

        {/* ── Cards: 2 per row, 5 rows total ── */}
        <Container maxWidth="lg" sx={{ mt: 6 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 3,
            }}
          >
            {packages.map((pkg, i) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                fromLeft={i % 2 === 0}
                animDelay={Math.floor(i / 2) * 80 + (i % 2) * 90}
              />
            ))}
          </Box>
        </Container>

        {/* ── Bottom CTA ── */}
        <Container maxWidth="sm" sx={{ mt: 8 }}>
          <Box
            sx={{
              background: `linear-gradient(135deg, ${DG}, ${MG})`,
              borderRadius: "22px",
              px: { xs: 4, md: 6 },
              py: 6,
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Typography
              sx={{
                position: "absolute", right: 14, top: "50%",
                transform: "translateY(-50%)",
                fontSize: 140, fontFamily: "serif",
                color: "#ffffff07", lineHeight: 1,
                userSelect: "none", animation: "omSpin2 30s linear infinite",
              }}
            >ॐ</Typography>
            <Typography
              sx={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700, fontSize: { xs: 26, md: 34 },
                color: WH, lineHeight: 1.25, mb: 1.5, position: "relative",
              }}
            >
              Not sure which package is right for you?
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Jost', sans-serif",
                fontSize: 15, color: "#ffffffbb",
                mb: 3.5, lineHeight: 1.75, position: "relative",
              }}
            >
              Book an initial consultation and we'll design a personalised treatment plan just for you.
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

export default OMAyurvedaPackagesPage;
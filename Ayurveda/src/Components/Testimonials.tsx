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

const testimonials = [
  {
    id: 1,
    name: "Ambbi Devarajoo",
    initials: "AD",
    text: "I am glad to find this OM Ayurvedic in Perth. Sejal takes her time to look into our issues and her advises are practical and doable...Highly recommended.",
    tag: "General Wellness",
    stars: 5,
  },
  {
    id: 2,
    name: "Ravinder Kaur",
    initials: "RK",
    text: "Severe pain in my hands made it difficult to move them when I visited Sejal for treatment. But, thanks to her expertise in massage and steam therapy and medicine. I'm now feeling much improved. Highly recommend Sejal for health issues like arthritis; she truly cares about your well-being.",
    tag: "Arthritis",
    stars: 5,
  },
  {
    id: 3,
    name: "Kajol Arora",
    initials: "KA",
    text: "I had an exceptional experience at OM Ayurveda. The practitioner is highly knowledgeable and truly care about their patients. The personalized treatment plan she designed for me has significantly improved my immunity and overall well-being. The ambiance of the clinic is serene and welcoming, making each visit a relaxing experience. I highly recommend OM Ayurveda to anyone seeking holistic and natural healthcare solutions.",
    tag: "Immunity",
    stars: 5,
  },
  {
    id: 4,
    name: "Dhwani Shah",
    initials: "DS",
    text: "Dr Sejal is absolutely amazing at curing. She has the best knowledge almost about everything in health care. She has a huge experience & that's more important in this firm. Her recommendations are to the point always. Her given medicines has already cured my skin problems from the roots. Very happy with her service.",
    tag: "Skin Health",
    stars: 5,
  },
  {
    id: 5,
    name: "Arian Kazemi",
    initials: "AK",
    text: "Sejal has a holistic approach, very helpful! I have improved drastically since seeing Sejal, just once. Have referred many others. She is the best!!",
    tag: "Holistic Care",
    stars: 5,
  },
  {
    id: 6,
    name: "Jalpa Patel",
    initials: "JP",
    text: "One word — just excellent service and got recovered fast from my illness. Mrs Sejal is very nice person too with good attention for individual's pain.",
    tag: "Recovery",
    stars: 5,
  },
  {
    id: 7,
    name: "Mayank",
    initials: "MY",
    text: "I recently tried an Ayurvedic digestive supplement for managing heartburn, and it exceeded my expectations. Its natural ingredients effectively eased my digestion and provided relief from heartburn symptoms, leaving me feeling much more comfortable after meals. I highly recommend this product to anyone seeking a gentle yet potent solution for digestive issues.",
    tag: "Digestion",
    stars: 5,
  },
  {
    id: 8,
    name: "Vincent Danial",
    initials: "VD",
    text: "I seek treatment from Ms. Sejal Shah of Om Ayurveda (Natural Health Care Centre). I was treated for hives, which is a kind of skin allergy like rashes. I was given herbal powder mixtures to consume. Within three days, I realized improvement on my condition and felt better. Within a month I recovered completely. The Ayurvedic treatment and the dietary advice provided by Ms Sejal Shah is great and appreciable. I would sincerely recommend anyone seeking Ayurvedic treatment to contact Sejal of Om Ayurveda to enjoy healthy living and wellness.",
    tag: "Skin Allergy",
    stars: 5,
  },
  {
    id: 9,
    name: "Jane",
    initials: "JN",
    text: "After the first treatment of Nasya therapy I felt very light and relaxed. It felt like a weight had lifted from my head and my head felt very open and clear. Subsequent treatments also left me feeling emotional but still with the feeling of lightness. Overall, I felt that a heaviness had lifted from my mind and my head feels very open and clear.",
    tag: "Nasya Therapy",
    stars: 5,
  },
  {
    id: 10,
    name: "Zeo",
    initials: "ZO",
    text: "I consulted Ms Sejal of Om Ayurveda in mid-September for Ayurvedic treatment. I was having indigestive problems. Ms. Sejal prescribed Ayurvedic medicine to treat my indigestion problem. After consuming the medication for two months, I feel better. The symptoms did not occur again. I am very thankful to Ms. Sejal of Om Ayurveda for her ayurvedic treatment.",
    tag: "Digestion",
    stars: 5,
  },
  {
    id: 11,
    name: "Dushyant",
    initials: "DU",
    text: "I am lucky that you as an Ayurvedachrya is here in Perth. My two sons always suffered from gastro and severe constipation. After thorough examinations, Sejal Shah provided herbal medicine and in a week my son was all good with no constipation at all. In another two weeks, his bowel habits were perfect and regular. I am so thankful to Sejal Shah and will always. On top of everything, her cost of medicine is so reasonable and they are herbal — free from chemicals and their side effects. God Bless!!",
    tag: "Children's Health",
    stars: 5,
  },
  {
    id: 12,
    name: "J.L",
    initials: "JL",
    text: "Om Ayurveda is just outstanding — a complete place where you can have your treatments done by a fab lady called Sejal Shah. She is so kind, gentle, soft spoken, co-operative and many more. She gives you a beautiful environment and fantastic treatment of Ayurveda. Her products are absolutely safe and effective. Special thanks to the owner of Om Ayurveda — Sejal Shah.",
    tag: "Overall Experience",
    stars: 5,
  },
  {
    id: 13,
    name: "Mini Krishanan",
    initials: "MK",
    text: "I had my post pregnancy massage. It was truly satisfying. Thank you Sejal for great service. Look forward to coming back again.",
    tag: "Postnatal",
    stars: 5,
  },
  {
    id: 14,
    name: "JP",
    initials: "JP",
    text: "When I came to OM Ayurveda I was suffering of head tremors and my mind was totally blank, I was feeling anxious too! Dr Sejal Shah became a mentor to my life and my life changed. She gave me confidence to face my bad situations. She treated me tremendously by giving me herbs and treatments! I had recovered completely from tremors and cold and cough by Dr Sejal's referrals and suggestions and treatments of Shirodhara and Nasya. I am now healthy within 30-40 days. Big thank you Dr Sejal from bottom of my heart.",
    tag: "Neurological",
    stars: 5,
  },
  {
    id: 15,
    name: "MK",
    initials: "MK",
    text: "I am very thankful for Dr. Sejal. I came to her clinic and had lot of health issues. Food was not digest properly, had skin rash. She gave me Ayurveda treatment. Within a week, I started getting better. I recommend anyone who has got health issues to please see Sejal — OM Ayurveda.",
    tag: "Multiple Issues",
    stars: 5,
  },
  {
    id: 16,
    name: "KR",
    initials: "KR",
    text: "Shirodhara: Today I experienced this technique for the first time. Immediately, I went straight into a place of meditation. I could feel the energy of 'The Mother' — an opening of light within the tunnel. A feeling of gratefulness seemed to engulf the whole experience, the feeling of belonging. It is now 4 hours since the treatment and Anja Chakra is still vibrating.",
    tag: "Shirodhara",
    stars: 5,
  },
  {
    id: 17,
    name: "Kaye R.",
    initials: "KR",
    text: "Abhyangam — The treatment felt wonderful, I really needed the massage, my body felt so light and disconnected prior. The past 2 weeks have proved interesting — I felt so much more energy during the next day. No lethargic episodes, balanced, began my morning yoga and yoga nidra. I am naturally sleeping well without any medication. Something changed in the treatment. I am now feeling sleepy at 9:30pm — I love the feeling of being connected again.",
    tag: "Abhyangam",
    stars: 5,
  },
];

// Avatar color palette cycling
const avatarColors = [
  { bg: "#1B5E20", text: WH },
  { bg: "#2E7D32", text: WH },
  { bg: "#388E3C", text: WH },
  { bg: "#43A047", text: WH },
  { bg: "#4CAF50", text: WH },
  { bg: "#1565C0", text: WH },
  { bg: "#6A1B9A", text: WH },
  { bg: "#AD1457", text: WH },
];

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

const StarRating: React.FC<{ count: number }> = ({ count }) => (
  <Box sx={{ display: "flex", gap: 0.25 }}>
    {Array.from({ length: count }).map((_, i) => (
      <StarIcon key={i} sx={{ fontSize: 14, color: "#F59E0B" }} />
    ))}
  </Box>
);

const TestimonialCard: React.FC<{
  t: (typeof testimonials)[0];
  index: number;
}> = ({ t, index }) => {
  const [expanded, setExpanded] = useState(false);
  const { ref, vis } = useFadeIn((index % 2) * 90);
  const avatarColor = avatarColors[index % avatarColors.length];
  const isLong = t.text.length > 200;
  const displayText = !expanded && isLong ? t.text.slice(0, 200) + "…" : t.text;

  return (
    <Box
      ref={ref}
      sx={{
        opacity: vis ? 1 : 0,
        transform: vis
          ? "translateY(0)"
          : "translateY(32px)",
        transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${(index % 2) * 90}ms,
                     transform 0.6s cubic-bezier(0.16,1,0.3,1) ${(index % 2) * 90}ms`,
        background: WH,
        borderRadius: "20px",
        border: `1.5px solid ${AG}22`,
        boxShadow: `0 2px 20px ${DG}0e`,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        transition2: "box-shadow .3s ease, border-color .3s ease, transform .3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: `0 16px 48px ${DG}22`,
          border: `1.5px solid ${AG}55`,
          transition: "all .3s cubic-bezier(0.16,1,0.3,1)",
        },
      }}
    >
      {/* Top green accent bar */}
      <Box
        sx={{
          height: 5,
          background: `linear-gradient(to right, ${DG}, ${AG})`,
        }}
      />

      <Box sx={{ p: 3, flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
        {/* Quote icon */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <FormatQuoteIcon
            sx={{
              fontSize: 36,
              color: `${AG}55`,
              mt: -0.5,
              ml: -0.5,
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
              background: LG,
              color: MG,
              border: `1px solid ${AG}44`,
              height: 22,
            }}
          />
        </Box>

        {/* Review text */}
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontFamily: "'Jost', sans-serif",
              fontSize: 14,
              lineHeight: 1.8,
              color: TEXT,
            }}
          >
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
        <Box sx={{ height: "1px", background: `${AG}22` }} />

        {/* Author row */}
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            {/* Avatar */}
            <Box
              sx={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                background: avatarColor.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                boxShadow: `0 2px 8px ${avatarColor.bg}55`,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  color: avatarColor.text,
                  letterSpacing: 0.5,
                }}
              >
                {t.initials}
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 700,
                  fontSize: 16,
                  color: DG,
                  lineHeight: 1.2,
                }}
              >
                {t.name}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: 11,
                  color: MUTED,
                  letterSpacing: 0.3,
                }}
              >
                Verified Patient
              </Typography>
            </Box>
          </Box>
          <StarRating count={t.stars} />
        </Box>
      </Box>
    </Box>
  );
};

const OMAyurvedaTestimonialsPage: React.FC = () => {
  const { ref: heroRef, vis: heroVis } = useFadeIn(0);

  return (
    <ThemeProvider theme={theme}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;0,800;1,600;1,700&family=Jost:wght@400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: ${CREAM}; }
      `}</style>

      <Box sx={{ background: CREAM, minHeight: "100vh", pb: 12 }}>

        {/* ── Hero ── */}
        <Box
          sx={{
            background: `linear-gradient(150deg, ${DG} 0%, ${MG} 55%, #3d7035 100%)`,
            py: { xs: 8, md: 11 },
            px: 2,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Floating blobs */}
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

          {/* Spinning OM */}
          <Typography sx={{
            position: "absolute", right: { xs: -12, md: 72 }, top: "50%",
            transform: "translateY(-50%)", fontSize: { xs: 180, md: 260 },
            fontFamily: "serif", color: "#ffffff07", lineHeight: 1,
            userSelect: "none", pointerEvents: "none",
            animation: "omSpin 50s linear infinite",
            "@keyframes omSpin": {
              from: { transform: "translateY(-50%) rotate(0deg)" },
              to: { transform: "translateY(-50%) rotate(360deg)" },
            },
          }}>ॐ</Typography>

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
              <Typography sx={{
                fontFamily: "'Jost', sans-serif", fontWeight: 600,
                fontSize: 12, letterSpacing: 5, color: AG,
                textTransform: "uppercase", mb: 2,
                animation: heroVis ? "fadeUp 0.6s ease 0.1s both" : "none",
                "@keyframes fadeUp": {
                  from: { opacity: 0, transform: "translateY(14px)" },
                  to: { opacity: 1, transform: "translateY(0)" },
                },
              }}>
                Patient Stories
              </Typography>
              <Typography sx={{
                fontFamily: "'Cormorant Garamond', serif", fontWeight: 700,
                fontSize: { xs: 42, md: 64 }, color: WH,
                lineHeight: 1.05, mb: 2.5,
                animation: heroVis ? "fadeUp 0.7s ease 0.2s both" : "none",
              }}>
                Testimonials
              </Typography>
              <Typography sx={{
                fontFamily: "'Jost', sans-serif",
                fontSize: { xs: 15, md: 17 }, color: "#ffffffbb",
                maxWidth: 540, mx: "auto", lineHeight: 1.8, mb: 5,
                animation: heroVis ? "fadeUp 0.7s ease 0.3s both" : "none",
              }}>
                Real experiences from our patients. Every story is a journey toward holistic health and natural healing.
              </Typography>

              {/* Stats */}
              <Box sx={{
                display: "flex", justifyContent: "center",
                gap: { xs: 4, md: 8 }, flexWrap: "wrap",
                animation: heroVis ? "fadeUp 0.7s ease 0.4s both" : "none",
              }}>
                {[
                  { val: "17+", label: "Reviews" },
                  { val: "5★", label: "Average Rating" },
                  { val: "100%", label: "Natural Care" },
                ].map(({ val, label }) => (
                  <Box key={label} sx={{ textAlign: "center" }}>
                    <Typography sx={{
                      fontFamily: "'Cormorant Garamond', serif", fontWeight: 700,
                      fontSize: { xs: 30, md: 40 }, color: WH, lineHeight: 1,
                    }}>{val}</Typography>
                    <Typography sx={{
                      fontFamily: "'Jost', sans-serif", fontSize: 11,
                      color: "#ffffffaa", letterSpacing: 1.5,
                      textTransform: "uppercase", mt: 0.4,
                    }}>{label}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Container>
        </Box>

        {/* ── Cards Grid: 2 per row ── */}
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

        {/* ── Bottom CTA ── */}
        <Container maxWidth="sm" sx={{ mt: 9 }}>
          <Box sx={{
            background: `linear-gradient(135deg, ${DG}, ${MG})`,
            borderRadius: "22px",
            px: { xs: 4, md: 6 }, py: 6,
            textAlign: "center",
            position: "relative", overflow: "hidden",
          }}>
            <Typography sx={{
              position: "absolute", right: 14, top: "50%",
              transform: "translateY(-50%)",
              fontSize: 140, fontFamily: "serif",
              color: "#ffffff07", lineHeight: 1, userSelect: "none",
              animation: "omSpin 30s linear infinite",
            }}>ॐ</Typography>
            <Typography sx={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700, fontSize: { xs: 26, md: 34 },
              color: WH, lineHeight: 1.25, mb: 1.5, position: "relative",
            }}>
              Ready to start your healing journey?
            </Typography>
            <Typography sx={{
              fontFamily: "'Jost', sans-serif",
              fontSize: 15, color: "#ffffffbb",
              mb: 3.5, lineHeight: 1.75, position: "relative",
            }}>
              Join our community of patients who have transformed their health through Ayurveda.
            </Typography>
            <Button variant="contained" sx={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 700, fontSize: 13.5, letterSpacing: 1.5,
              textTransform: "uppercase",
              background: WH, color: DG,
              borderRadius: "8px", px: 5, py: 1.5,
              boxShadow: "none", position: "relative",
              transition: "all .25s ease",
              "&:hover": { background: LG, transform: "translateY(-3px)", boxShadow: `0 10px 28px #00000033` },
            }}>
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
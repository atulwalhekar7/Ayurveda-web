import React from "react";

interface Service {
  title: string;
  bullets: string[];
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Ayurvedic Consultation",
    bullets: [
      "Personalized health assessment",
      "Dosha (Vata, Pitta, Kapha) analysis",
      "Root cause diagnosis",
    ],
    description:
      "Understand your body constitution and receive tailored guidance for complete well-being.",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" width={28} height={28}>
        <circle cx="14" cy="9" r="4.5" stroke="#4ca06a" strokeWidth="1.5" />
        <path d="M6 24c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#4ca06a" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19 7c1.5.5 3 2 3 4" stroke="#a8d5b9" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="22" cy="12" r="1" fill="#4ca06a" />
        <path d="M21 14l1 2h2" stroke="#4ca06a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Diet & Lifestyle Guidance",
    bullets: [
      "Customized diet plans",
      "Daily routine (Dinacharya)",
      "Holistic lifestyle correction",
    ],
    description:
      "Improve health naturally through balanced nutrition and disciplined daily habits.",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" width={28} height={28}>
        <path d="M8 20c0-3.5 2-6 6-8 4 2 6 4.5 6 8H8z" stroke="#4ca06a" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M14 12V7" stroke="#4ca06a" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 9c1-2 3-3 3-3s2 1 3 3" stroke="#a8d5b9" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 20h14" stroke="#4ca06a" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="9" cy="15" r="1" fill="#a8d5b9" />
        <circle cx="19" cy="15" r="1" fill="#a8d5b9" />
      </svg>
    ),
  },
  {
    title: "Herbal Medicine",
    bullets: [
      "Natural Ayurvedic formulations",
      "Safe and holistic healing",
      "Focus on root cause treatment",
    ],
    description:
      "Heal your body using time-tested herbal remedies without harmful side effects.",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" width={28} height={28}>
        <path d="M14 22V12" stroke="#4ca06a" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 16c-2-1-5-1-6-4 2-1 5 0 6 4z" fill="#1c4a30" stroke="#4ca06a" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M14 13c2-2 5-2 6-5-2-1-5 1-6 5z" fill="#1c4a30" stroke="#a8d5b9" strokeWidth="1.3" strokeLinejoin="round" />
        <rect x="11" y="22" width="6" height="3" rx="1.5" stroke="#4ca06a" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    title: "Panchakarma Detox",
    bullets: [
      "Deep body cleansing",
      "Toxin removal",
      "Rejuvenation therapies",
    ],
    description:
      "Detoxify your body and restore balance with traditional Ayurvedic purification methods.",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" width={28} height={28}>
        <path d="M10 6c0 0-4 4-4 9a8 8 0 0016 0c0-5-4-9-4-9" stroke="#4ca06a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 6v6" stroke="#4ca06a" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 14c0 1.657 1.343 3 3 3s3-1.343 3-3" stroke="#a8d5b9" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M12 18.5c.6.3 1.3.5 2 .5s1.4-.2 2-.5" stroke="#4ca06a" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Stress Management",
    bullets: [
      "Meditation & breathing techniques",
      "Relaxation therapies",
      "Mind-body balance",
    ],
    description:
      "Reduce stress and anxiety through natural and holistic Ayurvedic practices.",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" width={28} height={28}>
        <path d="M14 6c-4.4 0-8 3.6-8 8 0 3 1.6 5.6 4 7.1V23h8v-1.9c2.4-1.5 4-4.1 4-7.1 0-4.4-3.6-8-8-8z" stroke="#4ca06a" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M11 14c0-1.657 1.343-3 3-3s3 1.343 3 3" stroke="#a8d5b9" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="11.5" cy="13" r="1" fill="#4ca06a" />
        <circle cx="16.5" cy="13" r="1" fill="#4ca06a" />
        <path d="M12 23h4" stroke="#4ca06a" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Weight Management",
    bullets: [
      "Personalized weight plans",
      "Metabolism improvement",
      "Natural approach",
    ],
    description:
      "Achieve healthy weight goals with sustainable and natural Ayurvedic solutions.",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" width={28} height={28}>
        <rect x="6" y="18" width="16" height="3" rx="1.5" stroke="#4ca06a" strokeWidth="1.4" />
        <path d="M14 18v-4" stroke="#4ca06a" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M9 14h10" stroke="#a8d5b9" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M10 14c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="#4ca06a" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="14" cy="8.5" r="1.5" stroke="#a8d5b9" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: "Skin & Hair Care",
    bullets: [
      "Herbal skin treatments",
      "Hair fall control",
      "Natural beauty care",
    ],
    description:
      "Enhance your natural beauty with safe and effective Ayurvedic therapies.",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" width={28} height={28}>
        <path d="M14 5c0 0-6 3-6 9 0 4 2.5 7 6 7s6-3 6-7c0-6-6-9-6-9z" stroke="#4ca06a" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M11 14c.5 2 1.5 3 3 3s2.5-1 3-3" stroke="#a8d5b9" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M10 11c1 1 2.5 1.5 4 1" stroke="#4ca06a" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M12 22c-.5 1 0 2 2 2s2.5-1 2-2" stroke="#4ca06a" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Pain Management",
    bullets: [
      "Joint & muscle pain relief",
      "Arthritis care",
      "Therapeutic massages",
    ],
    description:
      "Relieve chronic pain and improve mobility through Ayurvedic healing techniques.",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" width={28} height={28}>
        <path d="M9 10c0-2.76 2.24-5 5-5s5 2.24 5 5v2l2 3H7l2-3v-2z" stroke="#4ca06a" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M11 15v3c0 1.66 1.34 3 3 3s3-1.34 3-3v-3" stroke="#4ca06a" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M12 10h4M14 8v4" stroke="#a8d5b9" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Women's Health",
    bullets: [
      "Hormonal balance",
      "Menstrual care",
      "Fertility support",
    ],
    description:
      "Support women's wellness at every stage of life with holistic Ayurvedic care.",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" width={28} height={28}>
        <circle cx="14" cy="11" r="5.5" stroke="#4ca06a" strokeWidth="1.5" />
        <path d="M14 16.5v5" stroke="#4ca06a" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 19.5h6" stroke="#4ca06a" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11.5 9.5c.5-1 1.5-1.5 2.5-1.5" stroke="#a8d5b9" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M12 12c.5.8 1.2 1.5 2 1.5s1.5-.7 2-1.5" stroke="#a8d5b9" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Digestive Health",
    bullets: [
      "Gut health improvement",
      "Acidity & bloating relief",
      "IBS management",
    ],
    description:
      "Strengthen digestion and eliminate discomfort with natural treatments.",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" width={28} height={28}>
        <path d="M10 7c-1 0-3 1-3 3 0 1.5 1 2.5 1 4s-1 2.5-1 4c0 2 1.5 4 4 4" stroke="#4ca06a" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 7c1 0 3 1 3 3 0 1.5-1 2.5-1 4s1 2.5 1 4c0 2-1.5 4-4 4" stroke="#4ca06a" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 7h8" stroke="#a8d5b9" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M10 22h8" stroke="#a8d5b9" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="14" cy="14.5" r="2" stroke="#4ca06a" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    title: "Immunity Boosting",
    bullets: [
      "Strengthen immune system",
      "Preventive care",
      "Herbal support",
    ],
    description:
      "Build strong immunity and protect your body from diseases naturally.",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" width={28} height={28}>
        <path d="M14 5l2.5 3.5H20l-2.5 3 1 4L14 13l-4.5 2.5 1-4L8 8h3.5L14 5z" stroke="#4ca06a" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M14 13v8" stroke="#4ca06a" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M11 18c1 1 2 1.5 3 1.5s2-.5 3-1.5" stroke="#a8d5b9" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Online Consultation",
    bullets: [
      "Remote access to experts",
      "Personalized plans",
      "Convenient care",
    ],
    description:
      "Get expert Ayurvedic guidance from the comfort of your home.",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" width={28} height={28}>
        <rect x="5" y="7" width="18" height="12" rx="2" stroke="#4ca06a" strokeWidth="1.5" />
        <path d="M10 19l-1 3h10l-1-3" stroke="#4ca06a" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M9 22h10" stroke="#a8d5b9" strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="14" cy="13" r="2.5" stroke="#a8d5b9" strokeWidth="1.3" />
        <path d="M11 10.5c.8-.8 1.8-1.2 3-1.2" stroke="#4ca06a" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const AyurvedaServices: React.FC = () => {
  return (
    <section style={{ padding: "40px 20px", backgroundColor: "#f0faf4" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
};

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? "#1B5E20" : "#1B5E20",
        borderRadius: "14px",
        padding: "28px 24px 24px",
        border: `1px solid ${hovered ? "#4ca06a" : "#2e7048"}`,
        position: "relative",
        overflow: "hidden",
        transition: "transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        cursor: "default",
      }}
    >
      {/* Top accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, #4ca06a, #c8e8d4)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.2s ease",
        }}
      />

      {/* Icon */}
      <div
        style={{
          width: "52px",
          height: "52px",
          backgroundColor: "#1c4a30",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "16px",
          border: "1px solid #2e7048",
        }}
      >
        {service.icon}
      </div>

      {/* Title */}
      <p
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "20px",
          fontWeight: 600,
          color: "#f0faf4",
          margin: "0 0 14px",
          lineHeight: 1.2,
        }}
      >
        {service.title}
      </p>

      {/* Bullet points */}
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 14px" }}>
        {service.bullets.map((bullet, i) => (
          <li
            key={i}
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "12.5px",
              color: "#b0d9bf",
              padding: "3px 0 3px 14px",
              position: "relative",
              letterSpacing: "0.02em",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: 0,
                top: "4px",
                color: "#4ca06a",
                fontSize: "10px",
              }}
            >
              —
            </span>
            {bullet}
          </li>
        ))}
      </ul>

      {/* Description */}
      <p
        style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: "13px",
          fontWeight: 300,
          color: "#93c4a8",
          lineHeight: 1.65,
          margin: 0,
          borderTop: "1px solid #2e7048",
          paddingTop: "14px",
        }}
      >
        {service.description}
      </p>
    </div>
  );
};

export default AyurvedaServices;
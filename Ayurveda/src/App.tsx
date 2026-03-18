import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Packages from "./Pages/Packages";
import Footer from "./Components/Footer";
import Testimonials from "./Components/Testimonials";
import TestimonialsSection from "./Components/TestimonialsSection";

export default function App() {
  return (
    <div style={{ margin: 0, padding: 0, width: "100%", overflow: "hidden" }}>
      <Navbar />

      <Routes>

        {/* ── Home page ── */}
        <Route
          path="/"
          element={
            <>
              <Banner />
              <About />
              <TestimonialsSection />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* ── Full testimonials page (slider, no routing inside) ── */}
        <Route path="/testimonials" element={<Testimonials />} />

        {/* ── Packages page ── */}
        <Route path="/packages" element={<Packages />} />

      </Routes>
    </div>
  );
}
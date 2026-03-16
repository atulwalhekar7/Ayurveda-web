import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Packages from "./Pages/Packages";

export default function App() {
  return (
    <div style={{ margin: 0, padding: 0, width: "100%", overflow: "hidden" }}>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <About />
              <Contact />
              <Testimonials />
            </>
          }
        />

        <Route path="/packages" element={<Packages />} />
      </Routes>
    </div>
  );
}
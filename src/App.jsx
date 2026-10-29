import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { FaWhatsapp } from "react-icons/fa";

import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Aboutus from "./pages/AboutUs";
import Topbar from "./components/layout/Topbar";
import Footer from "./components/layout/Footer";
import ProgramsSection from "./pages/Programs";
import Impact from "./pages/Impact";
import GetInvolvedSection from "./pages/GetInvolved";
import Events from "./pages/Events";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import './App.css';
import ScrollToTop from "./ScrollToTop";

// Canonical mapping for SEO
const canonicalMap = {
  "/": "https://globetechsocial.com/",
  "/about-us": "https://globetechsocial.com/about-us",
  "/programs": "https://globetechsocial.com/programs",
  "/impact": "https://globetechsocial.com/impact",
  "/get-involved": "https://globetechsocial.com/get-involved",
  "/courses": "https://globetechsocial.com/courses",
  "/contact": "https://globetechsocial.com/contact",
  "/events": "https://globetechsocial.com/events",
};

function CanonicalHandler() {
  const location = useLocation();
  const canonicalUrl = canonicalMap[location.pathname] || `https://globetechsocial.com${location.pathname}`;
  
  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <CanonicalHandler />
      <Topbar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/programs" element={<ProgramsSection />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/get-involved" element={<GetInvolvedSection />} />
        <Route path="/events" element={<Events />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919632223061"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="whatsapp-icon" />
      </a>

      <Footer />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
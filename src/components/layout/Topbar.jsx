// Topbar.jsx

import React, { useEffect, useState } from "react";
import "./Topbar.css";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";

const Topbar = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 765);
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Don't render on tablet and mobile
  if (!isDesktop) {
    return null;
  }

  return (
    <section className="globetech-topbar-main">
      <div className="globetech-topbar-container">
        {/* LEFT SOCIAL */}
        <div className="globetech-topbar-socials">
          <a href="/" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="/" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="/" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="/" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href="/" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        </div>

        {/* RIGHT INFO */}
        <div className="globetech-topbar-right">
          <div className="globetech-topbar-item">
            <FaEnvelope />
            <span>info@globetechfoundation.org</span>
          </div>

          <div className="globetech-topbar-divider"></div>

          <div className="globetech-topbar-item">
            <FaPhoneAlt />
            <span>+91 96322 23061</span>
          </div>

          <div className="globetech-topbar-divider"></div>

          <div className="globetech-topbar-item">
            <FaClock />
            <span>10.00AM - 6.00 PM</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
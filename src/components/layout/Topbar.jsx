import React from "react";
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
  return (
    <section className="globetech-topbar-main">
      <div className="globetech-topbar-container">
        {/* LEFT SOCIAL */}
        <div className="globetech-topbar-socials">
          <a href="/">
            <FaFacebookF />
          </a>
          <a href="/">
            <FaTwitter />
          </a>
          <a href="/">
            <FaInstagram />
          </a>
          <a href="/">
            <FaYoutube />
          </a>
          <a href="/">
            <FaLinkedinIn />
          </a>
        </div>

        {/* RIGHT INFO */}
        <div className="globetech-topbar-right">
          <div className="globetech-topbar-item">
            <FaEnvelope />
            <span> info@globetechsocial.com</span>
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
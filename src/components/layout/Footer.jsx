// Footer.jsx

import React from "react";

import "./Footer.css";

import logo1 from "../../assets/footer1.png";

import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaEnvelope,
  FaPhone,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {

  return (

    <footer className="globetech-footer-wrapper">

      <div className="globetech-footer-container">

        {/* =====================================
            TOP SECTION
        ===================================== */}

        <div className="globetech-footer-top-area">

          {/* =====================================
              LEFT BRAND AREA
          ===================================== */}

          <div className="globetech-footer-brand-box">

            {/* LOGO */}

            <img
              src={logo1}
              alt="Globetech Foundation"
              className="globetech-footer-logo-image"
            />

            {/* TAGLINE */}

            <p className="globetech-footer-brand-tagline">

              Creating sustainable change through
              technology and community.

            </p>

            {/* MAP */}

            <div className="globetech-footer-map-wrapper">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.021119809916!2d79.80694487507808!3d11.91385918831525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53616d8b7fd8c7%3A0x6a4f5f2d0bb7fcb4!2sPuducherry!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"

                loading="lazy"

                referrerPolicy="no-referrer-when-downgrade"

                title="Globetech Location"

              ></iframe>

            </div>

          </div>

          {/* =====================================
              RIGHT LINKS AREA
          ===================================== */}

          <div className="globetech-footer-links-section">

            {/* COLUMN 1 */}

            <div className="globetech-footer-link-column">

              <h4>
                About Us
              </h4>

              <ul>

                <li>
                  <a href="/">
                    What We Do
                  </a>
                </li>

                <li>
                  <a href="/">
                    Core Pillars
                  </a>
                </li>

              </ul>

              <h4 className="footer-space-top">
                Programs
              </h4>

              <h4 className="footer-space-top">
                Impact
              </h4>

              <ul>

                <li>
                  <a href="/">
                    Voices From The Field
                  </a>
                </li>

                <li>
                  <a href="/">
                    What Community Says
                  </a>
                </li>

                <li>
                  <a href="/">
                    Our Impact Story
                  </a>
                </li>

              </ul>

            </div>

            {/* COLUMN 2 */}

            <div className="globetech-footer-link-column">

              <h4>
                Get Involved
              </h4>

              <h4 className="footer-space-top">
                Events
              </h4>

              <h4 className="footer-space-top">
                Courses
              </h4>

              <h4 className="footer-space-top">
                Contact
              </h4>

              {/* CONTACT */}

              <div className="globetech-footer-contact-list">

                <div className="globetech-footer-contact-item">

                  <FaEnvelope className="globetech-footer-contact-icon" />

                  <a href="mailto:info@globetechfoundation.org">

                    info@globetechfoundation.org

                  </a>

                </div>

                <div className="globetech-footer-contact-item">

                  <FaPhone className="globetech-footer-contact-icon" />

                  <a href="tel:+919632223061">

                    +91 96322 23061

                  </a>

                </div>

              </div>

              {/* SOCIAL ICONS */}

              <div className="globetech-footer-social-icons">

                <a href="/">
                  <FaFacebookF />
                </a>

                <a href="/">
                  <FaXTwitter />
                </a>

                <a href="/">
                  <FaInstagram />
                </a>

                <a href="/">
                  <FaLinkedinIn />
                </a>

                <a href="/">
                  <FaYoutube />
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* =====================================
            COPYRIGHT
        ===================================== */}

        <div className="globetech-footer-bottom-area">

          <p>

            © 2026 RVTS. All rights reserved by
            Aspltech.in

          </p>

        </div>

      </div>

    </footer>

  );
};

export default Footer;
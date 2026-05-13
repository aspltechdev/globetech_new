// GlobeTechFooter.jsx

import React from "react";
import "./Footer.css";
import logo1 from "../../assets/footer1.png";

import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="globetech-footer-wrapper">

      <div className="globetech-footer-container">

        {/* TOP SECTION */}
        <div className="globetech-footer-top-area">

          {/* BRAND */}
          <div className="globetech-footer-brand-box">

            <img
              src={logo1}
              alt="Globetech Foundation"
              className="globetech-footer-logo-image"
            />

            

            <p className="globetech-footer-brand-tagline">
              Creating sustainable change
              <br />
              through technology and community.
            </p>

          </div>

          {/* NAVIGATION */}
          <div className="globetech-footer-links-section">

            {/* ABOUT */}
            <div className="globetech-footer-link-column">

              <h4>About Us</h4>

              <ul>
                <li><a href="/">Our Story</a></li>
                <li><a href="/">Team</a></li>
              </ul>

            </div>

            {/* PROGRAMS */}
            <div className="globetech-footer-link-column">

              <h4>Programs</h4>

              <ul>
                <li><a href="/">Education</a></li>
                <li><a href="/">Skills</a></li>
              </ul>

            </div>

            {/* IMPACT */}
            <div className="globetech-footer-link-column">

              <h4>Impact</h4>

              <ul>
                <li><a href="/">Our Impact</a></li>
                <li><a href="/">Reports</a></li>
              </ul>

            </div>

            {/* CONTACT */}
            <div className="globetech-footer-link-column">

              <h4>Contact</h4>

              <ul className="globetech-footer-contact-list">

                <li>
                  <FaEnvelope className="globetech-footer-contact-icon" />

                  <a href="mailto:info@globetechfoundation.org">
                    info@globetechfoundation.org
                  </a>
                </li>

                <li>
                  <FaPhone className="globetech-footer-contact-icon" />

                  <a href="tel:+919632223061">
                    +91 96322 23061
                  </a>
                </li>

              </ul>

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

              </div>

            </div>

          </div>

        </div>

        {/* MAP */}
        <div className="globetech-footer-map-wrapper">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.34194156103!2d-74.03927096447748!3d40.68929352030567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1699900000000!5m2!1sen!2sin"
          
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Globetech Location Map"
          ></iframe>

        </div>

        {/* COPYRIGHT */}
        <div className="globetech-footer-bottom-area">

          <p>
            © 2026 Globetech Foundation. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
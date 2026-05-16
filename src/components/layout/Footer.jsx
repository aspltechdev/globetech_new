// Footer.jsx

import React from "react";

import "./Footer.css";

import logo1 from "../../assets/footer1.png";

import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";

const Footer = () => {

  return (

    <footer className="ngoFooter">

      {/* =========================================================
          GLOW EFFECTS
      ========================================================= */}

      <div className="footerGlowOne"></div>

      <div className="footerGlowTwo"></div>

      {/* =========================================================
          CONTAINER
      ========================================================= */}

      <div className="ngoFooterContainer">

        {/* =========================================================
            GRID
        ========================================================= */}

        <div className="footerGrid">

          {/* =========================================================
              BRAND AREA
          ========================================================= */}

          <div className="footerBrandArea">

            {/* LOGO */}

            <img
              src={logo1}
              alt="Globetech Foundation"
              className="footerLogo"
            />

            {/* DESCRIPTION */}

            <p className="footerDescription">

              Creating sustainable social
              impact through education,
              skill development, digital
              empowerment, and community
              transformation initiatives.

            </p>

            {/* CONTACT */}

            <div className="footerContactList">

              <div className="footerContactItem">

                <FaEnvelope />

                <a href="mailto:info@globetechfoundation.org">

                  info@globetechfoundation.org

                </a>

              </div>

              <div className="footerContactItem">

                <FaPhone />

                <a href="tel:+919632223061">

                  +91 96322 23061

                </a>

              </div>

              <div className="footerContactItem">

                <FaLocationDot />

                <p>

                  Bangalore & Pondicherry,
                  India

                </p>

              </div>

            </div>

            {/* SOCIALS */}

            <div className="footerSocials">

              <a href="/">
                <FaFacebookF />
              </a>

              <a href="/">
                <FaInstagram />
              </a>

              <a href="/">
                <FaXTwitter />
              </a>

              <a href="/">
                <FaLinkedinIn />
              </a>

              <a href="/">
                <FaYoutube />
              </a>

            </div>

          </div>

          {/* =========================================================
              QUICK LINKS
          ========================================================= */}

          <div className="footerLinksColumn">

            <h3>

              Quick Links

            </h3>

            <ul>

              <li>
                <a href="/">
                  Home
                </a>
              </li>

              <li>
                <a href="/">
                  About Us
                </a>
              </li>

              <li>
                <a href="/">
                  Programs
                </a>
              </li>

              <li>
                <a href="/">
                  Events
                </a>
              </li>

              <li>
                <a href="/">
                  Impact Stories
                </a>
              </li>

              <li>
                <a href="/">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* =========================================================
              PROGRAMS
          ========================================================= */}

          <div className="footerLinksColumn">

            <h3>

              Programs

            </h3>

            <ul>

              <li>
                <a href="/">
                  Skill Development
                </a>
              </li>

              <li>
                <a href="/">
                  Women Empowerment
                </a>
              </li>

              <li>
                <a href="/">
                  Career Readiness
                </a>
              </li>

              <li>
                <a href="/">
                  Community Programs
                </a>
              </li>

              <li>
                <a href="/">
                  Placement Support
                </a>
              </li>

              <li>
                <a href="/">
                  NGO Initiatives
                </a>
              </li>

            </ul>

          </div>

          {/* =========================================================
              NEWSLETTER
          ========================================================= */}

          <div className="footerNewsletter">

            <h3>

              Newsletter

            </h3>

            <p>

              Subscribe to receive updates
              about our programs, impact
              stories, workshops and events.

            </p>

            {/* INPUT */}

            <div className="footerNewsletterInput">

              <input
                type="email"
                placeholder="Enter your email address"
              />

              <button>

                Subscribe

              </button>

            </div>

          </div>

        </div>

        {/* =========================================================
            COPYRIGHT
        ========================================================= */}

        <div className="footerBottom">

          <p>

            © 2026 Globetech Social Impact Foundation.
            All Rights Reserved.

          </p>

          <div className="footerBottomLinks">

            <a href="/">
              Privacy Policy
            </a>

            <a href="/">
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>

  );
};

export default Footer;
import React from "react";

import "./Footer.css";

import logo from "../../assets/footer1.png";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

import {
  FaLocationDot,
} from "react-icons/fa6";

const Footer = () => {

  return (

    <footer className="modernFooter">

      <div className="modernFooterContainer">

        {/* =========================
            TOP CTA
        ========================= */}

        {/* <div className="footerCtaBox">

          <div className="footerCtaContent">

            <span>
              COMMUNITY • EDUCATION • IMPACT
            </span>

            <h2>
              Empowering Communities
              Through Education & Opportunity
            </h2>

          </div>

          <button>

            Get Involved

            <FaArrowRight />

          </button>

        </div> */}

        {/* =========================
            MAIN FOOTER
        ========================= */}

        <div className="footerMain">

          {/* LEFT */}

          <div className="footerBrand">

            <img
              src={logo}
              alt=""
              className="footerLogo"
            />

            <p>

              Globetech Social Impact Foundation
              empowers students and communities
              through livelihood training,
              placement initiatives, workshops,
              and sustainable development programs
              across India.

            </p>

            {/* SOCIALS */}

            <div className="footerSocials">

              <a href="https://www.facebook.com/profile.php?id=61573486966651">
                <FaFacebookF />
              </a>

              <a href="https://www.instagram.com/globetech_ngo/">
                <FaInstagram />
              </a>

              <a href="https://www.linkedin.com/company/113444515/admin/dashboard/">
                <FaLinkedinIn />
              </a>

              <a href="https://youtube.com/@globetechsocialfoundation?si=fhkkVT4qoP1X6U3_">
                <FaYoutube />
              </a>

            </div>

          </div>

          {/* CENTER */}

          <div className="footerLinksArea">

            {/* LINKS */}

            <div className="footerColumn">

              <h3>
                Navigation
              </h3>

              <a href="/">
                Home
              </a>

              <a href="/about-us">
                About
              </a>

              <a href="/programs">
                Programs
              </a>

              <a href="/events">
                Events
              </a>

              <a href="/contact">
                Contact
              </a>

            </div>

            {/* PROGRAMS */}

            {/* <div className="footerColumn">

              <h3>
                Programs
              </h3>

              <a href="/courses">
                Skill Development
              </a>

              <a href="/contact">
                Placement Drives
              </a>

              <a href="/contact">
                Women Empowerment
              </a>

              <a href="/contact">
                Career Guidance
              </a>

              <a href="/contact">
                Community Outreach
              </a>

            </div> */}
            <div className="footerColumn">

              <h3>
                Quick Links
              </h3>

              <a href="/about-us">
                What We Do
              </a>

              <a href="/programs">
                Livelihood Training
              </a>

              <a href="/courses">
                Skill Development
              </a>

              <a href="/impact">
                Impact Areas
              </a>

              <a href="/get-involved">
                CSR Partners
              </a>

              <a href="/events">
                Community Outreach
              </a>



            </div>

          </div>

          {/* RIGHT */}

          <div className="footerContactCard">

            <div className="footerCardTop">

              <span>
                HEAD OFFICE
              </span>

              <h3>
                Contact Information
              </h3>

            </div>

            {/* ADDRESS */}

            <div className="footerInfoItem">

              <div className="footerInfoIcon">

                <FaLocationDot />

              </div>

              <p>

                No.188, 2nd Floor,
                Above HDFC Bank,
                Kanakadasa Circle,
                BEML Layout,
                RR Nagar,
                Bengaluru – 560098

              </p>

            </div>

            {/* PHONE */}

            <div className="footerInfoItem">

              <div className="footerInfoIcon">

                <FaPhoneAlt />

              </div>

              <div className="footerPhoneGroup">

                <a href="tel:+919632223061">
                  +91 96322 23061
                </a>

                <a href="tel:+919901477144">
                  +91 99014 77144
                </a>

              </div>

            </div>

            {/* EMAIL */}

            <div className="footerInfoItem">

              <div className="footerInfoIcon">

                <FaEnvelope />

              </div>

              <a href="mailto: info@globetechsocial.com">

                info@globetechsocial.com

              </a>

            </div>

          </div>

        </div>

        {/* =========================
            BOTTOM
        ========================= */}

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
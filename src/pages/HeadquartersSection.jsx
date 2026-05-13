// HeadquartersSection.jsx

import React from "react";
import "./HeadquartersSection.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const HeadquartersSection = () => {
  return (
    <section className="hq-main-section">

      <div className="hq-container">

        {/* TITLE */}
        <h2 className="hq-title">
          Headquarters
        </h2>

        {/* ADDRESS CARD */}
        <div className="hq-info-card">

          <div className="hq-icon">
            <FaMapMarkerAlt />
          </div>

          <div className="hq-content">

            <h4>
              Globetech Social Impact Foundation
            </h4>

            <p>
              No.12, Terrace Avenue, North Park Street,
              <br />
              Knowledge Circle, San Diego, USA | Registered NGO
              <br />
              NGO/2456 - 90288
            </p>

          </div>

        </div>

        {/* CONTACT CARD */}
        <div className="hq-info-card">

          <div className="hq-icon">
            <FaPhoneAlt />
          </div>

          <div className="hq-content">

            <h4>
              Direct Contact
            </h4>

            <p>
              Phone: +91 96222 23061
              <br />
              Email: info@globetechfoundation.org
            </p>

          </div>

        </div>

        {/* MAP */}
        <div className="hq-map-wrapper">

          <iframe
            src="https://maps.google.com/maps?q=New%20York&t=&z=12&ie=UTF8&iwloc=&output=embed"
            title="Google Map"
            loading="lazy"
          ></iframe>

        </div>

        {/* SOCIAL */}
        <div className="hq-social-section">

          <span>
            FOLLOW OUR PROGRESS
          </span>

          <div className="hq-social-icons">

            <a href="/">
              <FaFacebookF />
            </a>

            <a href="/">
              <FaLinkedinIn />
            </a>

            <a href="/">
              <FaInstagram />
            </a>

          </div>

        </div>

        {/* CONTACT FORM */}
        <div className="hq-contact-form-section">

          <h2>
            Send a Message
          </h2>

          <p>
            Have a specific question or proposal? Our regional coordinators
            will get back to you within 24 business hours.
          </p>

          <form className="hq-contact-form">

            {/* ROW */}
            <div className="hq-form-grid">

              <div className="hq-input-group">

                <label>
                  First Name
                </label>

                <input
                  type="text"
                  placeholder="Enter Your First Name"
                />

              </div>

              <div className="hq-input-group">

                <label>
                  Last Name
                </label>

                <input
                  type="text"
                  placeholder="Enter Your Last Name"
                />

              </div>

            </div>

            {/* EMAIL */}
            <div className="hq-input-group">

              <label>
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter Your Email Address"
              />

            </div>

            {/* SELECT */}
            <div className="hq-input-group">

              <label>
                Inquiry Type
              </label>

              <select>

                <option>
                  Partnerships
                </option>

                <option>
                  Volunteering
                </option>

                <option>
                  Donations
                </option>

              </select>

            </div>

            {/* MESSAGE */}
            <div className="hq-input-group">

              <label>
                Message
              </label>

              <textarea
                placeholder="How can we help you?"
              ></textarea>

            </div>

            {/* BUTTON */}
            <button type="submit">
              Send Message →
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default HeadquartersSection;
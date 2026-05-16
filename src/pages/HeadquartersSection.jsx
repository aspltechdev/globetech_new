// HeadquartersSection.jsx

import React, { useEffect, useRef } from "react";

import "./HeadquartersSection.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";

/* REVEAL */

const Reveal = ({ children }) => {

  const ref = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {
          ref.current.classList.add("show");
        }

      },
      {
        threshold:0.15,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();

  }, []);

  return (
    <div
      ref={ref}
      className="fade-up"
    >
      {children}
    </div>
  );
};

export default function HeadquartersSection() {

  return (
    <section className="hq-section">

      {/* GLOW */}

      <div className="hq-glow glow1"></div>
      <div className="hq-glow glow2"></div>

      <div className="hq-container">

        {/* HEADER */}

        <Reveal>

          <div className="hq-header">

            <span>
              Contact & Headquarters
            </span>

            <h1>
              Let’s Build
              Impact Together
            </h1>

            <p>
              Reach out for partnerships, volunteering,
              collaborations, or community initiatives.
              Our team would love to connect with you.
            </p>

          </div>

        </Reveal>

        {/* TOP GRID */}

        <div className="hq-top-grid">

          {/* LEFT */}

          <Reveal>

            <div className="hq-left-card">

              {/* ADDRESS */}

              <div className="hq-info-card">

                <div className="hq-icon">

                  <FaMapMarkerAlt />

                </div>

                <div>

                  <h3>
                    Headquarters
                  </h3>

                  <p>
                    Globetech Social Impact Foundation
                    <br />
                    No.12 Terrace Avenue, Knowledge Circle,
                    San Diego, USA
                  </p>

                </div>

              </div>

              {/* CONTACT */}

              <div className="hq-info-card">

                <div className="hq-icon">

                  <FaPhoneAlt />

                </div>

                <div>

                  <h3>
                    Direct Contact
                  </h3>

                  <p>
                    +91 96222 23061
                    <br />
                    info@globetechfoundation.org
                  </p>

                </div>

              </div>

              {/* SOCIAL */}

              <div className="hq-social-box">

                <h4>
                  Follow Our Journey
                </h4>

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

            </div>

          </Reveal>

          {/* RIGHT */}

          <Reveal>

            <div className="hq-form-card">

              <div className="form-heading">

                <h2>
                  Send a Message
                </h2>

                <p>
                  Our coordinators will respond
                  within 24 business hours.
                </p>

              </div>

              <form className="hq-form">

                <div className="form-grid">

                  <div className="input-group">

                    <label>
                      First Name
                    </label>

                    <input
                      type="text"
                      placeholder="John"
                    />

                  </div>

                  <div className="input-group">

                    <label>
                      Last Name
                    </label>

                    <input
                      type="text"
                      placeholder="Doe"
                    />

                  </div>

                </div>

                <div className="input-group">

                  <label>
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="example@email.com"
                  />

                </div>

                <div className="input-group">

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

                    <option>
                      Programs
                    </option>

                  </select>

                </div>

                <div className="input-group">

                  <label>
                    Message
                  </label>

                  <textarea
                    placeholder="Write your message..."
                  ></textarea>

                </div>

                <button type="submit">

                  Send Message

                  <FaArrowRight />

                </button>

              </form>

            </div>

          </Reveal>

        </div>

        {/* MAP */}

        <Reveal>

          <div className="hq-map-card">

            <iframe
              src="https://maps.google.com/maps?q=New%20York&t=&z=12&ie=UTF8&iwloc=&output=embed"
              title="Google Map"
              loading="lazy"
            ></iframe>

          </div>

        </Reveal>

      </div>

    </section>
  );
}
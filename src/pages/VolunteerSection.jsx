// VolunteerSection.jsx

import React from "react";
import "./VolunteerSection.css";

import {
  FaHandsHelping,
  FaBullhorn,
  FaLaptop,
} from "react-icons/fa";

const VolunteerSection = () => {
  return (
    <section className="volunteer-main-section">

      <div className="volunteer-main-container">

        {/* TOP AREA */}
        <div className="volunteer-top-layout">

          {/* LEFT CONTENT */}
          <div className="volunteer-left-content">

            <h2>
              Volunteer Application
            </h2>

            <p>
              We believe everyone has a gift to offer. Tell us a bit
              about yourself and your skills, and our volunteer
              coordination team will reach out within 48 hours to
              discuss potential placements.
            </p>

            {/* FEATURES */}
            <div className="volunteer-feature-list">

              {/* ITEM */}
              <div className="volunteer-feature-item">

                <div className="volunteer-icon-box">
                  <FaHandsHelping />
                </div>

                <div>

                  <h4>
                    Skilled Mentorship
                  </h4>

                  <p>
                    Share your professional expertise with emerging
                    leaders in our partner communities.
                  </p>

                </div>

              </div>

              {/* ITEM */}
              <div className="volunteer-feature-item">

                <div className="volunteer-icon-box">
                  <FaBullhorn />
                </div>

                <div>

                  <h4>
                    Field Operations
                  </h4>

                  <p>
                    Assist on-ground teams with logistics,
                    construction, or healthcare delivery.
                  </p>

                </div>

              </div>

              {/* ITEM */}
              <div className="volunteer-feature-item">

                <div className="volunteer-icon-box">
                  <FaLaptop />
                </div>

                <div>

                  <h4>
                    Digital Advocacy
                  </h4>

                  <p>
                    Help us spread the word through social media,
                    design, and storytelling.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="volunteer-form-wrapper">

            <form className="volunteer-form-box">

              {/* GRID */}
              <div className="volunteer-input-grid">

                <div className="volunteer-input-group">

                  <label>
                    FULL NAME
                  </label>

                  <input
                    type="text"
                    placeholder="Enter Your Name"
                  />

                </div>

                <div className="volunteer-input-group">

                  <label>
                    EMAIL ADDRESS
                  </label>

                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                  />

                </div>

              </div>

              {/* SELECT */}
              <div className="volunteer-input-group">

                <label>
                  PRIMARY SKILLSET
                </label>

                <select>

                  <option>
                    Education
                  </option>

                  <option>
                    Technology
                  </option>

                  <option>
                    Healthcare
                  </option>

                </select>

              </div>

              {/* TEXTAREA */}
              <div className="volunteer-input-group">

                <label>
                  TELL US WHY YOU WANT TO JOIN
                </label>

                <textarea
                  placeholder="What motivates you to work with Globotech?"
                ></textarea>

              </div>

              {/* CHECKBOX */}
              <label className="volunteer-checkbox">

                <input type="checkbox" />

                <span>
                  I agree to the volunteer code of conduct and privacy policy.
                </span>

              </label>

              {/* BUTTON */}
              <button type="submit">
                Submit Application ▷
              </button>

            </form>

          </div>

        </div>

        {/* CTA SECTION */}
        <div className="volunteer-cta-section">

          {/* LEFT */}
          <div className="volunteer-cta-content">

            <h2>
              Be the Change You Wish to
              <br />
              See in the World.
            </h2>

            <p>
              Whether you give your time, your talent, or your treasure,
              you are making a difference. Join our mission today.
            </p>

            {/* BUTTONS */}
            <div className="volunteer-cta-buttons">

              <button className="donate-btn">
                Donate Now
              </button>

              <button className="volunteer-btn">
                Volunteer
              </button>

              <button className="partner-btn">
                Partner With Us
              </button>

            </div>

          </div>

          {/* YELLOW SHAPE */}
          <div className="volunteer-yellow-shape"></div>

        </div>

      </div>

    </section>
  );
};

export default VolunteerSection;
// WaysImpactSection.jsx

import React from "react";
import "./WaysImpactSection.css";

import {
  FaHandsHelping,
  FaUserPlus,
} from "react-icons/fa";

const WaysImpactSection = () => {
  return (
    <section className="ways-impact-section">

      <div className="ways-impact-container">

        {/* HEADER */}
        <div className="ways-impact-header">

          <h2>
            Ways to Make an Impact
          </h2>

          <p>
            We provide multiple avenues for individuals and organizations
            to contribute to our mission of humanized professionalism.
          </p>

        </div>

        {/* TOP CARDS */}
        <div className="ways-impact-cards">

          {/* LEFT CARD */}
          <div className="ways-impact-card">

            <FaHandsHelping className="ways-impact-icon" />

            <h3>
              Empower Through Donation
            </h3>

            <p>
              Every dollar fueled into Globetech is tracked with 100%
              transparency. Your donation funds healthcare, education,
              and sustainable infrastructure.
            </p>

            <a href="/">
              Current Initiative: Clean Water 2024
            </a>

          </div>

          {/* RIGHT CARD */}
          <div className="ways-impact-card ways-impact-blue-card">

            <FaUserPlus className="ways-impact-icon ways-impact-white-icon" />

            <h3>
              Be the Hands and Feet
            </h3>

            <p>
              Join our field teams or contribute remotely with your
              professional skills.
            </p>

            <a href="/">
              Apply to Volunteer →
            </a>

          </div>

        </div>

        {/* CORPORATE SECTION */}
        <div className="ways-impact-corporate">

          {/* LEFT CONTENT */}
          <div className="ways-impact-corporate-left">

            <h4>
              Corporate Partnerships
            </h4>

            <p>
              Align your brand with global impact. We partner with
              forward-thinking organizations to solve the world’s
              most pressing challenges through CSR initiatives.
            </p>

            <div className="ways-impact-list">

              <div>
                Branded Impact Reports
              </div>

              <div>
                Employee Engagement
              </div>

              <div>
                Tax-Deductible Contributions
              </div>

              <div>
                Joint Public Relations
              </div>

            </div>

            <button>
              Become a Partner
            </button>

          </div>

          {/* RIGHT LOGOS */}
          <div className="ways-impact-logo-grid">

            <div className="ways-impact-logo-card">
              <span className="bosch">
                BOSCH
              </span>
            </div>

            <div className="ways-impact-logo-card">
              <span className="tata">
                TATA
              </span>
            </div>

            <div className="ways-impact-logo-card">
              <span className="icici">
                ICICI Bank
              </span>
            </div>

            <div className="ways-impact-logo-card">
              <span className="tvs">
                TVS
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default WaysImpactSection;
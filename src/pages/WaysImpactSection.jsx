// WaysImpactSection.jsx

import React from "react";
import "./WaysImpactSection.css";

import {
  FaHandsHelping,
  FaUserPlus,
  FaCheckCircle,
} from "react-icons/fa";

const WaysImpactSection = () => {

  return (

    <section className="ways-impact-section">

      <div className="ways-impact-container">

        {/* ======================================
            HEADER
        ======================================= */}

        <div className="ways-impact-header">

          <h2>
            Ways to Make an Impact
          </h2>

          <p>
            We provide multiple avenues for individuals and organizations
            to contribute to our mission of humanized professionalism.
          </p>

        </div>

        {/* ======================================
            TOP CARDS
        ======================================= */}

        <div className="ways-impact-cards">

          {/* LEFT CARD */}

          <div className="ways-impact-card">

            <div className="ways-impact-icon-wrap">

              <FaHandsHelping className="ways-impact-icon" />

            </div>

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

            <div className="ways-impact-icon-wrap ways-impact-white-wrap">

              <FaUserPlus className="ways-impact-icon ways-impact-white-icon" />

            </div>

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

        {/* ======================================
            CORPORATE SECTION
        ======================================= */}

        <div className="ways-impact-corporate">

          {/* LEFT */}

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

              <div className="ways-impact-list-item">

                <FaCheckCircle className="ways-impact-check" />

                <span>
                  Branded Impact Reports
                </span>

              </div>

              <div className="ways-impact-list-item">

                <FaCheckCircle className="ways-impact-check" />

                <span>
                  Employee Engagement
                </span>

              </div>

              <div className="ways-impact-list-item">

                <FaCheckCircle className="ways-impact-check" />

                <span>
                  Tax-Deductible Contributions
                </span>

              </div>

              <div className="ways-impact-list-item">

                <FaCheckCircle className="ways-impact-check" />

                <span>
                  Joint Public Relations
                </span>

              </div>

            </div>

            <button>
              Become a Partner
            </button>

          </div>

          {/* RIGHT */}

          <div className="ways-impact-logo-grid">

            <div className="ways-impact-logo-card">

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Bosch.svg"
                alt="Bosch"
              />

            </div>

            <div className="ways-impact-logo-card">

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg"
                alt="Tata"
              />

            </div>

            <div className="ways-impact-logo-card">

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg"
                alt="ICICI"
              />

            </div>

            <div className="ways-impact-logo-card">

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f5/TVS_Motor_Company_logo.svg"
                alt="TVS"
              />

            </div>

          </div>

        </div>

      </div>

    </section>

  );
};

export default WaysImpactSection;
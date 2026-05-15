// WaysImpactSection.jsx

import React, { useEffect, useRef } from "react";
import "./WaysImpactSection.css";
import bosch from '../assets/placements/pl8.png';
import tata from '../assets/placements/pl13.png';
import icici from '../assets/placements/pl7.png';
import tvs from '../assets/placements/pl3.png';

import {
  FaHandHoldingHeart,
  FaUserPlus,
  FaCheckCircle,
} from "react-icons/fa";

/* =========================================
   SCROLL REVEAL COMPONENT
========================================= */

const Reveal = ({ children }) => {

  const ref = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver(

      ([entry]) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("active-reveal");

        }

      },

      {
        threshold: 0.15,
      }

    );

    if (ref.current) {

      observer.observe(ref.current);

    }

    return () => observer.disconnect();

  }, []);

  return (

    <div ref={ref} className="reveal-scroll">

      {children}

    </div>

  );

};

const WaysImpactSection = () => {

  return (

    <section className="ways-impact-section">

      <div className="ways-impact-container">

        {/* ======================================
            HEADER
        ======================================= */}

        <Reveal>

          <div className="ways-impact-header">

            <h2>
              Ways to Make an Impact
            </h2>

            <p>
              We provide multiple avenues for individuals and organizations
              to contribute to our mission of humanized professionalism.
            </p>

          </div>

        </Reveal>

        {/* ======================================
            TOP CARDS
        ======================================= */}

        <div className="ways-impact-cards">

          {/* LEFT CARD */}

          <Reveal>

            <div className="ways-impact-card">

              <div className="ways-impact-icon-wrap">

                <FaHandHoldingHeart className="ways-impact-icon" />

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

          </Reveal>

          {/* RIGHT CARD */}

          <Reveal>

            <div className="ways-impact-card ways-impact-blue-card">

              <div className="ways-impact-icon-wrap">

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

          </Reveal>

        </div>

        {/* ======================================
            CORPORATE SECTION
        ======================================= */}

        <div className="ways-impact-corporate">

          {/* LEFT */}

          <Reveal>

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

          </Reveal>

          {/* RIGHT */}

          <Reveal>

            <div className="ways-impact-logo-grid">

              <div className="ways-impact-logo-card">

  <img
    src={bosch}
    alt="Bosch"
  />

</div>

<div className="ways-impact-logo-card">

  <img
    src={tata}
    alt="Tata"
  />

</div>

<div className="ways-impact-logo-card">

  <img
    src={icici}
    alt="ICICI"
  />

</div>

<div className="ways-impact-logo-card">

  <img
    src={tvs}
    alt="TVS"
  />

</div>

           

          

            </div>

          </Reveal>

        </div>

      </div>

    </section>

  );

};

export default WaysImpactSection;
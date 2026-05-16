

import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import aboutImage from "../../assets/aboutimg.png";

import "./AboutSection.css";

const AboutSection = () => {

  const sectionRef = useRef(null);

  const [showContent, setShowContent] = useState(false);

  /* =========================
     SCROLL POPUP ANIMATION
  ========================= */

  useEffect(() => {

    const observer = new IntersectionObserver(

      ([entry]) => {

        if (entry.isIntersecting) {
          setShowContent(true);
        }

      },

      {
     
        threshold: 0.15,
rootMargin: "0px 0px -80px 0px",
      }

    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();

  }, []);

  return (

    <section
      className="aboutSection"
      ref={sectionRef}
    >

      <div className="aboutContainer">

        <div className="aboutWrapper">

          {/* =========================
              LEFT CONTENT
          ========================= */}

          <div
            className={`aboutLeft ${
              showContent ? "showLeft" : ""
            }`}
          >

            <h2>
              About Us
            </h2>

            <p>

              Globetech Social Impact Foundation is a socially driven NGO
              focused on empowering communities through education, skill
              development, healthcare awareness, and sustainable
              development initiatives across India. Our programs support
              youth empowerment, women and child welfare, career
              readiness, and community upliftment to create brighter
              futures and lasting social impact.

            </p>

            <div className="aboutFeatures">

  <div className="featureCard">
    <h4>Youth Empowerment</h4>

    <p>
      Skill development programs helping students
      and youth build sustainable careers.
    </p>
  </div>

  <div className="featureCard">
    <h4>Community Welfare</h4>

    <p>
      Supporting underserved communities through
      awareness and social impact initiatives.
    </p>
  </div>

</div>

            <button className="aboutBtn">

              <span>Know More</span>

              <div className="aboutBtnIcon">

                <ArrowUpRight size={15} />

              </div>

            </button>

          </div>

          {/* =========================
              RIGHT IMAGE
          ========================= */}

          <div
            className={`aboutRight ${
              showContent ? "showRight" : ""
            }`}
          >

            <img
              src={aboutImage}
              alt="About"
              className="aboutImage"
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutSection;
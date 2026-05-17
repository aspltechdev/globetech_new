// AboutMissionVisionSection.jsx

import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  ArrowUpRight,
  Check,
} from "lucide-react";

import "./AboutMissionVisionSection.css";

import aboutImg from "../../assets/about123.jpg";

const AboutMissionVisionSection = () => {

  const sectionRef = useRef(null);

  const [showContent, setShowContent] =
    useState(false);

  /* =====================================================
     SCROLL ANIMATION
  ===================================================== */

  useEffect(() => {

    const observer =
      new IntersectionObserver(

        ([entry]) => {

          if (entry.isIntersecting) {

            setShowContent(true);

          }

        },

        {
          threshold:0.2,
        }

      );

    if (sectionRef.current) {

      observer.observe(
        sectionRef.current
      );

    }

    return () =>
      observer.disconnect();

  }, []);

  return (

    <section
      className="ngoAboutMissionSection"
      ref={sectionRef}
    >

      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div className="ngoMissionGlow"></div>

      <div className="ngoMissionContainer">

        {/* =====================================================
            LEFT SIDE
        ===================================================== */}

        <div
          className={`ngoMissionLeft ${
            showContent
              ? "showMissionLeft"
              : ""
          }`}
        >

          {/* TOP TAG */}

          <div className="ngoMiniTag">

            About Our Foundation

          </div>

          {/* TITLE */}

          <h2>

            Building Stronger
            Communities Through
            Education & Innovation

          </h2>

          {/* DESCRIPTION */}

          <p className="ngoMissionDescription">

            We create sustainable
            impact by empowering
            underserved communities
            with education, digital
            skills, career opportunities
            and technology-driven
            initiatives.

          </p>

          {/* FEATURES */}

          <div className="ngoMissionFeatures">

            <div className="ngoMissionFeature">

              <div className="ngoFeatureIcon">

                <Check size={14} />

              </div>

              <span>

                Skill Development Programs

              </span>

            </div>

            <div className="ngoMissionFeature">

              <div className="ngoFeatureIcon">

                <Check size={14} />

              </div>

              <span>

                Community Empowerment

              </span>

            </div>

            <div className="ngoMissionFeature">

              <div className="ngoFeatureIcon">

                <Check size={14} />

              </div>

              <span>

                Career Readiness & Placement

              </span>

            </div>

          </div>

          {/* BUTTONS */}

          <div className="ngoMissionButtons">

            <button className="ngoPrimaryBtn">

              Explore Programs

              <span>

                <ArrowUpRight
                  size={16}
                />

              </span>

            </button>

            {/* <button className="ngoSecondaryBtn">

              Watch Story

            </button> */}

          </div>

        </div>

        {/* =====================================================
            RIGHT SIDE
        ===================================================== */}

        <div
          className={`ngoMissionRight ${
            showContent
              ? "showMissionRight"
              : ""
          }`}
        >

          {/* MAIN IMAGE */}

          <div className="ngoMissionImageCard">

            <img
              src={aboutImg}
              alt="About NGO"
            />

            {/* OVERLAY */}

            <div className="ngoImageOverlay"></div>

          </div>

          {/* FLOATING CARD */}

          <div className="ngoFloatingCard missionCardFloat">

            <h3>

              Our Mission

            </h3>

            <p>

              Empowering lives through
              accessible education,
              digital inclusion and
              sustainable growth.

            </p>

          </div>

          {/* FLOATING CARD */}

          <div className="ngoFloatingCard visionCardFloat">

            <h3>

              Our Vision

            </h3>

            <p>

              Creating inclusive
              communities with equal
              access to opportunities
              and innovation.

            </p>

          </div>

        </div>

      </div>

      {/* =====================================================
          WHAT WE DO
      ===================================================== */}

      <div
        className={`ngoWhatWeDoSection ${
          showContent
            ? "showWhatSection"
            : ""
        }`}
      >

        <div className="ngoWhatCard">

          {/* <span>

            WHAT WE DO

          </span> */}

          <h3>

            Education &
            Career Readiness

          </h3>

          <p>

            Preparing youth with
            practical knowledge,
            industry exposure and
            career-focused training.

          </p>

        </div>

        <div className="ngoWhatCard">

          {/* <span>

            COMMUNITY IMPACT

          </span> */}

          <h3>

            Social &
            Community Support

          </h3>

          <p>

            Supporting underserved
            communities through
            awareness programs,
            empowerment initiatives
            and sustainable solutions.

          </p>

        </div>

        <div className="ngoWhatCard">

          {/* <span>

            DIGITAL INNOVATION

          </span> */}

          <h3>

            Technology
            For Change

          </h3>

          <p>

            Leveraging digital tools
            and innovation to solve
            real-world community
            challenges effectively.

          </p>

        </div>

      </div>

    </section>

  );
};

export default AboutMissionVisionSection;
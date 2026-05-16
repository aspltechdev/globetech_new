// MissionVisionSection.jsx

import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import bgImage from "../../assets/aboutmission.jpg";

import "./MissionVisionSection.css";

const MissionVisionSection = () => {

  /* =========================================================
     REF
  ========================================================= */

  const sectionRef = useRef(null);

  /* =========================================================
     ANIMATION STATE
  ========================================================= */

  const [visible, setVisible] =
    useState(false);

  /* =========================================================
     SCROLL REVEAL
  ========================================================= */

  useEffect(() => {

    const observer =
      new IntersectionObserver(

        ([entry]) => {

          if (entry.isIntersecting) {
            setVisible(true);
          }

        },

        {
          threshold: 0.15,
          rootMargin:
            "0px 0px -80px 0px",
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
      className="missionVisionSection"
      ref={sectionRef}
    >

      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <img
        src={bgImage}
        alt="Mission Background"
        className="missionBgImage"
      />

      <div className="missionOverlay"></div>

      {/* =========================================================
          CONTAINER
      ========================================================= */}

      <div className="missionContainer">

        <div className="missionGrid">


 <div
            className={
              visible
                ? "missionCards showMissionCards"
                : "missionCards"
            }
          >

            {/* MISSION */}

            <div className="glassMissionCard">

              <div className="cardGlow"></div>

              <span className="cardMiniTag">

                Our Mission

              </span>

              <h3>

                Empowering Through
                Education & Innovation

              </h3>

              <p>

                Helping communities access
                opportunities, skills, and
                resources needed to thrive in
                the modern world.

              </p>

            </div>

            {/* VISION */}

            <div className="glassMissionCard visionCard">

              <div className="cardGlow"></div>

              <span className="cardMiniTag">

                Our Vision

              </span>

              <h3>

                A More Inclusive &
                Sustainable Future

              </h3>

              <p>

                Creating resilient communities
                driven by equality, innovation,
                and long-term positive change.

              </p>

            </div>

          </div>

          {/* =========================================================
              LEFT CONTENT
          ========================================================= */}

          <div
            className={
              visible
                ? "missionContent showMissionContent"
                : "missionContent"
            }
          >

            {/* TAG */}

           

            {/* TITLE */}

            <h2>

              Creating
             

              Opportunities
              <br />

              For Every Individual.

            </h2>

            {/* DESCRIPTION */}

            <p>

              We are committed to empowering communities
              through education, digital transformation,
              skill development, and sustainable initiatives
              that create long-term positive impact.

            </p>

            {/* POINTS */}

            <div className="missionPoints">

              <div className="missionPoint">

                <div className="missionIcon">

                  <CheckCircle2 size={16} />

                </div>

                <p>

                  Accessible digital education and
                  career-focused learning.

                </p>

              </div>

              <div className="missionPoint">

                <div className="missionIcon">

                  <CheckCircle2 size={16} />

                </div>

                <p>

                  Skill development programs for
                  underserved communities.

                </p>

              </div>

              <div className="missionPoint">

                <div className="missionIcon">

                  <CheckCircle2 size={16} />

                </div>

                <p>

                  Sustainable social initiatives
                  creating measurable impact.

                </p>

              </div>

            </div>

            {/* BUTTONS */}

            <div className="missionButtons">

              <button className="primaryMissionBtn">

                Reach Us

                <span>

                  <ArrowRight size={16} />

                </span>

              </button>

              <button className="secondaryMissionBtn">

                View Programs

              </button>

            </div>

          </div>

          {/* =========================================================
              RIGHT SIDE CARDS
          ========================================================= */}

      

        </div>

      </div>

    </section>
  );
};

export default MissionVisionSection;
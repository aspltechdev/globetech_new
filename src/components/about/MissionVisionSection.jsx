// MissionVisionSection.jsx

import React, { useEffect, useRef, useState } from "react";
import {
  CheckCircle2,
} from "lucide-react";

import bgImage from "../../assets/aboutmission.jpg";

import "./MissionVisionSection.css";

const MissionVisionSection = () => {

  const sectionRef = useRef(null);

  const [showContent, setShowContent] = useState(false);

  /* =========================
     SCROLL ANIMATION
  ========================= */

  useEffect(() => {

    const observer = new IntersectionObserver(

      ([entry]) => {

        if (entry.isIntersecting) {
          setShowContent(true);
        }

      },

      {
        threshold: 0.2,
      }

    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();

  }, []);

  return (

    <section
      className="missionSection"
      ref={sectionRef}
    >

      {/* BG IMAGE */}

      <div className="missionBgOverlay"></div>

      <img
        src={bgImage}
        alt="Background"
        className="missionBgImage"
      />

      <div className="missionContainer">

        <div className="missionWrapper">

          {/* =========================
              LEFT SIDE
          ========================= */}

          <div
            className={`missionLeft ${
              showContent ? "showLeft" : ""
            }`}
          >

            {/* MISSION CARD */}

            <div className="missionCard">

              <div className="missionTag">
                Our Mission
              </div>

              <p>

                Empowering underserved communities through education,
                skill development, and technology-driven initiatives.
                We create practical, scalable solutions that improve
                livelihoods and enable individuals to build a better future.

              </p>

            </div>

            {/* VISION CARD */}

            <div className="missionCard">

              <div className="missionTag">
                Our Vision
              </div>

              <p>

                To build a future where everyone has access to opportunities,
                resources, and the tools needed to thrive. We aim to create
                inclusive, resilient communities that drive lasting positive change.

              </p>

            </div>

          </div>

          {/* =========================
              RIGHT SIDE
          ========================= */}

          <div
            className={`missionRight ${
              showContent ? "showRight" : ""
            }`}
          >

            <h2>
              Closing the Gap.
            </h2>

            <p className="missionDescription">

              Access to opportunities is still out of reach for many
              communities. We exist to create inclusive pathways through
              education, technology, and sustainable support.

            </p>

            {/* POINTS */}

            <div className="missionPoints">

              <div className="missionPoint">

                <div className="missionIcon">

                  <CheckCircle2 size={16} />

                </div>

                <p>
                  Improving access to quality education and digital literacy.
                </p>

              </div>

              <div className="missionPoint">

                <div className="missionIcon">

                  <CheckCircle2 size={16} />

                </div>

                <p>
                  Empowering individuals with skills for sustainable livelihoods.
                </p>

              </div>

              <div className="missionPoint">

                <div className="missionIcon">

                  <CheckCircle2 size={16} />

                </div>

                <p>
                  Strengthening communities through inclusive and scalable initiatives.
                </p>

              </div>

            </div>

            {/* BUTTONS */}

            <div className="missionButtons">

              <button>
                Reach us
              </button>

              <button>
                Recent Projects
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default MissionVisionSection;
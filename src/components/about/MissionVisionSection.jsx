



import React from "react";
import { CheckCircle2 } from "lucide-react";
import dotCircleImg from "../../assets/reachvector.png";

import "./MissionVisionSection.css";

const MissionVisionSection = () => {
  return (

    <section className="auroMissionSection">

      <div className="auroMissionContainer">

        <div className="auroMissionWrapper">

          {/* LEFT SIDE */}

          <div className="auroMissionLeft">

            {/* DOT CIRCLE */}

            {/* <div className="auroMissionDotCircle"></div> */}
            {/* DOT CIRCLE IMAGE */}

<img
  src={dotCircleImg}
  alt="Dot Circle"
  className="auroMissionDotCircle"
/>

            {/* TOP CARD */}

            <div className="auroMissionCard auroMissionTopCard">

              <div className="auroMissionCardTag">
                Our Mission
              </div>

              <p>
                Empowering underserved communities through education,
                skill development, and technology-driven initiatives.
                We create practical, scalable solutions that improve
                livelihoods and enable individuals to build a better future.
              </p>

            </div>

            {/* BOTTOM CARD */}

            <div className="auroMissionCard auroMissionBottomCard">

              <div className="auroMissionCardTag">
                Our Vision
              </div>

              <p>
                To build a future where everyone has access to opportunities,
                resources, and the tools needed to thrive.
                We aim to create inclusive, resilient communities
                that drive lasting positive change.
              </p>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="auroMissionRight">

            <h2>
              Closing the <span>Gap.</span>
            </h2>

            <p className="auroMissionDescription">

              Access to opportunities is still out of reach for many
              communities. We exist to create inclusive pathways through
              education, technology, and sustainable support.

            </p>

            {/* POINTS */}

            <div className="auroMissionPoints">

              <div className="auroMissionPoint">

                <div className="auroMissionIcon">
                  <CheckCircle2 size={16} />
                </div>

                <p>
                  Improving access to quality education and digital literacy.
                </p>

              </div>

              <div className="auroMissionPoint">

                <div className="auroMissionIcon">
                  <CheckCircle2 size={16} />
                </div>

                <p>
                  Empowering individuals with skills for sustainable livelihoods.
                </p>

              </div>

              <div className="auroMissionPoint">

                <div className="auroMissionIcon">
                  <CheckCircle2 size={16} />
                </div>

                <p>
                  Strengthening communities through inclusive and scalable initiatives.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
};

export default MissionVisionSection;
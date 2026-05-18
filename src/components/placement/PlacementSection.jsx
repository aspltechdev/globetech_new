

import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import "./PlacementSection.css";

/* =========================================================
   LOGOS
========================================================= */

import pl1 from "../../assets/placements/pl1.png";
import pl2 from "../../assets/placements/pl2.png";
import pl3 from "../../assets/placements/pl3.png";
import pl4 from "../../assets/placements/pl4.png";
import pl5 from "../../assets/placements/pl5.png";
import pl6 from "../../assets/placements/pl6.png";
import pl7 from "../../assets/placements/pl7.png";
import pl8 from "../../assets/placements/pl8.png";

/* =========================================================
   DATA
========================================================= */

const columnOne = [
  pl1,
  pl2,
  pl3,
  pl4,
  pl5,
  pl6,
];

const columnTwo = [
  pl7,
  pl8,
  pl1,
  pl2,
  pl3,
  pl4,
];

const columnThree = [
  pl5,
  pl6,
  pl7,
  pl8,
  pl1,
  pl2,
];

const PlacementSection = () => {

  const sectionRef = useRef(null);

  const [visible, setVisible] =
    useState(false);

  /* =========================================================
     SCROLL ANIMATION
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
          threshold: 0.12,
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
      className="placementSection"
      ref={sectionRef}
    >

      {/* =========================================================
          BACKGROUND EFFECTS
      ========================================================= */}

      <div className="placementGlowOne"></div>

      <div className="placementGlowTwo"></div>

      {/* =========================================================
          CONTAINER
      ========================================================= */}

      <div className="placementContainer">

        {/* =========================================================
            LEFT CONTENT
        ========================================================= */}

        <div
          className={
            visible
              ? "placementLeft showPlacementLeft"
              : "placementLeft"
          }
        >

          {/* TAG */}

       

          {/* TITLE */}

          <h2>

            Connecting
            <br />

            Talent With
            <br />

            Opportunities.

          </h2>

          {/* DESCRIPTION */}

          <p>

            We collaborate with leading
            companies, industries, CSR
            organizations, and partners
            to create meaningful career
            opportunities for students
            and communities.

          </p>

          {/* STATS */}

          <div className="placementStats">

            <div className="placementStat">

              <h3>

                2500+

              </h3>

              <span>

                Students Trained

              </span>

            </div>

            <div className="placementStat">

              <h3>

                120+

              </h3>

              <span>

                Hiring Partners

              </span>

            </div>

          </div>

        </div>

        {/* =========================================================
            RIGHT SIDE
        ========================================================= */}

        <div
          className={
            visible
              ? "placementRight showPlacementRight"
              : "placementRight"
          }
        >

          {/* COLUMN 1 */}

          <div className="logoColumn">

            <div className="logoTrack moveUp">

              {[...columnOne, ...columnOne]
                .map((logo, index) => (

                  <div
                    className="logoCard"
                    key={index}
                  >

                    <img
                      src={logo}
                      alt="Company"
                    />

                    <div className="logoHover">

                      <ArrowUpRight
                        size={18}
                      />

                    </div>

                  </div>

                ))}

            </div>

          </div>

          {/* COLUMN 2 */}

          <div className="logoColumn centerColumn">

            <div className="logoTrack moveDown">

              {[...columnTwo, ...columnTwo]
                .map((logo, index) => (

                  <div
                    className="logoCard"
                    key={index}
                  >

                    <img
                      src={logo}
                      alt="Company"
                    />

                    <div className="logoHover">

                      <ArrowUpRight
                        size={18}
                      />

                    </div>

                  </div>

                ))}

            </div>

          </div>

          {/* COLUMN 3 */}

          <div className="logoColumn">

            <div className="logoTrack moveUpSlow">

              {[...columnThree, ...columnThree]
                .map((logo, index) => (

                  <div
                    className="logoCard"
                    key={index}
                  >

                    <img
                      src={logo}
                      alt="Company"
                    />

                    <div className="logoHover">

                      <ArrowUpRight
                        size={18}
                      />

                    </div>

                  </div>

                ))}

            </div>

          </div>

        </div>

      </div>

    </section>

  );
};

export default PlacementSection;
// PlacementSection.jsx

import React from "react";

import "./PlacementSection.css";

/* =========================================
   IMPORT LOGOS
========================================= */

import pl1 from "../../assets/placements/pl1.png";
import pl2 from "../../assets/placements/pl2.png";
import pl3 from "../../assets/placements/pl3.png";
import pl4 from "../../assets/placements/pl4.png";
import pl5 from "../../assets/placements/pl5.png";
import pl6 from "../../assets/placements/pl6.png";
import pl7 from "../../assets/placements/pl7.png";
import pl8 from "../../assets/placements/pl8.png";
import pl9 from "../../assets/placements/pl9.png";

/* =========================================
   TOP COMPANY LOGOS
========================================= */

const topCompanies = [

  {
    name: "Company 1",
    logo: pl1,
  },

  {
    name: "Company 2",
    logo: pl2,
  },

  {
    name: "Company 3",
    logo: pl3,
  },

  {
    name: "Company 4",
    logo: pl4,
  },

  {
    name: "Company 5",
    logo: pl5,
  },

  {
    name: "Company 6",
    logo: pl6,
  },

];

/* =========================================
   CSR / PARTNER LOGOS
========================================= */

const csrCompanies = [

  {
    name: "Partner 1",
    logo: pl7,
  },

  {
    name: "Partner 2",
    logo: pl8,
  },

  {
    name: "Partner 3",
    logo: pl9,
  },

  {
    name: "Partner 4",
    logo: pl7,
  },

  {
    name: "Partner 5",
    logo: pl8,
  },

  {
    name: "Partner 6",
    logo: pl9,
  },

];

/* =========================================
   COMPONENT
========================================= */

const PlacementSection = () => {

  return (

    <section className="auroPlacementSection">

      <div className="auroPlacementContainer">

        {/* =====================================
            HEADING
        ===================================== */}

        <div className="auroPlacementHeading">

          <div className="auroPlacementTag">

            <p>
              Our Placement Legacy
            </p>

            <span></span>

          </div>

          <h2>
            Where Our Students Work
          </h2>

        </div>

        {/* =====================================
            TOP SLIDER
        ===================================== */}

        <div className="auroSliderWrapper">

          <div className="auroSliderTrack auroSlideRight">

            {[...topCompanies, ...topCompanies].map((item, index) => (

              <div
                className="auroPlacementLogoCard"
                key={index}
              >

                <img
                  src={item.logo}
                  alt={item.name}
                />

              </div>

            ))}

          </div>

        </div>

        {/* =====================================
            SECOND SLIDER
        ===================================== */}

        <div className="auroSliderWrapper secondRow">

          <div className="auroSliderTrack auroSlideLeft">

            {[...topCompanies, ...topCompanies].map((item, index) => (

              <div
                className="auroPlacementLogoCard"
                key={index}
              >

                <img
                  src={item.logo}
                  alt={item.name}
                />

              </div>

            ))}

          </div>

        </div>

        {/* =====================================
            STRATEGIC SECTION
        ===================================== */}

        <div className="auroStrategicSection">

          <h3 className="auroStrategicTitle">

            Strategic Technical Advantage

          </h3>

          <div className="auroTechWrapper">

            {/* LEFT BOX */}

            <div className="auroTechContent">

              <div className="auroTechItem">

                <h4>
                  Expertise
                </h4>

                <p>
                  Access to a specialist team
                  of design engineers and
                  project implementation
                  specialists.
                </p>

              </div>

              <div className="auroTechItem">

                <h4>
                  Accreditations
                </h4>

                <p>
                  ISO 9001 : 2015
                  Certified Company
                </p>

              </div>

              <div className="auroTechItem">

                <h4>
                  CSR Collaboration
                </h4>

                <p>
                  Trusted Partner for
                  UNICEF, NASSCOM,
                  HGS, GRAMVIKAS,
                  ANUDIP, AISECT,
                  IIT MANDI
                </p>

              </div>

            </div>

            {/* RIGHT GRID */}

            <div className="auroTechGrid">

              {csrCompanies.map((item, index) => (

                <div
                  className="auroTechGridCard"
                  key={index}
                >

                  <img
                    src={item.logo}
                    alt={item.name}
                  />

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
// // PlacementSection.jsx

// import React, {
//   useEffect,
//   useRef,
//   useState,
// } from "react";

// import {
//   ArrowUpRight,
//   Sparkles,
// } from "lucide-react";

// import "./PlacementSection.css";

// /* =========================================================
//    LOGOS
// ========================================================= */

// import pl1 from "../../assets/placements/pl1.png";
// import pl2 from "../../assets/placements/pl2.png";
// import pl3 from "../../assets/placements/pl3.png";
// import pl4 from "../../assets/placements/pl4.png";
// import pl5 from "../../assets/placements/pl5.png";
// import pl6 from "../../assets/placements/pl6.png";

// /* =========================================================
//    DATA
// ========================================================= */

// const companies = [

//   {
//     name: "Company 1",
//     logo: pl1,
//   },

//   {
//     name: "Company 2",
//     logo: pl2,
//   },

//   {
//     name: "Company 3",
//     logo: pl3,
//   },

//   {
//     name: "Company 4",
//     logo: pl4,
//   },

//   {
//     name: "Company 5",
//     logo: pl5,
//   },

//   {
//     name: "Company 6",
//     logo: pl6,
//   },

// ];

// const PlacementSection = () => {

//   const sectionRef = useRef(null);

//   const [visible, setVisible] =
//     useState(false);

//   /* =========================================================
//      SCROLL REVEAL
//   ========================================================= */

//   useEffect(() => {

//     const observer =
//       new IntersectionObserver(

//         ([entry]) => {

//           if (entry.isIntersecting) {
//             setVisible(true);
//           }

//         },

//         {
//           threshold: 0.12,

//           rootMargin:
//             "0px 0px -80px 0px",
//         }

//       );

//     if (sectionRef.current) {

//       observer.observe(
//         sectionRef.current
//       );

//     }

//     return () =>
//       observer.disconnect();

//   }, []);

//   return (

//     <section
//       className="premiumPlacementSection"
//       ref={sectionRef}
//     >

//       {/* =========================================================
//           BACKGROUND
//       ========================================================= */}

//       <div className="placementNoise"></div>

//       <div className="placementGlowOne"></div>

//       <div className="placementGlowTwo"></div>

//       {/* =========================================================
//           CONTAINER
//       ========================================================= */}

//       <div className="premiumPlacementContainer">

//         {/* =========================================================
//             LEFT SIDE
//         ========================================================= */}

//         <div
//           className={
//             visible
//               ? "placementLeft showPlacementLeft"
//               : "placementLeft"
//           }
//         >

//           {/* BADGE */}

//           <div className="placementMiniTag">

//             <Sparkles size={14} />

//             <span>

//               Career & Industry Network

//             </span>

//           </div>

//           {/* TITLE */}

//           <h2>

//             Creating
//             <br />

//             Real Career
//             <br />

//             Opportunities.

//           </h2>

//           {/* DESCRIPTION */}

//           <p>

//             We collaborate with industries,
//             CSR partners, and organizations
//             to create employment pathways,
//             practical exposure, and long-term
//             career growth for students and
//             communities.

//           </p>

//           {/* STATS */}

//           <div className="placementStats">

//             <div className="placementStatCard">

//               <h3>

//                 2500+

//               </h3>

//               <span>

//                 Students Placed

//               </span>

//             </div>

//             <div className="placementStatCard">

//               <h3>

//                 120+

//               </h3>

//               <span>

//                 Industry Partners

//               </span>

//             </div>

//           </div>

//         </div>

//         {/* =========================================================
//             RIGHT SIDE
//         ========================================================= */}

//         <div
//           className={
//             visible
//               ? "placementRight showPlacementRight"
//               : "placementRight"
//           }
//         >

//           {/* FLOATING LOGO CARDS */}

//           {companies.map(
//             (item, index) => (

//               <div
//                 className="floatingLogoCard"

//                 key={index}

//                 style={{
//                   animationDelay:
//                     `${index * 0.4}s`,
//                 }}
//               >

//                 {/* HOVER LIGHT */}

//                 <div className="logoHoverGlow"></div>

//                 {/* IMAGE */}

//                 <img
//                   src={item.logo}
//                   alt={item.name}
//                 />

//                 {/* HOVER ICON */}

//                 <div className="logoArrow">

//                   <ArrowUpRight
//                     size={18}
//                   />

//                 </div>

//               </div>

//             )
//           )}

//         </div>

//       </div>

//     </section>

//   );
// };

// export default PlacementSection;


// PlacementSection.jsx

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
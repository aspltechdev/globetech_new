// // ReachSection.jsx

// import React, {
//   useEffect,
//   useRef,
//   useState,
// } from "react";

// import { CheckCircle2 } from "lucide-react";

// import indiaMap from "../../assets/india-map.png";
// import bgImage from "../../assets/aboutimg.png";

// import "./ReachSection.css";

// /* =========================================
//    STATS DATA
// ========================================= */

// const stats = [
//   {
//     number: 10000,
//     suffix: "+",
//     label: "Lives Impacted",
//   },

//   {
//     number: 500,
//     suffix: "+",
//     label: "Students Guided",
//   },

//   {
//     number: 50,
//     suffix: "+",
//     label: "Community Programs",
//   },

//   {
//     number: 20,
//     suffix: "+",
//     label: "Partner Organizations",
//   },
// ];

// /* =========================================
//    COUNT UP COMPONENT
// ========================================= */

// const CountUp = ({
//   end,
//   duration = 2000,
//   suffix = "",
// }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;

//     const increment =
//       end / (duration / 16);

//     const timer = setInterval(() => {
//       start += increment;

//       if (start >= end) {
//         setCount(end);
//         clearInterval(timer);
//       } else {
//         setCount(Math.floor(start));
//       }
//     }, 16);

//     return () => clearInterval(timer);
//   }, [end, duration]);

//   return (
//     <>
//       {count.toLocaleString()}
//       {suffix}
//     </>
//   );
// };

// const ReachSection = () => {
//   const sectionRef = useRef(null);

//   const [showContent, setShowContent] =
//     useState(false);

//   /* =========================================
//      INTERSECTION OBSERVER
//   ========================================= */

//   useEffect(() => {
//     const observer =
//       new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             setShowContent(true);
//           }
//         },
//         {
//           threshold: 0.25,
//         }
//       );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       className="reachSection"
//       ref={sectionRef}
//     >
//       {/* BG IMAGE */}

//       <img
//         src={bgImage}
//         alt="Background"
//         className="reachBgImage"
//       />

//       {/* OVERLAY */}

//       <div className="reachOverlay"></div>

//       <div className="reachContainer">
//         {/* =====================================
//             TOP AREA
//         ===================================== */}

//         <div className="reachWrapper">
//           {/* LEFT CONTENT */}

//           <div
//             className={`reachLeft ${
//               showContent
//                 ? "showLeft"
//                 : ""
//             }`}
//           >
//             <h2>
//               Pan India Reach &
//               <span>
//                 Connectivity
//               </span>
//             </h2>

//             <p className="reachDescription">
//               Our presence spans across
//               22 states, bringing
//               industrial-grade education
//               and infrastructure to the
//               most remote corners of
//               India. Every dot on our
//               map represents a center of
//               excellence.
//             </p>

//             {/* FEATURES */}

//             <div className="reachPoints">
//               <div className="reachPoint">
//                 <CheckCircle2
//                   size={17}
//                 />

//                 <p>
//                   On-Campus Training
//                 </p>
//               </div>

//               <div className="reachPoint">
//                 <CheckCircle2
//                   size={17}
//                 />

//                 <p>
//                   Corporate Upskilling
//                 </p>
//               </div>

//               <div className="reachPoint">
//                 <CheckCircle2
//                   size={17}
//                 />

//                 <p>
//                   Digital Learning via
//                   G-SKOOL.Com
//                 </p>
//               </div>
//             </div>

//             {/* BUTTON */}

//             <button className="reachBtn">
//               Reach us
//             </button>
//           </div>

//           {/* RIGHT MAP */}

//           <div
//             className={`reachRight ${
//               showContent
//                 ? "showRight"
//                 : ""
//             }`}
//           >
//             <img
//               src={indiaMap}
//               alt="India Map"
//               className="indiaMap"
//             />
//           </div>
//         </div>

//         {/* =====================================
//             STATS TITLE
//         ===================================== */}

//         <h2
//           className={`statsTitle ${
//             showContent
//               ? "showStatsTitle"
//               : ""
//           }`}
//         >
//           Our Stats
//         </h2>

//         {/* =====================================
//             STATS CARDS
//         ===================================== */}

//         <div className="statsWrapper">
//           {stats.map(
//             (item, index) => (
//               <div
//                 key={index}
//                 className={`statCard ${
//                   showContent
//                     ? "showCard"
//                     : ""
//                 }`}
//                 style={{
//                   transitionDelay: `${index * 150}ms`,
//                 }}
//               >
//                 <h3>
//                   {showContent && (
//                     <CountUp
//                       end={item.number}
//                       suffix={
//                         item.suffix
//                       }
//                     />
//                   )}
//                 </h3>

//                 <p>
//                   {item.label}
//                 </p>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ReachSection;




















// ReachSection.jsx

import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import indiaMap from "../../assets/india-map.png";
import bgImage from "../../assets/reachbging.jpg";

import "./ReachSection.css";

/* =========================================================
   STATS DATA
========================================================= */

const stats = [

  {
    number: 10000,
    suffix: "+",
    label: "Lives Impacted",
  },

  {
    number: 500,
    suffix: "+",
    label: "Students Guided",
  },

  {
    number: 50,
    suffix: "+",
    label: "Community Programs",
  },

  {
    number: 20,
    suffix: "+",
    label: "Partner Organizations",
  },

];

/* =========================================================
   COUNT UP
========================================================= */

const CountUp = ({
  end,
  duration = 2000,
  suffix = "",
}) => {

  const [count, setCount] =
    useState(0);

  useEffect(() => {

    let start = 0;

    const increment =
      end / (duration / 16);

    const timer = setInterval(() => {

      start += increment;

      if (start >= end) {

        setCount(end);

        clearInterval(timer);

      }

      else {

        setCount(
          Math.floor(start)
        );

      }

    }, 16);

    return () =>
      clearInterval(timer);

  }, [end, duration]);

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
};

const ReachSection = () => {

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
     INTERSECTION OBSERVER
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
      className="reachSection"
      ref={sectionRef}
    >

      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <img
        src={bgImage}
        alt="Background"
        className="reachBgImage"
      />

      <div className="reachOverlay"></div>

      {/* =========================================================
          CONTAINER
      ========================================================= */}

      <div className="reachContainer">

        {/* =========================================================
            TOP AREA
        ========================================================= */}

        <div className="reachWrapper">

          {/* =========================================================
              LEFT CONTENT
          ========================================================= */}

          <div
            className={
              visible
                ? "reachLeft showReachLeft"
                : "reachLeft"
            }
          >

            {/* BADGE */}

           

            {/* TITLE */}

            <h2>

              Empowering
             

              Communities
           

              Across India.

            </h2>

            {/* DESCRIPTION */}

            <p className="reachDescription">

              Our initiatives reach across
              multiple states, delivering
              education, skill development,
              community wellness, and
              sustainable growth opportunities
              to underserved communities.

            </p>

            {/* POINTS */}

            <div className="reachPoints">

              <div className="reachPoint">

                <div className="reachIcon">

                  <CheckCircle2
                    size={16}
                  />

                </div>

                <p>

                  Community-led education
                  and skill development.

                </p>

              </div>

              <div className="reachPoint">

                <div className="reachIcon">

                  <CheckCircle2
                    size={16}
                  />

                </div>

                <p>

                  Industry-oriented
                  training & placement
                  initiatives.

                </p>

              </div>

              <div className="reachPoint">

                <div className="reachIcon">

                  <CheckCircle2
                    size={16}
                  />

                </div>

                <p>

                  Digital learning access
                  for remote communities.

                </p>

              </div>

            </div>

            {/* BUTTONS */}

            <div className="reachButtons">

              <button className="primaryReachBtn">

                Reach Us

                <span>

                  <ArrowRight
                    size={16}
                  />

                </span>

              </button>

              <button className="secondaryReachBtn">

                Explore Programs

              </button>

            </div>

          </div>

          {/* =========================================================
              RIGHT MAP
          ========================================================= */}

          <div
            className={
              visible
                ? "reachRight showReachRight"
                : "reachRight"
            }
          >

            <div className="mapGlow"></div>

            <img
              src={indiaMap}
              alt="India Map"
              className="indiaMap"
            />

          </div>

        </div>

        {/* =========================================================
            STATS TITLE
        ========================================================= */}

        <div
          className={
            visible
              ? "statsHeading showStatsHeading"
              : "statsHeading"
          }
        >

          <h2>

            Our Impact In Numbers

          </h2>

          <p>

            Every number represents lives
            transformed through meaningful
            social initiatives.

          </p>

        </div>

        {/* =========================================================
            STATS CARDS
        ========================================================= */}

        <div className="statsWrapper">

          {stats.map(
            (item, index) => (

              <div
                key={index}

                className={
                  visible
                    ? "statCard showStatCard"
                    : "statCard"
                }

                style={{
                  transitionDelay:
                    `${index * 180}ms`,
                }}
              >

                <div className="statGlow"></div>

                <h3>

                  {visible && (

                    <CountUp
                      end={item.number}
                      suffix={item.suffix}
                    />

                  )}

                </h3>

                <p>

                  {item.label}

                </p>

              </div>

            )
          )}

        </div>

      </div>

    </section>
  );
};

export default ReachSection;
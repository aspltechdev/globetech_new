

// // ReachSection.jsx

// import React, {
//   useEffect,
//   useRef,
//   useState,
// } from "react";

// import {
//   CheckCircle2,
//   ArrowRight,
//   Sparkles,
// } from "lucide-react";

// import indiaMap from "../../assets/reachedind.png";
// import bgImage from "../../assets/reachbging.png";

// import "./ReachSection.css";
// import { Link } from "react-router-dom";

// /* =========================================================
//    STATS DATA
// ========================================================= */

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

// /* =========================================================
//    COUNT UP
// ========================================================= */

// const CountUp = ({
//   end,
//   duration = 2000,
//   suffix = "",
// }) => {

//   const [count, setCount] =
//     useState(0);

//   useEffect(() => {

//     let start = 0;

//     const increment =
//       end / (duration / 16);

//     const timer = setInterval(() => {

//       start += increment;

//       if (start >= end) {

//         setCount(end);

//         clearInterval(timer);

//       }

//       else {

//         setCount(
//           Math.floor(start)
//         );

//       }

//     }, 16);

//     return () =>
//       clearInterval(timer);

//   }, [end, duration]);

//   return (
//     <>
//       {count.toLocaleString()}
//       {suffix}
//     </>
//   );
// };

// const ReachSection = () => {

//   /* =========================================================
//      REF
//   ========================================================= */

//   const sectionRef = useRef(null);

//   /* =========================================================
//      ANIMATION STATE
//   ========================================================= */

//   const [visible, setVisible] =
//     useState(false);

//   /* =========================================================
//      INTERSECTION OBSERVER
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
//       className="reachSection"
//       ref={sectionRef}
//     >

//       {/* =========================================================
//           BACKGROUND
//       ========================================================= */}

//       <img
//         src={bgImage}
//         alt="Background"
//         className="reachBgImage"
//       />

//       <div className="reachOverlay"></div>

//       {/* =========================================================
//           CONTAINER
//       ========================================================= */}

//       <div className="reachContainer">

//         {/* =========================================================
//             TOP AREA
//         ========================================================= */}

//         <div className="reachWrapper">

//           {/* =========================================================
//               LEFT CONTENT
//           ========================================================= */}

//           <div
//             className={
//               visible
//                 ? "reachLeft showReachLeft"
//                 : "reachLeft"
//             }
//           >

//             {/* BADGE */}

           

//             {/* TITLE */}

//             <h2>

//               Empowering
             

//               Communities
           

//               Across India.

//             </h2>

//             {/* DESCRIPTION */}

//             <p className="reachDescription">

//               Our initiatives reach across
//               multiple states, delivering
//               education, skill development,
//               community wellness, and
//               sustainable growth opportunities
//               to underserved communities.

//             </p>

//             {/* POINTS */}

//             <div className="reachPoints">

//               <div className="reachPoint">

//                 <div className="reachIcon">

//                   <CheckCircle2
//                     size={16}
//                   />

//                 </div>

//                 <p>

//                   Community-led education
//                   and skill development.

//                 </p>

//               </div>

//               <div className="reachPoint">

//                 <div className="reachIcon">

//                   <CheckCircle2
//                     size={16}
//                   />

//                 </div>

//                 <p>

//                   Industry-oriented
//                   training & placement
//                   initiatives.

//                 </p>

//               </div>

//               <div className="reachPoint">

//                 <div className="reachIcon">

//                   <CheckCircle2
//                     size={16}
//                   />

//                 </div>

//                 <p>

//                   Digital learning access
//                   for remote communities.

//                 </p>

//               </div>

//             </div>

//             {/* BUTTONS */}

//             <div className="reachButtons">
// <Link to="/contact">
//               <button className="primaryReachBtn">

//                 Reach Us

//                 <span>

//                   <ArrowRight
//                     size={16}
//                   />

//                 </span>

//               </button>
// </Link>

// <Link to="/programs">
//               <button className="secondaryReachBtn">

//                 Explore Programs

//               </button>
//               </Link>

//             </div>

//           </div>

//           {/* =========================================================
//               RIGHT MAP
//           ========================================================= */}

//           <div
//             className={
//               visible
//                 ? "reachRight showReachRight"
//                 : "reachRight"
//             }
//           >

//             <div className="mapGlow"></div>

//             <img
//               src={indiaMap}
//               alt="India Map"
//               className="indiaMap"
//             />

//           </div>

//         </div>

//         {/* =========================================================
//             STATS TITLE
//         ========================================================= */}

//         <div
//           className={
//             visible
//               ? "statsHeading showStatsHeading"
//               : "statsHeading"
//           }
//         >

//           <h2>

//             Our Impact In Numbers

//           </h2>

//           <p>

//             Every number represents lives
//             transformed through meaningful
//             social initiatives.

//           </p>

//         </div>

//         {/* =========================================================
//             STATS CARDS
//         ========================================================= */}

//         <div className="statsWrapper">

//           {stats.map(
//             (item, index) => (

//               <div
//                 key={index}

//                 className={
//                   visible
//                     ? "statCard showStatCard"
//                     : "statCard"
//                 }

//                 style={{
//                   transitionDelay:
//                     `${index * 180}ms`,
//                 }}
//               >

//                 <div className="statGlow"></div>

//                 <h3>

//                   {visible && (

//                     <CountUp
//                       end={item.number}
//                       suffix={item.suffix}
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

// import React, { useEffect, useRef, useState } from "react";

// import {
//   ArrowRight,
//   CheckCircle2,
// } from "lucide-react";

// import indiaOutline from "../../assets/indiaout.png";

// import img1 from "../../assets/about-1.jpg";
// import img2 from "../../assets/about-2.jpg";
// import img3 from "../../assets/about123.jpg";

// import "./ReachSection.css";

// const images = [img1, img2, img3];

// const ReachSection = () => {
//   const [currentImage, setCurrentImage] = useState(0);

//   const sectionRef = useRef(null);

//   const [visible, setVisible] = useState(false);

//   /* IMAGE AUTO CHANGE */

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) =>
//         prev === images.length - 1 ? 0 : prev + 1
//       );
//     }, 3500);

//     return () => clearInterval(interval);
//   }, []);

//   /* SCROLL ANIMATION */

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//         }
//       },
//       {
//         threshold: 0.15,
//       }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="reachSection" ref={sectionRef}>
//       <div className="premiumBlur"></div>

//       <div className="reachContainer">
//         {/* LEFT CONTENT */}

//         <div
//           className={
//             visible
//               ? "reachLeft showReachLeft"
//               : "reachLeft"
//           }
//         >
//           <span className="reachBadge">
//             Transforming Lives Across India
//           </span>

//           <h1>
//             Nourishing Futures,
//             <br />
//             Empowering Communities.
//           </h1>

//           <p>
//             We deliver education, nutrition,
//             digital access and sustainable
//             opportunities to underserved
//             communities across India through
//             impactful grassroots initiatives.
//           </p>

//           <div className="reachPoints">
//             <div className="reachPoint">
//               <CheckCircle2 size={16} />
//               <span>Education & Skill Programs</span>
//             </div>

//             <div className="reachPoint">
//               <CheckCircle2 size={16} />
//               <span>Digital Access For Rural Areas</span>
//             </div>

//             <div className="reachPoint">
//               <CheckCircle2 size={16} />
//               <span>Nutrition & Community Welfare</span>
//             </div>
//           </div>

//           <div className="reachButtons">
//             <button className="primaryBtn">
//               Join Mission
//               <ArrowRight size={16} />
//             </button>

//             <button className="secondaryBtn">
//               Explore Programs
//             </button>
//           </div>
//         </div>

//         {/* RIGHT PREMIUM MAP */}

//         <div
//           className={
//             visible
//               ? "reachRight showReachRight"
//               : "reachRight"
//           }
//         >
//           <div className="mapWrapper">
//             {/* CHANGING IMAGES */}

//             <div className="mapImageContainer">
//               {images.map((img, index) => (
//                 <img
//                   key={index}
//                   src={img}
//                   alt=""
//                   className={
//                     index === currentImage
//                       ? "mapImage active"
//                       : "mapImage"
//                   }
//                 />
//               ))}
//             </div>

//             {/* INDIA OUTLINE */}

//             <img
//               src={indiaOutline}
//               alt="India Outline"
//               className="indiaOutline"
//             />

//             <div className="mapGlow"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ReachSection;







// ReachSection.jsx

// import React, {
//   useEffect,
//   useRef,
//   useState,
// } from "react";

// import {
//   ArrowRight,
//   CheckCircle2,
// } from "lucide-react";

// import { Link } from "react-router-dom";

// import indiaMask from "../../assets/india-mask.png";
// import indiaOutline from "../../assets/inout.png";

// import img1 from "../../assets/about-1.jpg";
// import img2 from "../../assets/about-2.jpg";
// import img3 from "../../assets/about123.jpg";
// import img4 from "../../assets/aboutimg.png";

// import "./ReachSection.css";

// /* =========================================================
//    IMAGES
// ========================================================= */

// const images = [
//   img1,
//   img2,
//   img3,
//   img4,
// ];

// /* =========================================================
//    COMPONENT
// ========================================================= */

// const ReachSection = () => {

//   const sectionRef = useRef(null);

//   const [visible, setVisible] =
//     useState(false);

//   const [currentImage, setCurrentImage] =
//     useState(0);

//   /* =========================================================
//      AUTO IMAGE CHANGE
//   ========================================================= */

//   useEffect(() => {

//     const interval = setInterval(() => {

//       setCurrentImage((prev) =>
//         prev === images.length - 1
//           ? 0
//           : prev + 1
//       );

//     }, 3500);

//     return () =>
//       clearInterval(interval);

//   }, []);

//   /* =========================================================
//      SCROLL ANIMATION
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
//           threshold: 0.15,
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
//       className="reachSection"
//       ref={sectionRef}
//     >

//       {/* =========================================================
//           PREMIUM BACKGROUND
//       ========================================================= */}

//       <div className="premiumBlurOne"></div>

//       <div className="premiumBlurTwo"></div>

//       {/* =========================================================
//           CONTAINER
//       ========================================================= */}

//       <div className="reachContainer">

//         {/* =========================================================
//             LEFT CONTENT
//         ========================================================= */}

//         <div
//           className={
//             visible
//               ? "reachLeft showReachLeft"
//               : "reachLeft"
//           }
//         >

//           {/* BADGE */}

//           <div className="reachBadge">

//             Empowering Communities

//           </div>

//           {/* TITLE */}

//           <h1>

//             Nourishing Futures.
//             <br />

//             Building Smiles Across India.

//           </h1>

//           {/* DESCRIPTION */}

//           <p>

//             Delivering education,
//             nutrition, digital access
//             and sustainable opportunities
//             to underserved communities
//             through impactful social
//             initiatives.

//           </p>

//           {/* POINTS */}

//           <div className="reachPoints">

//             <div className="reachPoint">

//               <CheckCircle2 size={16} />

//               <span>

//                 Education & skill
//                 development programs

//               </span>

//             </div>

//             <div className="reachPoint">

//               <CheckCircle2 size={16} />

//               <span>

//                 Digital learning access
//                 for rural communities

//               </span>

//             </div>

//             <div className="reachPoint">

//               <CheckCircle2 size={16} />

//               <span>

//                 Nutrition & social welfare
//                 initiatives

//               </span>

//             </div>

//           </div>

//           {/* BUTTONS */}

//           <div className="reachButtons">

//             <Link to="/contact">

//               <button className="primaryBtn">

//                 Join Mission

//                 <ArrowRight size={16} />

//               </button>

//             </Link>

//             <Link to="/programs">

//               <button className="secondaryBtn">

//                 Explore Programs

//               </button>

//             </Link>

//           </div>

//         </div>

//         {/* =========================================================
//             RIGHT MAP SECTION
//         ========================================================= */}

//         <div
//           className={
//             visible
//               ? "reachRight showReachRight"
//               : "reachRight"
//           }
//         >

//           <div className="mapWrapper">

//             {/* IMAGE MASK */}

//             <div className="mapImageContainer">

//               {images.map(
//                 (img, index) => (

//                   <img
//                     key={index}
//                     src={img}
//                     alt="Community"
//                     className={
//                       index === currentImage
//                         ? "mapImage active"
//                         : "mapImage"
//                     }
//                   />

//                 )
//               )}

//             </div>

//             {/* OUTLINE */}

//             <img
//               src={indiaOutline}
//               alt="India Outline"
//               className="indiaOutline"
//             />

//             {/* GLOW */}

//             <div className="mapGlow"></div>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default ReachSection;









import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Building2,
  Globe,
} from "lucide-react";

import { Link } from "react-router-dom";

import indiaMask from "../../assets/india-mask.png";
import indiaOutline from "../../assets/inout.png";

import img1 from "../../assets/rch2.png";
import img2 from "../../assets/rch3.png";
import img3 from "../../assets/rch4.png";
import img4 from "../../assets/rch1.png";

import "./ReachSection.css";

const images = [
  img1,
  img2,
  img3,
  img4,
];

const floatingCards = [

  {
    icon: <GraduationCap size={18} />,
    title: "30,000+",
    text: "Students Trained",
    className: "cardOne",
  },

  {
    icon: <Building2 size={18} />,
    title: "Pan India",
    text: "Training Presence",
    className: "cardTwo",
  },

  {
    icon: <Briefcase size={18} />,
    title: "Job Drives",
    text: "Career Opportunities",
    className: "cardThree",
  },

  {
    icon: <Globe size={18} />,
    title: "Digital Learning",
    text: "G-SKOOL Platform",
    className: "cardFour",
  },

];

const ReachSection = () => {

  const sectionRef = useRef(null);

  const [visible, setVisible] =
    useState(false);

  const [currentImage, setCurrentImage] =
    useState(0);

  /* IMAGE CHANGE */

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentImage((prev) =>
        prev === images.length - 1
          ? 0
          : prev + 1
      );

    }, 3500);

    return () =>
      clearInterval(interval);

  }, []);

  /* SCROLL TRIGGER */

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

      <div className="premiumBlurOne"></div>

      <div className="premiumBlurTwo"></div>

      {/* GRID */}

      <div className="gridOverlay"></div>

      <div className="reachContainer">

        {/* LEFT */}

        <div
          className={
            visible
              ? "reachLeft showReachLeft"
              : "reachLeft"
          }
        >

          <div className="reachBadge">

            A Nationwide initiative

          </div>

          <h1>

            Connecting
            Communities
            Across India.

          </h1>

          <p>

            Globetech Social Impact Foundation
            empowers students, communities,
            and institutions through skilling,
            placement initiatives, digital
            learning, workshops, industry
            readiness programs, and sustainable
            social development across India.

          </p>

          <div className="reachPoints">

            <div className="reachPoint">

              <CheckCircle2 size={16} />

              <span>

                30,000+ students trained
                across India

              </span>

            </div>

            <div className="reachPoint">

              <CheckCircle2 size={16} />

              <span>

                Regional hubs in Bengaluru,
                Udupi, Moodbidri & Mangaluru

              </span>

            </div>

            <div className="reachPoint">

              <CheckCircle2 size={16} />

              <span>

                Workshops, internships &
                job drive initiatives

              </span>

            </div>

          </div>

          <div className="reachButtons">

            <Link to="/contact">

              <button className="primaryBtn">

                Join Mission

                <ArrowRight size={16} />

              </button>

            </Link>

            <Link to="/programs">

              <button className="secondaryBtn">

                Explore Programs

              </button>

            </Link>

          </div>

        </div>

        {/* RIGHT */}

        <div
          className={
            visible
              ? "reachRight showReachRight"
              : "reachRight"
          }
        >

          <div className="mapWrapper">

            {/* FLOATING CARDS */}

            {floatingCards.map(
              (item, index) => (

                <div
                  key={index}
                  className={`floatingCard ${item.className}`}
                >

                  <div className="floatingIcon">

                    {item.icon}

                  </div>

                  <div>

                    <h4>{item.title}</h4>

                    <p>{item.text}</p>

                  </div>

                </div>

              )
            )}

            {/* IMAGE MASK */}

            <div className="mapImageContainer">

              {images.map(
                (img, index) => (

                  <img
                    key={index}
                    src={img}
                    alt="Community"
                    className={
                      index === currentImage
                        ? "mapImage active"
                        : "mapImage"
                    }
                  />

                )
              )}

            </div>

            {/* OUTLINE */}

            <img
              src={indiaOutline}
              alt="India Outline"
              className="indiaOutline"
            />

            {/* GLOW */}

            <div className="mapGlow"></div>

          </div>

        </div>

      </div>

    </section>

  );
};

export default ReachSection;
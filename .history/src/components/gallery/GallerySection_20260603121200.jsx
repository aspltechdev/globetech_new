// // GallerySection.jsx

// import React, {
//   useEffect,
//   useRef,
//   useState,
// } from "react";

// import {
//   ArrowUpRight,
//   Sparkles,
// } from "lucide-react";

// import impact1 from "../../assets/impact/impact-1.png";
// import impact2 from "../../assets/impact/impact-2.png";
// import impact3 from "../../assets/impact/impact-3.png";
// import impact4 from "../../assets/impact/impact-4.png";
// import impact5 from "../../assets/impact/impact-5.png";
// import impact6 from "../../assets/impact/impact-6.png";

// import "./GallerySection.css";
// import { Link } from "react-router-dom";

// /* =========================================================
//    GALLERY DATA
// ========================================================= */

// const galleryImages = [

//   {
//     image: impact1,

//     title:
//       "Inauguration Ceremony",

//     category:
//       "Community",
//   },

//   {
//     image: impact2,

//     title:
//       "Workshop Session",

//     category:
//       "Training",
//   },

//   {
//     image: impact3,

//     title:
//       "Skill Development Program",

//     category:
//       "Education",
//   },

//   {
//     image: impact4,

//     title:
//       "Community Initiative",

//     category:
//       "Social Impact",
//   },

//   {
//     image: impact5,

//     title:
//       "Training Event",

//     category:
//       "Empowerment",
//   },

//   {
//     image: impact6,

//     title:
//       "Industry Interaction",

//     category:
//       "Career Growth",
//   },

// ];

// const GallerySection = () => {

//   const sectionRef = useRef(null);

//   const [showGallery, setShowGallery] =
//     useState(false);

//   /* =========================================================
//      SCROLL REVEAL
//   ========================================================= */

//   useEffect(() => {

//     const observer =
//       new IntersectionObserver(

//         ([entry]) => {

//           if (entry.isIntersecting) {

//             setShowGallery(true);

//           }

//         },

//         {
//           threshold: 0.12,
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
//       className="gallerySection"
//       ref={sectionRef}
//     >

//       {/* =========================================================
//           GLOW
//       ========================================================= */}

//       <div className="galleryGlowOne"></div>

//       <div className="galleryGlowTwo"></div>

//       {/* =========================================================
//           CONTAINER
//       ========================================================= */}

//       <div className="galleryContainer">

//         {/* =========================================================
//             HEADING
//         ========================================================= */}

//         <div
//           className={
//             showGallery
//               ? "galleryHeading showGalleryHeading"
//               : "galleryHeading"
//           }
//         >

        

//           <h2>

//             Stories Of
           

//             Change &
           

//             Community Impact.

//           </h2>

//           <p>

//             Every initiative, workshop,
//             training, and event creates
//             meaningful transformation in
//             the lives of students and
//             communities.

//           </p>

//         </div>

//         {/* =========================================================
//             MASONRY GRID
//         ========================================================= */}

//         <div className="galleryGrid">

//           {galleryImages.map(
//             (item, index) => (

//               <div
//                 className={
//                   showGallery
//                     ? "galleryCard showGalleryCard"
//                     : "galleryCard"
//                 }

//                 key={index}

//                 style={{
//                   transitionDelay:
//                     `${index * 120}ms`,
//                 }}
//               >

//                 {/* IMAGE */}

//                 <img
//                   src={item.image}
//                   alt={item.title}
//                 />

//                 {/* OVERLAY */}

//                 <div className="galleryOverlay"></div>

//                 {/* CONTENT */}

//                 <div className="galleryContent">

//                   <span>

//                     {item.category}

//                   </span>

//                   <h3>

//                     {item.title}

//                   </h3>

//                   <div className="galleryArrow">

//                     <ArrowUpRight
//                       size={18}
//                     />

//                   </div>

//                 </div>

//               </div>

//             )
//           )}

//         </div>

//         {/* =========================================================
//             BUTTON
//         ========================================================= */}

//         <div
//           className={
//             showGallery
//               ? "galleryBtnWrapper showGalleryBtn"
//               : "galleryBtnWrapper"
//           }
//         >
//           <Link to="/events">

//           <button className="galleryBtn">

//             View More Gallery

//             <span>

//               <ArrowUpRight
//                 size={18}
//               />

//             </span>

//           </button>
//           </Link>

//         </div>

//       </div>

//     </section>

//   );
// };

// export default GallerySection;



// =========================================================
// ULTRA MODERN CINEMATIC GALLERY
// Floating Curved Gallery Experience
// Apple Vision / Awwwards Inspired
// =========================================================


// =========================================================
// SPATIAL GALLERY SECTION
// Apple / Tesla / Stripe Inspired
// Premium Cinematic Spatial Gallery
// =========================================================

// import React, {
//   useEffect,
//   useRef,
//   useState,
// } from "react";

// import {
//   ArrowUpRight,
// } from "lucide-react";

// import "./GallerySection.css";

// import img1 from "../../assets/impact/imgfour.jpeg";
// import img2 from "../../assets/impact/impact-2.png";
// import img3 from "../../assets/impact/imgone.jpeg";
// import img4 from "../../assets/impact/imgthree.jpeg";
// import img5 from "../../assets/impact/imgtwo.jpeg";

// /* =========================================================
//    DATA
// ========================================================= */

// const galleryData = [

//   {
//     image: img1,

//     title:
//       "Training Workshops",

//     desc:
//       "Conducting interactive workshops that foster learning and skill development.",

//     stat:
//       "500+ Training Programs",

//     glow:
//       "#ff8a3d",
//   },

//   {
//     image: img2,

//     title:
//       "Educational Initiatives",

//     desc:
//       "Celebrating initiatives that empower learning and social progress.",

//     stat:
//       "500+ Programs Conducted",

//     glow:
//       "#ff5fa2",
//   },

//   {
//     image: img3,

//     title:
//       "Skill Development",

//     desc:
//       "Empowering individuals with practical skills for personal and professional growth.",

//     stat:
//       "Across Rural India",

//     glow:
//       "#53a0ff",
//   },

//  {
//   image: img4,

//   title: "Career Readiness Program",

//   desc: "Preparing students for successful careers through training, mentorship, and industry engagement.",

//   stat: "1,200+ Placements Facilitated",

//   glow: "#4ecdc4",
// },

//   {
//   image: img5,

//   title: "Digital Skills Training",

//   desc: "Empowering students with practical technology skills through hands-on learning and industry-focused mentorship.",

//   stat: "Pan India Initiatives",

//   glow: "#00c27a",
// },

// ];

// const GallerySection = () => {

//   const [active,
//     setActive] =
//     useState(0);

//   const [visible,
//     setVisible] =
//     useState(false);

//   const sectionRef =
//     useRef(null);

//   /* =========================================================
//      AUTO CHANGE
//   ========================================================= */

//   useEffect(() => {

//     const interval =
//       setInterval(() => {

//         setActive((prev) =>

//           prev ===
//           galleryData.length - 1
//             ? 0
//             : prev + 1

//         );

//       }, 4200);

//     return () =>
//       clearInterval(interval);

//   }, []);

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
//       className="gtSpatialGallerySection"
//       ref={sectionRef}
//     >

//       {/* =========================================================
//           DYNAMIC GLOW
//       ========================================================= */}

//       <div
//         className="gtSpatialDynamicGlow"

//         style={{
//           background:
//             `radial-gradient(circle,
//             ${galleryData[active].glow}55,
//             transparent 70%)`,
//         }}
//       ></div>

//       {/* GRID */}

//       <div className="gtSpatialGrid"></div>

//       {/* =========================================================
//           FLOATING TYPOGRAPHY
//       ========================================================= */}

//       <div className="gtSpatialWords">

//         <span>

//           IMPACT

//         </span>

//         <span>

//           CHANGE

//         </span>

//         <span>

//           HUMANITY

//         </span>

//       </div>

//       {/* =========================================================
//           TOP
//       ========================================================= */}

//       <div
//         className={
//           visible
//             ? "gtSpatialTop gtSpatialTopShow"
//             : "gtSpatialTop"
//         }
//       >

//         <span>

//           GALLERY EXPERIENCE

//         </span>

//         <h2>

//           Every Moment
//           Creates Impact.

//         </h2>

//         <p>

//           Real stories.
//           Real transformation.
//           Real people shaping
//           a better future.

//         </p>

//       </div>

//       {/* =========================================================
//           SPATIAL FLOW
//       ========================================================= */}

//       <div className="gtSpatialWrap">

//         {galleryData.map(
//           (item, index) => {

//             let cardClass =
//               "gtSpatialCard";

//             const total =
//               galleryData.length;

//             const prev2 =
//               (active - 2 + total) %
//               total;

//             const prev1 =
//               (active - 1 + total) %
//               total;

//             const next1 =
//               (active + 1) %
//               total;

//             const next2 =
//               (active + 2) %
//               total;

//             if (
//               index === active
//             ) {

//               cardClass +=
//                 " activeSpatialCard";

//             }

//             else if (
//               index === prev1
//             ) {

//               cardClass +=
//                 " leftSpatialCard";

//             }

//             else if (
//               index === prev2
//             ) {

//               cardClass +=
//                 " farLeftSpatialCard";

//             }

//             else if (
//               index === next1
//             ) {

//               cardClass +=
//                 " rightSpatialCard";

//             }

//             else if (
//               index === next2
//             ) {

//               cardClass +=
//                 " farRightSpatialCard";

//             }

//             else {

//               cardClass +=
//                 " hiddenSpatialCard";

//             }

//             return (

//               <div
//                 key={index}
//                 className={cardClass}
//               >

//                 {/* IMAGE */}

//                 <img
//                   src={item.image}
//                   alt={item.title}
//                 />

//                 {/* OVERLAY */}

//                 <div className="gtSpatialOverlay"></div>

//                 {/* FLOATING METRIC */}

//                 <div className="gtSpatialMetric">

//                   {item.stat}

//                 </div>

//                 {/* CONTENT */}

//                 <div className="gtSpatialContent">

//                   <span>

//                     {/* HUMAN STORY */}

//                   </span>

//                   <h3>

//                     {item.title}

//                   </h3>

//                   <p>

//                     {item.desc}

//                   </p>

//                   <button>

//                     Explore Story

//                     <ArrowUpRight
//                       size={17}
//                     />

//                   </button>

//                 </div>

//               </div>

//             );

//           }
//         )}

//       </div>

//     </section>

//   );

// };

// export default GallerySection;

import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import "./GallerySection.css";

import img1 from "../../assets/impact/imgfour.jpeg";
import img2 from "../../assets/impact/impact-2.png";
import img3 from "../../assets/impact/imgone.jpeg";
import img4 from "../../assets/impact/imgthree.jpeg";
import img5 from "../../assets/impact/imgtwo.jpeg";

/* =========================================================
   DATA
========================================================= */

const galleryData = [
  {
    image: img1,
    title: "Training Workshops",
    desc: "Conducting interactive workshops that foster learning and skill development.",
    stat: "500+ Training Programs",
    glow: "#ff8a3d",
  },
  {
    image: img2,
    title: "Educational Initiatives",
    desc: "Celebrating initiatives that empower learning and social progress.",
    stat: "500+ Programs Conducted",
    glow: "#ff5fa2",
  },
  {
    image: img3,
    title: "Skill Development",
    desc: "Empowering individuals with practical skills for personal and professional growth.",
    stat: "Across Rural India",
    glow: "#53a0ff",
  },
  {
    image: img4,
    title: "Career Readiness Program",
    desc: "Preparing students for successful careers through training, mentorship, and industry engagement.",
    stat: "1,200+ Placements Facilitated",
    glow: "#4ecdc4",
  },
  {
    image: img5,
    title: "Digital Skills Training",
    desc: "Empowering students with practical technology skills through hands-on learning and industry-focused mentorship.",
    stat: "Pan India Initiatives",
    glow: "#00c27a",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

const GallerySection = () => {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [panelVisible, setPanelVisible] = useState(true);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  const total = galleryData.length;

  /* =========================================================
     HELPERS
  ========================================================= */

  const goTo = (index) => {
    if (animating) return;
    setAnimating(true);
    setPanelVisible(false);
    setTimeout(() => {
      setActive((index + total) % total);
      setTimeout(() => {
        setPanelVisible(true);
        setAnimating(false);
      }, 80);
    }, 320);
  };

  const prev = () => goTo(active - 1);
  const next = () => goTo(active + 1);

  /* =========================================================
     AUTO ADVANCE
  ========================================================= */

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => goTo(active + 1), 4200);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setAnimating(true);
      setPanelVisible(false);
      setTimeout(() => {
        setActive((prev) => (prev === total - 1 ? 0 : prev + 1));
        setTimeout(() => {
          setPanelVisible(true);
          setAnimating(false);
        }, 80);
      }, 320);
    }, 4200);
    return () => clearInterval(intervalRef.current);
  }, []);

  /* =========================================================
     SCROLL REVEAL
  ========================================================= */

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* =========================================================
     CARD POSITION LOGIC
  ========================================================= */

  const getCardState = (index) => {
    const offset = (index - active + total) % total;
    // Map offset to position: 0=active, 1=right1, 2=right2, total-1=left1, total-2=left2
    if (offset === 0) return "active";
    if (offset === 1) return "right1";
    if (offset === 2) return "right2";
    if (offset === total - 1) return "left1";
    if (offset === total - 2) return "left2";
    return "hidden";
  };

  const item = galleryData[active];

  return (
    <section className="gtSpatialGallerySection" ref={sectionRef}>

      {/* DYNAMIC GLOW */}
      <div
        className="gtSpatialDynamicGlow"
        style={{
          background: `radial-gradient(circle, ${item.glow}44, transparent 70%)`,
        }}
      />

      {/* GRID */}
      <div className="gtSpatialGrid" />

      {/* FLOATING WORDS */}
      <div className="gtSpatialWords">
        <span>IMPACT</span>
        <span>CHANGE</span>
        <span>HUMANITY</span>
      </div>

      {/* =========================================================
          TOP HEADING
      ========================================================= */}
      <div className={`gtSpatialTop${visible ? " gtSpatialTopShow" : ""}`}>
        <span>GALLERY EXPERIENCE</span>
        <h2>Every Moment<br />Creates Impact.</h2>
        <p>Real stories. Real transformation. Real people shaping a better future.</p>
      </div>

      {/* =========================================================
          MAIN STAGE
      ========================================================= */}
      <div className="gtSpatialStage">

        {/* NAV LEFT */}
        <button
          className="gtSpatialNavBtn gtSpatialNavLeft"
          onClick={() => { prev(); resetInterval(); }}
          aria-label="Previous"
        >
          <ArrowLeft size={22} />
        </button>

        {/* CARD ROW */}
        <div className="gtSpatialRow">
          {galleryData.map((card, index) => {
            const state = getCardState(index);
            return (
              <div
                key={index}
                className={`gtSpatialCard gtSpatialCard--${state}`}
                onClick={() => state !== "active" && goTo(index)}
              >
                <img src={card.image} alt={card.title} />
                <div className="gtSpatialOverlay" />
                <div className="gtSpatialStatBadge">{card.stat}</div>
              </div>
            );
          })}
        </div>

        {/* NAV RIGHT */}
        <button
          className="gtSpatialNavBtn gtSpatialNavRight"
          onClick={() => { next(); resetInterval(); }}
          aria-label="Next"
        >
          <ArrowRight size={22} />
        </button>

      </div>

      {/* =========================================================
          RED GLASSMORPHISM INFO PANEL
      ========================================================= */}
      <div className={`gtSpatialInfoPanel${panelVisible ? " gtSpatialInfoPanelShow" : ""}`}>
        <div className="gtSpatialInfoBadge">{item.stat}</div>
        <h3 className="gtSpatialInfoTitle">{item.title}</h3>
        <p className="gtSpatialInfoDesc">{item.desc}</p>
        <button className="gtSpatialInfoBtn">
          Explore Story <ArrowUpRight size={16} />
        </button>

        {/* DOT INDICATORS */}
        <div className="gtSpatialDots">
          {galleryData.map((_, i) => (
            <button
              key={i}
              className={`gtSpatialDot${i === active ? " gtSpatialDotActive" : ""}`}
              onClick={() => { goTo(i); resetInterval(); }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

    </section>
  );
};

export default GallerySection;
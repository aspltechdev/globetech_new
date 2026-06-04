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

import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight, X } from "lucide-react";
import "./GallerySection.css";

import img1 from "../../assets/impact/imgfour.jpeg";
import img2 from "../../assets/impact/impact-2.png";
import img3 from "../../assets/impact/imgone.jpeg";
import img4 from "../../assets/impact/imgthree.jpeg";
import img5 from "../../assets/impact/imgtwo.jpeg";

const galleryData = [
  {
    image: img1,
    title: "Training Workshops",
    desc: "Conducting interactive workshops that foster learning and skill development across communities.",
    stat: "500+ Training Programs",
    tag: "WORKSHOPS",
    glow: "#ff8a3d",
  },
  {
    image: img2,
    title: "Educational Initiatives",
    desc: "Celebrating initiatives that empower learning and social progress in underserved regions.",
    stat: "500+ Programs Conducted",
    tag: "EDUCATION",
    glow: "#ff5fa2",
  },
  {
    image: img3,
    title: "Skill Development",
    desc: "Empowering individuals with practical skills for personal and professional growth.",
    stat: "Across Rural India",
    tag: "SKILLS",
    glow: "#53a0ff",
  },
  {
    image: img4,
    title: "Career Readiness Program",
    desc: "Preparing students for successful careers through training, mentorship, and industry engagement.",
    stat: "1,200+ Placements Facilitated",
    tag: "CAREERS",
    glow: "#4ecdc4",
  },
  {
    image: img5,
    title: "Digital Skills Training",
    desc: "Empowering students with practical technology skills through hands-on learning.",
    stat: "Pan India Initiatives",
    tag: "DIGITAL",
    glow: "#00c27a",
  },
];

export default function GallerySection() {
  const [active, setActive] = useState(0);
  const [infoOpen, setInfoOpen] = useState(false);
  const [infoIndex, setInfoIndex] = useState(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  /* Auto-rotate — pauses when info panel is open */
  useEffect(() => {
    if (infoOpen) return;
    const id = setInterval(() => {
      setActive((p) => (p + 1) % galleryData.length);
    }, 4200);
    return () => clearInterval(id);
  }, [infoOpen]);

  /* Scroll reveal */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  /* Click a card */
  const handleCardClick = (index) => {
    if (index === active) {
      setInfoIndex(index);
      setInfoOpen(true);
    } else {
      setActive(index);
      setInfoOpen(false);
    }
  };

  const closeInfo = () => setInfoOpen(false);

  /* Position each card */
  const getCardStyle = (index) => {
    const total = galleryData.length;
    const offset = ((index - active + total) % total + total) % total;
    // offset: 0=front, 1=right-1, 2=right-2, 3=left-2 (far left), 4=left-1
    const normalised = offset <= 2 ? offset : offset - total;
    // normalised: -2,-1,0,1,2
    const positions = {
      "-2": { x: -260, z: -180, rotY: 18,  scale: 0.72, opacity: 0.35, zIndex: 1 },
      "-1": { x: -150, z: -90,  rotY: 12,  scale: 0.84, opacity: 0.60, zIndex: 2 },
       "0": { x: 0,    z: 0,    rotY: 0,   scale: 1,    opacity: 1,    zIndex: 5 },
       "1": { x: 150,  z: -90,  rotY: -12, scale: 0.84, opacity: 0.60, zIndex: 2 },
       "2": { x: 260,  z: -180, rotY: -18, scale: 0.72, opacity: 0.35, zIndex: 1 },
    };
    return positions[String(normalised)] || { x: 0, z: -300, rotY: 0, scale: 0.5, opacity: 0, zIndex: 0 };
  };

  const activeItem = infoIndex !== null ? galleryData[infoIndex] : galleryData[active];

  return (
    <section className={`gs-section${visible ? " gs-visible" : ""}`} ref={sectionRef}>

      {/* Ambient glow */}
      <div
        className="gs-glow"
        style={{ background: `radial-gradient(ellipse 60% 50% at 60% 60%, ${galleryData[active].glow}44, transparent 70%)` }}
      />

      {/* Info panel — slides in from left */}
      <div className={`gs-info-panel${infoOpen ? " gs-info-open" : ""}`}>
        <button className="gs-info-close" onClick={closeInfo} aria-label="Close">
          <X size={18} />
        </button>

        <span className="gs-info-tag">{activeItem.tag}</span>
        <h2 className="gs-info-title">{activeItem.title}</h2>
        <p className="gs-info-desc">{activeItem.desc}</p>

        <div className="gs-info-stat">
          <span className="gs-stat-number">{activeItem.stat}</span>
        </div>

        <button className="gs-info-cta">
          Explore Story <ArrowUpRight size={16} />
        </button>
      </div>

      {/* Overlay backdrop when panel open */}
      {infoOpen && <div className="gs-backdrop" onClick={closeInfo} />}

      {/* Header */}
      <div className="gs-header">
        <span className="gs-eyebrow">GALLERY EXPERIENCE</span>
        <h1 className="gs-heading">Every Moment<br />Creates Impact.</h1>
        <p className="gs-sub">Real stories. Real transformation. Real people.</p>
      </div>

      {/* Stage */}
      <div className="gs-stage">
        {galleryData.map((item, i) => {
          const pos = getCardStyle(i);
          return (
            <div
              key={i}
              className={`gs-card${i === active ? " gs-card-active" : ""}`}
              style={{
                transform: `translateX(${pos.x}px) translateZ(${pos.z}px) rotateY(${pos.rotY}deg) scale(${pos.scale})`,
                opacity: pos.opacity,
                zIndex: pos.zIndex,
              }}
              onClick={() => handleCardClick(i)}
            >
              <img src={item.image} alt={item.title} className="gs-card-img" />
              <div className="gs-card-overlay" />

              {/* Metric badge — only on active */}
              {i === active && (
                <div className="gs-card-metric">{item.stat}</div>
              )}

              {/* Bottom content — only on active */}
              <div className="gs-card-body">
                <span className="gs-card-tag">{item.tag}</span>
                <h3 className="gs-card-title">{item.title}</h3>
                <button className="gs-card-btn" onClick={(e) => { e.stopPropagation(); setInfoIndex(i); setInfoOpen(true); }}>
                  Explore <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="gs-dots">
        {galleryData.map((_, i) => (
          <button
            key={i}
            className={`gs-dot${i === active ? " gs-dot-active" : ""}`}
            onClick={() => { setActive(i); setInfoOpen(false); }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
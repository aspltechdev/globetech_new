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

import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  ArrowUpRight,
} from "lucide-react";

import "./GallerySection.css";

import img1 from "../../assets/impact/impact-1.png";
import img2 from "../../assets/impact/impact-2.png";
import img3 from "../../assets/impact/impact-3.png";
import img4 from "../../assets/impact/impact-4.png";
import img5 from "../../assets/impact/impact-5.png";

/* =========================================================
   DATA
========================================================= */

const galleryData = [

  {
    image: img1,

    title:
      "Training Workshops",

    desc:
      "",

    stat:
      "500+ Training Programs",

    glow:
      "#ff8a3d",
  },

  {
    image: img2,

    title:
      "Educational Initiatives",

    desc:
      "Celebrating initiatives that empower learning and social progress.",

    stat:
      "500+ Programs Conducted",

    glow:
      "#ff5fa2",
  },

  {
    image: img3,

    title:
      "Skill Development",

    desc:
      "Empowering individuals with practical skills for personal and professional growth.",

    stat:
      "Across Rural India",

    glow:
      "#53a0ff",
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

  title: "Community Engagement",

  desc: "Fostering collaboration and participation to create lasting social impact.",

  stat: "Pan India Initiatives",

  glow: "#00c27a",
},

];

const GallerySection = () => {

  const [active,
    setActive] =
    useState(0);

  const [visible,
    setVisible] =
    useState(false);

  const sectionRef =
    useRef(null);

  /* =========================================================
     AUTO CHANGE
  ========================================================= */

  useEffect(() => {

    const interval =
      setInterval(() => {

        setActive((prev) =>

          prev ===
          galleryData.length - 1
            ? 0
            : prev + 1

        );

      }, 4200);

    return () =>
      clearInterval(interval);

  }, []);

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
      className="gtSpatialGallerySection"
      ref={sectionRef}
    >

      {/* =========================================================
          DYNAMIC GLOW
      ========================================================= */}

      <div
        className="gtSpatialDynamicGlow"

        style={{
          background:
            `radial-gradient(circle,
            ${galleryData[active].glow}55,
            transparent 70%)`,
        }}
      ></div>

      {/* GRID */}

      <div className="gtSpatialGrid"></div>

      {/* =========================================================
          FLOATING TYPOGRAPHY
      ========================================================= */}

      <div className="gtSpatialWords">

        <span>

          IMPACT

        </span>

        <span>

          CHANGE

        </span>

        <span>

          HUMANITY

        </span>

      </div>

      {/* =========================================================
          TOP
      ========================================================= */}

      <div
        className={
          visible
            ? "gtSpatialTop gtSpatialTopShow"
            : "gtSpatialTop"
        }
      >

        <span>

          GALLERY EXPERIENCE

        </span>

        <h2>

          Every Moment
          Creates Impact.

        </h2>

        <p>

          Real stories.
          Real transformation.
          Real people shaping
          a better future.

        </p>

      </div>

      {/* =========================================================
          SPATIAL FLOW
      ========================================================= */}

      <div className="gtSpatialWrap">

        {galleryData.map(
          (item, index) => {

            let cardClass =
              "gtSpatialCard";

            const total =
              galleryData.length;

            const prev2 =
              (active - 2 + total) %
              total;

            const prev1 =
              (active - 1 + total) %
              total;

            const next1 =
              (active + 1) %
              total;

            const next2 =
              (active + 2) %
              total;

            if (
              index === active
            ) {

              cardClass +=
                " activeSpatialCard";

            }

            else if (
              index === prev1
            ) {

              cardClass +=
                " leftSpatialCard";

            }

            else if (
              index === prev2
            ) {

              cardClass +=
                " farLeftSpatialCard";

            }

            else if (
              index === next1
            ) {

              cardClass +=
                " rightSpatialCard";

            }

            else if (
              index === next2
            ) {

              cardClass +=
                " farRightSpatialCard";

            }

            else {

              cardClass +=
                " hiddenSpatialCard";

            }

            return (

              <div
                key={index}
                className={cardClass}
              >

                {/* IMAGE */}

                <img
                  src={item.image}
                  alt={item.title}
                />

                {/* OVERLAY */}

                <div className="gtSpatialOverlay"></div>

                {/* FLOATING METRIC */}

                <div className="gtSpatialMetric">

                  {item.stat}

                </div>

                {/* CONTENT */}

                <div className="gtSpatialContent">

                  <span>

                    HUMAN STORY

                  </span>

                  <h3>

                    {item.title}

                  </h3>

                  <p>

                    {item.desc}

                  </p>

                  <button>

                    Explore Story

                    <ArrowUpRight
                      size={17}
                    />

                  </button>

                </div>

              </div>

            );

          }
        )}

      </div>

    </section>

  );

};

export default GallerySection;
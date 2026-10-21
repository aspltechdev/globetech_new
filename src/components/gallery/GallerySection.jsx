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

import img1 from "../../assets/impact/galimgone.jpeg";
import img2 from "../../assets/impact/galimgtwo.jpeg";
import img3 from "../../assets/impact/galimg3.jpeg";
import videoBg from "../../assets/impact/galvidone.mp4";
import videoB from "../../assets/impact/galimgvidetwo.mp4";
import img4 from "../../assets/impact/imgone.jpeg";
import img5 from "../../assets/impact/imgtwo.jpeg";
import img6 from "../../assets/impact/imgthree.jpeg";
import img7 from "../../assets/impact/imgfour.jpeg";



/* =========================================================
   DATA
========================================================= */

const galleryData = [
  {
  image: img1,
  title: "Global Training Workshops",
  desc: "Delivering international workshops that promote cross-cultural learning, professional excellence, and knowledge exchange.",
  stat: "500+ Global Sessions",
  glow: "#ff8a3d",
},

{
  image: img2,
  title: "International Education Programs",
  desc: "Collaborating across borders to provide transformative educational experiences and lifelong learning opportunities.",
  stat: "30+ Countries Reached",
  glow: "#ff5fa2",
},

{
  video: videoBg,
  title: "Cross-Cultural Skill Development",
  desc: "Equipping participants with globally relevant skills through immersive training and international exposure.",
  stat: "Worldwide Participation",
  glow: "#53a0ff",
},

{
  video: videoB,
  title: "Global Career Readiness",
  desc: "Preparing individuals for international career opportunities through mentorship, leadership development, and industry engagement.",
  stat: "1,200+ Career Success Stories",
  glow: "#4ecdc4",
},

{
  image: img3,
  title: "Digital Learning Across Borders",
  desc: "Expanding access to technology-driven learning through innovative programs connecting learners worldwide.",
  stat: "Pan-Global Initiatives",
  glow: "#00c27a",
},
  {
  image: img4,
  title: "Community Outreach",
  desc: "Engaging with communities through impactful initiatives that promote awareness, inclusion, and social development.",
  stat: "100+ Community Drives",
  glow: "#ff8a3d",
},

{
  image: img5,
  title: "Youth Empowerment",
  desc: "Inspiring young minds through mentorship, leadership programs, and opportunities for personal growth.",
  stat: "5,000+ Youth Reached",
  glow: "#ff5fa2",
},

{
  image: img6,
  title: "Women Empowerment",
  desc: "Supporting women through skill-building initiatives, awareness programs, and pathways to economic independence.",
  stat: "2,000+ Women Impacted",
  glow: "#53a0ff",
},

{
  image: img7,
  title: "Social Impact Initiatives",
  desc: "Creating meaningful change through collaborative programs focused on education, well-being, and sustainable development.",
  stat: "Across Multiple Communities",
  glow: "#4ecdc4",
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
  const interval = setInterval(() => {
    setActive((prev) => {
      const next =
        prev === galleryData.length - 1
          ? 0
          : prev + 1;

      console.log(
        "Prev:", prev,
        "Next:", next,
        "Length:", galleryData.length
      );

      return next;
    });
  }, 4200);

  return () => clearInterval(interval);
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

            const total = galleryData.length;

const diff =
  (index - active + total) % total;

if (diff === 0) {
  cardClass += " activeSpatialCard";
}

else if (diff === 1) {
  cardClass += " rightSpatialCard";
}

else if (diff === 2) {
  cardClass += " farRightSpatialCard";
}

else if (diff === total - 1) {
  cardClass += " leftSpatialCard";
}

else if (diff === total - 2) {
  cardClass += " farLeftSpatialCard";
}

else {
  cardClass += " hiddenSpatialCard";
}

            return (

              <div
                key={index}
                className={cardClass}
              >

                {/* MEDIA */}

{item.video ? (
  <video
    src={item.video}
    autoPlay
    muted
    loop
    playsInline
    className="gtSpatialMedia"
  />
) : (
  <img
    src={item.image}
    alt={item.title}
    className="gtSpatialMedia"
  />
)}

                {/* OVERLAY */}

                <div className="gtSpatialOverlay"></div>

                {/* FLOATING METRIC */}

                <div className="gtSpatialMetric">

                  {item.stat}

                </div>

                {/* CONTENT */}

                <div className="gtSpatialContent">

                  <span>

                    {/* HUMAN STORY */}

                  </span>

                  <h3>

                    {item.title}

                  </h3>

                  <p>

                    {item.desc}

                  </p>

                  {/* <button>

                    Explore Story

                    <ArrowUpRight
                      size={17}
                    />

                  </button> */}

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
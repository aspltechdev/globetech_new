// // CareerSection.jsx

// import React, {
//   useEffect,
//   useRef,
//   useState,
// } from "react";

// import {
//   ArrowRight,
//   Sparkles,
// } from "lucide-react";

// import career1 from "../../assets/career-1.png";
// import career2 from "../../assets/career-2.png";
// import career3 from "../../assets/career-3.png";
// import career4 from "../../assets/career-4.png";

// import "./CareerSection.css";
// import { Link } from "react-router-dom";

// /* =========================================================
//    DATA
// ========================================================= */

// const careerData = [

//   {
//     id: 1,

//     title: "Industry Visits",

//     description:
//       "Students gain real-world exposure through industrial and corporate learning experiences.",

//     image: career2,
//   },

//   {
//     id: 2,

//     title: "Hands-On Workshops",

//     description:
//       "Interactive technical workshops conducted by experienced mentors and professionals.",

//     image: career1,
//   },

//   {
//     id: 3,

//     title: "Internships",

//     description:
//       "Practical opportunities helping students transition into real work environments.",

//     image: career3,
//   },

//   {
//     id: 4,

//     title: "Job Drives",

//     description:
//       "Career opportunities and placement initiatives connecting talent with industries.",

//     image: career4,
//   },

// ];

// const CareerSection = () => {

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
//       className="careerSection"
//       ref={sectionRef}
//     >

//       {/* =========================================================
//           BACKGROUND GLOW
//       ========================================================= */}

//       <div className="careerBgGlow"></div>

//       {/* =========================================================
//           CONTAINER
//       ========================================================= */}

//       <div className="careerContainer">

//         {/* =========================================================
//             LEFT CONTENT
//         ========================================================= */}

//         <div
//           className={
//             visible
//               ? "careerLeft showCareerLeft"
//               : "careerLeft"
//           }
//         >

//           {/* BADGE */}

     

//           {/* TITLE */}

//           <h2>

//             Building
//             <br />

//             Future Ready
//             <br />

//             Careers.

//           </h2>

//           {/* DESCRIPTION */}

//           <p>

//    Empowering students and youth through practical exposure and hands-on learning experiences.
// Providing workshops, internships, mentorship, and skill development opportunities to bridge the gap between education and industry.
// Helping young minds build confidence, gain real-world experience, and unlock successful career opportunities.
//           </p>

//           {/* BUTTON */}
// <Link to="/programs">
//           <button className="careerMainBtn">

//             Explore Programs

//             <span>

//               <ArrowRight size={16} />

//             </span>

//           </button>
//           </Link>

//         </div>

//         {/* =========================================================
//             RIGHT TIMELINE
//         ========================================================= */}

//         <div className="careerTimeline">

//           {careerData.map(
//             (item, index) => (

//               <div
//                 key={item.id}

//                 className={
//                   visible
//                     ? "careerStep showCareerStep"
//                     : "careerStep"
//                 }

//                 style={{
//                   transitionDelay:
//                     `${index * 220}ms`,
//                 }}
//               >

             

//                 {index !==
//                   careerData.length - 1 && (

//                   <div className="careerLine"></div>

//                 )}

//                 {/* IMAGE */}

//                 <div className="careerImageWrapper">

//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="careerImage"
//                   />

//                   <div className="careerImageOverlay"></div>

//                 </div>

//                 {/* CONTENT */}

//                 <div className="careerStepContent">

//                   {/* <span>

//                     0{item.id}

//                   </span> */}

//                   <h3>

//                     {item.title}

//                   </h3>

//                   <p>

//                     {item.description}

//                   </p>

//                 </div>

//               </div>

//             )
//           )}

//         </div>

//       </div>

//     </section>
//   );
// };

// export default CareerSection;











// =========================================================
// PREMIUM CAREER ECOSYSTEM SECTION
// Apple / Stripe / Tesla Inspired
// =========================================================

// import React, {
//   useEffect,
//   useRef,
//   useState,
// } from "react";

// import {
//   ArrowRight,
// } from "lucide-react";

// import { Link } from "react-router-dom";

// import "./CareerSection.css";

// import career1 from "../../assets/career-1.png";
// import career2 from "../../assets/career-2.png";
// import career3 from "../../assets/career-3.png";
// import career4 from "../../assets/career-4.png";

// /* =========================================================
//    DATA
// ========================================================= */

// const careerData = [

//   {
//     id: 1,

//     title:
//       "Industry Visits",

//     description:
//       "Real-world industrial exposure helping students understand professional environments and workflows.",

//     image: career2,
//   },

//   {
//     id: 2,

//     title:
//       "Hands-On Workshops",

//     description:
//       "Interactive workshops and practical training sessions conducted by industry professionals.",

//     image: career1,
//   },

//   {
//     id: 3,

//     title:
//       "Internships & Mentorship",

//     description:
//       "Practical experiences and mentorship programs designed to build career confidence and readiness.",

//     image: career3,
//   },

//   {
//     id: 4,

//     title:
//       "Placement & Job Drives",

//     description:
//       "Connecting students with internships, placements and career opportunities through industry networks.",

//     image: career4,
//   },

// ];

// const CareerSection = () => {

//   const sectionRef =
//     useRef(null);

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
//       className="gtCareerSection"
//       ref={sectionRef}
//     >

//       {/* =========================================================
//           BACKGROUND
//       ========================================================= */}

//       <div className="gtCareerGlowOne"></div>

//       <div className="gtCareerGlowTwo"></div>

//       <div className="gtCareerGrid"></div>

//       {/* =========================================================
//           HERO
//       ========================================================= */}

//       <div
//         className={
//           visible
//             ? "gtCareerHero gtCareerHeroShow"
//             : "gtCareerHero"
//         }
//       >

//         <span className="gtCareerMiniTag">

//           CAREER ECOSYSTEM

//         </span>

//         <h2>

//           Empowering
//           Students For
//           Real Careers.

//         </h2>

//         <p>

//           Building future-ready careers
//           through practical exposure,
//           industry experiences,
//           internships, workshops
//           and placement opportunities.

//         </p>

//       </div>

//       {/* =========================================================
//           HERO CARD
//       ========================================================= */}

//       <div
//         className={
//           visible
//             ? "gtCareerHeroCard gtCareerHeroCardShow"
//             : "gtCareerHeroCard"
//         }
//       >

//         <img
//           src={career1}
//           alt="Career"
//           className="gtCareerHeroImage"
//         />

//         <div className="gtCareerHeroOverlay"></div>

//         <div className="gtCareerHeroGradient"></div>

//         <div className="gtCareerHeroContent">

//           <div className="gtCareerHeroLine"></div>

//           <span>

//             FUTURE READY LEARNING

//           </span>

//           <h3>

//             Bridging
//             Education
//             & Industry.

//           </h3>

//           <p>

//             Creating immersive learning
//             experiences that help students
//             gain confidence, real-world
//             skills and industry readiness.

//           </p>

//           <Link
//             to="/programs"
//             className="gtCareerBtn"
//           >

//             Explore Programs

//             <ArrowRight size={16} />

//           </Link>

//         </div>

//       </div>

//       {/* =========================================================
//           CINEMATIC GRID
//       ========================================================= */}

//       <div className="gtCareerGridLayout">

//         {careerData.map(
//           (item, index) => (

//             <div
//               key={item.id}

//               className={
//                 visible
//                   ? "gtCareerCard gtCareerCardShow"
//                   : "gtCareerCard"
//               }

//               style={{
//                 transitionDelay:
//                   `${index * 160}ms`,
//               }}
//             >

//               {/* IMAGE */}

//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="gtCareerCardImage"
//               />

//               {/* OVERLAY */}

//               <div className="gtCareerCardOverlay"></div>

//               <div className="gtCareerCardGradient"></div>

//               {/* NUMBER */}

//               <div className="gtCareerNumber">

//                 0{item.id}

//               </div>

//               {/* CONTENT */}

//               <div className="gtCareerCardContent">

//                 <div className="gtCareerCardLine"></div>

//                 <h3>

//                   {item.title}

//                 </h3>

//                 <p>

//                   {item.description}

//                 </p>

//               </div>

//             </div>

//           )
//         )}

//       </div>

//     </section>

//   );

// };

// export default CareerSection;









// =========================================================
// CompactCareerSlider.jsx
// Cinematic Horizontal Auto Story Slider
// =========================================================

import React, {
  useEffect,
  useState,
} from "react";

import {
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./CareerSection.css";

/* IMAGES */

import img1 from "../../assets/career-1.jpg";
import img2 from "../../assets/career-2.png";
import img3 from "../../assets/career-3.png";
import img4 from "../../assets/career-4.png";

/* =========================================================
   DATA
========================================================= */

const slides = [

  {
    title:
      "Industry Visits",

    description:
      "Real-world industrial exposure helping students understand professional ecosystems.",

    image: img3,
  },

  {
    title:
      "Hands-On Workshops",

    description:
      "Interactive workshops and practical learning experiences with industry experts.",

    image: img1,
  },

  {
    title:
      "Internships & Mentorship",

    description:
      "Building confidence through mentorship and immersive internship opportunities.",

    image: img2,
  },

  {
    title:
      "Placement & Career Support",

    description:
      "Connecting students with recruitment drives and long-term career opportunities.",

    image: img4,
  },

];

const CareerSection = () => {

  const [active,
    setActive] =
    useState(0);

  /* =========================================================
     AUTO SLIDE
  ========================================================= */

  useEffect(() => {

    const interval =
      setInterval(() => {

        setActive((prev) =>
          prev === slides.length - 1
            ? 0
            : prev + 1
        );

      }, 3500);

    return () =>
      clearInterval(interval);

  }, []);

  return (

    <section className="gtCompactCareerSection">

      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="gtCompactGlow"></div>

      <div className="gtCompactGrid"></div>

      {/* =========================================================
          TOP
      ========================================================= */}

      <div className="gtCompactTop">

        <span>

          CAREER ECOSYSTEM

        </span>

        <h2>

          Experiences
          That Shape
          Future Careers.

        </h2>

      </div>

      {/* =========================================================
          SLIDER
      ========================================================= */}

      <div className="gtCompactSliderWrapper">

        {slides.map(
          (item, index) => (

            <div
              key={index}

              className={
                active === index
                  ? "gtCompactSlide active"
                  : "gtCompactSlide"
              }
            >

              {/* IMAGE */}

              <img
                src={item.image}
                alt={item.title}
                className="gtCompactImage"
              />

              {/* OVERLAY */}

              <div className="gtCompactOverlay"></div>

              <div className="gtCompactGradient"></div>

              {/* CONTENT */}

              <div className="gtCompactContent">

                <div className="gtCompactLine"></div>

                <h3>

                  {item.title}

                </h3>

                <p>

                  {item.description}

                </p>

                <Link
                  to="/programs"
                  className="gtCompactBtn"
                >

                  Explore Programs

                  <ArrowRight size={16} />

                </Link>

              </div>

            </div>

          )
        )}

      </div>

      {/* =========================================================
          INDICATORS
      ========================================================= */}

      <div className="gtCompactIndicators">

        {slides.map((_, index) => (

          <div
            key={index}

            className={
              active === index
                ? "gtCompactDot activeDot"
                : "gtCompactDot"
            }
          ></div>

        ))}

      </div>

    </section>

  );

};

export default CareerSection;
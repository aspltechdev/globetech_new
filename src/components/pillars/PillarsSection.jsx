

// import React, { useEffect, useRef, useState } from "react";

// import { ArrowUpRight } from "lucide-react";

// import { useNavigate } from "react-router-dom";

// import pillar1 from "../../assets/pillar-1.png";
// import pillar2 from "../../assets/pillar-2.png";
// import pillar3 from "../../assets/pillar-3.png";
// import pillar4 from "../../assets/pillar-4.png";
// import pillar5 from "../../assets/pillar-5.png";

// import "./PillarCard.css";

// /* =========================================
//    DATA
// ========================================= */

// const pillars = [
//   {
//     image: pillar1,
//     title: "Skilling & Placement",
//     description:
//       "We equip youth with industry-relevant skills and connect them with top employers through placement drives, internships, and hands-on training.",
//   },

//   {
//     image: pillar2,
//     title: "Health & Safety",
//     description:
//       "We promote well-being through health awareness initiatives and safety programs that protect communities and improve quality of life.",
//   },

//   {
//     image: pillar3,
//     title: "Environmental Protection",
//     description:
//       "We encourage sustainable practices and ecological balance, inspiring communities and partners to adopt greener habits for a healthier planet.",
//   },

//   {
//     image: pillar4,
//     title: "Women & Child Empowerment",
//     description:
//       "We champion gender equality and child welfare by giving women and children the tools, confidence, and opportunities they need to thrive.",
//   },

//   {
//     image: pillar5,
//     title: "Infrastructure Development",
//     description:
//       "We build essential community facilities — from classrooms to training centers — creating the physical foundation for lasting local growth.",
//   },
// ];

// /* =========================================
//    CARD
// ========================================= */

// const PillarCard = ({
//   image,
//   title,
//   description,
//   delay,
// }) => {

//   const navigate = useNavigate();

//   const cardRef = useRef(null);

//   const [show, setShow] = useState(false);

//   /* =========================================
//      SCROLL POPUP
//   ========================================= */

//   useEffect(() => {

//     const observer = new IntersectionObserver(

//       ([entry]) => {

//         if (entry.isIntersecting) {
//           setShow(true);
//         }

//       },

//       {
//         threshold: 0.2,
//       }

//     );

//     if (cardRef.current) {
//       observer.observe(cardRef.current);
//     }

//     return () => {

//       if (cardRef.current) {
//         observer.unobserve(cardRef.current);
//       }

//     };

//   }, []);

//   return (

//     <div
//       ref={cardRef}
//       className={`pillar-card ${show ? "show-card" : ""}`}
//       style={{
//         transitionDelay: `${delay}ms`,
//       }}
//     >

//       {/* IMAGE */}

//       <div className="pillar-image-wrapper">

//         <img
//           src={image}
//           alt={title}
//           className="pillar-image"
//         />

//         {/* TOP ICON */}

//         <div className="pillar-arrow">

//           <ArrowUpRight
//             size={18}
//             strokeWidth={2.5}
//           />

//         </div>

//       </div>

//       {/* CONTENT */}

//       <div className="pillar-content">

//         <h3>{title}</h3>

//         <p>{description}</p>

//         {/* BUTTON */}

//         <button
//           className="pillar-btn"
//           onClick={() => navigate("/about-us")}
//         >

//           View More

//         </button>

//       </div>

//     </div>
//   );
// };

// /* =========================================
//    SECTION
// ========================================= */

// const PillarsSection = () => {

//   return (

//     <section className="pillars-section">

//       <div className="container-fluid">

//         {/* HEADING */}

//         <div className="pillars-heading">

//           <div className="pillar-tag">

//             <span>Who We Are</span>

//             <div className="pillar-line"></div>

//           </div>

//           <h2>
//             OUR CORE PILLARS
//           </h2>

//         </div>

//         {/* TOP ROW */}

//         <div className="row g-4 justify-content-center">

//           {pillars.slice(0, 3).map((pillar, index) => (

//             <div
//               className="col-xl-4 col-lg-4 col-md-6 d-flex justify-content-center"
//               key={index}
//             >

//               <PillarCard
//                 {...pillar}
//                 delay={index * 150}
//               />

//             </div>

//           ))}

//         </div>

//         {/* BOTTOM ROW */}

//         <div className="row g-4 justify-content-center mt-lg-4 mt-2">

//           {pillars.slice(3, 5).map((pillar, index) => (

//             <div
//               className="col-xl-4 col-lg-4 col-md-6 d-flex justify-content-center"
//               key={index}
//             >

//               <PillarCard
//                 {...pillar}
//                 delay={(index + 3) * 150}
//               />

//             </div>

//           ))}

//         </div>

//       </div>

//     </section>
//   );
// };

// export default PillarsSection;





// FocusAreas.jsx

// import React, {
//   useEffect,
//   useRef,
//   useState,
// } from "react";

// import "./PillarCard.css";



// import img1 from "../../assets/pillar-1.png";
// import img2 from "../../assets/pillar-2.png";
// import img3 from "../../assets/pillar-3.png";
// import img4 from "../../assets/pillar-4.png";
// import img5 from "../../assets/pillar-5.png";
// import img6 from "../../assets/pillar-5.png";


// /* =========================================
//    DATA
// ========================================= */

// const focusAreas = [
//   {
//     image: img1,
//     title:
//       "Education & Digital Literacy Programs",

//     description:
//       "Providing accessible education and digital skills training to empower students and communities through technology and learning initiatives.",
//   },

//   {
//     image: img2,
//     title:
//       "Skill Development & Livelihood Training",

//     description:
//       "Industry-focused training programs that help individuals build practical skills for employment, entrepreneurship, and career growth.",
//   },

//   {
//     image: img3,
//     title:
//       "Placement Support & Job Drives",

//     description:
//       "Connecting candidates with career opportunities through job drives, placement assistance, and interview preparation programs.",
//   },

//   {
//     image: img4,
//     title:
//       "Women & Youth Empowerment",

//     description:
//       "Supporting women and youth through education, mentorship, leadership development, and community engagement initiatives.",
//   },

//   {
//     image: img5,
//     title:
//       "Health Camps & Community Wellness",

//     description:
//       "Promoting healthier communities through medical camps, health awareness programs, and wellness initiatives.",
//   },

//   {
//     image: img6,
//     title:
//       "Environmental Support",

//     description:
//       "Encouraging sustainability through environmental awareness, tree plantation drives, and eco-friendly community programs.",
//   },
// ];

// const PillarsSection = () => {
//   const sectionRef = useRef(null);

//   const [showCards, setShowCards] =
//     useState(false);

//   /* =========================================
//      SCROLL ANIMATION
//   ========================================= */

//   useEffect(() => {
//     const observer =
//       new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             setShowCards(true);
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
//       className="focusSection"
//       ref={sectionRef}
//     >
//       <div className="focusContainer">
//         {/* HEADING */}

//         <h2
//           className={`focusHeading ${
//             showCards
//               ? "showHeading"
//               : ""
//           }`}
//         >
//           Our Key Focus Areas
//         </h2>

//         {/* GRID */}

//         <div className="focusGrid">
//           {focusAreas.map(
//             (item, index) => (
//               <div
//                 className={`focusCard ${
//                   showCards
//                     ? "showCard"
//                     : ""
//                 }`}
//                 key={index}
//                 style={{
//                   transitionDelay: `${index * 120}ms`,
//                 }}
//               >
//                 {/* IMAGE */}

//                 <div className="focusImageWrapper">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="focusImage"
//                   />

//                   {/* DARK OVERLAY */}

//                   <div className="focusOverlay"></div>

//                   {/* TITLE */}

//                   <h3>
//                     {item.title}
//                   </h3>
//                 </div>

//                 {/* DESCRIPTION */}

//                 <div className="focusContent">
//                   <p>
//                     {
//                       item.description
//                     }
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

// export default PillarSection;














// PillarsSection.jsx

import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import "./PillarCard.css";

import img1 from "../../assets/pillar-1.png";
import img2 from "../../assets/pillar-2.png";
import img3 from "../../assets/pillar-3.png";
import img4 from "../../assets/pillar-4.png";
import img5 from "../../assets/pillar-5.png";
import img6 from "../../assets/pillar-5.png";

/* =========================================
   DATA
========================================= */

const focusAreas = [
  {
    image: img1,
    title:
      "Education & Digital Literacy Programs",

    description:
      "Providing accessible education and digital skills training to empower students and communities through technology and learning initiatives.",
  },

  {
    image: img2,
    title:
      "Skill Development & Livelihood Training",

    description:
      "Industry-focused training programs that help individuals build practical skills for employment, entrepreneurship, and career growth.",
  },

  {
    image: img3,
    title:
      "Placement Support & Job Drives",

    description:
      "Connecting candidates with career opportunities through job drives, placement assistance, and interview preparation programs.",
  },

  {
    image: img4,
    title:
      "Women & Youth Empowerment",

    description:
      "Supporting women and youth through education, mentorship, leadership development, and community engagement initiatives.",
  },

  {
    image: img5,
    title:
      "Health Camps & Community Wellness",

    description:
      "Promoting healthier communities through medical camps, health awareness programs, and wellness initiatives.",
  },

  {
    image: img6,
    title:
      "Environmental Support",

    description:
      "Encouraging sustainability through environmental awareness, tree plantation drives, and eco-friendly community programs.",
  },
];

const PillarsSection = () => {
  const sectionRef = useRef(null);

  const [showCards, setShowCards] =
    useState(false);

  /* =========================================
     SCROLL ANIMATION
  ========================================= */

  useEffect(() => {
    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setShowCards(true);
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
      className="focusSection"
      ref={sectionRef}
    >
      <div className="focusContainer">
        {/* HEADING */}

        <h2
          className={`focusHeading ${
            showCards
              ? "showHeading"
              : ""
          }`}
        >
          Our Key Focus Areas
        </h2>

        {/* GRID */}

        <div className="focusGrid">
          {focusAreas.map(
            (item, index) => (
              <div
                className={`focusCard ${
                  showCards
                    ? "showCard"
                    : ""
                }`}
                key={index}
                style={{
                  transitionDelay: `${index * 120}ms`,
                }}
              >
                {/* IMAGE */}

                <div className="focusImageWrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="focusImage"
                  />

                  {/* OVERLAY */}

                  <div className="focusOverlay"></div>

                  {/* TITLE */}

                  <h3>
                    {item.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}

                <div className="focusContent">
                  <p>
                    {
                      item.description
                    }
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
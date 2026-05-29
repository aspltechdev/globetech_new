// // PillarsSection.jsx

// import React, {
//   useEffect,
//   useRef,
//   useState,
// } from "react";

// import {
//   ArrowUpRight,
//   Sparkles,
// } from "lucide-react";

// import "./PillarCard.css";

// import img1 from "../../assets/core6.png";
// import img2 from "../../assets/core5.png";
// import img3 from "../../assets/core4.png";
// import img4 from "../../assets/core3.png";
// import img5 from "../../assets/core2.png";
// import img6 from "../../assets/core1.png";
// import { Link } from "react-router-dom";

// /* =========================================================
//    DATA
// ========================================================= */

// const focusAreas = [

//   {
//     image: img1,

//     title:
//       "Education & Digital Literacy",

//     description:
//       "Providing accessible education and digital learning programs for underserved communities.",
//   },

//   {
//     image: img2,

//     title:
//       "Skill Development & Training",

//     description:
//       "Industry-focused training initiatives helping youth build practical career skills.",
//   },

//   {
//     image: img3,

//     title:
//       "Placement & Career Support",

//     description:
//       "Connecting individuals with employment opportunities and interview preparation support.",
//   },

//   {
//     image: img4,

//     title:
//       "Women & Youth Empowerment",

//     description:
//       "Empowering women and youth through mentorship, leadership, and education programs.",
//   },

//   {
//     image: img5,

//     title:
//       "Health & Community Wellness",

//     description:
//       "Improving community wellbeing through healthcare camps and awareness initiatives.",
//   },

//   {
//     image: img6,

//     title:
//       "Environmental Sustainability",

//     description:
//       "Encouraging eco-friendly practices and sustainability through awareness campaigns.",
//   },

// ];

// const PillarsSection = () => {

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
//       className="pillarsSection"
//       ref={sectionRef}
//     >

//       <div className="pillarsContainer">

//         {/* =========================================================
//             HEADING
//         ========================================================= */}

//         <div
//           className={
//             visible
//               ? "pillarsHeadingWrapper showHeadingWrapper"
//               : "pillarsHeadingWrapper"
//           }
//         >

          

//           <h2>

//             Our Key
         

//             Focus Areas

//           </h2>

//           <p>

//             We focus on creating meaningful
//             change through education,
//             empowerment, sustainability,
//             and inclusive community initiatives.

//           </p>

//         </div>

//         {/* =========================================================
//             GRID
//         ========================================================= */}

//         <div className="pillarsGrid">

//           {focusAreas.map(
//             (item, index) => (

//               <div
//                 key={index}

//                 className={
//                   visible
//                     ? "pillarCard showPillarCard"
//                     : "pillarCard"
//                 }

//                 style={{
//                   transitionDelay:
//                     `${index * 180}ms`,
//                 }}
//               >

//                 {/* IMAGE */}
// <Link to="/programs">
//                 <div className="pillarImageWrapper">

//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="pillarImage"
//                   />

//                   <div className="pillarOverlay"></div>

//                 </div>
//                 </Link>

//                 {/* CONTENT */}

//                 <div className="pillarContent">

//                   <div className="pillarTop">

//                     <h3>

//                       {item.title}

//                     </h3>

//                     <div className="pillarArrow">

//                       <ArrowUpRight
//                         size={18}
//                       />

//                     </div>

//                   </div>

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

// export default PillarsSection;


// import "./PillarCard.css";
// import {
//   Briefcase,
//   HeartHandshake,
//   Building2,
//   ShieldPlus,
//   Leaf,
// } from "lucide-react";

// const initiatives = [
//   {
//     id: "large",
//     icon: <Briefcase size={32} />,
//     title: "Skilling & Placement",
//     stat: "30,000+",
//     description:
//       "Industry-aligned training programs empowering youth with employable skills.",
//   },

//   {
//     icon: <HeartHandshake size={28} />,
//     title: "Women Empowerment",
//     stat: "100+",
//     description:
//       "Creating opportunities through education and livelihood support.",
//   },

//   {
//     icon: <ShieldPlus size={28} />,
//     title: "Health & Safety",
//     stat: "CSR",
//     description:
//       "Healthcare awareness and community wellbeing initiatives.",
//   },

//   {
//     icon: <Building2 size={28} />,
//     title: "Infrastructure",
//     stat: "PAN INDIA",
//     description:
//       "Building stronger communities through development projects.",
//   },

//   {
//     icon: <Leaf size={28} />,
//     title: "Environmental Protection",
//     stat: "GREEN",
//     description:
//       "Promoting sustainability and environmental responsibility.",
//   },
// ];

// export default function PillarCard() {
//   return (
//     <section className="wwd-section">

//       <div className="wwd-header">

//         <span>WHAT WE DO</span>

//         <h2>
//           Creating Sustainable
//           <br />
//           Impact Across Communities
//         </h2>

//       </div>

//       <div className="wwd-grid">

//         {/* FEATURED CARD */}

//         <div className="wwd-card featured">

//           <div className="wwd-glow"></div>

//           <div className="wwd-content">

//             {initiatives[0].icon}

//             <span className="wwd-stat">
//               {initiatives[0].stat}
//             </span>

//             <h3>{initiatives[0].title}</h3>

//             <p>
//               {initiatives[0].description}
//             </p>

//           </div>

//         </div>

//         {/* SMALL CARDS */}

//         {initiatives.slice(1).map((item, index) => (
//           <div
//             key={index}
//             className="wwd-card"
//           >
//             <div className="wwd-content">

//               {item.icon}

//               <span className="wwd-stat">
//                 {item.stat}
//               </span>

//               <h3>{item.title}</h3>

//               <p>{item.description}</p>

//             </div>
//           </div>
//         ))}

//       </div>

//     </section>
//   );
// }










import "./PillarCard.css";
import { useEffect, useRef } from "react";

import skillImg from "../../assets/core1.png";
import womenImg from "../../assets/core2.png";
import healthImg from "../../assets/core3.png";
import infraImg from "../../assets/core4.png";
import envImg from "../../assets/core5.png";

const initiatives = [
  {
    id: "large",
    image: skillImg,
    title: "Skilling & Placement",
    stat: "30,000+ Students Trained",
    description:
      "Industry-aligned training programs empowering youth with employable skills and career opportunities.",
  },
  {
    image: womenImg,
    title: "Women Empowerment",
    stat: "100+ Communities",
    description:
      "Creating opportunities through education, leadership and livelihood support.",
  },
  {
    image: healthImg,
    title: "Health & Safety",
    stat: "CSR Wellness",
    description:
      "Healthcare awareness programs and community wellbeing initiatives.",
  },
  {
    image: infraImg,
    title: "Infrastructure",
    stat: "PAN India",
    description:
      "Building stronger communities through development projects.",
  },
  {
    image: envImg,
    title: "Environmental Protection",
    stat: "Green Future",
    description:
      "Promoting sustainability and environmental responsibility.",
  },
];

export default function PillarCard() {
  const sectionRef = useRef();

  useEffect(() => {
    const cards =
      sectionRef.current.querySelectorAll(".wwd-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    cards.forEach((card) =>
      observer.observe(card)
    );

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="wwd-section"
      ref={sectionRef}
    >
      <div className="wwd-header">

        <span>WHAT WE DO</span>

        <h2>
          Creating Sustainable
          <br />
          Impact Across Communities
        </h2>

        <p>
          Empowering lives through education,
          health, infrastructure and sustainability.
        </p>

      </div>

      <div className="wwd-grid">

        {/* FEATURED CARD */}

        <div className="wwd-card featured">

          <img
            src={initiatives[0].image}
            alt={initiatives[0].title}
            className="wwd-image"
          />

          <div className="wwd-overlay"></div>

          <div className="wwd-content">

            <span className="wwd-stat">
              {initiatives[0].stat}
            </span>

            <h3>{initiatives[0].title}</h3>

            <p>{initiatives[0].description}</p>

          </div>

        </div>

        {/* REMAINING CARDS */}

        {initiatives.slice(1).map((item, index) => (
          <div
            className="wwd-card"
            key={index}
          >
            <img
              src={item.image}
              alt={item.title}
              className="wwd-image"
            />

            <div className="wwd-overlay"></div>

            <div className="wwd-content">

              <span className="wwd-stat">
                {item.stat}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
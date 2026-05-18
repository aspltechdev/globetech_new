

// import React, { useEffect, useState } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   HandHeart,
// } from "lucide-react";

// import "./HeroSection.css";

// /* =========================
//    IMAGES
// ========================= */

// import heroImg1 from "../../assets/hero/hero1.png";
// import heroImg2 from "../../assets/hero/hero2.png";
// import heroImg3 from "../../assets/hero/hero3.png";
// import heroImg4 from "../../assets/hero/hero4.png";

// /* =========================
//    SLIDES
// ========================= */

// const slides = [
//   {
//     title: "Empowering Youth\nSkills & Opportunities",
//     description:
//       "We support young individuals in gaining industry-relevant skills that open doors to sustainable employment and entrepreneurship. Our programs focus on making vocational training more accessible and inclusive.",
//     image: heroImg1,
//   },

//   {
//     title: "Building Careers\nFor The Future",
//     description:
//       "Helping students and youth gain practical digital skills through real-world learning programs and mentorship opportunities.",
//     image: heroImg2,
//   },

//   {
//     title: "Education That\nCreates Impact",
//     description:
//       "Providing accessible vocational and technology education for underserved communities and aspiring professionals.",
//     image: heroImg3,
//   },

//   {
//     title: "Creating Leaders\nThrough Skills",
//     description:
//       "Empowering the next generation with digital transformation skills, innovation mindset, and career opportunities.",
//     image: heroImg4,
//   },
// ];

// const HeroSection = () => {
//   const [activeSlide, setActiveSlide] = useState(0);

//   /* =========================
//      AUTO SLIDE
//   ========================= */

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [activeSlide]);

//   /* =========================
//      PREV
//   ========================= */

//   const prevSlide = () => {
//     setActiveSlide((prev) =>
//       prev === 0 ? slides.length - 1 : prev - 1
//     );
//   };

//   /* =========================
//      NEXT
//   ========================= */

//   const nextSlide = () => {
//     setActiveSlide((prev) =>
//       prev === slides.length - 1 ? 0 : prev + 1
//     );
//   };

//   return (
//     <section className="hero">

//       <div className="hero-card">

//         {/* LEFT CONTENT */}

//         <div className="hero-left">

//           <div className="hero-content">

//             <h1>
//               {slides[activeSlide].title
//                 .split("\n")
//                 .map((line, index) => (
//                   <span key={index}>
//                     {line}
//                     <br />
//                   </span>
//                 ))}
//             </h1>

//             <p>
//               {slides[activeSlide].description}
//             </p>

//             <button className="hero-btn">

//               <span>Donate Now</span>

//               <span className="icon-box">
//                 <HandHeart size={16} />
//               </span>

//             </button>

//           </div>

//           {/* CONTROLS */}

      
//         </div>

//         {/* RIGHT */}

//         <div className="hero-right">

//           <div className="circle-pattern"></div>

//           <img
//             src={slides[activeSlide].image}
//             alt="hero"
//           />

//         </div>

//       </div>

//       {/* DOTS */}

//       <div className="hero-dots">

//         {slides.map((_, index) => (
//           <span
//             key={index}
//             className={
//               activeSlide === index
//                 ? "dot active"
//                 : "dot"
//             }
//             onClick={() => setActiveSlide(index)}
//           ></span>
//         ))}

//       </div>

//     </section>
//   );
// };

// export default HeroSection;






// HeroSection.jsx

import React, { useEffect, useState } from "react";
import {
  HandHeart,
  ArrowRight,
  Play,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import "./HeroSection.css";

/* =========================
   IMAGES
========================= */

import heroImg1 from "../../assets/group4.png";
import heroImg2 from "../../assets/group1.png";
import heroImg3 from "../../assets/group2.png";
import heroImg4 from "../../assets/group3.png";

/* =========================
   SLIDES
========================= */

const slides = [
  {
    title: "Empowering Youth\nThrough Skills & Hope",

    description:
      "We help underserved communities access digital education, career opportunities, and life-changing mentorship programs that create long-term social impact.",

    image: heroImg1,

    stats: "12K+ Students Empowered",
  },

  {
    title: "Building Futures\nThat Truly Matter",

    description:
      "From education to employment, we create pathways that help young people become financially independent and future-ready.",

    image: heroImg2,

    stats: "320+ Career Placements",
  },

  {
    title: "Education That\nTransforms Lives",

    description:
      "Accessible learning experiences, real-world training, and community-led programs designed for meaningful change.",

    image: heroImg3,

    stats: "45+ Community Programs",
  },

  {
    title: "Creating Impact\nFor The Next Generation",

    description:
      "Together with volunteers, donors, and educators, we are shaping a generation driven by innovation and purpose.",

    image: heroImg4,

    stats: "100+ Volunteers",
  },
];

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  /* =========================
     AUTO SLIDE
  ========================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="heroSection">
      {/* BACKGROUND GLOW */}
      <div className="heroBlur heroBlur1"></div>
      <div className="heroBlur heroBlur2"></div>

      <div className="heroContainer">
        <div className="heroGrid">
          {/* =========================
              LEFT CONTENT
          ========================= */}

          <div className="heroLeft">
           
              
         

            <div className="heroContent">
              <h1>
                {slides[activeSlide].title
                  .split("\n")
                  .map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
              </h1>

              <p>{slides[activeSlide].description}</p>

              {/* CTA BUTTONS */}

              <div className="heroActions">
                {/* <button className="heroBtn primaryBtn">
                  <span>Donate Now</span>

                  <div className="heroBtnIcon">
                    <HandHeart size={16} />
                  </div>
                </button> */}

<Link to="/contact">
  <button className="heroBtn primaryBtn">
    <span>Donate Now</span>

    <div className="heroBtnIcon">
      <HandHeart size={16} />
    </div>
  </button>
</Link>

              
              </div>

              {/* STATS */}

          
            </div>
          </div>

          {/* =========================
              RIGHT IMAGE
          ========================= */}

          <div className="heroRight">
            {/* FLOATING CARDS */}

            {/* <div className="floatingCard topCard">
              <span>✨ Impact Driven</span>
            </div> */}

            <div className="floatingCard bottomCard">
              <div>
                <h4>{slides[activeSlide].stats}</h4>
                <p>Changing Lives Everyday</p>
              </div>

              <ArrowRight size={18} />
            </div>

            {/* IMAGE WRAPPER */}

            <div className="heroImageWrapper">
              <div className="heroCircle"></div>

              <img
                src={slides[activeSlide].image}
                alt="NGO Hero"
                className="heroImage"
              />
            </div>
          </div>
        </div>

        {/* =========================
            SLIDER DOTS
        ========================= */}

        <div className="heroDots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={
                activeSlide === index
                  ? "heroDot active"
                  : "heroDot"
              }
              onClick={() => setActiveSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


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
import { HandHeart } from "lucide-react";

import "./HeroSection.css";

/* =========================
   IMAGES
========================= */

import heroImg1 from "../../assets/hero/hero1.png";
import heroImg2 from "../../assets/hero/hero2.png";
import heroImg3 from "../../assets/hero/hero3.png";
import heroImg4 from "../../assets/hero/hero4.png";
import heroVector from "../../assets/heroVector.png";

/* =========================
   SLIDES
========================= */

const slides = [
  {
    title: "Empowering Youth\nSkills & Opportunities",

    description:
      "We support young individuals in gaining industry-relevant skills that open doors to sustainable employment and entrepreneurship. Our programs focus on making vocational training more accessible and inclusive, especially for underserved and marginalized communities.",

    image: heroImg1,
  },

  {
    title: "Building Careers\nFor The Future",

  description:
      "We support young individuals in gaining industry-relevant skills that open doors to sustainable employment and entrepreneurship. Our programs focus on making vocational training more accessible and inclusive, especially for underserved and marginalized communities.",

    image: heroImg2,
  },

  {
    title: "Education That\nCreates Impact",

  description:
      "We support young individuals in gaining industry-relevant skills that open doors to sustainable employment and entrepreneurship. Our programs focus on making vocational training more accessible and inclusive, especially for underserved and marginalized communities.",

    image: heroImg3,
  },

  {
    title: "Creating Leaders\nThrough Skills",

   description:
      "We support young individuals in gaining industry-relevant skills that open doors to sustainable employment and entrepreneurship. Our programs focus on making vocational training more accessible and inclusive, especially for underserved and marginalized communities.",

    image: heroImg4,
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

    }, 4000);

    return () => clearInterval(interval);

  }, []);

  return (

    <section className="heroSection">

      <div className="heroContainer">

        <div className="heroCard">

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

              <p>
                {slides[activeSlide].description}
              </p>

              {/* BUTTON */}

              <button className="heroBtn">

                <span>
                  Donate Now
                </span>

                <div className="heroBtnIcon">

                  <HandHeart size={14} />

                </div>

              </button>

            </div>

          </div>

          {/* =========================
              RIGHT IMAGE
          ========================= */}

          <div className="heroRight">

      

            {/* <div className="heroDotPattern"></div> */}
          

<img
  src={heroVector}
  alt="Vector Pattern"
  className="heroVector"
/>

            {/* IMAGE */}

            <img
              src={slides[activeSlide].image}
              alt="Hero"
              className="heroImage"
            />

          </div>

        </div>

        {/* =========================
            DOTS
        ========================= */}

        <div className="heroDots">

          {slides.map((_, index) => (

            <span
              key={index}
              className={
                activeSlide === index
                  ? "heroDot active"
                  : "heroDot"
              }
              onClick={() => setActiveSlide(index)}
            ></span>

          ))}

        </div>

      </div>

    </section>
  );
};

export default HeroSection;
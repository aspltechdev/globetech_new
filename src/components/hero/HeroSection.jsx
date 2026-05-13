// import heroImg from "../../assets/heroimg.png";

// const HeroSection = () => {
//   return (
//     <section className="hero-section">

//       <div className="container-fluid px-lg-4">

//         <div className="hero-wrapper">

//           <div className="row align-items-center g-0">

//             <div className="col-lg-6">

//               <div className="hero-content">

//                 <h1>
//                   Empowering Youth
//                   Skills & Opportunities
//                 </h1>

//                 <p>
//                   We support young individuals in gaining industry-relevant skills
//                   that open doors to sustainable employment and entrepreneurship.
//                 </p>

//                 <div className="hero-buttons">

//                   <a href="#" className="hero-btn">
//                     Donate Now
//                   </a>

//                   <a href="#" className="process-btn">
//                     <span>
//                       <i className="bi bi-play-fill"></i>
//                     </span>
//                     Our process
//                   </a>

//                 </div>

//               </div>

//             </div>

//             <div className="col-lg-6">

//               <div className="hero-image">

//                 <div className="circle-pattern"></div>

//                 <img src={heroImg} alt="Students" />

//               </div>

//             </div>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default HeroSection;


import React, { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  ArrowUpRight
} from "lucide-react";

import hero1 from "../../assets/heroimg.png";
import hero2 from "../../assets/heroimg.png";
import hero3 from "../../assets/heroimg.png";
import hero4 from "../../assets/heroimg.png";
import hero5 from "../../assets/heroimg.png";

import "./HeroSection.css";

const slides = [
  {
    id: 1,
    title: "Empowering Youth\nSkills & Opportunities",
    description:
      "We support young individuals in gaining industry-relevant skills that open doors to sustainable employment and entrepreneurship. Our programs focus on making vocational training more accessible and inclusive, especially for underserved and marginalized communities, helping bridge the gap between talent and opportunity.",
    image: hero1,
  },

  {
    id: 2,
    title: "Digital Learning\nFor Future Careers",
    description:
      "Providing practical learning experiences and digital education that prepares students for modern industries and entrepreneurship opportunities.",
    image: hero2,
  },

  {
    id: 3,
    title: "Education That\nCreates Impact",
    description:
      "Creating meaningful career opportunities through mentorship, industry guidance and skill-based training programs.",
    image: hero3,
  },

  {
    id: 4,
    title: "Technology Driven\nSkill Development",
    description:
      "Helping students and youth become industry-ready through technology, creativity and innovation-focused learning.",
    image: hero4,
  },

  {
    id: 5,
    title: "Building Better\nCareer Opportunities",
    description:
      "Connecting education with employability by enabling accessible and practical learning ecosystems.",
    image: hero5,
  },
];

const HeroSection = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  // AUTO SLIDE

  useEffect(() => {

    const interval = setInterval(() => {

      nextSlide();

    }, 5000);

    return () => clearInterval(interval);

  }, [currentSlide]);

  // NEXT SLIDE

  const nextSlide = () => {

    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );

  };

  // PREV SLIDE

  const prevSlide = () => {

    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );

  };

  return (

    <section className="auroHeroSection">

      <div className="auroHeroContainer">

        <div className="auroHeroWrapper">

          {/* LEFT CONTENT */}

          <div className="auroHeroLeft">

            <div className="auroHeroContent">

              <h1>
                {slides[currentSlide].title
                  .split("\n")
                  .map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
              </h1>

              <p>
                {slides[currentSlide].description}
              </p>

              {/* BUTTONS */}

              <div className="auroHeroButtons">

                <button className="auroDonateBtn">

                  Donate Now

                  <ArrowUpRight size={16} />

                </button>

                <button className="auroProcessBtn">

                  <span>
                    <Play
                      size={14}
                      fill="#1E63C6"
                      color="#1E63C6"
                    />
                  </span>

                  Our process

                </button>

              </div>

            </div>

            {/* NAVIGATION */}

            <div className="auroHeroNavigation">

              <button onClick={prevSlide}>

                <ChevronLeft size={26} />

              </button>

              <button onClick={nextSlide}>

                <ChevronRight size={26} />

              </button>

            </div>

          </div>

          {/* RIGHT IMAGE */}

          <div className="auroHeroRight">

            {/* DOT PATTERN */}

            <div className="auroPatternCircle"></div>

            {/* IMAGE */}

            <img
              src={slides[currentSlide].image}
              alt="Hero Banner"
            />

          </div>

        </div>

      </div>

    </section>

  );
};

export default HeroSection;
// import React from "react";
// import { ChevronLeft, ChevronRight, Play } from "lucide-react";
// import heroImage from "../../assets/heroimg.png";

// const HeroSection = () => {
//   return (
//     <section className="hero-section">
//       <div className="hero-container">
        
//         {/* LEFT CONTENT */}
//         <div className="hero-left">
//           <div className="hero-content">
//             <h1>
//               Empowering Youth <br />
//               Skills & Opportunities
//             </h1>

//             <p>
//               We support young individuals in gaining industry-relevant skills
//               that open doors to sustainable employment and entrepreneurship.
//               Our programs focus on making vocational training more accessible
//               and inclusive, especially for underserved and marginalized
//               communities, helping bridge the gap between talent and
//               opportunity.
//             </p>

//             <div className="hero-buttons">
//               <button className="donate-btn">
//                 Donate Now
//               </button>

//               <button className="process-btn">
//                 <span className="play-icon">
//                   <Play size={14} fill="#1d4ed8" strokeWidth={2} />
//                 </span>
//                 Our process
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="hero-right">
//           <div className="dot-pattern"></div>

//           <img src={heroImage} alt="Students" />

//           {/* BOTTOM CURVE */}
//           <div className="curve-shape"></div>
//         </div>

//         {/* SLIDER BUTTONS */}
//         <div className="slider-controls">
//           <button>
//             <ChevronLeft size={24} />
//           </button>

//           <button>
//             <ChevronRight size={24} />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  ArrowUpRight,
} from "lucide-react";

import heroImage from "../../assets/heroimg.png";

import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-wrapper">
        
        {/* LEFT CONTENT */}
        <div className="hero-left">

          <div className="hero-content">
            <h1>
              Empowering Youth
              <br />
              Skills & Opportunities
            </h1>

            <p>
              We support young individuals in gaining industry-relevant skills
              that open doors to sustainable employment and entrepreneurship.
              Our programs focus on making vocational training more accessible
              and inclusive, especially for underserved and marginalized
              communities, helping bridge the gap between talent and
              opportunity.
            </p>

            <div className="hero-cta">

              {/* DONATE BUTTON */}
              <button className="hero-donate-btn">
                Donate Now

                <span className="arrow-box">
                  <ArrowUpRight size={13} />
                </span>
              </button>

              {/* PROCESS BUTTON */}
              <button className="process-btn">
                <span className="play-circle">
                  <Play size={11} fill="#2D73D5" strokeWidth={2.5} />
                </span>

                <span>Our process</span>
              </button>
            </div>
          </div>

          {/* BOTTOM WHITE CURVE */}
          <div className="bottom-curve"></div>

          {/* SLIDER BUTTONS */}
          <div className="slider-btns">
            <button>
              <ChevronLeft size={28} strokeWidth={2.4} />
            </button>

            <button>
              <ChevronRight size={28} strokeWidth={2.4} />
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="hero-right">

          {/* DOT CIRCLE */}
          <div className="dots-circle"></div>

          <img src={heroImage} alt="Students" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
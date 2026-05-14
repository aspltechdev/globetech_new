// import about1 from "../../assets/about-1.jpg";
// import about2 from "../../assets/about-2.jpg";

// const AboutSection = () => {
//   return (
//     <section className="about-section">

//       <div className="container">

//         <div className="row align-items-center g-5">

//           {/* LEFT */}

//           <div className="col-lg-6">

//             <div className="section-tag">
//               <span></span>
//               Who We Are
//             </div>

//             <h2>ABOUT US</h2>

//             <p>
//               Globetech Social Impact Foundation is a socially driven NGO
//               committed to empowering communities through education,
//               skill development, healthcare awareness, and sustainable
//               development initiatives across India.
//             </p>

//             <p>
//               Our programs focus on youth empowerment, women and child welfare,
//               career readiness, infrastructure support, and community upliftment.
//               By bridging the gap between education and employability,
//               we help individuals build brighter futures through
//               industry-oriented training.
//             </p>

//             <a href="#" className="know-btn">
//               Know More
//               <i className="bi bi-arrow-right-circle-fill"></i>
//             </a>

//           </div>

//           {/* RIGHT */}

//           <div className="col-lg-6">

//             <div className="about-images">

//               <img
//                 src={about1}
//                 className="img-large"
//                 alt="About"
//               />

//               <img
//                 src={about2}
//                 className="img-small"
//                 alt="About"
//               />

//               <div className="impact-box">

//                 <h3>
//                   50 <span>Lakh</span>
//                 </h3>

//                 <p>Lives Impacted</p>

//               </div>

//             </div>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default AboutSection;


import React from "react";
import { ArrowUpRight } from "lucide-react";

import about1 from "../../assets/about-1.jpg";
import about2 from "../../assets/about-2.jpg";
import yellowArrow from "../../assets/yellow-arrow.png";

import "./AboutSection.css";

const AboutSection = () => {
  return (

    <section className="auroAboutSection">

      <div className="auroAboutContainer">

        <div className="auroAboutWrapper">

          {/* LEFT SIDE */}

          <div className="auroAboutLeft">

            {/* TAG */}

            <div className="auroAboutTag">

            

              <p>Who We Are</p>
                <span></span>

            </div>

            {/* TITLE */}

            <h2>
              ABOUT US
            </h2>

            {/* DESCRIPTION */}

            <p className="auroAboutDescription">
              Globetech Social Impact Foundation is a socially driven NGO
              committed to empowering communities through education,
              skill development, healthcare awareness, and sustainable
              development initiatives across India. We work closely with
              institutions, industry partners, and local communities to
              create meaningful opportunities that improve livelihoods
              and support long-term growth.
            

         
              Our programs focus on youth empowerment, women and child
              welfare, career readiness, infrastructure support,
              and community upliftment. By bridging the gap between
              education and employability, we help individuals build
              brighter futures through industry-oriented training
              and impactful social initiatives.
            </p>

            {/* BUTTON */}

            <button className="auroKnowBtn">

              Know More

              <ArrowUpRight size={15} />

            </button>

          </div>

          {/* RIGHT SIDE */}

          <div className="auroAboutRight">

            <div className="auroAboutImages">

              {/* MAIN IMAGE */}

              <img
                src={about1}
                alt="About"
                className="auroAboutLargeImg"
              />

              {/* SMALL IMAGE */}

              <img
                src={about2}
                alt="Children"
                className="auroAboutSmallImg"
              />

              {/* IMPACT BOX */}

              <div className="auroImpactBox">

                <h3>
                  50 <span>Lakh</span>
                </h3>

                <p>
                  Lives Impacted
                </p>

              </div>

              {/* YELLOW ARROW */}

              <img
                src={yellowArrow}
                alt="Yellow Arrow"
                className="auroYellowArrow"
              />

            </div>

          </div>

        </div>

      </div>

    </section>

  );
};

export default AboutSection;
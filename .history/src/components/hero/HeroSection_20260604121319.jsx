















// import React, { useEffect, useState } from "react";

// import {
//   ArrowRight,
//   Play,
// } from "lucide-react";

// import {
//   motion,
//   AnimatePresence,
// } from "framer-motion";

// import { Link } from "react-router-dom";

// import "./HeroSection.css";

// import hero1 from "../../assets/hero12.png"; 

// import hero2 from "../../assets/hero13.png";
// import hero3 from "../../assets/hero14.png";

// /* =====================================================
//    SLIDES
// ===================================================== */

// const slides = [
//   {
//     eyebrow:
//       "CSR Skill Development & Livelihood Partner",

//     title:
//       "Transforming Communities Through Employability & Education",

//     description:
//       "We help organizations create measurable social impact through skill development, livelihood initiatives, employability programs, and scalable CSR implementation.",

//     image: hero1,
//   },

//   {
//     eyebrow:
//       "Future-Ready Workforce Development",

//     title:
//       "Creating Sustainable Social Impact Across India",

//     description:
//       "Industry-aligned training programs helping underserved youth access opportunities, digital education, and employment pathways.",

//     image: hero2,
//   },

//   {
//     eyebrow:
//       "End-to-End CSR Implementation",

//     title:
//       "Delivering Measurable Community Transformation",

//     description:
//       "Execution-focused CSR initiatives with transparent reporting, training delivery, mobilization, and livelihood enablement.",

//     image: hero3,
//   },
// ];

// /* =====================================================
//    COUNTER COMPONENT
// ===================================================== */

// const AnimatedCounter = ({ end }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;

//     const duration = 2200;

//     const increment = end / (duration / 16);

//     const timer = setInterval(() => {
//       start += increment;

//       if (start >= end) {
//         setCount(end);

//         clearInterval(timer);
//       } else {
//         setCount(Math.floor(start));
//       }
//     }, 16);

//     return () => clearInterval(timer);
//   }, [end]);

//   return <>{count.toLocaleString()}</>;
// };

// /* =====================================================
//    COMPONENT
// ===================================================== */

// const HeroSection = () => {
//   const [active, setActive] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActive((prev) =>
//         prev === slides.length - 1 ? 0 : prev + 1
//       );
//     }, 6000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="csrHeroSection">
//       {/* BACKGROUND */}

//       <div className="csrHeroOrb csrHeroOrb1"></div>
//       <div className="csrHeroOrb csrHeroOrb2"></div>

//       <div className="csrHeroGrid"></div>

//       <div className="csrHeroNoise"></div>

//       <div className="csrHeroSpotlight"></div>

//       {/* CONTAINER */}

//       <div className="csrHeroContainer">
//         {/* LEFT SIDE */}

//         <motion.div
//           className="csrHeroLeft"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           {/* EYEBROW */}

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={slides[active].eyebrow}
//               className="csrHeroEyebrow"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0 }}
//             >
//               {slides[active].eyebrow}
//             </motion.div>
//           </AnimatePresence>

//           {/* TITLE */}

//           <AnimatePresence mode="wait">
//             <motion.h1
//               key={slides[active].title}
//               className="csrHeroTitle"
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0 }}
//             >
//               {slides[active].title}
//             </motion.h1>
//           </AnimatePresence>

//           {/* DESCRIPTION */}

//           <AnimatePresence mode="wait">
//             <motion.p
//               key={slides[active].description}
//               className="csrHeroDescription"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             >
//               {slides[active].description}
//             </motion.p>
//           </AnimatePresence>

//           {/* ACTION BUTTONS */}

//           <motion.div
//             className="csrHeroActions"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//           >
//             <Link to="/contact"  style={{ textDecoration: "none" }}>
//               <button className="csrHeroPrimaryBtn">
//                 Partner With Us

//                 <span>
//                   <ArrowRight size={16} />
//                 </span>
//               </button>
//             </Link>

//             <button className="csrHeroSecondaryBtn">
//               <Play size={15} />

//               Watch Impact Story
//             </button>
//           </motion.div>

//           {/* STATS */}

//           <motion.div
//             className="csrHeroStatsGrid"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5 }}
//           >
//             {/* CARD */}

//             <motion.div
//               className="csrHeroStatCard"
//               whileHover={{ y: -8 }}
//             >
//               <div className="csrHeroStatGlow"></div>

//               <h2>
//                 <AnimatedCounter end={12000} />+
//               </h2>

//               <p>Youth Trained</p>
//             </motion.div>

//             {/* CARD */}

//             <motion.div
//               className="csrHeroStatCard"
//               whileHover={{ y: -8 }}
//             >
//               <div className="csrHeroStatGlow"></div>

//               <h2>
//                 <AnimatedCounter end={320} />+
//               </h2>

//               <p>Placements</p>
//             </motion.div>

//             {/* CARD */}

//             <motion.div
//               className="csrHeroStatCard"
//               whileHover={{ y: -8 }}
//             >
//               <div className="csrHeroStatGlow"></div>

//               <h2>
//                 <AnimatedCounter end={45} />+
//               </h2>

//               <p>CSR Programs</p>
//             </motion.div>

//             {/* CARD */}

//             {/* <motion.div
//               className="csrHeroStatCard"
//               whileHover={{ y: -8 }}
//             >
//               <div className="csrHeroStatGlow"></div>

//               <h2>
//                 <AnimatedCounter end={100} />+
//               </h2>

//               <p>Communities</p>
//             </motion.div> */}
//           </motion.div>
//         </motion.div>

//         {/* RIGHT SIDE */}

//         <motion.div
//           className="csrHeroRight"
//           initial={{ opacity: 0, scale: 0.92 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//         >
//           {/* FLOATING TOP PANEL */}

//           <motion.div
//             className="csrHeroFloatingPanel csrHeroTopPanel"
//             animate={{
//               y: [0, -10, 0],
//             }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//             }}
//           >
//             Trusted CSR Execution Partner
//           </motion.div>

//           {/* FLOATING BOTTOM PANEL */}

//           <motion.div
//             className="csrHeroFloatingPanel csrHeroBottomPanel"
//             animate={{
//               y: [0, 10, 0],
//             }}
//             transition={{
//               duration: 5,
//               repeat: Infinity,
//             }}
//           >
//             Pan India CSR Operations
//           </motion.div>

//           {/* IMAGE */}

//           <div className="csrHeroImageWrapper">
//             <div className="csrHeroImageGradient"></div>

//             <AnimatePresence mode="wait">
//               <motion.img
//                 key={slides[active].image}
//                 src={slides[active].image}
//                 alt="CSR Hero"
//                 className="csrHeroImage"
//                 whileHover={{
//                   scale: 1.04,
//                   rotate: -1,
//                 }}
//                 initial={{
//                   opacity: 0,
//                   scale: 1.08,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   scale: 1,
//                 }}
//                 exit={{
//                   opacity: 0,
//                 }}
//                 transition={{
//                   duration: 1,
//                 }}
//               />
//             </AnimatePresence>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;






import React, { useEffect, useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import "./HeroSection.css";

import hero1 from "../../assets/hero12.png";
import hero2 from "../../assets/hero13.png";
import hero3 from "../../assets/hero14.png";
import pl1 from "../../assets/placements/pl1.png";
import pl2 from "../../assets/placements/pl2.png";
import pl3 from "../../assets/placements/pl3.png";
import pl4 from "../../assets/placements/iit_mandi.png";
import pl5 from "../../assets/placements/pl5.png";
import pl6 from "../../assets/placements/pl6.png";
import pl7 from "../../assets/placements/pl7.png";
import pl8 from "../../assets/placements/pl8.png";
import nascom from "../../assets/iit.png";
import iit from "../../assets/ourplacementlogo/Groupfour.png";
import anudip from "../../assets/ourplacementlogo/Groupthree.png";
import gram  from "../../assets/ourplacementlogo/Grouptwo.png";
import kou from "../../assets/ourplacementlogo/Groupone.png";
import bos from "../../assets/ourplacementlogo/Groupfive.png";



const slides = [
  {
    eyebrow: "CSR Skill Development & Livelihood Partner",
    title: "Transforming Communities Through Employability & Education",
    description:
      "We help organizations create measurable social impact through skill development, livelihood initiatives, employability programs, and scalable CSR implementation.",
    image: hero1,
  },
  {
    eyebrow: "Future-Ready Workforce Development",
    title: "Creating Sustainable Social Impact Across India",
    description:
      "Industry-aligned training programs helping underserved youth access opportunities, digital education, and employment pathways.",
    image: hero2,
  },
  {
    eyebrow: "End-to-End CSR Implementation",
    title: "Delivering Measurable Community Transformation",
    description:
      "Execution-focused CSR initiatives with transparent reporting, training delivery, mobilization, and livelihood enablement.",
    image: hero3,
  },
];

const AnimatedCounter = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2200;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return <>{count.toLocaleString()}</>;
};

const HeroSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="csrHeroSection">

      {/* Background Slider */}

      <AnimatePresence mode="wait">
        <motion.div
          key={slides[active].image}
          className="csrHeroBackground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          style={{
            backgroundImage: `url(${slides[active].image})`,
          }}
        />
      </AnimatePresence>

      <div className="csrHeroOverlay"></div>
      {/* <div className="csrHeroNoise"></div>
      <div className="csrHeroGrid"></div> */}

      <div className="csrHeroContainer">

        {/* LEFT CONTENT */}

        <motion.div
          className="csrHeroLeft"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[active].eyebrow}
              className="csrHeroEyebrow"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              {slides[active].eyebrow}
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.h1
              key={slides[active].title}
              className="csrHeroTitle"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              {slides[active].title}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={slides[active].description}
              className="csrHeroDescription"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {slides[active].description}
            </motion.p>
          </AnimatePresence>

          <div className="csrHeroActions">
            <Link
              to="/contact"
              style={{ textDecoration: "none" }}
            >
              <button className="csrHeroPrimaryBtn">
                Partner With Us
                <span>
                  <ArrowRight size={16} />
                </span>
              </button>
            </Link>

            <button className="csrHeroSecondaryBtn">
              <Play size={15} />
              Watch Impact Story
            </button>
          </div>
          <div className="csrHeroFloatingStats">

  <div className="csrHeroStatCard">
    <h2>
      <AnimatedCounter end={12000}/>+
    </h2>
    <p>Youth Trained</p>
  </div>

  <div className="csrHeroStatCard">
    <h2>
      <AnimatedCounter end={320}/>+
    </h2>
    <p>Placements</p>
  </div>

  <div className="csrHeroStatCard">
    <h2>
      <AnimatedCounter end={45}/>+
    </h2>
    <p>CSR Programs</p>
  </div>

</div>
        </motion.div>

        {/* RIGHT GLASS IMAGE */}

        <motion.div
          className="csrHeroRight"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="csrHeroGlassImage">
            <AnimatePresence mode="wait">
              <motion.img
                key={slides[active].image}
                src={slides[active].image}
                alt=""
                className="csrHeroImage"
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              />
            </AnimatePresence>
          </div>
        </motion.div>

      </div>

 



      {/* LOGO MARQUEE */}

      <div className="csrLogoStrip">
        <div className="csrLogoTrack">

       

<img src={nascom} alt="Nasscom" />
<img src={iit} alt="IIT MANDI" />

<img src={anudip} alt="Nasscom" />
<img src={gram} alt="Nasscom" />
<img src={kou} alt="Nasscom" />
<img src={bos} alt="Bosch" />
<img src={nascom} alt="Nasscom" />
<img src={iit} alt="IIT MANDI" />

<img src={anudip} alt="Nasscom" />
<img src={gram} alt="Nasscom" />
<img src={kou} alt="Nasscom" />
         

        </div>
      </div>

    </section>
  );
};

export default HeroSection;
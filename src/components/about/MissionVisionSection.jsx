// // // // MissionVisionSection.jsx

// // // import React, {
// // //   useEffect,
// // //   useRef,
// // //   useState,
// // // } from "react";

// // // import {
// // //   ArrowRight,
// // //   CheckCircle2,
// // //   Sparkles,
// // // } from "lucide-react";

// // // import bgImage from "../../assets/aboutmission.jpg";

// // // import "./MissionVisionSection.css";
// // // import { Link } from "react-router-dom";

// // // const MissionVisionSection = () => {



// // //   const sectionRef = useRef(null);



// // //   const [visible, setVisible] =
// // //     useState(false);

// // //   /* =========================================================
// // //      SCROLL REVEAL
// // //   ========================================================= */

// // //   useEffect(() => {

// // //     const observer =
// // //       new IntersectionObserver(

// // //         ([entry]) => {

// // //           if (entry.isIntersecting) {
// // //             setVisible(true);
// // //           }

// // //         },

// // //         {
// // //           threshold: 0.15,
// // //           rootMargin:
// // //             "0px 0px -80px 0px",
// // //         }

// // //       );

// // //     if (sectionRef.current) {

// // //       observer.observe(
// // //         sectionRef.current
// // //       );

// // //     }

// // //     return () =>
// // //       observer.disconnect();

// // //   }, []);

// // //   return (

// // //     <section
// // //       className="missionVisionSection"
// // //       ref={sectionRef}
// // //     >

// // //       {/* =========================================================
// // //           BACKGROUND
// // //       ========================================================= */}

// // //       <img
// // //         src={bgImage}
// // //         alt="Mission Background"
// // //         className="missionBgImage"
// // //       />

// // //       <div className="missionOverlay"></div>

// // //       {/* =========================================================
// // //           CONTAINER
// // //       ========================================================= */}

// // //       <div className="missionContainer">

// // //         <div className="missionGrid">


// // //  <div
// // //             className={
// // //               visible
// // //                 ? "missionCards showMissionCards"
// // //                 : "missionCards"
// // //             }
// // //           >

// // //             {/* MISSION */}

// // //             <div className="glassMissionCard">

// // //               <div className="cardGlow"></div>

// // //               <span className="cardMiniTag">

// // //                 Our Mission

// // //               </span>

// // //               <h3>

// // //                 Empowering Through
// // //                 Education & Innovation

// // //               </h3>

// // //               <p>

// // //                 Helping communities access
// // //                 opportunities, skills, and
// // //                 resources needed to thrive in
// // //                 the modern world.

// // //               </p>

// // //             </div>

// // //             {/* VISION */}

// // //             <div className="glassMissionCard visionCard">

// // //               <div className="cardGlow"></div>

// // //               <span className="cardMiniTag">

// // //                 Our Vision

// // //               </span>

// // //               <h3>

// // //                 A More Inclusive &
// // //                 Sustainable Future

// // //               </h3>

// // //               <p>

// // //                 Creating resilient communities
// // //                 driven by equality, innovation,
// // //                 and long-term positive change.

// // //               </p>

// // //             </div>

// // //           </div>

// // //           {/* =========================================================
// // //               LEFT CONTENT
// // //           ========================================================= */}

// // //           <div
// // //             className={
// // //               visible
// // //                 ? "missionContent showMissionContent"
// // //                 : "missionContent"
// // //             }
// // //           >

// // //             {/* TAG */}



// // //             {/* TITLE */}

// // //             <h2>

// // //               Creating


// // //               Opportunities
// // //               <br />

// // //               For Every Individual.

// // //             </h2>

// // //             {/* DESCRIPTION */}

// // //             <p>

// // //               We are committed to empowering communities
// // //               through education, digital transformation,
// // //               skill development, and sustainable initiatives
// // //               that create long-term positive impact.

// // //             </p>

// // //             {/* POINTS */}

// // //             <div className="missionPoints">

// // //               <div className="missionPoint">

// // //                 <div className="missionIcon">

// // //                   <CheckCircle2 size={16} />

// // //                 </div>

// // //                 <p>

// // //                   Accessible digital education and
// // //                   career-focused learning.

// // //                 </p>

// // //               </div>

// // //               <div className="missionPoint">

// // //                 <div className="missionIcon">

// // //                   <CheckCircle2 size={16} />

// // //                 </div>

// // //                 <p>

// // //                   Skill development programs for
// // //                   underserved communities.

// // //                 </p>

// // //               </div>

// // //               <div className="missionPoint">

// // //                 <div className="missionIcon">

// // //                   <CheckCircle2 size={16} />

// // //                 </div>

// // //                 <p>

// // //                   Sustainable social initiatives
// // //                   creating measurable impact.

// // //                 </p>

// // //               </div>

// // //             </div>

// // //             {/* BUTTONS */}

// // //             <div className="missionButtons">
// // // <Link to ="/contact">
// // //               <button className="primaryMissionBtn">

// // //                 Reach Us

// // //                 <span>

// // //                   <ArrowRight size={16} />

// // //                 </span>

// // //               </button>
// // //               </Link>
// // // <Link to ="/programs">
// // //               <button className="secondaryMissionBtn">

// // //                 View Programs

// // //               </button>
// // //               </Link>

// // //             </div>

// // //           </div>

// // //           {/* =========================================================
// // //               RIGHT SIDE CARDS
// // //           ========================================================= */}



// // //         </div>

// // //       </div>

// // //     </section>
// // //   );
// // // };

// // // export default MissionVisionSection;










// // // MissionVisionSection.jsx

// // import React, { useEffect, useRef } from "react";
// // import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
// // import {
// //   ArrowRight,
// //   Globe2,
// //   HeartHandshake,
// //   target,
// //   Sparkles,
// // } from "lucide-react";

// // import "./MissionVisionSection.css";

// // import heroImage from "../../assets/aboutmission.jpg";
// // import overlayImage from "../../assets/aboutmission.jpg";

// // const MissionVisionSection = () => {
// //   const sectionRef = useRef(null);

// //   const controls = useAnimation();

// //   const { scrollYProgress } = useScroll({
// //     target: sectionRef,
// //     offset: ["start end", "end start"],
// //   });

// //   const bgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
// //   const textY = useTransform(scrollYProgress, [0, 1], [120, 0]);
// //   const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

// //   useEffect(() => {
// //     controls.start("visible");
// //   }, [controls]);

// //   const fadeUp = {
// //     hidden: {
// //       opacity: 0,
// //       y: 100,
// //       filter: "blur(12px)",
// //     },
// //     visible: (i = 1) => ({
// //       opacity: 1,
// //       y: 0,
// //       filter: "blur(0px)",
// //       transition: {
// //         delay: i * 0.2,
// //         duration: 1.2,
// //         ease: [0.16, 1, 0.3, 1],
// //       },
// //     }),
// //   };

// //   return (
// //     <section className="missionSection" ref={sectionRef}>
// //       {/* BACKGROUND */}

// //       <motion.div
// //         className="missionBackground"
// //         style={{
// //           scale: bgScale,
// //         }}
// //       >
// //         <img src={heroImage} alt="" />

// //         <div className="darkOverlay"></div>

// //         <div className="gradientOverlay"></div>

// //         <div className="noiseTexture"></div>
// //       </motion.div>

// //       {/* FLOATING LIGHT */}

// //       <div className="lightOrb orb1"></div>
// //       <div className="lightOrb orb2"></div>

// //       {/* HERO */}

// //       <div className="missionHeroContainer">
// //         <motion.div
// //           className="missionHeroContent"
// //           style={{
// //             y: textY,
// //             opacity,
// //           }}
// //         >
// //           <div className="miniBadge">
// //             <Sparkles size={14} />
// //             Transforming Communities Across India
// //           </div>

// //           <h1>
// //             Every Skill Learned.
// //             <br />
// //             Every Life Empowered.
// //             <br />
// //             Every Community Elevated.
// //           </h1>

// //           <p>
// //             Globetech Social Impact Foundation is building a stronger India
// //             through education, skilling, healthcare, infrastructure support,
// //             and sustainable livelihood opportunities.
// //           </p>

// //           <div className="heroButtons">
// //             <button className="primaryBtn">
// //               Explore Impact
// //               <ArrowRight size={18} />
// //             </button>

// //             <button className="secondaryBtn">
// //               View Programs
// //             </button>
// //           </div>
// //         </motion.div>
// //       </div>

// //       {/* STORY SECTION */}

// //       <div className="storySection">
// //         <div className="storyGrid">
// //           {/* LEFT */}

// //           <motion.div
// //             className="storyLeft"
// //             variants={fadeUp}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true }}
// //           >
// //             <span className="sectionLabel">
// //               OUR PURPOSE
// //             </span>

// //             <h2>
// //               Creating opportunities
// //               <br />
// //               where hope once
// //               <br />
// //               felt impossible.
// //             </h2>

// //             <p>
// //               Through skill development, education, infrastructure,
// //               healthcare initiatives, and women empowerment programs,
// //               we are enabling underserved communities to shape a
// //               better future with dignity and confidence.
// //             </p>
// //           </motion.div>

// //           {/* RIGHT */}

// //           <motion.div
// //             className="glassCardsContainer"
// //             variants={fadeUp}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true }}
// //             custom={2}
// //           >
// //             {/* MISSION */}

// //             <div className="glassCard">
// //               <div className="cardGlow"></div>

// //               <div className="cardIcon">
// //                 <target />
// //               </div>

// //               <span>OUR MISSION</span>

// //               <h3>
// //                 Empowering underserved communities through education,
// //                 skill development, healthcare initiatives, and
// //                 sustainable livelihood opportunities.
// //               </h3>
// //             </div>

// //             {/* VISION */}

// //             <div className="glassCard visionCard">
// //               <div className="cardGlow"></div>

// //               <div className="cardIcon">
// //                 <Globe2 />
// //               </div>

// //               <span>OUR VISION</span>

// //               <h3>
// //                 To build an inclusive India where every individual
// //                 has equal access to opportunity, dignity,
// //                 education, and the power to shape a brighter future.
// //               </h3>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </div>

// //       {/* PARALLAX QUOTE */}

// //       <div className="quoteSection">
// //         <img src={overlayImage} alt="" />

// //         <div className="quoteOverlay"></div>

// //         <motion.div
// //           className="quoteContent"
// //           initial={{
// //             opacity: 0,
// //             y: 100,
// //           }}
// //           whileInView={{
// //             opacity: 1,
// //             y: 0,
// //           }}
// //           transition={{
// //             duration: 1.1,
// //           }}
// //           viewport={{ once: true }}
// //         >
// //           <HeartHandshake size={50} />

// //           <h2>
// //             “When education reaches one person,
// //             opportunity reaches an entire generation.”
// //           </h2>
// //         </motion.div>
// //       </div>

// //       {/* IMPACT SECTION */}

// //       <div className="impactSection">
// //         <motion.div
// //           className="impactHeader"
// //           initial={{
// //             opacity: 0,
// //             y: 80,
// //           }}
// //           whileInView={{
// //             opacity: 1,
// //             y: 0,
// //           }}
// //           transition={{
// //             duration: 1,
// //           }}
// //           viewport={{ once: true }}
// //         >
// //           <span>OUR IMPACT</span>

// //           <h2>Changing Lives Across India</h2>
// //         </motion.div>

// //         <div className="impactGrid">
// //           {[
// //             {
// //               number: "30K+",
// //               text: "Students Trained",
// //             },
// //             {
// //               number: "PAN",
// //               text: "India Reach",
// //             },
// //             {
// //               number: "100+",
// //               text: "CSR Collaborations",
// //             },
// //             {
// //               number: "500+",
// //               text: "Career Opportunities",
// //             },
// //           ].map((item, index) => (
// //             <motion.div
// //               className="impactCard"
// //               key={index}
// //               initial={{
// //                 opacity: 0,
// //                 y: 80,
// //               }}
// //               whileInView={{
// //                 opacity: 1,
// //                 y: 0,
// //               }}
// //               transition={{
// //                 delay: index * 0.15,
// //                 duration: 0.9,
// //               }}
// //               viewport={{ once: true }}
// //             >
// //               <h3>{item.number}</h3>

// //               <p>{item.text}</p>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default MissionVisionSection;



// // MissionVisionSection.jsx

// import React from "react";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   Sparkles,
//   Globe2,
//   target,
// } from "lucide-react";

// import "./MissionVisionSection.css";

// import bgImage from "../../assets/aboutmission.jpg";

// const MissionVisionSection = () => {
//   return (
//     <section className="mvSection">
//       {/* BG */}

//       <div className="mvBg">
//         <img src={bgImage} alt="" />

//         <div className="mvOverlay"></div>

//         <div className="mvGradient"></div>
//       </div>

//       {/* CONTENT */}

//       <div className="mvContainer">
//         {/* LEFT */}

//         <motion.div
//           className="mvLeft"
//           initial={{
//             opacity: 0,
//             y: 60,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 1,
//           }}
//           viewport={{ once: true }}
//         >
//           <div className="mvTag">
//             <Sparkles size={14} />
//             Empowering India
//           </div>

//           <h2>
//             Building Hope.
//             <br />
//             Creating Futures.
//           </h2>

//           <p>
//             Empowering communities through education,
//             skilling, healthcare, and sustainable
//             livelihood opportunities across India.
//           </p>

//           <div className="mvButtons">
//             <button className="mvPrimaryBtn">
//               Explore Impact
//               <ArrowRight size={16} />
//             </button>

//             <button className="mvSecondaryBtn">
//               View Programs
//             </button>
//           </div>
//         </motion.div>

//         {/* RIGHT */}

//         <motion.div
//           className="mvCards"
//           initial={{
//             opacity: 0,
//             x: 80,
//           }}
//           whileInView={{
//             opacity: 1,
//             x: 0,
//           }}
//           transition={{
//             duration: 1,
//           }}
//           viewport={{ once: true }}
//         >
//           {/* MISSION */}

//           <div className="mvCard">
//             <div className="mvGlow"></div>

//             <div className="mvIcon">
//               <target />
//             </div>

//             <span>OUR MISSION</span>

//             <h3>
//               Empower underserved communities through
//               education, skill development, healthcare,
//               and sustainable opportunities.
//             </h3>
//           </div>

//           {/* VISION */}

//           <div className="mvCard">
//             <div className="mvGlow"></div>

//             <div className="mvIcon">
//               <Globe2 />
//             </div>

//             <span>OUR VISION</span>

//             <h3>
//               Create an inclusive India where every
//               individual has access to opportunity,
//               dignity, and a brighter future.
//             </h3>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default MissionVisionSection;






// MissionVisionSection.jsx

import React, { useRef } from "react";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

import {
  ArrowRight,
  Sparkles,
  Globe2,
  Target,
} from "lucide-react";

import "./MissionVisionSection.css";

import bgImage from "../../assets/aboutmission.jpg";

const MissionVisionSection = () => {
  const sectionRef = useRef(null);

  /* =========================================================
     SCROLL PROGRESS
  ========================================================= */

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(
    scrollYProgress,
    {
      stiffness: 120,
      damping: 30,
      restDelta: 0.001,
    }
  );

  /* =========================================================
     PARALLAX EFFECTS
  ========================================================= */

  const bgScale = useTransform(
    smoothProgress,
    [0, 1],
    [1.15, 1]
  );

  const leftY = useTransform(
    smoothProgress,
    [0, 1],
    [120, -30]
  );

  const cardsY = useTransform(
    smoothProgress,
    [0, 1],
    [160, -40]
  );

  const glowY = useTransform(
    smoothProgress,
    [0, 1],
    [0, -120]
  );

  const opacity = useTransform(
    smoothProgress,
    [0, 0.2],
    [0, 1]
  );

  const rotate = useTransform(
    smoothProgress,
    [0, 1],
    [-1.5, 1.5]
  );

  return (
    <section
      className="mvSection"
      ref={sectionRef}
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <motion.div
        className="mvBg"
        style={{
          scale: bgScale,
        }}
      >
        <img
          src={bgImage}
          alt="Mission Background"
        />

        <div className="mvOverlay"></div>

        <div className="mvGradient"></div>

        <motion.div
          className="ambientGlow"
          style={{
            y: glowY,
          }}
        ></motion.div>

        <div className="noiseLayer"></div>
      </motion.div>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="mvContainer">
        {/* =========================================================
            LEFT CONTENT
        ========================================================= */}

        <motion.div
          className="mvLeft"
          style={{
            y: leftY,
            opacity,
          }}
        >
          {/* TAG */}

          <motion.div
            className="mvTag"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
          >
            <Sparkles size={14} />
            Empowering Communities Across India
          </motion.div>

          {/* TITLE */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 80,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true }}
          >
            Building Hope.
            <br />
            Creating Futures.
          </motion.h2>

          {/* DESCRIPTION */}

          {/* <motion.p
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 1,
            }}
            viewport={{ once: true }}
          >
            Empowering communities through
            education, skilling, healthcare,
            infrastructure support, and
            sustainable livelihood opportunities
            that create meaningful social impact
            across India.
          </motion.p> */}

          <motion.p
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 1,
            }}
            viewport={{ once: true }}
          >
            As a trusted CSR Skill Development & Livelihood
            Implementation Partner, we collaborate with
            corporates, institutions, and communities to
            create sustainable pathways for employment,
            entrepreneurship, and social empowerment.
            Through industry-aligned skilling programs,
            digital education, healthcare awareness,
            infrastructure support, and livelihood
            initiatives, we empower underserved youth,
            women, and rural communities with the tools,
            opportunities, and confidence needed to build
            independent and future-ready lives across India.
          </motion.p>

          {/* BUTTONS */}

          <motion.div
            className="mvButtons"
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 1,
            }}
            viewport={{ once: true }}
          >
            <button className="mvPrimaryBtn">
              Explore Impact

              <ArrowRight size={16} />
            </button>

            <button className="mvSecondaryBtn">
              View Programs
            </button>
          </motion.div>
        </motion.div>

        {/* =========================================================
            RIGHT CARDS
        ========================================================= */}

        <motion.div
          className="mvCards"
          style={{
            y: cardsY,
            rotate,
          }}
        >
          {/* MISSION CARD */}

          <motion.div
            className="mvCard"
            initial={{
              opacity: 0,
              y: 120,
              scale: 0.9,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            viewport={{ once: true }}
          >
            <div className="mvGlow"></div>

            <div className="mvLine"></div>

            <div className="mvIcon">
              <Target />
            </div>

            <span>OUR MISSION</span>

            <h3>
           <h3>
  Empower underserved communities through
  CSR-led education, industry-focused skill
  development, healthcare initiatives, and
  sustainable livelihood opportunities that
  enable youth, women, and rural communities
  to achieve social transformation.
</h3>
            </h3>
          </motion.div>

          {/* VISION CARD */}

          <motion.div
            className="mvCard visionCard"
            initial={{
              opacity: 0,
              y: 140,
              scale: 0.9,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            viewport={{ once: true }}
          >
            <div className="mvGlow"></div>

            <div className="mvLine"></div>

            <div className="mvIcon">
              <Globe2 />
            </div>

            <span>OUR VISION</span>

            <h3>
            <h3>
  Create an inclusive India where every
  individual has equal access to quality
  education, meaningful opportunities,
  sustainable livelihoods, and the dignity
  to build a secure, empowered, and
  future-ready life with confidence.
</h3>
            </h3>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
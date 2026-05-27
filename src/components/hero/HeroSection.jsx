

// // // // // import React, { useEffect, useState } from "react";
// // // // // import {
// // // // //   ChevronLeft,
// // // // //   ChevronRight,
// // // // //   HandHeart,
// // // // // } from "lucide-react";

// // // // // import "./HeroSection.css";

// // // // // /* =========================
// // // // //    IMAGES
// // // // // ========================= */

// // // // // import heroImg1 from "../../assets/hero/hero1.png";
// // // // // import heroImg2 from "../../assets/hero/hero2.png";
// // // // // import heroImg3 from "../../assets/hero/hero3.png";
// // // // // import heroImg4 from "../../assets/hero/hero4.png";

// // // // // /* =========================
// // // // //    SLIDES
// // // // // ========================= */

// // // // // const slides = [
// // // // //   {
// // // // //     title: "Empowering Youth\nSkills & Opportunities",
// // // // //     description:
// // // // //       "We support young individuals in gaining industry-relevant skills that open doors to sustainable employment and entrepreneurship. Our programs focus on making vocational training more accessible and inclusive.",
// // // // //     image: heroImg1,
// // // // //   },

// // // // //   {
// // // // //     title: "Building Careers\nFor The Future",
// // // // //     description:
// // // // //       "Helping students and youth gain practical digital skills through real-world learning programs and mentorship opportunities.",
// // // // //     image: heroImg2,
// // // // //   },

// // // // //   {
// // // // //     title: "Education That\nCreates Impact",
// // // // //     description:
// // // // //       "Providing accessible vocational and technology education for underserved communities and aspiring professionals.",
// // // // //     image: heroImg3,
// // // // //   },

// // // // //   {
// // // // //     title: "Creating Leaders\nThrough Skills",
// // // // //     description:
// // // // //       "Empowering the next generation with digital transformation skills, innovation mindset, and career opportunities.",
// // // // //     image: heroImg4,
// // // // //   },
// // // // // ];

// // // // // const HeroSection = () => {
// // // // //   const [activeSlide, setActiveSlide] = useState(0);

// // // // //   /* =========================
// // // // //      AUTO SLIDE
// // // // //   ========================= */

// // // // //   useEffect(() => {
// // // // //     const interval = setInterval(() => {
// // // // //       nextSlide();
// // // // //     }, 4000);

// // // // //     return () => clearInterval(interval);
// // // // //   }, [activeSlide]);

// // // // //   /* =========================
// // // // //      PREV
// // // // //   ========================= */

// // // // //   const prevSlide = () => {
// // // // //     setActiveSlide((prev) =>
// // // // //       prev === 0 ? slides.length - 1 : prev - 1
// // // // //     );
// // // // //   };

// // // // //   /* =========================
// // // // //      NEXT
// // // // //   ========================= */

// // // // //   const nextSlide = () => {
// // // // //     setActiveSlide((prev) =>
// // // // //       prev === slides.length - 1 ? 0 : prev + 1
// // // // //     );
// // // // //   };

// // // // //   return (
// // // // //     <section className="hero">

// // // // //       <div className="hero-card">

// // // // //         {/* LEFT CONTENT */}

// // // // //         <div className="hero-left">

// // // // //           <div className="hero-content">

// // // // //             <h1>
// // // // //               {slides[activeSlide].title
// // // // //                 .split("\n")
// // // // //                 .map((line, index) => (
// // // // //                   <span key={index}>
// // // // //                     {line}
// // // // //                     <br />
// // // // //                   </span>
// // // // //                 ))}
// // // // //             </h1>

// // // // //             <p>
// // // // //               {slides[activeSlide].description}
// // // // //             </p>

// // // // //             <button className="hero-btn">

// // // // //               <span>Donate Now</span>

// // // // //               <span className="icon-box">
// // // // //                 <HandHeart size={16} />
// // // // //               </span>

// // // // //             </button>

// // // // //           </div>

// // // // //           {/* CONTROLS */}

      
// // // // //         </div>

// // // // //         {/* RIGHT */}

// // // // //         <div className="hero-right">

// // // // //           <div className="circle-pattern"></div>

// // // // //           <img
// // // // //             src={slides[activeSlide].image}
// // // // //             alt="hero"
// // // // //           />

// // // // //         </div>

// // // // //       </div>

// // // // //       {/* DOTS */}

// // // // //       <div className="hero-dots">

// // // // //         {slides.map((_, index) => (
// // // // //           <span
// // // // //             key={index}
// // // // //             className={
// // // // //               activeSlide === index
// // // // //                 ? "dot active"
// // // // //                 : "dot"
// // // // //             }
// // // // //             onClick={() => setActiveSlide(index)}
// // // // //           ></span>
// // // // //         ))}

// // // // //       </div>

// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default HeroSection;







// // // // // import React, { useEffect, useState } from "react";
// // // // // import {
// // // // //   HandHeart,
// // // // //   ArrowRight,
// // // // //   Play,
// // // // //   Sparkles,
// // // // // } from "lucide-react";
// // // // // import { Link } from "react-router-dom";

// // // // // import "./HeroSection.css";



// // // // // import heroImg1 from "../../assets/group4.png";
// // // // // import heroImg2 from "../../assets/group1.png";
// // // // // import heroImg3 from "../../assets/group2.png";
// // // // // import heroImg4 from "../../assets/group3.png";

// // // // // /* =========================
// // // // //    SLIDES
// // // // // ========================= */

// // // // // const slides = [
// // // // //     {
// // // // //     title: "“CSR Skill Development & Livelihood Implementation Partner”",

// // // // //     description:
// // // // //       "We help underserved communities access digital education, career opportunities, and life-changing mentorship programs that create long-term social impact.",

// // // // //     image: heroImg5,

// // // // //     stats: "12K+ Students Empowered",
// // // // //   },
// // // // //   {
// // // // //     title: "Empowering Youth\nThrough Skills & Hope",

// // // // //     description:
// // // // //       "We help underserved communities access digital education, career opportunities, and life-changing mentorship programs that create long-term social impact.",

// // // // //     image: heroImg1,

// // // // //     stats: "12K+ Students Empowered",
// // // // //   },

// // // // //   {
// // // // //     title: "Building Futures\nThat Truly Matter",

// // // // //     description:
// // // // //       "From education to employment, we create pathways that help young people become financially independent and future-ready.",

// // // // //     image: heroImg2,

// // // // //     stats: "320+ Career Placements",
// // // // //   },

// // // // //   {
// // // // //     title: "Education That\nTransforms Lives",

// // // // //     description:
// // // // //       "Accessible learning experiences, real-world training, and community-led programs designed for meaningful change.",

// // // // //     image: heroImg3,

// // // // //     stats: "45+ Community Programs",
// // // // //   },

// // // // //   {
// // // // //     title: "Creating Impact\nFor The Next Generation",

// // // // //     description:
// // // // //       "Together with volunteers, donors, and educators, we are shaping a generation driven by innovation and purpose.",

// // // // //     image: heroImg4,

// // // // //     stats: "100+ Volunteers",
// // // // //   },
// // // // // ];

// // // // // const HeroSection = () => {
// // // // //   const [activeSlide, setActiveSlide] = useState(0);

// // // // //   /* =========================
// // // // //      AUTO SLIDE
// // // // //   ========================= */

// // // // //   useEffect(() => {
// // // // //     const interval = setInterval(() => {
// // // // //       setActiveSlide((prev) =>
// // // // //         prev === slides.length - 1 ? 0 : prev + 1
// // // // //       );
// // // // //     }, 5000);

// // // // //     return () => clearInterval(interval);
// // // // //   }, []);

// // // // //   return (
// // // // //     <section className="heroSection">
// // // // //       {/* BACKGROUND GLOW */}
// // // // //       <div className="heroBlur heroBlur1"></div>
// // // // //       <div className="heroBlur heroBlur2"></div>

// // // // //       <div className="heroContainer">
// // // // //         <div className="heroGrid">
// // // // //           {/* =========================
// // // // //               LEFT CONTENT
// // // // //           ========================= */}

// // // // //           <div className="heroLeft">
           
              
         

// // // // //             <div className="heroContent">
// // // // //               <h1>
// // // // //                 {slides[activeSlide].title
// // // // //                   .split("\n")
// // // // //                   .map((line, index) => (
// // // // //                     <span key={index}>
// // // // //                       {line}
// // // // //                       <br />
// // // // //                     </span>
// // // // //                   ))}
// // // // //               </h1>

// // // // //               <p>{slides[activeSlide].description}</p>

// // // // //               {/* CTA BUTTONS */}

// // // // //               <div className="heroActions">
// // // // //                 {/* <button className="heroBtn primaryBtn">
// // // // //                   <span>Donate Now</span>

// // // // //                   <div className="heroBtnIcon">
// // // // //                     <HandHeart size={16} />
// // // // //                   </div>
// // // // //                 </button> */}

// // // // // <Link to="/contact">
// // // // //   <button className="heroBtn primaryBtn">
// // // // //     <span>Donate Now</span>

// // // // //     <div className="heroBtnIcon">
// // // // //       <HandHeart size={16} />
// // // // //     </div>
// // // // //   </button>
// // // // // </Link>

              
// // // // //               </div>

// // // // //               {/* STATS */}

          
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* =========================
// // // // //               RIGHT IMAGE
// // // // //           ========================= */}

// // // // //           <div className="heroRight">
// // // // //             {/* FLOATING CARDS */}

// // // // //             {/* <div className="floatingCard topCard">
// // // // //               <span>✨ Impact Driven</span>
// // // // //             </div> */}

// // // // //             <div className="floatingCard bottomCard">
// // // // //               <div>
// // // // //                 <h4>{slides[activeSlide].stats}</h4>
// // // // //                 <p>Changing Lives Everyday</p>
// // // // //               </div>

// // // // //               <ArrowRight size={18} />
// // // // //             </div>

// // // // //             {/* IMAGE WRAPPER */}

// // // // //             <div className="heroImageWrapper">
// // // // //               <div className="heroCircle"></div>

// // // // //               <img
// // // // //                 src={slides[activeSlide].image}
// // // // //                 alt="NGO Hero"
// // // // //                 className="heroImage"
// // // // //               />
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* =========================
// // // // //             SLIDER DOTS
// // // // //         ========================= */}

// // // // //         <div className="heroDots">
// // // // //           {slides.map((_, index) => (
// // // // //             <button
// // // // //               key={index}
// // // // //               className={
// // // // //                 activeSlide === index
// // // // //                   ? "heroDot active"
// // // // //                   : "heroDot"
// // // // //               }
// // // // //               onClick={() => setActiveSlide(index)}
// // // // //             ></button>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default HeroSection;

// // // // import React, { useEffect, useState } from "react";
// // // // import {
// // // //   ArrowRight,
// // // //   HandHeart,
// // // //   Sparkles,
// // // //   Play,
// // // // } from "lucide-react";
// // // // import { Link } from "react-router-dom";
// // // // import { motion, AnimatePresence } from "framer-motion";

// // // // import "./HeroSection.css";

// // // // import heroImg1 from "../../assets/group1.png";
// // // // import heroImg2 from "../../assets/group2.png";
// // // // import heroImg3 from "../../assets/group3.png";
// // // // import heroImg4 from "../../assets/group4.png";

// // // // const slides = [
// // // //   {
// // // //     title: "Building Employable Futures For India’s Next Generation",
// // // //     description:
// // // //       "Empowering underserved youth through digital education, livelihood initiatives, and transformative skill development programs.",
// // // //     image: heroImg1,
// // // //     stats: "12K+ Youth Empowered",
// // // //   },
// // // //   {
// // // //     title: "Creating Sustainable Impact Through CSR Innovation",
// // // //     description:
// // // //       "We partner with organizations to build measurable social impact through scalable education and employment ecosystems.",
// // // //     image: heroImg2,
// // // //     stats: "320+ Career Placements",
// // // //   },
// // // //   {
// // // //     title: "Transforming Communities Through Purpose-Driven Learning",
// // // //     description:
// // // //       "Accessible education, future-ready skills, and real-world opportunities designed to uplift communities.",
// // // //     image: heroImg3,
// // // //     stats: "45+ CSR Programs",
// // // //   },
// // // //   {
// // // //     title: "Empowering Dreams Through Education & Opportunity",
// // // //     description:
// // // //       "Together with volunteers and partners, we shape brighter futures driven by innovation and purpose.",
// // // //     image: heroImg4,
// // // //     stats: "100+ Volunteers",
// // // //   },
// // // // ];

// // // // const HeroSection = () => {
// // // //   const [activeSlide, setActiveSlide] = useState(0);

// // // //   useEffect(() => {
// // // //     const interval = setInterval(() => {
// // // //       setActiveSlide((prev) =>
// // // //         prev === slides.length - 1 ? 0 : prev + 1
// // // //       );
// // // //     }, 6000);

// // // //     return () => clearInterval(interval);
// // // //   }, []);

// // // //   return (
// // // //     <section className="premiumHero">
// // // //       {/* BACKGROUND EFFECTS */}

// // // //       <div className="gradientOrb orb1"></div>
// // // //       <div className="gradientOrb orb2"></div>
// // // //       <div className="gridOverlay"></div>
// // // //       <div className="noiseLayer"></div>

// // // //       <div className="heroContainer">
// // // //         {/* LEFT CONTENT */}

// // // //         <motion.div
// // // //           className="heroLeft"
// // // //           initial={{ opacity: 0, y: 60 }}
// // // //           animate={{ opacity: 1, y: 0 }}
// // // //           transition={{ duration: 1 }}
// // // //         >
// // // //           {/* BADGE */}

// // // //           <motion.div
// // // //             className="heroBadge"
// // // //             initial={{ opacity: 0, scale: 0.8 }}
// // // //             animate={{ opacity: 1, scale: 1 }}
// // // //             transition={{ delay: 0.2 }}
// // // //           >
// // // //             <Sparkles size={16} />
// // // //             Trusted CSR Implementation Partner
// // // //           </motion.div>

// // // //           {/* TITLE */}

// // // //           <AnimatePresence mode="wait">
// // // //             <motion.h1
// // // //               key={slides[activeSlide].title}
// // // //               className="heroTitle"
// // // //               initial={{ opacity: 0, y: 50 }}
// // // //               animate={{ opacity: 1, y: 0 }}
// // // //               exit={{ opacity: 0, y: -40 }}
// // // //               transition={{ duration: 0.8 }}
// // // //             >
// // // //               {slides[activeSlide].title}
// // // //             </motion.h1>
// // // //           </AnimatePresence>

// // // //           {/* DESCRIPTION */}

// // // //           <AnimatePresence mode="wait">
// // // //             <motion.p
// // // //               key={slides[activeSlide].description}
// // // //               className="heroDescription"
// // // //               initial={{ opacity: 0 }}
// // // //               animate={{ opacity: 1 }}
// // // //               exit={{ opacity: 0 }}
// // // //               transition={{ duration: 0.8 }}
// // // //             >
// // // //               {slides[activeSlide].description}
// // // //             </motion.p>
// // // //           </AnimatePresence>

// // // //           {/* ACTIONS */}

// // // //           <motion.div
// // // //             className="heroActions"
// // // //             initial={{ opacity: 0, y: 20 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ delay: 0.4 }}
// // // //           >
// // // //             <Link to="/contact">
// // // //               <button className="primaryBtn">
// // // //                 <span>Partner With Us</span>

// // // //                 <div className="btnIcon">
// // // //                   <HandHeart size={18} />
// // // //                 </div>
// // // //               </button>
// // // //             </Link>

// // // //             <button className="secondaryBtn">
// // // //               <Play size={16} />
// // // //               <span>View Impact</span>
// // // //             </button>
// // // //           </motion.div>

// // // //           {/* METRICS */}

// // // //           <div className="heroMetrics">
// // // //             <div className="metricCard">
// // // //               <h3>12K+</h3>
// // // //               <p>Youth Trained</p>
// // // //             </div>

// // // //             <div className="metricCard">
// // // //               <h3>320+</h3>
// // // //               <p>Placements</p>
// // // //             </div>

// // // //             <div className="metricCard">
// // // //               <h3>45+</h3>
// // // //               <p>CSR Programs</p>
// // // //             </div>
// // // //           </div>
// // // //         </motion.div>

// // // //         {/* RIGHT VISUAL */}

// // // //         <motion.div
// // // //           className="heroRight"
// // // //           initial={{ opacity: 0, scale: 0.9 }}
// // // //           animate={{ opacity: 1, scale: 1 }}
// // // //           transition={{ duration: 1 }}
// // // //         >
// // // //           {/* FLOATING CARD */}

// // // //           <motion.div
// // // //             className="floatingGlassCard topGlass"
// // // //             animate={{
// // // //               y: [0, -10, 0],
// // // //             }}
// // // //             transition={{
// // // //               duration: 4,
// // // //               repeat: Infinity,
// // // //             }}
// // // //           >
// // // //             <span>✨ Impact Driven Programs</span>
// // // //           </motion.div>

// // // //           <motion.div
// // // //             className="floatingGlassCard bottomGlass"
// // // //             animate={{
// // // //               y: [0, 12, 0],
// // // //             }}
// // // //             transition={{
// // // //               duration: 5,
// // // //               repeat: Infinity,
// // // //             }}
// // // //           >
// // // //             <div>
// // // //               <h4>{slides[activeSlide].stats}</h4>
// // // //               <p>Changing Lives Everyday</p>
// // // //             </div>

// // // //             <ArrowRight size={18} />
// // // //           </motion.div>

// // // //           {/* IMAGE CONTAINER */}

// // // //           <div className="imageWrapper">
// // // //             <div className="imageGlow"></div>
// // // //             <div className="rotatingRing"></div>

// // // //             <AnimatePresence mode="wait">
// // // //               <motion.img
// // // //                 key={slides[activeSlide].image}
// // // //                 src={slides[activeSlide].image}
// // // //                 alt="CSR"
// // // //                 className="heroImage"
// // // //                 initial={{ opacity: 0, scale: 1.1 }}
// // // //                 animate={{ opacity: 1, scale: 1 }}
// // // //                 exit={{ opacity: 0 }}
// // // //                 transition={{ duration: 1 }}
// // // //               />
// // // //             </AnimatePresence>
// // // //           </div>
// // // //         </motion.div>
// // // //       </div>

// // // //       {/* SLIDER DOTS */}

// // // //       <div className="heroDots">
// // // //         {slides.map((_, index) => (
// // // //           <button
// // // //             key={index}
// // // //             onClick={() => setActiveSlide(index)}
// // // //             className={
// // // //               activeSlide === index
// // // //                 ? "heroDot active"
// // // //                 : "heroDot"
// // // //             }
// // // //           ></button>
// // // //         ))}
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default HeroSection;








// // // import React, { useEffect, useState } from "react";
// // // import {
// // //   ArrowRight,
// // //   HandHeart,
// // //   Sparkles,
// // //   Play,
// // //   BriefcaseBusiness,
// // //   GraduationCap,
// // //   Users,
// // //   BadgeCheck,
// // // } from "lucide-react";

// // // import { Link } from "react-router-dom";
// // // import {
// // //   motion,
// // //   AnimatePresence,
// // //   useMotionValue,
// // //   useTransform,
// // //   animate,
// // // } from "framer-motion";

// // // import "./HeroSection.css";

// // // import heroImg1 from "../../assets/group1.png";
// // // import heroImg2 from "../../assets/group2.png";
// // // import heroImg3 from "../../assets/group3.png";

// // // const slides = [
// // //   {
// // //     title: "CSR Skill Development & Livelihood Implementation Partner",
// // //     heading:
// // //       "Building Employable Futures For India’s Next Generation",

// // //     description:
// // //       "We partner with corporates, foundations, and institutions to deliver measurable CSR impact through skill development, digital education, livelihood programs, and youth employability initiatives.",

// // //     image: heroImg1,
// // //   },

// // //   {
// // //     title: "Empowering Youth Through Future-Ready Skills",

// // //     heading:
// // //       "Creating Sustainable Community Transformation",

// // //     description:
// // //       "Industry-aligned training, placement support, and community engagement programs helping underserved youth unlock economic opportunities.",

// // //     image: heroImg2,
// // //   },

// // //   {
// // //     title: "Driving Scalable Social Impact Across India",

// // //     heading:
// // //       "Implementation Excellence For CSR Programs",

// // //     description:
// // //       "End-to-end CSR implementation partner delivering training, impact reporting, mobilization, and employment-linked programs.",

// // //     image: heroImg3,
// // //   },
// // // ];

// // // /* =========================================
// // //    COUNTER COMPONENT
// // // ========================================= */

// // // const Counter = ({ from = 0, to }) => {
// // //   const count = useMotionValue(from);

// // //   const rounded = useTransform(count, (latest) =>
// // //     Math.round(latest)
// // //   );

// // //   const [display, setDisplay] = useState(from);

// // //   useEffect(() => {
// // //     const controls = animate(count, to, {
// // //       duration: 3,
// // //       ease: "easeOut",
// // //     });

// // //     rounded.on("change", (latest) => {
// // //       setDisplay(latest);
// // //     });

// // //     return () => controls.stop();
// // //   }, [to]);

// // //   return <span>{display}</span>;
// // // };

// // // const HeroSection = () => {
// // //   const [activeSlide, setActiveSlide] = useState(0);

// // //   useEffect(() => {
// // //     const interval = setInterval(() => {
// // //       setActiveSlide((prev) =>
// // //         prev === slides.length - 1 ? 0 : prev + 1
// // //       );
// // //     }, 7000);

// // //     return () => clearInterval(interval);
// // //   }, []);

// // //   return (
// // //     <section className="premiumHero">
// // //       {/* =========================
// // //          CINEMATIC BACKGROUNDS
// // //       ========================= */}

// // //       <div className="gradientOrb orb1"></div>
// // //       <div className="gradientOrb orb2"></div>
// // //       <div className="gradientOrb orb3"></div>

// // //       <div className="gridOverlay"></div>
// // //       <div className="animatedLines"></div>
// // //       <div className="noiseLayer"></div>

// // //       {/* =========================
// // //          MAIN CONTAINER
// // //       ========================= */}

// // //       <div className="heroContainer">
// // //         {/* =====================================
// // //             LEFT CONTENT
// // //         ===================================== */}

// // //         <motion.div
// // //           className="heroLeft"
// // //           initial={{ opacity: 0, y: 80 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 1 }}
// // //         >
// // //           {/* BADGE */}

// // //           <motion.div
// // //             className="heroBadge"
// // //             initial={{ opacity: 0, scale: 0.8 }}
// // //             animate={{ opacity: 1, scale: 1 }}
// // //             transition={{ delay: 0.3 }}
// // //           >
// // //             <Sparkles size={16} />
// // //             Trusted CSR Implementation Partner
// // //           </motion.div>

// // //           {/* TITLE */}

// // //           <AnimatePresence mode="wait">
// // //             <motion.h4
// // //               key={slides[activeSlide].title}
// // //               className="miniTitle"
// // //               initial={{ opacity: 0, y: 20 }}
// // //               animate={{ opacity: 1, y: 0 }}
// // //               exit={{ opacity: 0 }}
// // //             >
// // //               {slides[activeSlide].title}
// // //             </motion.h4>
// // //           </AnimatePresence>

// // //           {/* MAIN HEADING */}

// // //           <AnimatePresence mode="wait">
// // //             <motion.h1
// // //               key={slides[activeSlide].heading}
// // //               className="heroTitle"
// // //               initial={{ opacity: 0, y: 60 }}
// // //               animate={{ opacity: 1, y: 0 }}
// // //               exit={{ opacity: 0, y: -40 }}
// // //               transition={{ duration: 0.8 }}
// // //             >
// // //               {slides[activeSlide].heading}
// // //             </motion.h1>
// // //           </AnimatePresence>

// // //           {/* DESCRIPTION */}

// // //           <AnimatePresence mode="wait">
// // //             <motion.p
// // //               key={slides[activeSlide].description}
// // //               className="heroDescription"
// // //               initial={{ opacity: 0 }}
// // //               animate={{ opacity: 1 }}
// // //               exit={{ opacity: 0 }}
// // //               transition={{ duration: 0.8 }}
// // //             >
// // //               {slides[activeSlide].description}
// // //             </motion.p>
// // //           </AnimatePresence>

// // //           {/* CTA */}

// // //           <motion.div
// // //             className="heroActions"
// // //             initial={{ opacity: 0, y: 30 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ delay: 0.5 }}
// // //           >
// // //             <Link to="/contact">
// // //               <button className="primaryBtn">
// // //                 <span>Partner With Us</span>

// // //                 <div className="btnIcon">
// // //                   <HandHeart size={18} />
// // //                 </div>
// // //               </button>
// // //             </Link>

// // //             <button className="secondaryBtn">
// // //               <Play size={16} />
// // //               <span>Watch Impact Story</span>
// // //             </button>
// // //           </motion.div>

// // //           {/* =====================================
// // //               IMPACT STATS
// // //           ===================================== */}

// // //           <div className="impactGrid">
// // //             <motion.div
// // //               className="impactCard"
// // //               whileHover={{ y: -8 }}
// // //             >
// // //               <h2>
// // //                 <Counter to={12000} />+
// // //               </h2>

// // //               <p>Youth Trained</p>
// // //             </motion.div>

// // //             <motion.div
// // //               className="impactCard"
// // //               whileHover={{ y: -8 }}
// // //             >
// // //               <h2>
// // //                 <Counter to={320} />+
// // //               </h2>

// // //               <p>Placements</p>
// // //             </motion.div>

// // //             <motion.div
// // //               className="impactCard"
// // //               whileHover={{ y: -8 }}
// // //             >
// // //               <h2>
// // //                 <Counter to={45} />+
// // //               </h2>

// // //               <p>CSR Projects</p>
// // //             </motion.div>

// // //             <motion.div
// // //               className="impactCard"
// // //               whileHover={{ y: -8 }}
// // //             >
// // //               <h2>
// // //                 <Counter to={100} />+
// // //               </h2>

// // //               <p>Volunteers</p>
// // //             </motion.div>
// // //           </div>

// // //           {/* =====================================
// // //               SERVICES
// // //           ===================================== */}

// // //           <div className="servicesRow">
// // //             <div className="serviceChip">
// // //               <GraduationCap size={18} />
// // //               Skill Development
// // //             </div>

// // //             <div className="serviceChip">
// // //               <BriefcaseBusiness size={18} />
// // //               Livelihood Programs
// // //             </div>

// // //             <div className="serviceChip">
// // //               <Users size={18} />
// // //               Youth Employability
// // //             </div>

// // //             <div className="serviceChip">
// // //               <BadgeCheck size={18} />
// // //               CSR Implementation
// // //             </div>
// // //           </div>
// // //         </motion.div>

// // //         {/* =====================================
// // //             RIGHT VISUAL
// // //         ===================================== */}

// // //         <motion.div
// // //           className="heroRight"
// // //           initial={{ opacity: 0, scale: 0.92 }}
// // //           animate={{ opacity: 1, scale: 1 }}
// // //           transition={{ duration: 1 }}
// // //         >
// // //           {/* FLOATING CARDS */}

// // //           <motion.div
// // //             className="floatingCard topCard"
// // //             animate={{
// // //               y: [0, -12, 0],
// // //             }}
// // //             transition={{
// // //               duration: 4,
// // //               repeat: Infinity,
// // //             }}
// // //           >
// // //             <Sparkles size={16} />
// // //             100% Impact Focused CSR Programs
// // //           </motion.div>

// // //           <motion.div
// // //             className="floatingCard bottomCard"
// // //             animate={{
// // //               y: [0, 12, 0],
// // //             }}
// // //             transition={{
// // //               duration: 5,
// // //               repeat: Infinity,
// // //             }}
// // //           >
// // //             <div>
// // //               <h3>Pan India Operations</h3>
// // //               <p>Implementation • Training • Placement</p>
// // //             </div>

// // //             <ArrowRight size={18} />
// // //           </motion.div>

// // //           {/* IMAGE AREA */}

// // //           <div className="imageWrapper">
// // //             <div className="imageGlow"></div>
// // //             <div className="rotatingRing"></div>

// // //             <div className="glassOverlay"></div>

// // //             <AnimatePresence mode="wait">
// // //               <motion.img
// // //                 key={slides[activeSlide].image}
// // //                 src={slides[activeSlide].image}
// // //                 alt="CSR Hero"
// // //                 className="heroImage"
// // //                 initial={{
// // //                   opacity: 0,
// // //                   scale: 1.1,
// // //                 }}
// // //                 animate={{
// // //                   opacity: 1,
// // //                   scale: 1,
// // //                 }}
// // //                 exit={{
// // //                   opacity: 0,
// // //                 }}
// // //                 transition={{
// // //                   duration: 1,
// // //                 }}
// // //               />
// // //             </AnimatePresence>
// // //           </div>
// // //         </motion.div>
// // //       </div>

// // //       {/* =====================================
// // //           SLIDER DOTS
// // //       ===================================== */}

// // //       <div className="heroDots">
// // //         {slides.map((_, index) => (
// // //           <button
// // //             key={index}
// // //             className={
// // //               activeSlide === index
// // //                 ? "heroDot active"
// // //                 : "heroDot"
// // //             }
// // //             onClick={() => setActiveSlide(index)}
// // //           ></button>
// // //         ))}
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default HeroSection;









// // import React, { useEffect, useState } from "react";

// // import {
// //   ArrowRight,
// //   HandHeart,
// //   Sparkles,
// //   Play,
// // } from "lucide-react";

// // import { Link } from "react-router-dom";

// // import {
// //   motion,
// //   AnimatePresence,
// //   useMotionValue,
// //   useTransform,
// //   animate,
// // } from "framer-motion";

// // import "./CSRHeroSection.css";

// // import heroImg1 from "../../assets/group1.png";
// // import heroImg2 from "../../assets/group2.png";
// // import heroImg3 from "../../assets/group3.png";

// // /* =====================================================
// //    SLIDES
// // ===================================================== */

// // const csrSlides = [
// //   {
// //     miniTitle:
// //       "CSR Skill Development & Livelihood Implementation Partner",

// //     heading:
// //       "Creating Sustainable Community Transformation",

// //     description:
// //       "Industry-aligned training programs empowering underserved youth with digital skills, employability, and livelihood opportunities.",

// //     image: heroImg1,
// //   },

// //   {
// //     miniTitle:
// //       "Empowering Youth Through Future-Ready Skills",

// //     heading:
// //       "Building Employable Futures For India’s Next Generation",

// //     description:
// //       "End-to-end CSR implementation focused on measurable impact through education, skilling, and placement support.",

// //     image: heroImg2,
// //   },

// //   {
// //     miniTitle:
// //       "CSR Implementation Partner Across India",

// //     heading:
// //       "Driving Scalable Social Impact Through Education",

// //     description:
// //       "Helping organizations deliver impactful CSR initiatives with transparency, execution excellence, and measurable transformation.",

// //     image: heroImg3,
// //   },
// // ];

// // /* =====================================================
// //    COUNTER
// // ===================================================== */

// // const CSRCount = ({ to }) => {
// //   const count = useMotionValue(0);

// //   const rounded = useTransform(count, (latest) =>
// //     Math.round(latest)
// //   );

// //   const [display, setDisplay] = useState(0);

// //   useEffect(() => {
// //     const controls = animate(count, to, {
// //       duration: 3,
// //       ease: "easeOut",
// //     });

// //     rounded.on("change", (latest) => {
// //       setDisplay(latest);
// //     });

// //     return () => controls.stop();
// //   }, [to]);

// //   return <span>{display}</span>;
// // };

// // const HeroSection = () => {
// //   const [activeSlide, setActiveSlide] = useState(0);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setActiveSlide((prev) =>
// //         prev === csrSlides.length - 1 ? 0 : prev + 1
// //       );
// //     }, 6000);

// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <section className="csrHero">
// //       {/* BACKGROUND */}

// //       <div className="csrHero_orb csrHero_orb1"></div>
// //       <div className="csrHero_orb csrHero_orb2"></div>

// //       <div className="csrHero_grid"></div>

// //       {/* CONTAINER */}

// //       <div className="csrHero_container">
// //         {/* LEFT */}

// //         <div className="csrHero_left">
// //           {/* BADGE */}

// //           <motion.div
// //             className="csrHero_badge"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //           >
// //             <Sparkles size={14} />
// //             Trusted CSR Implementation Partner
// //           </motion.div>

// //           {/* MINI TITLE */}

// //           <AnimatePresence mode="wait">
// //             <motion.h4
// //               key={csrSlides[activeSlide].miniTitle}
// //               className="csrHero_miniTitle"
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               exit={{ opacity: 0 }}
// //             >
// //               {csrSlides[activeSlide].miniTitle}
// //             </motion.h4>
// //           </AnimatePresence>

// //           {/* HEADING */}

// //           <AnimatePresence mode="wait">
// //             <motion.h1
// //               key={csrSlides[activeSlide].heading}
// //               className="csrHero_heading"
// //               initial={{ opacity: 0, y: 40 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               exit={{ opacity: 0 }}
// //             >
// //               {csrSlides[activeSlide].heading}
// //             </motion.h1>
// //           </AnimatePresence>

// //           {/* DESCRIPTION */}

// //           <AnimatePresence mode="wait">
// //             <motion.p
// //               key={csrSlides[activeSlide].description}
// //               className="csrHero_description"
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               exit={{ opacity: 0 }}
// //             >
// //               {csrSlides[activeSlide].description}
// //             </motion.p>
// //           </AnimatePresence>

// //           {/* BUTTONS */}

// //           <div className="csrHero_buttons">
// //             <Link to="/contact">
// //               <button className="csrHero_primaryBtn">
// //                 <span>Partner With Us</span>

// //                 <div className="csrHero_btnIcon">
// //                   <HandHeart size={15} />
// //                 </div>
// //               </button>
// //             </Link>

// //             <button className="csrHero_secondaryBtn">
// //               <Play size={15} />

// //               <span>Watch Impact Story</span>
// //             </button>
// //           </div>

// //           {/* IMPACT */}

// //           <div className="csrHero_impactWrapper">
// //             <div className="csrHero_impactHeader">
// //               <span>CSR Impact At Scale</span>

// //               <h3>
// //                 Delivering measurable impact through
// //                 skill development and livelihood
// //                 programs
// //               </h3>
// //             </div>

// //             <div className="csrHero_impactGrid">
// //               {/* CARD */}

// //               <motion.div
// //                 className="csrHero_impactCard csrHero_primaryCard"
// //                 whileHover={{ y: -5 }}
// //               >
// //                 <div className="csrHero_cardGlow"></div>

// //                 <div className="csrHero_cardTop">
// //                   <span>🎓</span>

// //                   <small>Skill Development</small>
// //                 </div>

// //                 <h2>
// //                   <CSRCount to={12000} />+
// //                 </h2>

// //                 <p>Youth Trained</p>
// //               </motion.div>

// //               {/* CARD */}

// //               <motion.div
// //                 className="csrHero_impactCard"
// //                 whileHover={{ y: -5 }}
// //               >
// //                 <div className="csrHero_cardTop">
// //                   <span>💼</span>

// //                   <small>Employability</small>
// //                 </div>

// //                 <h2>
// //                   <CSRCount to={320} />+
// //                 </h2>

// //                 <p>Placements</p>
// //               </motion.div>

// //               {/* CARD */}

// //               <motion.div
// //                 className="csrHero_impactCard"
// //                 whileHover={{ y: -5 }}
// //               >
// //                 <div className="csrHero_cardTop">
// //                   <span>🌍</span>

// //                   <small>CSR Programs</small>
// //                 </div>

// //                 <h2>
// //                   <CSRCount to={45} />+
// //                 </h2>

// //                 <p>Projects Executed</p>
// //               </motion.div>

// //               {/* CARD */}

// //               <motion.div
// //                 className="csrHero_impactCard"
// //                 whileHover={{ y: -5 }}
// //               >
// //                 <div className="csrHero_cardTop">
// //                   <span>🤝</span>

// //                   <small>Communities</small>
// //                 </div>

// //                 <h2>
// //                   <CSRCount to={100} />+
// //                 </h2>

// //                 <p>Volunteers</p>
// //               </motion.div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* RIGHT */}

// //         <div className="csrHero_right">
// //           {/* FLOATING */}

// //           <motion.div
// //             className="csrHero_floatCard csrHero_floatTop"
// //             animate={{
// //               y: [0, -10, 0],
// //             }}
// //             transition={{
// //               duration: 4,
// //               repeat: Infinity,
// //             }}
// //           >
// //             ✨ 100% Impact Focused CSR Programs
// //           </motion.div>

// //           <motion.div
// //             className="csrHero_floatCard csrHero_floatBottom"
// //             animate={{
// //               y: [0, 10, 0],
// //             }}
// //             transition={{
// //               duration: 5,
// //               repeat: Infinity,
// //             }}
// //           >
// //             <div>
// //               <h4>Pan India Operations</h4>

// //               <p>
// //                 Training • Placement • Implementation
// //               </p>
// //             </div>

// //             <ArrowRight size={18} />
// //           </motion.div>

// //           {/* IMAGE */}

// //           <div className="csrHero_imageWrapper">
// //             <div className="csrHero_imageOverlay"></div>

// //             <AnimatePresence mode="wait">
// //               <motion.img
// //                 key={csrSlides[activeSlide].image}
// //                 src={csrSlides[activeSlide].image}
// //                 alt="CSR Hero"
// //                 className="csrHero_image"
// //                 initial={{
// //                   opacity: 0,
// //                   scale: 1.08,
// //                 }}
// //                 animate={{
// //                   opacity: 1,
// //                   scale: 1,
// //                 }}
// //                 exit={{
// //                   opacity: 0,
// //                 }}
// //                 transition={{
// //                   duration: 1,
// //                 }}
// //               />
// //             </AnimatePresence>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default HeroSection;



// // import React, { useEffect, useState } from "react";

// // import {
// //   ArrowRight,
// //   Play,
// // } from "lucide-react";

// // import { motion, AnimatePresence } from "framer-motion";

// // import { Link } from "react-router-dom";

// // import "./HeroSection.css";

// // import hero1 from "../../assets/group1.png";
// // import hero2 from "../../assets/group2.png";
// // import hero3 from "../../assets/group3.png";

// // const slides = [
// //   {
// //     eyebrow:
// //       "CSR Skill Development & Livelihood Implementation Partner",

// //     title:
// //       "Building Future-Ready Communities Through Scalable CSR Programs",

// //     description:
// //       "Empowering underserved youth through digital education, livelihood initiatives, employability programs, and measurable social impact.",

// //     image: hero1,
// //   },

// //   {
// //     eyebrow:
// //       "Transforming Youth Through Employability",

// //     title:
// //       "Driving Measurable Social Impact Across India",

// //     description:
// //       "Industry-aligned skill development and placement-focused programs helping communities unlock sustainable economic growth.",

// //     image: hero2,
// //   },

// //   {
// //     eyebrow:
// //       "End-to-End CSR Implementation",

// //     title:
// //       "Creating Sustainable Impact Through Education & Livelihood",

// //     description:
// //       "Partnering with corporates and institutions to execute high-impact CSR initiatives with transparency and measurable outcomes.",

// //     image: hero3,
// //   },
// // ];

// // const HeroSection = () => {
// //   const [activeSlide, setActiveSlide] = useState(0);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setActiveSlide((prev) =>
// //         prev === slides.length - 1 ? 0 : prev + 1
// //       );
// //     }, 6000);

// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <section className="enterpriseHero">
// //       {/* BACKGROUND */}

// //       <div className="enterpriseHero_gradient"></div>

// //       <div className="enterpriseHero_grid"></div>

// //       <div className="enterpriseHero_noise"></div>

// //       {/* CONTAINER */}

// //       <div className="enterpriseHero_container">
// //         {/* LEFT */}

// //         <div className="enterpriseHero_left">
// //           {/* EYEBROW */}

// //           <motion.div
// //             className="enterpriseHero_eyebrow"
// //             initial={{ opacity: 0, y: 15 }}
// //             animate={{ opacity: 1, y: 0 }}
// //           >
// //             <div className="enterpriseHero_dot"></div>

// //             <span>
// //               {slides[activeSlide].eyebrow}
// //             </span>
// //           </motion.div>

// //           {/* TITLE */}

// //           <AnimatePresence mode="wait">
// //             <motion.h1
// //               key={slides[activeSlide].title}
// //               className="enterpriseHero_title"
// //               initial={{
// //                 opacity: 0,
// //                 y: 40,
// //               }}
// //               animate={{
// //                 opacity: 1,
// //                 y: 0,
// //               }}
// //               exit={{
// //                 opacity: 0,
// //                 y: -20,
// //               }}
// //               transition={{
// //                 duration: 0.8,
// //               }}
// //             >
// //               {slides[activeSlide].title}
// //             </motion.h1>
// //           </AnimatePresence>

// //           {/* DESCRIPTION */}

// //           <AnimatePresence mode="wait">
// //             <motion.p
// //               key={slides[activeSlide].description}
// //               className="enterpriseHero_description"
// //               initial={{
// //                 opacity: 0,
// //               }}
// //               animate={{
// //                 opacity: 1,
// //               }}
// //               exit={{
// //                 opacity: 0,
// //               }}
// //             >
// //               {slides[activeSlide].description}
// //             </motion.p>
// //           </AnimatePresence>

// //           {/* CTA */}

// //           <div className="enterpriseHero_actions">
// //             <Link to="/contact">
// //               <button className="enterpriseHero_primaryBtn">
// //                 Partner With Us

// //                 <ArrowRight size={18} />
// //               </button>
// //             </Link>

// //             <button className="enterpriseHero_secondaryBtn">
// //               <Play size={16} />

// //               Watch Impact Story
// //             </button>
// //           </div>

// //           {/* METRICS */}

// //           <div className="enterpriseHero_metrics">
// //             <div className="enterpriseHero_metric">
// //               <h2>12K+</h2>

// //               <p>Youth Trained</p>
// //             </div>

// //             <div className="enterpriseHero_metric">
// //               <h2>320+</h2>

// //               <p>Placements</p>
// //             </div>

// //             <div className="enterpriseHero_metric">
// //               <h2>45+</h2>

// //               <p>CSR Programs</p>
// //             </div>

// //             <div className="enterpriseHero_metric">
// //               <h2>100+</h2>

// //               <p>Communities</p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* RIGHT */}

// //         <div className="enterpriseHero_right">
// //           {/* FLOATING PANEL */}

// //           <motion.div
// //             className="enterpriseHero_panel enterpriseHero_panelTop"
// //             animate={{
// //               y: [0, -10, 0],
// //             }}
// //             transition={{
// //               duration: 5,
// //               repeat: Infinity,
// //             }}
// //           >
// //             <span>Impact Focused CSR Programs</span>
// //           </motion.div>

// //           <motion.div
// //             className="enterpriseHero_panel enterpriseHero_panelBottom"
// //             animate={{
// //               y: [0, 10, 0],
// //             }}
// //             transition={{
// //               duration: 6,
// //               repeat: Infinity,
// //             }}
// //           >
// //             <div>
// //               <h4>Pan India Operations</h4>

// //               <p>
// //                 Implementation • Training • Placement
// //               </p>
// //             </div>

// //             <ArrowRight size={16} />
// //           </motion.div>

// //           {/* IMAGE */}

// //           <div className="enterpriseHero_visual">
// //             <div className="enterpriseHero_visualGlow"></div>

// //             <AnimatePresence mode="wait">
// //               <motion.img
// //                 key={slides[activeSlide].image}
// //                 src={slides[activeSlide].image}
// //                 alt="CSR"
// //                 className="enterpriseHero_image"
// //                 initial={{
// //                   opacity: 0,
// //                   scale: 1.08,
// //                 }}
// //                 animate={{
// //                   opacity: 1,
// //                   scale: 1,
// //                 }}
// //                 exit={{
// //                   opacity: 0,
// //                 }}
// //                 transition={{
// //                   duration: 1,
// //                 }}
// //               />
// //             </AnimatePresence>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default HeroSection;






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

// import hero1 from "../../assets/group1.png";
// import hero2 from "../../assets/group2.png";
// import hero3 from "../../assets/group3.png";

// /* =========================================
//    SLIDES
// ========================================= */

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
//     <section className="csrPremiumHero">
//       {/* BACKGROUND */}

//       <div className="csrGradientOrb csrOrb1"></div>
//       <div className="csrGradientOrb csrOrb2"></div>

//       <div className="csrGridOverlay"></div>

//       {/* CONTAINER */}

//       <div className="csrPremiumContainer">
//         {/* LEFT */}

//         <motion.div
//           className="csrPremiumLeft"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           {/* EYEBROW */}

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={slides[active].eyebrow}
//               className="csrEyebrow"
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

//           {/* BUTTONS */}

//           <motion.div
//             className="csrHeroActions"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//           >
//             <Link to="/contact">
//               <button className="csrPrimaryBtn">
//                 Partner With Us

//                 <span>
//                   <ArrowRight size={16} />
//                 </span>
//               </button>
//             </Link>

//             <button className="csrSecondaryBtn">
//               <Play size={15} />

//               Watch Impact Story
//             </button>
//           </motion.div>

//           {/* METRICS */}

//           <motion.div
//             className="csrMetricsGrid"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5 }}
//           >
//             <div className="csrMetricCard">
//               <h2>12K+</h2>

//               <p>Youth Trained</p>
//             </div>

//             <div className="csrMetricCard">
//               <h2>320+</h2>

//               <p>Placements</p>
//             </div>

//             <div className="csrMetricCard">
//               <h2>45+</h2>

//               <p>CSR Programs</p>
//             </div>

//             <div className="csrMetricCard">
//               <h2>100+</h2>

//               <p>Communities</p>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* RIGHT */}

//         <motion.div
//           className="csrPremiumRight"
//           initial={{ opacity: 0, scale: 0.92 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//         >
//           {/* FLOATING PANELS */}

//           <motion.div
//             className="csrFloatingPanel csrTopPanel"
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

//           <motion.div
//             className="csrFloatingPanel csrBottomPanel"
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
//             <div className="csrImageGradient"></div>

//             <AnimatePresence mode="wait">
//               <motion.img
//                 key={slides[active].image}
//                 src={slides[active].image}
//                 alt="CSR"
//                 className="csrHeroImage"
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

import {
  ArrowRight,
  Play,
} from "lucide-react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import { Link } from "react-router-dom";

import "./HeroSection.css";

import hero1 from "../../assets/hero12.png"; 

import hero2 from "../../assets/hero13.png";
import hero3 from "../../assets/hero14.png";

/* =====================================================
   SLIDES
===================================================== */

const slides = [
  {
    eyebrow:
      "CSR Skill Development & Livelihood Partner",

    title:
      "Transforming Communities Through Employability & Education",

    description:
      "We help organizations create measurable social impact through skill development, livelihood initiatives, employability programs, and scalable CSR implementation.",

    image: hero1,
  },

  {
    eyebrow:
      "Future-Ready Workforce Development",

    title:
      "Creating Sustainable Social Impact Across India",

    description:
      "Industry-aligned training programs helping underserved youth access opportunities, digital education, and employment pathways.",

    image: hero2,
  },

  {
    eyebrow:
      "End-to-End CSR Implementation",

    title:
      "Delivering Measurable Community Transformation",

    description:
      "Execution-focused CSR initiatives with transparent reporting, training delivery, mobilization, and livelihood enablement.",

    image: hero3,
  },
];

/* =====================================================
   COUNTER COMPONENT
===================================================== */

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

/* =====================================================
   COMPONENT
===================================================== */

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
      {/* BACKGROUND */}

      <div className="csrHeroOrb csrHeroOrb1"></div>
      <div className="csrHeroOrb csrHeroOrb2"></div>

      <div className="csrHeroGrid"></div>

      <div className="csrHeroNoise"></div>

      <div className="csrHeroSpotlight"></div>

      {/* CONTAINER */}

      <div className="csrHeroContainer">
        {/* LEFT SIDE */}

        <motion.div
          className="csrHeroLeft"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* EYEBROW */}

          <AnimatePresence mode="wait">
            <motion.div
              key={slides[active].eyebrow}
              className="csrHeroEyebrow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              {slides[active].eyebrow}
            </motion.div>
          </AnimatePresence>

          {/* TITLE */}

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

          {/* DESCRIPTION */}

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

          {/* ACTION BUTTONS */}

          <motion.div
            className="csrHeroActions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/contact"  style={{ textDecoration: "none" }}>
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
          </motion.div>

          {/* STATS */}

          <motion.div
            className="csrHeroStatsGrid"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {/* CARD */}

            <motion.div
              className="csrHeroStatCard"
              whileHover={{ y: -8 }}
            >
              <div className="csrHeroStatGlow"></div>

              <h2>
                <AnimatedCounter end={12000} />+
              </h2>

              <p>Youth Trained</p>
            </motion.div>

            {/* CARD */}

            <motion.div
              className="csrHeroStatCard"
              whileHover={{ y: -8 }}
            >
              <div className="csrHeroStatGlow"></div>

              <h2>
                <AnimatedCounter end={320} />+
              </h2>

              <p>Placements</p>
            </motion.div>

            {/* CARD */}

            <motion.div
              className="csrHeroStatCard"
              whileHover={{ y: -8 }}
            >
              <div className="csrHeroStatGlow"></div>

              <h2>
                <AnimatedCounter end={45} />+
              </h2>

              <p>CSR Programs</p>
            </motion.div>

            {/* CARD */}

            {/* <motion.div
              className="csrHeroStatCard"
              whileHover={{ y: -8 }}
            >
              <div className="csrHeroStatGlow"></div>

              <h2>
                <AnimatedCounter end={100} />+
              </h2>

              <p>Communities</p>
            </motion.div> */}
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          className="csrHeroRight"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* FLOATING TOP PANEL */}

          <motion.div
            className="csrHeroFloatingPanel csrHeroTopPanel"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            Trusted CSR Execution Partner
          </motion.div>

          {/* FLOATING BOTTOM PANEL */}

          <motion.div
            className="csrHeroFloatingPanel csrHeroBottomPanel"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
          >
            Pan India CSR Operations
          </motion.div>

          {/* IMAGE */}

          <div className="csrHeroImageWrapper">
            <div className="csrHeroImageGradient"></div>

            <AnimatePresence mode="wait">
              <motion.img
                key={slides[active].image}
                src={slides[active].image}
                alt="CSR Hero"
                className="csrHeroImage"
                whileHover={{
                  scale: 1.04,
                  rotate: -1,
                }}
                initial={{
                  opacity: 0,
                  scale: 1.08,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 1,
                }}
              />
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
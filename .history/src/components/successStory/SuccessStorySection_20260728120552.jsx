// // SuccessStorySection.jsx

// import React, {
//   useEffect,
//   useRef,
//   useState,
// } from "react";

// import {
//   ArrowLeft,
//   ArrowRight,
//   Quote,
//   Sparkles,
// } from "lucide-react";

// import "./SuccessStorySection.css";

// /* =========================================================
//    STORIES DATA
// ========================================================= */

// const stories = [

//   {
//     id: 1,

//     name: "Priya Sharma",

//     role: "Backend Developer",

//     image:
//       "https://plus.unsplash.com/premium_photo-1723568666044-1b066e26b1fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVzdGltb25pYWwlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D",

//     quote:
//       "Globetech gave me not just skills but the confidence to dream big.",

//     before:
//       "Fresh graduate struggling with employment and lacking technical exposure.",

//     journey:
//       "Joined a 6-month Full Stack Development program with mentorship and real-world projects.",

//     today:
//       "Placed as a Backend Developer at TCS with a ₹4.5 LPA package.",
//   },

//   {
//     id: 2,

//     name: "Karthick",

//     role: "Product Designer",

//     image:
//       "https://images.unsplash.com/photo-1649738463288-fc499fe96608?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVzdGltb25pYWwlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D",

//     quote:
//       "The mentorship and practical exposure transformed my confidence and career.",

//     before:
//       "No portfolio guidance and limited confidence in interviews.",

//     journey:
//       "Completed UI/UX mentorship with portfolio and live client projects.",

//     today:
//       "Now working as a Product Designer in a fast-growing startup.",
//   },

//   {
//     id: 3,

//     name: "Sneha Verma",

//     role: "Frontend Developer",

//     image:
//       "https://images.unsplash.com/photo-1658724684973-8791f6bc1206?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHRlc3RpbW9uaWFsJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D",

//     quote:
//       "I transformed from a beginner into a confident developer through practical learning.",

//     before:
//       "Rural background with financial challenges and no technical exposure.",

//     journey:
//       "Received mentorship, mock interviews, and real-world project experience.",

//     today:
//       "Placed as a Software Developer and now supporting her family.",
//   },

// ];

// const SuccessStorySection = () => {

//   const [current, setCurrent] =
//     useState(0);

//   const [showContent, setShowContent] =
//     useState(false);

//   const sectionRef = useRef(null);

//   /* =========================================================
//      NEXT
//   ========================================================= */

//   const nextSlide = () => {

//     setCurrent(
//       (prev) =>
//         (prev + 1) % stories.length
//     );

//   };

//   /* =========================================================
//      PREV
//   ========================================================= */

//   const prevSlide = () => {

//     setCurrent(
//       (prev) =>

//         prev === 0
//           ? stories.length - 1
//           : prev - 1

//     );

//   };

//   /* =========================================================
//      AUTO SLIDE
//   ========================================================= */

//   useEffect(() => {

//     const auto =
//       setInterval(() => {

//         nextSlide();

//       }, 7000);

//     return () =>
//       clearInterval(auto);

//   }, []);

//   /* =========================================================
//      SCROLL ANIMATION
//   ========================================================= */

//   useEffect(() => {

//     const observer =
//       new IntersectionObserver(

//         ([entry]) => {

//           if (entry.isIntersecting) {

//             setShowContent(true);

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
//       className="successSection"
//       ref={sectionRef}
//     >

//       {/* GLOW */}

//       <div className="successGlowOne"></div>

//       <div className="successGlowTwo"></div>

//       {/* =========================================================
//           CONTAINER
//       ========================================================= */}

//       <div className="successContainer">

//         {/* =========================================================
//             HEADING
//         ========================================================= */}

//         <div
//           className={
//             showContent
//               ? "successHeading showSuccessHeading"
//               : "successHeading"
//           }
//         >

        

//           <h2>

//             Transforming
          

//             Lives Through
           

//             Opportunities.

//           </h2>

//           <p>

//             Real journeys of students and
//             communities empowered through
//             skills, mentorship, and career
//             opportunities.

//           </p>

//         </div>

//         {/* =========================================================
//             SLIDER
//         ========================================================= */}

//         <div className="successSliderWrapper">

//           <div
//             className="successSlider"
//             style={{
//               transform:
//                 `translateX(-${current * 100}%)`,
//             }}
//           >

//             {stories.map((story) => (

//               <div
//                 className="successSlide"
//                 key={story.id}
//               >

//                 {/* =========================================================
//                     LEFT
//                 ========================================================= */}

//                 <div
//                   className={
//                     showContent
//                       ? "successLeft showSuccessLeft"
//                       : "successLeft"
//                   }
//                 >

//                   {/* IMAGE */}

//                   <div className="successImageCard">

//                     <img
//                       src={story.image}
//                       alt={story.name}
//                     />

//                     <div className="successOverlay"></div>

//                     {/* QUOTE */}

//                     <div className="successQuoteCard">

//                       <Quote size={28} />

//                       <p>

//                         {story.quote}

//                       </p>

//                     </div>

//                   </div>

//                   {/* PROFILE */}

//                   <div className="successProfile">

//                     <div>

//                       <h3>

//                         {story.name}

//                       </h3>

//                       <span>

//                         {story.role}

//                       </span>

//                     </div>

//                     {/* NAV */}

//                     <div className="successNav">

//                       <button
//                         onClick={prevSlide}
//                       >

//                         <ArrowLeft
//                           size={18}
//                         />

//                       </button>

//                       <button
//                         onClick={nextSlide}
//                       >

//                         <ArrowRight
//                           size={18}
//                         />

//                       </button>

//                     </div>

//                   </div>

//                 </div>

//                 {/* =========================================================
//                     RIGHT
//                 ========================================================= */}

//                 <div
//                   className={
//                     showContent
//                       ? "successRight showSuccessRight"
//                       : "successRight"
//                   }
//                 >

//                   {/* CARD */}

//                   <div className="storyCard beforeCard">

//                     <span>
//                       BEFORE
//                     </span>

//                     <h3>

//                       The Challenge

//                     </h3>

//                     <p>

//                       {story.before}

//                     </p>

//                   </div>

//                   {/* CARD */}

//                   <div className="storyCard journeyCard">

//                     <span>
//                       JOURNEY
//                     </span>

//                     <h3>

//                       The Transformation

//                     </h3>

//                     <p>

//                       {story.journey}

//                     </p>

//                   </div>

//                   {/* CARD */}

//                   <div className="storyCard todayCard">

//                     <span>
//                       TODAY
//                     </span>

//                     <h3>

//                       The Outcome

//                     </h3>

//                     <p>

//                       {story.today}

//                     </p>

//                   </div>

//                 </div>

//               </div>

//             ))}

//           </div>

//         </div>

//       </div>

//     </section>

//   );
// };

// export default SuccessStorySection;










// // =========================================================
// // CINEMATIC SUCCESS STORIES
// // Completely Redesigned
// // Apple / Stripe / Tesla Style
// // =========================================================

// import React, {
//   useEffect,
//   useRef,
//   useState,
// } from "react";

// import {
//   ArrowLeft,
//   ArrowRight,
// } from "lucide-react";

// import "./SuccessStorySection.css";

// /* =========================================================
//    DATA
// ========================================================= */

// const stories = [

//   {
//     id: 1,

//     name: "Priya Sharma",

//     role: "Backend Developer",

//     image:
//       "https://plus.unsplash.com/premium_photo-1723568666044-1b066e26b1fb?w=1200&auto=format&fit=crop&q=80",

//     quote:
//       "Globetech gave me confidence and transformed my future.",

//     outcome:
//       "Placed at TCS with ₹4.5 LPA package.",
//   },

//   {
//     id: 2,

//     name: "Karthick",

//     role: "Product Designer",

//     image:
//       "https://images.unsplash.com/photo-1649738463288-fc499fe96608?w=1200&auto=format&fit=crop&q=80",

//     quote:
//       "The mentorship and exposure completely changed my career journey.",

//     outcome:
//       "Now working in a fast-growing startup.",
//   },

//   {
//     id: 3,

//     name: "Sneha Verma",

//     role: "Frontend Developer",

//     image:
//       "https://images.unsplash.com/photo-1658724684973-8791f6bc1206?w=1200&auto=format&fit=crop&q=80",

//     quote:
//       "I transformed from a beginner into a confident software developer.",

//     outcome:
//       "Now financially supporting her family.",
//   },

// ];

// const SuccessStorySection = () => {

//   const [current,
//     setCurrent] =
//     useState(0);

//   const [visible,
//     setVisible] =
//     useState(false);

//   const sectionRef =
//     useRef(null);

//   /* =========================================================
//      AUTO SLIDE
//   ========================================================= */

//   useEffect(() => {

//     const interval =
//       setInterval(() => {

//         setCurrent((prev) =>

//           prev === stories.length - 1
//             ? 0
//             : prev + 1

//         );

//       }, 6000);

//     return () =>
//       clearInterval(interval);

//   }, []);

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

//   /* =========================================================
//      NAV
//   ========================================================= */

//   const nextSlide = () => {

//     setCurrent((prev) =>

//       prev === stories.length - 1
//         ? 0
//         : prev + 1

//     );

//   };

//   const prevSlide = () => {

//     setCurrent((prev) =>

//       prev === 0
//         ? stories.length - 1
//         : prev - 1

//     );

//   };

//   return (

//     <section
//       className="gtStorySection"
//       ref={sectionRef}
//     >

//       {/* =========================================================
//           BACKGROUND
//       ========================================================= */}

//       <div className="gtStoryGlowOne"></div>

//       <div className="gtStoryGlowTwo"></div>

//       <div className="gtStoryGrid"></div>

//       {/* =========================================================
//           TOP
//       ========================================================= */}

//       <div
//         className={
//           visible
//             ? "gtStoryTop gtStoryTopShow"
//             : "gtStoryTop"
//         }
//       >

//         <span>

//           SUCCESS STORIES

//         </span>

//         <h2>

//           Transforming
//           Lives Through
//           Opportunities.

//         </h2>

//       </div>

//       {/* =========================================================
//           SLIDER
//       ========================================================= */}

//       <div className="gtStorySliderWrap">

//         {stories.map(
//           (story, index) => (

//             <div
//               key={story.id}

//               className={
//                 current === index
//                   ? "gtStorySlide activeSlide"
//                   : "gtStorySlide"
//               }
//             >

//               {/* IMAGE */}

//               <img
//                 src={story.image}
//                 alt={story.name}
//                 className="gtStoryImage"
//               />

//               {/* OVERLAY */}

//               <div className="gtStoryOverlay"></div>

//               <div className="gtStoryGradient"></div>

//               {/* FLOATING QUOTE */}

//               <div className="gtFloatingQuote">

//                 “{story.quote}”

//               </div>

//               {/* CONTENT */}

//               <div className="gtStoryContent">

//                 <span className="gtStoryRole">

//                   {story.role}

//                 </span>

//                 <h3>

//                   {story.name}

//                 </h3>

//                 <p>

//                   {story.outcome}

//                 </p>

//               </div>

//             </div>

//           )
//         )}

//       </div>

//       {/* =========================================================
//           CONTROLS
//       ========================================================= */}

//       <div className="gtStoryControls">

//         <button onClick={prevSlide}>

//           <ArrowLeft size={18} />

//         </button>

//         <div className="gtStoryIndicators">

//           {stories.map((_, index) => (

//             <div
//               key={index}

//               className={
//                 current === index
//                   ? "gtStoryDot activeDot"
//                   : "gtStoryDot"
//               }
//             ></div>

//           ))}

//         </div>

//         <button onClick={nextSlide}>

//           <ArrowRight size={18} />

//         </button>

//       </div>

//     </section>

//   );

// };

// export default SuccessStorySection;









// =========================================================
// CINEMATIC TRANSFORMATION STORIES
// Different Pattern Design
// VIDEO BASED STORY EXPERIENCE
// =========================================================

// import React, {
//   useEffect,
//   useRef,
//   useState,
// } from "react";

// import {
//   ArrowLeft,
//   ArrowRight,
// } from "lucide-react";

// import "./SuccessStorySection.css";

// /* =========================================================
//    STORIES
// ========================================================= */

// const stories = [

//   {
//     id: 1,

//     name: "Priya Sharma",

//     role: "Backend Developer",

//     video:
//       "https://videos.pexels.com/video-files/3195394/3195394-hd_1920_1080_25fps.mp4",

//     quote:
//       "Globetech transformed my confidence and career journey.",

//     before:
//       "Fresh graduate struggling with employment and lacking technical exposure.",

//     journey:
//       "Joined a mentorship-driven development program with practical projects and industry exposure.",

//     today:
//       "Placed as a Backend Developer at TCS with a ₹4.5 LPA package.",
//   },

//   {
//     id: 2,

//     name: "Karthick",

//     role: "Product Designer",

//     video:
//       "https://videos.pexels.com/video-files/3209298/3209298-hd_1920_1080_25fps.mp4",

//     quote:
//       "The mentorship ecosystem completely changed my perspective.",

//     before:
//       "Had no portfolio direction and struggled during interviews.",

//     journey:
//       "Worked on real-world projects with design mentorship and practical workshops.",

//     today:
//       "Now working as a Product Designer in a fast-growing startup.",
//   },

//   {
//     id: 3,

//     name: "Sneha Verma",

//     role: "Frontend Developer",

//     video:
//       "https://videos.pexels.com/video-files/6950783/6950783-hd_1920_1080_25fps.mp4",

//     quote:
//       "I transformed from a beginner into a confident software developer.",

//     before:
//       "Came from a rural background with financial and educational challenges.",

//     journey:
//       "Received mentorship, mock interviews and real project experiences.",

//     today:
//       "Now financially supporting her family as a Software Developer.",
//   },

// ];

// const SuccessStorySection = () => {

//   const [current,
//     setCurrent] =
//     useState(0);

//   const [visible,
//     setVisible] =
//     useState(false);

//   const sectionRef =
//     useRef(null);

//   /* =========================================================
//      AUTO SLIDE
//   ========================================================= */

//   useEffect(() => {

//     const interval =
//       setInterval(() => {

//         setCurrent((prev) =>

//           prev === stories.length - 1
//             ? 0
//             : prev + 1

//         );

//       }, 7000);

//     return () =>
//       clearInterval(interval);

//   }, []);

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
//           threshold: 0.1,
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

//   /* =========================================================
//      NAVIGATION
//   ========================================================= */

//   const nextSlide = () => {

//     setCurrent((prev) =>

//       prev === stories.length - 1
//         ? 0
//         : prev + 1

//     );

//   };

//   const prevSlide = () => {

//     setCurrent((prev) =>

//       prev === 0
//         ? stories.length - 1
//         : prev - 1

//     );

//   };

//   return (

//     <section
//       className="gtVideoStorySection"
//       ref={sectionRef}
//     >

//       {/* =========================================================
//           BACKGROUND
//       ========================================================= */}

//       <div className="gtVideoGlowOne"></div>

//       <div className="gtVideoGlowTwo"></div>

//       <div className="gtVideoGrid"></div>

//       {/* =========================================================
//           TOP
//       ========================================================= */}

//       <div
//         className={
//           visible
//             ? "gtVideoTop gtVideoTopShow"
//             : "gtVideoTop"
//         }
//       >

//         <span>

//           TRANSFORMATION STORIES

//         </span>

//         <h2>

//           Real Journeys.
//           <br />

//           Real Transformations.

//         </h2>

//       </div>

//       {/* =========================================================
//           SLIDER
//       ========================================================= */}

//       <div className="gtVideoSliderWrap">

//         {stories.map(
//           (story, index) => (

//             <div
//               key={story.id}

//               className={
//                 current === index
//                   ? "gtVideoSlide activeVideoSlide"
//                   : "gtVideoSlide"
//               }
//             >

//               {/* =========================================================
//                   VIDEO SIDE
//               ========================================================= */}

//               <div className="gtVideoSide">

//                 <video
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                   className="gtStoryVideo"
//                 >

//                   <source
//                     src={story.video}
//                     type="video/mp4"
//                   />

//                 </video>

//                 <div className="gtVideoOverlay"></div>

//                 <div className="gtVideoGradient"></div>

//                 {/* FLOATING QUOTE */}

//                 <div className="gtVideoQuote">

//                   “{story.quote}”

//                 </div>

//                 {/* PROFILE */}

//                 <div className="gtVideoProfile">

//                   <h3>

//                     {story.name}

//                   </h3>

//                   <span>

//                     {story.role}

//                   </span>

//                 </div>

//               </div>

//               {/* =========================================================
//                   STORY TIMELINE
//               ========================================================= */}

//               <div className="gtTimelineSide">

//                 {/* BEFORE */}

//                 <div className="gtTimelineCard before">

//                   <span>

//                     BEFORE

//                   </span>

//                   <h4>

//                     The Challenge

//                   </h4>

//                   <p>

//                     {story.before}

//                   </p>

//                 </div>

//                 {/* JOURNEY */}

//                 <div className="gtTimelineCard journey">

//                   <span>

//                     JOURNEY

//                   </span>

//                   <h4>

//                     The Transformation

//                   </h4>

//                   <p>

//                     {story.journey}

//                   </p>

//                 </div>

//                 {/* TODAY */}

//                 <div className="gtTimelineCard today">

//                   <span>

//                     TODAY

//                   </span>

//                   <h4>

//                     The Outcome

//                   </h4>

//                   <p>

//                     {story.today}

//                   </p>

//                 </div>

//               </div>

//             </div>

//           )
//         )}

//       </div>

//       {/* =========================================================
//           CONTROLS
//       ========================================================= */}

//       <div className="gtVideoControls">

//         <button onClick={prevSlide}>

//           <ArrowLeft size={18} />

//         </button>

//         <button onClick={nextSlide}>

//           <ArrowRight size={18} />

//         </button>

//       </div>

//     </section>

//   );

// };

// export default SuccessStorySection;



// =========================================================
// SuccessStorySection.jsx
// PREMIUM VIDEO STORY EXPERIENCE
// Different Cinematic Layout
// =========================================================

// =========================================================
// SuccessStorySection.jsx
// PREMIUM VIDEO STORY EXPERIENCE
// =========================================================

import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import "./SuccessStorySection.css";
import img1 from "./assets/sudarshan.jpg";
import img2 from "./assets/vedavati.jpg";
import img3 from "./assets/priyanka.jpg";
import img4 from "./assets/gagan.jpg";

/* =========================================================
   STORIES
========================================================= */

const stories = [
  {
   id: 1,
    name: "Sudarshan N",
    role: "Advisor I – Technical Support",
    image: img1,
    quote:
      "This program gave me the skills, confidence, and opportunity that I was looking for.",
    before:
      "BCA graduate from an Economically Weaker Section (EWS) family; faced repeated interview rejections due to limited technical skills and industry exposure.",
    journey:
      "Enrolled in the HDFC Parivarthan-funded Data Analytics CSR Training Program at Globetech Engineering Solutions, Rajarajeshwarinagar, completing three months of technical, soft skills, and employability training.",
    today:
      "Now Advisor I – Technical Support at Concentrix Technologies India Pvt. Ltd. with a ₹3.70 LPA package.",
  },
  {
    id: 2,
    name: "Vedavati",
    role: "Process Associate",
    image: img2,
    quote:
      "This program helped me gain industry-relevant skills, confidence, and a great career opportunity.",
    before:
      "BCA graduate from an EWS family; father works at a small private company and prioritized her education despite financial constraints.",
    journey:
      "Completed the HDFC Parivarthan-funded Data Analytics CSR Training Program by Globetech Engineering Solutions in partnership with NASSCOM Foundation, gaining technical skills and interview confidence.",
    today:
      "Now placed at Concentrix through a Globetech job drive, with a ₹3.70 LPA package.",
  },
  {
   id: 3,
    name: "Priyanka Suresh",
    role: "Resolution Coordinator, Contact Center",
    image: img3,
    quote:
      "This program helped me overcome my weaknesses, improve my skills, and secure a great career opportunity.",
    before:
      "BE (E&C) graduate; spent nearly a year job-hunting, facing rejections due to limited communication skills and industry knowledge.",
    journey:
      "Referred by her college placement cell, she completed the HDFC Parivarthan-funded Data Analytics CSR Training Program at Globetech Engineering Solutions, improving technical and communication skills.",
    today:
      "Now Resolution Coordinator, Contact Center at Walmart Global Tech India with a ₹4,58,484 package.",
  },
  {
    id: 4,
    name: "Gagan J",
    role: "Senior Resolution Coordinator",
    image: img4,
    quote:
      "The training helped me to gain confidence, improve my skills, and secure a great career opportunity.",
    before:
      "BCA graduate who worked at a small company for a year before unavoidable circumstances left him unemployed for a period.",
    journey:
      "Enrolled in the HDFC Parivarthan-funded Livelihood Training Program – Data Analytics at Globetech Engineering Solutions, Rajarajeshwarinagar, in partnership with NASSCOM Foundation, completing three months of technical and soft skills training.",
    today:
      "Received three job offers and joined Walmart Global Tech India as Senior Resolution Coordinator with a ₹5,20,684 package.",
  },
  
];

const SuccessStorySection = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  /* SCROLL REVEAL */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  /* NAVIGATION */
  const nextSlide = () => {
    setCurrent((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  return (
    <section className="gtVideoStorySection" ref={sectionRef}>
      <div className="gtVideoGlowOne"></div>
      <div className="gtVideoGlowTwo"></div>
      <div className="gtVideoGrid"></div>

      <div className={visible ? "gtVideoTop gtVideoTopShow" : "gtVideoTop"}>
        <span>TRANSFORMATION STORIES</span>
        <h2>
          Real Journeys.
          <br />
          Real Transformations.
        </h2>
      </div>

      <div className="gtVideoSliderWrap">
        {stories.map((story, index) => (
          <div
            key={story.id}
            className={
              current === index ? "gtVideoSlide activeVideoSlide" : "gtVideoSlide"
            }
          >
            <div className="gtVideoSide">
              {/* VIDEO PLAYER */}
              {/* <video
                className="gtStoryVideo"
                controls
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src={story.video} type="video/mp4" />
              </video> */}

              <div className="gtVideoOverlay"></div>
              <div className="gtVideoGradient"></div>

              <div className="gtVideoQuote">"{story.quote}"</div>

              <div className="gtVideoProfile">
                <h3>{story.name}</h3>
                <span>{story.role}</span>
              </div>
            </div>

            <div className="gtTimelineSide">
              <div className="gtTimelineCard before">
                <span>BEFORE</span>
                <h4>The Challenge</h4>
                <p>{story.before}</p>
              </div>

              <div className="gtTimelineCard journey">
                <span>JOURNEY</span>
                <h4>The Transformation</h4>
                <p>{story.journey}</p>
              </div>

              <div className="gtTimelineCard today">
                <span>TODAY</span>
                <h4>The Outcome</h4>
                <p>{story.today}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="gtVideoControls">
        <button onClick={prevSlide}>
          <ArrowLeft size={18} />
        </button>
        <button onClick={nextSlide}>
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default SuccessStorySection;
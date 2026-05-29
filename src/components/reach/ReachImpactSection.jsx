// import React, {
//   useEffect,
//   useRef,
//   useState,
// } from "react";

// import {
//   GraduationCap,
//   HeartHandshake,
//   BriefcaseBusiness,
//   Users,
// } from "lucide-react";

// import "./ReachImpactSection.css";

// /* ======================================================
//    IMPACT DATA
// ====================================================== */

// const impactData = [

//   {
//     icon:
//       <GraduationCap size={30} />,

//     number: 12000,

//     suffix: "+",

//     title:
//       "Youth Trained",

//     description:
//       "Providing education, digital literacy and skill development opportunities for underserved youth.",
//   },

//   {
//     icon:
//       <BriefcaseBusiness size={30} />,

//     number: 3000,

//     suffix: "+",

//     title:
//       "Career Placements",

//     description:
//       "Connecting individuals with employment opportunities through training and placement support.",
//   },

//   {
//     icon:
//       <Users size={30} />,

//     number: 150,

//     suffix: "+",

//     title:
//       "Community Programs",

//     description:
//       "Organizing impactful social initiatives focused on education, healthcare and empowerment.",
//   },

//   {
//     icon:
//       <HeartHandshake size={30} />,

//     number: 50,

//     suffix: "+",

//     title:
//       "Partner Organizations",

//     description:
//       "Collaborating with NGOs and institutions to expand social impact across India.",
//   },

// ];

// /* ======================================================
//    COUNT UP COMPONENT
// ====================================================== */

// const CountUp = ({
//   end,
//   suffix = "",
//   duration = 2000,
// }) => {

//   const [count, setCount] =
//     useState(0);

//   useEffect(() => {

//     let start = 0;

//     const increment =
//       end / (duration / 16);

//     const timer = setInterval(() => {

//       start += increment;

//       if (start >= end) {

//         setCount(end);

//         clearInterval(timer);

//       }

//       else {

//         setCount(
//           Math.floor(start)
//         );

//       }

//     }, 16);

//     return () =>
//       clearInterval(timer);

//   }, [end, duration]);

//   return (
//     <>
//       {count.toLocaleString()}
//       {suffix}
//     </>
//   );
// };

// /* ======================================================
//    COMPONENT
// ====================================================== */

// const ReachImpactSection = () => {

//   const sectionRef =
//     useRef(null);

//   const [visible, setVisible] =
//     useState(false);

//   /* ======================================================
//      OBSERVER
//   ====================================================== */

//   useEffect(() => {

//     const observer =
//       new IntersectionObserver(

//         ([entry]) => {

//           if (
//             entry.isIntersecting
//           ) {

//             setVisible(true);

//           }

//         },

//         {
//           threshold: 0.2,
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
//       className="impactSection"
//       ref={sectionRef}
//     >

//       {/* ======================================================
//           TOP
//       ====================================================== */}

//       <div
//         className={
//           visible
//             ? "impactTop showImpactTop"
//             : "impactTop"
//         }
//       >

     

//         <h2>

//           Transforming Lives
//           Through Meaningful
//           Social Change

//         </h2>

//         <p>

//           Every initiative we undertake
//           is designed to create sustainable
//           opportunities, empower communities
//           and improve lives across India.

//         </p>

//       </div>

//       {/* ======================================================
//           GRID
//       ====================================================== */}

//       <div className="impactGrid">

//         {impactData.map(
//           (item, index) => (

//             <div
//               className={
//                 visible
//                   ? "impactCard showImpactCard"
//                   : "impactCard"
//               }

//               key={index}

//               style={{
//                 transitionDelay:
//                   `${index * 180}ms`,
//               }}
//             >

//               <div className="impactCardGlow"></div>

              

//               <h3>

//                 {visible && (

//                   <CountUp
//                     end={item.number}
//                     suffix={item.suffix}
//                   />

//                 )}

//               </h3>

//               <h4>

//                 {item.title}

//               </h4>

//               <p>

//                 {item.description}

//               </p>

//             </div>

//           )
//         )}

//       </div>

//     </section>

//   );

// };

// export default ReachImpactSection;








// ReachImpactSection.jsx

// import React, {
//   useEffect,
//   useRef,
//   useState,
// } from "react";

// import {
//   GraduationCap,
//   BriefcaseBusiness,
//   Building2,
//   Globe2,
//   HeartHandshake,
//   Sparkles,
//   ShieldCheck,
//   Users,
// } from "lucide-react";

// import "./ReachImpactSection.css";

// /* =========================================================
//    IMPACT DATA
// ========================================================= */

// const impactData = [

//   {
//     icon:
//       <GraduationCap size={28} />,

//     number: 30000,

//     suffix: "+",

//     title:
//       "Students Trained",

//     subtitle:
//       "Across India",

//     description:
//       "Empowering youth through technical education, skilling programs and career readiness initiatives.",
//   },

//   {
//     icon:
//       <BriefcaseBusiness size={28} />,

//     number: 5000,

//     suffix: "+",

//     title:
//       "Career Opportunities",

//     subtitle:
//       "Placements & Internships",

//     description:
//       "Connecting students with industry partners, job drives, internships and placement opportunities.",
//   },

//   {
//     icon:
//       <Building2 size={28} />,

//     number: 4,

//     suffix: "+",

//     title:
//       "Regional Hubs",

//     subtitle:
//       "PAN India Reach",

//     description:
//       "Active operational presence in Bengaluru, Udupi, Moodbidri and Mangaluru.",
//   },

//   {
//     icon:
//       <Globe2 size={28} />,

//     number: 100,

//     suffix: "+",

//     title:
//       "Workshops & FDPs",

//     subtitle:
//       "Industry Readiness",

//     description:
//       "Hands-on workshops, industrial visits and faculty development programs across institutions.",
//   },

// ];

// /* =========================================================
//    HIGHLIGHT DATA
// ========================================================= */

// const highlights = [

//   {
//     icon:
//       <ShieldCheck size={18} />,

//     text:
//       "ISO 9001:2015 Certified",
//   },

//   {
//     icon:
//       <HeartHandshake size={18} />,

//     text:
//       "CSR Collaborations with UNICEF, NASSCOM & HGS",
//   },

//   {
//     icon:
//       <Users size={18} />,

//     text:
//       "Strong Industry & Community Network",
//   },

// ];

// /* =========================================================
//    COUNTUP
// ========================================================= */

// const CountUp = ({
//   end,
//   suffix = "",
//   duration = 2200,
// }) => {

//   const [count, setCount] =
//     useState(0);

//   useEffect(() => {

//     let start = 0;

//     const increment =
//       end / (duration / 16);

//     const timer = setInterval(() => {

//       start += increment;

//       if (start >= end) {

//         setCount(end);

//         clearInterval(timer);

//       }

//       else {

//         setCount(
//           Math.floor(start)
//         );

//       }

//     }, 16);

//     return () =>
//       clearInterval(timer);

//   }, [end, duration]);

//   return (
//     <>
//       {count.toLocaleString()}
//       {suffix}
//     </>
//   );
// };

// /* =========================================================
//    COMPONENT
// ========================================================= */

// const ReachImpactSection = () => {

//   const sectionRef =
//     useRef(null);

//   const [visible, setVisible] =
//     useState(false);

//   /* =========================================================
//      OBSERVER
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

//   return (

//     <section
//       className="impactSection"
//       ref={sectionRef}
//     >

//       {/* =========================================================
//           CINEMATIC BACKGROUND
//       ========================================================= */}

//       <div className="impactGradientOne"></div>

//       <div className="impactGradientTwo"></div>

//       <div className="impactGridOverlay"></div>

//       {/* =========================================================
//           TOP CONTENT
//       ========================================================= */}

//       <div
//         className={
//           visible
//             ? "impactTop showImpactTop"
//             : "impactTop"
//         }
//       >

//         <div className="impactBadge">

//           <Sparkles size={14} />

//           Creating Measurable Impact

//         </div>

//         <h2>

//           Transforming Communities
//           Through Scalable
//           Social Impact.

//         </h2>

//         <p>

//           Globetech Social Impact Foundation
//           is building a stronger future
//           through skilling, placement,
//           women empowerment, sustainability,
//           digital education and community
//           development initiatives across India.

//         </p>

//       </div>

//       {/* =========================================================
//           HIGHLIGHTS
//       ========================================================= */}

//       <div
//         className={
//           visible
//             ? "impactHighlights showImpactHighlights"
//             : "impactHighlights"
//         }
//       >

//         {highlights.map(
//           (item, index) => (

//             <div
//               className="highlightItem"
//               key={index}
//             >

//               <span>

//                 {item.icon}

//               </span>

//               <p>

//                 {item.text}

//               </p>

//             </div>

//           )
//         )}

//       </div>

//       {/* =========================================================
//           IMPACT GRID
//       ========================================================= */}

//       <div className="impactGrid">

//         {impactData.map(
//           (item, index) => (

//             <div
//               key={index}

//               className={
//                 visible
//                   ? "impactCard showImpactCard"
//                   : "impactCard"
//               }

//               style={{
//                 transitionDelay:
//                   `${index * 180}ms`,
//               }}
//             >

//               {/* GLOW */}

//               <div className="impactCardGlow"></div>

//               {/* TOP */}

//               <div className="impactCardTop">

//                 <div className="impactIcon">

//                   {item.icon}

//                 </div>

//                 <div className="impactLine"></div>

//               </div>

//               {/* NUMBER */}

//               <h3>

//                 {visible && (

//                   <CountUp
//                     end={item.number}
//                     suffix={item.suffix}
//                   />

//                 )}

//               </h3>

//               {/* TITLE */}

//               <h4>

//                 {item.title}

//               </h4>

//               <span className="impactSubTitle">

//                 {item.subtitle}

//               </span>

//               {/* DESC */}

//               <p>

//                 {item.description}

//               </p>

//             </div>

//           )
//         )}

//       </div>

//       {/* =========================================================
//           BOTTOM STORY STRIP
//       ========================================================= */}

//       <div
//         className={
//           visible
//             ? "storyStrip showStoryStrip"
//             : "storyStrip"
//         }
//       >

//         <div className="storyItem">

//           <span>Skilling</span>

//         </div>

//         <div className="storyDot"></div>

//         <div className="storyItem">

//           <span>Industry Readiness</span>

//         </div>

//         <div className="storyDot"></div>

//         <div className="storyItem">

//           <span>Placements</span>

//         </div>

//         <div className="storyDot"></div>

//         <div className="storyItem">

//           <span>Community Growth</span>

//         </div>

//       </div>

//     </section>

//   );

// };

// export default ReachImpactSection;




// ReachImpactSection.jsx

// import React, {
//   useEffect,
//   useRef,
//   useState,
// } from "react";

// import "./ReachImpactSection.css";

// /* =========================================================
//    DATA
// ========================================================= */

// const impactStats = [

//   {
//     value: "30K+",
//     title: "Students Trained",
//     desc:
//       "Empowering youth through skilling & digital education.",
//   },

//   {
//     value: "5000+",
//     title: "Career Opportunities",
//     desc:
//       "Placements, internships & recruitment initiatives.",
//   },

//   {
//     value: "100+",
//     title: "Workshops & FDPs",
//     desc:
//       "Hands-on industrial learning & innovation programs.",
//   },

//   {
//     value: "4+",
//     title: "Regional Hubs",
//     desc:
//       "Presence across Karnataka & PAN India initiatives.",
//   },

// ];

// const ReachImpactSection = () => {

//   const sectionRef =
//     useRef(null);

//   const [visible, setVisible] =
//     useState(false);

//   /* =========================================================
//      OBSERVER
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
//       className="gtImpactSection"
//       ref={sectionRef}
//     >

//       {/* =========================================================
//           BACKGROUND
//       ========================================================= */}

//       <div className="gtImpactBlurOne"></div>

//       <div className="gtImpactBlurTwo"></div>

//       <div className="gtImpactGrid"></div>

//       {/* =========================================================
//           TOP CONTENT
//       ========================================================= */}

//       <div
//         className={
//           visible
//             ? "gtImpactTop gtImpactTopShow"
//             : "gtImpactTop"
//         }
//       >

//         <span className="gtImpactTag">

//           PAN INDIA SOCIAL IMPACT

//         </span>

//         <h2>

//           Driving
//           Community
//           Transformation.

//         </h2>

//         <p>

//           Creating measurable impact through
//           skilling, placements, sustainability,
//           women empowerment and digital
//           learning initiatives across India.

//         </p>

//       </div>

//       {/* =========================================================
//           MAIN LAYOUT
//       ========================================================= */}

//       <div className="gtImpactLayout">

//         {/* =========================================================
//             LEFT FEATURE CARD
//         ========================================================= */}

//         <div
//           className={
//             visible
//               ? "gtImpactFeatureCard gtImpactFeatureCardShow"
//               : "gtImpactFeatureCard"
//           }
//         >

//           <div className="gtFeatureGlow"></div>

//           <div className="gtFeatureLine"></div>

//           <span className="gtFeatureMiniText">

//             IMPACT ECOSYSTEM

//           </span>

//           <h1>

//             30K+

//           </h1>

//           <h3>

//             Students Empowered
//             Across India

//           </h3>

//           <p>

//             Delivering industry readiness,
//             technical skilling, placements,
//             workshops and digital education
//             programs through scalable
//             social initiatives.

//           </p>

//           {/* FLOATING CARDS */}

//           <div className="gtMiniCard gtMiniCardOne">

//             <h4>100+</h4>

//             <span>

//               Workshops & FDPs

//             </span>

//           </div>

//           <div className="gtMiniCard gtMiniCardTwo">

//             <h4>5000+</h4>

//             <span>

//               Career Opportunities

//             </span>

//           </div>

//         </div>

//         {/* =========================================================
//             RIGHT STATS GRID
//         ========================================================= */}

//         <div className="gtStatsGrid">

//           {impactStats.map(
//             (item, index) => (

//               <div
//                 key={index}

//                 className={
//                   visible
//                     ? "gtImpactCard gtImpactCardShow"
//                     : "gtImpactCard"
//                 }

//                 style={{
//                   transitionDelay:
//                     `${index * 140}ms`,
//                 }}
//               >

//                 <div className="gtCardLine"></div>

//                 <h3>

//                   {item.value}

//                 </h3>

//                 <h4>

//                   {item.title}

//                 </h4>

//                 <p>

//                   {item.desc}

//                 </p>

//               </div>

//             )
//           )}

//         </div>

//       </div>

//       {/* =========================================================
//           STORY STRIP
//       ========================================================= */}

//       <div
//         className={
//           visible
//             ? "gtStoryStrip gtStoryStripShow"
//             : "gtStoryStrip"
//         }
//       >

//         <div className="gtStoryItem">

//           Skilling

//         </div>

//         <div className="gtStoryDot"></div>

//         <div className="gtStoryItem">

//           Sustainability

//         </div>

//         <div className="gtStoryDot"></div>

//         <div className="gtStoryItem">

//           Women Empowerment

//         </div>

//         <div className="gtStoryDot"></div>

//         <div className="gtStoryItem">

//           Placements

//         </div>

//         <div className="gtStoryDot"></div>

//         <div className="gtStoryItem">

//           Digital Learning

//         </div>

//       </div>

//     </section>

//   );

// };

// export default ReachImpactSection;


















// ReachImpactSection.jsx

import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import "./ReachImpactSection.css";

import impact1 from "../../assets/about-1.jpg";
import impact2 from "../../assets/about-2.jpg";
import impact3 from "../../assets/about123.jpg";
import impact4 from "../../assets/aboutimg.png";

/* =========================================================
   DATA
========================================================= */

const cinematicCards = [

  {
    image: impact1,
    number: 30000,
    suffix: "+",
    title: "Students Trained",
    desc:
      "Technical skilling & digital learning initiatives across India.",
  },

  {
    image: impact2,
    number: 5000,
    suffix: "+",
    title: "Career Opportunities",
    desc:
      "Placements, internships & recruitment support programs.",
  },

  {
    image: impact3,
    number: 100,
    suffix: "+",
    title: "Industry Workshops",
    desc:
      "Hands-on FDPs, industrial visits & innovation programs.",
  },

  {
    image: impact4,
    number: 4,
    suffix: "+",
    title: "Regional Hubs",
    desc:
      "Bengaluru, Udupi, Moodbidri & Mangaluru operational centers.",
  },

];

/* =========================================================
   COUNTUP
========================================================= */

const CountUp = ({
  end,
  suffix = "",
  duration = 2000,
}) => {

  const [count, setCount] =
    useState(0);

  useEffect(() => {

    let start = 0;

    const increment =
      end / (duration / 16);

    const timer = setInterval(() => {

      start += increment;

      if (start >= end) {

        setCount(end);

        clearInterval(timer);

      }

      else {

        setCount(
          Math.floor(start)
        );

      }

    }, 16);

    return () =>
      clearInterval(timer);

  }, [end, duration]);

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
};

/* =========================================================
   COMPONENT
========================================================= */

const ReachImpactSection = () => {

  const sectionRef =
    useRef(null);

  const [visible, setVisible] =
    useState(false);

  /* =========================================================
     OBSERVER
  ========================================================= */

  useEffect(() => {

    const observer =
      new IntersectionObserver(

        ([entry]) => {

          if (entry.isIntersecting) {

            setVisible(true);

          }

        },

        {
          threshold: 0.15,
        }

      );

    if (sectionRef.current) {

      observer.observe(
        sectionRef.current
      );

    }

    return () =>
      observer.disconnect();

  }, []);

  return (

    <section
      className="gtCinemaSection"
      ref={sectionRef}
    >

      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="gtCinemaBlurOne"></div>

      <div className="gtCinemaBlurTwo"></div>

      <div className="gtCinemaGrid"></div>

      {/* =========================================================
          TOP CONTENT
      ========================================================= */}

      <div
        className={
          visible
            ? "gtCinemaTop gtCinemaTopShow"
            : "gtCinemaTop"
        }
      >

        <span className="gtCinemaMiniTag">

          PAN INDIA IMPACT

        </span>

        <h2>

          Impact Across India.

        </h2>

        <p>

          Empowering communities through
          skilling, placements, women
          empowerment, sustainability
          and digital transformation
          initiatives.

        </p>

      </div>

      {/* =========================================================
          CINEMATIC GRID
      ========================================================= */}

      <div className="gtCinemaGridLayout">

        {cinematicCards.map(
          (item, index) => (

            <div
              key={index}

              className={
                visible
                  ? "gtCinemaCard gtCinemaCardShow"
                  : "gtCinemaCard"
              }

              style={{
                transitionDelay:
                  `${index * 180}ms`,
              }}
            >

              {/* IMAGE */}

              <img
                src={item.image}
                alt={item.title}
                className="gtCinemaImage"
              />

              {/* OVERLAY */}

              <div className="gtCinemaOverlay"></div>

              <div className="gtCinemaGradient"></div>

              {/* CONTENT */}

              <div className="gtCinemaContent">

                <div className="gtCinemaLine"></div>

                <h3>

                  {visible && (

                    <CountUp
                      end={item.number}
                      suffix={item.suffix}
                    />

                  )}

                </h3>

                <h4>

                  {item.title}

                </h4>

                <p>

                  {item.desc}

                </p>

              </div>

            </div>

          )
        )}

      </div>

      {/* =========================================================
          STORY STRIP
      ========================================================= */}

      <div
        className={
          visible
            ? "gtCinemaStrip gtCinemaStripShow"
            : "gtCinemaStrip"
        }
      >

        <div className="gtCinemaStripItem">

          Skill Development

        </div>

        <div className="gtCinemaDot"></div>

        <div className="gtCinemaStripItem">

          Sustainability

        </div>

        <div className="gtCinemaDot"></div>

        <div className="gtCinemaStripItem">

          Women Empowerment

        </div>

        <div className="gtCinemaDot"></div>

        <div className="gtCinemaStripItem">

          Career Readiness

        </div>

      </div>

    </section>

  );

};

export default ReachImpactSection;
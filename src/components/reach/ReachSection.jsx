// import indiaMap from "../../assets/india-map.png";

// const ReachSection = () => {
//   return (
//     <section className="reach-section">

//       <div className="container-fluid px-lg-5">

//         <div className="reach-wrapper">

//           <div className="row align-items-center g-5">

//             {/* LEFT */}

//             <div className="col-lg-5">

//               <div className="reach-content">

//                 <div className="section-tag orange">
//                   <span></span>
//                   Nationwide Footprint
//                 </div>

//                 <h2>
//                   Pan India Reach &
//                   <span> Connectivity</span>
//                 </h2>

//                 <p>
//                   Our presence spans across 22 states,
//                   bringing industrial-grade education and
//                   infrastructure to remote corners of India.
//                 </p>

//                 <div className="reach-points">

//                   <div className="reach-point">
//                     <i className="bi bi-check-circle"></i>
//                     On-Campus Training
//                   </div>

//                   <div className="reach-point">
//                     <i className="bi bi-check-circle"></i>
//                     Corporate Upskilling
//                   </div>

//                   <div className="reach-point">
//                     <i className="bi bi-check-circle"></i>
//                     Digital Learning via G-SKOOL.Com
//                   </div>

//                 </div>

//               </div>

//             </div>

//             {/* RIGHT */}

//             <div className="col-lg-7">

//               <div className="india-map">

//                 <img
//                   src={indiaMap}
//                   alt="India Map"
//                 />

//               </div>

//             </div>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default ReachSection;

// import indiaMap from "../../assets/india-map.png";

// const stats = [
//   {
//     number: "10,000+",
//     label: "Lives Impacted"
//   },
//   {
//     number: "500+",
//     label: "Students Skilled"
//   },
//   {
//     number: "50+",
//     label: "Community Programs"
//   },
//   {
//     number: "20+",
//     label: "Partner Organizations"
//   }
// ];

// const ReachSection = () => {
//   return (
//     <section className="reach-section">

//       <div className="container-fluid px-lg-5">

//         <div className="reach-wrapper">

//           <div className="row align-items-center">

//             {/* LEFT */}

//             <div className="col-lg-6">

//               <div className="reach-content">

//                 <div className="section-tag orange">
//                   <span></span>
//                   Nationwide Footprint
//                 </div>

//                 <h2>
//                   Pan India Reach &
//                   <span>Connectivity</span>
//                 </h2>

//                 <p>
//                   Our presence spans across 22 states,
//                   bringing industrial-grade education
//                   and infrastructure to remote corners
//                   of India.
//                 </p>

//                 <div className="reach-points">

//                   <div className="reach-point">
//                     <i className="bi bi-check-circle-fill"></i>
//                     On-Campus Training
//                   </div>

//                   <div className="reach-point">
//                     <i className="bi bi-check-circle-fill"></i>
//                     Corporate Upskilling
//                   </div>

//                   <div className="reach-point">
//                     <i className="bi bi-check-circle-fill"></i>
//                     Digital Learning via G-SKOOL.Com
//                   </div>

//                 </div>

//               </div>

//             </div>

//             {/* RIGHT */}

//             <div className="col-lg-6">

//               <div className="india-map">

//                 <img
//                   src={indiaMap}
//                   alt="India Map"
//                 />

//               </div>

//             </div>

//           </div>

//         </div>

//         {/* STATS */}

//         <div className="stats-wrapper">

//           <div className="row">

//             {stats.map((item, index) => (
//               <div
//                 className="col-lg-3 col-md-6"
//                 key={index}
//               >
//                 <div className="stat-box">

//                   <h3>{item.number}</h3>

//                   <p>{item.label}</p>

//                 </div>
//               </div>
//             ))}

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default ReachSection;









// import React from "react";
// import { CheckCircle2 } from "lucide-react";

// import indiaMap from "../../assets/india-map.png";

// import "./ReachSection.css";

// const stats = [
//   {
//     number: "10,000+",
//     label: "Lives Impacted",
//   },

//   {
//     number: "500+",
//     label: "Students Guided",
//   },

//   {
//     number: "50+",
//     label: "Community Programs",
//   },

//   {
//     number: "20+",
//     label: "Partner Organizations",
//   },
// ];

// const ReachSection = () => {

//   return (

//     <section className="auroReachSection">

//       <div className="auroReachContainer">

//         {/* =====================================
//             TOP YELLOW SECTION
//         ====================================== */}

//         <div className="auroReachWrapper">

//           {/* LEFT SIDE */}

//           <div className="auroReachLeft">

//             {/* TAG */}

//             <div className="auroReachTag">

//               <span></span>

//               <p>
//                 Nationwide Footprint
//               </p>

//             </div>

//             {/* TITLE */}

//             <h2>

//               Pan India Reach &
//               <span> Connectivity</span>

//             </h2>

//             {/* DESCRIPTION */}

//             <p className="auroReachDescription">

//               Our presence spans across 22 states,
//               bringing industrial-grade education and
//               infrastructure to the most remote corners
//               of India. Every dot on our map represents
//               a center of excellence.

//             </p>

//             {/* POINTS */}

//             <div className="auroReachPoints">

//               <div className="auroReachPoint">

//                 <CheckCircle2 size={20} />

//                 <p>
//                   On-Campus Training
//                 </p>

//               </div>

//               <div className="auroReachPoint">

//                 <CheckCircle2 size={20} />

//                 <p>
//                   Corporate Upskilling
//                 </p>

//               </div>

//               <div className="auroReachPoint">

//                 <CheckCircle2 size={20} />

//                 <p>
//                   Digital Learning via G-SKOOL.Com
//                 </p>

//               </div>

//             </div>

//           </div>

//           {/* RIGHT SIDE */}

//           <div className="auroReachRight">

//             <img
//               src={indiaMap}
//               alt="India Map"
//               className="auroIndiaMap"
//             />

//           </div>

//         </div>

//         {/* =====================================
//             STATS SECTION
//         ====================================== */}

//         <div className="auroStatsWrapper">

//           {stats.map((item, index) => (

//             <div
//               className="auroStatCard"
//               key={index}
//             >

//               <h3>
//                 {item.number}
//               </h3>

//               <p>
//                 {item.label}
//               </p>

//             </div>

//           ))}

//         </div>

//       </div>

//     </section>

//   );
// };

// export default ReachSection;


import React, { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";

import indiaMap from "../../assets/india-map.png";

import "./ReachSection.css";

const stats = [
  {
    number: 10000,
    suffix: "+",
    label: "Lives Impacted",
  },

  {
    number: 500,
    suffix: "+",
    label: "Students Guided",
  },

  {
    number: 50,
    suffix: "+",
    label: "Community Programs",
  },

  {
    number: 20,
    suffix: "+",
    label: "Partner Organizations",
  },
];

/* =========================================
   COUNTUP COMPONENT
========================================= */

const Counter = ({ end, suffix }) => {

  const [count, setCount] = useState(0);

  const [startCount, setStartCount] = useState(false);

  const counterRef = useRef(null);

  /* INTERSECTION OBSERVER */

  useEffect(() => {

    const observer = new IntersectionObserver(

      ([entry]) => {

        if (entry.isIntersecting) {

          setStartCount(true);

          observer.disconnect();
        }
      },

      {
        threshold: 0.4,
      }
    );

    if (counterRef.current) {

      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();

  }, []);

  /* COUNTING ANIMATION */

  useEffect(() => {

    if (!startCount) return;

    let start = 0;

    const duration = 2000;

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

  }, [startCount, end]);

  return (

    <h3 ref={counterRef}>
      {count.toLocaleString()}
      {suffix}
    </h3>

  );
};

const ReachSection = () => {

  return (

    <section className="auroReachSection">

      <div className="auroReachContainer">

        {/* =====================================
            TOP YELLOW SECTION
        ====================================== */}

        <div className="auroReachWrapper">

          {/* LEFT SIDE */}

          <div className="auroReachLeft">

            {/* TAG */}

            <div className="auroReachTag">

              <span></span>

              <p>
                Nationwide Footprint
              </p>

            </div>

            {/* TITLE */}

            <h2>

              Pan India Reach &
              <span> Connectivity</span>

            </h2>

            {/* DESCRIPTION */}

            <p className="auroReachDescription">

              Our presence spans across 22 states,
              bringing industrial-grade education and
              infrastructure to the most remote corners
              of India. Every dot on our map represents
              a center of excellence.

            </p>

            {/* POINTS */}

            <div className="auroReachPoints">

              <div className="auroReachPoint">

                <CheckCircle2 size={20} />

                <p>
                  On-Campus Training
                </p>

              </div>

              <div className="auroReachPoint">

                <CheckCircle2 size={20} />

                <p>
                  Corporate Upskilling
                </p>

              </div>

              <div className="auroReachPoint">

                <CheckCircle2 size={20} />

                <p>
                  Digital Learning via G-SKOOL.Com
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="auroReachRight">

            <img
              src={indiaMap}
              alt="India Map"
              className="auroIndiaMap"
            />

          </div>

        </div>

        {/* =====================================
            STATS SECTION
        ====================================== */}

        <div className="auroStatsWrapper">

          {stats.map((item, index) => (

            <div
              className="auroStatCard"
              key={index}
            >

              <Counter
                end={item.number}
                suffix={item.suffix}
              />

              <p>
                {item.label}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
};

export default ReachSection;
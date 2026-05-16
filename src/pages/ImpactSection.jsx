// // // ImpactSection.jsx

// // import React, { useEffect, useRef, useState } from "react";

// // import "./ImpactSection.css";

// // const statsData = [
// //   {
// //     number: 10000,
// //     suffix: "+",
// //     label: "Lives Impacted",
// //   },
// //   {
// //     number: 500,
// //     suffix: "+",
// //     label: "Students Guided",
// //   },
// //   {
// //     number: 50,
// //     suffix: "+",
// //     label: "Community Programs",
// //   },
// //   {
// //     number: 20,
// //     suffix: "+",
// //     label: "Partner Organizations",
// //   },
// // ];

// // const CountUp = ({ end, suffix }) => {

// //   const [count, setCount] = useState(0);

// //   const countRef = useRef(null);

// //   const hasAnimated = useRef(false);

// //   useEffect(() => {

// //     const observer = new IntersectionObserver(

// //       ([entry]) => {

// //         if (entry.isIntersecting && !hasAnimated.current) {

// //           hasAnimated.current = true;

// //           let start = 0;

// //           const duration = 2000;

// //           const increment = end / (duration / 16);

// //           const timer = setInterval(() => {

// //             start += increment;

// //             if (start >= end) {

// //               setCount(end);

// //               clearInterval(timer);

// //             } else {

// //               setCount(Math.floor(start));

// //             }

// //           }, 16);

// //         }

// //       },

// //       {
// //         threshold: 0.4,
// //       }

// //     );

// //     if (countRef.current) {

// //       observer.observe(countRef.current);

// //     }

// //     return () => observer.disconnect();

// //   }, [end]);

// //   return (

// //     <h3 ref={countRef}>

// //       {count.toLocaleString()}
// //       {suffix}

// //     </h3>

// //   );
// // };

// // const ImpactSection = () => {

// //   const sliderRef = useRef(null);

// //   const scrollLeft = () => {

// //     sliderRef.current.scrollBy({
// //       left: -450,
// //       behavior: "smooth",
// //     });

// //   };

// //   const scrollRight = () => {

// //     sliderRef.current.scrollBy({
// //       left: 450,
// //       behavior: "smooth",
// //     });

// //   };

// //   return (

// //     <section className="impact-main-section">

// //       <div className="impact-main-container">

// //         {/* =====================================
// //             TOP
// //         ====================================== */}

// //         <div className="impact-header-area">

// //           <h2 className="impact-main-title">
// //             Impact
// //           </h2>

// //           <p className="impact-main-description">

// //             Our impact is a reflection of the lives we have touched and
// //             the communities we have helped transform. Through our initiatives,
// //             we have created opportunities for individuals to access education,
// //             develop skills, and build sustainable livelihoods.

           

// //             Each number represents a story of growth, resilience,
// //             and change, highlighting the difference that access and support can make.

            

// //             We believe that true impact goes beyond statistics — it is about
// //             empowering individuals, strengthening communities, and creating
// //             lasting change.

// //           </p>

// //         </div>

// //         {/* =====================================
// //             STATS
// //         ====================================== */}

// //         <div className="impact-stats-grid">

// //           {statsData.map((item, index) => (

// //             <div
// //               className="impact-single-stat-card"
// //               key={index}
// //             >

// //               <CountUp
// //                 end={item.number}
// //                 suffix={item.suffix}
// //               />

// //               <p>
// //                 {item.label}
// //               </p>

// //             </div>

// //           ))}

// //         </div>

// //         {/* =====================================
// //             VOICES HEADER
// //         ====================================== */}

// //         <div className="impact-voices-header">

// //           <div>

// //             <h2>
// //               Voices from the Field
// //             </h2>

// //             <p>
// //               Real stories of resilience and progress from our global community.
// //             </p>

// //           </div>

// //           <div className="impact-slider-buttons">

// //             <button onClick={scrollLeft}>
// //               ‹
// //             </button>

// //             <button onClick={scrollRight}>
// //               ›
// //             </button>

// //           </div>

// //         </div>

// //         {/* =====================================
// //             IMAGE SLIDER
// //         ====================================== */}

// //         <div
// //           className="impact-slider-wrapper"
// //           ref={sliderRef}
// //         >

// //           <div className="impact-slider-track">

// //             {/* CARD 1 */}

// //             <div className="impact-image-card">

// //               <img
// //                 src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
// //                 alt="Skilling & Placement"
// //               />

// //               <div className="impact-image-overlay">

// //                 <span>
// //                   SUSTAINABILITY
// //                 </span>

// //                 <h3>
// //                   Skilling & Placement
// //                 </h3>

// //                 <p>
// //                   Empowering youth for career opportunities and growth.
// //                 </p>

// //               </div>

// //             </div>

// //             {/* CARD 2 */}

// //             <div className="impact-image-card">

// //               <img
// //                 src="https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1200&auto=format&fit=crop"
// //                 alt="Environmental Protection"
// //               />

// //               <div className="impact-image-overlay">

// //                 <span>
// //                   ENVIRONMENT
// //                 </span>

// //                 <h3>
// //                   Environmental Protection
// //                 </h3>

// //                 <p>
// //                   Creating awareness and protecting nature together.
// //                 </p>

// //               </div>

// //             </div>

// //             {/* CARD 3 */}

// //             <div className="impact-image-card">

// //               <img
// //                 src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
// //                 alt="Skill Development"
// //               />

// //               <div className="impact-image-overlay">

// //                 <span>
// //                   EDUCATION
// //                 </span>

// //                 <h3>
// //                   Skill Development
// //                 </h3>

// //                 <p>
// //                   Supporting students with industry-based training initiatives.
// //                 </p>

// //               </div>

// //             </div>

// //             {/* CARD 4 */}

// //             <div className="impact-image-card">

// //               <img
// //                 src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop"
// //                 alt="Community Support"
// //               />

// //               <div className="impact-image-overlay">

// //                 <span>
// //                   COMMUNITY
// //                 </span>

// //                 <h3>
// //                   Community Empowerment
// //                 </h3>

// //                 <p>
// //                   Building inclusive opportunities for underserved communities.
// //                 </p>

// //               </div>

// //             </div>

// //           </div>

// //         </div>

// //         {/* =====================================
// //             TESTIMONIAL SECTION
// //         ====================================== */}

// //         <div className="impact-testimonial-layout">

// //           <div className="impact-testimonial-left">

// //             <div className="impact-quote-icon">
// //               ❝
// //             </div>

// //             <h2>

// //               What the
// //               <br />
// //               Community Says

// //             </h2>

// //             <p>

// //               The impact of Globetech Foundation is reflected in the
// //               experiences of students, institutions, and communities
// //               who have benefited from our training, development,
// //               and empowerment initiatives.

// //             </p>

// //           </div>

// //           <div className="impact-testimonial-grid">

// //             <div className="impact-testimonial-card">

// //               <p>

// //                 “The industrial visits and workshops helped me
// //                 understand real-world industry environments
// //                 and improved my confidence.”

// //               </p>

// //               <div className="impact-user-info">

// //                 <img
// //                   src="https://i.pravatar.cc/100?img=12"
// //                   alt="Harish"
// //                 />

// //                 <div>

// //                   <h4>
// //                     Harish P
// //                   </h4>

// //                   <span>
// //                     Student Participant
// //                   </span>

// //                 </div>

// //               </div>

// //             </div>

// //             <div className="impact-testimonial-card">

// //               <p>

// //                 “The training programs provided practical
// //                 exposure and industry-oriented learning
// //                 that prepared students for workplace needs.”

// //               </p>

// //               <div className="impact-user-info">

// //                 <img
// //                   src="https://i.pravatar.cc/100?img=32"
// //                   alt="Priya"
// //                 />

// //                 <div>

// //                   <h4>
// //                     Priya K
// //                   </h4>

// //                   <span>
// //                     Program Coordinator
// //                   </span>

// //                 </div>

// //               </div>

// //             </div>

// //             <div className="impact-testimonial-card">

// //               <p>

// //                 “Globetech’s initiatives are helping local youth
// //                 professionals gain employability and professional confidence.”

// //               </p>

// //               <div className="impact-user-info">

// //                 <img
// //                   src="https://i.pravatar.cc/100?img=48"
// //                   alt="Arun"
// //                 />

// //                 <div>

// //                   <h4>
// //                     Arun M
// //                   </h4>

// //                   <span>
// //                     Industry Trainer
// //                   </span>

// //                 </div>

// //               </div>

// //             </div>

// //             <div className="impact-testimonial-card">

// //               <p>

// //                 “Career guidance and technical workshops inspired
// //                 our students to become more skilled and responsible individuals.”

// //               </p>

// //               <div className="impact-user-info">

// //                 <img
// //                   src="https://i.pravatar.cc/100?img=15"
// //                   alt="Bhavi"
// //                 />

// //                 <div>

// //                   <h4>
// //                     Bhavi R
// //                   </h4>

// //                   <span>
// //                     Training Volunteer
// //                   </span>

// //                 </div>

// //               </div>

// //             </div>

// //           </div>

// //         </div>

// //       </div>

// //     </section>

// //   );
// // };

// // export default ImpactSection;




// // ImpactSection.jsx

// import React, { useEffect, useRef, useState } from "react";
// import "./ImpactSection.css";

// const statsData = [
//   {
//     number: 10000,
//     suffix: "+",
//     label: "Lives Impacted",
//   },
//   {
//     number: 500,
//     suffix: "+",
//     label: "Students Guided",
//   },
//   {
//     number: 50,
//     suffix: "+",
//     label: "Community Programs",
//   },
//   {
//     number: 20,
//     suffix: "+",
//     label: "Partner Organizations",
//   },
// ];

// const CountUp = ({ end, suffix }) => {
//   const [count, setCount] = useState(0);
//   const countRef = useRef(null);
//   const animated = useRef(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !animated.current) {
//           animated.current = true;

//           let start = 0;
//           const duration = 2000;
//           const increment = end / (duration / 16);

//           const timer = setInterval(() => {
//             start += increment;

//             if (start >= end) {
//               setCount(end);
//               clearInterval(timer);
//             } else {
//               setCount(Math.floor(start));
//             }
//           }, 16);
//         }
//       },
//       {
//         threshold: 0.5,
//       }
//     );

//     if (countRef.current) {
//       observer.observe(countRef.current);
//     }

//     return () => observer.disconnect();
//   }, [end]);

//   return (
//     <h3 ref={countRef}>
//       {count.toLocaleString()}
//       {suffix}
//     </h3>
//   );
// };

// const Reveal = ({ children }) => {
//   const ref = useRef(null);

//   useEffect(() => {
//     const el = ref.current;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           el.classList.add("active");
//         }
//       },
//       { threshold: 0.15 }
//     );

//     if (el) observer.observe(el);

//     return () => observer.disconnect();
//   }, []);

//   return <div ref={ref} className="reveal">{children}</div>;
// };

// const ImpactSection = () => {
//   const sliderRef = useRef(null);

//   const scrollLeft = () => {
//     sliderRef.current.scrollBy({
//       left: -420,
//       behavior: "smooth",
//     });
//   };

//   const scrollRight = () => {
//     sliderRef.current.scrollBy({
//       left: 420,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section className="impact-section">
//       <div className="impact-container">

//         {/* HEADER */}

//         <Reveal>
//           <div className="impact-header">
//             <h2>Impact</h2>

//             <p>
//               Our impact is a reflection of the lives we have touched and the
//               communities we have helped transform. Through our initiatives,
//               we have created opportunities for individuals to access education,
//               develop skills, and build sustainable livelihoods.
           
//               Each number represents a story of growth, resilience,
//               and change, highlighting the difference that access and support
//               can make.
          
//               We believe that true impact goes beyond statistics — it is about
//               empowering individuals, strengthening communities, and creating
//               lasting change.
//             </p>
//           </div>
//         </Reveal>

//         {/* STATS */}

//         <div className="impact-stats-grid">
//           {statsData.map((item, index) => (
//             <Reveal key={index}>
//               <div className="impact-stat-card">
//                 <CountUp
//                   end={item.number}
//                   suffix={item.suffix}
//                 />

//                 <p>{item.label}</p>
//               </div>
//             </Reveal>
//           ))}
//         </div>

//         {/* VOICES */}

//         <Reveal>
//           <div className="impact-voices-header">
//             <div>
//               <h2>Voices from the Field</h2>
//               <p>
//                 Real stories of resilience and progress from our global community.
//               </p>
//             </div>

//             <div className="impact-slider-buttons">
//               <button onClick={scrollLeft}>‹</button>
//               <button onClick={scrollRight}>›</button>
//             </div>
//           </div>
//         </Reveal>

//         {/* SLIDER */}

//         <div className="impact-slider-wrapper" ref={sliderRef}>
//           <div className="impact-slider-track">

//             <Reveal>
//               <div className="impact-image-card">
//                 <img
//                   src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
//                   alt=""
//                 />

//                 <div className="impact-overlay">
//                   <span>SUSTAINABILITY</span>
//                   <h3>Skilling & Placement</h3>
//                   <p>
//                     Empowering youth for career opportunities and growth.
//                   </p>
//                 </div>
//               </div>
//             </Reveal>

//             <Reveal>
//               <div className="impact-image-card">
//                 <img
//                   src="https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1200&auto=format&fit=crop"
//                   alt=""
//                 />

//                 <div className="impact-overlay">
//                   <span>ENVIRONMENT</span>
//                   <h3>Environmental Protection</h3>
//                   <p>
//                     Creating awareness and protecting nature together.
//                   </p>
//                 </div>
//               </div>
//             </Reveal>

//             <Reveal>
//               <div className="impact-image-card">
//                 <img
//                   src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
//                   alt=""
//                 />

//                 <div className="impact-overlay">
//                   <span>EDUCATION</span>
//                   <h3>Skill Development</h3>
//                   <p>
//                     Supporting students with industry-based training initiatives.
//                   </p>
//                 </div>
//               </div>
//             </Reveal>

//           </div>
//         </div>

//         {/* TESTIMONIAL */}

//         <div className="impact-testimonial-layout">

//           <Reveal>
//             <div className="impact-testimonial-left">

//               <div className="quote-icon">❝</div>

//               <h2>
//                 What the
//                 <br />
//                 Community Says
//               </h2>

//               <p>
//                 The impact of Globetech Foundation is reflected in the
//                 experiences of students, institutions, and communities who
//                 have benefited from our training, development, and empowerment initiatives.
//               </p>

//             </div>
//           </Reveal>

//           <div className="impact-testimonial-grid">

//             <Reveal>
//               <div className="impact-testimonial-card">
//                 <p>
//                   “The industrial visits and workshops helped me understand
//                   real-world industry environments and improved my confidence.”
//                 </p>

//                 <div className="impact-user">
//                   <img
//                     src="https://i.pravatar.cc/100?img=12"
//                     alt=""
//                   />

//                   <div>
//                     <h4>Harish P</h4>
//                     <span>Student Participant</span>
//                   </div>
//                 </div>
//               </div>
//             </Reveal>

//             <Reveal>
//               <div className="impact-testimonial-card">
//                 <p>
//                   “The training programs provided practical exposure and
//                   industry-oriented learning that prepared students for workplace needs.”
//                 </p>

//                 <div className="impact-user">
//                   <img
//                     src="https://i.pravatar.cc/100?img=32"
//                     alt=""
//                   />

//                   <div>
//                     <h4>Priya K</h4>
//                     <span>Program Coordinator</span>
//                   </div>
//                 </div>
//               </div>
//             </Reveal>

//             <Reveal>
//               <div className="impact-testimonial-card">
//                 <p>
//                   “Globetech’s initiatives are helping local youth professionals
//                   gain employability and professional confidence.”
//                 </p>

//                 <div className="impact-user">
//                   <img
//                     src="https://i.pravatar.cc/100?img=48"
//                     alt=""
//                   />

//                   <div>
//                     <h4>Arun M</h4>
//                     <span>Industry Trainer</span>
//                   </div>
//                 </div>
//               </div>
//             </Reveal>

//             <Reveal>
//               <div className="impact-testimonial-card">
//                 <p>
//                   “Career guidance and technical workshops inspired our students
//                   to become more skilled and responsible individuals.”
//                 </p>

//                 <div className="impact-user">
//                   <img
//                     src="https://i.pravatar.cc/100?img=15"
//                     alt=""
//                   />

//                   <div>
//                     <h4>Bhavi R</h4>
//                     <span>Training Volunteer</span>
//                   </div>
//                 </div>
//               </div>
//             </Reveal>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ImpactSection;










import React, { useEffect, useRef, useState } from "react";
import "./ImpactSection.css";

const impactStats = [
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
    label: "NGO Partnerships",
  },
];

const stories = [
  {
    title: "Women Skill Development",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Digital Literacy",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Community Empowerment",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Youth Career Guidance",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  },
];

const testimonials = [
  {
    text: "The workshops helped me gain confidence and practical industry skills.",
    name: "Harish P",
    role: "Student Participant",
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    text: "This NGO transformed learning into real opportunities for students.",
    name: "Priya K",
    role: "Coordinator",
    image: "https://i.pravatar.cc/100?img=32",
  },
  {
    text: "Career guidance sessions inspired youth toward professional growth.",
    name: "Arun M",
    role: "Industry Trainer",
    image: "https://i.pravatar.cc/100?img=48",
  },
];

const CountUp = ({ end, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end]);

  return (
    <h2 ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </h2>
  );
};

const Reveal = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("show");
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className="reveal">{children}</div>;
};

export default function ImpactSection() {
  return (
    <section className="impact-section">

      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      <div className="impact-container">

        {/* HERO */}

        <Reveal>
          <div className="impact-hero">

            <div className="impact-left">

              <span className="impact-tag">
                OUR IMPACT
              </span>

              <h1>
                Transforming Lives Through Education & Opportunity
              </h1>

              <p>
                Every initiative we create is designed to empower communities,
                unlock opportunities, and build sustainable futures through
                education, technology, and livelihood support.
              </p>

              <button>
                Explore Our Journey
              </button>

            </div>

            <div className="impact-right">

              <img
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1200&auto=format&fit=crop"
                alt=""
              />

            </div>

          </div>
        </Reveal>

        {/* STATS */}

        <div className="impact-stats-grid">

          {impactStats.map((item, index) => (

            <Reveal key={index}>

              <div className="impact-stat-card">

                <CountUp
                  end={item.number}
                  suffix={item.suffix}
                />

                <p>{item.label}</p>

              </div>

            </Reveal>

          ))}

        </div>

        {/* STORY MARQUEE */}

        <Reveal>
          <div className="impact-story-header">

            <h2>
              Stories of Change
            </h2>

            <p>
              Moments that reflect growth, empowerment, and transformation.
            </p>

          </div>
        </Reveal>

        <div className="marquee">

          <div className="marquee-track">

            {[...stories, ...stories].map((item, index) => (

              <div
                className="story-card"
                key={index}
              >

                <img
                  src={item.image}
                  alt=""
                />

                <div className="story-overlay">

                  <h3>
                    {item.title}
                  </h3>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* TIMELINE */}

        <div className="timeline-section">

          <Reveal>
            <h2 className="timeline-title">
              Our Growth Journey
            </h2>
          </Reveal>

          <div className="timeline">

            <Reveal>
              <div className="timeline-item">
                <span>2021</span>
                <h3>Started Community Programs</h3>
                <p>
                  Initiated skill development workshops for local youth.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="timeline-item">
                <span>2022</span>
                <h3>Expanded Digital Literacy</h3>
                <p>
                  Introduced technology-based education programs for students.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="timeline-item">
                <span>2023</span>
                <h3>Reached 10,000+ Lives</h3>
                <p>
                  Empowered communities through sustainable initiatives.
                </p>
              </div>
            </Reveal>

          </div>

        </div>

        {/* TESTIMONIALS */}

        <div className="testimonial-section">

          <Reveal>
            <div className="testimonial-heading">

              <span>Community Voices</span>

              <h2>
                What People Say
              </h2>

            </div>
          </Reveal>

          <div className="testimonial-grid">

            {testimonials.map((item, index) => (

              <Reveal key={index}>

                <div className="testimonial-card">

                  <p>
                    “{item.text}”
                  </p>

                  <div className="testimonial-user">

                    <img
                      src={item.image}
                      alt=""
                    />

                    <div>

                      <h4>
                        {item.name}
                      </h4>

                      <span>
                        {item.role}
                      </span>

                    </div>

                  </div>

                </div>

              </Reveal>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
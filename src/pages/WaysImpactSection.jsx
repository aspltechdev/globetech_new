// // VolunteerImpactExperience.jsx

// import React, { useEffect, useRef } from "react";
// import "./WaysImpactSection.css";
// import { FaArrowRight } from "react-icons/fa";

// const stories = [
//   {
//     title: "A Child’s Future Changed Forever",
//     text: "One volunteer introduced digital education to a rural classroom. Today, dozens of children are learning technology for the very first time.",
//     image:
//       "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1400&auto=format&fit=crop",
//   },

//   {
//     title: "Communities Learning Together",
//     text: "From education drives to awareness programs, every initiative creates stronger, more connected communities.",
//     image:
//       "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop",
//   },

//   {
//     title: "Women Building Independent Lives",
//     text: "Skill development and mentorship programs are helping women create sustainable careers and financial independence.",
//     image:
//       "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1400&auto=format&fit=crop",
//   },
// ];

// const Reveal = ({ children }) => {
//   const ref = useRef();

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           ref.current.classList.add("active");
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (ref.current) observer.observe(ref.current);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div ref={ref} className="reveal">
//       {children}
//     </div>
//   );
// };

// export default function WaysImpactSection() {
//   return (
//     <section className="impact-experience">

//       {/* FLOATING BACKGROUND */}

//       <div className="blur-circle one"></div>
//       <div className="blur-circle two"></div>

//       <div className="impact-container">

//         {/* INTRO */}

//         <Reveal>
//           <div className="intro-section">

//             {/* <span className="mini-tag">
//               VOLUNTEER EXPERIENCE
//             </span> */}

//             <h1>
//               People Don’t Join
//               <span> NGOs.</span>
//               <br />
//               They Join
//               <span> Purpose.</span>
//             </h1>

//             <p>
//               Every action creates a ripple effect.
//               Every volunteer becomes part of a story bigger
//               than themselves. This is where compassion becomes impact.
//             </p>

//           </div>
//         </Reveal>

//         {/* IMMERSIVE STORY BLOCKS */}

//         <div className="story-wrapper">

//           {stories.map((item, index) => (

//             <Reveal key={index}>

//               <div
//                 className={`story-block ${
//                   index % 2 === 0 ? "" : "reverse"
//                 }`}
//               >

//                 {/* IMAGE */}

//                 <div className="story-image">

//                   <img
//                     src={item.image}
//                     alt={item.title}
//                   />

//                   <div className="image-overlay"></div>

//                   {/* FLOATING QUOTE */}

//                   <div className="floating-quote">
//                     “Real impact begins with small acts of kindness.”
//                   </div>

//                 </div>

//                 {/* CONTENT */}

//                 <div className="story-content">

//                   <div className="story-line"></div>

//                   <h2>{item.title}</h2>

//                   <p>{item.text}</p>

//                   <button>
//                     Become A Volunteer
//                     <FaArrowRight />
//                   </button>

//                 </div>

//               </div>

//             </Reveal>

//           ))}

//         </div>

//         {/* EMOTIONAL CTA */}

//         <Reveal>

//           <div className="emotion-cta">

//             <div className="emotion-image">

//               <img
//                 src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1400&auto=format&fit=crop"
//                 alt=""
//               />

//             </div>

//             <div className="emotion-content">

//               <span>JOIN THE MOVEMENT</span>

//               <h2>
//                 Your Time Can
//                 Change Someone’s
//                 Entire Life
//               </h2>

//               <p>
//                 Whether you teach, mentor, organize,
//                 support, or simply care — your presence
//                 can create opportunities and hope for people
//                 who truly need it.
//               </p>

//               {/* STATS */}

//               <div className="impact-stats">

//                 <div className="stat-box">
//                   <h3>12K+</h3>
//                   <p>Lives Impacted</p>
//                 </div>

//                 <div className="stat-box">
//                   <h3>450+</h3>
//                   <p>Volunteers</p>
//                 </div>

//                 <div className="stat-box">
//                   <h3>80+</h3>
//                   <p>Programs</p>
//                 </div>

//               </div>

//               <button className="join-btn">
//                 Start Your Journey
//                 <FaArrowRight />
//               </button>

//             </div>

//           </div>

//         </Reveal>

//       </div>
//     </section>
//   );
// }

// VolunteerImpactSection.jsx

import React, { useEffect, useRef } from "react";

import {
  ArrowRight,
  HeartHandshake,
  Users,
  GraduationCap,
} from "lucide-react";

import "./WaysImpactSection.css";

const stories = [
  {
    title: "Women Empowerment",
    text:
      "Skill development and mentorship programs helping women build sustainable careers.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Digital Education",
    text:
      "Volunteers introduced technology learning to underserved rural communities.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Community Growth",
    text:
      "Awareness programs and education drives creating stronger communities.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
];

const stats = [
  {
    number: "25K+",
    label: "Lives Impacted",
    icon: <HeartHandshake size={22} />,
  },

  {
    number: "850+",
    label: "Active Volunteers",
    icon: <Users size={22} />,
  },

  {
    number: "120+",
    label: "Education Programs",
    icon: <GraduationCap size={22} />,
  },
];

const Reveal = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("show");
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="fade-up"
    >
      {children}
    </div>
  );
};

export default function WaysImpactSection() {
  return (
    <section className="volunteer-section">

      <div className="glow glow1"></div>
      <div className="glow glow2"></div>

      <div className="volunteer-container">

        {/* INTRO */}

        <Reveal>

          <div className="volunteer-intro">

            {/* <span>
              Volunteer Impact
            </span> */}

            <h1>
              People Join Purpose,
              Not Just Organizations
            </h1>

            <p>
              Every volunteer becomes part of a movement focused on
              education, empowerment, and sustainable community change.
            </p>

          </div>

        </Reveal>

        {/* STORY GRID */}

        <div className="story-grid">

          {stories.map((item, index) => (

            <Reveal key={index}>

              <div className="story-card">

                <div className="story-image">

                  <img
                    src={item.image}
                    alt=""
                  />

                </div>

                <div className="story-content">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                  <button>
                    Learn More
                    <ArrowRight size={16} />
                  </button>

                </div>

              </div>

            </Reveal>

          ))}

        </div>

        {/* IMPACT BANNER */}

        <Reveal>

          <div className="impact-banner">

            <div className="impact-banner-image">

              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1400&auto=format&fit=crop"
                alt=""
              />

            </div>

            <div className="impact-banner-content">

              <span>
                Join The Movement
              </span>

              <h2>
                Your Time Can Change
                Someone’s Entire Future
              </h2>

              <p>
                Whether you mentor, teach, organize, or support —
                your contribution creates opportunities and hope
                for communities that truly need it.
              </p>

              <button className="join-btn">
                Become A Volunteer
                <ArrowRight size={18} />
              </button>

            </div>

          </div>

        </Reveal>

        {/* STATS */}

    

      </div>
    </section>
  );
}
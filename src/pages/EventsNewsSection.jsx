// // ImmersiveEventsCarousel.jsx

// import React, { useEffect, useState } from "react";
// import "./EventsNewsSection.css";

// import {
//   FaArrowRight,
//   FaCalendarAlt,
// } from "react-icons/fa";

// const events = [
//   {
//     title: "Future Education Summit",
//     category: "Education",
//     date: "12 AUG 2025",
//     image:
//       "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1400&auto=format&fit=crop",
//   },

//   {
//     title: "Youth Leadership Program",
//     category: "Leadership",
//     date: "16 AUG 2025",
//     image:
//       "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop",
//   },

//   {
//     title: "Women Empowerment Drive",
//     category: "Community",
//     date: "20 AUG 2025",
//     image:
//       "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1400&auto=format&fit=crop",
//   },

//   {
//     title: "Digital Literacy Camp",
//     category: "Technology",
//     date: "24 AUG 2025",
//     image:
//       "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1400&auto=format&fit=crop",
//   },

//   {
//     title: "Green Earth Initiative",
//     category: "Environment",
//     date: "28 AUG 2025",
//     image:
//       "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1400&auto=format&fit=crop",
//   },

//   {
//     title: "Healthcare Mission",
//     category: "Healthcare",
//     date: "02 SEP 2025",
//     image:
//       "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1400&auto=format&fit=crop",
//   },
// ];

// export default function EventsNewsSection() {

//   const [active, setActive] = useState(0);

//   /* AUTO SLIDE */

//   useEffect(() => {

//     const interval = setInterval(() => {

//       setActive((prev) =>
//         prev === events.length - 1
//           ? 0
//           : prev + 1
//       );

//     }, 3500);

//     return () => clearInterval(interval);

//   }, []);

//   return (
//     <section className="immersive-events">

//       {/* BACKGROUND */}

//       <div className="ambient ambient-one"></div>
//       <div className="ambient ambient-two"></div>

//       <div className="immersive-container">

//         {/* HEADER */}

//         <div className="immersive-header">

//           <div>

         
//   <span className="immersive-badge">
//               EVENTS & STORIES
//             </span>

//             <h2>
//             Inspiring Experiences
//               {/* <span> Move People</span> */}
//             </h2>

//           </div>

        

//         </div>

//         {/* CAROUSEL */}

//         <div className="carousel-stage">

//           {events.map((item, index) => {

//             let position = index - active;

//             if (position < -1)
//               position += events.length;

//             if (position > 1)
//               position -= events.length;

//             return (

//               <div
//                 key={index}
//                 className={`immersive-card position-${position}`}
//               >

//                 {/* IMAGE */}

//                 <div className="immersive-image">

//                   <img
//                     src={item.image}
//                     alt={item.title}
//                   />

//                   <div className="immersive-overlay"></div>

//                   <span className="immersive-category">
//                     {item.category}
//                   </span>

//                 </div>

//                 {/* CONTENT */}

//                 <div className="immersive-content">

//                   <div className="immersive-date">

//                     <FaCalendarAlt />

//                     <span>{item.date}</span>

//                   </div>

//                   <h3>{item.title}</h3>

//                   <p>
//                     Discover inspiring stories and
//                     impactful initiatives transforming
//                     lives and communities.
//                   </p>

//                   <button>

//                     Explore Story

//                     <FaArrowRight />

//                   </button>

//                 </div>

//               </div>

//             );
//           })}

//         </div>

//       </div>

//     </section>
//   );
// }

















// EventsNewsSection.jsx

import React, { useEffect, useState } from "react";
import "./EventsNewsSection.css";

import {
  FaArrowRight,
  FaCalendarAlt,
  FaArrowLeft,
} from "react-icons/fa";

const events = [
  {
    title: "Future Education Summit",
    category: "Education",
    date: "12 AUG 2025",
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1400&auto=format&fit=crop",
  },

  {
    title: "Youth Leadership Program",
    category: "Leadership",
    date: "16 AUG 2025",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop",
  },

  {
    title: "Women Empowerment Drive",
    category: "Community",
    date: "20 AUG 2025",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1400&auto=format&fit=crop",
  },

  {
    title: "Digital Literacy Camp",
    category: "Technology",
    date: "24 AUG 2025",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1400&auto=format&fit=crop",
  },

  {
    title: "Green Earth Initiative",
    category: "Environment",
    date: "28 AUG 2025",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1400&auto=format&fit=crop",
  },

  {
    title: "Healthcare Mission",
    category: "Healthcare",
    date: "02 SEP 2025",
    image:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1400&auto=format&fit=crop",
  },
];

export default function EventsNewsSection() {

  const [active, setActive] = useState(0);

  /* =========================
     AUTO SLIDE
  ========================= */

  useEffect(() => {

    const interval = setInterval(() => {

      setActive((prev) =>
        prev === events.length - 1
          ? 0
          : prev + 1
      );

    }, 3500);

    return () => clearInterval(interval);

  }, []);

  /* =========================
     NEXT
  ========================= */

  const nextSlide = () => {

    setActive((prev) =>
      prev === events.length - 1
        ? 0
        : prev + 1
    );

  };

  /* =========================
     PREV
  ========================= */

  const prevSlide = () => {

    setActive((prev) =>
      prev === 0
        ? events.length - 1
        : prev - 1
    );

  };

  return (
    <section className="immersive-events">

      {/* BACKGROUND */}

      <div className="ambient ambient-one"></div>
      <div className="ambient ambient-two"></div>

      <div className="immersive-container">

        {/* HEADER */}

        <div className="immersive-header">

          <div>

            

         <h2>   Events & Stories </h2>

          </div>

          {/* NAVIGATION */}

          <div className="carousel-navigation">

            <button
              className="carousel-btn"
              onClick={prevSlide}
            >
              <FaArrowLeft />
            </button>

            <button
              className="carousel-btn"
              onClick={nextSlide}
            >
              <FaArrowRight />
            </button>

          </div>

        </div>

        {/* CAROUSEL */}

        <div className="carousel-stage">

          {events.map((item, index) => {

            let position = index - active;

            if (position < -1)
              position += events.length;

            if (position > 1)
              position -= events.length;

            return (

              <div
                key={index}
                className={`immersive-card position-${position}`}
              >

                {/* IMAGE */}

                <div className="immersive-image">

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  <div className="immersive-overlay"></div>

                  <span className="immersive-category">
                    {item.category}
                  </span>

                </div>

                {/* CONTENT */}

                <div className="immersive-content">

                  <div className="immersive-date">

                    <FaCalendarAlt />

                    <span>{item.date}</span>

                  </div>

                  <h3>{item.title}</h3>

                  <p>
                    Discover inspiring stories and
                    impactful initiatives transforming
                    lives and communities.
                  </p>

                  <button>

                    Explore Story

                    <FaArrowRight />

                  </button>

                </div>

              </div>

            );
          })}

        </div>

      </div>

    </section>
  );
}
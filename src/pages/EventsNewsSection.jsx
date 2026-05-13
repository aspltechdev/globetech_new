// // EventsNewsSection.jsx

// import React, { useRef } from "react";
// import "./EventsNewsSection.css";

// import {
//   FaArrowLeft,
//   FaArrowRight,
// } from "react-icons/fa6";

// import img1 from "./../assets/about-1.jpg";
// import img2 from "./../assets/about-2.jpg";
// import img3 from "./../assets/about-1.jpg";
// import img4 from "./../assets/about-2.jpg";
// import img5 from "./../assets/about-1.jpg";

// const EventsNewsSection = () => {

//   const sliderRef = useRef(null);

//   const scrollLeft = () => {
//     sliderRef.current.scrollBy({
//       left: -320,
//       behavior: "smooth",
//     });
//   };

//   const scrollRight = () => {
//     sliderRef.current.scrollBy({
//       left: 320,
//       behavior: "smooth",
//     });
//   };

//   const cards = [
//     img1,
//     img2,
//     img3,
//     img4,
//     img5,
//   ];

//   return (
//     <section className="events-news-main-section">

//       <div className="events-news-container">

//         {/* HEADER */}
//         <div className="events-news-header">

//           <h2>
//             Events and News
//           </h2>

//           {/* NAVIGATION */}
//           <div className="events-news-nav-buttons">

//             <button onClick={scrollLeft}>
//               <FaArrowLeft />
//             </button>

//             <button onClick={scrollRight}>
//               <FaArrowRight />
//             </button>

//           </div>

//         </div>

//         {/* SLIDER */}
//         <div
//           className="events-news-slider-wrapper"
//           ref={sliderRef}
//         >

//           {cards.map((image, index) => (
//             <div
//               className={`events-news-card ${
//                 index === 2 ? "active-card" : ""
//               }`}
//               key={index}
//             >

//               <img
//                 src={image}
//                 alt="Events"
//               />

//               {/* OVERLAY */}
//               <div className="events-news-overlay">

//                 <div className="events-news-overlay-content">

//                   <span>
//                     Community Event
//                   </span>

//                   <h3>
//                     Creating Better Futures
//                   </h3>

//                 </div>

//               </div>

//             </div>
//           ))}

//         </div>

//       </div>

//     </section>
//   );
// };

// export default EventsNewsSection;






// EventsNewsSection.jsx

import React, { useRef } from "react";
import "./EventsNewsSection.css";

import {
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa6";

const EventsNewsSection = () => {

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

  const cards = [
    {
      image:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop",
    },

    {
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
    },

    {
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
    },

    {
      image:
        "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop",
    },

    {
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="events-news-main-section">

      <div className="events-news-container">

        {/* HEADER */}
        <div className="events-news-header">

          <h2>
            Events and News
          </h2>

          {/* NAV BUTTONS */}
          <div className="events-news-nav-buttons">

            <button onClick={scrollLeft}>
              <FaArrowLeft />
            </button>

            <button onClick={scrollRight}>
              <FaArrowRight />
            </button>

          </div>

        </div>

        {/* SLIDER */}
        <div
          className="events-news-slider-wrapper"
          ref={sliderRef}
        >

          {cards.map((card, index) => (
            <div
              className={`events-news-card ${
                index === 2 ? "active-card" : ""
              }`}
              key={index}
            >

              <img
                src={card.image}
                alt="Events"
              />

              {/* OVERLAY */}
              <div className="events-news-overlay">

                <div className="events-news-overlay-content">

                  <span>
                    Community Event
                  </span>

                  <h3>
                    Creating Better Futures
                  </h3>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default EventsNewsSection;
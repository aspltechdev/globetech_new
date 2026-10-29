// // TestimonialSection.jsx

import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Quote,
  Sparkles,
  Star,
} from "lucide-react";

import "./TestimonialSection.css";

/* =========================================================
   TOP TESTIMONIALS
========================================================= */

const testimonialsTop = [

  {
    name: "Vignesh Jayapalan",

    role:
      "Assistant Manager - Bosch Design R&D",

    text:
      "Globetech provided exceptional training programs matching real industrial requirements and practical workflows.",
  },

  {
    name: "Manjunatha",

    role:
      "Toyota Group, Bangalore",

    text:
      "Perfect place for learning and development. The mentorship and practical guidance were extremely professional.",
  },

  {
    name: "Supreeth S Bhat",

    role:
      "Networking Engineer DXC Technologies",

    text:
      "One of the best institutes for practical exposure, project guidance, and industry-ready development training.",
  },

];

/* =========================================================
   BOTTOM TESTIMONIALS
========================================================= */

const testimonialsBottom = [

  {
    name: "Prashanth Gowda",

    role:
      "Coordinator, DBSDC",

    text:
      "Excellent collaboration and placement support helping students gain confidence and opportunities.",
  },

  {
    name: "Krishnaraj Upadhya",

    role:
      "Bangalore",

    text:
      "Highly supportive trainers with practical sessions that truly improved career readiness.",
  },

  {
    name: "Shriyans Jain",

    role:
      "Chairman, SD-EDP KASSIA",

    text:
      "A strong finishing school for engineering students with real industry-focused learning programs.",
  },

];

/* =========================================================
   CARD
========================================================= */

const TestimonialCard = ({
  item,
}) => {

  return (

    <div className="testimonialCard">

      {/* GLOW */}

      <div className="testimonialGlow"></div>

      {/* QUOTE */}

      <div className="testimonialQuote">

        <Quote size={24} />

      </div>

      {/* STARS */}

      <div className="testimonialStars">

        {[1, 2, 3, 4, 5]
          .map((star) => (

            <Star
              key={star}
              size={16}
              fill="#FFC700"
              color="#FFC700"
            />

          ))}

      </div>

      {/* TEXT */}

      <p>

        {item.text}

      </p>

      {/* PROFILE */}

      <div className="testimonialProfile">

        <div className="testimonialAvatar">

          {item.name.charAt(0)}

        </div>

        <div>

          <h3>

            {item.name}

          </h3>

          <span>

            {item.role}

          </span>

        </div>

      </div>

    </div>

  );
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

const TestimonialSection = () => {

  const sectionRef = useRef(null);

  const [visible, setVisible] =
    useState(false);

  /* =========================================================
     SCROLL ANIMATION
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
          threshold: 0.12,
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
      className="testimonialSection"
      ref={sectionRef}
    >

      {/* =========================================================
          GLOW
      ========================================================= */}

      <div className="testimonialBgGlow"></div>

      {/* =========================================================
          CONTAINER
      ========================================================= */}

      <div className="testimonialContainer">

        {/* =========================================================
            HEADING
        ========================================================= */}

        <div
          className={
            visible
              ? "testimonialHeading showTestimonialHeading"
              : "testimonialHeading"
          }
        >

        

          <h2>

            Voices Of
       

            Transformation
         

            & Trust.

          </h2>

          <p>

            Real stories and feedback from
            students, industry professionals,
            mentors, and organizations who
            experienced impactful learning
            and career transformation.

          </p>

        </div>

        {/* =========================================================
            TOP SLIDER
        ========================================================= */}

        <div className="testimonialSliderWrapper">

          <div className="testimonialTrack moveRight">

            {[...testimonialsTop,
              ...testimonialsTop]
              .map((item, index) => (

                <TestimonialCard
                  key={index}
                  item={item}
                />

              ))}

          </div>

        </div>

        {/* =========================================================
            BOTTOM SLIDER
        ========================================================= */}

        <div className="testimonialSliderWrapper secondRow">

          <div className="testimonialTrack moveLeft">

            {[...testimonialsBottom,
              ...testimonialsBottom]
              .map((item, index) => (

                <TestimonialCard
                  key={index}
                  item={item}
                />

              ))}

          </div>

        </div>

      </div>

    </section>

  );
};

export default TestimonialSection;
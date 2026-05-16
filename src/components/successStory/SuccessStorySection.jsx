// SuccessStorySection.jsx

import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Sparkles,
} from "lucide-react";

import "./SuccessStorySection.css";

/* =========================================================
   STORIES DATA
========================================================= */

const stories = [

  {
    id: 1,

    name: "Priya Sharma",

    role: "Backend Developer",

    image:
      "https://plus.unsplash.com/premium_photo-1723568666044-1b066e26b1fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVzdGltb25pYWwlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D",

    quote:
      "Globetech gave me not just skills but the confidence to dream big.",

    before:
      "Fresh graduate struggling with employment and lacking technical exposure.",

    journey:
      "Joined a 6-month Full Stack Development program with mentorship and real-world projects.",

    today:
      "Placed as a Backend Developer at TCS with a ₹4.5 LPA package.",
  },

  {
    id: 2,

    name: "Karthick",

    role: "Product Designer",

    image:
      "https://images.unsplash.com/photo-1649738463288-fc499fe96608?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVzdGltb25pYWwlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D",

    quote:
      "The mentorship and practical exposure transformed my confidence and career.",

    before:
      "No portfolio guidance and limited confidence in interviews.",

    journey:
      "Completed UI/UX mentorship with portfolio and live client projects.",

    today:
      "Now working as a Product Designer in a fast-growing startup.",
  },

  {
    id: 3,

    name: "Sneha Verma",

    role: "Frontend Developer",

    image:
      "https://images.unsplash.com/photo-1658724684973-8791f6bc1206?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHRlc3RpbW9uaWFsJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D",

    quote:
      "I transformed from a beginner into a confident developer through practical learning.",

    before:
      "Rural background with financial challenges and no technical exposure.",

    journey:
      "Received mentorship, mock interviews, and real-world project experience.",

    today:
      "Placed as a Software Developer and now supporting her family.",
  },

];

const SuccessStorySection = () => {

  const [current, setCurrent] =
    useState(0);

  const [showContent, setShowContent] =
    useState(false);

  const sectionRef = useRef(null);

  /* =========================================================
     NEXT
  ========================================================= */

  const nextSlide = () => {

    setCurrent(
      (prev) =>
        (prev + 1) % stories.length
    );

  };

  /* =========================================================
     PREV
  ========================================================= */

  const prevSlide = () => {

    setCurrent(
      (prev) =>

        prev === 0
          ? stories.length - 1
          : prev - 1

    );

  };

  /* =========================================================
     AUTO SLIDE
  ========================================================= */

  useEffect(() => {

    const auto =
      setInterval(() => {

        nextSlide();

      }, 7000);

    return () =>
      clearInterval(auto);

  }, []);

  /* =========================================================
     SCROLL ANIMATION
  ========================================================= */

  useEffect(() => {

    const observer =
      new IntersectionObserver(

        ([entry]) => {

          if (entry.isIntersecting) {

            setShowContent(true);

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
      className="successSection"
      ref={sectionRef}
    >

      {/* GLOW */}

      <div className="successGlowOne"></div>

      <div className="successGlowTwo"></div>

      {/* =========================================================
          CONTAINER
      ========================================================= */}

      <div className="successContainer">

        {/* =========================================================
            HEADING
        ========================================================= */}

        <div
          className={
            showContent
              ? "successHeading showSuccessHeading"
              : "successHeading"
          }
        >

        

          <h2>

            Transforming
          

            Lives Through
           

            Opportunities.

          </h2>

          <p>

            Real journeys of students and
            communities empowered through
            skills, mentorship, and career
            opportunities.

          </p>

        </div>

        {/* =========================================================
            SLIDER
        ========================================================= */}

        <div className="successSliderWrapper">

          <div
            className="successSlider"
            style={{
              transform:
                `translateX(-${current * 100}%)`,
            }}
          >

            {stories.map((story) => (

              <div
                className="successSlide"
                key={story.id}
              >

                {/* =========================================================
                    LEFT
                ========================================================= */}

                <div
                  className={
                    showContent
                      ? "successLeft showSuccessLeft"
                      : "successLeft"
                  }
                >

                  {/* IMAGE */}

                  <div className="successImageCard">

                    <img
                      src={story.image}
                      alt={story.name}
                    />

                    <div className="successOverlay"></div>

                    {/* QUOTE */}

                    <div className="successQuoteCard">

                      <Quote size={28} />

                      <p>

                        {story.quote}

                      </p>

                    </div>

                  </div>

                  {/* PROFILE */}

                  <div className="successProfile">

                    <div>

                      <h3>

                        {story.name}

                      </h3>

                      <span>

                        {story.role}

                      </span>

                    </div>

                    {/* NAV */}

                    <div className="successNav">

                      <button
                        onClick={prevSlide}
                      >

                        <ArrowLeft
                          size={18}
                        />

                      </button>

                      <button
                        onClick={nextSlide}
                      >

                        <ArrowRight
                          size={18}
                        />

                      </button>

                    </div>

                  </div>

                </div>

                {/* =========================================================
                    RIGHT
                ========================================================= */}

                <div
                  className={
                    showContent
                      ? "successRight showSuccessRight"
                      : "successRight"
                  }
                >

                  {/* CARD */}

                  <div className="storyCard beforeCard">

                    <span>
                      BEFORE
                    </span>

                    <h3>

                      The Challenge

                    </h3>

                    <p>

                      {story.before}

                    </p>

                  </div>

                  {/* CARD */}

                  <div className="storyCard journeyCard">

                    <span>
                      JOURNEY
                    </span>

                    <h3>

                      The Transformation

                    </h3>

                    <p>

                      {story.journey}

                    </p>

                  </div>

                  {/* CARD */}

                  <div className="storyCard todayCard">

                    <span>
                      TODAY
                    </span>

                    <h3>

                      The Outcome

                    </h3>

                    <p>

                      {story.today}

                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  );
};

export default SuccessStorySection;
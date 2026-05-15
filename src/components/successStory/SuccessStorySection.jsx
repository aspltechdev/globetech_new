// SuccessStorySection.jsx

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

/* =========================================
   STORIES DATA
========================================= */

const stories = [

  {
    id: 1,

    name: "Priya Sharma",

    role: "Backend Developer",

    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",

    quote:
      "Globetech gave me not just skills but the confidence to dream big. Today, I’m working at my dream company!",

    before:
      "Fresh graduate with a BCom degree, struggling to find employment. Limited technical skills and no industry exposure.",

    journey:
      "Enrolled in Globetech's 6-month Full Stack Development program. Worked on real-world projects and mock interviews.",

    today:
      "Placed as a Backend Developer at TCS with a starting package of ₹4.5 LPA.",
  },

  {
    id: 2,

    name: "Karthick",

    role: "Designer",

    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",

    quote:
      "The mentorship and practical exposure helped me become industry-ready and confident in my career journey.",

    before:
      "Completed college without proper portfolio guidance and lacked confidence in interviews.",

    journey:
      "Joined UI/UX training program with mentorship, portfolio building and live client projects.",

    today:
      "Now working as a Product Designer in a leading startup with strong career growth.",
  },

  {
    id: 3,

    name: "Sneha Verma",

    role: "Frontend Developer",

    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",

    quote:
      "I transformed from a beginner to a professional developer through hands-on learning and mentorship.",

    before:
      "Fresh graduate with a BCom degree, struggling to find employment. Limited technical skills and no industry exposure. Coming from a rural background with financial constraints.",

    journey:
      "Enrolled in Globetech's 6-month Full Stack Development program. Received hands-on training, mentorship, and career guidance. Worked on real-world projects and participated in mock interviews.",

    today:
      "Successfully placed as a Software Developer at TCS with a starting package of ₹4.5 LPA. Supporting her family and inspiring others in her community to purue tech careers.",
  },

];

const SuccessStorySection = () => {

  const [current, setCurrent] = useState(0);

  const sectionRef = useRef(null);

  const [showContent, setShowContent] = useState(false);

  /* =========================================
     NEXT
  ========================================= */

  const nextSlide = () => {

    setCurrent(
      (prev) => (prev + 1) % stories.length
    );

  };

  /* =========================================
     PREV
  ========================================= */

  const prevSlide = () => {

    setCurrent(
      (prev) =>
        prev === 0
          ? stories.length - 1
          : prev - 1
    );

  };

  /* =========================================
     SCROLL ANIMATION
  ========================================= */

  useEffect(() => {

    const observer = new IntersectionObserver(

      ([entry]) => {

        if (entry.isIntersecting) {

          setShowContent(true);

        }

      },

      {
        threshold: 0.2,
      }

    );

    if (sectionRef.current) {

      observer.observe(sectionRef.current);

    }

    return () => observer.disconnect();

  }, []);

  return (

    <section
      className="auroSuccessSection"
      ref={sectionRef}
    >

      <div className="auroSuccessContainer">

        {/* =====================================
            HEADING
        ===================================== */}

        <div className="auroSuccessHeading">

          <div className="auroSuccessTag">

            <p>
              Real Impact Story
            </p>

            <span></span>


          </div>

          <h2>
            How Globetech transforms lives through skill development
          </h2>

        </div>

        {/* =====================================
            SLIDER WRAPPER
        ===================================== */}

        <div className="auroSuccessWrapper">

          <div
            className="auroSuccessSlider"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >

            {stories.map((story) => (

              <div
                className="auroSuccessSlide"
                key={story.id}
              >

                {/* =====================================
                    LEFT
                ===================================== */}

                <div
                  className={`auroSuccessLeft ${showContent
                      ? "show-success-left"
                      : ""
                    }`}
                >

                  {/* TOP */}

                  <div className="auroSuccessTitleRow">

                    <div>

                      <h3>
                        {story.name}
                      </h3>


                      <h4>
                        {story.role}
                      </h4>

                    </div>


                    {/* NAVIGATION */}
  <div className="auroSuccessNav">

                  <button onClick={prevSlide}>

                    <ArrowLeft size={18} />

                  </button>

                  <button onClick={nextSlide}>

                    <ArrowRight size={18} />

                  </button>

                </div>


                  </div>

                  {/* IMAGE CARD */}

                  <div className="auroSuccessImageCard">

                    <img
                      src={story.image}
                      alt={story.name}
                    />

                    <div className="auroSuccessOverlay"></div>

                    <div className="auroSuccessQuote">

                      "{story.quote}"

                    </div>

                  </div>

                </div>

                {/* =====================================
                    RIGHT
                ===================================== */}
              
                <div
                  className={`auroSuccessRight ${showContent
                      ? "show-success-right"
                      : ""
                    }`}
                >

                  {/* CARD */}


                  <div className="auroTimelineCard redBorder">

                    <h3>
                      Before Globetech
                    </h3>

                    <p>
                      {story.before}
                    </p>

                  </div>

                  {/* CARD */}

                  <div className="auroTimelineCard yellowBorder">

                    <h3>
                      The Journey
                    </h3>

                    <p>
                      {story.journey}
                    </p>

                  </div>

                  {/* CARD */}

                  <div className="auroTimelineCard greenBorder">

                    <h3>
                      Today
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



<div className="auroSuccessBtnWrapper">

  <button className="auroViewMoreBtn">

    View More

  </button>

</div>


      </div>


    </section>

  );
};

export default SuccessStorySection;
// CareerSection.jsx

import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

import career1 from "../../assets/career-1.png";
import career2 from "../../assets/career-2.png";
import career3 from "../../assets/career-3.png";
import career4 from "../../assets/career-4.png";

import "./CareerSection.css";
import { Link } from "react-router-dom";

/* =========================================================
   DATA
========================================================= */

const careerData = [

  {
    id: 1,

    title: "Industry Visits",

    description:
      "Students gain real-world exposure through industrial and corporate learning experiences.",

    image: career2,
  },

  {
    id: 2,

    title: "Hands-On Workshops",

    description:
      "Interactive technical workshops conducted by experienced mentors and professionals.",

    image: career1,
  },

  {
    id: 3,

    title: "Internships",

    description:
      "Practical opportunities helping students transition into real work environments.",

    image: career3,
  },

  {
    id: 4,

    title: "Job Drives",

    description:
      "Career opportunities and placement initiatives connecting talent with industries.",

    image: career4,
  },

];

const CareerSection = () => {

  const sectionRef = useRef(null);

  const [visible, setVisible] =
    useState(false);

  /* =========================================================
     SCROLL REVEAL
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

          rootMargin:
            "0px 0px -80px 0px",
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
      className="careerSection"
      ref={sectionRef}
    >

      {/* =========================================================
          BACKGROUND GLOW
      ========================================================= */}

      <div className="careerBgGlow"></div>

      {/* =========================================================
          CONTAINER
      ========================================================= */}

      <div className="careerContainer">

        {/* =========================================================
            LEFT CONTENT
        ========================================================= */}

        <div
          className={
            visible
              ? "careerLeft showCareerLeft"
              : "careerLeft"
          }
        >

          {/* BADGE */}

     

          {/* TITLE */}

          <h2>

            Building
            <br />

            Future Ready
            <br />

            Careers.

          </h2>

          {/* DESCRIPTION */}

          <p>

   Empowering students and youth through practical exposure and hands-on learning experiences.
Providing workshops, internships, mentorship, and skill development opportunities to bridge the gap between education and industry.
Helping young minds build confidence, gain real-world experience, and unlock successful career opportunities.
          </p>

          {/* BUTTON */}
<Link to="/programs">
          <button className="careerMainBtn">

            Explore Programs

            <span>

              <ArrowRight size={16} />

            </span>

          </button>
          </Link>

        </div>

        {/* =========================================================
            RIGHT TIMELINE
        ========================================================= */}

        <div className="careerTimeline">

          {careerData.map(
            (item, index) => (

              <div
                key={item.id}

                className={
                  visible
                    ? "careerStep showCareerStep"
                    : "careerStep"
                }

                style={{
                  transitionDelay:
                    `${index * 220}ms`,
                }}
              >

             

                {index !==
                  careerData.length - 1 && (

                  <div className="careerLine"></div>

                )}

                {/* IMAGE */}

                <div className="careerImageWrapper">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="careerImage"
                  />

                  <div className="careerImageOverlay"></div>

                </div>

                {/* CONTENT */}

                <div className="careerStepContent">

                  {/* <span>

                    0{item.id}

                  </span> */}

                  <h3>

                    {item.title}

                  </h3>

                  <p>

                    {item.description}

                  </p>

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </section>
  );
};

export default CareerSection;
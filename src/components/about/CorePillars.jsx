



// CorePillars.jsx

import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  ArrowUpRight,
} from "lucide-react";

import "./CorePillars.css";

import pillar1 from "../../assets/pillar-1.png";
import pillar2 from "../../assets/pillar-2.png";
import pillar3 from "../../assets/pillar-3.png";
import pillar4 from "../../assets/pillar-4.png";
import pillar5 from "../../assets/pillar-5.png";
import { Link } from "react-router-dom";

/* =====================================================
   DATA
===================================================== */

const pillars = [

  {
    image: pillar1,

    number: "01",

    title:
      "Education & Skill Development",

    description:
      "Creating accessible learning opportunities and practical skill development programs for communities.",
  },

  {
    image: pillar2,

    number: "02",

    title:
      "Health & Community Well-Being",

    description:
      "Improving community wellness through awareness programs and healthcare initiatives.",
  },

  {
    image: pillar3,

    number: "03",

    title:
      "Environmental Sustainability",

    description:
      "Promoting sustainable practices and environmental awareness for future generations.",
  },

  {
    image: pillar4,

    number: "04",

    title:
      "Women & Child Empowerment",

    description:
      "Supporting women and children through education and empowerment initiatives.",
  },

  {
    image: pillar5,

    number: "05",

    title:
      "Community Development",

    description:
      "Building stronger communities through sustainable social impact initiatives.",
  },

];

export default function CorePillars() {

  const sectionRef = useRef(null);

  const [showCards, setShowCards] =
    useState(false);

  /* =====================================================
     SCROLL ANIMATION
  ===================================================== */

  useEffect(() => {

    const observer =
      new IntersectionObserver(

        ([entry]) => {

          if (entry.isIntersecting) {

            setShowCards(true);

          }

        },

        {
          threshold:0.12,
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
      className="modernPillarSection"
      ref={sectionRef}
    >

      {/* =====================================================
          HEADING
      ===================================================== */}

      <div
        className={`modernPillarHeading ${
          showCards
            ? "showModernHeading"
            : ""
        }`}
      >

        <span>

          OUR CORE PILLARS

        </span>

        <h3>

         Empowering Communities with Innovation & Action

        </h3>

      </div>

      {/* =====================================================
          CARDS
      ===================================================== */}

      <div className="modernPillarWrapper">

        {pillars.map((item, index) => (

          <div
            className={`modernPillarCard ${
              showCards
                ? "showModernCard"
                : ""
            }`}
            key={index}

            style={{
              transitionDelay:
                `${index * 140}ms`,
            }}
          >
            

            {/* IMAGE */}

            <img
              src={item.image}
              alt={item.title}
              className="modernPillarBg"
            />

            {/* OVERLAY */}

            <div className="modernPillarOverlay"></div>

            {/* NUMBER */}

            {/* <div className="modernPillarNumber">

              {item.number}

            </div> */}

            {/* CONTENT */}
<Link to="/get-involved" className="pillarLink">
            <div className="modernPillarContent">

              <h3>

                {item.title}

              </h3>
             

              <p>

                {item.description}

              </p>

            </div>
            </Link>

           
            <button className="modernPillarBtn">

              <ArrowUpRight
                size={18}
              />

            </button>
         
          

          </div>

        ))}

      </div>

    </section>

  );
}
// PillarsSection.jsx

import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import "./PillarCard.css";

import img1 from "../../assets/pillar-1.png";
import img2 from "../../assets/pillar-2.png";
import img3 from "../../assets/pillar-3.png";
import img4 from "../../assets/pillar-4.png";
import img5 from "../../assets/pillar-5.png";
import img6 from "../../assets/pillar-5.png";
import { Link } from "react-router-dom";

/* =========================================================
   DATA
========================================================= */

const focusAreas = [

  {
    image: img1,

    title:
      "Education & Digital Literacy",

    description:
      "Providing accessible education and digital learning programs for underserved communities.",
  },

  {
    image: img2,

    title:
      "Skill Development & Training",

    description:
      "Industry-focused training initiatives helping youth build practical career skills.",
  },

  {
    image: img3,

    title:
      "Placement & Career Support",

    description:
      "Connecting individuals with employment opportunities and interview preparation support.",
  },

  {
    image: img4,

    title:
      "Women & Youth Empowerment",

    description:
      "Empowering women and youth through mentorship, leadership, and education programs.",
  },

  {
    image: img5,

    title:
      "Health & Community Wellness",

    description:
      "Improving community wellbeing through healthcare camps and awareness initiatives.",
  },

  {
    image: img6,

    title:
      "Environmental Sustainability",

    description:
      "Encouraging eco-friendly practices and sustainability through awareness campaigns.",
  },

];

const PillarsSection = () => {

  /* =========================================================
     REF
  ========================================================= */

  const sectionRef = useRef(null);

  /* =========================================================
     ANIMATION STATE
  ========================================================= */

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
      className="pillarsSection"
      ref={sectionRef}
    >

      <div className="pillarsContainer">

        {/* =========================================================
            HEADING
        ========================================================= */}

        <div
          className={
            visible
              ? "pillarsHeadingWrapper showHeadingWrapper"
              : "pillarsHeadingWrapper"
          }
        >

          

          <h2>

            Our Key
         

            Focus Areas

          </h2>

          <p>

            We focus on creating meaningful
            change through education,
            empowerment, sustainability,
            and inclusive community initiatives.

          </p>

        </div>

        {/* =========================================================
            GRID
        ========================================================= */}

        <div className="pillarsGrid">

          {focusAreas.map(
            (item, index) => (

              <div
                key={index}

                className={
                  visible
                    ? "pillarCard showPillarCard"
                    : "pillarCard"
                }

                style={{
                  transitionDelay:
                    `${index * 180}ms`,
                }}
              >

                {/* IMAGE */}
<Link to="/programs">
                <div className="pillarImageWrapper">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="pillarImage"
                  />

                  <div className="pillarOverlay"></div>

                </div>
                </Link>

                {/* CONTENT */}

                <div className="pillarContent">

                  <div className="pillarTop">

                    <h3>

                      {item.title}

                    </h3>

                    <div className="pillarArrow">

                      <ArrowUpRight
                        size={18}
                      />

                    </div>

                  </div>

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

export default PillarsSection;
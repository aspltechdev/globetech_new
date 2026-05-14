// HeroSection.jsx

import React, { useState } from "react";

import {
  ChevronLeft,
  ChevronRight,
  Play,
  ArrowUpRight,
  HandHeart,
} from "lucide-react";


import "./HeroSection.css";

/* =========================================
   LOCAL IMAGES
========================================= */

import heroImg1 from "../../assets/hero/hero1.png";
import heroImg2 from "../../assets/hero/hero2.png";
import heroImg3 from "../../assets/hero/hero3.png";
import heroImg4 from "../../assets/hero/hero4.png";

/* =========================================
   SLIDES
========================================= */

const slides = [

  {
    title: "Empowering Youth Skills & Opportunities",

    description:
      "We support young individuals in gaining industry-relevant skills that open doors to sustainable employment and entrepreneurship. Our programs focus on making vocational training more accessible and inclusive, especially for underserved and marginalized communities, helping bridge the gap between talent and opportunity.",

    image: heroImg1,
  },

  {
    title: "Promoting Health, Safety & Community Well-Being",

    description:
      "Our community-focused initiatives strengthen healthcare access, safety awareness, and holistic well-being for vulnerable populations.",

    image: heroImg2,
  },

  {
    title: "Protecting Nature Through Sustainable Action",

    description:
      "We work alongside communities to drive environmental sustainability through awareness, conservation, and green initiatives.",

    image: heroImg3,
  },

  {
    title: "Empowering Women & Children For a Brighter Future",

    description:
      "Our programs uplift women and children through education, protection, skill-building, and inclusive support systems.",

    image: heroImg4,
  },

];

const HeroSection = () => {

  const [activeSlide, setActiveSlide] = useState(0);

  /* =========================================
     PREVIOUS
  ========================================= */

  const prevSlide = () => {

    setActiveSlide((prev) =>
      prev === 0
        ? slides.length - 1
        : prev - 1
    );

  };

  /* =========================================
     NEXT
  ========================================= */

  const nextSlide = () => {

    setActiveSlide((prev) =>
      prev === slides.length - 1
        ? 0
        : prev + 1
    );

  };

  return (

    <section className="hero">

      <div className="hero-wrapper">

        {/* =================================
            LEFT
        ================================== */}

        <div className="hero-left">

          <div className="hero-content">

            {/* TITLE */}

            <h1>
              {slides[activeSlide].title}
            </h1>

            {/* DESCRIPTION */}

            <p>
              {slides[activeSlide].description}
            </p>

            {/* CTA */}

            <div className="hero-cta">

              {/* DONATE */}

              <button className="hero-donate-btn">

                <span>
                  Donate Now
                </span>

                <span className="arrow-box">

                 
                  <HandHeart
                  size={20}
                    strokeWidth={1} />

                </span>

              </button>

              {/* PROCESS */}

              <button className="process-btn">

                <span className="play-circle">

                  <Play
                    size={20}
                    fill="#243C4B"
                    

                    strokeWidth={1}
                  />

                </span>

                <span>
                  Our process
                </span>

              </button>

            </div>

          </div>

          {/* WHITE CURVE */}

          <div className="bottom-curve"></div>

          {/* NAV BUTTONS */}

          <div className="slider-btns">

            <button onClick={prevSlide}>

              <ChevronLeft
                size={50}
                strokeWidth={1.8}
              />

            </button>

            <button onClick={nextSlide}>

              <ChevronRight
                size={50}
                strokeWidth={1.8}
              />

            </button>

          </div>

        </div>

        {/* =================================
            RIGHT IMAGE
        ================================== */}

        <div className="hero-right">

          {/* DOT PATTERN */}

          <div className="dots-circle"></div>

          {/* IMAGE */}

          <img
            src={slides[activeSlide].image}
            alt="Hero"
          />

        </div>

      </div>

    </section>

  );
};

export default HeroSection;
// HeroSection.jsx

import React, { useEffect, useState } from "react";

import {
  ChevronLeft,
  ChevronRight,
  HandHeart,
} from "lucide-react";

import "./HeroSection.css";

/* =========================
   IMAGES
========================= */

import heroImg1 from "../../assets/hero/hero1.png";
import heroImg2 from "../../assets/hero/hero2.png";
import heroImg3 from "../../assets/hero/hero3.png";
import heroImg4 from "../../assets/hero/hero4.png";

/* =========================
   BG SHAPES
========================= */

import bg1 from "../../assets/hero/Subtract.png";
import bg2 from "../../assets/hero/Subtract.png";
import bg3 from "../../assets/hero/Subtract.png";
import bg4 from "../../assets/hero/Subtract.png";

/* =========================
   SLIDES
========================= */

const slides = [
  {
    title: "Empowering Youth\nSkills & Opportunities",

    description:
      "We support young individuals in gaining industry-relevant skills that open doors to sustainable employment and entrepreneurship. Our programs focus on making vocational training more accessible and inclusive, especially for underserved and marginalized communities, helping bridge the gap between talent and opportunity for long-term social and economic growth.",

    image: heroImg1,
    bg: bg1,
  },

  {
    title: "Empowering Youth\nSkills & Opportunities",

    description:
      "We support young individuals in gaining industry-relevant skills that open doors to sustainable employment and entrepreneurship. Our programs focus on making vocational training more accessible and inclusive, especially for underserved and marginalized communities, helping bridge the gap between talent and opportunity for long-term social and economic growth.",

    image: heroImg2,
    bg: bg2,
  },

  {
    title: "Empowering Youth\nSkills & Opportunities",

    description:
      "We support young individuals in gaining industry-relevant skills that open doors to sustainable employment and entrepreneurship. Our programs focus on making vocational training more accessible and inclusive, especially for underserved and marginalized communities, helping bridge the gap between talent and opportunity for long-term social and economic growth.",

    image: heroImg3,
    bg: bg3,
  },

  {
    title: "Empowering Youth\nSkills & Opportunities",

    description:
      "We support young individuals in gaining industry-relevant skills that open doors to sustainable employment and entrepreneurship. Our programs focus on making vocational training more accessible and inclusive, especially for underserved and marginalized communities, helping bridge the gap between talent and opportunity for long-term social and economic growth.",

    image: heroImg4,
    bg: bg4,
  },
];

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  /* =========================
     AUTO SLIDE - 3 SEC
  ========================= */

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [activeSlide]);

  /* =========================
     PREV
  ========================= */

  const prevSlide = () => {
    setActiveSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  /* =========================
     NEXT
  ========================= */

  const nextSlide = () => {
    setActiveSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="hero">

      <div
        className="hero-card"
        style={{
          backgroundImage: `url(${slides[activeSlide].bg})`,
        }}
      >

        {/* LEFT CONTENT */}

        <div className="hero-left">

          <div className="hero-content">

            <h1>
              {slides[activeSlide].title}
            </h1>

            <p>
              {slides[activeSlide].description}
            </p>

            <button className="hero-donate-btn">

              <span>Donate Now</span>

              <span className="icon-box">
                <HandHeart size={16} />
              </span>

            </button>

          </div>

          {/* BOTTOM NAV */}

          <div className="slider-controls">

            <button onClick={prevSlide}>
              <ChevronLeft size={34} />
            </button>

            <button onClick={nextSlide}>
              <ChevronRight size={34} />
            </button>

          </div>

        </div>

        {/* RIGHT IMAGE */}

        <div className="hero-right">
  <div className="dot-circle"></div>
          <img
            src={slides[activeSlide].image}
            alt="hero"
          />

        </div>

      </div>

    </section>
  );
};

export default HeroSection;
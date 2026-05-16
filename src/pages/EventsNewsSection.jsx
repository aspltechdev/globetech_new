// EventsNewsSection.jsx

import React, { useEffect, useState, useRef } from "react";

import {
  ArrowRight,
  Calendar,
  Sparkles,
} from "lucide-react";

import "./EventsNewsSection.css";

/* =========================
   HERO SLIDES
========================= */

const heroSlides = [
  {
    title: "Future Education Summit 2026",
    category: "Education",
    description:
      "Bringing together educators, students, NGOs, and innovators to shape future-ready learning ecosystems.",
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1400&auto=format&fit=crop",
  },

  {
    title: "Women Empowerment Mission",
    category: "Community",
    description:
      "Supporting women through mentorship, entrepreneurship, and career readiness programs.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1400&auto=format&fit=crop",
  },

  {
    title: "Digital Literacy Campaign",
    category: "Technology",
    description:
      "Creating access to digital learning opportunities for underserved communities.",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1400&auto=format&fit=crop",
  },

  {
    title: "Youth Leadership Program",
    category: "Leadership",
    description:
      "Preparing young minds with confidence, communication, and leadership skills.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop",
  },

  {
    title: "Green Earth Initiative",
    category: "Environment",
    description:
      "Promoting sustainability awareness and community-driven environmental action.",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1400&auto=format&fit=crop",
  },
];

/* =========================
   EVENT CARDS
========================= */

const cards = [
  {
    title: "Healthcare Mission",
    date: "02 FEB 2026",
    image:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1400&auto=format&fit=crop",
  },

  {
    title: "Community Outreach",
    date: "12 MAR 2026",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop",
  },

  {
    title: "Skill Development Camp",
    date: "18 APR 2026",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop",
  },

  {
    title: "Women Career Support",
    date: "24 MAY 2026",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1400&auto=format&fit=crop",
  },

  {
    title: "Rural Education Drive",
    date: "08 JUN 2026",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1400&auto=format&fit=crop",
  },

  {
    title: "Volunteer Meetup",
    date: "16 JUL 2026",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1400&auto=format&fit=crop",
  },
];

/* =========================
   REVEAL
========================= */

const Reveal = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("show");
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="fade-up"
    >
      {children}
    </div>
  );
};

export default function EventsNewsSection() {

  const [active, setActive] = useState(0);

  /* AUTO SLIDE */

  useEffect(() => {

    const interval = setInterval(() => {

      setActive((prev) =>
        prev === heroSlides.length - 1
          ? 0
          : prev + 1
      );

    }, 4500);

    return () => clearInterval(interval);

  }, []);

  return (
    <section className="events-section">

      <div className="events-glow glow1"></div>
      <div className="events-glow glow2"></div>

      <div className="events-container">

        {/* HERO SLIDER */}

        <div className="hero-slider">

          {heroSlides.map((slide, index) => (

            <div
              key={index}
              className={`hero-slide ${
                active === index
                  ? "active"
                  : ""
              }`}
            >

              <img
                src={slide.image}
                alt=""
              />

              <div className="hero-overlay"></div>

              <div className="hero-content">

                <div className="hero-tag">

                  <Sparkles size={15} />

                  {slide.category}

                </div>

                <h1>
                  {slide.title}
                </h1>

                <p>
                  {slide.description}
                </p>

                <button>

                  Explore Story

                  <ArrowRight size={18} />

                </button>

              </div>

            </div>

          ))}

          {/* DOTS */}

          <div className="hero-dots">

            {heroSlides.map((_, index) => (

              <button
                key={index}
                className={`dot ${
                  active === index
                    ? "active-dot"
                    : ""
                }`}
                onClick={() =>
                  setActive(index)
                }
              ></button>

            ))}

          </div>

        </div>

        {/* HEADER */}

        <Reveal>

          <div className="events-header">

            <span>
              Events & Stories
            </span>

            <h2>
              Community Stories That Inspire Change
            </h2>

          </div>

        </Reveal>

        {/* NEW ANIMATION GRID */}

        <div className="cards-grid">

          {cards.map((item, index) => (

            <Reveal key={index}>

              <div className="event-card">

                <div className="event-image">

                  <img
                    src={item.image}
                    alt=""
                  />

                  <div className="event-overlay"></div>

                </div>

                <div className="event-content">

                  <div className="event-date">

                    <Calendar size={15} />

                    {item.date}

                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <button>

                    Read Story

                    <ArrowRight size={16} />

                  </button>

                </div>

              </div>

            </Reveal>

          ))}

        </div>

      </div>
    </section>
  );
}
// CareerReadinessSection.jsx

import React, { useEffect, useRef } from "react";

import "./CareerReadinessSection.css";

import {
  FaArrowRight,
  FaBriefcase,
  FaLaptopCode,
  FaUsers,
  FaGlobe,
  FaHandshake,
  FaLightbulb,
  FaGraduationCap,
} from "react-icons/fa";

/* =========================
   DATA
========================= */

const careerCards = [
  {
    title: "Industry Exposure",
    description:
      "Students experience professional environments and workplace culture.",
    icon: <FaBriefcase />,
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Skill Workshops",
    description:
      "Hands-on sessions focused on practical industry-ready skills.",
    icon: <FaLaptopCode />,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Career Mentorship",
    description:
      "Guidance programs helping students shape meaningful career paths.",
    icon: <FaUsers />,
    image:
      "https://images.unsplash.com/photo-1522202222206-b750f2f1f0a3?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Global Learning",
    description:
      "Modern learning experiences encouraging innovation and leadership.",
    icon: <FaGlobe />,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Placement Drives",
    description:
      "Connecting youth directly with opportunities and employers.",
    icon: <FaHandshake />,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Innovation Labs",
    description:
      "Encouraging creativity and collaborative problem-solving culture.",
    icon: <FaLightbulb />,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
];

const stats = [
  {
    value: "8500+",
    label: "Students Guided",
  },

  {
    value: "4200+",
    label: "Career Placements",
  },

  {
    value: "120+",
    label: "Skill Workshops",
  },

  {
    value: "65+",
    label: "Industry Partners",
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

export default function CareerReadinessSection() {

  return (
    <section className="career-section">

      <div className="career-glow glow-left"></div>
      <div className="career-glow glow-right"></div>

      <div className="career-container">

        {/* HERO */}

        <Reveal>

          <div className="career-hero">

            <div className="career-left">

              <div className="career-tag">

                <FaGraduationCap />

                Career Readiness

              </div>

              <h1>
                Preparing Youth
                Beyond Traditional Learning
              </h1>

              <p>
                We bridge the gap between education and employment
                through industry exposure, mentorship, practical
                workshops, and career development opportunities.
              </p>

              <button className="career-btn">

                Explore Programs

                <FaArrowRight />

              </button>

            </div>

            <div className="career-right">

              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop"
                alt=""
              />

              <div className="career-floating-card">

                <h3>
                  4200+
                </h3>

                <p>
                  Successful Placements
                </p>

              </div>

            </div>

          </div>

        </Reveal>

        {/* STATS */}



        {/* HEADER */}

        <Reveal>

          <div className="career-heading">

            <span>
              Learning Experiences
            </span>

            <h2>
              Career Programs Creating
              Real Opportunities
            </h2>

          </div>

        </Reveal>

        {/* NEW MODERN GRID */}

        <div className="career-grid">

          {careerCards.map((card, index) => (

            <Reveal key={index}>

              <div className="career-card">

                {/* IMAGE */}

                <div className="career-image">

                  <img
                    src={card.image}
                    alt={card.title}
                  />

                  <div className="career-overlay"></div>

                </div>

                {/* CONTENT */}

                <div className="career-content">

                  {/* <div className="career-icon">
                    {card.icon}
                  </div> */}

                  <h3>
                    {card.title}
                  </h3>

                  <p>
                    {card.description}
                  </p>

                  <button>

                    Learn More

                    <FaArrowRight />

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
// CareerReadinessSection.jsx

import React from "react";
import "./CareerReadinessSection.css";

import {
  FaArrowRight,
  FaBriefcase,
  FaLaptopCode,
  FaUsers,
  FaGlobe,
  FaHandshake,
  FaLightbulb,
} from "react-icons/fa";

const careerCards = [
  {
    title: "Industry Exposure",
    description:
      "Students experience real workplaces and modern professional environments.",
    icon: <FaBriefcase />,
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Skill Workshops",
    description:
      "Interactive sessions focused on practical skills and career readiness.",
    icon: <FaLaptopCode />,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Career Mentorship",
    description:
      "Guidance programs helping students discover meaningful career paths.",
    icon: <FaUsers />,
    image:
      "https://images.unsplash.com/photo-1522202222206-b750f2f1f0a3?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Global Exposure",
    description:
      "Modern learning experiences encouraging innovation and leadership.",
    icon: <FaGlobe />,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Placement Drives",
    description:
      "Connecting youth directly with opportunities and employment pathways.",
    icon: <FaHandshake />,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Innovation Labs",
    description:
      "Encouraging creative thinking and problem-solving through collaboration.",
    icon: <FaLightbulb />,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function CareerReadinessSection() {

  return (
    <section className="career-section">

      {/* BG */}

      <div className="career-bg-glow glow-left"></div>
      <div className="career-bg-glow glow-right"></div>

      <div className="career-wrapper">

        {/* HEADER */}

        <div className="career-heading">

          <span className="career-label">
            CAREER READINESS
          </span>

          <h2>
            Preparing Students
            <span> Beyond Classrooms</span>
          </h2>

          <p>
            Real-world exposure, practical learning,
            and mentorship experiences helping youth
            build meaningful futures.
          </p>

        </div>

        {/* HORIZONTAL STORY STRIP */}

        <div className="career-strip">

          {careerCards.map((card, index) => (

            <div
              className="career-story-card"
              key={index}
            >

              {/* TOP */}

              <div className="career-story-image">

                <img
                  src={card.image}
                  alt={card.title}
                />

                <div className="career-image-overlay"></div>

              </div>

              {/* CONTENT */}

              <div className="career-story-content">

                <div className="career-icon">
                  {card.icon}
                </div>

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

          ))}

        </div>

      </div>

    </section>
  );
}
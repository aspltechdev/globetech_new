// CareerReadinessSection.jsx

import React from "react";
import "./CareerReadinessSection.css";

const careerCards = [
  {
    title: "Industry Visits",
    description:
      "Real-world exposure to modern manufacturing and corporate environments.",
    tag: "EXPLORATION",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Workshops",
    description:
      "Hands-on technical sessions led by expert trainers and professionals.",
    tag: "SKILL BUILDING",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Internships",
    description:
      "Practical work experience to ensure smooth transition into the workforce.",
    tag: "EXPERIENCE",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Job Drives",
    description:
      "Regular recruitment events connecting talent directly with employers.",
    tag: "EMPLOYMENT",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  },
];

const CareerReadinessSection = () => {
  return (
    <section className="career-readiness-main-section">

      <div className="career-readiness-container">

        {/* HEADER */}
        <div className="career-readiness-header">

          <h2>
            Beyond the Classroom: Career Readiness
          </h2>

          <p>
            Bridging the gap between academic knowledge and professional excellence
            <br />
            through immersive real-world experiences.
          </p>

        </div>

        {/* CARDS */}
        <div className="career-readiness-card-grid">

          {careerCards.map((card, index) => (
            <div
              className="career-readiness-card"
              key={index}
            >

              {/* IMAGE */}
              <div className="career-readiness-image-wrapper">

                <img
                  src={card.image}
                  alt={card.title}
                />

              </div>

              {/* CONTENT */}
              <div className="career-readiness-card-content">

                <h3>
                  {card.title}
                </h3>

                <p>
                  {card.description}
                </p>

                <span>
                  {card.tag}
                </span>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default CareerReadinessSection;
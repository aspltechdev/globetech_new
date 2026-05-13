import React from "react";

import career1 from "../../assets/career-1.png";
import career2 from "../../assets/career-2.png";
import career3 from "../../assets/career-3.png";
import career4 from "../../assets/career-4.png";

import "./CareerSection.css";

const careerData = [
  {
    id: 1,
    title: "Industry Visits",
    description:
      "Real-world exposure to modern manufacturing and corporate environments.",
    image: career2,
  },

  {
    id: 2,
    title: "Workshops",
    description:
      "Hands-On technical sessions led by expert trainers and professionals.",
    image: career1,
  },

  {
    id: 3,
    title: "Internships",
    description:
      "Practical work experience to ensure smooth transition into the workforce.",
    image: career3,
  },

  {
    id: 4,
    title: "Job Drives",
    description:
      "Regular recruitment events connecting talent directly with employers.",
    image: career4,
  },
];

const CareerSection = () => {

  return (

    <section className="auroCareerSection">

      <div className="auroCareerContainer">

        {/* =====================================
            HEADING
        ====================================== */}

        <div className="auroCareerHeading">

          {/* TAG */}

          <div className="auroCareerTag">

            <span></span>

            <p>
              Career Readiness
            </p>

          </div>

          {/* TITLE */}

          <h2>
            Building Industry Ready Professionals
          </h2>

        </div>

        {/* =====================================
            GRID
        ====================================== */}

        <div className="auroCareerGrid">

          {careerData.map((item) => (

            <div
              className="auroCareerCard"
              key={item.id}
            >

              {/* IMAGE */}

              <img
                src={item.image}
                alt={item.title}
              />

              {/* OVERLAY */}

              <div className="auroCareerOverlay"></div>

              {/* CONTENT */}

              <div className="auroCareerContent">

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
};

export default CareerSection;
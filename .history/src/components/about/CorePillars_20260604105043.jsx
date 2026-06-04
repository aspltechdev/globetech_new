import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./CorePillars.css";

import pillar1 from "../../assets/pillar-1.png";
import pillar2 from "../../assets/pillar-2.png";
import pillar3 from "../../assets/pillar-3.png";
import pillar4 from "../../assets/ourplacementlogo/Women.png";
import pillar5 from "../../assets/pillar-5.png";

const pillars = [
  {
    image: pillar1,
    title: "Education & Skill Development",
    description:
      "Creating accessible learning opportunities and practical skill development programs.",
  },
  {
    image: pillar2,
    title: "Health & Community Well-Being",
    description:
      "Improving community wellness through healthcare initiatives and awareness programs.",
  },
  {
    image: pillar3,
    title: "Environmental Sustainability",
    description:
      "Promoting sustainable practices and environmental awareness for future generations.",
  },
  {
    image: pillar4,
    title: "Women & Child Empowerment",
    description:
      "Supporting women and children through education and empowerment initiatives.",
  },
  {
    image: pillar5,
    title: "Community Development",
    description:
      "Building stronger communities through sustainable social impact programs.",
  },
];

export default function CorePillars() {
  const marqueePillars = [...pillars, ...pillars];

  return (
    <section className="pillarSection">
      <div className="pillarHeading">
        <span>OUR CORE PILLARS</span>

        <h2>
          Empowering Communities
          <br />
          Through Innovation & Action
        </h2>
      </div>

      <div className="pillarMarquee">
        <div className="pillarGrid">
          {marqueePillars.map((item, index) => (
            <div key={index} className="pillarCard">
              <img
                src={item.image}
                alt={item.title}
                className="pillarImage"
              />

              <div className="pillarOverlay" />
              <div className="pillarGlow" />

              <Link
                to="/get-involved"
                className="pillarLink"
              >
                <div className="pillarContent">
                  {/* <span>
                    {String((index % 5) + 1).padStart(
                      2,
                      "0"
                    )}
                  </span> */}

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>

                <button className="pillarBtn">
                  <ArrowUpRight size={18} />
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
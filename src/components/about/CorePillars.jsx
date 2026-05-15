// CorePillars.jsx

import "./CorePillars.css";

import pillar1 from "../../assets/pillar-1.png";
import pillar2 from "../../assets/pillar-2.png";
import pillar3 from "../../assets/pillar-3.png";
import pillar4 from "../../assets/pillar-4.png";
import pillar5 from "../../assets/pillar-5.png";

/* =========================================
   DATA
========================================= */

const pillars = [

  {
    image: pillar1,

    title:
      "Empowering Communities Through Education",

    description:
      "We are committed to transforming lives by providing access to quality education, skill development, career guidance, and community-driven support programs. Our initiatives are designed to uplift underserved individuals and create pathways toward sustainable growth, confidence, and self-reliance.",
  },

  {
    image: pillar2,

    title:
      "Promoting Health, Safety & Community Well-Being",

    description:
      "We are dedicated to creating healthier and safer communities through impactful health awareness initiatives, preventive care programs, and community-driven safety campaigns. Our mission is to ensure that individuals and families have access to essential health knowledge, safe living practices, and support systems that improve overall well-being and quality of life.",
  },

  {
    image: pillar3,

    title:
      "Protecting Nature Through Sustainable Action",

    description:
      "We are committed to building a greener and more sustainable future by promoting environmental awareness, responsible resource management, and community-driven conservation efforts. Our initiatives focus on encouraging eco-friendly practices that help reduce environmental impact, preserve natural ecosystems, and create healthier living environments for present and future generations.",
  },

  {
    image: pillar4,

    title:
      "Empowering Women & Children Together",

    description:
      "We are dedicated to creating inclusive opportunities that empower women and children through education, skill development, healthcare awareness, and community support initiatives. Our mission is to help individuals build confidence, independence, and the ability to lead meaningful and secure lives within their communities.",
  },

  {
    image: pillar5,

    title:
      "Building Sustainable Community Growth",

    description:
      "We are committed to improving communities through impactful infrastructure development initiatives that enhance safe, accessible, and functional spaces for education, training, healthcare, and social development. Our goal is to strengthen local communities by developing essential facilities that support long-term growth, learning, and well-being.",
  },

];

export default function CorePillars() {

  return (

    <section className="auroCorePillarsSection">

      <div className="auroCorePillarsContainer">

        {/* TITLE */}

        <h2 className="auroCorePillarsTitle">

          Our Core Pillars

        </h2>

        {/* WRAPPER */}

        <div className="auroCorePillarsWrapper">

          {pillars.map((item, index) => (

            <div
              className="auroCorePillarCard"
              key={index}
            >

              {/* IMAGE */}

              <div className="auroCorePillarImage">

                <img
                  src={item.image}
                  alt={item.title}
                />

              </div>

              {/* CONTENT */}

              <div className="auroCorePillarContent">

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
}
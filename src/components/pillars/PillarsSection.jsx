// import PillarCard from "./PillarCard";

// import pillar1 from "../../assets/pillar-1.png";
// import pillar2 from "../../assets/pillar-2.png";
// import pillar3 from "../../assets/pillar-3.png";
// import pillar4 from "../../assets/pillar-4.png";
// import pillar5 from "../../assets/pillar-5.png";

// const pillars = [
//   {
//     image: pillar1,
//     title: "Skilling & Placement",
//     description:
//       "We equip youth with industry-relevant skills."
//   },
//   {
//     image: pillar2,
//     title: "Health & Safety",
//     description:
//       "We promote well-being through health awareness."
//   },
//   {
//     image: pillar3,
//     title: "Environmental Protection",
//     description:
//       "We encourage sustainable practices."
//   },
//   {
//     image: pillar4,
//     title: "Women & Child Empowerment",
//     description:
//       "Programs focused on equality and growth."
//   },
//   {
//     image: pillar5,
//     title: "Infrastructure Development",
//     description:
//       "Building better communities and opportunities."
//   }
// ];

// const PillarsSection = () => {
//   return (
//     <section className="pillars-section">

//       <div className="container-fluid px-lg-5">

//         <div className="pillars-heading">
//           <h2>OUR CORE PILLARS</h2>
//         </div>

//         <div className="row g-4 justify-content-center">

//           {pillars.map((pillar, index) => (
//             <div
//               className="col-xl-3 col-lg-4 col-md-6"
//               key={index}
//             >
//               <PillarCard {...pillar} />
//             </div>
//           ))}

//         </div>

//       </div>

//     </section>
//   );
// };

// export default PillarsSection;

import React from "react";
import { ArrowUpRight } from "lucide-react";

import pillar1 from "../../assets/pillar-1.png";
import pillar2 from "../../assets/pillar-2.png";
import pillar3 from "../../assets/pillar-3.png";
import pillar4 from "../../assets/pillar-4.png";
import pillar5 from "../../assets/pillar-5.png";

import "./PillarCard.css";

const pillars = [
  {
    image: pillar1,
    title: "Skilling & Placement",
    description:
      "We equip youth with industry-relevant skills and connect them with top employers through placement drives, internships, and hands-on training.",
  },
  {
    image: pillar2,
    title: "Health & Safety",
    description:
      "We promote well-being through health awareness initiatives and safety programs that protect communities and improve quality of life.",
  },
  {
    image: pillar3,
    title: "Environmental Protection",
    description:
      "We encourage sustainable practices and ecological balance, inspiring communities and partners to adopt greener habits for a healthier planet.",
  },
  {
    image: pillar4,
    title: "Women & Child Empowerment",
    description:
      "We champion gender equality and child welfare by giving women and children the tools, confidence, and opportunities they need to thrive.",
  },
  {
    image: pillar5,
    title: "Infrastructure Development",
    description:
      "We build essential community facilities — from classrooms to training centers — creating the physical foundation for lasting local growth.",
  },
];

const PillarCard = ({ image, title, description }) => {
  return (
    <div className="pillar-card">

      {/* IMAGE */}

      <div className="pillar-image-wrapper">

        <img
          src={image}
          alt={title}
          className="pillar-image"
        />

        {/* TOP RIGHT ICON */}

        <div className="pillar-arrow">
          <ArrowUpRight size={18} strokeWidth={2.5} />
        </div>

      </div>

      {/* CONTENT */}

      <div className="pillar-content">

        <h3>{title}</h3>

        <p>{description}</p>

      </div>

    </div>
  );
};

const PillarsSection = () => {
  return (
    <section className="pillars-section">

      <div className="container-fluid">

        {/* HEADING */}

        <div className="pillars-heading">
          <h2>OUR CORE PILLARS</h2>
        </div>

        {/* TOP 3 CARDS */}

        <div className="row g-4 justify-content-center">

          {pillars.slice(0, 3).map((pillar, index) => (
            <div
              className="col-xl-4 col-lg-4 col-md-6 d-flex justify-content-center"
              key={index}
            >
              <PillarCard {...pillar} />
            </div>
          ))}

        </div>

        {/* BOTTOM 2 CARDS */}

        <div className="row g-4 justify-content-center mt-lg-4 mt-2">

          {pillars.slice(3, 5).map((pillar, index) => (
            <div
              className="col-xl-4 col-lg-4 col-md-6 d-flex justify-content-center"
              key={index}
            >
              <PillarCard {...pillar} />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default PillarsSection;
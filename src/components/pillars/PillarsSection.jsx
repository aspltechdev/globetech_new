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



import PillarCard from "./PillarCard";

import pillar1 from "../../assets/pillar-1.png";
import pillar2 from "../../assets/pillar-2.png";
import pillar3 from "../../assets/pillar-3.png";
import pillar4 from "../../assets/pillar-4.png";
import pillar5 from "../../assets/pillar-5.png";

const pillars = [
  {
    image: pillar1,
    title: "Skilling & Placement",
    description:
      "We equip youth with industry-relevant skills."
  },
  {
    image: pillar2,
    title: "Health & Safety",
    description:
      "We promote well-being through health awareness."
  },
  {
    image: pillar3,
    title: "Environmental Protection",
    description:
      "We encourage sustainable practices."
  },
  {
    image: pillar4,
    title: "Women & Child Empowerment",
    description:
      "Programs focused on equality and growth."
  },
  {
    image: pillar5,
    title: "Infrastructure Development",
    description:
      "Building better communities and opportunities."
  }
];

const PillarsSection = () => {
  return (
    <section className="pillars-section">

      <div className="container-fluid px-lg-5">

        <div className="pillars-heading">
          <h2>OUR CORE PILLARS</h2>
        </div>

        {/* TOP 3 */}

        <div className="row g-4 justify-content-center">

          {pillars.slice(0, 3).map((pillar, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={index}
            >
              <PillarCard {...pillar} />
            </div>
          ))}

        </div>

        {/* BOTTOM 2 */}

        <div className="row g-4 justify-content-center mt-1">

          {pillars.slice(3, 5).map((pillar, index) => (
            <div
              className="col-lg-3 col-md-6"
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
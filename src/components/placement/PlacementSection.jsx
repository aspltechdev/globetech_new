// const PlacementSection = () => {
//   return (
//     <section className="placement-section">

//       <div className="container-fluid px-lg-5">

//         <div className="placement-heading">

//           <div className="section-tag orange">
//             <span></span>
//             Our Placement Legacy
//           </div>

//           <h2>
//             Where Our Students Work
//           </h2>

//         </div>

//         <div className="logo-slider">

//           <div className="logo-track">

//             <div className="logo-card">
//               <h3>IBM</h3>
//             </div>

//             <div className="logo-card">
//               <h3>TCS</h3>
//             </div>

//             <div className="logo-card">
//               <h3>Infosys</h3>
//             </div>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default PlacementSection;

// PlacementSection.jsx

// import "./PlacementSection.css";

// const topCompanies = [
//   "IBM",
//   "HDFC BANK",
//   "TVS",
//   "Walmart",
//   "Tech Mahindra",
//   "TCS",
//   "TATA",
//   "ICICI Bank",
//   "BOSCH",
//   "TOYOTA",
//   "Infosys",
// ];

// const bottomCompanies = [
//   "UNICEF",
//   "NASSCOM",
//   "Gram Vikas",
//   "ANUDIP",
//   "AISECT India",
//   "HGS",
//   "Capgemini",
//   "Cognizant",
//   "Wipro",
// ];

// const PlacementSection = () => {
//   return (
//     <section className="placement-section">
//       <div className="container-fluid px-lg-5">
//         {/* Heading */}
//         <div className="placement-heading">
//           <div className="section-tag orange">
//             <span></span>
//             Our Placement Legacy
//           </div>

//           <h2>Where Our Students Work</h2>
//         </div>

//         {/* TOP SLIDER */}
//         <div className="placement-slider-wrapper">
//           <div className="placement-slider placement-slider-right">
//             {[...topCompanies, ...topCompanies].map((company, index) => (
//               <div className="placement-logo-card" key={index}>
//                 <h3>{company}</h3>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* SECOND ROW */}
//         <div className="placement-slider-wrapper second-row">
//           <div className="placement-slider placement-slider-left">
//             {[...bottomCompanies, ...bottomCompanies].map(
//               (company, index) => (
//                 <div className="placement-logo-card small-card" key={index}>
//                   <h3>{company}</h3>
//                 </div>
//               )
//             )}
//           </div>
//         </div>

//         {/* TECH ADVANTAGE SECTION */}
//         <div className="tech-advantage-wrapper">
//           {/* LEFT CONTENT */}
//           <div className="tech-advantage-card">
//             <h3>Strategic Technical Advantage</h3>

//             <div className="advantage-item">
//               <h4>Expertise</h4>
//               <p>
//                 Access to a specialist team of design engineers and project
//                 implementation specialists.
//               </p>
//             </div>

//             <div className="advantage-item">
//               <h4>Accreditations</h4>
//               <p>ISO 9001: 2015 Certified Company</p>
//             </div>

//             <div className="advantage-item">
//               <h4>CSR Collaboration</h4>
//               <p>
//                 Trusted Partner for UNICEF, NASSCOM, HGS, GRAMVIKAS, ANUDIP,
//                 AISECT, IIT MANDI
//               </p>
//             </div>
//           </div>

//           {/* RIGHT SIDE LOGOS */}
//           <div className="tech-grid">
//             {bottomCompanies.map((item, index) => (
//               <div className="tech-grid-card" key={index}>
//                 <span>{item}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PlacementSection;















import React from "react";
import "./PlacementSection.css";

/* =========================================
   TOP ROW LOGOS
========================================= */

const topCompanies = [
  {
    name: "IBM",
    logo: "https://logo.clearbit.com/ibm.com",
  },

  {
    name: "HDFC",
    logo: "https://logo.clearbit.com/hdfcbank.com",
  },

  {
    name: "TVS",
    logo: "https://logo.clearbit.com/tvsmotor.com",
  },

  {
    name: "Walmart",
    logo: "https://logo.clearbit.com/walmart.com",
  },

  {
    name: "Tech Mahindra",
    logo: "https://logo.clearbit.com/techmahindra.com",
  },

  {
    name: "TCS",
    logo: "https://logo.clearbit.com/tcs.com",
  },

  {
    name: "TATA",
    logo: "https://logo.clearbit.com/tata.com",
  },

  {
    name: "ICICI",
    logo: "https://logo.clearbit.com/icicibank.com",
  },

  {
    name: "Bosch",
    logo: "https://logo.clearbit.com/bosch.com",
  },

  {
    name: "Toyota",
    logo: "https://logo.clearbit.com/toyota.com",
  },

  {
    name: "Infosys",
    logo: "https://logo.clearbit.com/infosys.com",
  },
];

/* =========================================
   SECOND ROW LOGOS
========================================= */

const csrCompanies = [
  {
    name: "UNICEF",
    logo: "https://logo.clearbit.com/unicef.org",
  },

  {
    name: "NASSCOM",
    logo: "https://logo.clearbit.com/nasscom.in",
  },

  {
    name: "Gram Vikas",
    logo: "https://logo.clearbit.com/gramvikas.org",
  },

  {
    name: "ANUDIP",
    logo: "https://logo.clearbit.com/anudip.org",
  },

  {
    name: "AISECT",
    logo: "https://logo.clearbit.com/aisect.org",
  },

  {
    name: "IIT Mandi",
    logo: "https://logo.clearbit.com/iitmandi.ac.in",
  },
];

const PlacementSection = () => {

  return (

    <section className="auroPlacementSection">

      <div className="auroPlacementContainer">

        {/* =====================================
            HEADING
        ====================================== */}

        <div className="auroPlacementHeading">

          <div className="auroPlacementTag">

            <span></span>

            <p>
              Our Placement Legacy
            </p>

          </div>

          <h2>
            Where Our Students Work
          </h2>

        </div>

        {/* =====================================
            FIRST ROW SLIDER
        ====================================== */}

        <div className="auroSliderWrapper">

          <div className="auroSliderTrack auroSlideRight">

            {[...topCompanies, ...topCompanies].map((item, index) => (

              <div
                className="auroPlacementLogoCard"
                key={index}
              >

                <img
                  src={item.logo}
                  alt={item.name}
                />

              </div>

            ))}

          </div>

        </div>

        {/* =====================================
            SECOND ROW SLIDER
        ====================================== */}

        <div className="auroSliderWrapper secondRow">

          <div className="auroSliderTrack auroSlideLeft">

            {[...csrCompanies, ...csrCompanies].map((item, index) => (

              <div
                className="auroPlacementLogoCard smallCard"
                key={index}
              >

                <img
                  src={item.logo}
                  alt={item.name}
                />

              </div>

            ))}

          </div>

        </div>

        {/* =====================================
    STRATEGIC TECHNICAL ADVANTAGE
===================================== */}

<div className="auroStrategicSection">

  {/* SECTION TITLE */}

  <h3 className="auroStrategicTitle">

    Strategic Technical Advantage

  </h3>

  {/* CONTENT WRAPPER */}

  <div className="auroTechWrapper">

    {/* LEFT CONTENT CARD */}

    <div className="auroTechContent">

      {/* ITEM */}

      <div className="auroTechItem">

        <h4>
          Expertise
        </h4>

        <p>
          Access to a specialist team of design
          engineers and project implementation
          specialists.
        </p>

      </div>

      {/* ITEM */}

      <div className="auroTechItem">

        <h4>
          Accreditations
        </h4>

        <p>
          ISO 9001 : 2015 Certified Company
        </p>

      </div>

      {/* ITEM */}

      <div className="auroTechItem">

        <h4>
          CSR Collaboration
        </h4>

        <p>
          Trusted Partner for UNICEF,
          NASSCOM, HGS, GRAMVIKAS,
          ANUDIP, AISECT, IIT MANDI
        </p>

      </div>

    </div>

    {/* RIGHT GRID */}

    <div className="auroTechGrid">

      {csrCompanies.map((item, index) => (

        <div
          className="auroTechGridCard"
          key={index}
        >

          <img
            src={item.logo}
            alt={item.name}
          />

        </div>

      ))}

    </div>

  </div>

</div>

      </div>

    </section>

  );
};

export default PlacementSection;
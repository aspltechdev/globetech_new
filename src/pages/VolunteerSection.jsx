// // PartnershipSection.jsx

// import React from "react";
// import "./VolunteerSection.css";

// const partners = [
//   {
//     name: "IBM",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
//   },
//   {
//     name: "HDFC",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg",
//   },
//   {
//     name: "TVS",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/8/83/TVS_Motor_Logo.svg",
//   },
//   {
//     name: "Infosys",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
//   },
//   {
//     name: "Toyota",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg",
//   },
//   {
//     name: "Bosch",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Bosch-logo.svg",
//   },
//   {
//     name: "Tata",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg",
//   },
//   {
//     name: "ICICI",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg",
//   },
// ];

// export default function VolunteerSection() {
//   return (
//     <section className="partner-section">

//       {/* BACKGROUND GLOW */}

//       <div className="partner-glow one"></div>
//       <div className="partner-glow two"></div>

//       <div className="partner-container">

//         {/* HEADER */}

//         <div className="partner-header">

//           <span className="partner-tag">
//             TRUSTED PARTNERS
//           </span>

//           <h2>
//             Together We Create
//             <span> Bigger Impact</span>
//           </h2>

//           <p>
//             We collaborate with visionary brands and organizations
//             committed to creating sustainable social change and
//             empowering communities worldwide.
//           </p>

//         </div>

//         {/* LOGO GRID */}

//         <div className="partner-grid">

//           {partners.map((item, index) => (

//             <div className="partner-card" key={index}>

//               <img
//                 src={item.logo}
//                 alt={item.name}
//               />

//             </div>

//           ))}

//         </div>

//         {/* CTA */}

//         <div className="partner-cta">

//           <div className="partner-cta-content">

//             <h3>
//               Become A Strategic Partner
//             </h3>

//             <p>
//               Join hands with us to scale impact-driven
//               initiatives and build stronger communities together.
//             </p>

//           </div>

//           <button>
//             Partner With Us
//           </button>

//         </div>

//       </div>

//     </section>
//   );
// }

























// PartnershipSection.jsx

import React, { useEffect, useRef } from "react";

import {
  ArrowRight,
  HeartHandshake,
  Building2,
  Globe2,
} from "lucide-react";

import "./VolunteerSection.css";
import { Link } from "react-router-dom";

const partners = [
  {
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },

  {
    name: "Infosys",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
  },

  {
    name: "Toyota",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg",
  },

  {
    name: "Bosch",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-logo.svg",
  },

  {
    name: "HDFC",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg",
  },

  {
    name: "Tata",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg",
  },
];

const stats = [
  {
    icon: <Building2 size={22} />,
    value: "65+",
    label: "Corporate Partnerships",
  },

  {
    icon: <HeartHandshake size={22} />,
    value: "120+",
    label: "Collaborative Initiatives",
  },

  {
    icon: <Globe2 size={22} />,
    value: "25K+",
    label: "Lives Impacted Together",
  },
];

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

export default function VolunteerSection() {
  return (
    <section className="partnership-section">

      <div className="partner-glow glow1"></div>
      <div className="partner-glow glow2"></div>

      <div className="partnership-container">

        {/* HEADER */}

        <Reveal>

          <div className="partnership-header">

            <span>
              Trusted Partnerships
            </span>

            <h2>
              Collaborating To Create
              Bigger Social Impact
            </h2>

            <p>
              We work alongside organizations, institutions,
              and industry leaders committed to empowering
              communities through education, innovation,
              and sustainable development initiatives.
            </p>

          </div>

        </Reveal>

        {/* LOGO GRID */}

        


        {/* PARTNER MARQUEE */}

<div className="partner-marquee">

  <div className="partner-track">

    {[...partners, ...partners].map((item, index) => (

      <div
        className="partner-card"
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

   

       

    
        <Reveal>

          <div className="partner-cta">

            <div className="partner-cta-content">

              <span>
                Build Impact Together
              </span>

              <h2>
                Become A Strategic
                NGO Partner
              </h2>

              <p>
                Partner with us to create scalable impact,
                empower underserved communities,
                and support sustainable social transformation.
              </p>

            </div>
<Link to="/contact">
            <button className="partner-btn">

              Partner With Us

              <ArrowRight size={18} />

            </button>
            </Link>

          </div>

        </Reveal>

      </div>
    </section>
  );
}
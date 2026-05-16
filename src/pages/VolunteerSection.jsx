// PartnershipSection.jsx

import React from "react";
import "./VolunteerSection.css";

const partners = [
  {
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    name: "HDFC",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg",
  },
  {
    name: "TVS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/83/TVS_Motor_Logo.svg",
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
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Bosch-logo.svg",
  },
  {
    name: "Tata",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg",
  },
  {
    name: "ICICI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg",
  },
];

export default function VolunteerSection() {
  return (
    <section className="partner-section">

      {/* BACKGROUND GLOW */}

      <div className="partner-glow one"></div>
      <div className="partner-glow two"></div>

      <div className="partner-container">

        {/* HEADER */}

        <div className="partner-header">

          <span className="partner-tag">
            TRUSTED PARTNERS
          </span>

          <h2>
            Together We Create
            <span> Bigger Impact</span>
          </h2>

          <p>
            We collaborate with visionary brands and organizations
            committed to creating sustainable social change and
            empowering communities worldwide.
          </p>

        </div>

        {/* LOGO GRID */}

        <div className="partner-grid">

          {partners.map((item, index) => (

            <div className="partner-card" key={index}>

              <img
                src={item.logo}
                alt={item.name}
              />

            </div>

          ))}

        </div>

        {/* CTA */}

        <div className="partner-cta">

          <div className="partner-cta-content">

            <h3>
              Become A Strategic Partner
            </h3>

            <p>
              Join hands with us to scale impact-driven
              initiatives and build stronger communities together.
            </p>

          </div>

          <button>
            Partner With Us
          </button>

        </div>

      </div>

    </section>
  );
}
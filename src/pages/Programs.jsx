import React from "react";

// ProgramsSection.jsx

import "./Programs.css";

const programs = [
  {
    title: "Women & Youth Empowerment",
    description:
      "Encouraging confidence, independence, and leadership among women and youth through education and skill-building initiatives.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    title: "Skill Development & Livelihood Training",
    description:
      "Providing industry-relevant skills to enhance employability and support sustainable livelihoods for youth and women.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },
  {
    title: "Placement Support & Job Drives",
    description:
      "Connecting trained candidates with job opportunities through structured placement support, career guidance, and recruitment drives.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978",
  },
  {
    title: "Education & Digital Literacy Programs",
    description:
      "Empowering students with essential digital skills including computer basics, internet usage, and modern learning tools.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
  },
];

export default function ProgramsSection() {
  return (
    <section className="programs-section">
      <div className="container">

        {/* HEADER */}
        <div className="section-header">
          <h2>Programs</h2>

          <p>
            We are committed to addressing the root causes of inequality by
            creating access to opportunities that empower individuals and
            communities. Our organization works at the intersection of education,
            skill development, and technology to design impactful solutions.
          </p>

          <p>
            We believe that every individual deserves the chance to learn, grow,
            and succeed. Through collaborative partnerships and innovative
            approaches, we continue to expand our reach and impact.
          </p>
        </div>

        {/* PROGRAM CARDS */}
        <div className="programs-grid">
          {programs.map((program, index) => (
            <div className="program-card" key={index}>

              <img src={program.image} alt={program.title} />

              <div className="overlay">

                <div className="content">
                  <h3>{program.title}</h3>

                  <p>{program.description}</p>

                  <button>Enroll Now</button>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* CTA SECTION */}
        <div className="cta-box">

          <h2>Ready to Start Your Learning Journey?</h2>

          <p>
            Get in touch with our admissions team to find the right program for you.
          </p>

          <div className="cta-buttons">
            <button className="white-btn">Contact Admissions</button>

            <button className="green-btn">Download Brochure</button>
          </div>

        </div>

      </div>
    </section>
  );
}
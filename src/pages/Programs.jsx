import React, { useEffect } from "react";
import "./Programs.css";

const programs = [
  {
    title: "Women Empowerment",
    category: "Leadership & Growth",
    description:
      "Building confidence, leadership, and financial independence among women through practical learning and mentorship.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Youth Skill Development",
    category: "Career Training",
    description:
      "Industry-focused skill training programs designed to improve employability and career opportunities for youth.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Placement Assistance",
    category: "Employment Support",
    description:
      "Career guidance, interview preparation, and job placement drives connecting candidates with employers.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Digital Literacy",
    category: "Technology Education",
    description:
      "Computer basics, internet skills, and digital learning programs for students and underserved communities.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Entrepreneurship Training",
    category: "Startup & Business",
    description:
      "Helping aspiring entrepreneurs develop business ideas, financial knowledge, and startup management skills.",
    image:
      "https://images.unsplash.com/photo-1552664688-cf412ec27db2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Community Development",
    category: "Social Impact",
    description:
      "Creating sustainable community initiatives focused on education, awareness, and local empowerment.",
    image:
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1200&auto=format&fit=crop",
  },
];

const stats = [
  { number: "5000+", label: "Students Trained" },
  { number: "120+", label: "Workshops Conducted" },
  { number: "3500+", label: "Placements Supported" },
  { number: "40+", label: "Partner Organizations" },
];

export default function ProgramsSection() {
  useEffect(() => {
    const cards = document.querySelectorAll(".animate-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-animation");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="programs-section">
      {/* Floating Background Shapes */}
      <div className="bg-circle bg1"></div>
      <div className="bg-circle bg2"></div>

      <div className="programs-container">
        {/* HERO */}
        <div className="programs-hero">
          <div className="hero-left animate-card">
            <span className="section-tag">Our Programs</span>

            <h1>
              Empowering Communities Through Education & Skills
            </h1>

            <p>
              We create meaningful opportunities for women and youth through
              education, digital literacy, livelihood programs, and employment
              support.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">
                Explore Programs
              </button>

              <button className="secondary-btn">
                Contact Us
              </button>
            </div>
          </div>

          <div className="hero-right animate-card">
            <img
              src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1200&auto=format&fit=crop"
              alt="NGO Programs"
            />
          </div>
        </div>

        {/* STATS */}
        <div className="stats-section">
          {stats.map((item, index) => (
            <div
              className="stat-card animate-card"
              key={index}
            >
              <h2>{item.number}</h2>
              <p>{item.label}</p>
            </div>
          ))}
        </div>

        {/* HEADER */}
        <div className="section-header animate-card">
          <span className="section-tag">
            Featured Initiatives
          </span>

          <h2>
            Programs That Create Real Impact
          </h2>

          <p>
            Our initiatives bridge education, technology, and livelihood
            opportunities while creating inclusive growth for communities.
          </p>
        </div>

        {/* PROGRAMS */}
        <div className="programs-grid">
          {programs.map((program, index) => (
            <div
              className="program-card animate-card"
              key={index}
              style={{
                transitionDelay: `${index * 0.15}s`,
              }}
            >
              <div className="program-image">
                <img
                  src={program.image}
                  alt={program.title}
                />
              </div>

              <div className="program-content">
                <span>{program.category}</span>

                <h3>{program.title}</h3>

                <p>{program.description}</p>

                <button>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* WHY SECTION */}
        <div className="why-section">
          <div className="why-left animate-card">
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
              alt="Why Choose Us"
            />
          </div>

          <div className="why-right animate-card">
            <span className="section-tag">
              Why Choose Us
            </span>

            <h2>
              Building Brighter Futures Together
            </h2>

            <div className="why-points">
              <div className="why-card">
                <h4>Experienced Trainers</h4>
                <p>
                  Learn from skilled mentors with real industry and community
                  experience.
                </p>
              </div>

              <div className="why-card">
                <h4>Hands-on Learning</h4>
                <p>
                  Practical workshops and project-based learning for better
                  outcomes.
                </p>
              </div>

              <div className="why-card">
                <h4>Career Opportunities</h4>
                <p>
                  Placement support and career guidance for long-term success.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="cta-section animate-card">
          <h2>
            Ready to Start Your Learning Journey?
          </h2>

          <p>
            Join our programs and become part of a community focused on growth,
            empowerment, and opportunity.
          </p>

          <div className="cta-buttons">
            <button className="primary-btn">
              Apply Now
            </button>

            <button className="secondary-btn">
              Contact Admissions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
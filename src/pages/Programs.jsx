// ProgramsSection.jsx

import React, { useEffect } from "react";
import {
  GraduationCap,
  Users,
  Briefcase,
  Laptop,
  ArrowRight,
  Sparkles,
  HeartHandshake,
  Globe,
} from "lucide-react";

import "./Programs.css";

const programs = [
  {
    title: "Women Empowerment",
    category: "Leadership",
    icon: <HeartHandshake size={20} />,
    description:
      "Empowering women through leadership training, mentorship, and financial literacy.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Youth Skill Development",
    category: "Career Growth",
    icon: <GraduationCap size={20} />,
    description:
      "Industry-focused training helping youth build modern employable skills.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Digital Literacy",
    category: "Technology",
    icon: <Laptop size={20} />,
    description:
      "Providing digital education and internet literacy for underserved communities.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Placement Assistance",
    category: "Employment",
    icon: <Briefcase size={20} />,
    description:
      "Interview support, placement drives, and employer connections.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Placement Assistance",
    category: "Employment",
    icon: <Briefcase size={20} />,
    description:
      "Interview support, placement drives, and employer connections.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Placement Assistance",
    category: "Employment",
    icon: <Briefcase size={20} />,
    description:
      "Interview support, placement drives, and employer connections.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  },
];

const stats = [
  {
    number: "5000+",
    label: "Students Trained",
  },
  {
    number: "3500+",
    label: "Placements",
  },
  {
    number: "120+",
    label: "Workshops",
  },
  {
    number: "40+",
    label: "Communities",
  },
];

export default function Programs() {
  useEffect(() => {
    const cards = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="programs-section">
      <div className="gradient-circle circle1"></div>
      <div className="gradient-circle circle2"></div>

      <div className="container">
        {/* HERO */}
        <div className="hero-section">
          <div className="hero-left fade-up">
            <div className="tag">
              <Sparkles size={14} />
              Our Programs
            </div>

            <h2>
              Empowering Communities Through Education & Opportunity
            </h2>

            <p>
              Creating meaningful opportunities for youth and women through
              education, digital literacy, employability, and social impact
              programs.
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

          <div className="hero-right fade-up">
            <div className="hero-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1200&auto=format&fit=crop"
                alt="NGO"
              />

              <div className="floating-card card1">
                

                <div>
                  <h4>5000+</h4>
                  <p>Lives Impacted</p>
                </div>
              </div>

              <div className="floating-card card2">
               

                <div>
                  <h4>40+</h4>
                  <p>Communities</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="stats-grid fade-up">
          {stats.map((item, index) => (
            <div className="stat-card" key={index}>
              <h2>{item.number}</h2>
              <p>{item.label}</p>
            </div>
          ))}
        </div>

        {/* HEADER */}
        <div className="section-header fade-up">
          <span>Featured Initiatives</span>

          <h2>Programs Creating Real Impact</h2>

          <p>
            Our initiatives bridge education, employment, technology, and
            empowerment to build sustainable futures.
          </p>
        </div>

        {/* PROGRAMS */}
        <div className="programs-grid">
          {programs.map((program, index) => (
            <div
              className="program-card fade-up"
              key={index}
              style={{
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              <div className="program-image">
                <img
                  src={program.image}
                  alt={program.title}
                />

                <div className="overlay"></div>

                <div className="category-tag">
                  {program.category}
                </div>
              </div>

              <div className="program-content">
                {/* <div className="program-icon">
                  {program.icon}
                </div> */}

                <h3>{program.title}</h3>

                <p>{program.description}</p>

                <button>
                  Learn More
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FEATURE SECTION */}
        <div className="feature-section fade-up">
          <div className="feature-image">
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />
          </div>

          <div className="feature-content">
            <span>Why Choose Us</span>

            <h2>
              Building Better Futures Through Inclusive Learning
            </h2>

            <p>
              We focus on practical learning, mentorship, career opportunities,
              and sustainable community transformation.
            </p>

            <div className="feature-points">
              <div className="point">
                <div className="dot"></div>
                Experienced Trainers
              </div>

              <div className="point">
                <div className="dot"></div>
                Hands-on Workshops
              </div>

              <div className="point">
                <div className="dot"></div>
                Placement Assistance
              </div>

              <div className="point">
                <div className="dot"></div>
                Community Development
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="cta-section fade-up">
          <h2>
            Together We Can Create Opportunities 
          </h2>

          <p>
            Join our mission to empower communities through education,
            opportunity, and sustainable growth.
          </p>

          <div className="cta-buttons">
            <button className="primary-btn">
              Apply Now
            </button>

            <button className="secondary-btn">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
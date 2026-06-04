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
import { Link } from "react-router-dom";
import womenEmpowermentImg from "../assets/programs/women.png";
const programs = [
  {
  title: "Women Empowerment",
  category: "Leadership",
  icon: <HeartHandshake size={20} />,
  description:
    "Empowering women through leadership training, mentorship, and financial literacy.",
  image: womenEmpowermentImg,
},

  {
    title: "Youth Skill Development",
    category: "Career Growth",
    icon: <GraduationCap size={20} />,
    description:
      "Industry-focused training helping youth build modern employable skills.",
    image:
      "https://images.unsplash.com/photo-1616674202799-054e7c831378?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8eW91dGglMjBza2lsbCUyMHJ1cmFsJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D",
  },

  {
    title: "Digital Literacy",
    category: "Technology",
    icon: <Laptop size={20} />,
    description:
      "Providing digital education and internet literacy for underserved communities.",
    image:
      "https://images.pexels.com/photos/3401402/pexels-photo-3401402.jpeg",
  },

  {
    title: "Healthcare Awareness",
    category: "Community Health",
    icon: <Briefcase size={20} />,
    description:
      "Conducting health camps, awareness programs, and preventive healthcare initiatives.",
    image:
      "https://images.pexels.com/photos/28141441/pexels-photo-28141441.jpeg",
  },
  {
    title: "Placement Assistance",
    category: "Employment",
    icon: <Briefcase size={20} />,
    description:
      "Interview support, placement drives, and employer connections.",
    image:
      "https://images.pexels.com/photos/13062476/pexels-photo-13062476.jpeg",
  },
  {
    title: "Rural Education Support",
    category: "Development",
    icon: <Briefcase size={20} />,
    description:
      "Supporting rural students with learning resources, scholarships, and tutoring programs.",
    image:
      "https://images.pexels.com/photos/37249876/pexels-photo-37249876.jpeg",
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
               <Link to="/contact">
              <button className="primary-btn">
                Explore Programs
              </button>
              </Link>
 <Link to="/contact">
              <button className="secondary-btn">
                Contact Us
              </button>
               </Link>
            </div>

          </div>

          <div className="hero-right fade-up">
            <div className="hero-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9vciUyMGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
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
            {/* <span>Why Choose Us</span> */}

            <h2>
              Inclusive Learning for Better Futures
            </h2>

            <p>
             We focus on practical learning, mentorship, career opportunities,
and sustainable community transformation.

Our initiatives are designed to empower individuals with real-world
skills, confidence, and access to meaningful growth opportunities.


            </p>

            <Link to="/contact">
              <button className="primary-btn">
                Explore Programs
              </button>
</Link>
          
          </div>
        </div>

        {/* CTA */}
        <div className="cta-section fade-up">
          <h2>
            Together We Can Create Opportunities 
          </h2>

          <p>
            Join our mission to empower communities through education,
           and sustainable growth.
          </p>

          <div className="cta-buttons">
             <Link to="/contact">
            <button className="primary-btn">
              Apply Now
            </button>
</Link>
 <Link to="/contact">
            <button className="secondary-btn">
              Donate Now
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
// CareerProjectsSection.jsx

import React, { useEffect, useRef } from "react";

import {
  ArrowRight,
  Sparkles,
  Briefcase,
  Globe2,
  GraduationCap,
} from "lucide-react";

import "./SkillDevelopmentCourses.css";

/* =========================
   PROJECTS DATA
========================= */

const projects = [
  {
    title: "Industry Internship Program",
    category: "Career Development",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop",
  },

  {
    title: "AI & Data Science Lab",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop",
  },

  {
    title: "Global Leadership Bootcamp",
    category: "Leadership",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop",
  },

  {
    title: "Software Engineering Academy",
    category: "Engineering",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop",
  },

  {
    title: "Women Career Empowerment",
    category: "Social Impact",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1400&auto=format&fit=crop",
  },

  {
    title: "International Language Program",
    category: "Global Learning",
    image:
      "https://images.unsplash.com/photo-1522202222206-b750f2f1f0a3?q=80&w=1400&auto=format&fit=crop",
  },
];

/* =========================
   REVEAL
========================= */

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
        threshold:0.15,
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

export default function SkillDevelopmentCourses() {

  return (
    <section className="career-projects-section">

      {/* GLOW */}

      <div className="projects-glow glow1"></div>
      <div className="projects-glow glow2"></div>

      <div className="career-projects-container">

        {/* HERO */}

        <Reveal>

          <div className="projects-hero">

            {/* LEFT */}

            <div className="projects-left">

              <div className="projects-badge">

                <Sparkles size={15} />

                Career Excellence

              </div>

              <h1>
                Building Future Careers
                Through Real Projects
              </h1>

              <p>
                Our career-focused initiatives combine
                practical learning, mentorship, industry
                exposure, and innovation-driven experiences
                preparing youth for the future workforce.
              </p>

              <div className="projects-buttons">

                <button className="primary-btn">

                  Explore Programs

                  <ArrowRight size={18} />

                </button>

                <button className="secondary-btn">

                  View Success Stories

                </button>

              </div>

            </div>

            {/* RIGHT */}

            <div className="projects-right">

              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop"
                alt=""
              />

              {/* FLOAT CARD */}

              <div className="floating-project-card">

               

                <div>

                  <h3>
                    5000+
                  </h3>

                  <p>
                    Students Career Ready
                  </p>

                </div>

              </div>

            </div>

          </div>

        </Reveal>

       


        {/* PROJECT GRID */}

        <div className="projects-grid">

          {projects.map((project, index) => (

            <Reveal key={index}>

              <div className="project-card">

                {/* IMAGE */}

                <div className="project-image">

                  <img
                    src={project.image}
                    alt={project.title}
                  />

                  <div className="project-overlay"></div>

                  <span className="project-category">

                    {project.category}

                  </span>

                </div>

                {/* CONTENT */}

                <div className="project-content">

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    Real-world learning experiences helping
                    students gain practical exposure and
                    professional confidence.
                  </p>

                  <button>

                    Explore Project

                    <ArrowRight size={16} />

                  </button>

                </div>

              </div>

            </Reveal>

          ))}

        </div>

      </div>

    </section>
  );
}
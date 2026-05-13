// SkillDevelopmentCourses.jsx

import React from "react";
import "./SkillDevelopmentCourses.css";

const leftCourses = [
  {
    no: "01",
    title: "Civil CAD",
    desc: "Structure design and urban planning tools",
  },
  {
    no: "02",
    title: "Mechanical CAD",
    desc: "Precision engineering and industrial modeling",
  },
  {
    no: "03",
    title: "Embedded System Design",
    desc: "Microcontroller programming and IoT systems",
  },
  {
    no: "04",
    title: "Graphic Designing",
    desc: "Visual communication and brand identity",
  },
  {
    no: "05",
    title: "SAP & Tally Training",
    desc: "ERP solutions and financial management",
  },
  {
    no: "06",
    title: "Lean Six Sigma Courses",
    desc: "Process improvement and efficiency experts",
  },
  {
    no: "07",
    title: "Online Degree Courses",
    desc: "Flexible global accreditation programs",
  },
];

const rightCourses = [
  {
    no: "08",
    title: "Programming Languages",
    desc: "Foundational Mastery in C, C++, Java, Python",
  },
  {
    no: "09",
    title: "Data Analytics & Data Science",
    desc: "Extracting insights from complex datasets",
  },
  {
    no: "10",
    title: "Full Stack Development",
    desc: "Comprehensive web application engineering",
  },
  {
    no: "11",
    title: "Software Testing",
    desc: "Quality assurance and bug lifecycle management",
  },
  {
    no: "12",
    title: "Foreign Languages",
    desc: "Global communication and cultural competence",
  },
  {
    no: "13",
    title: "Artificial Intelligence",
    desc: "Machine learning and neural network training",
  },
  {
    no: "14",
    title: "Cloud Computing",
    desc: "AWS, Azure and scalable infra management",
  },
];

const SkillDevelopmentCourses = () => {
  return (
    <section className="skill-development-main-section">

      <div className="skill-development-container">

        {/* TOP AREA */}
        <div className="skill-development-top-layout">

          {/* LEFT CONTENT */}
          <div className="skill-development-left-content">

            <span className="skill-development-badge">
              Professional Excellence
            </span>

            <h2>
              Skill Development
              <br />
              Courses
            </h2>

            <p>
              Empowering the next generation of global leaders through
              specialized technical training and professional certification
              programs designed for immediate career impact.
            </p>

          </div>

          {/* RIGHT CARD */}
          <div className="skill-development-student-card">

            <div className="skill-development-image-wrapper">

              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                alt="Students"
              />

            </div>

            <div className="skill-development-student-footer">

              <div className="student-green-icon">
                ↗
              </div>

              <h3>
                Join 5,000+ Students
              </h3>

            </div>

          </div>

        </div>

        {/* COURSE GRID */}
        <div className="skill-development-course-grid">

          {/* LEFT */}
          <div className="skill-development-course-column">

            {leftCourses.map((course, index) => (
              <div
                className="skill-development-course-card"
                key={index}
              >

                <span className="course-number">
                  {course.no}
                </span>

                <div className="course-content">

                  <h4>
                    {course.title}
                  </h4>

                  <p>
                    {course.desc}
                  </p>

                </div>

                <div className="course-icon">
                  ✦
                </div>

              </div>
            ))}

          </div>

          {/* RIGHT */}
          <div className="skill-development-course-column">

            {rightCourses.map((course, index) => (
              <div
                className="skill-development-course-card"
                key={index}
              >

                <span className="course-number">
                  {course.no}
                </span>

                <div className="course-content">

                  <h4>
                    {course.title}
                  </h4>

                  <p>
                    {course.desc}
                  </p>

                </div>

                <div className="course-icon">
                  ✦
                </div>

              </div>
            ))}

          </div>

        </div>

        {/* BUTTON */}
        <div className="skill-development-button-area">

          <button>
            Explore Full Curriculum
          </button>

          <p>
            Certifications recognized by 200+ industry partners
          </p>

        </div>

      </div>

    </section>
  );
};

export default SkillDevelopmentCourses;
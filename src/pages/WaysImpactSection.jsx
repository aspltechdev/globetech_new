// VolunteerImpactExperience.jsx

import React, { useEffect, useRef } from "react";
import "./WaysImpactSection.css";
import { FaArrowRight } from "react-icons/fa";

const stories = [
  {
    title: "A Child’s Future Changed Forever",
    text: "One volunteer introduced digital education to a rural classroom. Today, dozens of children are learning technology for the very first time.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1400&auto=format&fit=crop",
  },

  {
    title: "Communities Learning Together",
    text: "From education drives to awareness programs, every initiative creates stronger, more connected communities.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop",
  },

  {
    title: "Women Building Independent Lives",
    text: "Skill development and mentorship programs are helping women create sustainable careers and financial independence.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1400&auto=format&fit=crop",
  },
];

const Reveal = ({ children }) => {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("active");
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
};

export default function WaysImpactSection() {
  return (
    <section className="impact-experience">

      {/* FLOATING BACKGROUND */}

      <div className="blur-circle one"></div>
      <div className="blur-circle two"></div>

      <div className="impact-container">

        {/* INTRO */}

        <Reveal>
          <div className="intro-section">

            {/* <span className="mini-tag">
              VOLUNTEER EXPERIENCE
            </span> */}

            <h1>
              People Don’t Join
              <span> NGOs.</span>
              <br />
              They Join
              <span> Purpose.</span>
            </h1>

            <p>
              Every action creates a ripple effect.
              Every volunteer becomes part of a story bigger
              than themselves. This is where compassion becomes impact.
            </p>

          </div>
        </Reveal>

        {/* IMMERSIVE STORY BLOCKS */}

        <div className="story-wrapper">

          {stories.map((item, index) => (

            <Reveal key={index}>

              <div
                className={`story-block ${
                  index % 2 === 0 ? "" : "reverse"
                }`}
              >

                {/* IMAGE */}

                <div className="story-image">

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  <div className="image-overlay"></div>

                  {/* FLOATING QUOTE */}

                  <div className="floating-quote">
                    “Real impact begins with small acts of kindness.”
                  </div>

                </div>

                {/* CONTENT */}

                <div className="story-content">

                  <div className="story-line"></div>

                  <h2>{item.title}</h2>

                  <p>{item.text}</p>

                  <button>
                    Become A Volunteer
                    <FaArrowRight />
                  </button>

                </div>

              </div>

            </Reveal>

          ))}

        </div>

        {/* EMOTIONAL CTA */}

        <Reveal>

          <div className="emotion-cta">

            <div className="emotion-image">

              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1400&auto=format&fit=crop"
                alt=""
              />

            </div>

            <div className="emotion-content">

              <span>JOIN THE MOVEMENT</span>

              <h2>
                Your Time Can
                Change Someone’s
                Entire Life
              </h2>

              <p>
                Whether you teach, mentor, organize,
                support, or simply care — your presence
                can create opportunities and hope for people
                who truly need it.
              </p>

              {/* STATS */}

              <div className="impact-stats">

                <div className="stat-box">
                  <h3>12K+</h3>
                  <p>Lives Impacted</p>
                </div>

                <div className="stat-box">
                  <h3>450+</h3>
                  <p>Volunteers</p>
                </div>

                <div className="stat-box">
                  <h3>80+</h3>
                  <p>Programs</p>
                </div>

              </div>

              <button className="join-btn">
                Start Your Journey
                <FaArrowRight />
              </button>

            </div>

          </div>

        </Reveal>

      </div>
    </section>
  );
}
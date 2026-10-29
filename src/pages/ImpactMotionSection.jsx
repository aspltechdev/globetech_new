import React, { useEffect, useRef } from "react";

import {
  ArrowRight,
  Camera,
  Sparkles,
} from "lucide-react";

import "./ImpactMotionSection.css";

const galleryImages = [
  {
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    title: "Community Workshops",
  },

  {
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop",
    title: "Women Empowerment",
  },

  {
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1200&auto=format&fit=crop",
    title: "Volunteer Programs",
  },

  {
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    title: "Youth Leadership",
  },

  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    title: "Digital Literacy",
  },

  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    title: "Skill Development",
  },

  {
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop",
    title: "Community Events",
  },

  {
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    title: "Career Guidance",
  },
];

/* REVEAL */

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

export default function ImpactMotionSection() {

  return (
    <section className="impact-gallery-section">

      {/* GLOW */}

      <div className="gallery-glow glow1"></div>
      <div className="gallery-glow glow2"></div>

      <div className="impact-gallery-container">

        {/* HEADER */}

        <Reveal>

          <div className="gallery-header">

            <div className="gallery-badge">

              <Sparkles size={15} />

              Impact In Motion

            </div>

            <h1>
              Real Stories.
              Real Communities.
              Real Change.
            </h1>

            <p>
              Explore moments of transformation,
              collaboration, education, and empowerment
              captured across our community initiatives.
            </p>

          </div>

        </Reveal>

        {/* FEATURED HERO */}

        <Reveal>

          <div className="featured-gallery-card">

            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1400&auto=format&fit=crop"
              alt=""
            />

            <div className="featured-overlay"></div>

            <div className="featured-content">

              <span>
                Featured Story
              </span>

              <h2>
                Empowering Youth Through
                Meaningful Learning Experiences
              </h2>

              <button>

                Explore Gallery

                <ArrowRight size={18} />

              </button>

            </div>

          </div>

        </Reveal>

        {/* MODERN PINTEREST GALLERY */}

        <div className="modern-gallery-grid">

          {galleryImages.map((item, index) => (

            <Reveal key={index}>

              <div className="modern-gallery-card">

                <img
                  src={item.image}
                  alt={item.title}
                />

                {/* OVERLAY */}

                <div className="modern-gallery-overlay">

                  <div className="gallery-overlay-content">

                    <span>
                      Community Initiative
                    </span>

                    <h3>
                      {item.title}
                    </h3>

                  </div>

                </div>

                {/* FLOAT ICON */}

                <div className="gallery-float-icon">

                  <Camera size={18} />

                </div>

              </div>

            </Reveal>

          ))}

        </div>

      </div>

    </section>
  );
}
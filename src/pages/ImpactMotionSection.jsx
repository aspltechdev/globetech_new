// ImpactMotionSection.jsx

import React from "react";
import "./ImpactMotionSection.css";

const galleryImages = [
  "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
];

const ImpactMotionSection = () => {
  return (
    <section className="impact-motion-main-section">

      <div className="impact-motion-container">

        {/* HEADER */}
        <div className="impact-motion-header">

          <h2>
            Impact in Motion
          </h2>

          <p>
            Capturing the moments of collaboration, learning, and celebration
            from our recent global initiatives.
          </p>

        </div>

        {/* GALLERY */}
        <div className="impact-motion-gallery-grid">

          {galleryImages.map((image, index) => (
            <div
              className="impact-motion-gallery-card"
              key={index}
            >

              <img
                src={image}
                alt={`Impact ${index + 1}`}
              />

              {/* OVERLAY */}
              <div className="impact-motion-overlay">

                <span>
                  Global Initiative
                </span>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default ImpactMotionSection;
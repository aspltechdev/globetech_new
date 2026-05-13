// ImpactSection.jsx

import React from "react";
import "./ImpactSection.css";

import impactImg1 from "./../assets/impact/impact-1.png";
import impactImg2 from "./../assets/impact/impact-2.png";

const ImpactSection = () => {
  return (
    <section className="impact-main-section">

      <div className="impact-main-container">

        {/* TOP */}
        <div className="impact-header-area">

          <h2 className="impact-main-title">
            Impact
          </h2>

          <p className="impact-main-description">
            Our impact is a reflection of the lives we have touched and the communities we have helped transform. Through our initiatives, we have created opportunities for individuals to access education, develop skills, and build sustainable livelihoods. Each number represents a story of growth, resilience, and change, highlighting the difference that access and support can make.
We believe that true impact goes beyond statistics—it is about empowering individuals, strengthening communities, and creating lasting change. By continuously measuring and improving our efforts, we ensure that our initiatives remain effective, scalable, and meaningful. Our commitment is to create impact that not only addresses present challenges but also builds a stronger foundation for the future.
          </p>

        </div>

        {/* STATS */}
        <div className="impact-stats-grid">

          <div className="impact-single-stat-card">
            <h3>10,000+</h3>
            <p>Lives Impacted</p>
          </div>

          <div className="impact-single-stat-card">
            <h3>500+</h3>
            <p>Students Guided</p>
          </div>

          <div className="impact-single-stat-card">
            <h3>50+</h3>
            <p>Community Programs</p>
          </div>

          <div className="impact-single-stat-card">
            <h3>20+</h3>
            <p>Partner Organizations</p>
          </div>

        </div>

        {/* VOICES */}
        <div className="impact-voices-header">

          <div>
            <h2>Voices from the Field</h2>
            <p>
              Real stories of resilience and progress from our global community.
            </p>
          </div>

          <div className="impact-slider-buttons">
            <button>‹</button>
            <button>›</button>
          </div>

        </div>

        {/* IMAGE SLIDER */}
        <div className="impact-slider-wrapper">

          <div className="impact-slider-track">

            <div className="impact-image-card">

              <img src={impactImg1} alt="Impact" />

              <div className="impact-image-overlay">

                <span>SUSTAINABILITY</span>

                <h3>Skilling & Placement</h3>

                <p>
                  Empowering youth for career opportunities and growth.
                </p>

              </div>

            </div>

            <div className="impact-image-card">

              <img src={impactImg2} alt="Impact" />

              <div className="impact-image-overlay">

                <span>ENVIRONMENT</span>

                <h3>Environmental Protection</h3>

                <p>
                  Creating awareness and protecting nature together.
                </p>

              </div>

            </div>

            {/* DUPLICATE FOR SMOOTH LOOP */}

            <div className="impact-image-card">

              <img src={impactImg1} alt="Impact" />

              <div className="impact-image-overlay">

                <span>SUSTAINABILITY</span>

                <h3>Skilling & Placement</h3>

                <p>
                  Empowering youth for career opportunities and growth.
                </p>

              </div>

            </div>

            <div className="impact-image-card">

              <img src={impactImg2} alt="Impact" />

              <div className="impact-image-overlay">

                <span>ENVIRONMENT</span>

                <h3>Environmental Protection</h3>

                <p>
                  Creating awareness and protecting nature together.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* TESTIMONIALS */}
        <div className="impact-testimonial-layout">

          {/* LEFT */}
          <div className="impact-testimonial-left">

            <div className="impact-quote-icon">
              ❝
            </div>

            <h2>
              What the
              <br />
              Community Says
            </h2>

            <p>
              The impact of Globetech Foundation is visible in the stories
              of transformation shared by students and communities who have
              benefited from our training, development, and empowerment initiatives.
            </p>

          </div>

          {/* RIGHT */}
          <div className="impact-testimonial-grid">

            <div className="impact-testimonial-card">
              <p>
                “The industrial visits and workshops helped me understand
                real-world industry environments and improved my confidence.”
              </p>

              <div className="impact-user-info">
                <img
                  src="https://i.pravatar.cc/100?img=12"
                  alt=""
                />
                <div>
                  <h4>Harish P</h4>
                  <span>Student Participant</span>
                </div>
              </div>
            </div>

            <div className="impact-testimonial-card">
              <p>
                “The training programs provided practical exposure and
                industry-oriented learning that prepared students for workplace needs.”
              </p>

              <div className="impact-user-info">
                <img
                  src="https://i.pravatar.cc/100?img=32"
                  alt=""
                />
                <div>
                  <h4>Priya K</h4>
                  <span>Program Coordinator</span>
                </div>
              </div>
            </div>

            <div className="impact-testimonial-card">
              <p>
                “Globetech’s skill development initiatives are helping local
                youth professionals gain employability and professional confidence.”
              </p>

              <div className="impact-user-info">
                <img
                  src="https://i.pravatar.cc/100?img=48"
                  alt=""
                />
                <div>
                  <h4>Arun M</h4>
                  <span>Industry Trainer</span>
                </div>
              </div>
            </div>

            <div className="impact-testimonial-card">
              <p>
                “The nation’s workshops and career guidance sessions inspired
                our students to become more responsible and skilled individuals.”
              </p>

              <div className="impact-user-info">
                <img
                  src="https://i.pravatar.cc/100?img=15"
                  alt=""
                />
                <div>
                  <h4>Bhavi R</h4>
                  <span>Training Program Volunteer</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ImpactSection;
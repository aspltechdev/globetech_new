// AboutMissionVisionSection.jsx

import "./AboutMissionVisionSection.css";

export default function AboutMissionVisionSection() {
  return (
    <section className="about-section">
      <div className="container">

        {/* TOP SECTION */}
        <div className="mission-wrapper">

          <div className="top-image">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt="Mission Vision"
            />

            <div className="play-btn">
              <span></span>
            </div>
          </div>

          <div className="blue-bg"></div>

          {/* CARDS */}
          <div className="cards">

            <div className="card">
              <div className="tag">Our Mission</div>

              <p>
                Empowering underserved communities through education,
                skill development, and technology-driven initiatives.
                We create practical, scalable solutions that improve
                livelihoods and enable individuals to build a better future.
              </p>
            </div>

            <div className="card">
              <div className="tag">Our Vision</div>

              <p>
                To build a future where everyone has access to opportunities,
                resources, and the tools needed to thrive. We aim to create
                inclusive, resilient communities that drive lasting positive change.
              </p>
            </div>

          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="content-section">
          <h2>What We Do</h2>

          <p>
            We focus on addressing key challenges that limit access to growth
            and opportunity in underserved communities. Through education and
            career guidance, we help individuals make informed decisions and
            access better learning pathways.
          </p>

          <p>
            Our skill development initiatives equip people with industry-relevant
            capabilities, enabling them to secure sustainable employment and
            build stable livelihoods.
          </p>

          <p>
            At the same time, we leverage technology to solve real-world
            community challenges, improving access to resources and creating
            efficient, scalable solutions.
          </p>

          <p>
            Our work is deeply rooted in community development, where we support
            grassroots initiatives that uplift local communities. By fostering
            collaboration, inclusivity, and long-term growth, we aim to create
            stronger, self-reliant communities that can thrive independently.
          </p>
        </div>

      </div>
    </section>
  );
}
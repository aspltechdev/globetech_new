import React from "react";
import "./PillarCard.css";

const PillarCard = ({ image, title, description }) => {
  return (
    <div className="pillar-card">

      <div className="pillar-card-image">

        <img src={image} alt={title} />

        <a href="/" className="pillar-card-link-icon">
          <i className="bi bi-arrow-up-right"></i>
        </a>

      </div>

      <div className="pillar-card-content">

        <h3 className="pillar-card-title">
          {title}
        </h3>

        <p className="pillar-card-description">
          {description}
        </p>

        <a href="/" className="pillar-card-link">
          Learn More →
        </a>

      </div>

    </div>
  );
};

export default PillarCard;
import React from "react";

import impact1 from "../../assets/impact/impact-1.png";
import impact2 from "../../assets/impact/impact-2.png";
import impact3 from "../../assets/impact/impact-3.png";
import impact4 from "../../assets/impact/impact-4.png";
import impact5 from "../../assets/impact/impact-5.png";
import impact6 from "../../assets/impact/impact-6.png";
import impact7 from "../../assets/impact/impact-7.png";
import impact8 from "../../assets/impact/impact-8.png";
import impact9 from "../../assets/impact/impact-9.png";

import "./GallerySection.css";

/* =========================================
   GALLERY DATA
========================================= */

const galleryImages = [
  impact1,
  impact2,
  impact3,
  impact4,
  impact5,
  impact6,
  impact7,
  impact8,
  impact9,
];

const GallerySection = () => {

  return (

    <section className="auroGallerySection">

      <div className="auroGalleryContainer">

        {/* =====================================
            HEADING
        ====================================== */}

        <div className="auroGalleryHeading">

          <h2>
            Impact Gallery
          </h2>

        </div>

        {/* =====================================
            GRID
        ====================================== */}

        <div className="auroGalleryGrid">

          {galleryImages.map((image, index) => (

            <div
              className="auroGalleryCard"
              key={index}
            >

              <img
                src={image}
                alt={`Gallery ${index + 1}`}
              />

            </div>

          ))}

        </div>

      </div>

    </section>

  );
};

export default GallerySection;
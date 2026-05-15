// GallerySection.jsx

import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import impact1 from "../../assets/impact/impact-1.png";
import impact2 from "../../assets/impact/impact-2.png";
import impact3 from "../../assets/impact/impact-3.png";
import impact4 from "../../assets/impact/impact-4.png";
import impact5 from "../../assets/impact/impact-5.png";
import impact6 from "../../assets/impact/impact-6.png";

import "./GallerySection.css";

/* =========================================
   GALLERY DATA
========================================= */

const galleryImages = [

  {
    image: impact1,
    title: "Inauguration Ceremony",
  },

  {
    image: impact2,
    title: "Workshop Session",
  },

  {
    image: impact3,
    title: "Skill Development Program",
  },

  {
    image: impact4,
    title: "Community Initiative",
  },

  {
    image: impact5,
    title: "Training Event",
  },

  {
    image: impact6,
    title: "Industry Interaction",
  },

];

const GallerySection = () => {

  const sectionRef = useRef(null);

  const [showGallery, setShowGallery] = useState(false);

  /* =========================================
     SCROLL ANIMATION
  ========================================= */

  useEffect(() => {

    const observer = new IntersectionObserver(

      ([entry]) => {

        if (entry.isIntersecting) {

          setShowGallery(true);

        }

      },

      {
        threshold: 0.15,
      }

    );

    if (sectionRef.current) {

      observer.observe(sectionRef.current);

    }

    return () => observer.disconnect();

  }, []);

  return (

    <section
      className="auroGallerySection"
      ref={sectionRef}
    >

      <div className="auroGalleryContainer">

        {/* =====================================
            HEADING
        ===================================== */}

        <div className="auroGalleryHeading">

          <h2>
            Impact Gallery
          </h2>

        </div>

        {/* =====================================
            GRID
        ===================================== */}

        <div className="auroGalleryGrid">

          {galleryImages.map((item, index) => (

            <div
              className={`auroGalleryCard ${
                showGallery
                  ? "showGalleryCard"
                  : ""
              }`}
              key={index}
              style={{
                transitionDelay: `${index * 120}ms`,
              }}
            >

              {/* IMAGE */}

              <img
                src={item.image}
                alt={item.title}
              />

              {/* OVERLAY */}

              <div className="auroGalleryOverlay"></div>

              {/* TITLE */}

              <div className="auroGalleryContent">

                <p>
                  {item.title}
                </p>

              </div>

            </div>

          ))}

        </div>

        {/* =====================================
            BUTTON
        ===================================== */}

        {/* <div className="auroGalleryBtnWrapper">

          <button className="auroGalleryBtn">

            View More

          </button>

        </div> */}

      </div>

    </section>

  );
};

export default GallerySection;
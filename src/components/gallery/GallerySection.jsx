// GallerySection.jsx

import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import impact1 from "../../assets/impact/impact-1.png";
import impact2 from "../../assets/impact/impact-2.png";
import impact3 from "../../assets/impact/impact-3.png";
import impact4 from "../../assets/impact/impact-4.png";
import impact5 from "../../assets/impact/impact-5.png";
import impact6 from "../../assets/impact/impact-6.png";

import "./GallerySection.css";

/* =========================================================
   GALLERY DATA
========================================================= */

const galleryImages = [

  {
    image: impact1,

    title:
      "Inauguration Ceremony",

    category:
      "Community",
  },

  {
    image: impact2,

    title:
      "Workshop Session",

    category:
      "Training",
  },

  {
    image: impact3,

    title:
      "Skill Development Program",

    category:
      "Education",
  },

  {
    image: impact4,

    title:
      "Community Initiative",

    category:
      "Social Impact",
  },

  {
    image: impact5,

    title:
      "Training Event",

    category:
      "Empowerment",
  },

  {
    image: impact6,

    title:
      "Industry Interaction",

    category:
      "Career Growth",
  },

];

const GallerySection = () => {

  const sectionRef = useRef(null);

  const [showGallery, setShowGallery] =
    useState(false);

  /* =========================================================
     SCROLL REVEAL
  ========================================================= */

  useEffect(() => {

    const observer =
      new IntersectionObserver(

        ([entry]) => {

          if (entry.isIntersecting) {

            setShowGallery(true);

          }

        },

        {
          threshold: 0.12,
        }

      );

    if (sectionRef.current) {

      observer.observe(
        sectionRef.current
      );

    }

    return () =>
      observer.disconnect();

  }, []);

  return (

    <section
      className="gallerySection"
      ref={sectionRef}
    >

      {/* =========================================================
          GLOW
      ========================================================= */}

      <div className="galleryGlowOne"></div>

      <div className="galleryGlowTwo"></div>

      {/* =========================================================
          CONTAINER
      ========================================================= */}

      <div className="galleryContainer">

        {/* =========================================================
            HEADING
        ========================================================= */}

        <div
          className={
            showGallery
              ? "galleryHeading showGalleryHeading"
              : "galleryHeading"
          }
        >

        

          <h2>

            Stories Of
           

            Change &
           

            Community Impact.

          </h2>

          <p>

            Every initiative, workshop,
            training, and event creates
            meaningful transformation in
            the lives of students and
            communities.

          </p>

        </div>

        {/* =========================================================
            MASONRY GRID
        ========================================================= */}

        <div className="galleryGrid">

          {galleryImages.map(
            (item, index) => (

              <div
                className={
                  showGallery
                    ? "galleryCard showGalleryCard"
                    : "galleryCard"
                }

                key={index}

                style={{
                  transitionDelay:
                    `${index * 120}ms`,
                }}
              >

                {/* IMAGE */}

                <img
                  src={item.image}
                  alt={item.title}
                />

                {/* OVERLAY */}

                <div className="galleryOverlay"></div>

                {/* CONTENT */}

                <div className="galleryContent">

                  <span>

                    {item.category}

                  </span>

                  <h3>

                    {item.title}

                  </h3>

                  <div className="galleryArrow">

                    <ArrowUpRight
                      size={18}
                    />

                  </div>

                </div>

              </div>

            )
          )}

        </div>

        {/* =========================================================
            BUTTON
        ========================================================= */}

        <div
          className={
            showGallery
              ? "galleryBtnWrapper showGalleryBtn"
              : "galleryBtnWrapper"
          }
        >

          <button className="galleryBtn">

            View More Gallery

            <span>

              <ArrowUpRight
                size={18}
              />

            </span>

          </button>

        </div>

      </div>

    </section>

  );
};

export default GallerySection;
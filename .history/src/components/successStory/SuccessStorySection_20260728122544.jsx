import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import "./SuccessStorySection.css";
import img1 from "../../assets/Strategiclogo/s.png";
import img3 from "../../assets/Strategiclogo/p.png";
import img2 from "../../assets/v.png";
import img4 from "../../assets/g.png";

/* =========================================================
   STORIES
========================================================= */

const stories = [
  {
    id: 1,
    name: "Sudarshan N",
    role: "Advisor I – Technical Support",
    image: img1,
    quote:
      "This program gave me the skills, confidence, and opportunity that I was looking for.",
    before:
      "BCA graduate from an Economically Weaker Section (EWS) family; faced repeated interview rejections due to limited technical skills and industry exposure.",
    journey:
      "Enrolled in the HDFC Parivarthan-funded Data Analytics CSR Training Program at Globetech Engineering Solutions, Rajarajeshwarinagar, completing three months of technical, soft skills, and employability training.",
    today:
      "Now Advisor I – Technical Support at Concentrix Technologies India Pvt. Ltd. with a ₹3.70 LPA package.",
  },
  {
    id: 2,
    name: "Vedavati",
    role: "Process Associate",
    image: img2,
    quote:
      "This program helped me gain industry-relevant skills, confidence, and a great career opportunity.",
    before:
      "BCA graduate from an EWS family; father works at a small private company and prioritized her education despite financial constraints.",
    journey:
      "Completed the HDFC Parivarthan-funded Data Analytics CSR Training Program by Globetech Engineering Solutions in partnership with NASSCOM Foundation, gaining technical skills and interview confidence.",
    today:
      "Now placed at Concentrix through a Globetech job drive, with a ₹3.70 LPA package.",
  },
  {
    id: 3,
    name: "Priyanka Suresh",
    role: "Resolution Coordinator, Contact Center",
    image: img3,
    quote:
      "This program helped me overcome my weaknesses, improve my skills, and secure a great career opportunity.",
    before:
      "BE (E&C) graduate; spent nearly a year job-hunting, facing rejections due to limited communication skills and industry knowledge.",
    journey:
      "Referred by her college placement cell, she completed the HDFC Parivarthan-funded Data Analytics CSR Training Program at Globetech Engineering Solutions, improving technical and communication skills.",
    today:
      "Now Resolution Coordinator, Contact Center at Walmart Global Tech India with a ₹4,58,484 package.",
  },
  {
    id: 4,
    name: "Gagan J",
    role: "Senior Resolution Coordinator",
    image: img4,
    quote:
      "The training helped me to gain confidence, improve my skills, and secure a great career opportunity.",
    before:
      "BCA graduate who worked at a small company for a year before unavoidable circumstances left him unemployed for a period.",
    journey:
      "Enrolled in the HDFC Parivarthan-funded Livelihood Training Program – Data Analytics at Globetech Engineering Solutions, Rajarajeshwarinagar, in partnership with NASSCOM Foundation, completing three months of technical and soft skills training.",
    today:
      "Received three job offers and joined Walmart Global Tech India as Senior Resolution Coordinator with a ₹5,20,684 package.",
  },
];

const SuccessStorySection = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  /* SCROLL REVEAL */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  /* NAVIGATION */
  const nextSlide = () => {
    setCurrent((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  return (
    <section className="gtVideoStorySection" ref={sectionRef}>
      <div className="gtVideoGlowOne"></div>
      <div className="gtVideoGlowTwo"></div>
      <div className="gtVideoGrid"></div>

      <div className={visible ? "gtVideoTop gtVideoTopShow" : "gtVideoTop"}>
        <span>TRANSFORMATION STORIES</span>
        <h2>
          Real Journeys.
          <br />
          Real Transformations.
        </h2>
      </div>

      <div className="gtVideoSliderWrap">
        {stories.map((story, index) => (
          <div
            key={story.id}
            className={
              current === index ? "gtVideoSlide activeVideoSlide" : "gtVideoSlide"
            }
          >
            <div className="gtVideoSide">
              <img
                src={story.image}
                alt={story.name}
                className="gtStoryImage"
              />

              <div className="gtVideoOverlay"></div>
              <div className="gtVideoGradient"></div>

              <div className="gtVideoQuote">"{story.quote}"</div>

              <div className="gtVideoProfile">
                <h3>{story.name}</h3>
                <span>{story.role}</span>
              </div>
            </div>

            <div className="gtTimelineSide">
              <div className="gtTimelineCard before">
                <span>BEFORE</span>
                <h4>The Challenge</h4>
                <p>{story.before}</p>
              </div>

              <div className="gtTimelineCard journey">
                <span>JOURNEY</span>
                <h4>The Transformation</h4>
                <p>{story.journey}</p>
              </div>

              <div className="gtTimelineCard today">
                <span>TODAY</span>
                <h4>The Outcome</h4>
                <p>{story.today}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="gtVideoControls">
        <button onClick={prevSlide}>
          <ArrowLeft size={18} />
        </button>
        <button onClick={nextSlide}>
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default SuccessStorySection;
// ReachSection.jsx

import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import { CheckCircle2 } from "lucide-react";

import indiaMap from "../../assets/india-map.png";

import "./ReachSection.css";

/* =========================================
   STATS DATA
========================================= */

const stats = [
  {
    number: 10000,
    suffix: "+",
    label: "Lives Impacted",
  },

  {
    number: 500,
    suffix: "+",
    label: "Students Guided",
  },

  {
    number: 50,
    suffix: "+",
    label: "Community Programs",
  },

  {
    number: 20,
    suffix: "+",
    label: "Partner Organizations",
  },
];

/* =========================================
   COUNTER COMPONENT
========================================= */

const Counter = ({ end, suffix }) => {

  const [count, setCount] = useState(0);

  const [startCount, setStartCount] = useState(false);

  const counterRef = useRef(null);

  /* INTERSECTION OBSERVER */

  useEffect(() => {

    const observer = new IntersectionObserver(

      ([entry]) => {

        if (entry.isIntersecting) {

          setStartCount(true);

          observer.disconnect();

        }

      },

      {
        threshold: 0.4,
      }

    );

    if (counterRef.current) {

      observer.observe(counterRef.current);

    }

    return () => observer.disconnect();

  }, []);

  /* COUNTING */

  useEffect(() => {

    if (!startCount) return;

    let start = 0;

    const duration = 2000;

    const increment = end / (duration / 16);

    const timer = setInterval(() => {

      start += increment;

      if (start >= end) {

        setCount(end);

        clearInterval(timer);

      } else {

        setCount(Math.floor(start));

      }

    }, 16);

    return () => clearInterval(timer);

  }, [startCount, end]);

  return (

    <h3 ref={counterRef}>

      {count.toLocaleString()}
      {suffix}

    </h3>

  );
};

/* =========================================
   MAIN COMPONENT
========================================= */

const ReachSection = () => {

  const sectionRef = useRef(null);

  const [showContent, setShowContent] = useState(false);

  /* SCROLL ANIMATION */

  useEffect(() => {

    const observer = new IntersectionObserver(

      ([entry]) => {

        if (entry.isIntersecting) {

          setShowContent(true);

        }

      },

      {
        threshold: 0.2,
      }

    );

    if (sectionRef.current) {

      observer.observe(sectionRef.current);

    }

    return () => observer.disconnect();

  }, []);

  return (

    <section
      className="auroReachSection"
      ref={sectionRef}
    >

      <div className="auroReachContainer">

        {/* =====================================
            TOP SECTION
        ===================================== */}

        <div className="auroReachWrapper">

          {/* LEFT */}

          <div
            className={`auroReachLeft ${
              showContent
                ? "show-reach-content"
                : ""
            }`}
          >

            {/* TAG */}

            <div className="auroReachTag">

             

              <p>
                Nationwide Footprint
              </p>
               <span></span>

            </div>

            {/* TITLE */}

            <h2>

              Pan India Reach &
              <span>
                Connectivity
              </span>

            </h2>

            {/* DESCRIPTION */}

            <p className="auroReachDescription">

              Our presence spans across
              22 states, bringing
              industrial-grade education
              and infrastructure to the
              most remote corners of
              India. Every dot on our
              map represents a center
              of excellence.

            </p>

            {/* POINTS */}

            <div className="auroReachPoints">

              <div className="auroReachPoint">

                <CheckCircle2 size={20} />

                <p>
                  On-Campus Training
                </p>

              </div>

              <div className="auroReachPoint">

                <CheckCircle2 size={20} />

                <p>
                  Corporate Upskilling
                </p>

              </div>

              <div className="auroReachPoint">

                <CheckCircle2 size={20} />

                <p>
                  Digital Learning via
                  G-SKOOL.Com
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div
            className={`auroReachRight ${
              showContent
                ? "show-map"
                : ""
            }`}
          >

            <img
              src={indiaMap}
              alt="India Map"
              className="auroIndiaMap"
            />

          </div>

        </div>

        {/* =====================================
            STATS
        ===================================== */}

        <div className="auroStatsWrapper">

          {stats.map((item, index) => (

            <div
              className={`auroStatCard ${
                showContent
                  ? "show-stat"
                  : ""
              }`}
              key={index}
              style={{
                transitionDelay: `${index * 180}ms`,
              }}
            >

              <Counter
                end={item.number}
                suffix={item.suffix}
              />

              <p>
                {item.label}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
};

export default ReachSection;
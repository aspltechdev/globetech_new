import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  GraduationCap,
  HeartHandshake,
  BriefcaseBusiness,
  Users,
} from "lucide-react";

import "./ReachImpactSection.css";

/* ======================================================
   IMPACT DATA
====================================================== */

const impactData = [

  {
    icon:
      <GraduationCap size={30} />,

    number: 12000,

    suffix: "+",

    title:
      "Youth Trained",

    description:
      "Providing education, digital literacy and skill development opportunities for underserved youth.",
  },

  {
    icon:
      <BriefcaseBusiness size={30} />,

    number: 3000,

    suffix: "+",

    title:
      "Career Placements",

    description:
      "Connecting individuals with employment opportunities through training and placement support.",
  },

  {
    icon:
      <Users size={30} />,

    number: 150,

    suffix: "+",

    title:
      "Community Programs",

    description:
      "Organizing impactful social initiatives focused on education, healthcare and empowerment.",
  },

  {
    icon:
      <HeartHandshake size={30} />,

    number: 50,

    suffix: "+",

    title:
      "Partner Organizations",

    description:
      "Collaborating with NGOs and institutions to expand social impact across India.",
  },

];

/* ======================================================
   COUNT UP COMPONENT
====================================================== */

const CountUp = ({
  end,
  suffix = "",
  duration = 2000,
}) => {

  const [count, setCount] =
    useState(0);

  useEffect(() => {

    let start = 0;

    const increment =
      end / (duration / 16);

    const timer = setInterval(() => {

      start += increment;

      if (start >= end) {

        setCount(end);

        clearInterval(timer);

      }

      else {

        setCount(
          Math.floor(start)
        );

      }

    }, 16);

    return () =>
      clearInterval(timer);

  }, [end, duration]);

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
};

/* ======================================================
   COMPONENT
====================================================== */

const ReachImpactSection = () => {

  const sectionRef =
    useRef(null);

  const [visible, setVisible] =
    useState(false);

  /* ======================================================
     OBSERVER
  ====================================================== */

  useEffect(() => {

    const observer =
      new IntersectionObserver(

        ([entry]) => {

          if (
            entry.isIntersecting
          ) {

            setVisible(true);

          }

        },

        {
          threshold: 0.2,
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
      className="impactSection"
      ref={sectionRef}
    >

      {/* ======================================================
          TOP
      ====================================================== */}

      <div
        className={
          visible
            ? "impactTop showImpactTop"
            : "impactTop"
        }
      >

     

        <h2>

          Transforming Lives
          Through Meaningful
          Social Change

        </h2>

        <p>

          Every initiative we undertake
          is designed to create sustainable
          opportunities, empower communities
          and improve lives across India.

        </p>

      </div>

      {/* ======================================================
          GRID
      ====================================================== */}

      <div className="impactGrid">

        {impactData.map(
          (item, index) => (

            <div
              className={
                visible
                  ? "impactCard showImpactCard"
                  : "impactCard"
              }

              key={index}

              style={{
                transitionDelay:
                  `${index * 180}ms`,
              }}
            >

              <div className="impactCardGlow"></div>

              

              <h3>

                {visible && (

                  <CountUp
                    end={item.number}
                    suffix={item.suffix}
                  />

                )}

              </h3>

              <h4>

                {item.title}

              </h4>

              {/* <p>

                {item.description}

              </p> */}

            </div>

          )
        )}

      </div>

    </section>

  );

};

export default ReachImpactSection;

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import img1 from "../../assets/about-1.png";
import img2 from "../../assets/about-2.png";
import img3 from "../../assets/about123.png";
import img4 from "../../assets/aboutimg.jpeg";

import "./AboutSection.css";

const AboutSection = () => {
  const sectionRef = useRef(null);

  const counter1 = useRef(null);
  const counter2 = useRef(null);
  const counter3 = useRef(null);

  /* =========================
     SCROLL PARALLAX
  ========================= */

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -80]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -40]
  );

  /* =========================
     COUNTER ANIMATION
  ========================= */
  const downloadPDF = () => {
    const link = document.createElement("a");

    link.href = "/Globetech-Foundation-Profile.pdf";

    link.download =
      "Globetech-Foundation-Profile.pdf";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };
  useEffect(() => {
    gsap.fromTo(
      counter1.current,
      { innerText: 0 },
      {
        innerText: 30,
        duration: 2.5,
        snap: { innerText: 1 },
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      counter2.current,
      { innerText: 0 },
      {
        innerText: 120,
        duration: 2.5,
        snap: { innerText: 1 },
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      counter3.current,
      { innerText: 0 },
      {
        innerText: 500,
        duration: 2.5,
        snap: { innerText: 1 },
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section
      className="abtCinema"
      ref={sectionRef}
    >
      {/* ATMOSPHERE */}

      <div className="abtCinema_blur abtCinema_blur1"></div>
      <div className="abtCinema_blur abtCinema_blur2"></div>

      {/* GRID */}

      <div className="abtCinema_container">
        {/* =========================
            LEFT VISUAL SYSTEM
        ========================= */}

        <motion.div
          className="abtCinema_visualWrap"
          style={{
            y: imageY,
          }}
        >
          {/* MAIN IMAGE */}

          <motion.div
            className="abtCinema_mainImage"
            initial={{
              opacity: 0,
              scale: 0.8,
              rotate: -6,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
            }}
          >
            <img
              src={img2}
              alt=""
            />
          </motion.div>

          {/* FLOATING IMAGES */}

          <motion.div
            className="abtCinema_floatImg abtCinema_img1"
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 1,
            }}
            viewport={{ once: true }}
            animate={{
              y: [0, -16, 0],
            }}
          >
            <img
              src={img1}
              alt=""
            />
          </motion.div>

          <motion.div
            className="abtCinema_floatImg abtCinema_img2"
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 1,
            }}
            viewport={{ once: true }}
            animate={{
              y: [0, 12, 0],
            }}
          >
            <img
              src={img3}
              alt=""
            />
          </motion.div>

          {/* GLASS CARD */}

          <motion.div
            className="abtCinema_glassCard"
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.6,
              duration: 1,
            }}
            viewport={{ once: true }}
            animate={{
              y: [0, -12, 0],
            }}
          >
            <h3>
              <span ref={counter1}>0</span>K+
            </h3>

            <p>
              Students transformed through
              CSR-led skill development.
            </p>
          </motion.div>
        </motion.div>

        {/* =========================
            RIGHT CONTENT
        ========================= */}

        <motion.div
          className="abtCinema_content"
          style={{
            y: contentY,
          }}
        >
          <motion.span
            className="abtCinema_label"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
          >
            ABOUT FOUNDATION
          </motion.span>

          <motion.h2
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
          >
            Creating Social Impact
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 1,
            }}
            viewport={{ once: true }}
          >
            Globetech Social Impact Foundation is a CSR-driven organization empowering communities through skill development, livelihood training, women empowerment, placement support, and sustainable social impact initiatives across India. In collaboration with corporates, institutions, and industry partners, we deliver industry-focused training programs, employability initiatives, industrial exposure, and community welfare projects that create meaningful and measurable transformation for youth and underserved communities.

          </motion.p>

         <motion.div className="abtCinema_metrics">
  
  <div className="glass_card">
    <h4>
      <span>AAFTG3675G</span>
    </h4>
    <span>PAN Number</span>
  </div>

  <div className="glass_card">
    <h4>
      <span>KA/2026/1090587</span>
    </h4>
    <span>DARPAN ID</span>
  </div>

</motion.div>

          {/* BUTTONS */}

          <motion.div
            className="abtCinema_actions"
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 1,
            }}
            viewport={{ once: true }}
          >
            <Link to="/about-us">
              <button className="abtCinema_primaryBtn">
                Explore Foundation

                <ArrowUpRight size={18} />
              </button>
            </Link>

            {/* <button className="abtCinema_secondaryBtn">
              Download Profile
            </button> */}

            <button
              className="abtCinema_secondaryBtn"
              onClick={downloadPDF}
            >
              Download Profile
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
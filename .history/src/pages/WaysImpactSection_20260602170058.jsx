// WaysImpactSection.jsx

import React, { useEffect, useRef } from "react";
import sustainable from "../assets/ourplacementlogo/sustainable.png";

import {
  ArrowRight,
  HeartHandshake,
  GraduationCap,
  BriefcaseBusiness,
  Users,
} from "lucide-react";

import "./WaysImpactSection.css";
import { Link } from "react-router-dom";

const involvementStories = [
  {
    id: "01",
    title: "Volunteer With Purpose",
    subtitle: "Become part of real grassroots impact",
    text:
      "Support education drives, mentorship programs, awareness campaigns, and rural outreach initiatives transforming communities across India.",
    image:
      "https://media.istockphoto.com/id/1318617341/photo/low-angle-view-group-of-volunteers-busy-working-by-arranging-vegetables-and-clothes-on.jpg?b=1&s=612x612&w=0&k=20&c=rM9EB2ExDim42qMK3P_B8FPFOIs9J_ckg0X4i6kllg4=",
    icon: <HeartHandshake size={22} />,
  },

  {
    id: "02",
    title: "Sponsor A Student",
    subtitle: "Empower futures through education",
    text:
      "Help deserving students access digital learning, career readiness training, workshops, internships, and mentorship opportunities.",
    image:
      "https://images.unsplash.com/flagged/photo-1574098335395-18cf525e45d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BvbnNlciUyMGElMjBzdHVkZW50JTIwaW5kaWF8ZW58MHx8MHx8fDA%3D",
    icon: <GraduationCap size={22} />,
  },

  {
    id: "03",
    title: "Internship Opportunities",
    subtitle: "Grow while creating impact",
    text:
      "Work alongside social innovators and trainers while contributing to real-world NGO programs and community transformation projects.",
    image:
      "https://images.unsplash.com/photo-1629306262232-1f854b4b0b13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGlueWVybnNoaXAlMjBzdHVkZW50JTIwaW5kaWF8ZW58MHx8MHx8fDA%3D",
    icon: <BriefcaseBusiness size={22} />,
  },

  {
    id: "04",
    title: "Partner With Us",
    subtitle: "Collaborate for scalable change",
    text:
      "CSR organizations, institutions, and industry leaders can join us to create sustainable social impact initiatives nationwide.",
    image:
      "sustai",
    icon: <Users size={22} />,
  },
];

const Reveal = ({ children, delay = 0 }) => {

  const ref = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {
          ref.current.classList.add("show");
        }

      },
      {
        threshold: 0.15,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();

  }, []);

  return (
    <div
      ref={ref}
      className="gsifadeup"
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default function WaysImpactSection() {

  return (

    <section className="gsiwrapper">

      {/* BACKGROUND LIGHTS */}

      <div className="gsiblur gsiblur1"></div>
      <div className="gsiblur gsiblur2"></div>

      <div className="gsicontainer">

        {/* HEADER */}

        <Reveal>

          <div className="gsiheader">

          

            <h2>
              Be The Reason
          
              Someone Gets
           
              A Better Future
            </h2>

            <p>
              At Globetech Social Impact Foundation, every volunteer,
              mentor, donor, and partner contributes toward meaningful
              opportunities in education, skilling, employability,
              and community development across India.
            </p>

          </div>

        </Reveal>

        {/* FEATURED BLOCK */}

        <Reveal>

          <div className="gsifeatured">

            <img
              src="https://images.pexels.com/photos/13127145/pexels-photo-13127145.jpeg"
              alt=""
            />

            <div className="gsifeaturedoverlay"></div>

            <div className="gsifeaturedcontent">

              

              <h2>
                Together,
                <br />
                We Create
                <br />
                Real Change
              </h2>

              <p>
                From livelihood training programs and job drives
                to digital education and rural outreach — your
                involvement directly changes lives. Inspired by
                Globetech Foundation’s skilling, placement,
                and community initiatives across India.
              </p>
<Link to="/contact">
              <button>

                Join The Movement

                <ArrowRight size={18} />

              </button>
              </Link>

            </div>

          </div>

        </Reveal>

        {/* STORY LAYOUT */}

        <div className="gsistorylayout">

          {involvementStories.map((item, index) => (

            <Reveal
              key={index}
              delay={index * 120}
            >

              <div className="gsistorycard">

                {/* IMAGE */}

                <div className="gsistoryimage">

                  <img
                    src={item.image}
                    alt=""
                  />

                  <div className="gsistoryoverlay"></div>

                </div>

                {/* CONTENT */}

                <div className="gsistorycontent">

                  <div className="gsistorytop">

                

                  

                  </div>

                  <div>

                    <h3>
                      {item.title}
                    </h3>

                    <h4>
                      {item.subtitle}
                    </h4>

                    <p>
                      {item.text}
                    </p>

                  </div>
<Link to="/contact">
                  <button>

                    Explore More

                    <ArrowRight size={16} />

                  </button>
                  </Link>

                </div>

              </div>

            </Reveal>

          ))}

        </div>

      </div>

    </section>
  );
}
// Events.jsx

import React, { useEffect, useRef } from "react";

import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

import "./Events.css";
import { Link } from "react-router-dom";
import SocialWall from "./SocialWall";

/* =========================================
   EVENTS DATA
========================================= */

const latestUpdates = [
  {
    title: "Livelihood Training Workshop",
    date: "March 2025",
    image:
      "https://images.pexels.com/photos/36739505/pexels-photo-36739505.jpeg",
  },

  {
    title: "Industrial Visit Program",
    date: "February 2025",
    image:
      "https://images.pexels.com/photos/37354845/pexels-photo-37354845.jpeg",
  },

  {
    title: "Women Empowerment Drive",
    date: "January 2025",
    image:
      "https://images.pexels.com/photos/33808945/pexels-photo-33808945.jpeg",
  },

  {
    title: "Career Guidance Session",
    date: "December 2024",
    image:
      "https://images.pexels.com/photos/32662455/pexels-photo-32662455.jpeg",
  },

  {
    title: "Community Awareness Program",
    date: "November 2024",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop",
  },
];

/* =========================================
   REVEAL
========================================= */

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
      className="evtfadeup"
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

/* =========================================
   COMPONENT
========================================= */

export default function Events() {

  return (
<div>
    <section className="evtwrapper">

      <div className="evtcontainer">

        {/* HEADER */}

        <Reveal>

          <div className="evtheader">

         

            <h1>
              Experiences That
              Create Real Impact
            </h1>

            <p>
              Workshops, industrial visits, awareness drives,
              training sessions, and placement initiatives
              empowering communities across India.
            </p>

          </div>

        </Reveal>

        {/* FEATURED SECTION */}

        <Reveal>

          <div className="evtfeatured">

            {/* LEFT */}

            <div className="evtfeaturedcontent">

              <span>
                FEATURED EVENT
              </span>

              <h2>
                Skill Development &
                Career Readiness Program
              </h2>

              <p>
                Helping students build confidence,
                practical knowledge, and employability
                skills through hands-on learning programs.
              </p>
<Link to="/programs">
              <button>

                Explore Programs

                <ArrowRight size={18} />

              </button> 
              </Link>

            </div>

            {/* RIGHT */}

            <div className="evtfeaturedimage">

              <img
                src="https://images.pexels.com/photos/33925031/pexels-photo-33925031.jpeg"
                alt=""
              />

            </div>

          </div>

        </Reveal>

        {/* RUNNING EVENTS */}

        <Reveal>

          <div className="evtlatestsection">

            <div className="evtlatestheader">

              <h3>
                Latest Events & Updates
              </h3>

              <p>
                Community workshops, awareness campaigns,
                placement initiatives and outreach programs.
              </p>

            </div>

            {/* SLIDER */}

            <div className="evtlatestslider">

              <div className="evtlatesttrack">

                {[...latestUpdates, ...latestUpdates].map((item, index) => (

                  <div
                    className="evtlatestcard"
                    key={index}
                  >

                    {/* IMAGE */}

                    <div className="evtlatestimage">

                      <img
                        src={item.image}
                        alt=""
                      />

                      <div className="evtlatestoverlay"></div>

                    </div>

                    {/* CONTENT */}

                    <div className="evtlatestcontent">

                      <span>
                        {item.date}
                      </span>

                      <h4>
                        {item.title}
                      </h4>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </Reveal>

      </div>

    </section>
    <SocialWall/>
    </div>
  );
}
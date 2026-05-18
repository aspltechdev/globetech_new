// ProfessionalImpactSection.jsx

import React from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  BriefcaseBusiness,
  Building2,
  Globe2,
  ArrowUpRight,

} from "lucide-react";

import "./ImpactSection.css";

const stats = [
  {
    icon: <GraduationCap size={24} />,
    value: "30,000+",
    title: "Students Empowered",
    desc: "Training students with practical digital and employability skills.",
  },

  {
    icon: <BriefcaseBusiness size={24} />,
    value: "82%",
    title: "Placement Success",
    desc: "Connecting learners with real career opportunities and internships.",
  },

  {
    icon: <Building2 size={24} />,
    value: "120+",
    title: "CSR Collaborations",
    desc: "Trusted partnerships with institutions and corporate organizations.",
  },

  {
    icon: <Globe2 size={24} />,
    value: "18 States",
    title: "Regional Reach",
    desc: "Creating measurable impact across urban and rural communities.",
  },
];

// const stories = [
//   {
//     title: "Career Transformation",
//     text: "Students transitioned from limited opportunities to industry-ready careers through mentorship and training.",
//     image:
//       "https://images.pexels.com/photos/3231359/pexels-photo-3231359.jpeg",
//   },

//   {
//     title: "Women Empowerment",
//     text: "Leadership and entrepreneurship programs helping women achieve financial independence.",
//     image:
//       "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
//   },

//   {
//     title: "Digital Literacy",
//     text: "Providing digital education access to underserved communities and rural students.",
//     image:
//       "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
//   },
// ];



const stories = [
  {
    title: "Career Transformation",
    text: "Students transitioned from limited opportunities to industry-ready careers through mentorship and training.",
    image:
      "https://images.pexels.com/photos/3231359/pexels-photo-3231359.jpeg",
  },

  {
    title: "Women Empowerment",
    text: "Leadership and entrepreneurship programs helping women achieve financial independence.",
    image:
      "https://images.pexels.com/photos/36746074/pexels-photo-36746074.jpeg",
  },

  {
    title: "Digital Literacy",
    text: "Providing digital education access to underserved communities and rural students.",
    image:
      "https://images.pexels.com/photos/10638068/pexels-photo-10638068.jpeg",
  },

  {
    title: "Healthcare Access",
    text: "Improving access to essential healthcare services through medical camps and awareness programs.",
    image:
      "https://images.pexels.com/photos/28141441/pexels-photo-28141441.jpeg",
  },

  {
    title: "Youth Skill Development",
    text: "Equipping young individuals with technical and professional skills for future employment opportunities.",
    image:
      "https://images.pexels.com/photos/31712541/pexels-photo-31712541.jpeg",
  },

  {
    title: "Environmental Sustainability",
    text: "Community-driven initiatives focused on tree plantation, clean energy, and environmental awareness.",
    image:
      "https://images.pexels.com/photos/36751334/pexels-photo-36751334.jpeg",
  },
];


export default function ImpactSection() {
  return (
    <section className="impact-wrapper">

      <div className="impact-container">

        {/* HEADER */}


         <div className="story-layout">

          <div className="story-left">

            <span>
             
              Real Transformation
            </span>

            <h2>
              Impact Beyond
              <br />
              Statistics
            </h2>

            <p>
              Our initiatives focus on long-term transformation —
              improving careers, confidence, leadership, and access
              to opportunities for underserved communities.
            </p>


<Link to="/contact">
            <button>
              Explore Our Journey
            </button>
            </Link>


                

          </div>

          <div className="story-right">

            {stories.map((item, index) => (

              <div
                className="story-card"
                key={index}
              >

                <img
                  src={item.image}
                  alt=""
                />

                <div className="story-content">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

       

        {/* STATS */}

        <div className="impact-grid">

          {stats.map((item, index) => (

            <div
              className="impact-card"
              key={index}
            >

              <div className="card-top">

              

                <ArrowUpRight
                  size={18}
                  className="arrow"
                />

              </div>

              <h2>
                {item.value}
              </h2>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.desc}
              </p>

            </div>

          ))}

        </div>

        {/* STORY SECTION */}

        {/* <div className="story-layout">

          <div className="story-left">

            <span>
              REAL TRANSFORMATION
            </span>

            <h2>
              Impact Beyond
              <br />
              Statistics
            </h2>

            <p>
              Our initiatives focus on long-term transformation —
              improving careers, confidence, leadership, and access
              to opportunities for underserved communities.
            </p>

            <button>
              Explore Our Journey
            </button>

          </div>

          <div className="story-right">

            {stories.map((item, index) => (

              <div
                className="story-card"
                key={index}
              >

                <img
                  src={item.image}
                  alt=""
                />

                <div className="story-content">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div> */}

      </div>

    </section>
  );
}
import React from "react";
import { Star } from "lucide-react";

import "./TestimonialSection.css";



const testimonialsTop = [
  {
    name: "Vignesh Jayapalan",
    role: "Assistant Manager - Bosch Design R&D",
    text:
      "Our Bosch Adugodi R&D design team were looking for in depth training program for latest UG/NX Software Version 2206. Globetech provided exceptional training requirements exactly matching our industrial needs.",
  },

  {
    name: "Manjunatha",
    role: "Toyota Group, Bangalore",
    text:
      "Perfect place for learning & development. I recommended couple of my juniors for learning Cadd Design & SAP courses. The training quality and guidance were extremely professional.",
  },

  {
    name: "Supreeth S Bhat",
    role: "Networking Engineer DXC Technologies",
    text:
      "One of the best training institutes in Bangalore. They help students with strong development guidance and practical exposure to projects.",
  },
];

/* =========================================
   BOTTOM TESTIMONIALS
========================================= */

const testimonialsBottom = [
  {
    name: "Prashanth Gowda",
    role: "Coordinator, DBSDC",
    text:
      "DBSDC is happy to collaborate with your organization in delivering advanced programs for students. Thanks for the excellent placement support.",
  },

  {
    name: "Krishnaraj Upadhya",
    role: "Bangalore",
    text:
      "Perfect place for SAP Training. Trainers are highly supportive and practical sessions were extremely useful for career development.",
  },

  {
    name: "Shriyans Jain",
    role: "Chairman, SD-EDP KASSIA",
    text:
      "Globetech is a total finishing school for engineering students. CAD, SAP and Japanese language courses provide strong industry advantage.",
  },
];

/* =========================================
   CARD
========================================= */

const TestimonialCard = ({ item, border }) => {

  return (

    <div className={`auroTestimonialCard ${border}`}>

      {/* NAME */}

      <h3>
        {item.name}
      </h3>

      {/* ROLE */}

      <h4>
        {item.role}
      </h4>

      {/* STARS */}

      <div className="auroStars">

        {[1, 2, 3, 4, 5].map((star) => (

          <Star
            key={star}
            size={24}
            fill="#FFC700"
            color="#FFC700"
          />

        ))}

      </div>

      {/* TEXT */}

      <p>
        "{item.text}"
      </p>

    </div>

  );
};

/* =========================================
   MAIN COMPONENT
========================================= */

const TestimonialSection = () => {

  return (

    <section className="auroTestimonialSection">

      <div className="auroTestimonialContainer">

        {/* =====================================
            HEADING
        ====================================== */}

        <div className="auroTestimonialHeading">

          <h2>
            Feedback From Customers
          </h2>

        </div>

        {/* =====================================
            TOP ROW - RIGHT SLIDE
        ====================================== */}

        <div className="auroSliderWrapper">

          <div className="auroSliderTrack auroSlideRight">

            {[...testimonialsTop, ...testimonialsTop].map((item, index) => (

              <TestimonialCard
                key={index}
                item={item}
              />

            ))}

          </div>

        </div>

        {/* =====================================
            BOTTOM ROW - LEFT SLIDE
        ====================================== */}

        <div className="auroSliderWrapper bottomSpacing">

          <div className="auroSliderTrack auroSlideLeft">

            {[...testimonialsBottom, ...testimonialsBottom].map((item, index) => (

              <TestimonialCard
                key={index}
                item={item}
                border="blueBorder"
              />

            ))}

          </div>

        </div>

      </div>

    </section>

  );
};

export default TestimonialSection;
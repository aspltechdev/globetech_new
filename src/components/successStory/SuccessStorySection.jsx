import React from "react";

import studentImage from "../../assets/career-1.png";

import "./SuccessStorySection.css";

const SuccessStorySection = () => {

  return (

    <section className="auroSuccessSection">

      <div className="auroSuccessContainer">

        {/* =====================================
            HEADING
        ====================================== */}

        <div className="auroSuccessHeading">

          {/* TAG */}

          <div className="auroSuccessTag">

            <span></span>

            <p>
              Real Impact Story
            </p>

          </div>

          {/* TITLE */}

          <h2>
            How Globetech transforms lives through skill development
          </h2>

        </div>

        {/* =====================================
            MAIN WRAPPER
        ====================================== */}

        <div className="auroSuccessWrapper">

          {/* =====================================
              LEFT SIDE
          ====================================== */}

          <div className="auroSuccessLeft">

            {/* NAME */}

            <h3>
              Priya Sharma
            </h3>

            {/* ROLE */}

            <h4>
              Software Developer at TCS
            </h4>

            {/* IMAGE CARD */}

            <div className="auroSuccessImageCard">

              <img
                src={studentImage}
                alt="Success Story"
              />

              {/* OVERLAY */}

              <div className="auroSuccessOverlay"></div>

              {/* QUOTE */}

              <div className="auroSuccessQuote">

                “Globetech gave me not just skills,
                but the confidence to dream big.
                Today, I'm working at my dream company!”

              </div>

            </div>

          </div>

          {/* =====================================
              RIGHT SIDE
          ====================================== */}

          <div className="auroSuccessRight">

            {/* CARD 1 */}

            <div className="auroTimelineCard redBorder">

              <h3>
                Before Globetech
              </h3>

              <p>
                Fresh graduate with a BCom degree,
                struggling to find employment.
                Limited technical skills and no
                industry exposure. Coming from a
                rural background with financial
                constraints.
              </p>

            </div>

            {/* CARD 2 */}

            <div className="auroTimelineCard yellowBorder">

              <h3>
                The Journey
              </h3>

              <p>
                Enrolled in Globetech's 6-month
                Full Stack Development program.
                Received hands-on training,
                mentorship, and career guidance.
                Worked on real-world projects and
                participated in mock interviews.
              </p>

            </div>

            {/* CARD 3 */}

            <div className="auroTimelineCard greenBorder">

              <h3>
                Today
              </h3>

              <p>
                Successfully placed as a Software
                Developer at TCS with a starting
                package of ₹4.5 LPA. Supporting
                her family and inspiring others
                in her community to pursue tech careers.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
};

export default SuccessStorySection;
// // HeadquartersSection.jsx

// import React, { useEffect, useRef } from "react";

// import "./HeadquartersSection.css";

// import {
//   FaMapMarkerAlt,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaArrowRight,
// } from "react-icons/fa";

// /* REVEAL */

// const Reveal = ({ children }) => {

//   const ref = useRef(null);

//   useEffect(() => {

//     const observer = new IntersectionObserver(
//       ([entry]) => {

//         if (entry.isIntersecting) {
//           ref.current.classList.add("show");
//         }

//       },
//       {
//         threshold:0.15,
//       }
//     );

//     if (ref.current) observer.observe(ref.current);

//     return () => observer.disconnect();

//   }, []);

//   return (
//     <div
//       ref={ref}
//       className="fade-up"
//     >
//       {children}
//     </div>
//   );
// };

// export default function HeadquartersSection() {

//   return (
//     <section className="hq-section">

//       {/* GLOW */}

//       <div className="hq-glow glow1"></div>
//       <div className="hq-glow glow2"></div>

//       <div className="hq-container">

//         {/* HEADER */}

//         <Reveal>

//           <div className="hq-header">

//             <span>
//               Contact & Headquarters
//             </span>

//             <h1>
//               Let’s Build
//               Impact Together
//             </h1>

//             <p>
//               Reach out for partnerships, volunteering,
//               collaborations, or community initiatives.
//               Our team would love to connect with you.
//             </p>

//           </div>

//         </Reveal>

//         {/* TOP GRID */}

//         <div className="hq-top-grid">

//           {/* LEFT */}

//           <Reveal>

//             <div className="hq-left-card">

//               {/* ADDRESS */}

//               <div className="hq-info-card">

//                 <div className="hq-icon">

//                   <FaMapMarkerAlt />

//                 </div>

//                 <div>

//                   <h3>
//                     Headquarters
//                   </h3>

//                   <p>
//                     Globetech Social Impact Foundation
//                     <br />
//                     No.12 Terrace Avenue, Knowledge Circle,
//                     San Diego, USA
//                   </p>

//                 </div>

//               </div>

//               {/* CONTACT */}

//               <div className="hq-info-card">

//                 <div className="hq-icon">

//                   <FaPhoneAlt />

//                 </div>

//                 <div>

//                   <h3>
//                     Direct Contact
//                   </h3>

//                   <p>
//                     +91 96222 23061
//                     <br />
//                     info@globetechfoundation.org
//                   </p>

//                 </div>

//               </div>

//               {/* SOCIAL */}

//               <div className="hq-social-box">

//                 <h4>
//                   Follow Our Journey
//                 </h4>

//                 <div className="hq-social-icons">

//                   <a href="/">
//                     <FaFacebookF />
//                   </a>

//                   <a href="/">
//                     <FaLinkedinIn />
//                   </a>

//                   <a href="/">
//                     <FaInstagram />
//                   </a>

//                 </div>

//               </div>

//             </div>

//           </Reveal>

//           {/* RIGHT */}

//           <Reveal>

//             <div className="hq-form-card">

//               <div className="form-heading">

//                 <h2>
//                   Send a Message
//                 </h2>

//                 <p>
//                   Our coordinators will respond
//                   within 24 business hours.
//                 </p>

//               </div>

//               <form className="hq-form">

//                 <div className="form-grid">

//                   <div className="input-group">

//                     <label>
//                       First Name
//                     </label>

//                     <input
//                       type="text"
//                       placeholder="John"
//                     />

//                   </div>

//                   <div className="input-group">

//                     <label>
//                       Last Name
//                     </label>

//                     <input
//                       type="text"
//                       placeholder="Doe"
//                     />

//                   </div>

//                 </div>

//                 <div className="input-group">

//                   <label>
//                     Email Address
//                   </label>

//                   <input
//                     type="email"
//                     placeholder="example@email.com"
//                   />

//                 </div>

//                 <div className="input-group">

//                   <label>
//                     Inquiry Type
//                   </label>

//                   <select>

//                     <option>
//                       Partnerships
//                     </option>

//                     <option>
//                       Volunteering
//                     </option>

//                     <option>
//                       Donations
//                     </option>

//                     <option>
//                       Programs
//                     </option>

//                   </select>

//                 </div>

//                 <div className="input-group">

//                   <label>
//                     Message
//                   </label>

//                   <textarea
//                     placeholder="Write your message..."
//                   ></textarea>

//                 </div>

//                 <button type="submit">

//                   Send Message

//                   <FaArrowRight />

//                 </button>

//               </form>

//             </div>

//           </Reveal>

//         </div>

//         {/* MAP */}

//         <Reveal>

//           <div className="hq-map-card">

//             <iframe
//               src="https://maps.google.com/maps?q=New%20York&t=&z=12&ie=UTF8&iwloc=&output=embed"
//               title="Google Map"
//               loading="lazy"
//             ></iframe>

//           </div>

//         </Reveal>

//       </div>

//     </section>
//   );
// }






// HeadquartersSection.jsx








// HeadquartersSection.jsx

import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import emailjs from "@emailjs/browser";

import "./HeadquartersSection.css";

import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaHandshake,
} from "react-icons/fa";

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
      className="hqfadeup"
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

export default function HeadquartersSection() {

  const formRef = useRef();

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState("");

  const [error, setError] =
    useState("");

  /* =========================================
     SEND EMAIL
  ========================================= */

  const sendEmail = (e) => {

    e.preventDefault();

    setLoading(true);

    setSuccess("");

    setError("");

    const form =
      formRef.current;

    const firstName =
      form.first_name.value.trim();

    const email =
      form.user_email.value.trim();

    const message =
      form.message.value.trim();

    if (
      !firstName ||
      !email ||
      !message
    ) {

      setError(
        "Please fill all required fields."
      );

      setLoading(false);

      return;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {

      setError(
        "Please enter a valid email address."
      );

      setLoading(false);

      return;
    }

    emailjs.sendForm(

      "YOUR_SERVICE_ID",

      "YOUR_TEMPLATE_ID",

      formRef.current,

      "YOUR_PUBLIC_KEY"

    )

    .then(() => {

      setSuccess(
        "Message sent successfully."
      );

      form.reset();

    })

    .catch(() => {

      setError(
        "Something went wrong."
      );

    })

    .finally(() => {

      setLoading(false);

    });

  };

  return (

    <section className="hqv2wrapper">

      {/* BACKGROUND */}

      <div className="hqv2blur hqv2blur1"></div>
      <div className="hqv2blur hqv2blur2"></div>

      <div className="hqv2container">

        {/* HEADER */}

        <Reveal>

          <div className="hqv2header">

        

            <h1>
              Let’s Create
              Impact Together
            </h1>

            <p>
              Reach out for partnerships, workshops,
              volunteering, CSR collaborations,
              placement initiatives and community programs.
            </p>

          </div>

        </Reveal>

        {/* MAIN GRID */}

        <div className="hqv2grid">

          {/* LEFT SIDE */}

          <Reveal delay={100}>

            <div className="hqv2left">

              {/* MAP */}

              <div className="hqv2mapcard">

                <iframe
                  src="https://maps.google.com/maps?q=Bangalore&t=&z=12&ie=UTF8&iwloc=&output=embed"
                  title="Google Map"
                  loading="lazy"
                ></iframe>

                {/* FLOAT CARD */}

                <div className="hqv2mapoverlay">

                  <div className="hqv2locationbadge">

                    <FaMapMarkerAlt />

                    Bengaluru Headquarters

                  </div>

                  <h3>
                    Globetech Social
                    Impact Foundation
                  </h3>

                  <p>
                    BEML Layout, RR Nagar,
                    Bengaluru – 560098
                  </p>

                </div>

              </div>

              {/* INFO GRID */}

              <div className="hqv2infogrid">

                {/* CARD */}

                <div className="hqv2infocard">

                  <div className="hqv2icon">

                    <FaPhoneAlt />

                  </div>

                  <div>

                    <h4>
                      Call Us
                    </h4>

                    <p>
                      +91 9632223061
                    </p>

                  </div>

                </div>

                {/* CARD */}

                <div className="hqv2infocard">

                  <div className="hqv2icon">

                    <FaEnvelope />

                  </div>

                  <div>

                    <h4>
                      Email Us
                    </h4>

                    <p>
                      globetechsocialimpact@gmail.com
                    </p>

                  </div>

                </div>

              </div>

              {/* SOCIAL */}

              <div className="hqv2social">

                <h4>
                  Follow Our Journey
                </h4>

                <div className="hqv2socialicons">

                  <a href="/">
                    <FaFacebookF />
                  </a>

                  <a href="/">
                    <FaLinkedinIn />
                  </a>

                  <a href="/">
                    <FaInstagram />
                  </a>

                </div>

              </div>

            </div>

          </Reveal>

          {/* RIGHT SIDE */}

          <Reveal delay={200}>

            <div className="hqv2formcard">

              <div className="hqv2formtop">

                <div className="hqv2badge">

                  <FaHandshake />

                  Let’s Collaborate

                </div>

                <h2>
                  Send A Message
                </h2>

                <p>
                  Our team will respond within
                  24 business hours.
                </p>

              </div>

              {/* FORM */}

              <form
                ref={formRef}
                className="hqv2form"
                onSubmit={sendEmail}
              >

                {/* GRID */}

                <div className="hqv2formgrid">

                  <div className="hqv2inputgroup">

                    <label>
                      First Name *
                    </label>

                    <input
                      type="text"
                      name="first_name"
                      placeholder="John"
                    />

                  </div>

                  <div className="hqv2inputgroup">

                    <label>
                      Last Name
                    </label>

                    <input
                      type="text"
                      name="last_name"
                      placeholder="Doe"
                    />

                  </div>

                </div>

                {/* EMAIL */}

                <div className="hqv2inputgroup">

                  <label>
                    Email Address *
                  </label>

                  <input
                    type="email"
                    name="user_email"
                    placeholder="example@email.com"
                  />

                </div>

                {/* SELECT */}

                <div className="hqv2inputgroup">

                  <label>
                    Inquiry Type
                  </label>

                  <select name="inquiry">

                    <option>
                      Partnerships
                    </option>

                    <option>
                      Volunteering
                    </option>

                    <option>
                      CSR Collaboration
                    </option>

                    <option>
                      Workshops
                    </option>

                  </select>

                </div>

                {/* MESSAGE */}

                <div className="hqv2inputgroup">

                  <label>
                    Message *
                  </label>

                  <textarea
                    name="message"
                    placeholder="Write your message..."
                  ></textarea>

                </div>

                {/* SUCCESS */}

                {success && (

                  <div className="hqv2success">

                    {success}

                  </div>

                )}

                {/* ERROR */}

                {error && (

                  <div className="hqv2error">

                    {error}

                  </div>

                )}

                {/* BUTTON */}

                <button
                  type="submit"
                  disabled={loading}
                >

                  {loading
                    ? "Sending..."
                    : "Send Message"}

                  <FaArrowRight />

                </button>

              </form>

            </div>

          </Reveal>

        </div>

      </div>

    </section>
  );
}
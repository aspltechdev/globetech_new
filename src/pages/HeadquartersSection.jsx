import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import "./HeadquartersSection.css";

import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

/* =========================================
   REVEAL
========================================= */

const Reveal = ({
  children,
  delay = 0,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (
            entry.isIntersecting
          ) {
            ref.current.classList.add(
              "show"
            );
          }
        },
        {
          threshold: 0.15,
        }
      );

    if (ref.current)
      observer.observe(ref.current);

    return () =>
      observer.disconnect();
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

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    setSuccess("");

    setError("");

    const form =
      formRef.current;

    const firstName =
      form.first_name.value.trim();

    const lastName =
      form.last_name.value.trim();

    const email =
      form.user_email.value.trim();

    const phone =
      form.phone.value.trim();

    const inquiryType =
      form.inquiry.value;

    const message =
      form.message.value.trim();

    /* VALIDATION */

    if (
      !firstName ||
      !email ||
      !phone ||
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

    try {
      /* CLEAN FORMDATA */

      const formData =
        new FormData();

      /* ACCESS KEY */

      formData.append(
        "access_key",
        "f64d2dba-5fbc-445e-b726-8c62b56e0e1c"
      );

      /* SUBJECT */

      formData.append(
        "subject",
        `🌍 Globetech Inquiry - ${inquiryType}`
      );

      /* PROFESSIONAL SENDER */

      formData.append(
        "from_name",
        "Globetech Social Impact Foundation"
      );

      /* REPLY TO CUSTOMER */

      formData.append(
        "replyto",
        email
      );

      /* AUTO RESPONSE */

      formData.append(
        "autoresponse",
        "Thank you for contacting Globetech Social Impact Foundation. Our team will contact you within 24 business hours."
      );

      /* FORM DATA */

      formData.append(
        "Name",
        `${firstName} ${lastName}`
      );

      formData.append(
        "Email",
        email
      );

      formData.append(
        "Phone",
        phone
      );

      formData.append(
        "Inquiry Type",
        inquiryType
      );

      formData.append(
        "Message",
        message
      );

      /* SEND REQUEST */

      const response =
        await fetch(
          "https://api.web3forms.com/submit",
          {
            method: "POST",

            headers: {
              Accept:
                "application/json",
            },

            body: formData,
          }
        );

      const result =
        await response.json();

      console.log(result);

      if (result.success) {
        setSuccess(
          "Message sent successfully."
        );

        form.reset();
      } else {
        setError(
          result.message ||
            "Failed to send message."
        );
      }
    } catch (error) {
      console.log(error);

      setError(
        "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
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
              Reach out for
              partnerships,
              workshops,
              volunteering, CSR
              collaborations,
              placement initiatives
              and community
              programs.
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

                    Bengaluru
                    Headquarters
                  </div>

                  <h3>
                    Globetech Social
                    Impact
                    Foundation
                  </h3>

                  <p>
                    BEML Layout, RR
                    Nagar,
                    Bengaluru –
                    560098
                  </p>
                </div>
              </div>

              {/* INFO GRID */}

              <div className="hqv2infogrid">
                <div className="hqv2infocard">
                  <div className="hqv2icon">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <h4>
                      Call Us
                    </h4>

                    <p>
                      +91
                      9632223061
                    </p>
                  </div>
                </div>

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
                  Follow Our
                  Journey
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
                <h2>
                  Send A Message
                </h2>

                <p>
                  Our team will
                  respond within 24
                  business hours.
                </p>
              </div>

              {/* FORM */}

              <form
                ref={formRef}
                className="hqv2form"
                onSubmit={sendEmail}
              >
                {/* NAME GRID */}

                <div className="hqv2formgrid">
                  <div className="hqv2inputgroup">
                    <label>
                      First Name *
                    </label>

                    <input
                      type="text"
                      name="first_name"
                      placeholder="John"
                      required
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
                    required
                  />
                </div>

                {/* PHONE */}

                <div className="hqv2inputgroup">
                  <label>
                    Contact Number *
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 9876543210"
                    required
                  />
                </div>

                {/* INQUIRY */}

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
                      CSR
                      Collaboration
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
                    required
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
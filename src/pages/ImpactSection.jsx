// ImpactSection.jsx

import React, { useEffect, useRef, useState } from "react";

import {
  HeartHandshake,
  GraduationCap,
  BriefcaseBusiness,
  Globe2,
  Quote,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import "./ImpactSection.css";

const impactStats = [
  {
    number: 25000,
    suffix: "+",
    label: "Lives Impacted",
    icon: <HeartHandshake size={22} />,
  },

  {
    number: 8500,
    suffix: "+",
    label: "Students Trained",
    icon: <GraduationCap size={22} />,
  },

  {
    number: 4200,
    suffix: "+",
    label: "Career Placements",
    icon: <BriefcaseBusiness size={22} />,
  },

  {
    number: 65,
    suffix: "+",
    label: "Communities Reached",
    icon: <Globe2 size={22} />,
  },
];

const stories = [
  {
    title: "Women Leadership Programs",
    description:
      "Empowering women through entrepreneurship, mentorship, and career readiness.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Digital Literacy Missions",
    description:
      "Helping underserved communities access digital learning opportunities.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Youth Career Development",
    description:
      "Industry-aligned training and placement assistance for students and graduates.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Community Transformation",
    description:
      "Sustainable social programs creating long-term impact in local communities.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
  },
];

const timeline = [
  {
    year: "2021",
    title: "Foundation Started",
    description:
      "Launched grassroots educational and community development initiatives.",
  },

  {
    year: "2022",
    title: "Digital Learning Expansion",
    description:
      "Expanded digital literacy and employability training across multiple regions.",
  },

  {
    year: "2023",
    title: "10,000+ Lives Impacted",
    description:
      "Reached significant growth through youth training and women empowerment programs.",
  },

  {
    year: "2024",
    title: "Industry Partnerships",
    description:
      "Collaborated with institutions and companies to improve employability outcomes.",
  },

  {
    year: "2025",
    title: "Community Growth Programs",
    description:
      "Scaled sustainable community initiatives focused on education and livelihood.",
  },

  {
    year: "2026",
    title: "25,000+ Lives Empowered",
    description:
      "Expanded NGO impact through nationwide skilling, mentorship, and career support initiatives.",
  },
];

const testimonials = [
  {
    text: "The workshops gave me confidence, practical skills, and career direction.",
    name: "Harish P",
    role: "Student Participant",
    image: "https://i.pravatar.cc/100?img=12",
  },

  {
    text: "This organization transformed education into real opportunities for our students.",
    name: "Priya K",
    role: "Program Coordinator",
    image: "https://i.pravatar.cc/100?img=32",
  },

  {
    text: "Career mentorship and training programs created meaningful impact in our community.",
    name: "Arun M",
    role: "Industry Trainer",
    image: "https://i.pravatar.cc/100?img=48",
  },
];

const CountUp = ({ end, suffix }) => {
  const [count, setCount] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    let started = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;

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
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end]);

  return (
    <h2 ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </h2>
  );
};

const Reveal = ({ children }) => {
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
      className="fade-up"
    >
      {children}
    </div>
  );
};

export default function ImpactSection() {
  return (
    <section className="impact-section">

      <div className="impact-glow glow1"></div>
      <div className="impact-glow glow2"></div>

      <div className="impact-container">

        {/* HERO */}

        {/* <Reveal>
          <div className="impact-hero">

            <div className="impact-left">

              <div className="impact-badge">

                <Sparkles size={15} />

                Our Impact

              </div>

              <h1>
                Creating Opportunities That Transform Communities
              </h1>

              <p>
                Since our journey began, we have worked to empower youth,
                women, and underserved communities through education,
                digital literacy, career development, and sustainable
                social impact initiatives.
              </p>

              <div className="impact-buttons">

                <button className="primary-btn">
                  Explore Our Journey
                  <ArrowRight size={18} />
                </button>

                <button className="secondary-btn">
                  View Programs
                </button>

              </div>

            </div>

            <div className="impact-right">

              <img
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1200&auto=format&fit=crop"
                alt=""
              />

              <div className="floating-impact-card">

                <h3>
                  25K+
                </h3>

                <p>
                  Lives Empowered By 2026
                </p>

              </div>

            </div>

          </div>
        </Reveal> */}

        {/* STATS */}

        {/* <div className="impact-stats-grid">

          {impactStats.map((item, index) => (

            <Reveal key={index}>

              <div className="impact-stat-card">

                <div className="impact-icon">
                  {item.icon}
                </div>

                <CountUp
                  end={item.number}
                  suffix={item.suffix}
                />

                <p>
                  {item.label}
                </p>

              </div>

            </Reveal>

          ))}

        </div> */}

        {/* STORIES */}

        <Reveal>

          <div className="section-heading">

            <span>
              Stories of Change
            </span>

            <h2>
              Real Moments. Real Transformation.
            </h2>

          </div>

        </Reveal>

        <div className="stories-grid">

          {stories.map((story, index) => (

            <Reveal key={index}>

              <div className="story-card">

                <img
                  src={story.image}
                  alt=""
                />

                <div className="story-overlay">

                  <div>

                    <h3>
                      {story.title}
                    </h3>

                    <p>
                      {story.description}
                    </p>

                  </div>

                </div>

              </div>

            </Reveal>

          ))}

        </div>

        {/* TIMELINE */}

        <div className="timeline-section">

          <Reveal>

            <div className="section-heading">

              <span>
                Growth Timeline
              </span>

              <h2>
                Our Journey Until 2026
              </h2>

            </div>

          </Reveal>

          <div className="timeline">

            {timeline.map((item, index) => (

              <Reveal key={index}>

                <div className="timeline-item">

                  <div className="timeline-dot"></div>

                  <div className="timeline-card">

                    <span>
                      {item.year}
                    </span>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.description}
                    </p>

                  </div>

                </div>

              </Reveal>

            ))}

          </div>

        </div>

        {/* TESTIMONIALS */}

        <div className="testimonial-section">

          <Reveal>

            <div className="section-heading">

              <span>
                Community Voices
              </span>

              <h2>
                What People Say About Our Work
              </h2>

            </div>

          </Reveal>

          <div className="testimonial-grid">

            {testimonials.map((item, index) => (

              <Reveal key={index}>

                <div className="testimonial-card">

                  <Quote
                    className="quote-icon"
                    size={26}
                  />

                  <p>
                    “{item.text}”
                  </p>

                  <div className="testimonial-user">

                    <img
                      src={item.image}
                      alt=""
                    />

                    <div>

                      <h4>
                        {item.name}
                      </h4>

                      <span>
                        {item.role}
                      </span>

                    </div>

                  </div>

                </div>

              </Reveal>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
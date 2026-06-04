// import React from "react";

// import {
//   ArrowUpRight,
// } from "lucide-react";

// import "./SkillDevelopmentCourses.css";
// import { Link } from "react-router-dom";

// const featuredCourse = {

//   title:
//     "Future Skills & Technology Training",

//   description:
//     "Empowering students and underserved communities through industry-oriented technology programs, digital innovation and career-focused skill development initiatives.",

//   image:
//     "https://images.pexels.com/photos/31968811/pexels-photo-31968811.jpeg",

// };

// // const courses = [

// //   {
// //     number: "01",
// //     title: "Artificial Intelligence",
// //     image:
// //       "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
// //   },

// //   {
// //     number: "02",
// //     title: "Cloud Computing",
// //     image:
// //       "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
// //   },

// //   {
// //     number: "03",
// //     title: "Full Stack Development",
// //     image:
// //       "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
// //   },

// //   {
// //     number: "04",
// //     title: "Data Science",
// //     image:
// //       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
// //   },

// // ];



// const courses = [

//   {
//     number: "01",
//     title: "Civil CAD",
//     image:
//       "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1400&auto=format&fit=crop",
//   },

//   {
//     number: "02",
//     title: "Mechanical CAD",
//     image:
//       "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1400&auto=format&fit=crop",
//   },

//   {
//     number: "03",
//     title: "Embedded Systems",
//     image:
//       "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop",
//   },

//   {
//     number: "04",
//     title: "Graphic Designing",
//     image:
//       "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1400&auto=format&fit=crop",
//   },

//   {
//     number: "05",
//     title: "SAP & Tally",
//     image:
//       "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1400&auto=format&fit=crop",
//   },

//   {
//     number: "06",
//     title: "Lean Six Sigma",
//     image:
//       "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1400&auto=format&fit=crop",
//   },

//   {
//     number: "07",
//     title: "Online Degree Programs",
//     image:
//       "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1400&auto=format&fit=crop",
//   },

//   {
//     number: "08",
//     title: "Programming Languages",
//     image:
//       "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop",
//   },

//   {
//     number: "09",
//     title: "Data Science",
//     image:
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop",
//   },

//   {
//     number: "10",
//     title: "Full Stack Development",
//     image:
//       "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop",
//   },

//   {
//     number: "11",
//     title: "Software Testing",
//     image:
//       "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop",
//   },

//   {
//     number: "12",
//     title: "Foreign Languages",
//     image:
//       "https://images.unsplash.com/photo-1522202222206-b750f2f1f0a3?q=80&w=1400&auto=format&fit=crop",
//   },

//   {
//     number: "13",
//     title: "Artificial Intelligence",
//     image:
//       "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1400&auto=format&fit=crop",
//   },

//   {
//     number: "14",
//     title: "Cloud Computing",
//     image:
//       "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1400&auto=format&fit=crop",
//   },

// ];
// export default function SkillDevelopmentCourses() {

//   return (

//     <section className="proCoursesSection">

//       {/* HERO */}

//       <div className="proCoursesHero">

//         <img
//           src={featuredCourse.image}
//           alt=""
//         />

//         <div className="heroOverlay"></div>

//         <div className="heroContent">

//           <span>

//             SKILL DEVELOPMENT PROGRAMS

//           </span>

//           <h1>

//             Building Careers
//             Through Future-Ready
//             Technology Education

//           </h1>

//           <p>

//             Our organization provides practical,
//             industry-focused training
//             programs helping youth
//             build sustainable careers
//             in emerging technologies.

//           </p>

//         </div>

//       </div>

//       {/* FLOATING COURSES */}

//       <div className="floatingCoursesWrapper">

//         {courses.map((course, index) => (

//           <div
//             className={`floatingCourseCard card${index + 1}`}
//             key={index}
//           >

//             <img
//               src={course.image}
//               alt=""
//             />

//             <div className="floatingOverlay"></div>

//             <div className="floatingContent">

//               <span>

//                 {course.number}

//               </span>

//               <h3>

//                 {course.title}

//               </h3>
// <Link to="/contact">
//               <button>

//                 Explore Program

//                 <ArrowUpRight size={16} />

//               </button>
//               </Link>

//             </div>

//           </div>

//         ))}

//       </div>

//     </section>

//   );

// }












import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import accentureLogo from "../assets/ourplacementlogo/accenture.jpg";
import appleLogo from "../assets/ourplacementlogo/apple.webp";
import HoneywellLogo from "../assets/ourplacementlogo/Honeywell.webp";
import boeingLogo from "../assets/ourplacementlogo/boeing.jpg";
import ciscoLogo from "../assets/ourplacementlogo/cisco.jpg";
import dellLogo from "../assets/ourplacementlogo/dell.jpg";
import googleLogo from "../assets/ourplacementlogo/google.jpg";
import hclLogo from "../assets/ourplacementlogo/hcl.jpg";
import hpLogo from "../assets/ourplacementlogo/hp.jpg";
import intelLogo from "../assets/ourplacementlogo/intel.jpg";
import lgLogo from "../assets/ourplacementlogo/lg.jpg";
import nutanixLogo from "../assets/ourplacementlogo/nutanix.jpg";
import oracleLogo from "../assets/ourplacementlogo/oracle.png";
import philipsLogo from "../assets/ourplacementlogo/philips.jpg";
import phonepeLogo from "../assets/ourplacementlogo/phonepe.png";
import redhatLogo from "../assets/ourplacementlogo/redhat.jpg";
import siemenLogo from "../assets/ourplacementlogo/siemen.jpg";
import synopsysLogo from "../assets/ourplacementlogo/synopsys.png";
import techmahindraLogo from "../assets/ourplacementlogo/techmahindra.png";
import vmwareLogo from "../assets/ourplacementlogo/vmware.jpg";
import wiproLogo from "../assets/ourplacementlogo/wipro.jpg";
import landtLogo from "../assets/ourplacementlogo/landt.jpg";
import itcLogo from "../assets/ourplacementlogo/itc.jpg";
import abbLogo from "../assets/ourplacementlogo/abb.jpg";
import boschLogo from "../assets/ourplacementlogo/bosch.jpg";
import fedexLogo from "../assets/ourplacementlogo/fedex.jpg";
import ibmLogo from "../assets/ourplacementlogo/IBM.png";
import microsoftLogo from "../assets/ourplacementlogo/microsoftlogo.jpg";
import emcLogo from "../assets/ourplacementlogo/emc.png";

import HexawareLogo from "../assets/ourplacementlogo/Hexaware.png";
import glcLogo from "../assets/ourplacementlogo/glc.jpg";
import acsLogo from "../assets/ourplacementlogo/acs.jpg";
import kpmLogo from "../assets/ourplacementlogo/kpm.png";
import EncoraLogo from "../assets/ourplacementlogo/encora.jpg";
import MotorolaLogo from "../assets/ourplacementlogo/motorola.png";
import LekhaLogo from "../assets/ourplacementlogo/lekha.jpg";
import CognizantLogo from "../assets/ourplacementlogo/cognizant.jpg";
import InfosysLogo from "../assets/ourplacementlogo/infosys.jpg";
import deloiteLogo from "../assets/ourplacementlogo/deloiite.jpg";
import threeLogo from "../assets/ourplacementlogo/three.jpg";
import hauweiLogo from "../assets/ourplacementlogo/hauwei.jpg";
import xicieniaLogo from "../assets/ourplacementlogo/xicienia.jpeg";




import "./SkillDevelopmentCourses.css";

const featuredCourse = {
  title: "Future Skills & Technology Training",

  description:
    "Empowering students and underserved communities through industry-oriented technology programs, digital innovation and career-focused skill development initiatives.",

  image:
    "https://images.pexels.com/photos/31968811/pexels-photo-31968811.jpeg",
};

const courses = [
  {
    number: "01",
    title: "Civil CAD",
    image:
      "https://images.unsplash.com/photo-1769149068959-b11392164add?q=80&w=1931&auto=format&fit=crop",
  },

  {
    number: "02",
    title: "Mechanical CAD",
    image:
      "https://images.unsplash.com/photo-1600869009498-8d429f88d4f5?w=600&auto=format&fit=crop",
  },

  {
    number: "03",
    title: "Embedded Systems",
    image:
      "https://images.pexels.com/photos/4584613/pexels-photo-4584613.jpeg",
  },

  {
    number: "04",
    title: "Graphic Designing",
    image:
      "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?q=80&w=1170&auto=format&fit=crop",
  },

  {
    number: "05",
    title: "SAP & Tally",
    image:
      "https://images.unsplash.com/photo-1642043175009-5997b3a078d8?q=80&w=735&auto=format&fit=crop",
  },

  {
    number: "06",
    title: "Lean Six Sigma",
    image:
      "https://images.pexels.com/photos/7731354/pexels-photo-7731354.jpeg",
  },

  {
    number: "07",
    title: "Online Degree Programs",
    image:
      "https://images.unsplash.com/photo-1610484826967-09c5720778c7?q=80&w=1170&auto=format&fit=crop",
  },

  {
    number: "08",
    title: "Programming Languages",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop",
  },

  {
    number: "09",
    title: "Data Science",
    image:
      "https://unsplash.com/photos/person-using-macbook-pro-pypeCEaJeZY",
  },

  {
    number: "10",
    title: "Full Stack Development",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop",
  },

  {
    number: "11",
    title: "Software Testing",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop",
  },

  {
    number: "12",
    title: "Foreign Languages",
    image:
      "https://plus.unsplash.com/premium_photo-1666739032149-5baca96d6d41?q=80&w=1171&auto=format&fit=crop",
  },

  {
    number: "13",
    title: "Artificial Intelligence",
    image:
      "https://images.unsplash.com/photo-1716436329475-4c55d05383bb?q=80&w=1228&auto=format&fit=crop",
  },

  {
    number: "14",
    title: "Cloud Computing",
    image:
      "https://images.pexels.com/photos/17489153/pexels-photo-17489153.jpeg",
  },
];
const partners = [
  appleLogo,
  accentureLogo,
  intelLogo,
  philipsLogo,
  phonepeLogo,
  boeingLogo,
  googleLogo,
  hpLogo,
  ibmLogo,
  boschLogo,
  fedexLogo,
  itcLogo,
  dellLogo,
  ciscoLogo,
  oracleLogo,
  techmahindraLogo,
  redhatLogo,
  synopsysLogo,
  siemenLogo,
  nutanixLogo,
  vmwareLogo,
  wiproLogo,
  landtLogo,
  hclLogo,
  lgLogo,
  HoneywellLogo,
  kpmLogo,
  HexawareLogo,
  glcLogo,
  microsoftLogo,
  EncoraLogo,
  acsLogo,
  abbLogo,
  MotorolaLogo,
  LekhaLogo,
  CognizantLogo,
  InfosysLogo,
  deloiteLogo,
  emcLogo,
  threeLogo,
  hauweiLogo,
  xicieniaLogo
];
export default function SkillDevelopmentCourses() {
  return (
    <section className="sdcProCoursesSection">
      {/* HERO */}

      <div className="sdcProCoursesHero">
        <img src={featuredCourse.image} alt="" />

        <div className="sdcHeroOverlay"></div>

        <div className="sdcHeroContent">
          <span>SKILL DEVELOPMENT PROGRAMS</span>

          <h1>
            Building Careers
            <br />
            Through Future-Ready
            <br />
            Technology Education
          </h1>

          <p>
            Our organization provides practical, industry-focused training
            programs helping youth build sustainable careers in emerging
            technologies.
          </p>
        </div>
      </div>
{/* HIRING PARTNERS */}

<div className="sdcPartnersSection">
  <div className="sdcPartnersHeading">
    <span>OUR HIRING PARTNERS</span>

    <h2>
      Trusted By Leading
      <br />
      Global Companies
    </h2>
  </div>
  

  <div className="sdcLogoMarquee">
  <div className="sdcLogoTrack">
    {[...partners, ...partners, ...partners].map((logo, index) => (
      <div className="sdcPartnerLogoCard" key={index}>
        <img src={logo} alt="partner" />
      </div>
    ))}
  </div>
</div>
</div>
      {/* FLOATING COURSES */}

      <div className="sdcFloatingCoursesWrapper">
        {courses.map((course, index) => (
          <div
            className={`sdcFloatingCourseCard sdcCard${index + 1}`}
            key={index}
          >
            <img src={course.image} alt="" />

            <div className="sdcFloatingOverlay"></div>

            <div className="sdcFloatingContent">
              <span>{course.number}</span>

              <h3>{course.title}</h3>

              <Link to="/contact">
                <button>
                  Explore Program

                  <ArrowUpRight size={16} />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
}
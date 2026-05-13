// const Topbar = () => {
//   return (
//     <div className="topbar">
//       <div className="container-fluid px-lg-5">
//         <div className="row align-items-center">

//           <div className="col-lg-4 d-none d-lg-flex">
//             <div className="social-icons">
//               <a href="#"><i className="bi bi-facebook"></i></a>
//               <a href="#"><i className="bi bi-twitter"></i></a>
//               <a href="#"><i className="bi bi-instagram"></i></a>
//               <a href="#"><i className="bi bi-youtube"></i></a>
//               <a href="#"><i className="bi bi-linkedin"></i></a>
//             </div>
//           </div>

//           <div className="col-lg-8">
//             <div className="topbar-right">
//               <span><i className="bi bi-envelope-fill"></i> info@globetechfoundation.org</span>
//               <span><i className="bi bi-telephone-fill"></i> +91 96322 23061</span>
//               <span><i className="bi bi-clock-fill"></i> 10.00AM - 6.00 PM</span>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Topbar;






// Topbar.jsx

import React from "react";
import "./Topbar.css";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";

const Topbar = () => {
  return (
    <section className="globetech-topbar-main">

      <div className="globetech-topbar-container">

        {/* LEFT SOCIAL */}
        <div className="globetech-topbar-socials">

          <a href="/">
            <FaFacebookF />
          </a>

          <a href="/">
            <FaTwitter />
          </a>

          <a href="/">
            <FaInstagram />
          </a>

          <a href="/">
            <FaYoutube />
          </a>

          <a href="/">
            <FaLinkedinIn />
          </a>

        </div>

        {/* RIGHT INFO */}
        <div className="globetech-topbar-right">

          <div className="globetech-topbar-item">

            <FaEnvelope />

            <span>
              info@globetechfoundation.org
            </span>

          </div>

          <div className="globetech-topbar-divider"></div>

          <div className="globetech-topbar-item">

            <FaPhoneAlt />

            <span>
              +91 96322 23061
            </span>

          </div>

          <div className="globetech-topbar-divider"></div>

          <div className="globetech-topbar-item">

            <FaClock />

            <span>
              10.00AM - 6.00 PM
            </span>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Topbar;
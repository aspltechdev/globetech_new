
// import React from "react";
// import "./Navbar.css";

// import logo from "../../assets/logo.jpeg";

// import { Link, NavLink } from "react-router-dom";

// import {
//   FaArrowRight,
// } from "react-icons/fa6";

// const Navbar = () => {

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about-us" },
//     { name: "Programs", path: "/programs" },
//     { name: "Impact", path: "/impact" },
//     { name: "Get Involved", path: "/get-involved" },
//     { name: "Events", path: "/events" },
//     { name: "Contact", path: "/contact" },
//     { name: "Courses", path: "/courses" },
//   ];

//   return (
//     <header className="globetech-navbar-wrapper">

//       <div className="globetech-navbar-container">

//         {/* LOGO */}
//         <Link
//           to="/"
//           className="globetech-navbar-logo-area"
//         >

//           <img
//             src={logo}
//             alt="Globetech"
//             className="globetech-navbar-logo"
//           />

//         </Link>

//         {/* NAVIGATION */}
//         <nav className="globetech-navbar-menu">

//           {navItems.map((item, index) => (
//             <NavLink
//               key={index}
//               to={item.path}
//               className={({ isActive }) =>
//                 isActive
//                   ? "globetech-navbar-link active-nav-link"
//                   : "globetech-navbar-link"
//               }
//             >
//               {item.name}
//             </NavLink>
//           ))}

//         </nav>

//         {/* BUTTON */}
//         <a
//           href="/"
//           className="globetech-navbar-donate-btn"
//         >

//           Donate Now

//           <span className="globetech-navbar-btn-icon">
//             <FaArrowRight />
//           </span>

//         </a>

//         {/* MOBILE TOGGLE */}
//         <button
//           className="globetech-mobile-toggle"
//           data-bs-toggle="collapse"
//           data-bs-target="#mobileNavbar"
//         >
//           ☰
//         </button>

//       </div>

//       {/* MOBILE MENU */}
//       <div
//         className="collapse globetech-mobile-menu"
//         id="mobileNavbar"
//       >

//         {navItems.map((item, index) => (
//           <NavLink
//             key={index}
//             to={item.path}
//             className="globetech-mobile-link"
//           >
//             {item.name}
//           </NavLink>
//         ))}

//       </div>

//     </header>
//   );
// };

// export default Navbar;

// Navbar.jsx

import React from "react";
import "./Navbar.css";

import logo from "../../assets/logo.jpeg";

import { Link, NavLink } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa6";

const Navbar = () => {

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Programs", path: "/programs" },
    { name: "Impact", path: "/impact" },
    { name: "Get Involved", path: "/get-involved" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
    { name: "Courses", path: "/courses" },
  ];

  return (
    <header className="globetech-navbar-wrapper">

      <div className="globetech-navbar-container">

        {/* LOGO */}
        <Link
          to="/"
          className="globetech-navbar-logo-area"
        >

          <img
            src={logo}
            alt="Globetech"
            className="globetech-navbar-logo"
          />

        </Link>

        {/* NAVIGATION */}
        <nav className="globetech-navbar-menu">

          {navItems.map((item, index) => (

            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "globetech-navbar-link active-nav-link"
                  : "globetech-navbar-link"
              }
            >
              {item.name}
            </NavLink>

          ))}

        </nav>

        {/* BUTTON */}

        <a
          href="/"
          className="globetech-navbar-donate-btn"
        >

          Donate Now

          <span className="globetech-navbar-btn-icon">
            <FaArrowRight />
          </span>

        </a>

      </div>

    </header>
  );
};

export default Navbar;
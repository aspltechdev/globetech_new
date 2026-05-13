// import logo from "../../assets/logo.jpeg";

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg custom-navbar">
//       <div className="container-fluid px-lg-5">

//         <a className="navbar-brand" href="#">
//           <img src={logo} alt="Logo" className="logo" />
//         </a>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#mainNavbar"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="mainNavbar">

//           <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

//             {[
//               "Home",
//               "About Us",
//               "Programs",
//               "Impact",
//               "Get Involved",
//               "Events",
//               "Contact",
//               "Courses"
//             ].map((item, index) => (
//               <li className="nav-item" key={index}>
//                 <a className="nav-link" href="#">
//                   {item}
//                 </a>
//               </li>
//             ))}

//           </ul>

//           <a href="#" className="donate-btn">
//             Donate Now
//             <i className="bi bi-arrow-right-circle-fill"></i>
//           </a>

//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




// import logo from "../../assets/logo.jpeg";
// import { Link } from "react-router-dom";

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
//     <nav className="navbar navbar-expand-lg custom-navbar">
//       <div className="container-fluid px-lg-5">

//         <Link className="navbar-brand" to="/">
//           <img src={logo} alt="Logo" className="logo" />
//         </Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#mainNavbar"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="mainNavbar">

//           <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
//             {navItems.map((item, index) => (
//               <li className="nav-item" key={index}>
//                 <Link className="nav-link" to={item.path}>
//                   {item.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// Navbar.jsx

import React from "react";
import "./Navbar.css";

import logo from "../../assets/logo.jpeg";

import { Link, NavLink } from "react-router-dom";

import {
  FaArrowRight,
} from "react-icons/fa6";

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

        {/* MOBILE TOGGLE */}
        <button
          className="globetech-mobile-toggle"
          data-bs-toggle="collapse"
          data-bs-target="#mobileNavbar"
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      <div
        className="collapse globetech-mobile-menu"
        id="mobileNavbar"
      >

        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className="globetech-mobile-link"
          >
            {item.name}
          </NavLink>
        ))}

      </div>

    </header>
  );
};

export default Navbar;
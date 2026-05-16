// import React, { useState, useEffect } from "react";
// import "./Navbar.css";
// import logo from "../../assets/logo.jpeg";
// import { Link, NavLink } from "react-router-dom";
// import { FaArrowRight } from "react-icons/fa6";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//   };

//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     if (isMobileMenuOpen) {
//       document.body.classList.add('menu-open');
//     } else {
//       document.body.classList.remove('menu-open');
//     }
    
//     return () => {
//       document.body.classList.remove('menu-open');
//     };
//   }, [isMobileMenuOpen]);

//   return (
//     <header className="globetech-navbar-wrapper">
//       <div className="globetech-navbar-container">
//         {/* LOGO */}
//         <Link to="/" className="globetech-navbar-logo-area" onClick={closeMobileMenu}>
//           <img src={logo} alt="Globetech" className="globetech-navbar-logo" />
//         </Link>

//         {/* DESKTOP NAVIGATION */}
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

//         {/* DONATE BUTTON */}
//         <Link to="/donate" className="globetech-navbar-donate-btn">
//           Donate Now
//           <span className="globetech-navbar-btn-icon">
//             <FaArrowRight />
//           </span>
//         </Link>

//         {/* MOBILE TOGGLE BUTTON */}
//         <button
//           className={`globetech-mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
//           onClick={toggleMobileMenu}
//           aria-label="Toggle menu"
//         >
//           <span className="hamburger-icon">
//             <span></span>
//             <span></span>
//             <span></span>
//           </span>
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       <div className={`globetech-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
//         <div className="globetech-mobile-menu-container">
//           {navItems.map((item, index) => (
//             <NavLink
//               key={index}
//               to={item.path}
//               className={({ isActive }) =>
//                 isActive
//                   ? "globetech-mobile-link active-mobile-link"
//                   : "globetech-mobile-link"
//               }
//               onClick={closeMobileMenu}
//             >
//               {item.name}
//             </NavLink>
//           ))}
          
//           {/* Mobile Donate Button */}
//           <Link to="/donate" className="globetech-mobile-donate-btn" onClick={closeMobileMenu}>
//             Donate Now
//             <span className="globetech-mobile-btn-icon">
//               <FaArrowRight />
//             </span>
//           </Link>
//         </div>
//       </div>

//       {/* Overlay for mobile menu */}
//       <div 
//         className={`globetech-mobile-overlay ${isMobileMenuOpen ? 'show' : ''}`} 
//         onClick={closeMobileMenu}
//       ></div>
//     </header>
//   );
// };

// export default Navbar;















import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.jpeg";
import { Link, NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="globetech-navbar-wrapper">
      <div className="globetech-navbar-container">
        {/* LOGO */}
        <Link to="/" className="globetech-navbar-logo-area" onClick={closeMobileMenu}>
          <img src={logo} alt="Globetech" className="globetech-navbar-logo" />
        </Link>

        {/* DESKTOP NAVIGATION */}
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

        {/* DONATE BUTTON */}
        <Link to="/donate" className="globetech-navbar-donate-btn">
          Donate Now
          <span className="globetech-navbar-btn-icon">
            <FaArrowRight />
          </span>
        </Link>

        {/* MOBILE TOGGLE BUTTON */}
        <button
          className={`globetech-mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* MOBILE MENU - Only rendered when open */}
      {isMobileMenuOpen && (
        <>
          <div className="globetech-mobile-overlay" onClick={closeMobileMenu}></div>
          <div className="globetech-mobile-menu">
            <div className="globetech-mobile-menu-container">
              {navItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "globetech-mobile-link active-mobile-link"
                      : "globetech-mobile-link"
                  }
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </NavLink>
              ))}
              
              {/* Mobile Donate Button */}
              <Link to="/donate" className="globetech-mobile-donate-btn" onClick={closeMobileMenu}>
                Donate Now
                <span className="globetech-mobile-btn-icon">
                  <FaArrowRight />
                </span>
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
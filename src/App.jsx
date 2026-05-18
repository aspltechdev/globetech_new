

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from "./components/layout/Navbar";

// import Home from "./pages/Home";
// import Aboutus from "./pages/AboutUs";
// import Topbar from "./components/layout/Topbar";
// import Footer from "./components/layout/Footer";

// import ProgramsSection from "./pages/Programs";
// import Impact from "./pages/Impact";
// import GetInvolvedSection from "./pages/GetInvolved";
// import Events from "./pages/Events";
// import Courses from "./pages/Courses";
// import Contact from "./pages/Contact";

// function App() {
//   return (
//     <BrowserRouter>
// <Topbar/>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about-us" element={<Aboutus />} />
//         <Route path="/programs" element={<ProgramsSection />} />
//          <Route path="/impact" element={<Impact />} />
//           <Route path="/get-involved" element={<GetInvolvedSection/>} />
//           <Route path="/events" element={<Events />} />
//            <Route path="/courses" element={<Courses />} /> 
//             <Route path="/contact" element={<Contact />} />
//       </Routes>
//       <Footer/>

//     </BrowserRouter>
//   );
// }

// export default App;









import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";

import Navbar from "./components/layout/Navbar";

import Home from "./pages/Home";
import Aboutus from "./pages/AboutUs";
import Topbar from "./components/layout/Topbar";
import Footer from "./components/layout/Footer";

import ProgramsSection from "./pages/Programs";
import Impact from "./pages/Impact";
import GetInvolvedSection from "./pages/GetInvolved";
import Events from "./pages/Events";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/programs" element={<ProgramsSection />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/get-involved" element={<GetInvolvedSection />} />
        <Route path="/events" element={<Events />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* WhatsApp Floating Button */}
 <a
  href="https://wa.me/919632223061"
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-float"
  aria-label="Chat on WhatsApp"
>
  <FaWhatsapp className="whatsapp-icon" />
</a>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
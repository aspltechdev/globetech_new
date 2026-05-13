// GetInvolvedSection.jsx

import React from "react";
import "./GetInvolved.css";

import {
  FaHandsHelping,
  FaHandHoldingHeart,
  FaGlobe,
  FaBookOpen,
  FaLaptop,
} from "react-icons/fa";
import WaysImpactSection from "./WaysImpactSection";
import VolunteerSection from "./VolunteerSection";

const GetInvolvedSection = () => {
  return (
  
<div>
      <WaysImpactSection/>
      <VolunteerSection/>
      </div>
  );
};

export default GetInvolvedSection;
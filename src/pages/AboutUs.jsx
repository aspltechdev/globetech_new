import { Helmet } from "react-helmet-async";

import AboutSection from "../components/about/AboutSection";
import AboutMissionVisionSection from "../components/about/AboutMissionVisionSection";
import CorePillars from "../components/about/CorePillars";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Globetech Social - Empowering Communities</title>
        <meta name="description" content="Learn about Globetech Social's mission, vision, and core pillars. Discover how we empower communities through programs, skill development, and social impact." />
      </Helmet>

      <AboutSection />
      <AboutMissionVisionSection/>
      <CorePillars/>
     
    </>
  );
};

export default AboutUs;
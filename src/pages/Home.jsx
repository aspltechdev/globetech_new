import Topbar from "../components/layout/Topbar";
import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/hero/HeroSection";
import AboutSection from "../components/about/AboutSection";
import MissionVisionSection from "../components/about/MissionVisionSection";
import PillarsSection from "../components/pillars/PillarsSection";
import ReachSection from "../components/reach/ReachSection";
import CareerSection from "../components/career/CareerSection";
import PlacementSection from "../components/placement/PlacementSection";
import SuccessStorySection from "../components/successStory/SuccessStorySection";
import TestimonialSection from "../components/testimonials/TestimonialSection";
import GallerySection from "../components/gallery/GallerySection";
import Footer from "../components/layout/Footer";
import ReachImpactSection from "../components/reach/ReachImpactSection";
import SocialWall from "./SocialWall";

const Home = () => {
  return (
    <>
      {/* <Topbar />
      <Navbar /> */}
      <HeroSection />
      <AboutSection />
      <MissionVisionSection />
      <PillarsSection />
      <ReachSection />
      <ReachImpactSection/>
      <CareerSection />
      <PlacementSection />
      <SuccessStorySection />
      <TestimonialSection />
      <GallerySection />
      <SocialWall/>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
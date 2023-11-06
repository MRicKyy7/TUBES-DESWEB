import Navbar from "../component/Navbar";
import HeroSection from "../component/HeroSection";
import Benefit from "../component/Benefit";
import Course from "../component/Course";
import Footer from "../component/Footer";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Benefit />
      <Course />
      <Footer />
    </div>
  );
}

export default LandingPage;

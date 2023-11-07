import Navbar from "../component/Navbar";
import HeroSection from "../component/HeroSection";
// import Logreg from "../component/Logreg";
import Content from "../component/Content";
import Course from "../component/Course";
import Up from "../component/Up";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Up/>
      {/* <Logreg/> */}
      <HeroSection />
      <Content/>
      <Course/>
    </>
  );
}

export default LandingPage;

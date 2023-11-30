import Navbar from "../component/Navbar";
// import HeroSection from "../component/HeroSection";
import Content from "../component/Content";
// import Course from "../component/Course";
import Up from "../component/Up";
import Footer from "../component/Footer";
import Courses from "../component/Courses";
import Herosections from "../component/Herosections";

function LandingPage() {
  return (
    <>
      <Navbar />
      {/* <Logreg/> */}
      <Herosections/>
      <Content/>
      {/* <Course/> */}
      <Courses/>
      <Up/>
      <Footer/>
    </>
  );
}

export default LandingPage;

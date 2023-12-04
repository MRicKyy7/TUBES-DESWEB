import Navbar from "../component/Navbar";
import Content from "../component/Content";
import Up from "../component/Up";
import Footer from "../component/Footer";
import Courses from "../component/Courses";
import Herosections from "../component/Herosections";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Herosections/>
      <Content/>
      <Courses/>
      <Up/>
      <Footer/>
    </>
  );
}

export default LandingPage;

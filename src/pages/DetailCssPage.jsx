import Header from "../component/detailCss/Header";
import Navbar from "../component/Navbar";
import Class from "../component/detailCss/Class"
import Detail from "../component/detailCss/Detail";
import Materi from "../component/detailCss/Materi";
import Mentor from "../component/detailCss/Mentor";
import Footer from "../component/Footer";
const DetailCssPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#B4C0D1]">
        <Header />
        <div className="lg:hidden">
          <Detail/>
          <Mentor/>
        </div>
        <div className="container mx-auto lg:flex  ">
          <div className="">
            <Class  />
          </div>
          <div className="lg:flex-shrink ">
            <Detail />
            <Mentor/>
          </div>
        </div>
        <Materi />
        <Footer/>
      </div>
    </>
  );
};

export default DetailCssPage;

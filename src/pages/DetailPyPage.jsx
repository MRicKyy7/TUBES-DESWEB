import Header from "../component/detailPy/Header";
import Navbar from "../component/Navbar";
import Class from "../component/detailPy/Class";
import Detail from "../component/detailPy/Detail";
import Materi from "../component/detailPy/Materi";
import Mentor from "../component/detailPy/Mentor";
import Footer from "../component/Footer";

const DetailPyPage = () => {
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
      </div>
      <Footer/>
    </>
  );
};

export default DetailPyPage;

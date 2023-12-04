import Header from "../component/detailPyIntermediate/Header";
import Navbar from "../component/Navbar";
import Class from "../component/detailPyIntermediate/Class";
import Detail from "../component/detailPyIntermediate/Detail";
import Materi from "../component/detailPyIntermediate/Materi";
import Mentor from "../component/Mentor";
import Footer from "../component/Footer";

const DetailPyIntermediatePage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#B4C0D1]">
        <Header />
        <div className="container mx-auto  ">
        <div className="lg:hidden">
          <Detail/>
          <Mentor/>
        </div>
        <div className="lg:flex">
          <div className="">
            <Class  />
        </div>
          <div className="lg:flex-shrink sm:hidden lg:inline ">
            <Detail />
            <Mentor/>
          </div>
          </div>
          <div className="justify-center ">
        <Materi />   
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default DetailPyIntermediatePage;

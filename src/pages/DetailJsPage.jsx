import Header from "../component/detailJs/Header";
import Navbar from "../component/Navbar";
import Class from "../component/detailJs/Class"
import Detail from "../component/detailJs/Detail";
import Materi from "../component/detailJs/Materi";
import Mentor from "../component/Mentor";
import Footer from "../component/Footer";
const DetailJs = () => {
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

export default DetailJs;

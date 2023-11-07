import imgLearn from "../assets/img1.svg";
import imgGraduate from "../assets/img2.svg";
import imgWork from "../assets/img3.svg";


const Content = () => {
  return (
    <>
      <div id="About" className=" z-50">
        <div className="flex-row sm:h-[550px] bg-[#DBE1E9] h-[1120px] ">
          <div className="flex justify-center items-center ">
            <div className="text-center text-sky-950 sm:text-3xl md:text-4xl text-2xl font-extrabold font-poppins leading-loose py-16">
              Why learn with our courses?
              <div className="w-[728px] h-[70px] text-blue-950 md:text-lg sm:text-sm text-sm font-normal font-poppins p-4">
                <p className="text-center">
                  Our courses offer quality instruction, a variety of subjects,
                  <br className="sm:hidden md:hidden lg:hidden xl:hidden" />flexible learning, certificates, support, 
                  <br className="sm:hidden md:hidden lg:hidden xl:hidden"/>success stories, and
                  satisfaction guarantee.
                </p>
              </div>
            </div>
          </div>
          <div className="w-96 h-60 relative">
            <div className="w-96 h-60 top-[3px] -mt-20 absolute md:inline hidden">
              <img src={imgLearn} alt="imgLearn" className="left-44 px-8 top-[78px] absolute inline-flex "/>
              <div className="w-32 h-7 left-[180px] top-[110px] relative text-center text-sky-950 text-2xl font-extrabold font-poppins leading-loose py-16 ">
                01. Learn
              </div>
              <div className="w-96 h-16 left-14 top-60 absolute text-center text-sky-950 font-normal font-poppins leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur
                <br />
                dolorili adipiscing elit. Felis donec
                <br />
                massa aliqua.
              </div>
            </div>
            <div className="w-96 h-60 left-[580px]  top-[4px] absolute hidden md:inline lg:inline">
              <img src={imgGraduate} alt="imgGraduate" className="px-32 absolute inline-flex"/>
              <div className="w-44 h-7 left-[79px] top-24 relative text-center text-sky-950 text-2xl font-extrabold font-poppins leading-loose ">
                02. Graduate
              </div>
              <div className="w-96 h-16 top-40 -mt-1 -ml-7 absolute text-center text-sky-950 font-normal font-poppins leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur
                <br />
                dolorili adipiscing elit. Felis donec
                <br />
                massa aliqua.
              </div>
            </div>
            <div className="w-96 h-60 left-[1060px] top-[6px] absolute xl:inline hidden ">
            <img src={imgWork} alt="imgWork" className="px-36 absolute inline-flex"/>
              <div className="w-32 h-7 left-[120px] top-[97px] relative text-center text-sky-950 text-2xl font-extrabold font-poppins leading-loose">
                03. Work
              </div>
              <div className="w-96 h-16 left-0 top-[155px] absolute text-center text-sky-950 text-base font-normal font-poppins leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur
                <br />
                dolorili adipiscing elit. Felis donec
                <br />
                massa aliqua.
              </div>
            </div>
            <div className="container flex flex-col ">
            <div className=" ">              
              <div className="sm:hidden text-center -mt-10 text-sky-950 text-2xl font-extrabold font-poppins ml-28">
                01. Learn
              </div>
              <img src={imgLearn} alt="imgLearn" className="ml-48 w-28 mt-4 sm:hidden "/>
              <div className="mt-8 ml-28 text-center text-sky-950 font-normal font-poppins leading-relaxed sm:hidden ">
                Lorem ipsum dolor sit amet, consectetur
                dolorili adipiscing elit. Felis donec
                massa aliqua.
              </div>
            </div>
            <div className="mt-10 ">
              <div className=" sm:hidden text-center text-sky-950 text-2xl font-extrabold font-poppins ml-28">
                02. Graduate
              </div>
              <img src={imgGraduate} alt="imgGraduate" className="ml-48 w-28 mt-4 sm:hidden"/>
              <div className="mt-8 ml-28 text-center text-sky-950 font-normal font-poppins leading-relaxed sm:hidden">
                Lorem ipsum dolor sit amet, consectetur
                dolorili adipiscing elit. Felis donec
                massa aliqua.
              </div>
            </div>
            </div>
            <div className="w-60 h-px left-[500px] top-0 absolute origin-top-left rotate-90 bg-sky-950 border-2 border-sky-950 lg:inline xl:inline hidden"></div>
            <div className="w-60 h-px left-[1000px] top-0 absolute origin-top-left rotate-90 bg-sky-950 border-2 border-sky-950 lg:hidden xl:inline hidden"></div>
            
          </div>
          {/* <div className="flex-row flex ">
              <img src={imgWork} alt="imgGraduate" className="ml-48 w-28 mt-4 sm:hidden  ,
              lg:inline lg:w-20 lg:ml-[460px] lg:-mt-24 "/>
              <div className=" lg:inline text-center text-sky-950 text-2xl font-extrabold font-poppins ml-28
              ">
              <p className="">03. Work</p>
              </div>
              <div className="mt-14 ml-28 text-center text-sky-950 font-normal font-poppins leading-relaxed sm:hidden lg:inline , 
              ">
                Lorem ipsum dolor sit amet, consectetur
                dolorili adipiscing elit. Felis donec
                massa aliqua.
              </div>
            </div> */}
        </div>
      </div>
    </>
  );
};

export default Content;

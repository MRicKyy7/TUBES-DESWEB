import searchIcon from "../assets/icon.svg";
import imgWomen from "../assets/imgCewe.svg";

const HeroSection = () => {
  return (
    <>
      <div id="Home">
        <div className="flex-row h-[817px] xl:h-[515px] lg:h-[528px] -mt-16 bg-[#0A2A55] ,
        md:h-[475px] ,
        sm:h-[470px] ">
          <div className="py-32 px-5 xl:ml-10  text-white font-poppins lg:text-6xl md:text-5xl font-extrabold ,
            
            sm:text-4xl  ">
            <div className="text-3xl md:text-5xl ">
              MULAI BELAJAR
            <br /> MENJADI
              <br />PROGRAMMER
            </div>
            <div className="font-poppins font-light text-sm sm:text-sm lg:text-lg mt-4  text-white">
              {" "}
              Tingkatkan keterampilan digital, 
              <br />tambah portofolio, dan{" "}
              <p className="break-words">
                {" "}
                siapkan diri jadi pahlawan teknologi!{" "}
              </p>{" "}
            </div>
          </div>
          <div className=" flex -mt-28 px-14 ml-2">
            <button className="text-white  text-sm font- font-poppins font-light rounded-lg -ml-11 xl:ml-0 hover:text-[#d6d9de] border xl:rounded-lg lg:rounded-lg md:rounded-lg sm:rounded-lg border-white lg:p-3 px-4
            sm:text-xs sm:px-3  ">
              View Courses
            </button>
            <p className="text-sm text-white px-8 py-3
            sm:px-4 sm:text-xs  ">
              {" "}
              Get Free Consultation{" "}
            </p>
          </div>
          <div className="w-[340px] h-16 ml-5 xl:ml-16 mb-40 mt-5 relative bg-white rounded-[3px] ,
          sm:w-[280px] sm:h-10 md:w-[370px] md:h-10 lg:w-[410px] lg:h-12  ">
            <input
              type="text"
              placeholder="What do you want to learn today?"
              className="w-[240px] h-[25px] left-[15px] top-[20px]  absolute text-slate-600 text-sm font-normal font-poppins, 
              sm:top-[10px] sm:w-56 sm:text-xs sm:h-[20px] ,
              lg:top-[13px]  "
            />
            <button className="w-[90px]  pb-4 pt-3 left-[240px] top-2 absolute bg-slate-900 rounded-[10px] flex justify-center items-center gap-3 ,
            xl:w-[130px] lg:w-[130px] , 
            sm:w-[80px] sm:h-8 sm:gap-1 sm:left-[199px] sm:pt-1 sm:pb-2 sm:-mt-1 ,
            md:w-[90px] md:h-9 md:gap-1 md:left-[278px] md:-mt-1.5 ,
            lg:h-11  ">
              <img src={searchIcon} alt="search" className="w-3 sm:w-3 md:w-4"/>
              <span className=" text-center text-white text-[9px] font-medium font-poppins leading-3 ,
              sm:text-[9px] md:text-[12px] xl:text-[15px] ">
                Search
              </span>
            </button>
          </div>
          <div className="xl:ml-20 ">
            <div className="absolute  h-auto
              left-[150px] top-32,
              xl:left-[850px] ,
              lg:left-[640px] lg:top-32 ,
              md:left-[500px] md:top-48 ,
              sm:left-[420px] sm:top-[230px] 
              ">
              <div className="w-[250px] h-[160px]
              xl:w-[400px] xl:h-64 ,
              lg:w-[350px] lg:h-[280px]  ,
              md:w-[300px] md:h-[180px] 
              sm:w-[140px] sm:h-[100px] ,
              bg-blue-600 lg:rounded- xl:rounded-full md:rounded-full sm:rounded-full blur-2xl " />
            </div>
            <img
                src={imgWomen}
                alt="imgWomen"
                className="relative w-full mx-auto my-auto,
                h-[320px] bottom-[118px]
                xl:w-[510px] xl:left-[212px] xl:bottom-[441.5px]  ,
                lg:w-[480px] lg:left-[210px] lg:bottom-[429px]  ,
                md:w-[350px] md:left-[210px] md:bottom-[447px] md:py-5 ,
                sm:w-[290px] sm:left-[180px] sm:bottom-[393px] sm:py-11
                "
              />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

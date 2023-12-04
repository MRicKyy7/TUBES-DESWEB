import imgWomen from "../assets/imgCewe.svg";
import { Link } from "react-router-dom";

const Herosections = () => {
  return (
    <>
      <main className="flex-col overflow-hidden relative flex min-h-[500px] xl:h-[42.5rem] pl-16 pr-20 max-md:px-5 ">
        <div id="Home" />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/918b65f5-7db0-44c5-b789-b8f4a56ec1f6?apiKey=23fb824677004c86b8742e2f02c99782&"
          className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
          alt=""
        />
        <h1 className="relative text-white text-6xl font-extrabold leading-[76.8px] max-w-[648px] mt-24 self-start max-md:max-w-full max-md:text-4xl max-md:mt-10">
          MULAI BELAJAR MENJADI PROGRAMMER
        </h1>
        <p className="relative text-white text-lg font-medium leading-5 mt-2 max-md:max-w-full">
          Tingkatkan keterampilan digital, tambah portofolio,
          <br /> dan siapkan diri
          jadi pahlawan teknologi!
        </p>
        <div className="relative flex w-[392px] max-w-full items-start justify-between gap-5 mt-7 self-start max-md:flex-wrap sm:w-[492px]">
          <Link to="/detail">
          <a
            
            className="justify-center items-center self-stretch flex w-[150px] md:w-[194px] max-w-full flex-col rounded-xl border-2 border-solid border-white"
            >
            <div className="justify-end text-white text-md font-semibold leading-7 tracking-wider self-stretch items-center bg-teal-500 bg-opacity-0 w-full grow lg:pl-2 lg:pr-2  lg:py-3 mx-2 my-3  md:mx- md:my-4 md:ml-8 rounded-md max-md:px-5 md:text-lg ">
              View Courses
            </div>
          </a>
            </Link>
          <div className="justify-center text-white text-md md:text-lg font-medium leading-[52.02px] grow shrink basis-auto my-auto">
            <a href="https://wa.me/62895704401440">
            Get Free Consultation
            </a>
          </div>
        </div>

        <div className="xl:ml-20 relative mx-auto">
          <div
            className="absolute h-auto 
              left-[8rem] ,
              4xl:left-[80rem] 4xl:-top-[37rem]
              2xl:left-[57rem]
              xl:left-[50rem] xl:-top-[28rem] ,
              lg:left-[9rem] lg:top-14 ,
              md:left-[9rem] md:top-16 ,
              
              "
          >
            <div
              className="
              3xl:-translate-y-10
              translate-y-2
              w-[250px] h-[250px]
              4xl:w-[560px] 4xl:h-[560px]
              3xl:w-[560px] 3xl:h-[560px]
              2xl:w-[530px] 2xl:h-[530px]
              xl:w-[400px] xl:h-[400px] 
              xl:-translate-y-2
              2xl:-translate-y-14
              lg:w-[380px] lg:h-[280px]  
              md:w-[350px] md:h-[220px] 
              sm:w-[300px] sm:h-[300px]
              bg-blue-700 animate-pulse lg:rounded-full xl:rounded-full md:rounded-full sm:rounded-full blur-3xl "
            />
          </div>
          <img
            src={imgWomen}
            alt="imgWomen"
            className="relative w-full mx-auto my-auto,
                h-[360px] -bottom-[3px] md:h-[420px] xl:h-[550px]
                xl:-top-[22rem] xl:-right-[35rem] 
                2xl:-right-[48rem] 
                4xl:left-[70rem]"
          />
        </div>
      </main>
    </>
  );
};

export default Herosections;

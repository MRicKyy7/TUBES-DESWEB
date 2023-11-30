import searchIcon from "../assets/icon.svg";
import imgWomen from "../assets/imgCewe.svg";

const Herosections = () => {
  return (
    <>
      <main className="flex-col overflow-hidden relative flex min-h-[500px] xl:h-[45rem] pl-16 pr-20 max-md:px-5 pt-16 ">
        <div id="Home"/>
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
          Tingkatkan keterampilan digital, tambah portofolio, dan siapkan diri
          jadi pahlawan teknologi!
        </p>
        <div className="relative flex w-[492px] max-w-full items-start justify-between gap-5 mt-7 self-start max-md:flex-wrap">
          <a
            href="#"
            className="justify-center items-center self-stretch flex w-[194px] max-w-full flex-col rounded-xl border-2 border-solid border-white"
          >
            <div className="justify-end text-white text-lg font-semibold leading-7 tracking-wider self-stretch items-center bg-teal-500 bg-opacity-0 w-full grow pl-10 pr-7 py-6 ml-4 md:-ml-2 rounded-md max-md:px-5">
              View Courses
            </div>
          </a>
          <div className="justify-center text-white text-lg font-medium leading-[52.02px] grow shrink basis-auto my-auto">
            Get Free Consultation
          </div>
        </div>
        <form
          className="relative bg-white flex w-[492px] max-w-full items-start justify-between gap-5 mt-7 mb-20 pl-9 pr-3 py-2.5 rounded-lg self-start max-md:flex-wrap max-md:mb-10 max-md:pl-5"
          aria-label="Search Form"
        >
          <input
            htmlFor="searchInput"
            className="justify-center text-slate-600 text-base self-center grow shrink basis-auto my-auto font-normal font-poppins" placeholder="What do you want to learn today?"
          >
            
          </input>
          <div className="justify-between items-start bg-slate-900 self-stretch flex w-[142px] max-w-full gap-3.5 pl-8 pr-8 py-4 rounded-xl max-md:px-5 relative">
            <button
              type="submit"
              className="justify-center text-white text-center text-base font-medium leading-7 self-center whitespace-nowrap my-auto ml-8 -mt-1"
            >
              Search
            </button>
            <img src={searchIcon} alt="search" className="w-6 left-4 top-4 absolute"/>
          </div>
        </form>
        <div className="xl:ml-20 relative mx-auto">
            <div className="absolute h-auto 
              left-[8rem] ,
              4xl:left-[80rem] 4xl:-top-[37rem]
              2xl:left-[58rem]
              xl:left-[50rem] xl:-top-[28rem] ,
              lg:left-[9rem] lg:top-14 ,
              md:left-[9rem] md:top-16 ,
              
              ">
              <div className="w-[250px] h-[290px]
              4xl:h-[32rem]
              2xl:w-[530px] 2xl:h-72
              xl:w-[400px] xl:h-64 ,
              lg:w-[380px] lg:h-[280px]  ,
              md:w-[350px] md:h-[220px] 
              
              bg-blue-600 lg:rounded- xl:rounded-full md:rounded-full sm:rounded-full blur-2xl " />
            </div>
            <img
                src={imgWomen}
                alt="imgWomen"
                className="relative w-full mx-auto my-auto,
                h-[360px] -bottom-[3px] md:h-[420px] xl:h-[550px]
                xl:-top-[33.4rem] xl:-right-[35rem] 
                2xl:-right-[48rem] 
                4xl:left-[70rem]
                "
              />
          </div>
      </main>
    </>
  );
};

export default Herosections;

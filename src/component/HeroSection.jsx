function HeroSection() {
  return (
    <main className="bg-[#051830] flex-col overflow-hidden relative flex min-h-[627px] pl-16 pr-20 max-md:px-5">
      <h1 className="relative text-white text-6xl font-extrabold leading-[76.8px] max-w-[648px] mt-24 self-start max-md:max-w-full max-md:text-4xl max-md:mt-10">
        MULAI BELAJAR MENJADI PROGRAMMER
      </h1>
      <p className="relative text-white text-lg font-medium leading-5 mt-2 max-md:max-w-full">
        Tingkatkan keterampilan digital, tambah portofolio, dan <br>
        </br>siapkan diri jadi pahlawan teknologi!
      </p>
      <div className="relative flex w-[492px] max-w-full items-start justify-between gap-5 mt-7 self-start max-md:flex-wrap">
        <a
          href="#"
          className="justify-center items-center self-stretch flex w-[194px] max-w-full flex-col rounded-xl border-2 border-solid border-white"
        >
          <div className="justify-end text-center text-white text-lg font-semibold leading-7 tracking-wider self-stretch items-center rounded-md max-md:px-5">
            View Courses
          </div>
        </a>
        <div className="justify-center text-white text-lg font-medium leading-[52.02px] grow shrink basis-auto my-auto">
          Get Free Consultation
        </div>
      </div>
    </main>
  );
}

export default HeroSection;
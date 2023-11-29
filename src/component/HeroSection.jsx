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
      <form
        className="relative bg-white flex w-[492px] max-w-full items-start justify-between gap-5 mt-7 mb-20 pl-9 pr-3 py-2.5 rounded-lg self-start max-md:flex-wrap max-md:mb-10 max-md:pl-5"
        aria-label="Search Form"
      >
        <label htmlFor="searchInput" className="justify-center text-slate-600 text-base self-center grow shrink basis-auto my-auto">
        <input
            type="text"
            id="searchInput"
            className="w-full bg-transparent border-none placeholder-slate-500 placeholder-opacity-50 focus:outline-none focus:ring-0"
            placeholder="What do you learn today?"
            aria-label="Search Input"
        />
        </label>
        <div className="justify-between items-start bg-slate-900 self-stretch flex w-[142px] max-w-full gap-3.5 pl-8 pr-8 py-4 rounded-xl max-md:px-5">
          <button
            type="submit"
            className="justify-center text-white text-center text-base font-medium leading-7 self-center whitespace-nowrap my-auto"
          >
            Search
          </button>
        </div>
      </form>
    </main>
  );
}

export default HeroSection;
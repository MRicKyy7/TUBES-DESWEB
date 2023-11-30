// import imgLearn from "../assets/img1.svg";
// import imgGraduate from "../assets/img2.svg";
// import imgWork from "../assets/img3.svg";


const Content = () => {
  return (
    <>
      <section className="bg-zinc-200 flex flex-col pl-11 pr-10 max-md:px-5">
      <div id="About"/>
      <h1 className="justify-center text-sky-950 text-5xl font-extrabold leading-[49.95px] self-center max-w-[685px] mt-20 max-md:max-w-full max-md:text-4xl max-md:mt-10">
        Why learn with our courses?
      </h1>
      <p className="text-blue-950 text-center text-2xl leading-9 self-center max-w-[728px] mt-6 max-md:max-w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua...
      </p>
      <div className="self-center flex w-full max-w-[1358px] items-start justify-between gap-5 mt-40 mb-28 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:my-10">
        <div className="flex flex-col self-start">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/548a0330-d80d-444e-a218-0098e13a9325?apiKey=23fb824677004c86b8742e2f02c99782&"
            className="aspect-square object-contain object-center w-20 fill-sky-950 overflow-hidden self-center max-w-full"
            alt="Course 01"
          />
          <h2 className="justify-center text-sky-950 text-center text-2xl font-extrabold leading-8 mt-8">
            01. Learn
          </h2>
          <p className="justify-center text-sky-950 text-center text-lg leading-7 self-stretch mt-7">
            Lorem ipsum dolor sit amet, consectetur <br /> dolorili adipiscing
            elit. Felis donec <br /> massa aliqua.
          </p>
        </div>
        <div className="flex flex-col self-start">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7515faa8-7886-407e-99d4-c4687b788fbe?apiKey=23fb824677004c86b8742e2f02c99782&"
            className="aspect-square object-contain object-center w-20 fill-sky-950 overflow-hidden self-center max-w-full"
            alt="Course 02"
          />
          <h2 className="justify-center text-sky-950 text-center text-2xl font-extrabold leading-8 mt-8">
            02. Graduate
          </h2>
          <p className="justify-center text-sky-950 text-center text-lg leading-7 self-stretch mt-7">
            Lorem ipsum dolor sit amet, consectetur <br /> dolorili adipiscing
            elit. Felis donec <br /> massa aliqua.
          </p>
        </div>
        <div className="flex flex-col self-start">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bcd66d2f-4fe6-4842-aec5-a976f5cb67e0?apiKey=23fb824677004c86b8742e2f02c99782&"
            className="aspect-square object-contain object-center w-20 fill-sky-950 overflow-hidden self-center max-w-full"
            alt="Course 03"
          />
          <h2 className="justify-center text-sky-950 text-center text-2xl font-extrabold leading-8 mt-8">
            03. Work
          </h2>
          <p className="justify-center text-sky-950 text-center text-lg leading-7 self-stretch mt-7">
            Lorem ipsum dolor sit amet, consectetur <br /> dolorili adipiscing
            elit. Felis donec <br /> massa aliqua.
          </p>
        </div>
      </div>
    </section>
    </>
  );
};

export default Content;

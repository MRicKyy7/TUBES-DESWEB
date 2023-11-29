import benefit_learn from '../assets/benefit_learn.svg';
import benefit_graduate from '../assets/benefit_graduate.svg';
import benefit_work from '../assets/benefit_work.svg';

function Benefit() {
  return (
    <section className="bg-zinc-200 flex flex-col pl-11 pr-10 max-md:px-5">
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
            src={benefit_learn}
            className="aspect-square object-contain object-center w-20 fill-sky-950 overflow-hidden self-center max-w-full"
            alt="benefit_learn"
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
            src={benefit_graduate}
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
            src={benefit_work}
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
  );
}

export default Benefit;

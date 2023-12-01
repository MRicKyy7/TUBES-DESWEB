import Html from "../assets/html.svg";
import Css from "../assets/css.svg";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <>
      <div id="course" />
      <div className="bg-slate-300 flex flex-col px-20 max-md:px-5 gap pb-24">
        <div className="self-center flex w-full max-w-[967px] flex-col mt-16 mb-20 max-md:max-w-full max-md:my-10">
          <div className="text-sky-950 text-5xl font-semibold leading-[70.2px] tracking-tighter self-center whitespace-nowrap max-md:text-4xl">
            Featured Course
          </div>
          <div className="self-stretch mt-32 pr-4 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0 mt-10">
                <div className="bg-white flex w-full max-w-[415px] grow pl-0 flex-col mt-1.5 mx-auto pb-7 rounded-3xl max-md:mt-10">
                  <div className="flex-col overflow-hidden self-stretch relative flex aspect-[1.5580524344569289] w-full px-20 py-12 max-md:mr-px max-md:px-5">
                    <img
                      loading="lazy"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e97c609c-cc65-47a2-a7bd-e6c2c566b321?apiKey=23fb824677004c86b8742e2f02c99782&"
                      className="aspect-[0.96] object-contain object-center w-[164px] overflow-hidden self-center max-w-full"
                    />
                  </div>
                  <div className="self-stretch flex flex-col w-full mt-9 pl-6 pr-6 max-md:px-5">
                    <div className="self-stretch flex w-full items-start justify-between gap-5">
                      <div className="text-slate-600 text-sm font-medium leading-9 tracking-tight">
                        5,957 Students
                      </div>
                      <div className="text-slate-600 text-sm font-medium leading-9 tracking-tight whitespace-nowrap self-start">
                        01h 49m
                      </div>
                    </div>
                    <div className="text-slate-700 text-2xl font-semibold leading-9 tracking-tighter self-stretch mt-10 max-md:mt-10">
                      Python entry level
                    </div>
                    <div className="self-stretch flex w-full items-start justify-between gap-5 mt-10 max-md:mt-10">
                      <div className="text-slate-600 text-2xl font-semibold leading-9 tracking-tighter">
                        Rp.50.000
                      </div>
                      <Link as={Link} to={"/detailCss"}>
                        <button className="">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d56ad2e-be23-4794-81c9-eeec13f6b5ba?apiKey=23fb824677004c86b8742e2f02c99782&"
                            className="aspect-[0.95] object-contain object-center w-[35px] overflow-hidden max-w-full self-start"
                          />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[51%] ml-5 max-md:w-full max-md:ml-0 mt-10">
                <div className="bg-white flex w-full max-w-[415px] pl-0 flex-col mx-auto pb-7 rounded-3xl md:mt-1">
                  <div className="flex-col overflow-hidden self-stretch relative flex aspect-[1.5580524344569289] w-full pt-12 pb-5 px-20 max-md:mr-px max-md:px-5">
                    <img
                      loading="lazy"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f70c83a9-391a-4808-91da-85555aaf47f4?apiKey=23fb824677004c86b8742e2f02c99782&"
                      className="aspect-[1.01] object-contain object-center w-[201px] overflow-hidden self-center max-w-full"
                    />
                  </div>
                  <div className="self-stretch flex flex-col w-full mt-9 pl-6 pr-6 max-md:px-5">
                    <div className="self-stretch flex w-full items-start justify-between gap-5">
                      <div className="text-slate-600 text-sm font-medium leading-9 tracking-tight">
                        5,957 Students
                      </div>
                      <div className="text-slate-600 text-sm font-medium leading-9 tracking-tight whitespace-nowrap self-start">
                        01h 49m
                      </div>
                    </div>
                    <div className="text-slate-700 text-2xl font-semibold leading-9 tracking-tighter self-stretch mt-10 max-md:mt-10">
                      Javascript entry level
                    </div>
                    <div className="self-stretch flex w-full items-start justify-between gap-5 mt-10 max-md:mt-10">
                      <div className="text-slate-600 text-2xl font-semibold leading-9 tracking-tighter">
                        Rp.50.000
                      </div>
                      <Link as={Link} to={"/detailJs"}>
                        <button className="">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f038c6ba-8a04-465c-96fe-4fc75725fb54?apiKey=23fb824677004c86b8742e2f02c99782&"
                            className="aspect-[0.95] object-contain object-center w-[35px] overflow-hidden max-w-full self-start"
                          />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-center flex w-full max-w-[967px] flex-col  mb-20 max-md:max-w-full max-md:my-10">
          <div className="self-stretch mt-16 pr-4 max-md:max-w-full max-md:mt-10">
            <div className="gap-10 flex max-md:flex-col max-md:items-stretch max-md:gap-28 ">
              <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0 -mt-16">
                <div className="bg-white flex w-full max-w-[415px] grow pl-0 flex-col mt-1.5 mx-auto pb-7 rounded-3xl max-md:mt-10">
                  <div className="flex-col overflow-hidden self-stretch relative flex aspect-[1.5580524344569289] w-full px-20 py-12 max-md:mr-px max-md:px-5">
                    <img
                      loading="lazy"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                    />
                    <img
                      loading="lazy"
                      src={Html}
                      className="aspect-[0.96] object-contain object-center w-[164px] overflow-hidden self-center max-w-full"
                    />
                  </div>
                  <div className="self-stretch flex flex-col w-full mt-9 pl-6 pr-6 max-md:px-5">
                    <div className="self-stretch flex w-full items-start justify-between gap-5">
                      <div className="text-slate-600 text-sm font-medium leading-9 tracking-tight">
                        5,957 Students
                      </div>
                      <div className="text-slate-600 text-sm font-medium leading-9 tracking-tight whitespace-nowrap self-start">
                        01h 49m
                      </div>
                    </div>
                    <div className="text-slate-700 text-2xl font-semibold leading-9 tracking-tighter self-stretch mt-10 max-md:mt-10">
                      HTML dasar
                    </div>
                    <div className="self-stretch flex w-full items-start justify-between gap-5 mt-10 max-md:mt-10">
                      <div className="text-slate-600 text-2xl font-semibold leading-9 tracking-tighter">
                        Rp.50.000
                      </div>
                      <Link as={Link} to={"/detailHtml"}>
                        <button className="">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d56ad2e-be23-4794-81c9-eeec13f6b5ba?apiKey=23fb824677004c86b8742e2f02c99782&"
                            className="aspect-[0.95] object-contain object-center w-[35px] overflow-hidden max-w-full self-start"
                          />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[51%] ml-5 max-md:w-full max-md:ml-0 -mt-16 pt-">
                <div className="bg-white flex w-full max-w-[415px] pl-0 flex-col mx-auto pb-7 rounded-3xl md:mt-1">
                  <div className="flex-col overflow-hidden self-stretch relative flex aspect-[1.5580524344569289] w-full pt-12 pb-5 px-20 max-md:mr-px max-md:px-5">
                    <img
                      loading="lazy"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                    />
                    <img
                      loading="lazy"
                      src={Css}
                      className="aspect-[1.01] object-contain object-center w-[201px] overflow-hidden self-center max-w-full"
                    />
                  </div>
                  <div className="self-stretch flex flex-col w-full mt-9 pl-6 pr-6 max-md:px-5">
                    <div className="self-stretch flex w-full items-start justify-between gap-5">
                      <div className="text-slate-600 text-sm font-medium leading-9 tracking-tight">
                        5,957 Students
                      </div>
                      <div className="text-slate-600 text-sm font-medium leading-9 tracking-tight whitespace-nowrap self-start">
                        01h 49m
                      </div>
                    </div>
                    <div className="text-slate-700 text-2xl font-semibold leading-9 tracking-tighter self-stretch mt-10 max-md:mt-10">
                      CSS Dasar
                    </div>
                    <div className="self-stretch flex w-full items-start justify-between gap-5 mt-10 max-md:mt-10">
                      <div className="text-slate-600 text-2xl font-semibold leading-9 tracking-tighter">
                        Rp.50.000
                      </div>
                      <Link as={Link} to={"/detailCss"}>
                        <button className="">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f038c6ba-8a04-465c-96fe-4fc75725fb54?apiKey=23fb824677004c86b8742e2f02c99782&"
                            className="aspect-[0.95] object-contain object-center w-[35px] overflow-hidden max-w-full self-start"
                          />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;

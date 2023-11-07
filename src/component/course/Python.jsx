import imgPython from "../../assets/python.svg"
import cart from "../../assets/cart.svg";
import { Link } from "react-router-dom";

const Python = () => {
  return (
    <>
      <div id="Course" className="px-16 py-20 hover:">
        <div className="w-96 h-[450px] relative bg-transparent ml-60 mt-10 mb-10">
          <div className="w-96 h-[480px] left-[4px] top-0 absolute bg-white rounded-2xl z-0" />
          <div className="w-96 h-64 left-1 top-0 absolute bg-stone-100 rounded-tl-2xl rounded-tr-2xl" />
          <img
            src={imgPython}
            alt="imgPython"
            className="relative left-28 top-10"
            />
          <div>
          <div className="w-full ml-7 left-0 top-[360px] absolute text-slate-700 text-2xl font-semibold font-poppins leading-9">
            Python entry level
          </div>
          <div className="w-full left-[26px] top-[292px] absolute text-slate-600 text-sm font-medium font-poppins leading-9">
            5,957 Students
          </div>
          <div className="left-[32px] top-[428px]  absolute text-slate-600 text-xl font-semibold font-poppins leading-9">
            Rp.50.000
          </div>
          <div className="left-[310px] top-[292px] absolute text-slate-600 text-sm font-medium font-poppins leading-9">
            01h 49m
          </div>
          </div>
          <div className="0 "> 
              <Link as={Link} to={"/login"}  >
            <button className="">
            <img src={cart} alt="imgCart" className=" absolute right-4 -bottom-2 bg-slate-200 active:bg-slate-300 focus:outline-none focus:ring " />
            </button>
              </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Python;

import { Link } from "react-router-dom";

const Logreg = () => {
  return (
    <div className="flex  w-full justify-end -mt-16 mb-5 mr-5 gap-3 z-50">
      <div className="z-50 mr-3 mt-3">
        <Link to={"/login"}>
          <button
            className="mb p-1 px-3 text-lg font-medium font-poppins border-2 rounded-md  , 
            border-[#092850] hover:rounded-md hover:text-slate-950 hover:bg-gray-400 active:bg-gray-500 focus:outline-none focus:ring focus:ring-slate-400 "
          >
            Masuk
          </button>
        </Link>
      </div>
      <div className="z-50 mr-5 mt-3">
        <Link to={"/regis"}>
          <button className="text-white rounded-md text-lg font- font-poppins p-1.5 px-4 ,
          hover:text-[#d6d9de] hover:bg-[#072040] border-blue-950 bg-blue-950 active:bg-slate-900 focus:outline-none focus:ring focus:ring-slate-500">
            Daftar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Logreg;

import { useState } from "react";
import wave from "../assets/Vector.svg";
import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";
import eyeIcon from "../assets/eye.svg";
import hideEye from "../assets/hide-eye.svg";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <Navbar />
      <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-b from-[#B4C0D1] to-[#092850] z-0">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={wave}
            alt="Wave"
            className="absolute bottom-0 left-0 right-0 w-full -z-10"
          />
        </div>
        <div className="bg-[#fff] p-4 md:p-7 rounded shadow-md md:w-96 w-auto text-center z-20">
          <h2 className="md:text-2xl text-base mb-4 font-poppins font-bold ">
            Masuk Ke Akun
          </h2>
          <form>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-black py-5 text-left font-poppins -mb-5 ml-1"
              >
                Alamat Email <span className="text-red-500"> * </span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full border rounded border-slate-800 py-1.5 px-3 md:w-80 lg:w-80 sm:w-80"
                required 
              />
            </div>
            <div className="-mt-5">
              <label
                htmlFor="password"
                className="block text-black py-5 text-left font-poppins -mb-5 ml-1"
              >
                Password <span className="text-red-600"> * </span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full border rounded border-slate-800 py-1.5 px-3 md:w-80 lg:w-80 sm:w-80"
                  required 
                />
                <span
                  className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <img src={eyeIcon} alt="eyes" />
                  ) : (
                    <img src={hideEye} alt="hide" />
                  )}
                </span>
              </div>
            </div>
            <div className="mb-4 flex mt-3 ml-1 items-center justify-between">
              <label
                htmlFor="remember"
                className="text-gray-600 lg:text-lg sm:text-sm mr-4"
              >
                <input
                  type="checkbox"
                  id="remember"
                  className="mr-1 font-poppins font-light  "
                />
                Ingat Saya
              </label>
              <a
                href="/lupa-password"
                className="text-black font-light font-poppins"
              >
                Lupa Password?
              </a>
            </div>
            <Link as={Link} to={"/landing"}>
              <button
                type="submit"
                className="bg-slate-800 hover-bg-slate-900 hover-text-slate-200 text-white  hover-border-slate-900 py-3 px-4 rounded w-full font-poppins font-bold mb-2"
              >
                Masuk
              </button>
            </Link>
            <Link as={Link} to={"/regis"}>
              <button className="bg-white hover-bg-slate-800 hover-text-white text-primary py-2 px-4 border rounded border-slate-800 w-full font-poppins font-bold">
                <a href=""> Daftar </a>
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

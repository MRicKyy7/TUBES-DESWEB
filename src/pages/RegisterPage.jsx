import { Link, useNavigate } from "react-router-dom";
import wave from "../assets/Vector.svg";
import Navbar from "../component/Navbar";
import { useState } from "react";
import eyeIcon from "../assets/eye.svg";
import hideEye from "../assets/hide-eye.svg";

function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [noTelp, setNoTelp] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };



  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const response = await fetch('https://65696405de53105b0dd6f962.mockapi.io/api/login/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        no_telp: noTelp,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      navigate("/login");
    } else {
      alert("Register gagal");
    }
    console.log(data);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen relative flex  items-center justify-center bg-gradient-to-b from-[#B4C0D1] to-[#092850] z-20">
        <div className="absolute inset-0 overflow-hidden ">
          <img
            src={wave}
            alt="Wave"
            className="absolute bottom-0 left-0 right-0 w-full -z-10 "
          />
        </div>
        <div className="pt-5 ">
          <div className=" bg-[#fff] sm:w-96 w-96 rounded p-8 shadow-md md:w-96 text-center z-30 mt-20 mb-10">
            <h2 className=" md:text-xl text-base  font-poppins font-semibold p-1 mb-5 -mt-3">
              {" "}
              Pendaftaran Akun
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="-mt-5 relative">
                <label
                  htmlFor="firstName"
                  className="block text-black py-7 text-left font-poppins sm:ml-0 -mb-5"
                >
                  Nama Depan <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-80 border rounded border-slate-800 py-1.5 px-3 xl:w-full md:w-80 lg:w-80 sm:w-80" required
                />
              </div>
              <div className="-mt-5 relative">
                <label
                  htmlFor="lastName"
                  className="block text-black py-7 text-left  font-poppins sm:ml-0 -mb-5 md:text-justify"
                >
                  Nama Belakang <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-80 border rounded border-slate-800 py-1.5 px-3 xl:w-full md:w-80 lg:w-80 sm:w-80" required
                />
              </div>
              <div className="-mt-5 relative">
                <label
                  htmlFor="email"
                  className="block text-black py-7  text-left font-poppins -mb-5 sm:ml-0 "
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-80 border rounded border-slate-800 py-1.5 px-3 xl:w-full md:w-80 lg:w-80 sm:w-80" required
                />
              </div>
              <div className="-mt-5 relative">
                <label
                  htmlFor="phoneNumber"
                  className="block text-black py-7  text-left font-poppins -mb-5 sm:ml-0"
                >
                  Nomor Telepon <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  onChange={(e) => setNoTelp(e.target.value)}
                  className="w-80 border rounded border-slate-800 py-1.5 px-3 xl:w-full md:w-80 lg:w-80 sm:w-80" required
                />
              </div>
              <div className="-mt-5">
                <label
                  htmlFor="password"
                  className="block text-black py-7 font-poppins text-left -mb-4 sm:ml-0"
                >
                  Password <span className="text-red-600"> * </span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-80 border rounded border-slate-800 py-1.5 px-3 xl:w-full md:w-80 lg:w-80 sm:w-80" required
                  />
                  <span
                    className="absolute sm:right-5 sm:top-1/2 sm:transform sm:-translate-y-1/2 right-4 top-1.5 cursor-pointer"
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
              <div className="-mt-5">
                <label
                  htmlFor="confirmPassword"
                  className="block text-black py-7 font-poppins text-left -mb-4 sm:ml-0"
                >
                  Konfirmasi Password <span className="text-red-600"> * </span>
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-80 border rounded border-slate-800 py-1.5 px-3 xl:w-full md:w-80 lg:w-80 sm:w-80" required
                  />
                  <span
                    className="absolute sm:right-5 sm:top-1/2 sm:transform sm:-translate-y-1/2 right-4 top-1.5 cursor-pointer"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    {showConfirmPassword ? (
                      <img src={eyeIcon} alt="eyes" />
                    ) : (
                      <img src={hideEye} alt="hide" />
                    )}
                  </span>
                </div>
              </div>
              <div className="mb-4 flex items-center mt-3 ml-2 relative">
              </div>
              <button
                type="submit"
                className="bg-slate-800 hover:bg-slate-900 hover:text-slate-200 text-white  hover:border-slate-900 py-3 px-4 rounded w-full font-poppins font-bold mb-2 relative"
              >
                Daftar
              </button>
              <Link as={Link} to={"/login"}>
                <button className="bg-white hover:bg-slate-800 hover:text-white text-primary py-2 px-4 border rounded border-slate-800 w-full font-poppins font-bold relative">
                  <a href=""> Masuk Ke Akunmu </a>
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;

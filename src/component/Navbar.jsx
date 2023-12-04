import { useEffect, useState } from "react";
import Logo from "../assets/logo1.png";
import { useLocation, Link } from "react-router-dom";
import { IoLogOutSharp } from "react-icons/io5";

const Navbar = () => {
  const location = useLocation();
  const isTransparent =
    location.pathname === "/regis" || location.pathname === "/login";

  const [isActive, setIsActive] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Tambahkan state isLoggedIn

  const toggleHamburger = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const checkLoginStatus = () => {
      const user = sessionStorage.getItem('user');
      setIsLoggedIn(user !== null);
    };

    window.addEventListener("scroll", handleScroll);
    checkLoginStatus();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isLandingPage = location.pathname === "/landing";
  const isJsPage = location.pathname === "/detailJs";
  const isPythonPage = location.pathname === "/detailPython";
  const isHtmlPage = location.pathname === "/detailHtml";
  const isCssPage = location.pathname === "/detailCss";
  const isPyIntermediatePage = location.pathname === "/detailPythonIntermediate";
  const isJsBeginnerPage = location.pathname === "/detailJsBeginner";
  const isDetail = location.pathname === "/detail";
  


  const scrollToHome = () => {
    const element = document.getElementById("Home");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById("About");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("Contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`sticky top-0 left-0 w-full flex items-center
        ${
          (isActive || scrollPosition > 0)
            ? "bg-opacity-70 backdrop-filter backdrop-blur-[3px] shadow-gray-600 shadow-md "
            : "blur-5px"
        }
        ${isTransparent ? "bg-[#B4C0D1] " : "bg-[#B4C0D1] "} `}
      style={{ zIndex: isActive ? 100 : 100 }}
    >
      <div className="mx-auto -ml-1 navbar">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <Link to="/landing#home">
              <img src={Logo} alt="Logo" className="w-36 -ml-2" />
            </Link>
          </div>
          <div className="flex items-center px-44">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className="block fixed right-4 lg:hidden "
              onClick={toggleHamburger}
            >
              <span
                className={`w-[30px] h-[2px] my-2 block bg-black transition duration-300 ease-out ${
                  isActive ? "origin-top-left rotate-45" : ""
                }`}
              ></span>
              <span
                className={`w-[30px] h-[2px] my-2 block bg-black transition duration-300 ease-out ${
                  isActive ? "scale-0" : ""
                }`}
              ></span>
              <span
                className={`w-[30px] h-[2px] my-2 block bg-black transition duration-300 ease-out ${
                  isActive ? "origin-bottom-left -rotate-45" : ""
                }`}
              ></span>
            </button>
            <nav
              id="navMenu"
              className={`${
                isActive
                  ? "block fixed py-5 bg-[#DBE1E9] shadow-xl rounded-lg max-w-[250px] w-full right-4 top-full bg-opacity-90 backdrop-filter backdrop-blur-[3px] lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
                  : "hidden sm:hidden md:hidden lg:block "
              }`}
            >
              <ul className="block lg:flex lg:-ml-40">
                <li className="group">
                  <Link
                    onClick={scrollToHome}
                    to="/landing#Home"
                    className="text-xl font-poppins font-medium text-slate-900 py-2 mx-8 inline-flex  group-hover:text-blue-900"
                  >
                    Home
                  </Link>
                </li>
                <li className="group">
                  <Link
                    
                    to="/detail"
                    className="text-xl font-poppins font-medium text-slate-900 py-2 mx-8 inline-flex  group-hover:text-blue-900"
                  >
                    Course
                  </Link>
                </li>
                <li className="group">
                  <Link
                    onClick={scrollToAbout}
                    to="/landing#About"
                    className="text-xl font-poppins font-medium text-slate-900 py-2 mx-8 inline-flex  group-hover:text-blue-900"
                  >
                    About
                  </Link>
                </li>
                <li className="group">
                  <Link
                    onClick={scrollToContact}
                    to="/landing#Contact"
                    className="text-xl font-poppins font-medium text-slate-900 py-2 mx-8 inline-flex  group-hover:text-blue-900"
                  >
                    Contact
                  </Link>
                </li>

                { (isLandingPage || isJsPage || isPythonPage || isHtmlPage || isCssPage || isJsBeginnerPage || isPyIntermediatePage || isDetail) && (
                  <>
                    {isLoggedIn ? (
                      <li className="group  right-0 lg:translate-x-56 lg:right-16 xl:translate-x-[470px] 2xl:translate-x-[720px] 3xl:translate-x-[1060px] 4xl:translate-x-[1260px] lg:absolute 5xl:translate-x-[1450px] ">
                        <button
                          className="text-xl font-poppins font-medium text-slate-900 py-2 mx-8 inline-flex  group-hover:text-blue-900 lg:text-white lg:rounded-md lg:text-lg lg:font-poppins lg:p-1.5 lg:focus:outline-none lg:hover:text-[#d6d9de] lg:hover:bg-[#072040] lg:border-blue-950 lg:bg-blue-950 lg:active:bg-slate-900 lg:focus:ring lg:focus:ring-slate-500 right-0"
                          onClick={() => {
                            sessionStorage.removeItem('user');
                            setIsLoggedIn(false);
                            window.location.href = '/login';
                          }}
                        >
                          <IoLogOutSharp className="w-10 h-10"/>
                        </button>
                      </li>
                    ) : (
                      <>
                        <li className="group  right-0 lg:right-20 lg:translate-x-32 xl:translate-x-[360px] 2xl:translate-x-[620px] 3xl:translate-x-[950px] 4xl:translate-x-[1140px] lg:absolute 5xl:translate-x-[1320px] ">
                          <Link to="/login">
                            <button
                              className="text-xl font-poppins font-medium text-slate-900 py-2 mx-8 inline-flex  group-hover:text-blue-900 lg:text-lg lg:font-medium lg:border-2 lg:rounded-md lg:border-[#092850] lg:hover:rounded-md lg:hover:text-slate-950 lg:hover:bg-gray-400 lg:active:bg-gray-500 lg:focus:outline-none lg:focus:ring lg:focus:ring-slate-400 lg:p-1 lg:px-3"
                            >
                              Login
                            </button>
                          </Link>
                        </li>
                        <li className="group  right-0 lg:translate-x-56 lg:right-16 xl:translate-x-[470px] 2xl:translate-x-[720px] 3xl:translate-x-[1060px] 4xl:translate-x-[1260px] lg:absolute 5xl:translate-x-[1450px] mr-5">
                          <Link to="/regis">
                            <button
                              className="text-xl font-poppins font-medium text-slate-900 py-2 mx-8 inline-flex  group-hover:text-blue-900 lg:text-white lg:rounded-md lg:text-lg lg:font-poppins lg:p-1.5 lg:focus:outline-none lg:hover:text-[#d6d9de] lg:hover:bg-[#072040] lg:border-blue-950 lg:bg-blue-950 lg:active:bg-slate-900 lg:focus:ring lg:focus:ring-slate-500 right-0 "
                            >
                              Register
                            </button>
                          </Link>
                        </li>
                      </>
                    )}
                  </>
                )}
                {isLoggedIn && (isJsPage || isPythonPage || isHtmlPage || isCssPage || isJsBeginnerPage || isPyIntermediatePage || isDetail) && (
                  <li className="group right-0 lg:translate-x-56 lg:right-16 xl:translate-x-[470px] 2xl:translate-x-[720px] 3xl:translate-x-[1060px] 4xl:translate-x-[1260px] lg:absolute 5xl:translate-x-[1450px] ">
                    <button
                      className="text-xl font-poppins font-medium text-slate-900 py-2 mx-8 inline-flex  group-hover:text-blue-900 lg:text-white lg:rounded-md lg:text-lg lg:font-poppins lg:p-1.5 lg:focus:outline-none lg:hover:text-[#d6d9de] lg:hover:bg-[#072040] lg:border-blue-950 lg:bg-blue-950 lg:active:bg-slate-900 lg:focus:ring lg:focus:ring-slate-500 right-0"
                      onClick={() => {
                        sessionStorage.removeItem('user');
                        setIsLoggedIn(false);
                        window.location.href = '/login';
                      }}
                    >
                      <IoLogOutSharp className="w-10 h-10"/>
                    </button>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;











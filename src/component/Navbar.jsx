import Logo from "../assets/logo1.png";
import { useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import hamburger from "../assets/hamburger.svg"; // Import ikon hamburger

const Navbar = () => {
  const location = useLocation();
  const isTransparent =
    location.pathname === "/regis" || location.pathname === "/login";

  const Linked = [
    {
      id: "Home",
      name: "Home",
    },
    {
      id: "Course",
      name: "Course",
    },
    {
      id: "contact",
      name: "Contact",
    },
    {
      id: "about",
      name: "About",
    },
  ];

  return (
    <nav
      className={`flex sticky w-full items-center z-50 ${
        isTransparent ? "bg-[#B4C0D1]" : "bg-[#DBE1E9]"
      } `}
    >
      <div className=" items-center ">
        <img src={Logo} alt="Logo" className="h-26 w-28 mr-2" />
      </div>
      <div> {/* Tampilkan hanya pada layar kecil */}
        <img src={hamburger} alt="hamburger" className="" />
      </div>
      
      <div className="lg:block">
        <div className="ml-4 flex space-x-4">
          {Linked.map((nav) => (
            <div key={nav.id}>
              <ScrollLink
                to={nav.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button>{nav.name}</button>
              </ScrollLink>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

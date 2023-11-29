import Logo from "../assets/logo1.png";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isTransparent = location.pathname === "/regis" || location.pathname === "/login";
  
  const Linked = [
    { 
      id: 1, 
      name: 'Home',
      path: "/login"
    },
    {
      id: 2,
      name: 'Course',
      path: "/regis"
    },
    { 
      id: 3, 
      name: 'Contact',
      path: "/"
    },
    {
      id: 4,
      name: 'About',
      path: "/"
    },
    {
      id: 5,
      name: 'Apa kek',
      path: "/"
    },
  ]

  return (
    <nav className={`flex fixed w-full items-center z-40  ${isTransparent ? "bg-transparent" : "bg-[#DBE1E9]"}`}>
      <div className="flex items-center flex-row">
        <img src={Logo} alt="Logo" className="h-26 w-28 mr-2" />
      </div>
      <ul className="ml-4 flex space-x-4 z-30 ">
        {Linked.map((nav) => (
          <div key={nav.id}>
            <Link className="font-semibold" as={Link} to={nav.path}{...nav}>{nav.name}</Link>
            </div>
        ) )}
        {/* <li>
          <Link to="/" className="text-primary font-poppins font font-semibold">
            Home
          </Link>
        </li>
        <li>
          <Link to="/login" className="text-primary font-poppins font-semibold">
            Course
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-primary font-poppins font-semibold">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-primary font-poppins font font-semibold">
            About
          </Link>
        </li> */}
      </ul>
      {location.pathname === "/" && (
        <div className="flex w-full justify-end mt-4 mb-5 right-10 z-30 gap-3">
          <div>
            <Link to={"/login"}>
              <button className="mb text-lg font-medium font-poppins border-2 rounded-md border-[#092850] hover:rounded-md hover:text-slate-950 hover:bg-[#B4C0D1] p-1 px-3">Masuk</button>
            </Link>
          </div>
          <div>
            <Link to={"/regis"}>
              <button className="text-white rounded-md text-lg font- font-poppins hover:text-[#d6d9de] hover:bg-[#072040] border-blue-950 bg-blue-950 p-1.5 px-4">Daftar</button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

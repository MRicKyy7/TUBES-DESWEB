import Logo from "../assets/logo1.png";
// const Navbar = () => {
//   return (
//     <nav className="bg-[#B4C0D1] top-0 w-full">
//       <div className="container mx-auto flex justify-between items-center">

//         <img src="" alt="" />
//         <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
//       </div>
//     </nav>
//   );
// };

const Navbar = () => {
  return (
    <nav className="bg-transparent p-1 flex items-center fixed z-30 container">
      <div className="flex items-center flex-row">
        <img src={Logo} alt="Logo" className="h-26 w-28 mr-2" />
      </div>
      <ul className="ml-4 flex space-x-4">
        <li>
          <a href="/home" className="text-primary font-poppins font font-semibold">
            Home
          </a>
        </li>
        <li>
          <a href="/program" className="text-primary font-poppins font-semibold">
            Program
          </a>
        </li>
        <li>
          <a href="/contact" className="text-primary font-poppins font-semibold">
            Contact
          </a>
        </li>
        <li>
          <a href="/about" className="text-primary font-poppins font font-semibold">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

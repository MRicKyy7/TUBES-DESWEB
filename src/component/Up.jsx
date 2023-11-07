import { Link as ScrollLink, scroller } from "react-scroll";
import iconUp from "../assets/scrollup.svg"

const Up = () => {
  const scrollToTop = () => {
    scroller.scrollTo("top", {
      duration: 800,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="fixed bottom-4 right-4">
      <ScrollLink
        to="Home" // Ganti dengan ID elemen target yang sesuai
        spy={true}
        smooth={true}
        offset={-70} // Sesuaikan offset jika diperlukan
        duration={800}
      >
        <button
          onClick={scrollToTop}
          className="bg-blue-400 rounded-full p-2"
        >
          <img src={iconUp} alt="UP" />
          <a className="text-xs text-white font-bold"> UP </a>
        </button>
      </ScrollLink>
    </div>
  );
};

export default Up;

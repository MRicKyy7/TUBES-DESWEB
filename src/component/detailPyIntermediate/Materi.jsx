import { useState } from "react";

const Materi = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (index) => {
    if (expandedItem === index) {
      setExpandedItem(null);
    } else {
      setExpandedItem(index);
    }
  };

  const materiDescriptions = [
    "Fungsi merupakan blok kode yang dirancang untuk melakukan tugas tertentu, dan mereka menyediakan cara untuk mengorganisir dan merapikan kode program.",
    "Recursive function adalah suatu fungsi yang memanggil dirinya sendiri selama eksekusi.",
    "Lambda function adalah istilah yang umumnya digunakan untuk merujuk pada fungsi anonim atau fungsi tanpa nama di dalam pemrograman.",
    " konsep dalam pemrograman JavaScript yang mengacu pada kemampuan suatu fungsi untuk mengakses variabel-variabel di luar ruang lingkup (scope) fungsi tersebut, bahkan setelah fungsi tersebut telah selesai dieksekusi. ",
    "OOP (Object Oriented Programming) adalah suatu metode pemrograman yang berorientasi kepada objek.",
  ];

  const materiItems = [
    "Memahami dan mampu membuat Function",
    "Recursive Function",
    "Lambda Function",
    "Closure",
    "konsep OOP",
    
  ];

  return (
    <>
      <div className="container mx-auto">
        <div className="flex">
          <div className="bg-[#DBE1E9] w-full mr-3 h-auto mt-8 shadow-md shadow-slate-800 rounded-lg outline outline-1 -outline-offset-1 outline-slate-500 lg:w-[40rem] xl:w-[58rem] 2xl:w-[70rem] 3xl:w-[85rem] 4xl:ml-48">
            <div className="">
              <h2 className="text-[#0A2A55] font-poppins text-lg font-semibold ml-4 mt-3 2xl:text-xl">
                Materi
              </h2>
              <div className="ml-3 text-justify mr-2 flex-row">
                <ol className="ml-2 mt-4 text-[#0A2A55] font-poppins font-medium 2xl:text-lg mb-8">
                  {materiItems.map((item, index) => (
                    <li
                      key={index}
                      className={`bg-white mt-4 cursor-pointer ${
                        expandedItem === index ? "h-auto" : "h-[1.5rem]"
                      } transition-all duration-300 overflow-hidden`}
                      onClick={() => handleItemClick(index)}
                    >
                      <span className="w-[30rem] xl:w-[55rem] lg:w-[37rem] sm:w-[35rem] md:w-[43rem] 2xl:w-[67rem] 3xl:w-[82rem] inline-block">
                        {index + 1}. {item}
                      </span>
                      {expandedItem === index && (
                        <div className="ml-2 mt-4">
                          {materiDescriptions[index]}
                        </div>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Materi;

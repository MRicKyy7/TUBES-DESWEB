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
    "Tipe Data dan Variabel JavaScript adalah konsep dasar dalam bahasa pemrograman JavaScript yang berkaitan dengan cara menyimpan dan memanipulasi data. ",
    "Operator JavaScript adalah simbol atau kata kunci yang digunakan untuk melakukan operasi pada satu atau beberapa nilai.",
    "Fungsi JavaScript adalah blok kode yang dirancang untuk melakukan tugas tertentu atau menghasilkan nilai.",
    "Array JavaScript adalah struktur data yang digunakan untuk menyimpan dan mengelola kumpulan nilai dalam satu variabel",
    "Objek JavaScript adalah struktur data yang digunakan untuk mengelompokkan dan menyimpan data dalam bentuk pasangan kunci-nilai.",
    "JavaScript Loop adalah struktur kontrol yang memungkinkan menjalankan blok kode secara berulang. ",
    "JavaScript Conditionals adalah struktur kontrol yang memungkinkan menjalankan blok kode tertentu berdasarkan suatu kondisi yang diberikan.",
  ];

  const materiItems = [
    "Tipe Data dan Variabel JavaScript",
                "Operator JavaScript",
                "Fungsi JavaScript",
                "Array JavaScript",
                "Objek JavaScript",
                "JavaScript Loop",
                "JavaScript Conditionals",
  ];

  return (
    <>
      <div className="container mx-auto">
        <div className="flex">
          <div className="bg-[#DBE1E9] w-full mr-3 h-auto  mt-8 shadow-md shadow-slate-800 rounded-lg outline outline-1 -outline-offset-1 outline-slate-500 lg:w-[40rem] xl:w-[58rem] 2xl:w-[70rem] 3xl:w-[85rem] 4xl:ml-48">
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

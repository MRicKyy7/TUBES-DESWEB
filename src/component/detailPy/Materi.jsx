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
    "Iterasi array adalah proses mengakses dan melakukan operan pada setiap elemen array, satu per satu. Bisa dikatakan, ini adalah perulangan dalam konteks array. JavaScript memiliki beberapa metode built-in yang mengizinkan kamu melakukan iterasi array dengan mudah.",
    "Objek Array digunakan untuk menyimpan beberapa nilai dalam satu variabel.",
    "Rekursif adalah function yang memanggil dirinya sendiri, sehingga akan mengulangi perintah-perintah yang dieksekusi di dalam function tersebut.",
    "Module adalah file Javascript yang di dalamnya terdapat value dari objects, functions, dan variables. Kemudian file tersebut dapat diexport dan diimport oleh file lain. Yang mana file lain yang mengimportnya dapat menggunakan values yang ada di file tersebut.",
    "OOP (Object Oriented Programming) adalah suatu metode pemrograman yang berorientasi kepada objek.",
    "Prototype adalah sebuah bentuk object khusus yang menjadi induk dari object-object lainnya.",
    "Web Storage atau biasanya dapat diketahui sebagai DOM storage (Document Object Model Storage), adalah metode yang digunakan pada website untuk dapat menyimpan data pada sisi klien (client-side).",
  ];

  const materiItems = [
    "Python Introduction",
    "Tipe Data Dan Operator",
    "Variabel dan input",
    "Logical and Comparison Operators",
    "Conditional Statement",
    "Loops",
    "Sequence Data Types",
  ];

  return (
    <>
      <div className="container mx-auto">
        <div className="flex">
          <div className="bg-[#DBE1E9] w-full mr-3 h-96 mt-8 relative shadow-md shadow-slate-800 rounded-lg outline outline-1 -outline-offset-1 outline-slate-500 lg:w-[40rem] xl:w-[58rem] 2xl:w-[70rem] 3xl:w-[85rem] 4xl:ml-48">
            <div className="absolute">
              <h2 className="text-[#0A2A55] font-poppins text-lg font-semibold ml-4 mt-3 2xl:text-xl">
                Materi
              </h2>
              <div className="ml-3 text-justify mr-2 relative flex-row">
                <ol className="ml-2 mt-4 text-[#0A2A55] font-poppins font-medium 2xl:text-lg">
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

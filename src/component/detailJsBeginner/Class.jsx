
const Class = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex">
          <div className="bg-[#DBE1E9] w-full h-96 mt-9 relative shadow-md shadow-slate-800 rounded-lg outline outline-1 mx-auto -outline-offset-1 outline-slate-500 lg:w-[40rem]  xl:w-[58rem]  2xl:w-[70rem] 3xl:w-[85rem] lg:mx-auto 2xl:mx-auto 3xl:mx-auto 4xl:ml-48 ">
            <div className="absolute">
              <h2 className="text-slate-800 font-poppins text-lg font-semibold ml-3 mt-2 2xl:text-xl">
                Tentang Kelas
              </h2>
              <div className="ml-3 text-justify mr-2">
              <span className="font-poppins text-slate-800 font-medium 2xl:text-lg ">
              Di kelas ini kita akan belajar bagaimana membuat sebuah website menjadi lebih interaktif dengan menambahkan beberapa program yang ditulis menggunakan JavaScript. Dengan JavaScript, kita bisa membuat suatu website untuk mengolah data, menampilkan data, membuat element-element pada website menjadi lebih komunikatif, dan lain sebagainya, sehingga sebuah website bisa ‘berinteraksi’ dengan pengguna.
              </span>
              <ol className="ml-6 mt-4 list-decimal text-slate-800 font-poppins font-medium 2xl:text-lg">
                <li>Tipe Data dan Variabel JavaScript</li>
                <li>Operator JavaScript</li>
                <li>Fungsi JavaScript</li>
                <li>Array JavaScript</li>
                <li>Objek JavaScript</li>
                <li>JavaScript Loop</li>
                <li>JavaScript Conditionals</li>
              </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Class;

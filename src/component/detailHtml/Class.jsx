
const Class = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex">
          <div className="bg-[#DBE1E9] w-full h-96 mt-5 relative shadow-md shadow-slate-800 rounded-lg outline outline-1 mx-auto -outline-offset-1 outline-slate-500 lg:w-[40rem]  xl:w-[58rem] 2xl:w-[70rem] 3xl:w-[85rem] lg:mx-auto">
            <div className="absolute">
              <h2 className="text-slate-800 font-poppins text-lg font-semibold ml-3 mt-2 2xl:text-xl">
                Tentang Kelas
              </h2>
              <div className="ml-3 text-justify mr-2">
              <span className="font-poppins text-slate-800 font-medium 2xl:text-lg">
              Di kelas ini, kita akan belajar bagaimana membuat sebuah website dari awal dengan menggunakan HTML. Dengan HTML, kita bisa membuat struktur dan kerangka sebuah website yang terdiri dari beberapa element. HTML juga berfungsi sebagai penampil konten pada website kita. Hal yang akan dipelajari :               
              </span>
              <ol className="ml-6 mt-4 list-decimal text-slate-800 font-poppins font-medium 2xl:text-lg">
                <li>Struktur Dokumen HTML</li>
                <li>HTML Element, Tag, Attribute & Comment</li>
                <li>HTML Tag Untuk Menampilkan Teks</li>
                <li>HTML Tag Untuk Multimedia</li>
                <li>HTML Tag Untuk Tabel</li>
                <li>HTML Tag Untuk Formulir</li>
                <li>HTML Tag Untuk Membagi Layout Website</li>
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

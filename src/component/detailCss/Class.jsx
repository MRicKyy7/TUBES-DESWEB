
const Class = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex">
          <div className="bg-[#DBE1E9] w-full h-96 mt-5 relative shadow-md shadow-slate-800 rounded-lg outline outline-1 mx-auto -outline-offset-1 outline-slate-500 lg:w-[40rem]  xl:w-[58rem] lg:mx-auto 2xl:w-[70rem] 3xl:w-[85rem]">
            <div className="absolute">
              <h2 className="text-slate-800 font-poppins text-lg font-semibold ml-3 mt-2 2xl:text-xl">
                Tentang Kelas
              </h2>
              <div className="ml-3 text-justify mr-2">
              <span className="font-poppins text-slate-800 font-medium 2xl:text-lg">
              Di kelas ini kita akan belajar bagaimana cara memberikan style pada setiap element di website dengan menggunakan CSS, seperti memberikan warna pada element, memposisikan element, memberikan gambar background, membuat tampilan menjadi responsif, dan lain sebagainya. Hal yang akan dipelajari :               
              </span>
              <ol className="ml-6 mt-4 list-decimal text-slate-800 font-poppins font-medium 2xl:text-lg">
                <li>Menyisipkan CSS di dalam file HTML</li>
                <li>CSS Syntax, CSS Selector, Pseudo-class, & Pseudo-element</li>
                <li>CSS Box Model</li>
                <li>CSS Display</li>
                <li>CSS Position</li>
                <li>Desain Website Responsif</li>
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

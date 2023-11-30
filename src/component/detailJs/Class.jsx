
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
                Pada kelas JavaScript Intermediate ini, kamu akan mendalami
                materi lanjutan dari kelas JavaScript Dasar.
                <br />JavaScript Intermediate 
                brbanyak membahas topik-topik penting yang pastinya
                akan bisa langsung diimplementasikan pada proyek aplikasi kamu.
              </span>
              <ol className="ml-6 mt-4 list-decimal text-slate-800 font-poppins font-medium 2xl:text-lg">
                <li>Array 1 - Iterasi</li>
                <li>Array 2 - Array of objects</li>
                <li>Rekursif</li>
                <li>Modules</li>
                <li>OOP</li>
                <li>Prototypes</li>
                <li>Web Storage</li>
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

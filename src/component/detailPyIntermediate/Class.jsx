
const Class = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex">
          <div className="bg-[#DBE1E9] w-full h-80 mt-9 relative shadow-md shadow-slate-800 rounded-lg outline outline-1 mx-auto -outline-offset-1 outline-slate-500 lg:w-[40rem]  xl:w-[58rem] 2xl:w-[70rem] 3xl:w-[85rem] lg:mx-auto 4xl:ml-48">
            <div className="absolute">
              <h2 className="text-slate-800 font-poppins text-lg font-semibold ml-3 mt-2 2xl:text-xl">
                Tentang Kelas
              </h2>
              <div className="ml-3 text-justify mr-2">
              <span className="font-poppins text-slate-800 font-medium 2xl:text-lg">
              Pada kelas ini kamu akan mempelajari Python 3 yang merupakan versi terbaru dari Python.
Setelah mempelajari kelas ini kamu akan mampu:
                
              </span>
              <ol className="ml-6 mt-4 list-decimal text-slate-800 font-poppins font-medium 2xl:text-lg">
                <li>Memahami dan mampu membuat Function</li>
                <li>Memahami dan mampu membuat Recursive Functiont</li>
                <li>Memahami dan mampu membuat Lambda Function</li>
                <li>Memahami dan mampu membuat Closure</li>
                <li>Memahami konsep OOP</li>
                <li>Mampu menerapkan OOP pada Python</li>
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

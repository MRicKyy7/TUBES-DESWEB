const Materi = () => {
    return (
      <>
        <div className="container mx-auto">
          <div className="flex">
            <div className="bg-[#DBE1E9] w-full mr-3  h-96 mt-12 relative shadow-md shadow-slate-800 rounded-lg outline outline-1 -outline-offset-1 outline-slate-500 lg:w-[40rem] xl:w-[58rem] 2xl:w-[70rem] 3xl:w-[85rem] 4xl:ml-48">
              <div className="absolute">
                <h2 className="text-slate-800 font-poppins text-lg font-semibold ml-4 mt-3 2xl:text-xl">
                  Materi
                </h2>
                <div className="ml-3 text-justify mr-2 relative flex-row">
                <ol className="ml-2 mt-4  text-slate-800 font-poppins font-medium 2xl:text-lg">
                  <li className="bg-white w-[30rem] xl:w-[55rem] lg:w-[37rem] sm:w-[35rem] md:w-[43rem] 2xl:w-[67rem] 3xl:w-[82rem]">1. Array 1 - Iterasi</li>
                  <li className="bg-white mt-4">2. Array 2 - Array of objects</li>
                  <li className="bg-white mt-4">3. Rekursif</li>
                  <li className="bg-white mt-4">4. Modules</li>
                  <li className="bg-white mt-4">5. OOP</li>
                  <li className="bg-white mt-4">6. Prototypes</li>
                  <li className="bg-white mt-4">7. Web Storage</li>
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
  
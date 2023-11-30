const Materi = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex">
          <div className="bg-[#DBE1E9] w-full mr-3  h-96 mt-8 relative shadow-md shadow-slate-800 rounded-lg outline outline-1 -outline-offset-1 outline-slate-500 lg:w-[40rem] xl:w-[58rem]  2xl:w-[70rem] 3xl:w-[85rem] 4xl:ml-48">
            <div className="absolute">
              <h2 className="text-[#0A2A55] font-poppins text-lg font-semibold ml-4 mt-3 2xl:text-xl">
                Materi
              </h2>
              <div className="ml-3 text-justify mr-2 relative flex-row">
                <ol className="ml-2 mt-4  text-[#0A2A55] font-poppins font-medium 2xl:text-lg">
                  <li className="bg-white w-[30rem] xl:w-[55rem] lg:w-[37rem] sm:w-[35rem] md:w-[43rem] 2xl:w-[67rem] 3xl:w-[82rem]">
                    1. Python Introduction
                  </li>
                  <li className="bg-white mt-4">2. Tipe Data Dan Operator</li>
                  <li className="bg-white mt-4">3. Variabel dan input</li>
                  <li className="bg-white mt-4">
                    4. Logical and Comparison Operators
                  </li>
                  <li className="bg-white mt-4">5. Conditional Statement</li>
                  <li className="bg-white mt-4">6. Loops</li>
                  <li className="bg-white mt-4">7. Sequence Data Types</li>
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

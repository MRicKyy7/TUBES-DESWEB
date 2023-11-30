
const Class = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex">
          <div className="bg-[#DBE1E9] w-full h-72 mt-5 relative shadow-md shadow-slate-800 rounded-lg outline outline-1 mx-auto -outline-offset-1 outline-slate-500 lg:w-[40rem]  xl:w-[58rem] 2xl:w-[70rem] 3xl:w-[85rem] lg:mx-auto">
            <div className="absolute">
              <h2 className="text-slate-800 font-poppins text-lg font-semibold ml-3 mt-2 2xl:text-xl">
                Tentang Kelas
              </h2>
              <div className="ml-3 text-justify mr-2">
              <span className="font-poppins text-slate-800 font-medium 2xl:text-lg">
              Pada kelas ini kamu akan mempelajari dasar dari Python 3 yang merupakan versi terbaru dari Python. 
              Python dapat digunakan untuk berbagai kasus dan berbagai platform seperti:
                
              </span>
              <ol className="ml-6 mt-4 list-decimal text-slate-800 font-poppins font-medium 2xl:text-lg">
                <li>Website Development</li>
                <li>Mobile Development</li>
                <li>Game Development</li>
                <li>Data Science</li>
                <li>AI and Machine Learning</li>
                <li>IoT Development</li>
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

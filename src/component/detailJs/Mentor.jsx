import iconProfile from "../../assets/profile.svg"

const Mentor = () => {
  return (
    <>
      <div className="container mx-auto flex lg:right-0">
        <div className="w-full h-48 bg-[#DBE1E9] mt-5  mr-3 outline outline-1 -outline-offset-1 outline-slate-500 rounded-md relative  lg:w-[22rem] lg:ml-3 2xl:w-[26rem] ">
            <h2 className="font-poppins text-lg text-start ml-3 mt-3 font-semibold text-slate-800">Mentor</h2>
            <div className="flex ">
                <div className="flex-row">
                <img src={iconProfile} alt="profile"className=" absolute w-10 ml-4 top-[4rem] bg " />
                <h1 className="text-lg font-poppins font-medium absolute right-36 mt-6 translate-x-1/2
                  w-full lg:right-28"> Muhammad Syahrul Maulana</h1>
                  </div>
                  <div className="flex-row">
                <img src={iconProfile} alt="profile"className=" absolute w-10 ml-4 top-32 bg " />
                <h1 className="text-lg font-poppins font-medium absolute right-36 bottom-8 translate-x-1/2
                  w-full lg:right-28"> Admuham Isthakradhei</h1>
                  </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Mentor;

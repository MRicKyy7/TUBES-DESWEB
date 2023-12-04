import iconDetail from '../../assets/detail.svg'

const Detail = () => {
  return (
    <>
    <div className="container mx-auto flex ">
      <div className="w-full h-32 bg-[#DBE1E9] mt-9  mr-3 outline outline-1 -outline-offset-1 outline-slate-500 rounded-md relative  lg:w-[22rem] lg:ml-3 2xl:w-[26rem] 4xl:ml-12">
        <div className=''>
<h2 className='font-poppins text-lg text-start ml-3 mt-3 font-semibold text-slate-800'>Detail Kelas</h2>
            <div className='relative bg-[#F8F9FB] rounded-s ml-2 mr-5'>
            <img src={iconDetail} alt="icon" className='ml-1 mt-3'/>
            <h2 className='text-lg font-poppins font-medium absolute top-4 left-[75px] '>19 Materi</h2>
            </div>
            </div>
      </div>
    </div>
    </>
  );
};

export default Detail;

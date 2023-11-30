import JS from '../../assets/Javascript.svg'

const Header = () => {
  return (
    <div className='container'>
        <div className="flex-auto">
            <div className="w-screen h-48 bg-[#DBE1E9] shadow-md shadow-slate-800 ">
            <div className="w-44 h-16 bg-slate-300 top-10 ml-6 relative">
                <a href="" className="font-poppins font-semibold text-[#0A2A55] absolute translate-x-1/2 right-1/2 text-2xl top-4">Javascript</a>
            </div>
            <div className="relative
            ">
              <div className='w-48 bg-[#F7DE1F] h-40 right-16 absolute -top-12' >
              </div>
              <img src={JS} alt="Javascript" className="w-32 absolute right-0 mr-24 -top-9" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Header
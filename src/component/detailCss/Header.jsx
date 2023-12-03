  import Css from '../../assets/css.svg'

  const Header = () => {
    return (
              <div className="w-full h-48 bg-[#DBE1E9] shadow-md shadow-slate-800 ">
              <div className="w-44 h-16 bg-slate-300 top-10 ml-6 relative">
                  <a href="" className="font-poppins font-semibold text-[#0A2A55] absolute translate-x-1/2 right-1/2 text-2xl top-4">CSS</a>
              </div>
              <div className="relative
              ">
                <div className='w-48 bg-[#30ACE0] h-40 right-16 absolute -top-12' >
                </div>
                <img src={Css} alt="Javascript" className="w-32 absolute right-0 mr-24 -top-9" />
              </div>
              </div>
    )
  }

  export default Header
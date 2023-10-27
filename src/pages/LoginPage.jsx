import wave from "../assets/Vector.svg";

// const Login = () => {
//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-md w-full space-y-8">
//                 <div>
//                     <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//                         Masuk ke Akun
//                     </h2>
//                 </div>
//                 <form className="mt-8 space-y-6" action="#" method="POST">
//                     <input type="hidden" name="remember" defaultValue="true" />
//                     <div className="rounded-md shadow-sm -space-y-px">
//                         <div>
//                             <label htmlFor="email-address" className="sr-only">
//                                 Alamat Email
//                             </label>
//                             <input
//                                 id="email-address"
//                                 name="email"
//                                 type="email"
//                                 autoComplete="email"
//                                 required
//                                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                                 placeholder="Alamat Email"
//                             />
//                         </div>
//                         <div>
//                             <label htmlFor="password" className="sr-only">
//                                 Password
//                             </label>
//                             <input
//                                 id="password"
//                                 name="password"
//                                 type="password"
//                                 autoComplete="current-password"
//                                 required
//                                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                                 placeholder="Password"
//                             />
//                         </div>
//                     </div>
//                     <div className="flex items-center justify-between">
//                         <div className="flex items-center">
//                             <input
//                                 id="remember-me"
//                                 name="remember-me"
//                                 type="checkbox"
//                                 className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//                             />
//                             <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
//                                 Ingat Saya
//                             </label>
//                         </div>
//                         <div className="text-sm">
//                             <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
//                                 Lupa Password?
//                             </a>
//                         </div>
//                     </div>
//                     <div>
//                         <button
//                             type="submit"
//                             className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                         >
//                             Masuk
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Login;

const LoginPage = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-b from-[#B4C0D1] to-[#092850] z-10">
      <div className="absolute inset-0 overflow-hidden">
        <img src={wave} alt="Wave" className="absolute bottom-0 left-0 right-0 w-full " />
      </div>
      <div className=" bg-[#fff] p-4 md:p-8 rounded shadow-md md:w-96 w-auto text-center">
        <h2 className=" md:text-2xl text-base mb-4 font-poppins font-bold ">Masuk Ke Akun</h2>
        <form>
          <div className="mb-4 ">
            <label htmlFor="email" className="block text-black py-8 text-left font-poppins -mb-5">
              Alamat Email <span className="text-red-500">*</span>
            </label>
            <input type="email" id="email" className="w-full border rounded border-slate-800 py-1.5 px-3" />
          </div>
          <div className="mb-4 ">
            <label htmlFor="password" className="block text-black py-8 font-poppins text-left -mb-4">
              Password <span className="text-red-600"> * </span>
            </label>
            <input type="password" id="password" className="w-full border rounded border-slate-800 py-1.5 px-3" />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label htmlFor="remember" className="text-gray-600 lg:text-lg sm:text-sm mr-4">
              <input type="checkbox" id="remember" className="mr-1 font-poppins font-light " />
              Ingat Saya
            </label>
            <a href="/lupa-password" className="text-black font-light font-poppins">
              Lupa Password?
            </a>
          </div>
          <button type="submit" className="bg-slate-800 hover:bg-blue-600 text-white py-3 px-4 rounded w-full font-poppins font-bold mb-2">
            Masuk
          </button>
          <button className="bg-white hover:bg- hover:text-primary text-primary py-2 px-4 border rounded border-[#051830] w-full font-poppins font-bold">
            <a href=""> Daftar </a>
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

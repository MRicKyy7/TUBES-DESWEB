import { FaSquareGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <section className="bg-white flex flex-col mt-20">
        <div id="Contact" />
        <div className="bg-white self-stretch flex h-28 w-full flex-col max-md:max-w-full" />
        <h2 className="justify-center text-black text-2xl leading-7 max-w-[369px] mr-72 mt-16 md:mt-16 self-end sm:mt-[290px] sm:left-5 max-md:mr-2.5 max-md:mt-10 absolute md:left-[540px] md:-mr-1 mx-auto lg:left-[800px] xl:left-[1000px] 2xl:left-[1300px] 4xl:left-[1350px] 5xl:left-[1790px]">
          Connect With Us
        </h2>
        <div className="self-center w-full max-w-6xl px-5 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[21%] max-md:w-full max-md:ml-0">
              <nav className="justify-center text-black text-2xl font-semibold leading-7 max-w-[292px] max-md:mt-10 overflow-y-auto">
                <ul className="overflow-hidden">
                  <li>
                    <a href="/landing#Home">Home</a>
                  </li>
                  <li>
                    <a href="/detail">Course</a>
                  </li>
                  <li>
                    <a href="/landing#Contact">Contact</a>
                  </li>
                  <li>
                    <a href="/landing#About">About</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex flex-col items-stretch w-[79%] ml-5 max-md:w-full max-md:ml-0">
              <div className="max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[73%] max-md:w-full max-md:ml-0">
                    <address className="justify-center text-black text-2xl leading-7 max-w-[445px] max-md:mt-10">
                      Jl. Sei Wain, Karang Joang, Kec. Balikpapan Utara, Kota
                      Balikpapan, Kalimantan Timur 76127
                      <br />
                      <a href="mailto:company@gmail.com">company@gmail.com</a>
                      <br />
                      <a href="tel:085272222222">0852-7222-2222</a>
                    </address>
                  </div>
                  <div className="flex flex-col items-stretch w-[10%] ml-5 max-md:w-full max-md:ml-0">
                    <a
                      href="https://www.instagram.com/itk_official/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ee2968c-1616-4b3e-8de8-eeffb7718b88?apiKey=23fb824677004c86b8742e2f02c99782&"
                        className="aspect-square object-contain object-center w-[61px] overflow-hidden max-w-full my-auto max-md:mt-10"
                        alt="Logo 1"
                      />
                    </a>
                  </div>

                  <div className="flex flex-col items-stretch w-[9%] ml-5 max-md:w-full max-md:ml-0">
                    <a
                      href="https://github.com/MRicKyy7/TUBES-DESWEB.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSquareGithub className="w-16 h-16" />
                    </a>
                  </div>
                  <div className="flex flex-col items-stretch w-[9%] ml-5 max-md:w-full max-md:ml-0">
                    <a
                      href="https://mail.google.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dd20a9c0-8374-4194-906a-8d6d79db5096?apiKey=23fb824677004c86b8742e2f02c99782&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd20a9c0-8374-4194-906a-8d6d79db5096?apiKey=23fb824677004c86b8742e2f02c99782&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd20a9c0-8374-4194-906a-8d6d79db5096?apiKey=23fb824677004c86b8742e2f02c99782&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd20a9c0-8374-4194-906a-8d6d79db5096?apiKey=23fb824677004c86b8742e2f02c99782&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd20a9c0-8374-4194-906a-8d6d79db5096?apiKey=23fb824677004c86b8742e2f02c99782&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd20a9c0-8374-4194-906a-8d6d79db5096?apiKey=23fb824677004c86b8742e2f02c99782&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd20a9c0-8374-4194-906a-8d6d79db5096?apiKey=23fb824677004c86b8742e2f02c99782&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd20a9c0-8374-4194-906a-8d6d79db5096?apiKey=23fb824677004c86b8742e2f02c99782&"
                        className="aspect-[1.27] object-contain object-center w-[61px] overflow-hidden max-w-full my-auto max-md:mt-10"
                        alt="Logo 3"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-gray-400 self-stretch flex w-full flex-col mt-24 px-20 py-2 max-md:max-w-full max-md:mt-10 max-md:px-5">
          <p className="text-white lg:text-2xl text-lg leading-7 self-center whitespace-nowrap max-md:max-w-full">
            Copyright © 2023 Kelompok-6-Desain-Website.{" "}
            <a
              href="https://itk.ac.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 "
            >
              ITK.
            </a>
            All Rights Reserved
          </p>
        </footer>
      </section>
    </>
  );
};

export default Footer;

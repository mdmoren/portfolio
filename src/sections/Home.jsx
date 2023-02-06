import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="
    h-screen w-100 flex justify-center 
    items-center bg-blue-sea bg-fixed "
    >
      <div
        className="
        flex flex-col md:flex-row
        w-full sm:w-4/5 h-full sm:h-4/5 justify-center items-center
        transition-all duration-500 sm:mt-40 sm:mb-20
        bg-[#00000080] sm:rounded-xl backdrop-blur-lg
        "
      >
        {/* BOX 1 */}
        <div
          className="
            flex flex-col w-full h-full justify-center 
            items-center sm:items-start p-10 md:pl-20 lg:pl-40
            transition-all duration-500"
        >
          <div
            className="
                flex flex-row sm:flex-col 
                justify-center items-end sm:items-start 
                pb-5"
          >
            <h1
              className="
                  text-3xl font-labelle
                  hidden sm:flex
                  transition-all duration-500 shine pb-2"
            >
              Hello, my name is
            </h1>

            <h1
              className="
                  text-4xl sm:text-6xl md:text-8xl font-bold text-[#eee]
                  font-public-sans pr-0 sm:pr-10
                  transition-all duration-500"
            >
              Mark Moreno
              <div className="flex flex-1 h-[6px] bg-[#2980b9] rounded-sm"></div>
            </h1>
          </div>

          <div>
            <p
              className="
                  text-center sm:text-start text-md 
                  sm:text-lg text-[#ccc] font-public-sans
                  p-2 mr-0 md:mr-10"
            >
              I am a<span className="font-bold"> Software Engineer</span>,
              passionate for all things technology and design.
            </p>
          </div>

          <div className="pt-5 flex flex-row">
            <a
              href="/MarkMoreno.pdf"
              download={true}
              className="
              group flex justify-center items-center
              text-[#aaa] hover:text-[#ddd] text-md rounded-md
              bg-[#00000080] hover:bg-[#000] font-public-sans tracking-wider
              py-2 px-4 mr-2 transition-all duration-500 
              cursor-pointer"
            >
              Resume
              <AiOutlineDownload
                className="
                      group-hover:scale-125 ml-2 group-hover:text-[#2980b9]
                      transition-all duration-300"
                size={20}
              />
            </a>

            <Link
              to="about"
              smooth
              duration={500}
              className="
              group flex justify-center items-center
              text-[#aaa] hover:text-[#ddd] text-md rounded-md
              bg-[#00000080] hover:bg-[#000] font-public-sans tracking-wider
              py-2 px-4 mr-2 transition-all duration-500 
              cursor-pointer"
            >
              Learn More
              <HiOutlineArrowNarrowRight
                className="
                    ml-2 group-hover:rotate-90 group-hover:text-[#2980b9]
                    transition-all duration-300"
                size={20}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

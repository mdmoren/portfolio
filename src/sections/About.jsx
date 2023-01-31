import React from "react";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useState } from "react";
import EmailPopup from "../components/EmailPopup";
import { Link } from "react-scroll";

const About = () => {
  const [openEmail, setOpenEmail] = useState(false);

  function myFunc() {
    setOpenEmail(true);
  }

  return (
    <div>
      <div
        name="about"
        className="h-screen w-100 flex justify-center items-center
      bg-red-forest bg-fixed"
      >
        <div
          className="
          flex flex-col md:flex-row
          w-full sm:w-4/5 h-full sm:h-4/5 justify-center items-center
          transition-all duration-500 sm:mt-40 sm:mb-20
          bg-[#00000080] backdrop-blur-lg sm:rounded-xl
          "
        >
          <div
            className="
            flex flex-col w-full h-full justify-center items-center
            transition-all duration-500 p-10
            "
          >
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#eee]">
                About Me
                <div className="flex flex-1 h-[4px] bg-[#c0392b] rounded-sm mb-5"></div>
              </h1>
            </div>
            <div className="bg-[#00000080] sm:bg-transparent rounded-lg text-[#eee]">
              <p className="p-4 text-md sm:text-xl md:text-2xl sm:font-bold  max-w-xl text-center ">
                Hello, my name is Mark Moreno and I am a Software Engineer. I am
                a creative and driven individual who is always looking for new
                challenges and opportunities to learn and grow. I am excited to
                share my work and experience with you through my portfolio.
                Thank you for visiting!
              </p>
              <Link
                to="experience"
                smooth
                duration={500}
                className="
                    group flex w-60 mx-auto justify-between items-center my-4 px-3
                    bg-[#00000080] hover:bg-[#000] rounded-lg h-10
                    text-[#aaa] hover:text-[#ddd]"
              >
                Check out my work
                <HiOutlineArrowNarrowRight
                  className="
                    ml-2 group-hover:rotate-90 group-hover:text-[#c0392b]
                    transition-all duration-300"
                  size={20}
                />
              </Link>
            </div>
            <div className="flex w-fit mx-auto justify-center mt-5 text-[#eee] rounded-2xl">
              <AiOutlineMail
                onClick={() => myFunc()}
                className="mx-10 hover:text-[#c0392b]"
                size={30}
              />
              <a
                href="https://www.linkedin.com/in/markmoreno34/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin
                  className="mx-10 hover:text-[#c0392b]"
                  size={30}
                />
              </a>
              <a
                href="https://github.com/mdmoren"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub
                  className="mx-10 hover:text-[#c0392b]"
                  size={30}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/*email popup here  */}
      <EmailPopup open={openEmail} onClose={() => setOpenEmail(false)} />
    </div>
  );
};

export default About;

import React from "react";
import {
  TbBrandJavascript,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandReactNative,
  TbBrandPython,
} from "react-icons/tb";
import { SiPostgresql, SiTailwindcss } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { BiExpand } from "react-icons/bi";
import ProjectPopup from "../components/ProjectPopup";
import { useState } from "react";
import { ProjectData } from "../components/ProjectData";

const Skills = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [projectId, setProjectId] = useState(0);

  const iconStyle =
    "flex-shrink-0 text-[#ccc] group-hover:text-[#eee] text-xl sm:text-3xl mx-5";

  function openSetId(id) {
    setOpenPopup(true);
    setProjectId(id);
  }

  const skills = [
    {
      id: 1,
      title: "Javascript",
      src: <TbBrandJavascript className={iconStyle} />,
    },
    {
      id: 2,
      title: "HTML",
      src: <TbBrandHtml5 className={iconStyle} />,
    },
    {
      id: 3,
      title: "CSS",
      src: <TbBrandCss3 className={iconStyle} />,
    },
    {
      id: 4,
      title: "React",
      src: <TbBrandReactNative className={iconStyle} />,
    },
    {
      id: 5,
      title: "Python",
      src: <TbBrandPython className={iconStyle} />,
    },
    {
      id: 6,
      title: "PostgreSQL",
      src: <SiPostgresql className={iconStyle} />,
    },
    {
      id: 7,
      title: "Git",
      src: <FaGitAlt className={iconStyle} />,
    },
    {
      id: 8,
      title: "Tailwind",
      src: <SiTailwindcss className={iconStyle} />,
    },
  ];

  // function test(x) {
  //   pathname = "srcpicturesprojectg";
  //   result = pathname.concat(x);
  //   console.log(result);
  //   return result;
  // }

  return (
    <div>
      <div
        name="experience"
        className="
            h-full md:h-screen w-100 flex justify-center items-center
            bg-yellow-sim bg-fixed"
      >
        <div
          className="
            flex flex-col md:flex-row
            w-full sm:w-4/5 h-full sm:h-4/5 justify-center items-stretch
            transition-all duration-500 sm:mt-40 sm:mb-20
            bg-[#00000080] sm:rounded-xl backdrop-blur-lg
            "
        >
          <div
            className="
            flex flex-col w-full h-full justify-between
            transition-all duration-500  p-10
            "
          >
            <div className="w-full h-full items-center">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl sm:text-3xl font-bold text-[#eee] mb-5 font-public-sans">
                  Projects
                  <div className="flex flex-1 h-[4px] bg-[#f1c40f] rounded-sm mt-1"></div>
                </h1>
              </div>

              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
                {ProjectData.map((item, index) => (
                  <div
                    onClick={() => openSetId(item.id)}
                    key={item.id}
                    className={`
                        group flex flex-col justify-between items-center rounded-md
                        shadow-sm shadow-[#555] bg-[#ffffffb2] hover:bg-[#ffffffc5] p-2 ${item.style}`}
                  >
                    <div className="w-full relative">
                      <img
                        src={item.picture}
                        alt="..."
                        className="
                            relative pb-5 w-full h-40 sm:h-60 md:h-80 object-center object-cover
                            group-hover:pb-0  
                            transition-all duration-500"
                      />
                      <div
                        className="
                            absolute w-full h-40 sm:h-60 md:h-80 bottom-0
                            pb-5 group-hover:pb-0 
                            transition-all duration-500"
                      >
                        <div
                          className="
                            flex w-full h-full items-center justify-center
                            bg-[#00000080] group-hover:bg-transparent
                            transition-all duration-300 
                            text-xl font-public-sans font-bold text-[#aaa]
                            group-hover:text-[#eee] group-hover:text-2xl"
                        >
                          <p className="p-2 rounded-md group-hover:bg-[#00000080]">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="
                    flex w-full justify-between items-center 
                    text-[#aaa] group-hover:text-[#555] text-2xl
                    transition-all duration-500 p-2"
                    >
                      <h1
                        className="
                        text-xs group-hover:text-sm text-transparent group-hover:text-[#555]
                        transition-all duration-500"
                      >
                        Click to expand
                      </h1>
                      <BiExpand />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col w-full h-full items-start justify-end mt-5 md:mt-0">
              <div className="flex justify-start items-center">
                <h1 className="text-xl sm:text-2xl font-bold text-[#eee] my-5 font-public-sans">
                  Skills
                  <div className="flex flex-1 h-[4px] bg-[#f1c40f] rounded-sm mt-1"></div>
                </h1>
              </div>

              <div
                className="
                w-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 
                text-center bg-[#000000a9] pt-4 pb-2 rounded-lg"
              >
                {skills.map(({ id, title, src }) => (
                  <div
                    key={id}
                    className="
                    flex flex-row justify-start items-center sm:py-2
                    sm:h-3/4 group "
                  >
                    {src}
                    <p className="font-public-sans text-sm sm:text-lg text-[#ccc] hover:text-[#eee]">
                      {title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProjectPopup
        open={openPopup}
        onClose={() => setOpenPopup(false)}
        id={projectId}
      />
    </div>
  );
};

export default Skills;

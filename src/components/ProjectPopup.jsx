import React from "react";
import { ProjectData } from "./ProjectData";
import { FaTimes } from "react-icons/fa";

const ProjectPopup = ({ open, onClose, id }) => {
  if (!open) return null;

  return (
    <div
      className="
        fixed z-20 top-0 left-0 right-0 font-public-sans
        flex w-full h-full justify-center items-center
        bg-[#00000090] text-[#ccc] backdrop-blur-lg
        "
    >
      <div
        className="
            w-full xs:w-4/5 sm:w-3/5 h-fit bg-[#55555580] p-5 xs:rounded-xl
            "
      >
        <div className="flex justify-between pb-5">
          <div className="font-bold text-xl">
            {ProjectData.at(id - 1).title}
          </div>

          <FaTimes
            onClick={onClose}
            className="text-[#ccc] hover:text-[#c0392b]"
            size={25}
          />
        </div>

        <div className="flex flex-col md:flex-row w-full h-full sm:justify-between items-stretch">
          <div className="flex flex-col w-full h-100 justify-between items-center bg-[#ffffff83] p-5 rounded-lg">
            <div className="w-full flex justify-center">
              <img
                src={ProjectData.at(id - 1).picture}
                alt=""
                className="
                          shadow-md shadow-black  h-80 w-full object-cover mb-4"
              />
            </div>

            <div className="w-full flex flex-row justify-center">
              <div className="mr-1 w-full bg-[#333] hover:bg-[#555] flex justify-center items-center text-md text-[#777] hover:text-[#ddd] transition-all duration-300 cursor-pointer rounded-md">
                <a
                  href={ProjectData.at(id - 1).liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-center"
                >
                  View Live
                </a>
              </div>
              <div className="ml-1 w-full bg-[#333] hover:bg-[#555] flex justify-center items-center text-md text-[#777] hover:text-[#ddd] transition-all duration-300 cursor-pointer rounded-md">
                <a
                  href={ProjectData.at(id - 1).codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-center"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>

          <div className="mt-5 md:mt-0 md:ml-5 flex flex-col w-full h-100 bg-[#00000080] p-5 text-[#ccc] rounded-lg">
            <div className="pb-5 text-md sm:text-lg">
              {ProjectData.at(id - 1).description}
            </div>

            <div className=" flex-col w-full h-full justify-end items-start pl-5">
              {ProjectData.at(id - 1).stack.length > 0 ? (
                <h1 className="underline mb-2">Created With:</h1>
              ) : (
                ""
              )}

              <ul className="list-disc">
                {ProjectData.at(id - 1).stack.map((i, index) => (
                  <li key={index} className="">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPopup;

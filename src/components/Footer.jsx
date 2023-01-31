import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="flex justify-center items-center h-20 bg-[#000] w-full">
      <Link
        to="home"
        smooth
        duration={500}
        className="
        group flex justify-center items-center
        text-[#aaa] hover:text-[#ddd] text-md rounded-md
        bg-[#000] hover:bg-[#111] font-public-sans tracking-wider
        py-2 px-4 mr-2 transition-all duration-500 
        cursor-pointer"
      >
        Back to top
        <HiOutlineArrowNarrowRight
          className="
            ml-2 group-hover:-rotate-90 group-hover:text-[#2980b9]
            transition-all duration-300"
          size={20}
        />
      </Link>
    </div>
  );
};

export default Footer;

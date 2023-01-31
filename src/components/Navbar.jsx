import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const baseStyleX = "ml-10 text-md smd:text-xl";
  const baseStyleY = "my-5 text-xl";

  const links = [
    {
      id: 1,
      title: "Home",
      link: "home",
      style: `
        cursor-pointer capitalize font-medium font-public-sans
         duration-200 link-underline
        text-[#999] hover:text-[#2980b9]`,
    },
    {
      id: 2,
      title: "About",
      link: "about",
      style: `
        cursor-pointer capitalize font-medium font-public-sans
         duration-200 link-underline
        text-[#999] hover:text-[#c0392b]`,
    },
    {
      id: 3,
      title: "Work",
      link: "experience",
      style: `
        cursor-pointer capitalize font-medium font-public-sans
         duration-200 link-underline
        text-[#999] hover:text-[#f1c40f]`,
    },
    //   {
    //     id: 4,
    //     link: 'contact',
    //     style: `
    //     cursor-pointer capitalize font-medium font-public-sans
    //     hover:scale-110 duration-200 link-underline
    //     text-[#999] hover:text-[#e67e22]`,
    //   },
  ];

  return (
    <div
      className={`${
        nav
          ? "bg-[#000]"
          : "bg-gradient-to-b from-[#000] to-[#00000093] shadow-sm shadow-black backdrop-blur-lg"
      }
        flex justify-between items-center 
        w-full h-10 md:h-20  fixed z-10
        transition-all duration-200`}
    >
      <div
        className="
            flex flex-1 pl-[40px]
            justify-center sm:justify-start
            pt-3
            transition-all duration-500"
      >
        <h1
          className="
                text-2xl md:text-5xl font-labelle
                cursor-pointer text-[#ddd]
                transition-all duration-500"
        >
          Mm.
        </h1>
      </div>

      <ul className="mr-10 hidden sm:flex">
        {links.map(({ id, link, style, title }) => (
          <li key={id} className={[baseStyleX, style].join(" ")}>
            <Link to={link} smooth duration={500}>
              {title}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="
             cursor-pointer mr-5
            hover:scale-110 duration-200  
            text-[#999] sm:hidden"
      >
        {nav ? (
          <FaTimes className="hover:text-[#e74c3c]" size={25} />
        ) : (
          <FaBars className="hover:text-[#eee]" size={25} />
        )}
      </div>

      <ul
        className={`${
          nav
            ? "backdrop-blur-lg w-full"
            : "hidden opacity-0 backdrop-blur-none w-0"
        } h-screen absolute top-10 md:top-20 sm:hidden transition-all duration-300`}
      >
        <div
          className="
                flex flex-col m-5 p-10
                justify-center items-start
                bg-[#000000dc] shadow-md shadow-[#000] "
        >
          {links.map(({ id, link, style, title }) => (
            <li key={id} className={[baseStyleY, style].join(" ")}>
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;

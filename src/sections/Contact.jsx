import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="h-screen w-100 flex justify-center items-stretch pt-20 "
    >
      <div
        className="
          flex flex-col md:flex-row
          w-full justify-center items-center
          transition-all duration-500
          px-0 sm:px-10 smd:px-20 md:px-40 xl:px-96
          py-0 sm:py-5 smd:py-10 md:py-20 xl:py-48 bg-[#222]
          "
      >
        <div
          className="
            flex flex-col w-full h-full justify-center items-center
            transition-all duration-500 p-10"
        >
          <div>
            <h1 className="text-4xl font-bold text-[#aaa]">
              Contact me
              <div className="flex flex-1 h-[4px] bg-[#444] rounded-sm"></div>
            </h1>
          </div>
          <div>
            <p className="my-4 font-bold text-[#aaa]">
              Fill out this form if you want to learn more (:
            </p>
          </div>

          <div className="flex justify-center items-center w-2/3">
            <form action="" className="flex flex-col w-full">
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                className="
                  p-2 border-2 border-[#111] rounded-sm 
                  text-[#ccc] placeholder-[#111] 
                  placeholder:italic placeholder:text-lg 
                  focus:outline-none bg-[#555]"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter email"
                className="
                  my-4 p-2 border-2 border-[#111] rounded-sm 
                  text-[#ccc] placeholder-[#111] 
                  placeholder:italic placeholder:text-lg 
                  focus:outline-none bg-[#555]"
              />
              <textarea
                name="message"
                rows="10"
                placeholder="Enter message"
                className="
                  p-2 border-2 border-[#111] rounded-sm 
                  text-[#ccc] placeholder-[#111] placeholder:italic 
                  placeholder:text-lg focus:outline-none 
                  bg-[#555] resize-none"
              ></textarea>

              <button
                className="
                    text-[#ccc] bg-[#111] px-6 py-3 
                    my-8 mx-auto flex items-center rounded-md 
                    hover:scale-110 duration-300"
              >
                Lets chat!
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

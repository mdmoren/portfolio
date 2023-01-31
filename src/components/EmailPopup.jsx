import React from "react";
import { FaTimes } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

const EmailPopup = ({ open, onClose }) => {
  if (!open) return null;

  const email = "markmoreno34@gmail.com";

  function copyEmail() {
    navigator.clipboard.writeText(email);
    alert(email + " was copied!");
  }

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
        w-full sm:w-2/5 h-[200px] md:h-[150px] bg-[#55555580] p-5 sm:rounded-xl
        justify-center items center
        "
      >
        <div className="flex justify-between pb-5">
          <div className="font-bold text-xl">Email</div>

          <FaTimes
            onClick={onClose}
            className="text-[#ccc] hover:text-[#c0392b]"
            size={25}
          />
        </div>

        <div className="flex w-full flex-col md:flex-row mx-auto h-20 justify center items-center">
          <div
            onClick={copyEmail}
            className="
                flex justify-between items-center bg-[#00000080] hover:bg-[#000000] p-2 w-full 
                rounded-md text-[#666] hover:text-[#ccc]"
          >
            {email}
            <FiCopy />
          </div>

          <a
            href="mailto:markmoreno34@gmail.com"
            onClick={onClose}
            className="
                flex justify-between items-center bg-[#00000080] hover:bg-[#000000] p-2 w-full 
                rounded-md text-[#666] hover:text-[#ccc] mt-4 md:mt-0 md:ml-4"
          >
            Email now
            <AiOutlineMail />
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmailPopup;

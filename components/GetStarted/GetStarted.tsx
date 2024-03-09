import React from "react";
import { MdOutlineLink } from "react-icons/md";

const GetStarted = () => {
  return (
    <div className="pb-28">
      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="bg-[#fe4a22] p-4 rounded-2xl shadow-lg shadow-[#fe4a22]">
          <MdOutlineLink className="text-4xl  text-white font-bold -rotate-45" />
        </div>
        <p className="text-8xl">Get started</p>
        <div className="flex flex-col">
          <p>Turn information into advantage! Start using</p>
          <p> Ramos today. Sign up for a free trial.</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-[#f2f2f2] px-6 py-4 rounded-2xl">
            Request a demo
          </button>
          <button className="bg-[#fe4a22] px-6 py-4 rounded-2xl text-white">
            start for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;

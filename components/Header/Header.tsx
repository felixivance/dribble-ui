import React from "react";
import { MdOutlineLink } from "react-icons/md";

const Header = () => {
  return (
    <div className="bg-black m-2 rounded-2xl">
      <div className="flex justify-between items-center  text-white p-2">
        <div className="flex items-center ">
          <MdOutlineLink className="text-md font-bold -rotate-45" />
          <p>ramos</p>
        </div>
        <div className="flex space-x-6 bg-[#252525] py-2 px-6 rounded-lg">
          <p>Dashboard</p>
          <p>Reports</p>
          <p>Documents</p>
          <p>History</p>
          <p>Settings</p>
        </div>
        <div>
          <button className="bg-white text-black py-3 px-8 rounded-lg">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

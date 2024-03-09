import React from "react";
import { PiPulseBold } from "react-icons/pi";

const EfficiencySection = () => {
  return (
    <div className="p-16">
      <div className="text-9xl ">
        <p>
          Maximize <span className="text-gray-400">efficiency</span>{" "}
        </p>
        <p></p>
        <p>with our intuitive</p>
      </div>
      <div className="flex justify-between h-[150px] pt-8">
        {/* icons */}
        <div className="flex items-center relative pt-3">
          <div className="bg-[#f2f2f2] p-6 rounded-full h-[160px] w-[160px] flex items-center justify-center">
            <div className="bg-orange-500 rounded-md p-1">
              <PiPulseBold className="text-2xl text-white" />
            </div>
          </div>
          <div className="bg-[#ffd025] p-6 rounded-full h-[160px] w-[160px] flex flex-col items-center justify-center absolute left-32">
            <p className="text-2xl">45%</p>
            <p className="text-sm text-center">System grow faster</p>
          </div>
        </div>
        {/* spanning text */}
        <div className="bg-[#ffd025] flex items-center rounded-[40px] w-[650px] overflow-scroll text-9xl space-x-4 py-20 px-10 ">
          <p className="">Analytics </p>
          <p>server</p>
        </div>
      </div>
    </div>
  );
};

export default EfficiencySection;

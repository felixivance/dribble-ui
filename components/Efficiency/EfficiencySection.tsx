import React from "react";
import { PiPulseBold } from "react-icons/pi";

const EfficiencySection = () => {
  return (
    <div>
      <div className="text-8xl">
        <p>
          Maximize <span className="text-gray-400">efficiency</span>{" "}
        </p>
        <p></p>
        <p>with our intuitive</p>
      </div>
      <div className="flex justify-between">
        {/* icons */}
        <div className="flex">
          <div className="bg-[#ffd025] p-6 rounded-full">
            <div className="bg-orange-500 rounded-md p-1">
              <PiPulseBold className="text-2xl text-white" />
            </div>
          </div>
          <div className="bg-[#ffd025] p-6 rounded-full">
            <p>45%</p>
            <p>
              System grow <br />
              faster
            </p>
          </div>
        </div>
        {/* spanning text */}
        <div className="bg-[#ffd025]">
          <p>Analytics server</p>
        </div>
      </div>
    </div>
  );
};

export default EfficiencySection;

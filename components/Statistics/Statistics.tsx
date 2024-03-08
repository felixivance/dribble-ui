import Image from "next/image";
import React from "react";
import { BsStack } from "react-icons/bs";
import { FaArrowUpLong } from "react-icons/fa6";

const Statistics = () => {
  return (
    <div className="flex flex-col bg-[#f9f9f9] p-16 rounded-r-xl rounded-l-xl">
      <div className="flex justify-between">
        <p className="text-6xl">
          Your key to strategic <br /> success through analytics
        </p>
        <p className="text-2xl light">
          Ready for exciting, instantaneous, <br /> all accessible insights in
          real time?
        </p>
      </div>
      <div className="grid grid-cols-2 pt-12 gap-5">
        <div className="grid grid-cols-2 border rounded-2xl pt-14 bg-white shadow-md ">
          <div className="flex flex-col justify-between  pl-12 pr-12">
            <button className="bg-[#ffd025] shadow-md rounded-md w-44 px-4 py-2">
              Setting up reports
            </button>
            <div className="text-[#9f9f9f]">
              <p>Fast and easy access to analytics</p>
              <p>
                One platform is a comprehensive system of solutions that will be
                the first step towards digitization of your business
              </p>
            </div>
          </div>
          <div className="flex flex-col  rounded-2xl border-t border-l flex-1 p-3">
            <div className="px-4">
              <p>Sales and statistics</p>
            </div>
            <div className="grid grid-cols-2 space-x-4 px-4">
              <div className="flex items-center space-x-4 py-2">
                <div className="bg-[#fe4a22] p-4 rounded-full">
                  <BsStack className="text-white" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[#9f9f9f]">Total Profit</p>
                  <p className="text-2xl">
                    <span className="text-sm">$</span> 264,2K
                  </p>
                </div>
              </div>

              <div className="bg-[#f6f6f6] px-3 pt-4 rounded-md">
                <div>
                  <p>Visitors</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-0.5 dark:bg-gray-700">
                  <div
                    className="bg-[#48c784] h-0.5 rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                  <div className="flex pt-4">
                    <div>
                      <p className="text-2xl">56K</p>
                    </div>
                    <div>
                      <FaArrowUpLong className="text-[#48c784]" />
                    </div>
                    <div>
                      <p className="text-sm">14%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black text-white rounded-2xl">
          <div className="flex space-x-2">
            <div className="flex flex-col">
              <div className="flex items-center justify-center">
                <BsStack className="text-yellow-500" />
              </div>
              <div className="flex">
                <Image
                  src="https://source.unsplash.com/800x600/?profile-picture"
                  className="rounded-full"
                  alt="Laptop with bar graphs"
                  width={100}
                  height={100}
                />
                <Image
                  src="https://source.unsplash.com/800x600/?profile-picture"
                  alt="Laptop with bar graphs"
                  className="rounded-full"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <p>Transactions</p>
              <div className="flex  text-end justify-end">
                <div className="flex bg-green-600 p-2 rounded-full">
                  <FaArrowUpLong className="text-white" />
                </div>
                <p className="text-green-600">+14%</p>
              </div>
              <div>
                <p>43K</p>
              </div>
            </div>
          </div>
          <div>
            <p>Widget Control</p>
            <p>
              Reports provide a comprehensive overview of important aspect of
              web analytics
            </p>
          </div>
        </div>
      </div>
      <div>
        <p>
          up to 45% increase your analytics efficiency by upto 45%. Unique
          <br />
          algorithms provide insights from data, reduce time for analysis and
          <br />
          save time for making important, informed decisions
          <br />
        </p>
      </div>
    </div>
  );
};

export default Statistics;

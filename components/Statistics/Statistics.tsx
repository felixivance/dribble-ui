"use client";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useEffect } from "react";
import { BsStack } from "react-icons/bs";
import { FaArrowUpLong } from "react-icons/fa6";

const Statistics = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  useEffect(() => {
    const animation = animate(count, 43, {
      duration: 2,
    });

    return animation.stop;
  }, [count]);

  return (
    <motion.div
      className="flex flex-col bg-[#f9f9f9] p-16 rounded-3xl"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex justify-between">
        <p className="text-6xl">
          Your key to strategic <br /> success through analytics
        </p>
        <p className="text-2xl light">
          Ready for exciting, instantaneous, <br /> all accessible insights in
          real time?
        </p>
      </div>
      <div className="grid grid-cols-3 pt-12 gap-5">
        <div className="col-span-2 grid grid-cols-2 border rounded-2xl pt-14 pb-14 bg-white shadow-md ">
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

              <div className="bg-[#f6f6f6] px-3 pt-4 rounded-md ">
                <div>
                  <p>Visitors</p>
                </div>
                <div className="w-full rounded-full  dark:bg-gray-700">
                  <div
                    className="bg-[#48c784] h-0.5 rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                  <div className="flex pt-4 ">
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
        <div className="flex flex-col bg-black text-white rounded-2xl px-16">
          <div className="grid grid-cols-2 gap-2 p-6">
            <div className="flex flex-col pt-4 space-y-4 items-center border border-gray-500 rounded-2xl ">
              <div className="flex items-center justify-center">
                <BsStack className="text-yellow-500 text-4xl" />
              </div>
              <div className="flex relative  bg-red-600 w-full">
                <Image
                  src="https://source.unsplash.com/400x400/?african-man-smiling-face"
                  className="rounded-full absolute left-16"
                  alt="Laptop with bar graphs"
                  width={40}
                  height={40}
                />
                <Image
                  src="https://source.unsplash.com/400x400/?african-woman-smiling-face"
                  alt="Laptop with bar graphs"
                  className="rounded-full absolute left-24"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <div className="flex flex-col pt-4 space-y-4 items-center border border-gray-500 rounded-2xl">
              <div>
                <p>Transactions</p>
              </div>
              <div className="flex justify-end text-end pl-12">
                <div className="flex bg-green-600 p-1 rounded-full">
                  <FaArrowUpLong className="text-white text-xs" />
                </div>
                <div>
                  <p className="text-green-600 text-xs">+14%</p>
                </div>
              </div>
              <div>
                <motion.h1 className="text-4xl">43K</motion.h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center pb-8  ">
            <div className="text-center">
              <p className="text-2xl">Widget Control</p>
            </div>
            <div className="">
              <p className="text-gray-400 text-center px-6">
                Reports provide a comprehensive overview of important aspect of
                web analytics
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center pt-8 px-96 w-full">
        {/* create 3 boxes */}
        <div className=" h-[150px]  flex items-end">
          <p className="text-lg">Upto</p>
        </div>
        <div className=" h-[150px] flex items-end">
          <p className="text-9xl">45%</p>
        </div>
        <div className=" h-[150px] flex-1 flex items-center text-lg">
          increase your analytics efficiency by upto 45%. Unique algorithms
          provide insights from data, reduce time for analysis and save time for
          making important, informed decisions
        </div>
      </div>
    </motion.div>
  );
};

export default Statistics;

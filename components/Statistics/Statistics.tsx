import Image from "next/image";
import React from "react";
import { BsStack } from "react-icons/bs";
import { FaArrowUpLong } from "react-icons/fa6";

const Statistics = () => {
  return (
    <div className="flex flex-col bg-gray-200">
      <div className="flex justify-between">
        <p>Your key to strategic success through analytics</p>
        <p>
          Ready for exciting, instantaneous, <br /> all accessible insights in
          real time?
        </p>
      </div>
      <div className="flex">
        <div className="flex border-2 rounded-md p-2 w-3/4">
          <div className="flex flex-col">
            <button>Setting up reports</button>
            <div>
              <p>Fast and easy access to analytics</p>
              <p>
                One platform is a comprehensive system of solutions that will be
                the first step towards digitization of your business
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <p>Sales and statistics</p>
            </div>
            <div className="flex space-x-4">
              <div className="flex">
                <div>
                  <BsStack />
                </div>
                <div>
                  <p>Total Profit</p>
                  <p>$ 264,2K</p>
                </div>
              </div>
              <div className="bg-gray-500">
                <p>Visitors</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black w-1/4 text-white">
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

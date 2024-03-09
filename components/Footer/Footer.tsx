import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pb-5 pt-8 px-16 ">
      <div className=" flex  items-center pb-7">
        <div className="w-1/2">
          <div className="space-x-16 text-gray-400 font-light">
            <a href="#" className="hover:underline ">
              About
            </a>
            <a href="#" className="hover:underline">
              Why Us
            </a>
            <a href="#" className="hover:underline">
              Platform
            </a>
            <a href="#" className="hover:underline">
              Pricing
            </a>
            <a href="#" className="hover:underline">
              Contacts
            </a>
          </div>
        </div>
        <div className="w-1/2 flex justify-end ml-7">
          <h1 className=" text-[70px] ">Hello@ramos.com</h1>
        </div>
      </div>
      <hr className="my-[0.5px] border-gray-400" />
      <div className="flex pt-7">
        <div className="w-1/2">
          <div className="flex">
            <div className="w-1/2">
              <h1 className="text-white font-bold">Warrensville Heights</h1>
              <p className="text-gray-400 font-light">
                14418 Vineyard Drive, NC
              </p>
              <p className="text-gray-400 font-light"> 144128 </p>
            </div>
            <div className="w-1/2">
              <h1 className="text-white font-bold">Saint Louis</h1>
              <p className="text-gray-400 font-light">1366 Pern Street</p>
              <p className="text-gray-400 font-light"> 63101 </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-end">
          <p className="text-white font-bold pb-7">LinkedIn</p>
          <p className="text-white font-bold pb-7">Instagram</p>
          <p className="text-white font-bold pb-7">Facebook</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="w-1/2">
          <p className="text-[100px]">Ramos®</p>
        </div>
        <div className="w-1/2 flex justify-between items-center">
          <p className="text-gray-400 font-light mr-4">Privacy Policy</p>
          <p className="text-gray-400 font-light mx-4">License Agreement</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/qr.png" alt="visa" style={{ width: "10%" }} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

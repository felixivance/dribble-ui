"use client";

import Image from "next/image";
import { ImPower } from "react-icons/im";
import { ImStatsDots } from "react-icons/im";
import { CgLoadbarSound } from "react-icons/cg";
import { IoPlayCircle } from "react-icons/io5";
import { motion } from "framer-motion";
import React from "react";

export default function Banner() {
  return (
    <div>
      <motion.div
        className="flex flex-col justify-between  bg-white p-20 space-y-3"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
      >
        <div className="flex w-full items-center justify-center">
          <div className="w-[40%]">
            <div className="flex justify-center">
              <div className="flex items-center relative pr-6">
                <div className="p-8 rounded-full bg-gray-200">
                  <ImPower className="text-[#fe4a22] text-4xl" />
                </div>
                <div className="bg-[#fe4a22] rounded-full p-8 absolute left-16">
                  <ImStatsDots className="text-white  text-4xl" />
                </div>
              </div>
              <div className="pl-16">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-8xl text-black"
                >
                  Analytics
                </motion.p>
              </div>
            </div>
            <div className="flex items-center text-8xl space-x-3 pt-4">
              <p>that</p>
              <p className="text-[#cccccc]">helps</p>
              <p>you</p>
            </div>
          </div>
          <div className="flex -pl-10 relative">
            <div>
              <IoPlayCircle className="absolute text-4xl -top-3 -left-3 text-[#fe4a22]" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              <Image
                src="https://source.unsplash.com/800x600/?computer"
                alt="analytics"
                className="rounded-md"
                width={300}
                height={200}
              />
            </motion.div>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <div>
            <p className="text-8xl">shape</p>
          </div>
          <div className="p-4 bg-[#ffd025] rounded-full mt-[10px]">
            <CgLoadbarSound className="text-black text-4xl" />
          </div>
          <div>
            <p className="text-8xl"> the future</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

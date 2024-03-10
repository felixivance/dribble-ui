"use client";
import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <motion.div
      className=" pt-16 pb-16  "
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 125,
        delay: 0.1,
        duration: 0.7,
      }}
    >
      <div className="flex justify-between items-center  border-t">
        <div className="pt-16 px-16 text-base">
          <div className=""></div>
          <p>
            Explore traffic sources, page behavior, conversions and more to gain
            deep insight
          </p>
          <p>
            with your audience. With us your business doesn&lsquo;t just adapt -
            it evolves.
          </p>
        </div>
        <div className="flex space-x-3 pr-16">
          <button className="bg-[#f2f2f2] rounded-lg px-6 py-4">
            Request a demo
          </button>
          <button className="bg-[#fe4a22] rounded-lg px-6 py-4 text-white">
            start for free
          </button>
        </div>
      </div>
      <div className="w-full pt-4">
        {/*  eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/sp.png" alt="img" />
      </div>
    </motion.div>
  );
};

export default CTA;

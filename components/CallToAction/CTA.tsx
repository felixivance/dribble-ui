import React from "react";

const CTA = () => {
  return (
    <div className=" p-16  ">
      <div className="flex justify-between items-center  border-t">
        <div className="pt-16 text-base">
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
        <div className="flex space-x-3">
          <button className="bg-[#f2f2f2] rounded-lg px-6 py-4">
            Request a demo
          </button>
          <button className="bg-[#fe4a22] rounded-lg px-6 py-4 text-white">
            start for free
          </button>
        </div>
      </div>
      <div className="">
        {/*  eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/sp.png" alt="img" />
      </div>
    </div>
  );
};

export default CTA;

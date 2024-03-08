import React from "react";

const CTA = () => {
  return (
    <div className="flex justify-between pb-6">
      <div>
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
        <button className="bg-[#f2f2f2]">Request a demo</button>
        <button className="bg-[#fe4a22]">start for free</button>
      </div>
    </div>
  );
};

export default CTA;

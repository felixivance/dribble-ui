import React from "react";

const DataSection = () => {
  return (
    <div className=" p-16">
      <div className="text-9xl ">
        <p>
          We give you full <br />{" "}
          <span className="text-gray-400">Control </span> over your data
        </p>
      </div>

      <div className="flex">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/data.png" alt="data" />
      </div>
    </div>
  );
};

export default DataSection;

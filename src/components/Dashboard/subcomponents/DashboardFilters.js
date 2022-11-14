import React from "react";

const DashboardFilters = () => {
  return (
    <div className="shadow rounded bg-[white] flex mt-8 items-center p-4">
      <ul className="flex justify-around w-full items-center">
        <li className="text-left cursor-pointer">
          <div className="text-[#737373]">Location</div>
          <div className="text-[#0077b6] font-bold">New York, USA</div>
        </li>
        <li className="">|</li>
        <li className="text-left cursor-pointer">
          <div className="text-[#737373]">When</div>
          <div className="text-[#0077b6] font-bold">New York, USA</div>
        </li>{" "}
        <li className="">|</li>
        <li className="text-left cursor-pointer">
          <div className="text-[#737373]">Price</div>
          <div className="text-[#0077b6] font-bold">New York, USA</div>
        </li>{" "}
        <li className="">|</li>
        <li className="text-left cursor-pointer">
          <div className="text-[#737373]">PropertyType</div>
          <div className="text-[#0077b6] font-bold">New York, USA</div>
        </li>{" "}
        <li className="">|</li>
        <li className="">
          <button className="rounded text-white px-3  py-2 bg-[#0077b6]">
            Search
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DashboardFilters;

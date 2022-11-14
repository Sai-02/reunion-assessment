import React from "react";
import DashboardContent from "./subcomponents/DashboardContent";
import DashboardFilters from "./subcomponents/DashboardFilters";

const Dashboard = () => {
  return (
    <div className="py-12 px-28 bg-[#edfafd] bg-[#f7f7f7] ">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold text-[#023e8a]">
          Search properties to rent{" "}
        </h1>
        <input
          type="text"
          className="border-2 border-[#023e8a] rounded-lg p-2 outline-none"
        />
      </div>
      <DashboardFilters />
      <DashboardContent />
    </div>
  );
};

export default Dashboard;

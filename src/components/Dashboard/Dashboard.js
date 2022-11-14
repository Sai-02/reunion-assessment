import React, { useEffect, useState } from "react";
import DashboardContent from "./subcomponents/DashboardContent";
import DashboardFilters from "./subcomponents/DashboardFilters";
import data from "./subcomponents/TestContent.json";
const Dashboard = () => {
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    console.log(data);
    setFilteredData(data.listing);
  }, []);
  return (
    <div className="py-12 px-28 bg-[#edfafd] bg-[#f7f7f7] ">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold text-[#023e8a]">
          Search properties to rent{" "}
        </h1>
        {/* Functionality not implemented */}
        {/* <input
          type="text"
          className="border-2 border-[#023e8a] rounded-lg p-2 outline-none"
        /> */}
      </div>
      <DashboardFilters
        data={data}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
      />
      <DashboardContent filteredData={filteredData} />
    </div>
  );
};

export default Dashboard;

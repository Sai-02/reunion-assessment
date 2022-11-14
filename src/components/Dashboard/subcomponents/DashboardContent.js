import React, { useEffect, useState } from "react";
import Card from "./Card";
const DashboardContent = ({ filteredData, setFilteredData }) => {
  return (
    <div className="mt-12 grid grid-cols-3 gap-8">
      {filteredData.map((item) => {
        return <Card item={item} />;
      })}
    </div>
  );
};

export default DashboardContent;

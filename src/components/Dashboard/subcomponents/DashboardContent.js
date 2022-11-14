import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import data from "./TestContent.json";
const DashboardContent = () => {
  const [list, setList] = useState([]);
  const fetchData = async () => {
    try {
      const data = await fetch("./TestContent.json");
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    console.log(data);
    setList(data.listing);
    // fetchData();
  }, []);
  return (
    <div className="mt-12 grid grid-cols-3 gap-8">
      {list.map((item) => {
        return <Card item={item} />;
      })}
    </div>
  );
};

export default DashboardContent;

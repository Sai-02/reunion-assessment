import React, { useState } from "react";
import BedroomMenu from "./FilterMenus/BedroomMenu";
import BathroomMenu from "./FilterMenus/BathroomMenu";
import PriceMenu from "./FilterMenus/PriceMenu";
import PropertyTypeMenu from "./FilterMenus/PropertyTypeMenu";
const DashboardFilters = ({ data, filteredData, setFilteredData }) => {
  const [bathroomMenuTarget, setbathroomMenuTarget] = useState(null);
  const [priceMenuTarget, setPriceMenuTarget] = useState(null);
  const [propertyTypeMenuTarget, setPropertyTypeMenuTarget] = useState(null);
  const [bedroomMenuTarget, setBedroomMenuTarget] = useState(null);
  const [bathroomFilter, setBathroomFilter] = useState({
    text: "All",
    val: 0,
  });
  const [priceFilter, setPriceFilter] = useState({
    text: "All",
    val: 0,
  });
  const [bedroomFilter, setBedroomFilter] = useState({
    text: "All",
    val: 0,
  });
  const [propertyTypeFilter, setPropertyTypeFilter] = useState("All");

  const handleClickLocationFilter = (event) => {
    setbathroomMenuTarget(event.currentTarget);
  };
  const handleClickPriceMenuFilter = (e) => {
    setPriceMenuTarget(e.currentTarget);
  };
  const handleClickPropertyTypeMenuFilter = (e) => {
    setPropertyTypeMenuTarget(e.currentTarget);
  };
  const handleClickBedroomMenuFilter = (e) => {
    setBedroomMenuTarget(e.currentTarget);
  };
  const handleCloseBathroomMenu = () => {
    setbathroomMenuTarget(null);
  };
  const handleClosePriceMenu = () => {
    setPriceMenuTarget(null);
  };
  const handleClosePropertyTypeMenu = () => {
    setPropertyTypeMenuTarget(null);
  };
  const handleCloseBedroomMenu = () => {
    setBedroomMenuTarget(null);
  };
  const doFilterData = () => {
    let rawData = data.listing;
    if (bathroomFilter.text !== "All") {
      rawData = rawData.filter(
        (data) => parseInt(data.num_bathrooms) === parseInt(bathroomFilter.val)
      );
    }
    if (bedroomFilter.text !== "All") {
      rawData = rawData.filter(
        (data) => parseInt(data.num_bedrooms) === bedroomFilter.val
      );
    }
    if (priceFilter.text !== "All") {
      rawData = rawData.filter(
        (data) =>
          parseInt(priceFilter.val) <= parseInt(data.rental_prices.per_month)
      );
    }
    if (propertyTypeFilter !== "All") {
      rawData = rawData.filter(
        (data) => data.property_type === propertyTypeFilter
      );
    }
    setFilteredData(rawData);
  };
  return (
    <div className="shadow rounded bg-[white] flex mt-8 items-center p-4">
      <BathroomMenu
        handleClose={handleCloseBathroomMenu}
        anchorEl={bathroomMenuTarget}
        open={Boolean(bathroomMenuTarget)}
        setBathroomFilter={setBathroomFilter}
      />
      <PriceMenu
        handleClose={handleClosePriceMenu}
        anchorEl={priceMenuTarget}
        open={Boolean(priceMenuTarget)}
        setPriceFilter={setPriceFilter}
      />
      <PropertyTypeMenu
        handleClose={handleClosePropertyTypeMenu}
        anchorEl={propertyTypeMenuTarget}
        open={Boolean(propertyTypeMenuTarget)}
        setPropertyTypeFilter={setPropertyTypeFilter}
      />
      <BedroomMenu
        handleClose={handleCloseBedroomMenu}
        anchorEl={bedroomMenuTarget}
        open={Boolean(bedroomMenuTarget)}
        setBedroomFilter={setBedroomFilter}
      />
      <ul className="flex justify-around w-full items-center">
        <li
          className="text-left cursor-pointer"
          onClick={handleClickLocationFilter}
        >
          <div className="text-[#737373]">Bathrooms</div>
          <div className="text-[#0077b6] font-bold">{bathroomFilter.text}</div>
        </li>
        <li className="">|</li>
        <li
          className="text-left cursor-pointer"
          onClick={handleClickBedroomMenuFilter}
        >
          <div className="text-[#737373]">Bedrooms</div>
          <div className="text-[#0077b6] font-bold">{bedroomFilter.text}</div>
        </li>{" "}
        <li className="">|</li>
        <li
          className="text-left cursor-pointer"
          onClick={handleClickPriceMenuFilter}
        >
          <div className="text-[#737373]">Price</div>
          <div className="text-[#0077b6] font-bold">{priceFilter.text}</div>
        </li>{" "}
        <li className="">|</li>
        <li
          className="text-left cursor-pointer"
          onClick={handleClickPropertyTypeMenuFilter}
        >
          <div className="text-[#737373]">PropertyType</div>
          <div className="text-[#0077b6] font-bold">{propertyTypeFilter}</div>
        </li>{" "}
        <li className="">|</li>
        <li className="">
          <button
            className="rounded text-white px-3  py-2 bg-[#0077b6]"
            onClick={doFilterData}
          >
            Search
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DashboardFilters;

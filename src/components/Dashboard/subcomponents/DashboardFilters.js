import React, { useState } from "react";
import BedroomMenu from "./FilterMenus/BedroomMenu";
import LocationMenu from "./FilterMenus/LocationMenu";
import PriceMenu from "./FilterMenus/PriceMenu";
import PropertyTypeMenu from "./FilterMenus/PropertyTypeMenu";
const DashboardFilters = () => {
  const [locationMenuTarget, setLocationMenuTarget] = useState(null);
  const [priceMenuTarget, setPriceMenuTarget] = useState(null);
  const [propertyTypeMenuTarget, setPropertyTypeMenuTarget] = useState(null);
  const [bedroomMenuTarget, setBedroomMenuTarget] = useState(null);

  const handleClickLocationFilter = (event) => {
    setLocationMenuTarget(event.currentTarget);
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
  const handleCloseLocationMenu = () => {
    setLocationMenuTarget(null);
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
  return (
    <div className="shadow rounded bg-[white] flex mt-8 items-center p-4">
      <LocationMenu
        handleClose={handleCloseLocationMenu}
        anchorEl={locationMenuTarget}
        open={Boolean(locationMenuTarget)}
      />
      <PriceMenu
        handleClose={handleClosePriceMenu}
        anchorEl={priceMenuTarget}
        open={Boolean(priceMenuTarget)}
      />
      <PropertyTypeMenu
        handleClose={handleClosePropertyTypeMenu}
        anchorEl={propertyTypeMenuTarget}
        open={Boolean(propertyTypeMenuTarget)}
      />
      <BedroomMenu
        handleClose={handleCloseBedroomMenu}
        anchorEl={bedroomMenuTarget}
        open={Boolean(bedroomMenuTarget)}
      />
      <ul className="flex justify-around w-full items-center">
        <li
          className="text-left cursor-pointer"
          onClick={handleClickLocationFilter}
        >
          <div className="text-[#737373]">Location</div>
          <div className="text-[#0077b6] font-bold">New York, USA</div>
        </li>
        <li className="">|</li>
        <li
          className="text-left cursor-pointer"
          onClick={handleClickBedroomMenuFilter}
        >
          <div className="text-[#737373]">Bedrooms</div>
          <div className="text-[#0077b6] font-bold">All</div>
        </li>{" "}
        <li className="">|</li>
        <li
          className="text-left cursor-pointer"
          onClick={handleClickPriceMenuFilter}
        >
          <div className="text-[#737373]">Price</div>
          <div className="text-[#0077b6] font-bold">New York, USA</div>
        </li>{" "}
        <li className="">|</li>
        <li
          className="text-left cursor-pointer"
          onClick={handleClickPropertyTypeMenuFilter}
        >
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

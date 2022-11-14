import { BathroomOutlined, BedroomParentOutlined } from "@mui/icons-material";
import React from "react";

const Card = ({ item }) => {
  return (
    <div className="flex justify-center">
      <div className="shadow rounded">
        <div className="">
          <img src={item.image_url} alt="image" className="w-80 h-48 rounded" />
        </div>
        <div className="p-4 max-w-80">
          <div className="">
            <p className="text-xl text-[#023e8a] font-semibold text-left flex items-center">
              ${item.rental_prices.per_month}{" "}
              <span className="text-sm text-[#737373]">/month</span>
            </p>
            <p className="text-xl text-[#023e8a] font-semibold text-left flex items-center mt-2">
              {item.property_number}
            </p>
            <p className="text-sm text-[#737373] max-w-80  text-left flex items-center">
              {item.displayable_address}
            </p>
            <div className="mt-3">
              <hr />
            </div>
            <div className="flex justify-between pt-2 text-xs items-center text-[#023e8a]">
              <span className="flex items-center gap-2">
                <BedroomParentOutlined
                  sx={{
                    fontSize: "1rem",
                    color: "#023e8a",
                  }}
                />
                {item.num_bedrooms} Beds
              </span>
              <span className="flex items-center gap-2">
                <BathroomOutlined
                  sx={{
                    fontSize: "1rem",
                    color: "#023e8a",
                  }}
                />
                {item.num_bathrooms} Bathrooms
              </span>
              <span className="flex items-center gap-2"></span>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Card;

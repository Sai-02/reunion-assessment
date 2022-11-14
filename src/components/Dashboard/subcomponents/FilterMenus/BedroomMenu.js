import React from "react";
import { Menu, MenuItem } from "@mui/material";

const BedroomMenu = ({ handleClose, anchorEl, open, setBedroomFilter }) => {
  const filters = [
    {
      text: "All",
      val: 0,
    },
    {
      text: "1 Bedroom",
      val: 1,
    },
    {
      text: "2 Bedrooms",
      val: 2,
    },
    {
      text: "3 Bedrooms",
      val: 3,
    },
    {
      text: "4 Bedrooms",
      val: 4,
    },
  ];
  return (
    <Menu
      handleClose={handleClose}
      anchorEl={anchorEl}
      open={open}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      {filters.map((item) => {
        return (
          <MenuItem
            onClick={() => {
              setBedroomFilter(item);
              handleClose();
            }}
          >
            {item.text}
          </MenuItem>
        );
      })}
    </Menu>
  );
};

export default BedroomMenu;

import { Menu, MenuItem } from "@mui/material";
import React from "react";

const BathroomMenu = ({ handleClose, anchorEl, open, setBathroomFilter }) => {
  const filters = [
    {
      text: "All",
      val: 0,
    },
    {
      text: "1 Bathroom",
      val: 1,
    },
    {
      text: "2 Bathrooms",
      val: 2,
    },
    {
      text: "3 Bathrooms",
      val: 3,
    },
    {
      text: "4 Bathrooms",
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
              setBathroomFilter(item);
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

export default BathroomMenu;

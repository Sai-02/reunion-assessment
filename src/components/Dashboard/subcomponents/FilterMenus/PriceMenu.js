import React from "react";
import { Menu, MenuItem } from "@mui/material";

const PriceMenu = ({ handleClose, anchorEl, open, setPriceFilter }) => {
  const filters = [
    { text: "All", val: 0 },
    { text: "> $1000", val: 1000 },
    { text: "> $2000", val: 2000 },
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
              setPriceFilter(item);
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

export default PriceMenu;

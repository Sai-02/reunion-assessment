import React from "react";
import { Menu, MenuItem } from "@mui/material";

const BedroomMenu = ({ handleClose, anchorEl, open }) => {
  return (
    <Menu
      handleClose={handleClose}
      anchorEl={anchorEl}
      open={open}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuItem onClick={handleClose}>All</MenuItem>
      <MenuItem onClick={handleClose}>1 Bedroom</MenuItem>
      <MenuItem onClick={handleClose}>2 Bedrooms</MenuItem>
      <MenuItem onClick={handleClose}>3 Bedrooms</MenuItem>
      <MenuItem onClick={handleClose}>4 Bedrooms</MenuItem>
    </Menu>
  );
};

export default BedroomMenu;

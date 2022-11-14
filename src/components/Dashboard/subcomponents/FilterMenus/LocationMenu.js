import { Menu, MenuItem } from "@mui/material";
import React from "react";

const LocationMenu = ({ handleClose, anchorEl, open }) => {
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
      <MenuItem onClick={handleClose}>New York, USA</MenuItem>
      <MenuItem onClick={handleClose}>Delhi, India</MenuItem>
      <MenuItem onClick={handleClose}>Paris, France</MenuItem>
    </Menu>
  );
};

export default LocationMenu;

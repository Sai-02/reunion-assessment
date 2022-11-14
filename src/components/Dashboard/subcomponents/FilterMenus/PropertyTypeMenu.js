import React from "react";
import { Menu, MenuItem } from "@mui/material";

const PropertyTypeMenu = ({ handleClose, anchorEl, open }) => {
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
      <MenuItem onClick={handleClose}>Flat</MenuItem>
      <MenuItem onClick={handleClose}>Detached house</MenuItem>
      <MenuItem onClick={handleClose}></MenuItem>
    </Menu>
  );
};

export default PropertyTypeMenu;

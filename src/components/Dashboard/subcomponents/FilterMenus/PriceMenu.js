import React from "react";
import { Menu, MenuItem } from "@mui/material";

const PriceMenu = ({ handleClose, anchorEl, open }) => {
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
      <MenuItem onClick={handleClose}>{`< $1000`}</MenuItem>
      <MenuItem onClick={handleClose}>{`> $1000 and < $2000 `}</MenuItem>
      <MenuItem onClick={handleClose}>{`> $2000`}</MenuItem>
    </Menu>
  );
};

export default PriceMenu;

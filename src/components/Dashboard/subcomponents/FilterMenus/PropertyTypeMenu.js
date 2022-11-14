import React from "react";
import { Menu, MenuItem } from "@mui/material";

const PropertyTypeMenu = ({
  handleClose,
  anchorEl,
  open,
  setPropertyTypeFilter,
}) => {
  const filters = ["All", "Flat", "Terraced house", "Detached bungalow"];
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
              setPropertyTypeFilter(item);
              handleClose();
            }}
          >
            {item}
          </MenuItem>
        );
      })}
    </Menu>
  );
};

export default PropertyTypeMenu;

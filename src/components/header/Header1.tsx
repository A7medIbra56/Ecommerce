import React, {  useState } from "react";
import {
  Box,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Menu,
} from "@mui/material";
import {
  FacebookOutlined,
  Twitter,
} from "@mui/icons-material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const options: string[] = ["AR", "EN"];

const Header1: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(1);
  const open = Boolean(anchorEl);

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    _event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack
      bgcolor="#2B3445"
      px={"10px"}
      direction={"row"}
      alignItems={"center"}
    >
      <Typography
       paddingX={"10px"}
       paddingY={"2px"}
        marginRight={"5px"}
        fontSize={"12px"}
        color={"white"}
        borderRadius={"10px"}
        bgcolor={"#D23F57"}
      >
        HOT
      </Typography>
      <Typography fontSize={"12px"} color={"white"} >Free Express Shipping</Typography>

      <Box flexGrow={1} />
    
      <List component="nav" aria-label="Device settings">
        <ListItem
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
          sx={{ cursor: "pointer", padding: "0" }}
        >
          <ListItemText secondary={options[selectedIndex]} />
          <ArrowDropDownIcon />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
      <FacebookOutlined sx={{ marginRight: "10px" ,fontSize:"18px" }} />
      <Twitter sx={{ marginRight: "10px", fontSize:"18px" }} />
    </Stack>
  );
};

export default Header1;

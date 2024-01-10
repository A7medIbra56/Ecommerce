import React, { useContext, useState } from "react";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  useTheme,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Menu,
} from "@mui/material";
import {
  DarkModeOutlined,
  FacebookOutlined,
  LightModeOutlined,
  Twitter,
} from "@mui/icons-material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { ColorModeContext } from "../../theme";

const options: string[] = ["AR", "EN"];

const Header1: React.FC = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(1);
  const open = Boolean(anchorEl);

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
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
      bgcolor="#74B087"
      px={"10px"}
      direction={"row"}
      alignItems={"center"}
    >
      <Typography
        padding={1}
        margin={"5px"}
        fontSize={"13px"}
        borderRadius={2}
        bgcolor={"red"}
      >
        HOT
      </Typography>
      <Typography >Free Express Shipping</Typography>

      <Box flexGrow={1} />
      <div>
        {theme.palette.mode === "light" ? (
          <IconButton
            onClick={() => {
              localStorage.setItem(
                "mode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              colorMode.toggleColorMode();
            }}
            color="inherit"
          >
            <LightModeOutlined />
          </IconButton>
        ) : (
          <IconButton
            onClick={() => {
              localStorage.setItem(
                "mode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              colorMode.toggleColorMode();
            }}
            color="inherit"
          >
            <DarkModeOutlined />
          </IconButton>
        )}
      </div>
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
      <FacebookOutlined sx={{ marginRight: "10px" }} />
      <Twitter sx={{ marginRight: "10px" }} />
    </Stack>
  );
};

export default Header1;

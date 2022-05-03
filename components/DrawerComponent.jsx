import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Image from "next/image";
import List from "@mui/material/List";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "../styles/styles.module.css";
import { IconButton } from "@mui/material";
import logo from "../img/main_logo.png";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Button, useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";

import { FixedSizeList } from "react-window";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const DrawerComponent = () => {
  const useStyles = makeStyles((theme) => ({
    drawerContainer: {},
    iconButtonContainer: {
      marginLeft: "auto",
      color: "white",
    },

    menuIconToggle: {
      fontSize: "3rem",
    },
  }));

  const [openDrawer, setOpenDrawer] = useState(false);

  //Css
  const classes = useStyles();
  return (
    <>
      <div className="main_burger">
        <div className="burger">
          <div className="icon_logo">
            <Image src={logo} alt="company_logo" />
          </div>

          <div className="burger_menu_icon">
            <IconButton
              className={styles.iconButtonContainer}
              onClick={() => setOpenDrawer(!openDrawer)}
              disableRipple
            >
              <MenuIcon className={classes.menuIconToggle} />
            </IconButton>
          </div>
        </div>
      </div>

      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        {/* <h1 className={styles.example}>hellos</h1> */}
        <Box
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            paddingTop: "20px",
          }}
        >
          <nav aria-label="secondary mailbox folders">
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase inputProps={{ "aria-label": "search" }} />
            </Search>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="О нас" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="Программы" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="Новости" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="Отзывы" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="Контакты" />
                </ListItemButton>
              </ListItem>

              <div>
                <Button
                  className="button_construct"
                  variant="h6"
                  // color="inherit"
                  component="div"
                  style={{ pointerEvents: "none" }}
                >
                  ihsan construction
                </Button>
              </div>
            </List>
          </nav>
        </Box>
      </Drawer>
    </>
  );
};

export default DrawerComponent;

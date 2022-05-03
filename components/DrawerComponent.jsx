import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Image from "next/image";
import List from "@mui/material/List";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "../styles/styles.module.css";
import { IconButton } from "@mui/material";
import logo from "../img/main_logo.png";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";

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
      <Image src={logo} alt="company_logo" />

      <IconButton
        className={styles.iconButtonContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.menuIconToggle} />
      </IconButton>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <h1 className={styles.example}>hellos</h1>
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Trash" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="Spam" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Box>
      </Drawer>
    </>
  );
};

export default DrawerComponent;

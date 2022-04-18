import React from "react";
import Image from "next/image";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import youtube from "../img/youtube.png";
import twitter from "../img/twitter.png";
import insta from "../img/insta.png";
import vector from "../img/Vector.png";
import styles from "../styles/styles.module.css";
import logo from "../img/main_logo.png";

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

export default function Navbar() {
  return (
    <nav>
      <div className={styles.first_nav}>
        <ul className={styles.first_nav_logo}>
          <li>
            +996 700 00 51 51 <Image src={vector} />
          </li>
          <li>
            <Image src={insta} alt="insta" />
            <Image src={twitter} alt="twitter" />
            <Image src={youtube} alt="youtube" />
          </li>
          <li>г. Бишкек, Раззакова / Боконбаева 113, БЦ “Альтаир”, 3-этаж.</li>
        </ul>
      </div>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar style={{ backgroundColor: "black" }} position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Image src={logo} alt="company_logo" />
            </Typography>
            <Typography variant="h6" color="inherit" component="div">
              Photos
            </Typography>

            <Typography variant="h6" color="inherit" component="div">
              Photos
            </Typography>

            <Typography variant="h6" color="inherit" component="div">
              Photos
            </Typography>
            <Typography variant="h6" color="inherit" component="div">
              Photos
            </Typography>
            <Typography variant="h6" color="inherit" component="div">
              Photos
            </Typography>
            <Typography variant="h6" color="inherit" component="div">
              Photos
            </Typography>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
    </nav>
  );
}

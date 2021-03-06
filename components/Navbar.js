import React from "react";
import Image from "next/image";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import youtube from "../img/youtube.png";
import twitter from "../img/twitter.png";
import insta from "../img/insta.png";
import vector from "../img/Vector.png";
import styles from "../styles/styles.module.css";
import logo from "../img/main_logo.png";
import { Button, useMediaQuery } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Link from "next/link";
import { useTheme } from "@mui/material";
import DrawerComponent from "./DrawerComponent.jsx";

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
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <nav className={styles.burger_menu}>
      <div className={styles.first_nav}>
        <ul className={styles.first_nav_logo}>
          <li>
            +996 700 00 51 51 <Image src={vector} />
          </li>
          <div>
            <li className={styles.social_network}>
              <div className={styles.logo_social}>
                <Image src={insta} alt="insta" />
              </div>
              <div className={styles.logo_social}>
                <Image src={twitter} alt="twitter" />
              </div>

              <div className={styles.logo_social}>
                <Image src={youtube} alt="youtube" />
              </div>
            </li>
          </div>

          <li style={{ marginRight: "70px" }}>
            ??. ????????????, ?????????????????? / ???????????????????? 113, ???? ????????????????????, 3-????????.{" "}
            <Image src={vector} />
          </li>
        </ul>
      </div>

      {isMatch ? (
        <DrawerComponent />
      ) : (
        <>
          <div className={styles.second_nav}>
            <Box sx={{ flexGrow: 1 }}>
              <AppBar
                elevation={0}
                style={{ backgroundColor: "white", color: "black" }}
                position="static"
              >
                <Toolbar className={styles.toolbar}>
                  {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            > */}
                  {/* <MenuIcon /> */}
                  {/* </IconButton> */}
                  <div>
                    <Link href="/">
                      <Typography variant="h6" color="inherit" component="div">
                        <Image src={logo} alt="company_logo" />
                      </Typography>
                    </Link>
                  </div>

                  <div className={styles.navbar_info}>
                    <Link href="/team">
                      <Typography
                        className={styles.about}
                        variant="h6"
                        color="inherit"
                        component="div"
                      >
                        <span className={styles.popup_window}>lorem</span>?? ??????
                      </Typography>
                    </Link>

                    <Link href="/programs">
                      <Typography
                        className={styles.about}
                        variant="h6"
                        color="inherit"
                        component="div"
                      >
                        <span className={styles.popup_window}>lorem</span>
                        ??????????????????
                      </Typography>
                    </Link>
                    <Link href="/news">
                      <Typography
                        className={styles.about}
                        variant="h6"
                        color="inherit"
                        component="div"
                      >
                        <span className={styles.popup_window}>lorem</span>
                        ??????????????
                      </Typography>
                    </Link>
                    <Link href="/review">
                      <Typography
                        className={styles.about}
                        variant="h6"
                        color="inherit"
                        component="div"
                      >
                        <span className={styles.popup_window}>lorem</span>
                        ????????????
                      </Typography>
                    </Link>

                    <Link href="/contacts">
                      <Typography
                        className={styles.about}
                        variant="h6"
                        color="inherit"
                        component="div"
                      >
                        <span className={styles.popup_window}>lorem</span>
                        ????????????????
                      </Typography>
                    </Link>
                  </div>
                  <div>
                    <Button
                      className={styles.button_construction}
                      variant="h6"
                      // color="inherit"
                      component="div"
                      style={{ pointerEvents: "none" }}
                    >
                      ihsan construction
                    </Button>
                  </div>

                  <div className={styles.lang}>
                    {" "}
                    <FormControl fullWidth>
                      <NativeSelect
                        defaultValue={30}
                        inputProps={{
                          name: "age",
                          id: "uncontrolled-native",
                        }}
                      >
                        <option value={10}>??????</option>
                        <option value={20}>??????</option>
                      </NativeSelect>
                    </FormControl>
                  </div>

                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase inputProps={{ "aria-label": "search" }} />
                  </Search>
                </Toolbar>
              </AppBar>
            </Box>
          </div>
        </>
      )}
    </nav>
  );
}

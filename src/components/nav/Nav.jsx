import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";

// Libraries
import useMediaQuery from "@mui/material/useMediaQuery";

// Components
import DesktopNavbar from "./Navbar";
import MobileNavbar from "./MobNav";

//context
import authContext from "../../context/AuthContext";

const Nav = () => {
  const theme = useTheme();
  const { id } = useContext(authContext);

  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return matches ? (
    <DesktopNavbar />
  ) : id.length ? (
    <MobileNavbar />
  ) : (
    <DesktopNavbar />
  );
};
export default Nav;

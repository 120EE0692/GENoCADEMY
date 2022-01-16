import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@mui/styles";

import LogoutButton from "./User/LogoutButton";
import authContext from "../context/AuthContext";

const Navbar = () => {
  const classes = useStyle();
  const { id, joinAs } = useContext(authContext);

  const isLogin = id.length ? true : false;

  if (isLogin) {
    return (
      <div className={classes.topBar}>
        <div className={classes.container}>
          <div className={classes.navRight}>
            <Link to="/" className={classes.navLink}>
              Logo
            </Link>
          </div>
          <ul className={classes.navList}>
            <li className={classes.navItem}>
              <Link to="/doubt" className={classes.navLink}>
                Doubt Class
              </Link>
            </li>
            <li className={classes.navItem}>
              {joinAs == "mentor" ? (
                <Link to="/group" className={classes.navLink}>
                  Salary progress
                </Link>
              ) : (
                <Link to="/group" className={classes.navLink}>
                  Peer progress
                </Link>
              )}
            </li>
            <li className={classes.navItem}>
              <Link to="/room" className={classes.navLink}>
                Study Room
              </Link>
            </li>
          </ul>
        </div>
        <LogoutButton />
      </div>
    );
  } else {
    return (
      <div className={classes.topBar}>
        <div className={classes.container}>
          <div className={classes.navRight}>
            <Link to="/" className={classes.navLink}>
              Logo
            </Link>
          </div>
          <ul className={classes.navList}>
            <li className={classes.navItem}>
              <Link to="/login" className={classes.navLink}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};
export default Navbar;

const useStyle = makeStyles((theme) => ({
  topBar: {
    marginTop: "0",
    backgroundColor: "#EBFFFB",
    width: "100hw",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "60px",
    maxWidth: "1280px",
    paddingLeft: "16px",
    paddingRight: "16px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  navRight: {
    position: "relative",
    marginLeft: "40px",
    fontSize: "16px",
    lineHeight: "28px",
    fontWeight: "400",
    backgroundColor: "#CDE4DC",
    "&:hover": {
      boxShadow: " 0 2px 2px 0 rgba(0,0,0,0.1), 0 2px 2px 0 rgba(0,0,0,0.19)",
    },
    padding: "5px",
    borderRadius: "7px",
  },

  navList: {
    margin: "0",
    listStyleType: "none",
  },
  navItem: {
    display: "inline",
    marginLeft: "40px",
    fontSize: "16px",
    lineHeight: "28px",
    fontWeight: "400",
    backgroundColor: "#CDE4DC",
    "&:hover": {
      boxShadow: " 0 2px 2px 0 rgba(0,0,0,0.1), 0 2px 2px 0 rgba(0,0,0,0.19)",
    },
    padding: "5px",
    borderRadius: "10px",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  },
  navLink: {
    textDecoration: "none",
    color: "#000000",
  },
}));

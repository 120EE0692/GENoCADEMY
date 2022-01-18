import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@mui/styles";

import LogoutButton from "../User/LogoutButton";
import authContext from "../../context/AuthContext";
import UserAvatar from "../Avatar";
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
            <Link to="/discuss" className={classes.navLink}>
              <li className={classes.navItem}>Forum</li>
            </Link>

            <Link to="/watch" className={classes.navLink}>
              <li className={classes.navItem}>Study Room</li>
            </Link>

            {joinAs == "mentor" ? (
              <Link to="/scheduleclass" className={classes.navLink}>
                <li className={classes.navItem}>Create Class</li>
              </Link>
            ) : (
              <Link to="/class" className={classes.navLink}>
                <li className={classes.navItem}>Join Class</li>
              </Link>
            )}

            {joinAs == "mentor" ? (
              <Link to="/scheduleclass" className={classes.navLink}>
                <li className={classes.navItem}>My Class</li>
              </Link>
            ) : (
              <Link to="/playground" className={classes.navLink}>
                <li className={classes.navItem}>Checklist</li>
              </Link>
            )}

            <Link to="/profile" className={classes.navLink}>
              <li className={classes.navItem}>My profile</li>
            </Link>

            <li className={classes.navItem}>
              <LogoutButton className={classes.navLink} />
            </li>
          </ul>
        </div>
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
            <Link to="/signup" className={classes.navLink}>
              <li className={classes.navItem}>Sign Up</li>
            </Link>

            <Link to="/login" className={classes.navLink}>
              <li className={classes.navItem}>Log In</li>
            </Link>
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
    marginLeft: "20px",
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
    marginLeft: "20px",
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
  logbtn: {
    display: "inline",
    marginLeft: "40px",
    fontSize: "16px",
    lineHeight: "28px",
    fontWeight: "400",
    padding: "5px",
    borderRadius: "10px",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  },
}));

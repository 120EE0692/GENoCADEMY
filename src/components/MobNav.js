import React from "react";
import { Link } from "react-router-dom";

// Libraries
import { BarChart } from "react-feather";
import { Container, SwipeableDrawer } from "@mui/material";
import { makeStyles } from "@mui/styles";
import useToggle from "./hooks/useToggle";

const MobileNavbar = () => {
  const [isMenuOpen, toggleMenu, setMenuOpen] = useToggle(false);
  const classes = useStyles();

  return (
    <>
      <Container className={classes.header}>
        <BarChart
          onClick={toggleMenu}
          onKeyDown={toggleMenu}
          role="button"
          tabIndex={0}
          className={classes.menuIcon}
          size={30}
        />
      </Container>

      <SwipeableDrawer
        anchor="left"
        open={isMenuOpen}
        onClose={() => setMenuOpen(false)}
        onOpen={() => setMenuOpen(true)}
        swipeAreaWidth={5}
        style={{ zIndex: 10001 }}
      >
        <nav className={classes.navContainer} aria-label="Navigation Container">
          <ul className={classes.navList}>
            <li className={classes.navItem}> 
              <Link to="/" className={classes.navLink}>
                Logo
              </Link>
            </li>
            <li className={classes.navItem}>
              <Link to="/faq" className={classes.navLink}>
                Ask A Question
              </Link>
            </li>
            <li className={classes.navItem}>
              <Link to="/" className={classes.navLink}>
                Get Started
              </Link>
            </li>
            <li className={classes.navItem}>
              <Link to="/login" className={classes.navLink}>
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </SwipeableDrawer>
    </>
  );
};
//place the link in the whole button, abhi bas button text pe link hai :(
export default MobileNavbar;

const useStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    marginBottom: "10px",
    marginTop: "20px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    position: "relative",
  },

  menuIcon: {
    transform: "rotateY(180deg) rotate(-90deg)",
    zIndex: 10000,
  },

  swipeableDrawer: {
    zIndex: 10001,
  },

  navContainer: {
    width: "200px",
    height: "auto",
    minHeight: "40vh",
    marginTop: "20px",
    zIndex: 10001,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
  },
  navList: {
    margin: "5px",
    listStyleType: "none",
  },
  //I am unable to find an extra margin to the left of the buttons
  navItem: {
    display: "block",
    margin: " 5px",
    fontSize: "16px",
    lineHeight: "28px",
    fontWeight: "400",
    backgroundColor: "#CDE4DC",
    "&:hover": {
      boxShadow: " 0 2px 2px 0 rgba(0,0,0,0.1), 0 2px 2px 0 rgba(0,0,0,0.19)",
    },
    padding: "5px",
    borderRadius: "10px",
  },
  navLink: {
    textDecoration: "none",
    color: "#000000",
  },
}));

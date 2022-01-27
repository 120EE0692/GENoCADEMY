import React, { useContext } from "react";
import { Link } from "react-router-dom";
// Libraries
import { BarChart } from "react-feather";
import { Container, SwipeableDrawer } from "@mui/material";
import { makeStyles } from "@mui/styles";
import useToggle from "../hooks/useToggle";
import authContext from "../../context/AuthContext";
import Navbar from "./Navbar";
import LogoutButton from "../User/LogoutButton";

const MobileNavbar = () => {
  const [isMenuOpen, toggleMenu, setMenuOpen] = useToggle(false);
  const classes = useStyles();
  const { id, joinAs } = useContext(authContext);

  const isLogin = id.length ? true : false;
  if (isLogin) {
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

        <div className={classes.wrapper}>
          <SwipeableDrawer
            anchor="right"
            open={isMenuOpen}
            onClose={() => setMenuOpen(false)}
            onOpen={() => setMenuOpen(true)}
            swipeAreaWidth={5}
            style={{ zIndex: 10001 }}
          >
            <nav
              className={classes.navContainer}
              aria-label="Navigation Container"
            >
              <ul className={classes.navList}>

                <Link to="/" className={classes.navLink}>
                  <li className={classes.navItem}>
                    Home
                  </li>
                </Link>

                <Link to={`/dashboard`} className={classes.navLink}>
                  <li className={classes.navItem}>
                    Dashboard
                  </li>
                </Link>

                <Link to={`/profile/${id}`} className={classes.navLink}>
                  <li className={classes.navItem}>
                    My profile
                  </li>
                </Link>
                {joinAs == "mentor" ? (
                  <Link to="/scheduleclass" className={classes.navLink}>
                    <li className={classes.navItem}>
                      Create Class</li>
                  </Link>
                ) : (
                  <Link to="/class" className={classes.navLink}>
                    <li className={classes.navItem}>
                      Join Class
                    </li>
                  </Link>
                )}

                {joinAs == "mentor" ? (
                  <Link to="/myscheduleclass" className={classes.navLink}>
                    <li className={classes.navItem}>My Class</li>
                  </Link>
                ) : (
                  <Link to="/checklist" className={classes.navLink}>
                    <li className={classes.navItem}>Checklist</li>
                  </Link>
                )}

                <Link to="/discuss" className={classes.navLink}>
                  <li className={classes.navItem}>
                    Forum
                  </li>
                </Link>


                <Link to="/watch" className={classes.navLink}>
                 <li className={classes.navItem}>Study Room</li>
                </Link>
            

                
                <Link to="/chat" className={classes.navLink}>
                  <li className={classes.navItem}>Chat</li>
                </Link>
                <li className={classes.navItem}>
                  <LogoutButton className={classes.navLink} />
                </li>
              </ul>
            </nav>
          </SwipeableDrawer>
        </div>
      </>
    );
  } else {
    return <Navbar />;
  }
};
//place the link in the whole button, abhi bas button text pe link hai :(
export default MobileNavbar;

const useStyles = makeStyles((theme) => ({

  header: {
    width: "100%",
    marginBottom: "10px",
    paddingTop: "5px",
    paddingBottom: "5px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    position: "relative",
    backgroundColor: "#EBFFFB",
  },
  menuIcon: {
    transform: "rotateY(180deg) rotate(-90deg)",
    zIndex: 10000,
    alignItems: "right",
    // marginLeft: "680px",
  },
  swipeableDrawer: {
    zIndex: 10001,
  },
  navContainer: {
    width: "200px",
    height: "auto",
    minHeight: "40vh",
    zIndex: 10001,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
    backgroundColor: "#EBFFFB",
  },
  navList: {
    marginTop: "20px",
    marginLeft: '-20px',
    listStyleType: "none",
    height: "100vh",

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

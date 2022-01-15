//this file contains the code for the overlay form that appears once you clear the completed tasks from the TODO list

import React from "react";
//mui
import { TextField, Typography } from "@mui/material";
import {Checkbox } from "@mui/material";
import { makeStyles } from "@mui/styles";

const Clear = ({ handleClose }) => {
  const classes = useStyle();

  return (
    <>
      <div className={classes.container}>
        <div className={classes.Wrapper}>
          <div>
            <div className={classes.heading}>
              <Typography component="h1" variant="h5">
                Honesty is the best aid in Learning. Let's not cheat ourselves.
              </Typography>
            </div>
            <div className={classes.firstName}>
              <TextField
                required
                fullWidth
                label="How much would you score yourself?"
              />
            </div>

            <form className={classes.form}>
              <div className={classes.input}>
                <div className={classes.checkBox}>
                  <Checkbox required onClick={handleClose} />
                  <p>I am ready to complete new tasks!</p>
                </div>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clear;

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "3% 0 0 5%",
  },
  heading: {
    margin: "30px",
    alignItems: "center",
    textAlign: "center",
    color: "#000",
  },
  Wrapper: {
    width: "80%",
    backgroundColor: "#EBFFFB",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  firstName: {
    width: "85%",
    color: "#000",
    margin: "20px",
  },
  checkBox: {
    display: "flex",
    color: "#000",
  },
  formBackground: {
    width: "70hw",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    marginTop: "30px",
    width: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
}));

import React from "react";
import { TextField, Typography, Button, Avatar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const LogIn = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <div className={classes.logInWrapper}>
        <div className={classes.avatar}>
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
        </div>

        <div>
          <div className={classes.heading}>
            <Typography component="h1" variant="h5">
              Log In
            </Typography>
          </div>

          <form className={classes.form}>
            <div className={classes.email}>
              <TextField fullWidth type="email" required label="Email" />
            </div>

            <div className={classes.password}>
              <TextField fullWidth type="password" required label="Password" />
            </div>

            <div className={classes.forgotPassword}>
              <a href="#">Forgot Password ?</a>
            </div>

            <div className={classes.button}>
              <Button size="large" variant="contained">
                LogIn
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

const useStyle = makeStyles(({ theme }) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100hw",
    alignItems: "center",
  },
  avatar: {
    display: "flex",
    justifyContent: "center",
  },
  heading: {
    alignItems: "center",
    textAlign: "center",
  },
  logInWrapper: {
    width: "50%",
    backgroundColor: "#EBFFFB",
  },
  formBackground: {
    width: "70hw",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    // width: "70hw",
  },
  email: {
    marginTop: "30px",
    width: "80%",
  },
  password: {
    marginTop: "30px",
    width: "80%",
    paddingBottom: "5%",
  },

  forgotPassword: {
    display: "flex",
    justifyContent: "end",
    width: "100%",
    paddingRight: "20%",
  },

  button: {
    display: "flex",
    justifyContent: "center",
    width: "50%",
    paddingBottom: "5%",
  },
}));

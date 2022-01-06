import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//mui
import { TextField, Typography, Button, Avatar } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { makeStyles } from "@mui/styles";

//firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

const LogIn = () => {
  const classes = useStyle();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logInError, setLogInError] = useState("");

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setLogInError("");
      setEmail("");
      setPassword("");
      navigate("/dashboard");
    } catch (error) {
      setLogInError(error.message);
    }
  };

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
              <TextField
                fullWidth
                type="email"
                required
                label="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className={classes.password}>
              <TextField
                fullWidth
                type="password"
                required
                label="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div className={classes.forgotPassword}>
              <a href="#">Forgot Password ?</a>
            </div>
            {logInError.length > 0 && logInError}
            <div className={classes.button}>
              <Button
                type="submit"
                onClick={handleLogIn}
                size="large"
                variant="contained"
              >
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

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100hw",
    alignItems: "center",
    marginTop: "5%",
  },
  avatar: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2%",
  },
  heading: {
    alignItems: "center",
    textAlign: "center",
  },
  logInWrapper: {
    width: "50%",
    backgroundColor: "#EBFFFB",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
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
    [theme.breakpoints.down("md")]: {
      paddingTop: "5%",
    },
  },
}));

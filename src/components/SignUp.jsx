import React from "react";
import {
  InputLabel,
  MenuItem,
  TextField,
  Typography,
  Select,
  Checkbox,
  Button,
  Avatar,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const SignUp = () => {
  const classes = useStyle();

  const exams = ["JEE", "NEET", "NDA", "KVPY", "NTSE"];
  return (
    <div className={classes.container}>
      <div className={classes.signUpWrapper}>
        <div className={classes.avatar}>
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
        </div>

        <div>
          <div className={classes.heading}>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
          </div>

          <form className={classes.form}>
            <div className={classes.nameField}>
              <div className={classes.firstName}>
                <TextField required label="First Name" />
              </div>
              <div className={classes.lastName}>
                <TextField required label="Last Name" />
              </div>
            </div>
            <div className={classes.email}>
              <TextField fullWidth type="email" required label="Email" />
            </div>

            <div className={classes.password}>
              <TextField fullWidth type="password" required label="Password" />
            </div>

            <div className={classes.password}>
              <TextField
                fullWidth
                type="password"
                required
                label="Re-Password"
              />
            </div>

            <div className={classes.dropDown}>
              <InputLabel> Institution </InputLabel>
              <Select fullWidth>
                <MenuItem> IIT</MenuItem>
                <MenuItem> NIT</MenuItem>
              </Select>
            </div>

            <div className={classes.dropDown}>
              <InputLabel> Join As </InputLabel>
              <Select fullWidth>
                <MenuItem> Mentor</MenuItem>
                <MenuItem> Student</MenuItem>
              </Select>
            </div>

            <div className={classes.dropDown}>
              <InputLabel> Exam </InputLabel>
              <Select value={exams} multiple fullWidth>
                <MenuItem disabled value="">
                  <em>Exam</em>
                </MenuItem>
                {exams.map((examName) => (
                  <MenuItem key={examName}>{examName}</MenuItem>
                ))}
              </Select>
            </div>

            <div className={classes.dropDown}>
              <InputLabel> Country </InputLabel>
              <Select fullWidth>
                <MenuItem> India</MenuItem>
                <MenuItem> USA</MenuItem>
              </Select>
            </div>

            <div className={classes.checkBox}>
              <Checkbox />
              <p>I understand to the terms and conditions</p>
            </div>

            <Button className={classes.button} size="large" variant="contained">
              SIGN UP
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

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
  signUpWrapper: {
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
  nameField: {
    display: "flex",
    marginTop: "10px",
  },
  firstName: {
    marginRight: "50px",
  },
  lastName: {
    marginLeft: "10px",
  },
  email: {
    marginTop: "30px",
    width: "80%",
  },
  password: {
    marginTop: "30px",
    width: "80%",
  },
  dropDown: {
    width: "80%",
    marginTop: "10px",
  },
  checkBox: {
    display: "flex",
  },
  button: {
    width: "100%",
  },
}));

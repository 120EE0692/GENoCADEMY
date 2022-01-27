import React, { useState } from "react";
import {  useNavigate} from "react-router-dom";


//mui
import { InputLabel, MenuItem, TextField, Typography } from "@mui/material";
import { Select, Checkbox, Button, Avatar } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { makeStyles } from "@mui/styles";

//placeholder
import { exams, state } from "../../assets/placeholder/onBoarding";

//firebase
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, store } from "../../config/firebase";
import { doc, setDoc } from "firebase/firestore";

const SignUp = () => {
  const classes = useStyle();

  const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    joinAs: "",
    qualification: "",
    exam: "",
    state: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      updateProfile(auth.currentUser, { displayName: userInfo.firstName });
      const userRef = setDoc(
        doc(store, "userDetails", userData.user.uid),
        userInfo
      );
      navigate("/dashboard");
      setDoc(userRef, { merge: true });
      
    } catch (error) {}
  };

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

          <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.nameField}>
              <div className={classes.firstName}>
                <TextField
                  required
                  fullWidth
                  label="First Name"
                  value={userInfo.firstName}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, firstName: e.target.value })
                  }
                />
              </div>
              <div className={classes.lastName}>
                <TextField
                  fullWidth
                  label="Last Name"
                  value={userInfo.lastName}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, lastName: e.target.value })
                  }
                />
              </div>
            </div>
            <div className={classes.email}>
              <TextField
                fullWidth
                type="email"
                required
                label="Email"
                value={email}
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
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
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
              <InputLabel> Highest Qualification </InputLabel>
              <Select
                fullWidth
                value={userInfo.qualification}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, qualification: e.target.value })
                }
              >
                <MenuItem value="class-10"> class-10</MenuItem>
                <MenuItem value="class-11"> class-11</MenuItem>
                <MenuItem value="class-12"> class-12</MenuItem>
              </Select>
            </div>

            <div className={classes.dropDown}>
              <InputLabel> Join As </InputLabel>
              <Select
                fullWidth
                value={userInfo.joinAs}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, joinAs: e.target.value })
                }
              >
                <MenuItem value="mentor"> Mentor</MenuItem>
                <MenuItem value="student"> Student</MenuItem>
              </Select>
            </div>

            <div className={classes.dropDown}>
              <InputLabel> Exam </InputLabel>
              <Select
                value={userInfo.exam}
                fullWidth
                onChange={(e) =>
                  setUserInfo({ ...userInfo, exam: e.target.value })
                }
              >
                {exams.map((examName) => (
                  <MenuItem key={examName} value={examName}>
                    {examName}
                  </MenuItem>
                ))}
              </Select>
            </div>

            <div className={classes.dropDown}>
              <InputLabel> State </InputLabel>
              <Select
                fullWidth
                value={userInfo.state}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, state: e.target.value })
                }
              >
                {state.map((stateName) => (
                  <MenuItem key={stateName} value={stateName}>
                    {stateName}
                  </MenuItem>
                ))}
              </Select>
            </div>

            <div className={classes.checkBox}>
              <Checkbox required />
              <p>I understand to the terms and conditions</p>
            </div>

            <Button
              type="submit"
              className={classes.button}
              size="large"
              variant="contained"
            >
              SIGN UP
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "3% 5% 5% 5%",
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
  signUpWrapper: {
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
  nameField: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
    width: "80%",
  },
  firstName: {
    width: "45%",
  },
  lastName: {
    width: "45%",
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

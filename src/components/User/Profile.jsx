import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

//mui
import {
  TextField,
  Button,
  MenuItem,
  InputLabel,
  Select,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import RecentActorsTwoToneIcon from "@mui/icons-material/RecentActorsTwoTone";
//context
import authContext from "../../context/AuthContext";

//component
import MyScheduleClass from "./MyScheduleClass";

//firebase
import { store } from "../../config/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

//placeholder
import { state, exams } from "../../assets/placeholder/onBoarding";

//theme
import theme from "../../config/theme";

export default function Profile() {
  const classes = useStyle();
  const small = useMediaQuery(theme.breakpoints.down("sm"));

  const [isReadOnly, setIsReadOnly] = useState(true);
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    joinAs: "",
    qualification: "",
    exam: "",
    state: "",
  });
  let { id } = useContext(authContext); //userCurrently LoggedIn
  const { userId } = useParams();

  useEffect(() => {
    (async () => {
      const data = await getDoc(doc(store, "userDetails", userId));
      setUserInfo(data.data());
    })();
  }, []);

  const updateUserProfile = async () => {
    await updateDoc(doc(store, "userDetails", userId), userInfo);
  };

  return (
    <>
      <div className={classes.wrapper}>
        <div>
          <div className={classes.profileImg}>
            <RecentActorsTwoToneIcon
              sx={{
                fontSize: "12rem",
              }}
            />
          </div>
          <div className={classes.donteButton}>
            <Button variant="contained" href="https://rzp.io/l/uXghYzhaQ">
              Donate
            </Button>
          </div>
        </div>

        <div className={classes.infoBox}>
          <TextField
            sx={{ width: "45%" }}
            label="First Name"
            value={userInfo?.firstName}
            InputProps={{ readOnly: isReadOnly }}
            variant="standard"
            onChange={(e) =>
              setUserInfo({ ...userInfo, firstName: e.target.value })
            }
          />
          <TextField
            label="Last Name"
            sx={{ width: "45%" }}
            value={userInfo?.lastName}
            InputProps={{ readOnly: isReadOnly }}
            variant="standard"
            onChange={(e) =>
              setUserInfo({ ...userInfo, lastName: e.target.value })
            }
          />
          <Box className={classes.field}>
            {isReadOnly ? (
              <TextField
                fullWidth
                label="Join-As"
                value={userInfo?.joinAs}
                InputProps={{ readOnly: isReadOnly }}
                variant="standard"
              />
            ) : (
              <>
                <InputLabel> Join As </InputLabel>
                <Select
                  fullWidth
                  variant="standard"
                  value={userInfo.joinAs}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, joinAs: e.target.value })
                  }
                >
                  <MenuItem value="mentor"> Mentor</MenuItem>
                  <MenuItem value="student"> Student</MenuItem>
                </Select>
              </>
            )}
          </Box>
          <Box className={classes.field}>
            {isReadOnly ? (
              <TextField
                fullWidth
                label="Qualification"
                value={userInfo?.qualification}
                InputProps={{ readOnly: isReadOnly }}
                variant="standard"
                onChange={(e) =>
                  setUserInfo({
                    ...userInfo,
                    qualification: e.target.validationMessage,
                  })
                }
              />
            ) : (
              <>
                <InputLabel> Qualification </InputLabel>
                <Select
                  fullWidth
                  variant="standard"
                  value={userInfo.qualification}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, qualification: e.target.value })
                  }
                >
                  <MenuItem value="class-10"> class-10</MenuItem>
                  <MenuItem value="class-11"> class-11</MenuItem>
                  <MenuItem value="class-12"> class-12</MenuItem>
                  <MenuItem value="Undergraduate"> Undergraduate</MenuItem>
                  <MenuItem value="Postgraduate">Postgraduate</MenuItem>
                </Select>
              </>
            )}
          </Box>
          <Box className={classes.field}>
            {isReadOnly ? (
              <TextField
                fullWidth
                label="Exam"
                variant="standard"
                value={userInfo?.exam}
                InputProps={{ readOnly: isReadOnly }}
                variant="standard"
              />
            ) : (
              <>
                <InputLabel> Exam </InputLabel>
                <Select
                  fullWidth
                  value={userInfo.exam}
                  variant="standard"
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
              </>
            )}
          </Box>
          <Box className={classes.field}>
            {isReadOnly ? (
              <TextField
                fullWidth
                label="State"
                value={userInfo?.state}
                InputProps={{ readOnly: isReadOnly }}
                variant="standard"
              />
            ) : (
              <>
                <InputLabel> State </InputLabel>
                <Select
                  fullWidth
                  variant="standard"
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
              </>
            )}
          </Box>
          <Box className={classes.idField}>
            <TextField fullWidth
              variant="standard"
              label="ID"
              value={userId} />
          </Box>
          {isReadOnly ? (
            <div className={classes.editButton}>
              {userId === id ? (
                <Button variant="outlined" onClick={() => setIsReadOnly(false)}>
                  EDIT
                  <ModeEditOutlinedIcon />{" "}
                </Button>
              ) : (
                <></>
              )}
            </div>
          ) : (
            <div className={classes.editButton}>
              <Button
                variant="contained"
                onClick={() => (updateUserProfile(), setIsReadOnly(true))}
              >
                SAVE
              </Button>
            </div>
          )}
        </div>
      </div>
      {userInfo?.joinAs == "mentor" ? (
        <div>
          <div className={classes.title}>
            <h2>Scheduled Classes</h2>
          </div>
          {userInfo?.joinAs == "mentor" ? (
            <MyScheduleClass profileId={userId} />
          ) : null}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

const useStyle = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    marginBottom: "25px",
  },
  profileImg: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "1rem",
  },
  donteButton: {
    display: "flex",
    justifyContent: "center",
  },
  infoBox: {
    display: "flex",
    width: "50%",
    flexWrap: "wrap",
    justifyContent: "space-around",
    margin: "20px 0 5px 0",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  field: {
    width: "45%",
    margin: "20px 0 5px 0",
  },
  idField: {
    width: "95%",
    display: "flex",
    justifyContent: "start"
  },
  editButton: {
    display: "flex",
    width: "100%",
    justifyContent: "end",
    marginTop: "1rem",
  },
  title: {
    paddingLeft: "1rem",
    borderBottom: "0.05rem solid black",
    fontSize: "1rem",
  },
}));

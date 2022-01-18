import React, { useContext } from "react";
import authContext from "../context/AuthContext";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";

const Dashboard = () => {
  const logInUserInfo = useContext(authContext);
  console.log(logInUserInfo);
  return (
    <>
      {" "}
      <Typography style={{ color: "#006064" }}>
        {" "}
        <h2>
          Hi{" "}
          <em className="name">{logInUserInfo.loginUserName?.toUpperCase()}</em>{" "}
        </h2>
      </Typography>
    </>
  );
};

export default Dashboard;

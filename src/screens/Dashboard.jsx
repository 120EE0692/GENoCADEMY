import React, { useContext } from "react";
import authContext from "../context/AuthContext";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";

const Dashboard = () => {
  const logInUserInfo = useContext(authContext);
  return (
    <>
      <Typography style={{ color: "#006064", fontWeight: "900", fontSize: "4rem" }}>
        Hi{" "}
        <em className="name">{logInUserInfo.loginUserName?.toUpperCase()}</em>{" "}
      </Typography>
      <Typography style={{ color: "#8FA01F", fontWeight: "700", fontSize: "3rem", textAlign: "center", background: "#DED93E", margin: "2rem 0", padding: "1rem 0" }}>
        “If You are planning for a year, sow rice; if you are planning for a decade, plant trees; if you are planning for a lifetime, educate people”
      </Typography>
    </>
  );
};

export default Dashboard;

import React, { useContext } from "react";
import authContext from "../context/AuthContext";

const Dashboard = () => {
  const logInUserInfo = useContext(authContext);
  console.log(logInUserInfo);
  return <>Hi {logInUserInfo.loginUserName?.toUpperCase()}</>;
};

export default Dashboard;

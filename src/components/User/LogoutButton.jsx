import React from "react";

import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";

const LogoutButton = () => {
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Button variant="outlined" onClick={logout}>
        <LogoutIcon />
      </Button>
    </div>
  );
};

export default LogoutButton;

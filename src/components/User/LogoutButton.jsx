import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";

const LogoutButton = () => {
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await signOut(auth);
      localStorage.clear()
      navigate("/login")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    
      <Button size="small" variant="text" onClick={logout}>
        <LogoutIcon/>
      </Button>
    
  );
};

export default LogoutButton;

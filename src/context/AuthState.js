import React, { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import authContext from "./AuthContext";

const AuthState = ({ children }) => {
  const [id, setId] = useState("");
  const [loginUserName, setLoginUserName] = useState("");
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoginUserName(user.displayName);
      setId(user.uid);
    } else {
      setId("");
      setLoginUserName("");
    }
  });

  return (
    <authContext.Provider value={{loginUserName, id}}>
      {children}
    </authContext.Provider>
  );
};

export default AuthState;

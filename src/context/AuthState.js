import React, { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import authContext from "./AuthContext";

const AuthState = ({ children }) => {
  const [id, setId] = useState("");
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setId(uid);
    } else {
    }
  });

  return <authContext.Provider value={id}>{children}</authContext.Provider>;
};

export default AuthState;

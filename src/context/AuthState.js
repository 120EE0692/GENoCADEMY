import React, { useState, useEffect } from "react";

//context
import authContext from "./AuthContext";

//firebase
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, store } from "../config/firebase";

const AuthState = ({ children }) => {
  const [id, setId] = useState("");
  const [loginUserName, setLoginUserName] = useState("");
  const [joinAs, setJoinAs] = useState("");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoginUserName(user.displayName);
      setId(user.uid);
      localStorage.setItem("isAuthenticated", "true");
    } else {
      setId("");
      setLoginUserName("");
    }
  });

  useEffect(() => {
    (async () => {
      if (id) {
        const data = await getDoc(doc(store, "userDetails", id));
        setJoinAs(data.data().joinAs);
        if (joinAs === "mentor")
          localStorage.setItem("isJoinAsEducator", "true");
      }
    })();
  }, [id,joinAs]);

  return (
    <authContext.Provider value={{ loginUserName, id, joinAs }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthState;

import React, { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebase";

const UserDetails = () => {
  const [uid, setUid] = useState("");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setUid(uid);
    } else {
        
    }
  });

  return <>{uid}</>;
};

export default UserDetails;
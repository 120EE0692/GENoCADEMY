import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, store } from "../../config/firebase";
import { doc, getDoc } from "firebase/firestore";

const UserDetails = () => {
  const [uid, setUid] = useState("");
  const [userDetails, setUserDetails] = useState({});

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setUid(uid);
      // GetUserInfo();
    } else {
    }
  });

  useEffect(() => GetUserInfo(uid), [uid]);

  const GetUserInfo = async (uid) => {
    // let docRef = doc(store, "mentorDetails", uid);
   let docRef = doc(store, "studentDetails", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      console.log("Document data:", data);
      setUserDetails(data.firstName);
    } else {
      // doc.data() will be undefined in this case
      // console.log("No such document!");
    }
  };

  return (
    <>
      {uid}
    </>
  );
};

export default UserDetails;

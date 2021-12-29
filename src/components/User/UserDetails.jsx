import React, { useState, useEffect, useContext } from "react";
import { store } from "../../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import authContext from "../../context/AuthContext";

const UserDetails = () => {
  const id = useContext(authContext);
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => GetUserInfo(id), []);
  const GetUserInfo = async (id) => {
    const docRef = doc(store, "userDetails", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      console.log("Document data:", data);
      setUserDetails(Object.entries(data));
    } else {
      // doc.data() will be undefined in this case
      // console.log("No such document!");
    }
  };
  return (
    <>
      {id}
      <div>
        {userDetails?.map((user) => (
          <div>
            {user[0].toUpperCase(0)} : {user[1]}
          </div>
        ))}
      </div>
    </>
  );
};

export default UserDetails;

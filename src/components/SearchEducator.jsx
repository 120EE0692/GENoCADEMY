import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { store } from "../config/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { makeStyles } from "@mui/styles";

const SearchEducator = () => {
  const [searchKeyWord, setSearchKeyWord] = useState("");
  const [educator, setEducator] = useState([]);
  const [filterResult, setFilterResult] = useState([]);
  const classes = useStyle();
  useEffect(() => {
    (async () => {
      const userInfoRef = collection(store, "userDetails");
      const mentorQuery = query(userInfoRef, where("joinAs", "==", "mentor"));
      const mentorDocs = await getDocs(mentorQuery);
      try {
        setEducator(
          mentorDocs.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      } catch (error) {
        console.log("Error");
      }
    })();
  }, []);

  useEffect(() => {
    setFilterResult(
      educator.filter(
        (eduInfo) =>
          eduInfo.firstName
            .toLowerCase()
            .includes(searchKeyWord.toLowerCase()) ||
          eduInfo.exam.toLowerCase().includes(searchKeyWord.toLowerCase())
      )
    );
  }, [searchKeyWord]);

  return (
    <>
      <TextField
        variant="standard"
        value={searchKeyWord}
        type="search"
        label="Search for Mentor or Exam"
        fullWidth
        onBlur={() => {
          setSearchKeyWord("");
          setFilterResult([]);
        }}
        onChange={(e) => setSearchKeyWord(e.target.value)}
      />
      <div className={classes.wrapper}>
        {filterResult?.map((eduDetails) => (
          <a href={`profile/${eduDetails.id}`} className={classes.link}>
            <li className={classes.list}>{`${eduDetails.firstName}`}</li>
          </a>
        ))}
      </div>
    </>
  );
};

export default SearchEducator;
const useStyle = makeStyles((theme) => ({
  wrapper: {
    zIndex: "1001",
  },
  list: {
    listStyleType: "none",
    textDecoration: "none",
    textAlign: "left",
  },
  link: {
    textDecoration: "none",
    color: "#000",
    "&:hover": {
      color: "#0B3F46",
      cursor: "pointer",
    },
  },
}));

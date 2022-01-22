import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material"
import { store } from "../config/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const SearchEducator = () => {

    const [searchKeyWord, setSearchKeyWord] = useState("")
    const [educator, setEducator] = useState([])
    const [filterResult, setFilterResult] = useState([])
    useEffect(() => {
        (async () => {
            const userInfoRef = collection(store, "userDetails")
            const mentorQuery = query(userInfoRef, where("joinAs", "==", "mentor"))
            const mentorDocs = await getDocs(mentorQuery)
            try {
                setEducator(mentorDocs.docs.map(doc => ({ ...doc.data(), id: doc.id })))
            }
            catch (error) {
                console.log("Error")
            }
        })();
    }, [])

    useEffect(() => {
        setFilterResult(educator.filter(eduInfo => eduInfo.firstName.toLowerCase().includes(searchKeyWord.toLowerCase())))
    }, [searchKeyWord])

    console.log(educator)
    return (
        <>
            <TextField variant="outlined" value={searchKeyWord} onChange={(e) => setSearchKeyWord(e.target.value)} />
            <div>
                {filterResult?.map((eduDetails) => <a href={`profile/${eduDetails.id}`}><li>{`${eduDetails.firstName}`}</li></a>)}
            </div>
        </>
    )
}

export default SearchEducator
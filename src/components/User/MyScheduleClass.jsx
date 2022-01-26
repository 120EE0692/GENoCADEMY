import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

//context
import AuthContext from "../../context/AuthContext"

//component
import LiveClassCard from "../Classes/LiveClass";

//firebase 
import { store } from "../../config/firebase"
import { collection, where, query, getDocs } from "firebase/firestore";

const MyScheduleClass = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [myClasses, setMyClasses] = useState([])
    const { id } = useContext(AuthContext);
    const { userId } = useParams();

    useEffect(() => {
        (async () => {
            const ref = collection(store, "class Schedule")
            var q
            if (userId)
                q = query(ref, where("id", "==", userId));
            else
                q = query(ref, where("id", "==", id));

            const data = await getDocs(q);

            setMyClasses(data.docs.map((doc) => ({ ...doc.data(), classId: doc.id })))

            setIsLoading(false)
        })();
    }, [isLoading, id])
    return (

        isLoading ?
            null :
            <>
                {myClasses.map((info, index) => (
                    <LiveClassCard key={index} name={info.userName} id={info.id} topic={info.title} scheduleClassId={info.classId} exam={info.examName} time={info.dateAndTime.toDate().toString()} link={info.link} />
                ))}
            </>
    )

}

export default MyScheduleClass
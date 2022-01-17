import React, { useState, useEffect, useContext } from "react";

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

    useEffect(() => {
        (async () => {
            const ref = collection(store, "class Schedule")
            const q = query(ref, where("id", "==", id));
            const data = await getDocs(q);
            setMyClasses(data.docs.map((doc) => ({ ...doc.data(), classId: doc.id })))

            setIsLoading(false)
        })();
    }, [isLoading])
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
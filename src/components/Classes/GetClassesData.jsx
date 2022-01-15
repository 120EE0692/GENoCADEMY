import { useState, useEffect } from "react";

//components
import LiveClassCard from "./LiveClass";

//firebase
import { store } from "../../config/firebase";
import { query, collection, getDocs, orderBy } from "firebase/firestore";
import { makeStyles } from "@mui/styles";

const GetClassesData = () => {
  const classes = useStyles();
  const [allClassInfo, setAllClassInfo] = useState([]);

  const getClasses = async () => {
    const classScheduleRef = collection(store, "class Schedule");
    const q = query(classScheduleRef, orderBy("dateAndTime"));
    const querySnapshot = await getDocs(q);
    setAllClassInfo(
      querySnapshot.docs.map((doc) => ({ ...doc.data(), classId: doc.id }))
    );
  };
  useEffect(() => getClasses(), []);

  return (
    <div className={classes.container}>
      {allClassInfo.map((info) => (
        <LiveClassCard key={info.classId} name={info.userName} id={info.id} topic={info.title} scheduleClassId={info.classId} exam={info.examName} time={info.dateAndTime.toDate().toString()} link={info.link} />
      ))}
    </div>
  );
};

export default GetClassesData;

const useStyles = makeStyles({
  container: {},
});

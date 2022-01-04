import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import Navbar from "../components/Navbar";
import LogIn from "../components/User/LogIn";
import SignUp from "../components/User/SignUp";
import Player from "./Player";
import AllClass from "./AllClass";
import ScheduleClass from "./ScheduleClass";
import Playground from "./Play";

//Context
import AuthState from "../context/AuthState";


function App() {
  return (
    <>
      <AuthState>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<SignUp />}>
              {" "}
            </Route>
            <Route exact path="/login" element={<LogIn />}></Route>
            <Route exact path="/playground" element={<Playground />}></Route>
            <Route exact path="/watch" element={<Player />}></Route>
            <Route exact path="/class" element={<AllClass />}></Route>
            <Route exact path="/scheduleclass" element={<ScheduleClass />} ></Route>
          </Routes>
        </Router>
      </AuthState>
    </>
  );
}

export default App;

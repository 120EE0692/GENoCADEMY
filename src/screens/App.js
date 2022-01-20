import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import LogIn from "../components/User/LogIn";
import SignUp from "../components/User/SignUp";
import Player from "./Player";
import AllClass from "./AllClass";
import ScheduleClass from "./ScheduleClass";
import Playground from "./Play";
import Nav from "../components/nav/Nav";
import Dashboard from "./Dashboard";
import Profile from "../components/User/Profile";
import LandingPage from "./landing";

//Context
import AuthState from "../context/AuthState";



function App() {
  return (
    <>
      <AuthState>
        <Router>
          <Nav/>
          
          <Routes>
            <Route exact path="/signup" element={<SignUp />}>
              {" "}
            </Route><Route exact path="/" element={<LandingPage />}>
              {" "}
            </Route>
            <Route exact path="/login" element={<LogIn />}></Route>
            <Route exact path="/playground" element={<Playground />}></Route>
            <Route exact path="/watch" element={<Player />}></Route>
            <Route exact path="/class" element={<AllClass />}></Route>
            <Route exact path="/scheduleclass" element={<ScheduleClass />} ></Route>
            <Route exact path={`/scheduleclass/edit/:classid`} element={<ScheduleClass />} ></Route>
            <Route exact path="/dashboard" element={<Dashboard />} ></Route>
            <Route exact path={`/profile/:userId`} element={<Profile />} ></Route>
          </Routes>
        </Router>
      </AuthState>
    </>
  );
}

export default App;

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
import MyScheduleClass from "../components/User/MyScheduleClass";
import DiscussionForumPage from "../components/Discussions/DiscussionForumPage";
import Checklist from "../components/checklist/ToDo/Checklist";
import Footer from "../components/Footer";
import Chat from "../components/Chat/Chats";

//Route
import {
  ProtectedRoute,
  ProtectedRouteEducator,
} from "../components/ProtectedRoutes/ProtectedRoutes";

//Context
import AuthState from "../context/AuthState";

function App() {
  return (
    <>
      <AuthState>
        <Router>
          <Nav />
        <div style={{minHeight: "80vh",overflowX:"hidden"}}>
          <Routes>
            <Route exact path="/signup" element={<SignUp />}>
              {" "}
            </Route>
            <Route exact path="/" element={<LandingPage />}>
              {" "}
            </Route>
            <Route exact path="/login" element={<LogIn />}></Route>
            <Route exact path="/playground" element={<Playground />}></Route>

            <Route exact path="/watch" element={<ProtectedRoute />}>
              <Route exact path="/watch" element={<Player />} />
            </Route>
            <Route exact path="/chat" element={<ProtectedRoute />}>
              <Route exact path="/chat" element={<Chat />} />
            </Route>
            <Route exact path="/class" element={<ProtectedRoute />}>
              <Route exact path="/class" element={<AllClass />} />
            </Route>
            <Route exact path={`/profile/:userId`} element={<ProtectedRoute />}>
              <Route exact path={`/profile/:userId`} element={<Profile />} />
            </Route>
            <Route exact path="/discuss" element={<ProtectedRoute />}>
              <Route exact path="/discuss" element={<DiscussionForumPage />} />
            </Route>
            <Route exact path="/checklist" element={<ProtectedRoute />}>
              <Route exact path="/checklist" element={<Checklist />} />
            </Route>
            <Route exact path="/dashboard" element={<ProtectedRoute />}>
              <Route exact path="/dashboard" element={<Dashboard />}></Route>
            </Route>

            <Route
              exact
              path="/scheduleclass"
              element={<ProtectedRouteEducator />}
            >
              <Route exact path="/scheduleclass" element={<ScheduleClass />} />
            </Route>

            <Route
              exact
              path={`/scheduleclass/edit/:classid`}
              element={<ProtectedRouteEducator />}
            >
              <Route
                exact
                path={`/scheduleclass/edit/:classid`}
                element={<ScheduleClass />}
              />
            </Route>

            <Route exact path="/myscheduleclass" element={<ProtectedRoute />}>
              <Route
                exact
                path="/myscheduleclass"
                element={<MyScheduleClass />}
              />
            </Route>
          </Routes>
          </div>
          <Footer />
        </Router>
      </AuthState>
    </>
  );
}

export default App;

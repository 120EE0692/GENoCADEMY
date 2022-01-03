import Navbar from "../components/Navbar";

import LogIn from "../components/User/LogIn";
import SignUp from "../components/User/SignUp";
import Player from "./Player";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Playground from "./Play";
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
          </Routes>
        </Router>
      </AuthState>
    </>
  );
}

export default App;

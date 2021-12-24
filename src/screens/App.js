import LogIn from "../components/LogIn";
import SignUp from "../components/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Playground from "./Play";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<SignUp />}>
            {" "}
          </Route>
          <Route exact path="/login" element={<LogIn />}></Route>
          <Route exact path="/playground" element={<Playground />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

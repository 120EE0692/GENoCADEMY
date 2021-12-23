import LogIn from "../components/LogIn";
import SignUp from "../components/SignUp";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<SignUp />}> </Route>
          <Route exact path="/login" element={<LogIn />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

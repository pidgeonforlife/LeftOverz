import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Onboard from "./pages/Onboard";
import SignUp from "./pages/SignUp";
import Discover from "./pages/Discover";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Onboard />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/discover" element={<Discover />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
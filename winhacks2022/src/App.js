import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Onboard from "./pages/Onboard";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Onboard />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
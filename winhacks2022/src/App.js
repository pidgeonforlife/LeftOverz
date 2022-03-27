import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { History } from "history";
import Onboard from "./pages/Onboard";
import SignUp from "./pages/SignUp";
import Discover from "./pages/Discover";
import DiscoverPage from "./pages/DisocverPage";
import Settings from "./pages/Settings";
import Order from "./pages/Order";
import Recipe from "./pages/Recipe";
import Details from "./pages/Details";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Onboard />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/discover" element={<Discover />} />
          <Route exact path="/home" element={<DiscoverPage />} />
          <Route exact path="/settings" element={<Settings />} />
          <Route exact path="/order" element={<Order />} />
          <Route exact path="/recipe" element={<Recipe />} />
          <Route exact path="/details1" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
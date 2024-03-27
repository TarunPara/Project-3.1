import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Task from "./Components/Task";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./routes/Signup";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Signup />} />
          <Route exact path="/task" element={<Task />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;

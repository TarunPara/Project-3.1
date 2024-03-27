import "./App.css";
import Navbar from "./Components/Navbar";
import Task from "./Components/Task";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Signup from "./routes/Signup";
import Login from "./routes/Login";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/task" element={<Task />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

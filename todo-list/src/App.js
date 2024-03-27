import "./App.css";
import Navbar from "./Components/Navbar";
import Task from "./Components/Task";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Signup from "./routes/Signup";
import Login from "./routes/Login";
import Team from "./routes/Team";
import NotFound from "./routes/NotFound";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/task" element={<Task />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

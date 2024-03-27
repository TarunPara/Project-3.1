import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Task from "./Components/Task";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      
      <Task />
      <Footer />
    </div>
  );
}

export default App;

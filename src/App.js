import "./styles/App.css";
import Home from "./pages/Home";
// import { Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
import { useState } from "react";

function App() {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;

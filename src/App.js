import "./styles/App.css";
import Home from "./pages/Home";
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

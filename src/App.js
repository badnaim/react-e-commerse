import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Info from "./components/Info";
import Main from "./components/Main";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Info />
      <Main />
      <Routes>
        <Route path="login" element={<Login />} />
      </Routes>
      {/* <Home /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;

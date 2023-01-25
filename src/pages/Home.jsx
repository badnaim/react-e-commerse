import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/home.css";
import Header from "../components/Header";
// import Info from "../components/Info";
import Main from "../components/Main";
import Login from "./Login";
import Footer from "../components/Footer";
import Dashboard from "./Dashboard";
import { users } from "../util/data";

export default function Home() {
  const [data, setData] = useState(users);
  const [sign, setSign] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  function check(userName, password) {
    // console.log("password:", password);
    // console.log("userName:", userName);
    data.map((user) => {
      if (user.userName === userName && user.password === password) {
        navigate("/");
        setSign(true);
      } else {
        console.log("error");
      }
    });
  }

  return (
    <div className="home">
      <Header sign={sign} userName={userName} />
      {/* <Info /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/login"
          element={
            <Login
              users={data}
              setData={setData}
              check={check}
              userName={userName}
              setUserName={setUserName}
            />
          }
        />
        <Route path="product/:id" element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

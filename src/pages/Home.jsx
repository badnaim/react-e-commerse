import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import Info from "../components/Info";
import Main from "../components/Main";
import Login from "./Login";
import Footer from "../components/Footer";
import Dashboard from "./Dashboard";
import { users } from "../util/data";

export default function Home() {
const [data, setData] = useState(users);
const [sign, setSign] = useState(false);
const navigate = useNavigate();

function check(userName, password) {
  data.map((user) => {
    if(user.userName === userName && user.password === password) {
      navigate("/profile")
      setSign(true)
    } else {
      console.log("error")
    }
  })
}

  return (
    <div>
      <Header sign={sign}/>
      <Info />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login users={data} setData={setData} check={check} />} />
        {/* /* <Route path="/login" element={<Login />} /> */
        /* <Route
          element={
            IsLoggedIn ? (
              <Dashboard path="/dashboard" setLogout={logoutHandler} />
            ) : (
              <Login path="/login" setLogin={loginHandler} />
            )
          }
        /> */}
        
      </Routes>
      <Footer />
    </div>
  );
}

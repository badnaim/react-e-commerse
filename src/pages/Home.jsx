import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import Info from "../components/Info";
import Main from "../components/Main";
import Login from "./Login";
import Footer from "../components/Footer";
import Dashboard from "./Dashboard";
import { users } from "../util/data";

export default function Home() {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(users);

  function loginHandler(userName, password) {
    console.log("loign handler is running");
    userData.map((user) => {
      console.log(user.userName);
      if (user.userName == userName && user.password == password) {
        setIsLoggedIn(true);
      } else {
        console.error("error");
      }
    });
  }

  function logoutHandler() {
    return setIsLoggedIn(false);
  }

  return (
    <div>
      <Header />
      <Info />
      <Main />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route
          path="login"
          element={
            IsLoggedIn ? (
              <Dashboard setLogout={logoutHandler} />
            ) : (
              <Login setLogin={loginHandler} />
            )
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

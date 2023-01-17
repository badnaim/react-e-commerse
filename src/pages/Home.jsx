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

  function LoginCheck(userName, password) {
    users.map((user) => {
      if (user.userName === userName && user.password === password) {
        setIsLoggedIn(true);
      } else {
        console.error("error");
      }
    });
  }

  return (
    <div>
      <Header />
      <Info />
      <Main />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route
          path="Dashboard"
          element={
            IsLoggedIn ? (
              <Dashboard setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Login LoginCheck={LoginCheck} />
            )
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

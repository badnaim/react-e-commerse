import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import Info from "../components/Info";
import Main from "../components/Main";
import Login from "./Login";
import Footer from "../components/Footer";
import Dashboard from "./Dashboard";
import { users } from "../util/data"

export default function Home() {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);

  function LoginCheck(userName, password) {
    users.map((user) => {
      if (user.userName === userName && user.password === password) {
        setIsLoggedIn(true);
        console.log(true)
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
              <Dashboard/>
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


// export const workers = [
//   {
//     userName: "tod",
//     password: "tod",
//   },
//   {
//     userName: "hot",
//     password: "hot",
//   },
//   {
//     userName: "sod",
//     password: "sod",
//   },
//   {
//     userName: "bod",
//     password: "bod",
//   },
// ];

// export const users = [
//   {
//     userName: "bat",
//     password: "12",
//   },
//   {
//     userName: "bold",
//     password: "123",
//   },
//   {
//     userName: "od",
//     password: "1234",
//   },
//   {
//     userName: "mod",
//     password: "12345",
//   },
// ];
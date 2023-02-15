import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../styles/home.css";
// import Info from "../components/Info";
import axios from "axios";
import Footer from "../components/Footer";
import Main from "../components/Main";
import { prodContext } from "../layout/prodContext";
import { UsersContext } from "../layout/UsersContext";
import { users } from "../util/data";
import Dashboard from "./Dashboard";
import Login from "./Login";

export default function Home() {
  // const [myUsers, setMyUsers] = useState(users);
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [sign, setSign] = useState(false);
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:2020/products").then((res) => {
      setData(res.data);
      // console.log("my data from home", res.data)
    });
  }, []);

  // function check(userName, password) {
  // console.log("password:", password);
  // console.log("userName:", userName);

  //   myUsers.map((user) => {
  //     if (user.userName === userName && user.password === password) {
  //       navigate("/");
  //       setSign(true);
  //     } else {
  //       console.log("error");
  //     }
  //   });
  // }

  return (
    <div className="home">
      <UsersContext.Provider
        value={{ users, setUsers, sign, setSign, userName, setUserName }}
      >
        <Header sign={sign} />

        {/* <Info /> */}
        <prodContext.Provider value={{ data }}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/login"
              element={
                <Login
                // users={data}
                // setUsers={setMyUsers}
                // check={check}
                // userName={userName}
                // setUserName={setUserName}
                />
              }
            />
            <Route path="product/:id" element={<Dashboard />} />
          </Routes>
        </prodContext.Provider>
        <Footer />
      </UsersContext.Provider>
    </div>
  );
}

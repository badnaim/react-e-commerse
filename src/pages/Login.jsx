// import React, { useContext } from "react";
import Img5 from "../images/Img5";
import Img4 from "../images/Img4";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/login.css";
import { UsersContext } from "../layout/UsersContext";
import { useContext } from "react";
// import { prodContext } from "../layout/prodContext";
// import axios from "axios";

export default function Login(props) {
  const { users, setUsers } = useContext(UsersContext);
  const { sign, setSign } = useContext(UsersContext);
  const { userName, setUserName } = useContext(UsersContext);
  // const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const { check } = props;
  const navigate = useNavigate();
  // console.log(users);

  function loginHandler(e) {
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    e.preventDefault();

    const isValid = users.some(
      (user) => user.userName === userName && user.password === password
    );
    console.log("isvalid", isValid);
    if (isValid) {
      setSign(true);
      setUserName(userName);
      navigate("/");
      localStorage.setItem("user", { name: "bat", id: " as" });
    }
  }
  // console.log(userName);
  // function check(userName, password) {
  //   console.log("password:", password);
  //   console.log("userName:", userName);

  //   users.map((user) => {
  //     if (user.userName === userName && user.password === password) {
  //       navigate("/");
  //       setSign(true);
  //     } else {
  //       console.log("error");
  //     }
  //   });
  // }

  return (
    <div className="fullScreen">
      <div className="container">
        <div className="firstLineOfBox">
          <Img5 />
          <a
            onClick={() => {
              navigate("/");
            }}
          >
            <Img4 />
          </a>
        </div>
        <form onSubmit={loginHandler}>
          <div id="input">
            <img id="sameImg" src="user.png" />
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              name="userName"
              id="eMail"
              type="text"
              placeholder="И-мэйл эсвэл Утасны дугаар"
            />
          </div>
          <div id="input">
            <img id="sameImg" src="unlock.png" />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              id="password"
              size="20"
              maxLength="20"
              type="password"
              placeholder="Нууц үг"
              required
            />
            <a>
              <p id="forgottenPass">Нууц үгээ мартсан уу?</p>
            </a>
            <button
              type="submit"
              id="blueButton"
            // onClick={() => setLogin(userName, password)}
            >
              Нэвтрэх
            </button>
          </div>
        </form>
        <div id="line"></div>
        <p id="abs">эсвэл</p>
        <button id="greenButton">Бүртгүүлэх</button>
      </div>
    </div>
  );
}

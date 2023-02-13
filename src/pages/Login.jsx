// import React, { useContext } from "react";
import Img5 from "../images/Img5";
import Img4 from "../images/Img4";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/login.css";
// import { prodContext } from "../layout/prodContext";
import axios from "axios";

export default function Login(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const { check } = props;
  const navigate = useNavigate();

  function loginHandler(e) {
    e.preventDefault();
    // check(e.target.userName.value, e.target.password.value);
    axios
      .post("http://localhost:2020/login", {
        userName,
        password,
      })
      .then((res) => {
        alert(JSON.stringify(alert));
      });
  }

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

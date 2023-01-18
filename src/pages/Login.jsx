import React from "react";
import Img5 from "../images/Img5";
import Img4 from "../images/Img4";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/login.css";

export default function Login(prop) {
  const navigate = useNavigate();
  const urlChangeHandler = () => {
    navigate("Home");
  };

  const { LoginCheck } = prop;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function loginHandler(e) {
    e.preventDefault();
    setUserName(e.target.userName.value);
    setPassword(e.target.password.value);
  }

  console.log("password:", password);
  console.log("userName:", userName);

  return (
    <div className="fullScreen">
      <div className="container">
        <div className="firstLineOfBox">
          <Img5 />
          <a onClick={urlChangeHandler}>
            <Img4 />
          </a>
        </div>
        <form>
          <div id="input">
            <img id="sameImg" src="user.png" />
            <input
              name="userName"
              id="eMail"
              type="text"
              placeholder="И-мэйл эсвэл Утасны дугаар"
            />
          </div>
          <div id="input">
            <img id="sameImg" src="unlock.png" />
            <input
              name="password"
              id="password"
              type="text"
              placeholder="Нууц үг"
            />
            <a>
              <p id="forgottenPass">Нууц үгээ мартсан уу?</p>
            </a>
            <button type="submit" id="blueButton">
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

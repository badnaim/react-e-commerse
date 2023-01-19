import React from "react";
import Img5 from "../images/Img5";
import Img4 from "../images/Img4";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { users } from "../util/data"
import "../styles/login.css";

export default function Login(prop) {
  const navigate = useNavigate();
  const urlChangeHandler = () => {
    navigate("Home");
  };

  const { setLogin } = prop;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const [IsLoggedIn, setIsLoggedIn] = useState(false);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("username:", userName)
  //   console.log("password:", password)
  //   console.log(users);
  //   users.map((user) => {
  //     if (user.userName === userName && user.password === password) {
  //       setIsLoggedIn(true);
  //       console.log("zow bn")
  //     } else {
  //       console.error("error");
  //     }
  // })

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
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              id="password"
              type="text"
              placeholder="Нууц үг"
            />
            <a>
              <p id="forgottenPass">Нууц үгээ мартсан уу?</p>
            </a>
            <button
              type="submit"
              id="blueButton"
              onClick={() => setLogin(userName, password)}
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

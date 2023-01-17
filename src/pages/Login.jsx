import React from "react";
import Img5 from "../images/Img5"
import Img4 from "../images/Img4"
import Img6 from "../images/Img6"
import Img7 from "../images/Img7"
import Img8 from "../images/Img8"
import "../styles/login.css"

export default function Login() {
  return <div className="fullScreen">
    <div className="container">
      <div className="firstLineOfBox">
        <Img5 />
        <a><Img4 /></a>
      </div>
      <form>
          <div id="input">
            <img id="sameImg" src="user.png"/>
            <input id="eMail" type="text" placeholder="И-мэйл эсвэл Утасны дугаар" />
          </div>
          <div id="input">
            <img id="sameImg" src="unlock.png"/>
            <input id="password" type="text" placeholder="Нууц үг"/>
            <img id="oddImg" src="view.png"/>
          </div>
      </form>
      <p>Нууц үгээ мартсан уу?</p>
      <button>Нэвтрэх</button>
      <p>эсвэл</p>
      <button>Бүртгүүлэх</button>
    </div>
    </div>;
}

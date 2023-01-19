import "../styles/header.css";
import Img1 from "../images/Img1";
import Img2 from "../images/Img2";
import Img3 from "../images/Img3";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const urlChangeHandler = () => {
    navigate("login");
  };
  return (
    <header>
      <div className="navSec">
        <a className="onClickLogo" onClick={() => {
          navigate("/")
        }}><Img1 /></a>
        <div className="searchSec">
          <input placeholder="Search any things" />
          <button>Search</button>
        </div>
        <div className="twoButton">
          <div className="signIn">
            <Img2 />
            <button onClick={urlChangeHandler}>Sign in</button>
          </div>
          <div>
            <Img3 />
          </div>
        </div>
      </div>
    </header>
  );
}

import "../styles/header.css";
import Img1 from "../images/Img1";
import Img2 from "../images/Img2";
import Img3 from "../images/Img3";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header(props) {
  const navigate = useNavigate();
  const [val, setVal] = useState("");
  function search() {
    navigate(`/search/${val}`);
  }

  // console.log(props.userName);

  return (
    <header>
      <div className="navSec">
        <a
          className="onClickLogo"
          onClick={() => {
            navigate("/");
          }}
        >
          <Img1 />
        </a>
        <div className="searchSec">
          <input
            type="text"
            placeholder="Search any things"
            onChange={(e) => setVal(e.target.value)}
          />
          <button onClick={search}>Search</button>
        </div>

        {props.sign ? (
          <div className="twoButton">
            <div className="signIn">
              <a href="">{props.userName}</a>
              <a href="/">Log out</a>
            </div>
            <a href="">
              <Img2 />
            </a>
          </div>
        ) : (
          <div className="twoButton">
            <div className="signIn">
              <a href="login">Sign In</a>
            </div>
            <a href="">
              <Img3 />
            </a>
          </div>
        )}

        {/* <div className="twoButton">
          <div className="signIn">
            <Img2 />
            <button onClick={urlChangeHandler}>Sign in</button>
          </div>
          <div>
            <Img3 />
          </div>
        </div> */}
      </div>
    </header>
  );
}

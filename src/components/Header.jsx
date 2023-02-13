import "../styles/header.css";
import Img1 from "../images/Img1";
import Img2 from "../images/Img2";
import Img3 from "../images/Img3";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header(props) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  console.log(search);

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
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>Search</button>
        </div>

        {props.sign ? (
          <div className="twoButton">
            <div className="signIn">
              <a href="">
                <div className="profile">
                  {props.userName}
                  <Img2 />
                </div>
              </a>
              <a href="/">Log out</a>
            </div>
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

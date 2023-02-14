import "../styles/header.css";
import Img1 from "../images/Img1";
import Img2 from "../images/Img2";
import Img3 from "../images/Img3";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useContext } from "react";
import { UsersContext } from "../layout/UsersContext";
import { useEffect } from "react";
import axios from "axios";

export default function Header(props) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const { users, setUsers } = useContext(UsersContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios.get("http://localhost:2020/users").then((res) => {
      console.log("users", res.data);
      setUsers(res.data);
    });
  }, []);
  // console.log(users);

  // console.log(search);

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
            <a onClick={handleShow}>
              <Img3 />
            </a>
            <Offcanvas
              show={show}
              onHide={handleClose}
              placement={"end"}
              name={"end"}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements
                you have chosen. Like, text, images, lists, etc.
              </Offcanvas.Body>
            </Offcanvas>
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

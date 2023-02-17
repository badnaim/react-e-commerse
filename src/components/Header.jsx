import "../styles/header.css";
import Img1 from "../images/Img1";
import Img2 from "../images/Img2";
import Img3 from "../images/Img3";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GetProdIntoBasket from "./subcomp/GetProdIntoBasket";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useContext } from "react";
import { UsersContext } from "../layout/UsersContext";
import { useEffect } from "react";
import axios from "axios";
import { useBasketContext } from "../layout/basketContext";

export default function Header(props) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const { users, setUsers } = useContext(UsersContext);
  const { userName, setUserName } = useContext(UsersContext);
  const { sign, setSign } = useContext(UsersContext);
  const { basketProd, setBasketProd } = useBasketContext();

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

  // console.log(userName);

  console.log("basketProd", basketProd);

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

        {sign ? (
          <div className="twoButton">
            <div className="signIn">
              <a href="">
                <div className="profile">
                  {userName}
                  <Img2 />
                </div>
              </a>
              <a onClick={handleShow}>
                <Img3 />
              </a>
              <Offcanvas
                id="offCanvasOfHeader"
                show={show}
                onHide={handleClose}
                placement={"end"}
                name={"end"}
              >
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <Offcanvas.Body>
                  <GetProdIntoBasket />
                </Offcanvas.Body>
              </Offcanvas>
              <a href="/">Log out</a>
            </div>
          </div>
        ) : (
          <div className="twoButton">
            <div className="signIn">
              <a href="login">Sign In</a>
              <a onClick={handleShow}>
                <Img3 />
              </a>
              <Offcanvas
                id="offCanvasOfHeader"
                show={show}
                onHide={handleClose}
                placement={"end"}
                name={"end"}
              >
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <Offcanvas.Body>
                  <GetProdIntoBasket />
                </Offcanvas.Body>
              </Offcanvas>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

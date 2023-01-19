import React from "react";
import Img1 from "../images/Img1"
import Img9 from "../images/Img9"
import Img10 from "../images/Img10"
import Img11 from "../images/Img11"
import "../styles/footer.css";

export default function Footer() {
  return <footer>
    <div className="footerOne">
      <a href="#top"><Img1 /></a>
    </div>
    <div className="footerTwo">
      <div id="fOne">
        <Img9 />
        <Img10 />
        <Img11 />
      </div>
      <div id="fTwo"><p>© 2023 Tuulai. Built using AQUA and Tuulai Theme. 
Terms and Conditions</p></div>
    </div>
  </footer>;
}

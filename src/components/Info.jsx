import "../styles/info.css";

export default function Info() {
  return (
    <div className="info">
      <div className="innerInfo">
        <div className="leftSide">
          <div className="leftSideInfo">
            <h1>CANON</h1>
            <h1>camera</h1>
          </div>
          <div className="leftSIdeButtons">
            <button id="buttonOne">Shop now</button>
            <button id="buttonTwo">View more</button>
          </div>
        </div>
        <div>
          <img src="Group.svg"></img>
        </div>
      </div>
    </div>
  );
}

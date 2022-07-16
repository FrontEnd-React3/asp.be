import "./header.css";
import hero from "./images/reactt2.png";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">To React or not to React, that's the question...</span>
      </div>
      <img
        className="headerImg"
        src={hero}
        alt=""
      />
    </div>
  );
}

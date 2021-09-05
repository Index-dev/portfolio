import React from "react";
import "./style.css";

const moveTo = () => {
  // document.getElementById("Profile").scrollTo(0, 0);
  window.scrollTo({ top: 1850, left: 0, behavior: "smooth" });
  w;
};

const Main = () => {
  return (
    <div className="container">
      <div className="txt_jobtitle">DEV. </div>
      <div className="txt_nickname">DAISY </div>
      <div className="btnClick" onClick={moveTo}>
        CLICK
      </div>
    </div>
  );
};

export default Main;

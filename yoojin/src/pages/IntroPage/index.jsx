import React from "react";
import "./style.css";
import Profile from "../../components/Profile";
import ScrollBtn from "../../components/ScrollBtn";

const Intro = () => {
  return (
    <div id="profile" className="container">
      <div> Who am I?</div>
      <div>I am...</div>
      <Profile />
      <ScrollBtn />
    </div>
  );
};

export default Intro;

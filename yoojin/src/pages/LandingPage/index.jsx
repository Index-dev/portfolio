import React from "react";
import "./style.css";
import TextAnimation from "../../components/TextAnimation.jsx";

const content = "hello, Dev. Daisy speaking";
var text = document.querySelector(".typing");

const Landing = () => {
  const type_content = () => {
    const content = "hello, Dev. Daisy speaking";
    var index = 0;
    var arr = "";
    for (index = 0; i < content.length(); index++) {}
    return arr;
  };
  // setInterval(type_content, 500);
  return (
    <div className="container">
      <div className="typing">Hello! Here, Dev. Daisy speaking 📞</div>
      <TextAnimation />
    </div>
  );
};

export default Landing;

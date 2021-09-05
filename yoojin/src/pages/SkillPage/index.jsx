import React from "react";
import "./style.css";

const Skill = () => {
  return (
    <div className="container">
      <div className="skill_background">
        <div className="skill_FE">
          <div className="skill_tab">ForntEnd</div>
          <div className="skill_content">
            <div>HTML / CSS / Javascript</div>
            <div>React</div>
            <div>Vue</div>
          </div>
        </div>
        <div className="skill_BE">
          <div className="skill_tab">BackEnd</div>
          <div className="skill_content">
            <div>Spring</div>
            <div>Django</div>
          </div>
        </div>
        <div className="skill_DevOps">
          <div className="skill_tab">DevOps</div>
          <div className="skill_content">DevOps</div>
        </div>
      </div>
    </div>
  );
};

export default Skill;

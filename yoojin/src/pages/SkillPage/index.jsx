import React from "react";
import "./style.css";
import ScrollBtn from "../../components/ScrollBtn";

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
            <div>Express</div>
            <div>MySql</div>
            <div>Maria</div>
          </div>
        </div>
        <div className="skill_DevOps">
          <div className="skill_tab">DevOps</div>
          <div className="skill_content">
            <div>Git</div>
            <div>GitLab</div>
            <div>Jira</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;

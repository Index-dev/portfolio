import React from "react";
import "./App.css";
import Main from "./pages/MainPage";
import Skill from "./pages/SkillPage";
import Intro from "./pages/IntroPage";
import Contact from "./pages/ContactPage";
import Project from "./pages/ProjectPage";
import Landing from "./pages/LandingPage";

const App = () => {
  return (
    <div className="App">
      <Landing />
      <Main />
      <Intro />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
};

export default App;

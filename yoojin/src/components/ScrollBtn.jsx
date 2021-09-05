import React from "react";
import styled, { keyframes } from "styled-components";

const moveTo = () => {
  window.scrollTo({ top: 2780, left: 0, behavior: "smooth" });
  w;
};

const ScrollBtn = () => {
  return (
    <Wrapper>
      <div className="btn" onClick={moveTo}></div>
    </Wrapper>
  );
};

export default ScrollBtn;

const Wrapper = styled.div`
  display: flex;
  div {
    width: 3rem;
    height: 3rem;
    margin: 3rem;
    border-radius: 50%;
    background-color: #f36d5e;
    transition: 0.5s;
  }
  div:hover {
    background-color: #2babc5;
  }
`;

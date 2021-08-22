import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

function RectangleText() {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", resizeSVG);
  }, []);

  function resizeSVG() {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
  }

  const text = "Eumericano's Portfolio";
  const textPath = `<textPath xlink:href="#first-rect">${text}</textPath>`;
  return (
    <Container>
      <SVG
        viewBox={`0 0 ${screenWidth} ${screenHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          id="first-rect"
          d={`M1 ${screenHeight}V1H${screenWidth}V${screenHeight}H1Z`}
        />
        <Text dangerouslySetInnerHTML={{ __html: textPath }}></Text>
      </SVG>
    </Container>
  );
}

export default RectangleText;

const Container = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
`;

const SVG = styled.svg`
  width: 100%;
  height: 100%;
`;

const Path = styled.path`
  stroke: red;
  stroke-width: 3;
`;

const Text = styled.text`
  stroke: red;
`;

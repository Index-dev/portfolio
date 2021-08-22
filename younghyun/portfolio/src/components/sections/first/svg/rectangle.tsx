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

  const text =
    "HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD ";
  const textPath = `<textPath xlink:href="#first-rect">${text}</textPath>`;

  const fontSize = window.innerWidth * 0.03;

  return (
    <Container>
      <SVG
        viewBox={`0 0 ${screenWidth} ${screenHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          id="first-rect"
          d={`M${fontSize} ${screenHeight - fontSize}V${fontSize}H${
            screenWidth - fontSize
          }V${screenHeight - fontSize}H${fontSize}Z`}
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
  /* stroke: red; */
`;

const Text = styled.text`
  stroke: ${({ theme }: { theme: ThemeIState }) => theme.primary};
  font-size: 3vw;
`;

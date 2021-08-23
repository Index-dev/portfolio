import React, { useState, useRef } from "react";
import { useEffect } from "react";
import styled from "styled-components";

function RectangleText(props: propsIState) {
  const { secContRef } = props;

  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState<number>(window.innerHeight);

  const text =
    "HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD ";

  const textPath = useRef<string>(
    `<textPath id="first-textPath" xlink:href="#first-rect">${text}</textPath>`
  );

  useEffect(() => {
    window.addEventListener("resize", resizeSVG);
  }, []);

  function resizeSVG() {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
  }

  useEffect(() => {
    textPath.current = `<textPath id="first-textPath" xlink:href="#first-rect">${text}</textPath>`;
    const textPathDOM = document.querySelector("#first-textPath");

    function updateTextPathOffset(offset: number) {
      textPathDOM?.setAttribute("startOffset", `${offset}`);
    }
    function onScroll() {
      requestAnimationFrame(function () {
        if (secContRef.current) {
          updateTextPathOffset(secContRef.current.scrollTop * -1.5);
        }
      });
    }

    if (secContRef.current) {
      secContRef.current.addEventListener("scroll", onScroll);
    }
  }, [secContRef]);

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
        <Text
          dangerouslySetInnerHTML={{ __html: textPath.current as string }}
        ></Text>
      </SVG>
    </Container>
  );
}

export default RectangleText;

interface propsIState {
  secContRef: React.RefObject<HTMLDivElement>;
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
`;

const SVG = styled.svg`
  width: 100%;
  height: 100%;
`;

const Path = styled.path``;

const Text = styled.text`
  stroke: ${({ theme }: { theme: ThemeIState }) => theme.primary};
  font-size: 3vw;
`;

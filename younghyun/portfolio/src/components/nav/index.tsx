import React, { useEffect, useRef } from "react";
import styled from "styled-components";

function Navigation(props: propsIState) {
  const { secContRef, toggleMenu } = props;

  const navRef = useRef<HTMLDivElement>(null);
  const topPathRef = useRef<SVGPathElement>(null);
  const middlePathRef = useRef<SVGPathElement>(null);
  const bottomPathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (navRef.current) {
      navRef.current.addEventListener("mouseover", () => {
        if (topPathRef.current) {
          topPathRef.current.style.strokeWidth = "8";
        }
        if (middlePathRef.current) {
          middlePathRef.current.style.strokeWidth = "8";
        }
        if (bottomPathRef.current) {
          bottomPathRef.current.style.strokeWidth = "8";
        }
      });
      navRef.current.addEventListener("mouseout", () => {
        if (topPathRef.current) {
          topPathRef.current.style.strokeWidth = "4";
        }
        if (middlePathRef.current) {
          middlePathRef.current.style.strokeWidth = "4";
        }
        if (bottomPathRef.current) {
          bottomPathRef.current.style.strokeWidth = "4";
        }
      });
    }
  }, [navRef, topPathRef, middlePathRef, bottomPathRef]);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        if (secContRef.current) {
          if (navRef.current) {
            const absolutePoint = window.innerHeight * 0.1285;
            const fixedPoint = window.innerHeight * 0.035;
            if (absolutePoint > secContRef.current.scrollTop + fixedPoint) {
              navRef.current.style.position = "absolute";
              navRef.current.style.top = "13vh";
              navRef.current.style.right = "5vw";
              if (topPathRef.current) {
                topPathRef.current.style.strokeDashoffset = "44.5";
              }
              if (middlePathRef.current) {
                middlePathRef.current.style.strokeDashoffset = "44.5";
              }
              if (bottomPathRef.current) {
                bottomPathRef.current.style.strokeDashoffset = "44.5";
              }
            } else {
              navRef.current.style.position = "fixed";
              navRef.current.style.top = "3vh";
              navRef.current.style.right = "5vw";
              if (topPathRef.current) {
                topPathRef.current.style.strokeDashoffset = "0";
              }
              if (middlePathRef.current) {
                middlePathRef.current.style.strokeDashoffset = "0";
              }
              if (bottomPathRef.current) {
                bottomPathRef.current.style.strokeDashoffset = "0";
              }
            }
          }
        }
      },
      true
    );
  });

  return (
    <Container ref={navRef} onClick={toggleMenu}>
      <SVG viewBox="0 0 45 40" xmlns="http://www.w3.org/2000/svg">
        <Path d="M0 2.5H44.5" ref={topPathRef} />
        <Path d="M0 19.5H44.5" ref={middlePathRef} />
        <Path d="M0 37.5H44.5" ref={bottomPathRef} />
      </SVG>
    </Container>
  );
}

export default Navigation;

interface propsIState {
  toggleMenu: () => void;
  secContRef: React.RefObject<HTMLDivElement>;
}

const Container = styled.div`
  min-width: 40px;
  width: 5vw;
  max-width: 50px;

  min-height: 40px;
  height: 5vw;
  max-height: 50px;

  position: absolute;
  top: 13vh;
  right: 5vw;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: right 0.1s linear;

  cursor: pointer;
  z-index: 3;
`;

const SVG = styled.svg`
  width: 70%;
  height: 70%;

  fill: ${({ theme }: { theme: ThemeIState }) => theme.third};

  transition: all 0.2s linear;

  &:hover {
    transform: rotate(-18deg);
  }
`;

const Path = styled.path`
  stroke: ${({ theme }: { theme: ThemeIState }) => theme.primary};
  stroke-width: 4;

  transition: all 0.1s linear, stroke-dashoffset 0.2s linear,
    stroke-width 0.2s linear;

  stroke-dasharray: 44.5;
  stroke-dashoffset: 0;

  transform: translate3d(0, 10, 0);
`;

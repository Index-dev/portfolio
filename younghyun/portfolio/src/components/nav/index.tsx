import React, { useMemo } from "react";
import styled from "styled-components";

function Navigation(props: propsIState) {
  const { toggleMenu, navRefs } = props;
  const { navRef, topPathRef, middlePathRef, bottomPathRef } = navRefs;
  useMemo(() => {
    if (navRef.current) {
      navRef.current.addEventListener("mouseover", () => {
        if (topPathRef.current) {
          topPathRef.current.style.opacity = "0.9";
          topPathRef.current.style.strokeWidth = "6";
        }
        if (middlePathRef.current) {
          middlePathRef.current.style.opacity = "0.9";
          middlePathRef.current.style.strokeWidth = "6";
        }
        if (bottomPathRef.current) {
          bottomPathRef.current.style.opacity = "0.9";
          bottomPathRef.current.style.strokeWidth = "6";
        }
      });
      navRef.current.addEventListener("mouseout", () => {
        if (topPathRef.current) {
          topPathRef.current.style.opacity = "0.5";
          topPathRef.current.style.strokeWidth = "4";
        }
        if (middlePathRef.current) {
          middlePathRef.current.style.opacity = "0.5";
          middlePathRef.current.style.strokeWidth = "4";
        }
        if (bottomPathRef.current) {
          bottomPathRef.current.style.opacity = "0.5";
          bottomPathRef.current.style.strokeWidth = "4";
        }
      });
    }
  }, [navRef, topPathRef, middlePathRef, bottomPathRef]);

  return (
    <Container ref={navRefs.navRef} onClick={toggleMenu}>
      <SVG viewBox="0 0 45 40" xmlns="http://www.w3.org/2000/svg">
        <Path d="M0 2.5H44.5" ref={navRefs.topPathRef} />
        <Path d="M0 19.5H44.5" ref={navRefs.middlePathRef} />
        <Path d="M0 37.5H44.5" ref={navRefs.bottomPathRef} />
      </SVG>
    </Container>
  );
}

export default Navigation;

interface propsIState {
  toggleMenu: () => void;
  navRefs: navRefsIState;
}

interface navRefsIState {
  navRef: React.RefObject<HTMLDivElement>;
  topPathRef: React.RefObject<SVGPathElement>;
  middlePathRef: React.RefObject<SVGPathElement>;
  bottomPathRef: React.RefObject<SVGPathElement>;
}

const Container = styled.div`
  min-width: 40px;
  width: 5vw;
  max-width: 50px;

  min-height: 40px;
  height: 5vw;
  max-height: 50px;

  position: relative;
  top: 13vh;
  right: 5vw;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: right 0.1s linear;

  cursor: pointer;
`;

const SVG = styled.svg`
  width: 70%;
  height: 70%;

  fill: ${({ theme }: { theme: ThemeIState }) => theme.primary};

  transition: all 0.2s linear;

  &:hover {
    transform: rotate(-18deg);
  }
`;

const Path = styled.path`
  stroke: ${({ theme }: { theme: ThemeIState }) => theme.primary};
  stroke-width: 4;

  opacity: 0.5;
  transition: transform 0.1s linear, opacity 0.1s linear,
    stroke-dashoffset 0.2s linear;

  stroke-dasharray: 44.5;
  stroke-dashoffset: 0;

  transform: translate3d(0, 10, 0);
`;

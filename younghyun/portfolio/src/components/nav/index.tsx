import React from "react";
import styled from "styled-components";

function Navigation(props: propsIState) {
  const { toggleMenu, navRefs } = props;
  const { navRef, topPathRef, middlePathRef, bottomPathRef } = navRefs;

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
  navRefs: navRefsIState;
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
  stroke: ${({ theme }: { theme: ThemeIState }) => theme.third};
  stroke-width: 4;

  transition: transform 0.1s linear, opacity 0.1s linear;
  transition: stroke-dashoffset 0.2s linear;

  stroke-dasharray: 44.5;
  stroke-dashoffset: 0;

  transform: translate3d(0, 10, 0);
`;

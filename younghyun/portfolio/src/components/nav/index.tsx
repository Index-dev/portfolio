import React, { useEffect, forwardRef, useRef } from "react";
import styled from "styled-components";

const Navigation = forwardRef<HTMLDivElement, propsIState>((props, ref) => {
  const { toggleMenu } = props;
  const navRef = ref as React.RefObject<HTMLDivElement>;
  const topPathRef = useRef<SVGPathElement>(null);
  const middlePathRef = useRef<SVGPathElement>(null);
  const bottomPathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (navRef.current) {
      navRef.current.addEventListener("mouseover", () => {
        if (topPathRef.current) {
          topPathRef.current.style.opacity = "0.9";
          topPathRef.current.style.strokeWidth = "6";
        }
        if (middlePathRef.current) {
          middlePathRef.current.style.strokeDasharray = "0 17 10.5 17";
          middlePathRef.current.style.strokeWidth = "4";
        }
        if (bottomPathRef.current) {
          bottomPathRef.current.style.opacity = "0.9";
          bottomPathRef.current.style.strokeWidth = "6";
        }
      });
      navRef.current.addEventListener("mouseout", () => {
        if (topPathRef.current) {
          topPathRef.current.style.opacity = "0.7";
          topPathRef.current.style.strokeWidth = "5";
        }
        if (middlePathRef.current) {
          middlePathRef.current.style.strokeDasharray = "0 0 44.5 0";
          middlePathRef.current.style.strokeWidth = "5";
        }
        if (bottomPathRef.current) {
          bottomPathRef.current.style.opacity = "0.7";
          bottomPathRef.current.style.strokeWidth = "5";
        }
      });
    }
  }, [navRef]);

  return (
    <Container ref={ref} onClick={toggleMenu}>
      <SVG viewBox="0 0 45 40" xmlns="http://www.w3.org/2000/svg">
        <Path d="M0 2.5H44.5" ref={topPathRef} />
        <Path
          d="M0 19.5H44.5"
          ref={middlePathRef}
          strokeDasharray="0 0 44.5 0"
        />
        <Path d="M0 37.5H44.5" ref={bottomPathRef} />
      </SVG>
    </Container>
  );
});

export default Navigation;

interface propsIState {
  toggleMenu: () => void;
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

  transition: all 0.4s linear;

  &:hover {
    transform: rotateX(180deg);
  }
`;

const Path = styled.path`
  stroke: ${({ theme }: { theme: ThemeIState }) => theme.primary};
  stroke-width: 5;

  opacity: 0.7;
  transition: all 0.2s linear;

  transform: translate3d(0, 10, 0);
`;

import React from "react";
import styled, { css, keyframes } from "styled-components";

function Content(props: propsIState) {
  const { isPC, isTablet, content, duration, animationDuration, reversed } =
    props;

  return (
    <Container isPC={isPC} isTablet={isTablet}>
      <FrontContent animationDuration={animationDuration} reversed={reversed}>
        {Array(5)
          .fill(content)
          .map((content) => {
            return (
              <Span isPC={isPC} isTablet={isTablet}>
                &nbsp;{content}&nbsp;
              </Span>
            );
          })}
      </FrontContent>
      <BehindContent animationDuration={animationDuration} reversed={reversed}>
        {Array(5)
          .fill(content)
          .map((content) => {
            return (
              <Span isPC={isPC} isTablet={isTablet}>
                &nbsp;{content}&nbsp;
              </Span>
            );
          })}
      </BehindContent>
    </Container>
  );
}

export default Content;

interface propsIState {
  isPC: boolean;
  isTablet: boolean;
  content: string;
  duration: string;
  animationDuration: number;
  reversed: boolean;
}

const Container = styled.div<{ isPC: boolean; isTablet: boolean }>`
  width: 100%;

  display: flex;

  font-size: ${(props) =>
    props.isPC ? "12vw" : props.isTablet ? "16vw" : "20vw"};

  overflow: hidden;

  margin: ${(props) =>
    props.isPC ? "0.2em 0" : props.isTablet ? "0.7em 0" : "1em 0"}em;
`;

const frontForward = keyframes`
   0% {
        transform: translate3d(100%, 0, 0);
    }
    100% {
        transform: translate3d(-100%, 0, 0);
    }
`;
const behindForward = keyframes`
  0% {
        transform: translate3d(0, 0, 0);
    }
    100% {
        transform: translate3d(-200%, 0, 0);
    }
`;
const frontBackward = keyframes`
   0% {
        transform: translate3d(-100%, 0, 0);
    }
    100% {
        transform: translate3d(100%, 0, 0);
    }
`;
const behindBackward = keyframes`
   0% {
       transform: translate3d(-200%, 0, 0);
    }
    100% {
        transform: translate3d(0, 0, 0);
    }
`;

const FrontContent = styled.div<{
  animationDuration: number;
  reversed: boolean;
}>`
  text-transform: uppercase;
  ${(props) =>
    props.reversed
      ? css`
          animation: ${frontBackward} ${props.animationDuration}s linear
            infinite;
          animation-delay: -${props.animationDuration}s;
        `
      : css`
          animation: ${frontForward} ${props.animationDuration}s linear infinite;
          animation-delay: -${props.animationDuration}s;
        `}
`;
const BehindContent = styled.div<{
  animationDuration: number;
  reversed: boolean;
}>`
  text-transform: uppercase;
  ${(props) =>
    props.reversed
      ? css`
          animation: ${behindBackward} ${props.animationDuration}s linear
            infinite;
          animation-delay: -${props.animationDuration / 2}s;
        `
      : css`
          animation: ${behindForward} ${props.animationDuration}s linear
            infinite;
          animation-delay: -${props.animationDuration / 2}s;
        `}
`;

const Span = styled.span<{ isPC: boolean; isTablet: boolean }>`
  color: transparent;

  -webkit-text-stroke: ${(props) =>
    props.isPC ? "3px" : props.isTablet ? "2px" : "1px"};
  -webkit-text-stroke-color: ${({ theme }: { theme: ThemeIState }) =>
    theme.primary};

  transition: all 0.2s;

  cursor: pointer;
  &:hover {
    color: ${({ theme }: { theme: ThemeIState }) => theme.primary};
  }
`;

import React from "react";
import styled, { css, keyframes } from "styled-components";

function Content(props: propsIState) {
  const { isPC, isTablet, content, duration, reversed, setDisplayPopUp } =
    props;

  return (
    <Container isPC={isPC} isTablet={isTablet}>
      <FrontContent duration={duration} reversed={reversed}>
        {Array(5)
          .fill(content)
          .map((content, index) => {
            return (
              <Span
                key={`forward-${index}`}
                isPC={isPC}
                isTablet={isTablet}
                onClick={() => setDisplayPopUp(true)}
              >
                &nbsp;{content}&nbsp;
              </Span>
            );
          })}
      </FrontContent>
      <BehindContent duration={duration} reversed={reversed}>
        {Array(5)
          .fill(content)
          .map((content, index) => {
            return (
              <Span
                key={`behind-${index}`}
                isPC={isPC}
                isTablet={isTablet}
                onClick={() => setDisplayPopUp(true)}
              >
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
  duration: number;
  reversed: boolean;
  setDisplayPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const Container = styled.div<{ isPC: boolean; isTablet: boolean }>`
  width: 100%;

  display: flex;

  font-size: ${(props) =>
    props.isPC ? "12vw" : props.isTablet ? "16vw" : "20vw"};

  overflow: hidden;

  margin: ${(props) =>
    props.isPC ? "0.2em 0" : props.isTablet ? "0.7em 0" : "1em 0"}em;

  -webkit-tap-highlight-color: transparent;
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
  duration: number;
  reversed: boolean;
}>`
  text-transform: uppercase;
  ${(props) =>
    props.reversed
      ? css`
          animation: ${frontBackward} ${props.duration}s linear infinite;
          animation-delay: -${props.duration}s;
        `
      : css`
          animation: ${frontForward} ${props.duration}s linear infinite;
          animation-delay: -${props.duration}s;
        `}
`;
const BehindContent = styled.div<{
  duration: number;
  reversed: boolean;
}>`
  text-transform: uppercase;
  ${(props) =>
    props.reversed
      ? css`
          animation: ${behindBackward} ${props.duration}s linear infinite;
          animation-delay: -${props.duration / 2}s;
        `
      : css`
          animation: ${behindForward} ${props.duration}s linear infinite;
          animation-delay: -${props.duration / 2}s;
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

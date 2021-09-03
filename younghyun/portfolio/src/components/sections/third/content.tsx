import React from "react";
import styled from "styled-components";

function Content(props: propsIState) {
  const { isPC, isTablet, content, duration, animationDuration, reverse } =
    props;

  return (
    <Container isPC={isPC} isTablet={isTablet}>
      <FrontContent>
        {Array(3)
          .fill(content)
          .map((content) => {
            return (
              <Span isPC={isPC} isTablet={isTablet}>
                &nbsp;{content}&nbsp;
              </Span>
            );
          })}
      </FrontContent>
      <BehindContent>
        {Array(3)
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
  reverse: boolean;
}

const Container = styled.div<{ isPC: boolean; isTablet: boolean }>`
  width: 100%;

  font-size: ${(props) =>
    props.isPC ? "12vw" : props.isTablet ? "16vw" : "20vw"};

  overflow: hidden;
`;

const FrontContent = styled.div``;
const BehindContent = styled.div``;

const Span = styled.span<{ isPC: boolean; isTablet: boolean }>`
  color: transparent;

  -webkit-text-stroke: ${(props) =>
    props.isPC ? "3px" : props.isTablet ? "2px" : "1px"};
  -webkit-text-stroke-color: ${({ theme }: { theme: ThemeIState }) =>
    theme.primary};

  transition: all 0.2s;
  &:hover {
    color: ${({ theme }: { theme: ThemeIState }) => theme.primary};
  }
`;

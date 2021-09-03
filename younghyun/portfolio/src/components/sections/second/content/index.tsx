import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

import TypingEffect from "components/typingEffect";

function Content(props: propsIState) {
  const { isPC, isTablet, secContRef, currentSecRef, currentSecScrollRef } =
    props;

  const [display, setDisplay] = useState<boolean>(false);
  useEffect(() => {
    if (secContRef.current) {
      secContRef.current.addEventListener("scroll", () => {
        if (
          (currentSecRef.current === 0 && currentSecScrollRef.current > 0.05) ||
          (currentSecRef.current === 1 && currentSecScrollRef.current < 0.8)
        ) {
          setDisplay(true);
        } else {
          setDisplay(false);
        }
      });
    }
  });

  return (
    <Container isPC={isPC} isTablet={isTablet}>
      {display && (
        <ContentContaner isPC={isPC} isTablet={isTablet}>
          <TextAlinger>
            <Name isPC={isPC} isTablet={isTablet}>
              <TypingEffect
                text="음영현"
                intervalTime={30}
                blink={0}
                delay={800}
              />
            </Name>
            <br />
            <br />
            <br />
            <TypingEffect
              text="#블랙햇츠_개발_팀장"
              intervalTime={30}
              blink={0}
              delay={1500}
            />
            <br />
            <TypingEffect
              text="#빠른_개발"
              intervalTime={30}
              blink={0}
              delay={2850}
            />
            <br />
            <TypingEffect
              text="#바른_개발"
              intervalTime={30}
              blink={0}
              delay={3600}
            />
            <br />
            <TypingEffect
              text="#웹_디자인"
              intervalTime={30}
              blink={0}
              delay={4350}
            />
          </TextAlinger>
        </ContentContaner>
      )}
    </Container>
  );
}

export default Content;

interface propsIState {
  isPC: boolean;
  isTablet: boolean;
  secContRef: React.RefObject<HTMLDivElement>;
  currentSecRef: React.MutableRefObject<number>;
  currentSecScrollRef: React.MutableRefObject<number>;
}

const Container = styled.div<{ isPC: boolean; isTablet: boolean }>`
  width: 100%;

  font-size: ${(props) =>
    props.isPC ? "3vw" : props.isTablet ? "7vw" : "25px"};

  color: transparent;
  -webkit-text-stroke: ${(props) =>
    props.isPC ? "3px" : props.isTablet ? "2px" : "1px"};
  -webkit-text-stroke-color: ${({ theme }: { theme: ThemeIState }) =>
    theme.primary};
`;

const ContentContaner = styled.div<{ isPC: boolean; isTablet: boolean }>`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  padding: ${(props) =>
    props.isPC ? "3" : props.isTablet ? "2" : "3em 1.5"}em;
`;

const TextAlinger = styled.div``;

const Name = styled.span<{ isPC: boolean; isTablet: boolean }>`
  font-size: ${(props) =>
    props.isPC ? "4vw" : props.isTablet ? "9vw" : "30px"};
`;

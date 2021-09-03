import React, { useEffect } from "react";
import styled, { css } from "styled-components";

import TypingEffect from "components/typingEffect";

function Content(props: propsIState) {
  const { isPC, isTablet, secContRef, currentSecRef, currentSecScrollRef } =
    props;
  useEffect(() => {
    if (secContRef.current) {
      secContRef.current.addEventListener("scroll", () => {
        if (
          (currentSecRef.current === 0 && currentSecScrollRef.current > 0.2) ||
          (currentSecRef.current === 1 && currentSecScrollRef.current < 0.8)
        ) {
          // animation start
        } else {
          // animation end
        }
      });
    }
  });

  return (
    <Container isPC={isPC} isTablet={isTablet}>
      <TypingEffect text="이름: 음영현 " intervalTime={30} blink={0} />
      <br />
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
    props.isPC ? "3vw" : props.isTablet ? "7vw" : "20px"};
`;

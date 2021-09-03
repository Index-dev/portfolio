import React, { useEffect } from "react";
import styled from "styled-components";
import Tower from "components/icons/tower/drawing";
import Landscape from "components/icons/tower/drawing/landscape";

function SecondSection(props: propsIState) {
  const { isPC, isTablet, secContRef, currentSecRef, currentSecScrollRef } =
    props;

  return (
    <ScrollSnapWrapper>
      <ContentConatainer></ContentConatainer>
      <IconContainer>
        <Tower
          secContRef={secContRef}
          currentSecRef={currentSecRef}
          currentSecScrollRef={currentSecScrollRef}
        />
        <Landscape
          secContRef={secContRef}
          currentSecRef={currentSecRef}
          currentSecScrollRef={currentSecScrollRef}
        />
      </IconContainer>
    </ScrollSnapWrapper>
  );
}

export default SecondSection;

interface propsIState {
  isPC: boolean;
  isTablet: boolean;
  secContRef: React.RefObject<HTMLDivElement>;
  currentSecRef: React.MutableRefObject<number>;
  currentSecScrollRef: React.MutableRefObject<number>;
}

const ScrollSnapWrapper = styled.section`
  width: 100%;
  height: 100vh;

  position: relative;

  flex: none;
  @supports (scroll-snap-align: center) {
    scroll-snap-align: center;
  }
`;

const ContentConatainer = styled.div``;

const IconContainer = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
`;

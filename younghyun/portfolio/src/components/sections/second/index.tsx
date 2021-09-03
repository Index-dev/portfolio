import React from "react";
import styled from "styled-components";

import Content from "components/sections/second/content";
import Tower from "components/sections/second/svg/tower";
import Landscape from "components/sections/second/svg/landscape";

function SecondSection(props: propsIState) {
  const { isPC, isTablet, secContRef, currentSecRef, currentSecScrollRef } =
    props;

  return (
    <ScrollSnapWrapper>
      <ContentConatainer>
        <Content
          isPC={isPC}
          isTablet={isTablet}
          secContRef={secContRef}
          currentSecRef={currentSecRef}
          currentSecScrollRef={currentSecScrollRef}
        />
      </ContentConatainer>
      <IconContainer>
        <Tower
          isPC={isPC}
          isTablet={isTablet}
          secContRef={secContRef}
          currentSecRef={currentSecRef}
          currentSecScrollRef={currentSecScrollRef}
        />
        <Landscape
          isPC={isPC}
          isTablet={isTablet}
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

const ContentConatainer = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
`;

const IconContainer = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  z-index: -1;
`;

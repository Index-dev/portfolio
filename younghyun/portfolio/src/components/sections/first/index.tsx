import React from "react";
import styled from "styled-components";

import Icons from "components/sections/first/svg/icons";
import RectangleText from "components/sections/first/svg/rectangle";
import PixelRain from "components/sections/first/photo";

function LandingSection(props: propsIState) {
  const {
    isPC,
    isTablet,
    theme,
    secContRef,
    currentSecRef,
    currentSecScrollRef,
  } = props;
  return (
    <ScrollSnapWrapper>
      <Conatainer>
        <Icons
          isPC={isPC}
          isTablet={isTablet}
          secContRef={secContRef}
          currentSecRef={currentSecRef}
          currentSecScrollRef={currentSecScrollRef}
        />
        <RectangleText
          isPC={isPC}
          isTablet={isTablet}
          secContRef={secContRef}
        />
        <PixelRain isPC={isPC} isTablet={isTablet} theme={theme} />
      </Conatainer>
    </ScrollSnapWrapper>
  );
}

export default LandingSection;

interface propsIState {
  isPC: boolean;
  isTablet: boolean;
  theme: ThemeIState;
  secContRef: React.RefObject<HTMLDivElement>;
  currentSecRef: React.MutableRefObject<number>;
  currentSecScrollRef: React.MutableRefObject<number>;
}

const ScrollSnapWrapper = styled.section`
  width: 100%;
  min-height: 100vh;

  flex: none;
  @supports (scroll-snap-align: center) {
    scroll-snap-align: center;
  }
`;

const Conatainer = styled.div`
  width: 100%;
  height: 100%;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;

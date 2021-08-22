import React from "react";
import styled from "styled-components";

import RectangleText from "components/sections/first/svg/rectangle";
import PixelRain from "components/sections/first/photo";

function LandingSection(props: propsIState) {
  const { isPC, isTablet, theme, secContRef } = props;
  return (
    <ScrollSnapWrapper>
      <Conatainer>
        <RectangleText secContRef={secContRef} />
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

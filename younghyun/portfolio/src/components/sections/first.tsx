import React from "react";
import styled from "styled-components";

function LandingSection() {
  return (
    <ScrollSnapWrapper>
      <Conatainer>
        <div></div>
      </Conatainer>
    </ScrollSnapWrapper>
  );
}

export default LandingSection;

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

  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }: { theme: ThemeIState }) => theme.primary};
`;

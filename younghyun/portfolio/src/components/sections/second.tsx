import React from "react";
import styled from "styled-components";

function SecondSection() {
  return (
    <ScrollSnapWrapper>
      <Conatainer></Conatainer>
    </ScrollSnapWrapper>
  );
}

export default SecondSection;

const ScrollSnapWrapper = styled.section`
  width: 100%;
  min-height: 100vh;

  flex: none;
  @supports (scroll-snap-align: center) {
    scroll-snap-align: center;
  }

  border: 1px solid ${({ theme }: { theme: ThemeIState }) => theme.secondary};
`;

const Conatainer = styled.div``;

import React from "react";
import styled from "styled-components";

function ThirdSection(props: propsIState) {
  const { isPC, isTablet, secContRef, currentSecRef, currentSecScrollRef } =
    props;

  return <ScrollSnapWrapper></ScrollSnapWrapper>;
}

export default ThirdSection;

interface propsIState {
  isPC: boolean;
  isTablet: boolean;
  secContRef: React.RefObject<HTMLDivElement>;
  currentSecRef: React.MutableRefObject<number>;
  currentSecScrollRef: React.MutableRefObject<number>;
}

const ScrollSnapWrapper = styled.section`
  width: 100%;
  min-height: 100vh;

  position: relative;

  flex: none;
`;

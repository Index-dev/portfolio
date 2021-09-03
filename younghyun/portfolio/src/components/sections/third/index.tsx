import React from "react";
import styled from "styled-components";

import Content from "components/sections/third/content";

function ThirdSection(props: propsIState) {
  const { isPC, isTablet } = props;

  return (
    <ScrollSnapWrapper isPC={isPC} isTablet={isTablet}>
      <TitleContainer isPC={isPC} isTablet={isTablet}>
        <Title isPC={isPC} isTablet={isTablet}>
          Career
        </Title>
      </TitleContainer>
      <Content
        isPC={isPC}
        isTablet={isTablet}
        content="BLAKC_HATS"
        duration="2021-07 ~"
        animationDuration={100}
        reversed={false}
      />
      <Content
        isPC={isPC}
        isTablet={isTablet}
        content="SSAFY"
        duration="2020-07 ~ 2021-07"
        animationDuration={60}
        reversed={true}
      />
    </ScrollSnapWrapper>
  );
}

export default ThirdSection;

interface propsIState {
  isPC: boolean;
  isTablet: boolean;
}

const ScrollSnapWrapper = styled.section<{ isPC: boolean; isTablet: boolean }>`
  width: 100%;
  min-height: 100vh;

  position: relative;

  flex: none;

  font-size: ${(props) =>
    props.isPC ? "3vw" : props.isTablet ? "7vw" : "25px"};

  color: transparent;
  -webkit-text-stroke: ${(props) =>
    props.isPC ? "3px" : props.isTablet ? "2px" : "1px"};
  -webkit-text-stroke-color: ${({ theme }: { theme: ThemeIState }) =>
    theme.primary};

  margin-top: ${(props) =>
    props.isPC ? "1" : props.isTablet ? "0.7" : "0.5"}em;
  border: 1px solid red;
`;

const TitleContainer = styled.div<{ isPC: boolean; isTablet: boolean }>`
  padding: ${(props) =>
    props.isPC ? "3" : props.isTablet ? "2" : "3em 1.5"}em;
`;

const Title = styled.div<{ isPC: boolean; isTablet: boolean }>`
  font-size: ${(props) =>
    props.isPC ? "4vw" : props.isTablet ? "9vw" : "30px"};
`;

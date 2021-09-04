import React, { useState } from "react";
import styled from "styled-components";

import Content from "components/sections/third/content";
import PopUp from "components/sections/third/popup";

function ThirdSection(props: propsIState) {
  const { isPC, isTablet } = props;
  const [displayList, setDisplayList] = useState(Array(2).fill(false));

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
        content="BLACK_HATS"
        duration={100}
        reversed={false}
      />
      <Content
        isPC={isPC}
        isTablet={isTablet}
        content="SSAFY"
        duration={60}
        reversed={true}
      />
      {displayList[0] && (
        <PopUp title="BLACK HATS" duration="2021-07 ~" images={[]} />
      )}
      {displayList[1] && (
        <PopUp title="SSAFY" duration="2020-07 ~ 2021-07" images={[]} />
      )}
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
  margin-bottom: ${(props) =>
    props.isPC ? "3" : props.isTablet ? "2" : "3"}em;
`;

const TitleContainer = styled.div<{ isPC: boolean; isTablet: boolean }>`
  padding: ${(props) =>
    props.isPC ? "3" : props.isTablet ? "2" : "3em 1.5"}em;
`;

const Title = styled.div<{ isPC: boolean; isTablet: boolean }>`
  font-size: ${(props) =>
    props.isPC ? "4vw" : props.isTablet ? "9vw" : "30px"};
`;

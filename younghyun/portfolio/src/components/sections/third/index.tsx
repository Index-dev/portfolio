import React, { useState } from "react";
import styled from "styled-components";

import Content from "components/sections/third/content";
import PopUp from "components/sections/third/popup";

import ssafy01 from "assets/third/ssafy/01.jpg";
import ssafy02 from "assets/third/ssafy/02.jpg";
import ssafy03 from "assets/third/ssafy/03.jpg";
import ssafy04 from "assets/third/ssafy/04.jpg";
import ssafy05 from "assets/third/ssafy/05.jpg";
import ssafy06 from "assets/third/ssafy/06.jpg";
import ssafy07 from "assets/third/ssafy/07.jpg";
import ssafy08 from "assets/third/ssafy/08.jpg";
import ssafy09 from "assets/third/ssafy/09.jpg";
import ssafy10 from "assets/third/ssafy/10.jpg";
import ssafy11 from "assets/third/ssafy/11.jpg";
import ssafy12 from "assets/third/ssafy/12.jpg";
import ssafy13 from "assets/third/ssafy/13.jpg";
import ssafy14 from "assets/third/ssafy/14.jpg";
import ssafy15 from "assets/third/ssafy/15.jpg";
import ssafy16 from "assets/third/ssafy/16.jpg";
import ssafy17 from "assets/third/ssafy/17.jpg";
import ssafy18 from "assets/third/ssafy/18.jpg";
import ssafy19 from "assets/third/ssafy/19.jpg";
import ssafy20 from "assets/third/ssafy/20.jpg";
import ssafy21 from "assets/third/ssafy/21.jpg";
import ssafy22 from "assets/third/ssafy/22.jpg";
import ssafy23 from "assets/third/ssafy/23.jpg";
import ssafy24 from "assets/third/ssafy/24.jpg";
import ssafy25 from "assets/third/ssafy/25.jpg";
import ssafy26 from "assets/third/ssafy/26.jpg";

function ThirdSection(props: propsIState) {
  const { isPC, isTablet } = props;
  const [displayBHPopUp, setDisplayBHPopUp] = useState(false);
  const [displaySSAFYPopUp, setDisplaySSAFYPopUp] = useState(false);

  const ssafyImages = [
    ssafy01,
    ssafy02,
    ssafy03,
    ssafy04,
    ssafy05,
    ssafy06,
    ssafy07,
    ssafy08,
    ssafy09,
    ssafy10,
    ssafy11,
    ssafy12,
    ssafy13,
    ssafy14,
    ssafy15,
    ssafy16,
    ssafy17,
    ssafy18,
    ssafy19,
    ssafy20,
    ssafy21,
    ssafy22,
    ssafy23,
    ssafy24,
    ssafy25,
    ssafy26,
  ];

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
        setDisplayPopUp={setDisplayBHPopUp}
      />
      <Content
        isPC={isPC}
        isTablet={isTablet}
        content="SSAFY"
        duration={60}
        reversed={true}
        setDisplayPopUp={setDisplaySSAFYPopUp}
      />
      {/* <Content
        isPC={isPC}
        isTablet={isTablet}
        content="ETC"
        duration={60}
        reversed={false}
        setDisplayPopUp={setDisplayETCPopUp}
      /> */}
      {displayBHPopUp && (
        <PopUp
          title="BLACK HATS"
          duration="2021-07 ~"
          images={[]}
          setDisplayPopUp={setDisplayBHPopUp}
        />
      )}
      {displaySSAFYPopUp && (
        <PopUp
          title="SSAFY"
          duration="2020-07 ~ 2021-07"
          images={ssafyImages}
          setDisplayPopUp={setDisplaySSAFYPopUp}
        />
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

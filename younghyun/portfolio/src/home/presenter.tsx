import React from "react";
import styled, { css, keyframes } from "styled-components";

import Menu from "components/nav/menu";
import Loading from "components/loading";
import Nav from "components/nav";
import Header from "components/header";

import Icons from "components/icons";
import FirstSec from "components/sections/first";
import SecondSec from "components/sections/second";

function HomePresenter(props: propsIState) {
  const {
    isPC,
    isTablet,
    theme,
    toggleTheme,
    isLoading,
    setLoading,
    showMenu,
    disappearMenu,
    toggleMenu,
    contRef,
    secContRef,
    currentSecRef,
    currentSecScrollRef,
  } = props;

  return (
    <Container ref={contRef}>
      {showMenu && (
        <Menu disappearMenu={disappearMenu} toggleMenu={toggleMenu} />
      )}
      {isLoading && (
        <Loading isPC={isPC} isTablet={isTablet} setLoading={setLoading} />
      )}
      <SectionContainer isLoading={isLoading} ref={secContRef}>
        <Nav secContRef={secContRef} toggleMenu={toggleMenu} />
        <Header toggleTheme={toggleTheme} />
        <Icons
          isPC={isPC}
          isTablet={isTablet}
          secContRef={secContRef}
          currentSecRef={currentSecRef}
          currentSecScrollRef={currentSecScrollRef}
        />
        <FirstSec
          isPC={isPC}
          isTablet={isTablet}
          theme={theme}
          secContRef={secContRef}
        />
        <SecondSec
          isPC={isPC}
          isTablet={isTablet}
          secContRef={secContRef}
          currentSecRef={currentSecRef}
          currentSecScrollRef={currentSecScrollRef}
        />
        <EmptyStuff />
        <EmptyStuff />
        <EmptyStuff />
        <EmptyStuff />
      </SectionContainer>
    </Container>
  );
}

export default HomePresenter;

interface propsIState {
  isPC: boolean;
  isTablet: boolean;
  theme: ThemeIState;
  toggleTheme: () => void;
  isLoading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  showMenu: boolean;
  disappearMenu: boolean;
  toggleMenu: () => void;
  contRef: React.RefObject<HTMLDivElement>;
  secContRef: React.RefObject<HTMLDivElement>;
  currentSecRef: React.MutableRefObject<number>;
  currentSecScrollRef: React.MutableRefObject<number>;
}

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  position: relative;
`;

const appear = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const SectionContainer = styled.div<{ isLoading: boolean }>`
  width: 100%;
  height: 100vh;

  position: relative;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  overflow-x: hidden;
  overflow-y: scroll;

  @supports (scroll-snap-type: y proximity) {
    scroll-snap-type: y proximity;
  }

  opacity: 0;
  ${(props) =>
    !props.isLoading &&
    css`
      animation: ${appear} 0.2s 0.1s linear forwards;
    `};

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }: { theme: ThemeIState }) => theme.primary};
    background-clip: padding-box;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }: { theme: ThemeIState }) =>
      theme.background};
  }
`;

const EmptyStuff = styled.section`
  width: 100vw;
  height: 100vh;

  flex: none;
`;

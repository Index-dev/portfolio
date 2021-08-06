import React from "react";
import styled, { keyframes } from "styled-components";

import Menu from "components/nav/menu";
import Loading from "components/loading";
import Nav from "components/nav";
import Header from "components/header";

const HomePresenter = (props: propsIState) => {
  const {
    toggleTheme,
    isLoading,
    setLoading,
    showMenu,
    disappearMenu,
    toggleMenu,
    contRef,
    secContRef,
    navRefs,
  } = props;

  return (
    <Container ref={contRef}>
      {showMenu && (
        <Menu disappearMenu={disappearMenu} toggleMenu={toggleMenu} />
      )}
      {isLoading ? (
        <Loading setLoading={setLoading} />
      ) : (
        <SectionContainer ref={secContRef}>
          <Nav toggleMenu={toggleMenu} navRefs={navRefs} />
          <Header toggleTheme={toggleTheme} />
          <EmptyStuff />
          <EmptyStuff />
          <EmptyStuff />
          <EmptyStuff />
          <EmptyStuff />
          <EmptyStuff />
        </SectionContainer>
      )}
    </Container>
  );
};

export default HomePresenter;

interface propsIState {
  toggleTheme: () => void;
  isLoading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  showMenu: boolean;
  disappearMenu: boolean;
  toggleMenu: () => void;
  contRef: React.RefObject<HTMLDivElement>;
  secContRef: React.RefObject<HTMLDivElement>;
  navRefs: navRefsIState;
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

const SectionContainer = styled.div`
  width: 100%;
  height: 100vh;

  position: relative;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  @supports (scroll-snap-type: y proximity) {
    scroll-snap-type: y proximity;
  }

  overflow-x: hidden;
  overflow-y: scroll;

  opacity: 0;

  animation: ${appear} 0.2s 0.1s linear forwards;

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
  width: 99vw;
  height: 100vh;

  flex: none;
  @supports (scroll-snap-align: center) {
    scroll-snap-align: center;
  }

  border: 1px solid ${({ theme }: { theme: ThemeIState }) => theme.secondary};
  outline-offset: -1px;
`;

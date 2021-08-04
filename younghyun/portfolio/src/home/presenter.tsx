import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

import Menu from "components/nav/menu";
import Loading from "components/loading";
import Nav from 'components/nav'

const HomePresenter = (props: propsIState) => {
  const { toggleTheme, isLoading, setLoading, showMenu, disappearMenu, toggleMenu } = props;

  const contRef = useRef<HTMLDivElement>(null);
  const secContRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contRef.current && isLoading) {
      contRef.current.style.overflow = 'hidden';
    } else if (contRef.current) {
      contRef.current.style.overflow = 'none';
    }
  }, [isLoading])

  useEffect(() => {
    if (secContRef.current) {
      if (secContRef.current.children) {
        secContRef.current.children[2].scrollIntoView({
          block: 'start'
        })
      }
    }
  })


  return (
    <Container ref={contRef}>
      {showMenu && <Menu disappearMenu={disappearMenu} toggleMenu={toggleMenu} />}
      {isLoading ? <Loading setLoading={setLoading} />
        :
        <SectionContainer ref={secContRef} >
          <Nav toggleMenu={toggleMenu} />
          <Head onClick={toggleTheme}>loading end</Head>
          <EmptyStuff />
          <EmptyStuff />
          <EmptyStuff />
          <EmptyStuff />
          <EmptyStuff />
          <EmptyStuff />
        </SectionContainer>
      }
    </Container >
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
}

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  position: relative;
`;

const Head = styled.div`
  height: 5vh;
  
  flex: none;
  
  @supports (scroll-snap-align: center) {
    scroll-snap-align: center;
  }
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
  height: 100vh;
  
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

  &::-webkit-scrollbar{
    width: 5px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }: { theme: ThemeIState }) => theme.primary}; 
    background-clip: padding-box;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  
  &::-webkit-scrollbar-track {
    background-color: ${({ theme }: { theme: ThemeIState }) => theme.background}; 
  }
  `;

const EmptyStuff = styled.section`
  width: 99vw;
  height: 100vh;
  
  flex: none;
  @supports (scroll-snap-align: center) {
    scroll-snap-align: center;
  }
  border: 1px solid red;
  outline-offset: -1px;
  `;
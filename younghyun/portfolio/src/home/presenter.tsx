import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import Loading from "components/loading";

const HomePresenter = (props: propsIState) => {
  const { toggleTheme, isLoading, setLoading } = props;
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
    setTimeout(() => {
      if (secContRef.current) {
        if (secContRef.current.children) {
          secContRef.current.children[1].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    }, 2000)
  })

  return (
    <Container ref={contRef}>
      {isLoading ? <Loading setLoading={setLoading} />
        :
        <SectionContainer ref={secContRef} >
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

const SectionContainer = styled.div`

  height: 100vh;
  
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  
  @supports (scroll-snap-type: y proximity) {
    scroll-snap-type: y proximity; 
  }
  
  overflow-y: auto;
`;

const EmptyStuff = styled.section`
  width: 100vw;
  height: 100%;

  flex: none;
  @supports (scroll-snap-align: center) {
    scroll-snap-align: center;
  }
  border: 1px solid red;
  outline-offset: -1px;
`;
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import Loading from "components/loading";

const HomePresenter = (props: propsIState) => {
  const { toggleTheme, isLoading, setLoading } = props;
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current && isLoading) {
      containerRef.current.style.overflow = 'hidden';
    } else if (containerRef.current) {
      containerRef.current.style.overflow = 'none';
    }
  }, [isLoading])

  return (
    <Container ref={containerRef}>
      {/* {isLoading ? <Loading setLoading={setLoading} />
        : */}
      <SectionContainer className="SectionContainer">
        {/* <div onClick={toggleTheme}>loading end</div> */}
        <EmptyStuff className="EmptyStuff" />
        <EmptyStuff className="EmptyStuff" />
        <EmptyStuff className="EmptyStuff" />
        <EmptyStuff className="EmptyStuff" />
        <EmptyStuff className="EmptyStuff" />
        <EmptyStuff className="EmptyStuff" />
      </SectionContainer>
      {/* } */}
    </Container>
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

const SectionContainer = styled.div`

  height: 80vh;
  
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
`;
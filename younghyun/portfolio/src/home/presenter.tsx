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
      {isLoading ? <Loading setLoading={setLoading} />
        :
        <>
          <div onClick={toggleTheme}>loading end</div>
          <EmptyStuff />
        </>
      }
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

const EmptyStuff = styled.div`
  width: 100vw;
  height: 200vh;
`;
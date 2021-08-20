import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import Airplane from "components/icons/airplane";
import Car from "components/icons/car";
import Tower from "components/icons/tower";

function Icons(props: propsIState) {
  const { secContRef } = props;
  const airplaneRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const towerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (secContRef.current !== null) {
      secContRef.current.addEventListener("scroll", () => {
        if (secContRef.current !== null) {
          if (secContRef.current.scrollTop < window.innerHeight * 0.11) {
            console.log(true);
          } else {
            console.log(false);
          }
        }
      });
    }
  }, [secContRef]);

  return (
    <Container>
      <Airplane speed={5} airplaneRef={airplaneRef} />
      <Car speed={-3} carRef={carRef} />
      <Tower speed={1} towerRef={towerRef} />
    </Container>
  );
}

export default Icons;

interface propsIState {
  secContRef: React.RefObject<HTMLDivElement>;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

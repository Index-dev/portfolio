import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import Airplane from "components/icons/airplane";
import Car from "components/icons/car";
import Tower from "components/icons/tower";

const AIRPLANE_SPEED = 10;
const CAR_SPEED = -3;
const TOWER_SPEED = -0.1;

function Icons(props: propsIState) {
  const { isPC, isTablet, secContRef } = props;
  const airplaneRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const towerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (secContRef.current !== null) {
      secContRef.current.addEventListener("scroll", () => {
        if (secContRef.current !== null) {
          if (secContRef.current.scrollTop < window.innerHeight * 0.11) {
            secContRef.current.addEventListener("mousemove", parallax);
          } else {
            secContRef.current?.removeEventListener("mousemove", parallax);
          }
        }
      });
    }
  }, [secContRef]);

  function parallax(event: MouseEvent) {
    console.log("parallax");
    if (airplaneRef.current && carRef.current && towerRef.current) {
      const airplaneX =
        (window.innerWidth - event.pageX * AIRPLANE_SPEED) / 100;
      const airplaneY =
        (window.innerHeight - event.pageY * AIRPLANE_SPEED) / 100;
      const carX = (window.innerWidth - event.pageX * CAR_SPEED) / 100;
      const carY = (window.innerHeight - event.pageX * CAR_SPEED) / 100;
      const towerX = (window.innerWidth - event.pageX * TOWER_SPEED) / 100;
      const towerY = (window.innerHeight - event.pageX * TOWER_SPEED) / 100;

      airplaneRef.current.style.transform = `translate(${airplaneX}px, ${airplaneY}px)`;
      carRef.current.style.transform = `translate(${carX}px, ${carY}px)`;
      towerRef.current.style.transform = `translate(${towerX}px, ${towerY}px)`;
    }
  }

  return (
    <Container>
      <Airplane isPC={isPC} isTablet={isTablet} airplaneRef={airplaneRef} />
      <Car isPC={isPC} isTablet={isTablet} carRef={carRef} />
      <Tower isPC={isPC} isTablet={isTablet} towerRef={towerRef} />
    </Container>
  );
}

export default Icons;

interface propsIState {
  isPC: boolean;
  isTablet: boolean;
  secContRef: React.RefObject<HTMLDivElement>;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

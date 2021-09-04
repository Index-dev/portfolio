import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

function PopUp(props: propsIState) {
  const { title, duration, images, setDisplayPopUp } = props;
  const [display, setDisplay] = useState(true);
  useEffect(() => {
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    setDisplay(true);
  }, []);

  function handlePopUpClose() {
    setDisplay(false);
    setTimeout(() => {
      setDisplayPopUp(false);
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    }, 400);
  }

  return (
    <Container onClick={handlePopUpClose}>
      <Content display={display}></Content>
    </Container>
  );
}

export default PopUp;

interface propsIState {
  title: string;
  duration: string;
  images: Array<string>;
  setDisplayPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
`;

const appear = keyframes`
    0%{
      clip-path: polygon(0 50%, 20% 0, 100% 0, 100% 100%, 20% 100%);
      transform: translate3d(100%, 0, 0);
    }
    10% {
        clip-path: polygon(0 50%, 20% 0, 100% 0, 100% 100%, 20% 100%);
        transform: translate3d(80%, 0, 0);
    }
    90% {
        clip-path: polygon(0 50%, 20% 0, 100% 0, 100% 100%, 20% 100%);
        transform: translate3d(20%, 0, 0);
    }
    100% {
        clip-path: polygon(0 50%, 0 0, 100% 0, 100% 100%, 0 100%);
        transform: translate3d(0%, 0, 0);
    }
    `;

const disappear = keyframes`
    0%{
        clip-path: polygon(0 50%, 0 0, 100% 0, 100% 100%, 0 100%);
        transform: translate3d(0, 0, 0);
      }
    10% {
      clip-path: polygon(0 50%, 0 0, 100% 0, 100% 100%, 0 100%);
        transform: translate3d(20%, 0, 0);
    }
    90% {
        clip-path: polygon(50% 50%, 20% 0, 100% 0, 100% 100%, 20% 100%);
        transform: translate3d(60%, 0, 0);
    }
    100% {
        clip-path: polygon(0 50%, 0 0, 100% 0, 100% 100%, 0 100%);
        transform: translate3d(100%, 0, 0);
    }
    `;

const Content = styled.div<{ display: boolean }>`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }: { theme: ThemeIState }) => theme.primary};
  color: ${({ theme }: { theme: ThemeIState }) => theme.fourth};

  transform: translate3d(-100%, 0, 0);

  z-index: 99;

  ${(props) =>
    props.display
      ? css`
          animation: ${appear} 0.3s linear forwards;
        `
      : css`
          animation: ${disappear} 0.3s linear forwards;
        `}
`;

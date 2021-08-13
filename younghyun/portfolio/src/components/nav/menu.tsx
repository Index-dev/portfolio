import React from "react";
import styled, { css, keyframes } from "styled-components";

function Menu(props: propsIState) {
  const { disappearMenu, toggleMenu } = props;

  return (
    <Container disappearMenu={disappearMenu}>
      <span onClick={toggleMenu}>hi</span>
    </Container>
  );
}
export default Menu;

interface propsIState {
  disappearMenu: boolean;
  toggleMenu: () => void;
}

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

const Container = styled.div<{ disappearMenu: boolean }>`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }: { theme: ThemeIState }) => theme.primary};
  color: ${({ theme }: { theme: ThemeIState }) => theme.fourth};

  transform: translate3d(-100%, 0, 0);

  ${(props) =>
    props.disappearMenu
      ? css`
          animation: ${disappear} 0.3s linear forwards;
        `
      : css`
          animation: ${appear} 0.3s linear forwards;
        `}

  z-index: 99;
`;

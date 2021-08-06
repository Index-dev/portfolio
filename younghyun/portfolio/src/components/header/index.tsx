import React from "react";
import styled from "styled-components";

import Logo from "components/header/logo";

function Header(props: propsIState) {
  return (
    <Container>
      <Logo />
    </Container>
  );
}

export default Header;

interface propsIState {
  toggleTheme: () => void;
}

const Container = styled.div`
  width: 100%;
  height: 10vh;

  flex: none;

  @supports (scroll-snap-align: center) {
    scroll-snap-align: center;
  }

  padding: 1rem 0;
`;

import React from "react";
import styled from "styled-components";

import Airplane from "components/icons/airplane";
import Car from "components/icons/car";
import Tower from "components/icons/tower";

function Icons() {
  return (
    <Container>
      <Airplane />
      <Car />
      <Tower />
    </Container>
  );
}

export default Icons;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

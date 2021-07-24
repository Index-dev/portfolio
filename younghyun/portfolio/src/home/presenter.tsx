import React from "react";
import styled from "styled-components";

import Loading from "components/loading";

const HomePresenter = (props: propsIState) => {
  const { isLoading, toggleTheme } = props;
  return (
    <Container>
      {props.isLoading && <Loading isLoading={isLoading} />}
    </Container>
  );
};

export default HomePresenter;

interface propsIState {
  toggleTheme: () => void;
  isLoading: boolean;
}

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  overflow: hidden;
`;

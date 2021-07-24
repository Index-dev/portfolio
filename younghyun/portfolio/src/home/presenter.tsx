import React from "react";
import styled from "styled-components";

import Loading from "components/loading";

const HomePresenter = (props: propsIState) => {
  const { toggleTheme, isLoading, setLoading } = props;
  return (
    <Container>
      {props.isLoading && <Loading setLoading={setLoading} />}
      <div onClick={toggleTheme}>loading end</div>
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

  overflow: hidden;
`;

import React, { useState } from "react";
import styled from "styled-components";

const Home = (props: propsIState) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <div onClick={props.toggleTheme}>
      <p>Hello world</p>
    </div>
  );
};

export default Home;

interface propsIState {
  toggleTheme: () => void;
}

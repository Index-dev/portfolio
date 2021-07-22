import React, { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "components/globalStyle";
import { basicTheme, reversedTheme } from "components/theme";

function App() {
  const [theme, setTheme] = useState<ThemeIState>(basicTheme);

  console.log(theme);
  const toggleTheme = () => {
    if (theme === basicTheme) setTheme(reversedTheme);
    else setTheme(basicTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container onClick={toggleTheme}>Hello world</Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

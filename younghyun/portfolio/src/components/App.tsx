import React, { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "components/globalStyle";
import { basicTheme, reversedTheme } from "components/theme";
import Home from "home/container";

function App() {
  const [theme, setTheme] = useState<ThemeIState>(basicTheme);

  const toggleTheme = () => {
    if (theme === basicTheme) setTheme(reversedTheme);
    else setTheme(basicTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

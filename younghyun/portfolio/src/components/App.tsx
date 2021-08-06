import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "components/globalStyle";
import { basicTheme } from "components/theme";
import Home from "home/container";

function App() {
  const [theme, setTheme] = useState<ThemeIState>(basicTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
}

export default App;

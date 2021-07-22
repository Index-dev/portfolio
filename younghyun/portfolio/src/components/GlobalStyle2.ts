import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${(props: { theme: ThemeIState }) =>
          props.theme.background};
          
        color: ${(props: { theme: ThemeIState }) => props.theme.primary};
    }
`;

export default GlobalStyle;

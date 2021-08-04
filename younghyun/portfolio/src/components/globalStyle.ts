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
        max-width: 100vw;

        background-color: ${({ theme }: { theme: ThemeIState }) =>
        theme.background};
          
        color: ${({ theme }: { theme: ThemeIState }) => theme.primary};

        transition: background-color 0.4s , color 0.4s;    

        scroll-behavior: smooth;

        &::-webkit-scrollbar {
            width: 10px;
        }
    }
`;

export default GlobalStyle;

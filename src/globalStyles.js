import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Roboto';
    }

    body {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export default GlobalStyles;
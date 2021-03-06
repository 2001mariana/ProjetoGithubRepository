import { createGlobalStyle } from "styled-components"

import imgBackground from '../assets/background.svg'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media (max-width: 1080px) {
        font-size: 93.75%;
    }

    @media (max-width: 720px) {
        font-size: 87.5%;
    }
}

body {
    background: #f0f0f5 url(${imgBackground}) no-repeat 70% top;
    -webkit-font
}
`;
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}

/* 폰트 */
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

:root {
    /* 색 */
    --color-background : #fff
    --color-main : #000
    --color-active : #f09605
    --color-border : #e5e7eb
}

body {
    background-color: var(--color-background);
    font-family: 'Pretendard-Regular',sans-serif;
}

h1,h2,h3,p {
    font-family: inherit;
}

a {
    font-family: inherit;
    color: inherit;
}

button {
    font-family: inherit;
}

button:enabled, button:active {
    cursor: pointer;
}


.a11y-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
}

`;

export default GlobalStyle;

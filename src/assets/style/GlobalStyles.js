import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
    body {
        box-sizing: border-box;
        font-family: 'Rubik';
        font-weight: 300;
        height: 100vh;
    }
    #root {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
        height: fit-content;
        padding: 5% 0;
        @media (max-width: 1020px) {
            flex-direction: column;
            justify-content: flex-start;
            height: max-content;
        }
    }
`
export default GlobalStyle

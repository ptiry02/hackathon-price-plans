import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
    body {
        box-sizing: border-box;
    }
    #root {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
export default GlobalStyle

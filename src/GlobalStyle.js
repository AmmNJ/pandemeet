import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -moz-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    line-height: 1.5;
    font-size: 112.5%;
    letter-spacing: -0.6px;
    color: #000;
  }

  button:focus {
    outline: none;
  }

  h1 {
    font-size: 24;
  }
`

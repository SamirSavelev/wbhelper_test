import { createGlobalStyle, css } from 'styled-components';

const styles = css`
  * {
    padding: 0;
    margin: 0;
    border: 0;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  button {
    cursor: pointer;
    color: inherit;
    background: transparent;
  }
  html {
    scroll-behavior: smooth;
  }
  input,
  button,
  textarea,
  select {
    font-family: inherit;
    outline: none;
  }
  ul {
    list-style: none;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  a {
    font-weight: 500;
    font-size: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
  }
  html,
  body {
    height: 100%;
    width: 100%;
    font-size: 100%;
    max-width: 100vw;
    overflow-x: hidden;
    background-color: #f6f7f8d9;
    font-family: Roboto, sans-serif;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;

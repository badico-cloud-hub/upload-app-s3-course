import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.primary.background};
    color: ${props => props.theme.colors.primary.text};
    font: 400 16px Inter, sans-serif;
  }

`;

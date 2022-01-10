import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.gray[900]};
    color: ${({ theme }) => theme.colors.white};
  }

  body, input, textarea, select, button {
    font: 400 1rem 'Roboto', sans-serif ;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

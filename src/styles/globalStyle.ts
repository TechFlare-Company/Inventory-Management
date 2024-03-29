import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.GREY[800]};
  }

  body,
  input,
  textarea,
  button {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }
`;

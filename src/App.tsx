import React from 'react';

import { ThemeProvider } from 'styled-components';

import { AuthContextProvider } from './contexts/AuthContext';
import { Routes } from './routes/Routes';
import { GlobalStyle } from './styles/globalStyle';
import { defaultTheme } from './theme/defaultTheme';

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <AuthContextProvider>
          <Routes />
        </AuthContextProvider>

        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

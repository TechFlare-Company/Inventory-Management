import React from 'react';

import { AuthContextProvider } from './contexts/AuthContext';

export function App() {
  return (
    <AuthContextProvider>
      <></>
    </AuthContextProvider>
  );
}

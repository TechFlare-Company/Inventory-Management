import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { authenticateRoutes } from './AuthenticateRoutes';
import { protectedRoutes } from './ProtectedRoutes';

export function Routes() {
  const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <div>Deu ruim</div>,
      children: [...authenticateRoutes, ...protectedRoutes],
    },
  ]);

  return <RouterProvider router={router} />;
}

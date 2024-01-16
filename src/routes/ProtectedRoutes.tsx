import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';
import { DefaultLayout } from '../layout/DefaultLayout';
import { Dashboard } from '../pages/Dashboard';
import { Stock } from '../pages/Stock';

function ProtectedRoute() {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <DefaultLayout /> : <Navigate to="/" />;
}

export const protectedRoutes: RouteObject[] = [
  {
    path: '/app',
    element: <ProtectedRoute />,
    children: [
      {
        path: '/app/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/app/stock',
        element: <Stock />,
      },
    ],
  },
];

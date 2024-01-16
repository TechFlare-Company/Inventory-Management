import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';
import { DefaultLayout } from '../layout/DefaultLayout';

function ProtectedRoute() {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <DefaultLayout /> : <Navigate to="/" />;
}

export const protectedRoutes: RouteObject[] = [
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [],
  },
];

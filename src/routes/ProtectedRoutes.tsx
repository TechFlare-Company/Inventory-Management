import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';
import { DefaultLayout } from '../layout/DefaultLayout';
import { Dashboard } from '../pages/Dashboard';
import { ManageStores } from '../pages/ManageStores';
import { Orders } from '../pages/Orders';
import { Reports } from '../pages/Reports';
import { Stock } from '../pages/Stock';
import { Suppliers } from '../pages/Suppliers';

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
      {
        path: '/app/reports',
        element: <Reports />,
      },
      {
        path: '/app/suppliers',
        element: <Suppliers />,
      },
      {
        path: '/app/orders',
        element: <Orders />,
      },
      {
        path: '/app/manage-stores',
        element: <ManageStores />,
      },
    ],
  },
];

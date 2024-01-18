import React from 'react';
import { RouteObject } from 'react-router-dom';

import { Login } from '../pages/Login';

export const authenticateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Login />,
  },
];

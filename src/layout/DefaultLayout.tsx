import React from 'react';
import { Outlet } from 'react-router-dom';

export function DefaultLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { DefaultLayoutContainer } from './styles';

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <Header />
      <Sidebar />
      <div className="container">
        <Outlet />
      </div>
    </DefaultLayoutContainer>
  );
}

import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import { DefaultLayoutContainer } from './styles';

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <header>header</header>
      <aside>
        <div>
          <img src="" alt="" />
        </div>
        <nav>
          <div>
            <Link to="/app/dashboard">
              <span>Dashboard</span>
            </Link>
          </div>
          <div>
            <Link to="/app/stock">
              <span>Estoque</span>
            </Link>
          </div>
        </nav>
      </aside>
      <Outlet />
    </DefaultLayoutContainer>
  );
}

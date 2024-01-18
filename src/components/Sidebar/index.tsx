import { ArchiveBox, Backpack, ChartLine, House, Package, UserCircle } from '@phosphor-icons/react';
import { NavLink } from 'react-router-dom';

import LogoInline from '../../assets/logo-inline.svg';
import { SidebarContainer } from './styles';

export function Sidebar() {
  return (
    <SidebarContainer>
      <div>
        <img src={LogoInline} alt="" />
      </div>
      <nav className="nav-link">
        <div className="item-link">
          <NavLink to="/app/dashboard">
            <House />
            <span>Dashboard</span>
          </NavLink>
        </div>
        <div className="item-link">
          <NavLink to="/app/stock">
            <Backpack />
            <span>Estoque</span>
          </NavLink>
        </div>
        <div className="item-link">
          <NavLink to="/app/reports">
            <ChartLine />
            <span>Relatórios</span>
          </NavLink>
        </div>
        <div className="item-link">
          <NavLink to="/app/suppliers">
            <UserCircle />
            <span>Fornecedores</span>
          </NavLink>
        </div>
        <div className="item-link">
          <NavLink to="/app/orders">
            <Package />
            <span>Pedidos</span>
          </NavLink>
        </div>
        <div className="item-link">
          <NavLink to="/app/manage-stores">
            <ArchiveBox />
            <span>Gerenciar Lojas</span>
          </NavLink>
        </div>
      </nav>
    </SidebarContainer>
  );
}

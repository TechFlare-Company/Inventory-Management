import { Bell, MagnifyingGlass, UserCircle } from '@phosphor-icons/react';

import Avatar from '../../assets/avatar.png';
import { HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <div className="search-container">
        <MagnifyingGlass />
        <input placeholder="Pesquise produtos, fornecedores ou pedidos" type="text" />
      </div>
      <div className="details-container">
        <div className="notification-container">
          <Bell />
        </div>
        <div className="profile-container">
          <img className="avatar-image" src={Avatar} alt="" />
        </div>
      </div>
    </HeaderContainer>
  );
}

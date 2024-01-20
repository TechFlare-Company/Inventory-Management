import styled from 'styled-components';

import { HeaderContainer } from '../../components/Header/styles';
import { SidebarContainer } from '../../components/Sidebar/styles';

export const DefaultLayoutContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas:
    'sidebar header'
    'sidebar container';
  grid-template-columns: 17rem 1fr;
  grid-template-rows: minmax(3rem, max-content) 1fr;

  ${HeaderContainer} {
    grid-area: header;
  }

  ${SidebarContainer} {
    grid-area: sidebar;
  }

  .container {
    background-color: ${({ theme }) => theme.COLORS.GREY[50]};
    grid-area: container;
    overflow: auto;
  }
`;

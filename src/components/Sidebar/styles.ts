import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  padding: 1.5rem 1.5rem 2rem 1.5rem;
  box-shadow: 0 0 5px 1px ${({ theme }) => theme.COLORS.GREY[100]};
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  flex-direction: column;
  gap: 2.25rem;

  nav {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    .item-link {
      a {
        height: 100%;
        padding: 1rem 0;
        color: ${({ theme }) => theme.COLORS.GREY[600]};
        display: flex;
        align-items: center;
        gap: 1rem;
        text-decoration: none;

        svg {
          font-size: 1.5rem;
        }

        span {
          font-size: 1rem;
        }

        &.active {
          color: ${({ theme }) => theme.COLORS.BLUE[500]};
        }

        &:hover {
          color: ${({ theme }) => theme.COLORS.BLUE[300]};
        }
      }
    }
  }
`;

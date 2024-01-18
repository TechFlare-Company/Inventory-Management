import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 1.25rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .search-container {
    width: 25rem;
    position: relative;

    input {
      width: 100%;
      padding: 0.75rem 1rem 0.75rem 2.5rem;
      border: 1px solid ${({ theme }) => theme.COLORS.GREY[50]};
      border-radius: 0.25rem;
      color: ${({ theme }) => theme.COLORS.GREY[500]};
      font-size: 0.875rem;

      &:focus {
        border-color: ${({ theme }) => theme.COLORS.BLUE[300]};
        outline: none;
      }

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.GREY[400]};
      }
    }

    svg {
      color: ${({ theme }) => theme.COLORS.GREY[400]};
      position: absolute;
      top: 50%;
      left: 1rem;
      transform: translate(0, -50%);
    }
  }

  .details-container {
    height: 2.5rem;
    display: flex;
    gap: 1.25rem;

    div {
      display: flex;
      align-items: center;
      line-height: 0;
    }

    .profile-container {
      .avatar-image {
        height: 2.5rem;
        width: 2.5rem;
      }
    }

    .notification-container {
      svg {
        font-size: 1.25rem;
      }
    }
  }
`;

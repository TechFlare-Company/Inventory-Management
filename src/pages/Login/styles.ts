import styled from 'styled-components';

export const LoginContainer = styled.div`
  height: 100vh;
  margin-inline: 20rem;
  display: flex;
  justify-content: space-between;

  .logo-container {
    display: flex;
    align-items: center;
  }

  .account-login-container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .header {
      display: flex;
      flex-direction: column;

      img {
        height: 5rem;
        width: auto;
      }

      h2 {
        margin-top: 1.5rem;
        font-size: 1.875rem;
      }

      p {
        margin-top: 0.75rem;
        font-size: 1rem;
      }
    }

    form {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;

      .field-container {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;

        label {
          font-size: 0.875rem;
          display: flex;
        }

        input {
          padding: 0.625rem 0.875rem;
          border-radius: 0.5rem;
          border: 1px solid ${({ theme }) => theme.COLORS.GREY[300]};
          outline: none;
          display: flex;

          &:hover {
            border-color: ${({ theme }) => theme.COLORS.BLUE[300]};
          }
        }
      }

      .more-details {
        margin-top: 0.25rem;
        display: flex;
        justify-content: space-between;

        div:nth-child(1) {
          font-size: 0.875rem;
          display: flex;
          align-items: center;
          position: relative;

          input[type='checkbox'] {
            display: none;
          }

          input[type='checkbox'] + label {
            margin-left: 2rem;
          }

          input[type='checkbox'] + label:before {
            height: 20px;
            width: 20px;
            border: 1px solid ${({ theme }) => theme.COLORS.GREY[300]};
            border-radius: 0.35rem;
            background-color: ${({ theme }) => theme.COLORS.WHITE};
            position: absolute;
            top: 0;
            left: 0;
            content: '';
          }

          input[type='checkbox']:checked + label:before {
            background-color: ${({ theme }) => theme.COLORS.GREY[50]};
            border-color: ${({ theme }) => theme.COLORS.BLUE[500]};
          }
        }

        div:nth-child(2) {
          span {
            color: ${({ theme }) => theme.COLORS.BLUE[500]};
            font-weight: 500;
          }
        }
      }

      .login-buttons {
        margin-top: 0.25rem;
        display: flex;
        flex-direction: column;

        button {
          padding: 0.625rem 1.125rem;
          border: none;
          border-radius: 0.5rem;
          background-color: ${({ theme }) => theme.COLORS.BLUE[500]};
          color: ${({ theme }) => theme.COLORS.WHITE};
          font-weight: 500;
          cursor: pointer;
        }

        p {
          margin-top: 2rem;

          span {
            color: ${({ theme }) => theme.COLORS.BLUE[500]};
            font-weight: 500;
          }
        }
      }
    }
  }
`;

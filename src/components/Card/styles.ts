import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const CardRoot = styled.div`
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  flex-direction: column;
`;

export const CardTop = styled.div`
  padding: 1rem 1rem 0;
  display: flex;
  justify-content: space-between;
`;

export const CardTitle = styled.h2`
  color: ${({ theme }) => theme.COLORS.GREY[800]};
  font-size: 1.25rem;
  font-weight: 500;
  display: inline;
`;

export const CardTopButtons = styled.div``;

export const CardButton = styled.button``;

export const CardLink = styled(Link)``;

export const CardContent = styled.div`
  padding: 1rem;
  flex-grow: 1;
`;

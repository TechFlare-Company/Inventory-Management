import styled from 'styled-components';

import { CardContent } from '../../components/Card/styles';

export const DashboardContainer = styled.div`
  padding: 1.25rem 2rem;
  display: grid;
  grid-template-areas:
    'sales stock'
    'purchase products'
    'sales-and-purchase orders'
    'best-products low-stock-quantity';
  grid-template-columns: 65% 35%;
  grid-template-rows:
    minmax(10.25rem, max-content)
    minmax(10.25rem, max-content)
    minmax(22.5rem, max-content)
    minmax(19.5rem, max-content);
  grid-gap: 1.5rem;

  .sales {
    grid-area: sales;
  }

  .stock {
    grid-area: stock;
  }

  .purchase {
    grid-area: purchase;
  }

  .products {
    grid-area: products;
  }

  .sales-and-purchase {
    grid: sales-and-purchase;
  }

  .orders {
    grid: orders;
  }

  .best-products {
    grid: best-products;
  }

  .low-stock-quantity {
    grid: low-stock-quantity;
  }

  ${CardContent} {
    .grid {
      height: 100%;
      display: flex;

      .grid-item {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.75rem;

        &:not(:last-child) {
          border-right: 1px solid ${({ theme }) => theme.COLORS.GREY[50]};
        }

        .icon {
          height: 2rem;
          width: 2rem;
        }

        .tail {
          display: flex;
          gap: 1rem;

          span {
            color: ${({ theme }) => theme.COLORS.GREY[600]};
            font-size: 1rem;
            font-weight: 600;
          }

          p {
            color: ${({ theme }) => theme.COLORS.GREY[500]};
            font-size: 0.875rem;
            font-weight: 500;
          }
        }
      }
    }
  }
`;

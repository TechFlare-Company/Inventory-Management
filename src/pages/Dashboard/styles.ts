import styled from 'styled-components';

export const DashboardContainer = styled.div`
  padding: 1.25rem 2rem;
  display: grid;
  grid-template-areas:
    'sales' 'stock'
    'purchase' 'products'
    'sales-and-purchase' 'orders'
    'best-products' 'low-stock-quantity';
  grid-template-columns: 65% 35%;
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
`;

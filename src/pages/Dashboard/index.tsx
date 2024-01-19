import { Card } from '../../components/Card';
import { DashboardContainer } from './styles';

export function Dashboard() {
  return (
    <DashboardContainer>
      <Card.Root className="sales">
        <Card.Top>
          <Card.Title>Vendas</Card.Title>
        </Card.Top>
        <Card.Content></Card.Content>
      </Card.Root>
      <Card.Root className="stock">
        <Card.Top>
          <Card.Title>Estoque</Card.Title>
        </Card.Top>
      </Card.Root>
      <Card.Root className="purchase">
        <Card.Top>
          <Card.Title>Compras</Card.Title>
        </Card.Top>
      </Card.Root>
      <Card.Root className="products">
        <Card.Top>
          <Card.Title>Produtos</Card.Title>
        </Card.Top>
      </Card.Root>
      <Card.Root className="sales-and-purchase">
        <Card.Top>
          <Card.Title>Vendas x Compras</Card.Title>
        </Card.Top>
      </Card.Root>
      <Card.Root className="orders">
        <Card.Top>
          <Card.Title>Pedidos</Card.Title>
        </Card.Top>
      </Card.Root>
      <Card.Root className="best-products">
        <Card.Top>
          <Card.Title>Top Melhores Produtos</Card.Title>
        </Card.Top>
      </Card.Root>
      <Card.Root className="low-stock-quantity">
        <Card.Top>
          <Card.Title>Baixa Quantidade em Estoque</Card.Title>
        </Card.Top>
      </Card.Root>
    </DashboardContainer>
  );
}

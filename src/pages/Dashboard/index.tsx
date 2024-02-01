import { Bar, Line } from 'react-chartjs-2';

import 'chart.js/auto';

import BagBlue from '../../assets/dashboard/bag-blue.png';
import BarChartOrange from '../../assets/dashboard/bar-chart-orange.png';
import BarChartPurple from '../../assets/dashboard/bar-chart-purple.png';
import BoxOrange from '../../assets/dashboard/box-orange.png';
import ClipboardPurple from '../../assets/dashboard/clipboard-purple.png';
import CoinsBlue from '../../assets/dashboard/coins-blue.png';
import HomeGreen from '../../assets/dashboard/home-green.png';
import OnTheWayPurple from '../../assets/dashboard/on-the-way-purple.png';
import UserCircleBlue from '../../assets/dashboard/user-circle-blue.png';
import WithoutMoneyPurple from '../../assets/dashboard/without-money-purple.png';
import { Card } from '../../components/Card';
import { DashboardContainer } from './styles';

export function Dashboard() {
  return (
    <DashboardContainer>
      <Card.Root className="sales">
        <Card.Top>
          <Card.Title>Vendas</Card.Title>
        </Card.Top>
        <Card.Content>
          <div className="grid">
            <div className="grid-item">
              <img className="icon" src={CoinsBlue} alt="" />
              <div className="tail">
                <span>832</span>
                <p>Vendas</p>
              </div>
            </div>
            <div className="grid-item">
              <img className="icon" src={BarChartPurple} alt="" />
              <div className="tail">
                <span>R$ 18.300,00</span>
                <p>Receita</p>
              </div>
            </div>
            <div className="grid-item">
              <img className="icon" src={BarChartOrange} alt="" />
              <div className="tail">
                <span>R$ 868,00</span>
                <p>Lucro</p>
              </div>
            </div>
            <div className="grid-item">
              <img className="icon" src={HomeGreen} alt="" />
              <div className="tail">
                <span>R$ 17.432,00</span>
                <p>Custo</p>
              </div>
            </div>
          </div>
        </Card.Content>
      </Card.Root>
      <Card.Root className="stock">
        <Card.Top>
          <Card.Title>Estoque</Card.Title>
        </Card.Top>
        <Card.Content>
          <div className="grid">
            <div className="grid-item">
              <img className="icon" src={BoxOrange} alt="" />
              <div className="tail">
                <span>82</span>
                <p>Qtdd em Estoque</p>
              </div>
            </div>
            <div className="grid-item">
              <img className="icon" src={OnTheWayPurple} alt="" />
              <div className="tail">
                <span>200</span>
                <p>Para Receber</p>
              </div>
            </div>
          </div>
        </Card.Content>
      </Card.Root>
      <Card.Root className="purchase">
        <Card.Top>
          <Card.Title>Compras</Card.Title>
        </Card.Top>
        <Card.Content>
          <div className="grid">
            <div className="grid-item">
              <img className="icon" src={BagBlue} alt="" />
              <div className="tail">
                <span>82</span>
                <p>Compras</p>
              </div>
            </div>
            <div className="grid-item">
              <img className="icon" src={HomeGreen} alt="" />
              <div className="tail">
                <span>R$ 13.573,00</span>
                <p>Custo</p>
              </div>
            </div>
            <div className="grid-item">
              <img className="icon" src={WithoutMoneyPurple} alt="" />
              <div className="tail">
                <span>5</span>
                <p>Cancelado</p>
              </div>
            </div>
            <div className="grid-item">
              <img className="icon" src={BarChartOrange} alt="" />
              <div className="tail">
                <span>R$ 17.432,00</span>
                <p>Custo</p>
              </div>
            </div>
          </div>
        </Card.Content>
      </Card.Root>
      <Card.Root className="products">
        <Card.Top>
          <Card.Title>Produtos</Card.Title>
        </Card.Top>
        <Card.Content>
          <div className="grid">
            <div className="grid-item">
              <img className="icon" src={UserCircleBlue} alt="" />
              <div className="tail">
                <span>31</span>
                <p>Nº de Fornecedores</p>
              </div>
            </div>
            <div className="grid-item">
              <img className="icon" src={ClipboardPurple} alt="" />
              <div className="tail">
                <span>21</span>
                <p>Nº de Categorias</p>
              </div>
            </div>
          </div>
        </Card.Content>
      </Card.Root>
      <Card.Root className="sales-and-purchase">
        <Card.Top>
          <Card.Title>Vendas x Compras</Card.Title>
        </Card.Top>
        <Card.Content>
          <Bar
            style={{ width: '80%', margin: 'auto' }}
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Out'],
              datasets: [
                {
                  label: 'Compras',
                  data: [54890, 58760, 43000, 35670, 42000, 22500, 56000, 45000, 46000, 32400],
                  backgroundColor: '#817AF35F',
                  borderColor: '#817AF3',
                  borderWidth: 2,
                  borderRadius: 100,
                },
                {
                  label: 'Vendas',
                  data: [49000, 48000, 61000, 54000, 55000, 48000, 59000, 38000, 42000, 40000],
                  backgroundColor: '#57DA655F',
                  borderColor: '#57DA65',
                  borderWidth: 2,
                  borderRadius: 100,
                },
              ],
            }}
            options={{
              scales: {
                x: {
                  type: 'category',
                  grid: {
                    display: false,
                  },
                },
                y: {
                  beginAtZero: true,
                  ticks: {
                    stepSize: 10000,
                  },
                },
              },
            }}
          />
        </Card.Content>
      </Card.Root>
      <Card.Root className="orders">
        <Card.Top>
          <Card.Title>Pedidos</Card.Title>
        </Card.Top>
        <Card.Content>
          <div>
            <Line
              data={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                  {
                    label: 'Pedidos',
                    data: [3500, 1800, 2500, 1650, 2100, 4000],
                    backgroundColor: 'rgba(255, 99, 132, 0.1)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                    pointRadius: 1,
                    pointHoverRadius: 7,
                    fill: true,
                  },
                  {
                    label: 'Entregues',
                    data: [3100, 1200, 3800, 2000, 3200, 2500],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(75, 192, 192, 1)',
                    pointRadius: 1,
                    pointHoverRadius: 7,
                    fill: true,
                  },
                ],
              }}
              options={{
                scales: {
                  x: {
                    type: 'category',
                    grid: {
                      display: false,
                    },
                  },
                  y: {
                    beginAtZero: true,
                    ticks: {
                      stepSize: 1000,
                    },
                  },
                },
                elements: {
                  line: {
                    tension: 0.4,
                  },
                },
              }}
            />
          </div>
        </Card.Content>
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

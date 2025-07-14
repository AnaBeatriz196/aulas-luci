import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

import { Pie } from 'react-chartjs-2';

// registra os elementos que o Pie usa
ChartJS.register(ArcElement, Tooltip, Legend);

function GraficoDePizza() {
  const data = {
    labels: ['Categoria A', 'Categoria B', 'Categoria C'],
    datasets: [
      {
        label: 'Minha Pizza',
        data: [10, 20, 30],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
}

export default GraficoDePizza;

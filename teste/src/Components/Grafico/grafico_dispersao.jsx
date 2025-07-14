import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const data = {
  datasets: [
    {
      label: 'Correlação Altura x Peso',
      data: [
        { x: 150, y: 50 },
        { x: 160, y: 60 },
        { x: 170, y: 70 },
      ],
      backgroundColor: 'rgba(255, 99, 132, 1)',
    },
  ],
};

function GraficoDeDispersao() {
  return <Scatter data={data} />;
}

export default GraficoDeDispersao;

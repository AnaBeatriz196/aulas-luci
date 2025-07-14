import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const data = {
  labels: ['Comunicação', 'Liderança', 'Técnico', 'Criatividade', 'Trabalho em equipe'],
  datasets: [
    {
      label: 'Candidato A',
      data: [65, 59, 90, 81, 56],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
    },
    {
      label: 'Candidato B',
      data: [28, 48, 40, 19, 96],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
    },
  ],
};

function GraficoRadar() {
  return <Radar data={data} />;
}

export default GraficoRadar;

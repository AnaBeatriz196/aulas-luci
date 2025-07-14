import { PolarArea } from 'react-chartjs-2';

const data = {
  labels: ['Categoria A', 'Categoria B', 'Categoria C', 'Categoria D'],
  datasets: [
    {
      label: 'Importância',
      data: [11, 16, 7, 14],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(153, 102, 255, 0.5)',
      ],
    },
  ],
};

function GraficoPolar() {
  return <PolarArea data={data} />;
}

export default GraficoPolar;

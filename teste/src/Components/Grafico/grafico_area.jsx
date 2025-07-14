import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'],
  datasets: [
    {
      label: 'Visitantes',
      data: [100, 200, 150, 300, 250],
      fill: true,
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
    },
  ],
};

function GraficoDeArea() {
  return <Line data={data} />;
}

export default GraficoDeArea;

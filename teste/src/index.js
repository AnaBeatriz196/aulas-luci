import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import GraficoDeBarras from './Components/Grafico/grafico_barras';
import GraficoDeArea from './Components/Grafico/grafico_area';
import GraficoPolar from './Components/Grafico/grafico_polar';
import GraficoRadar from './Components/Grafico/grafico_radar';
import GraficoDeLinha from './Components/Grafico/grafico_linha';
import GraficoDeDonut from './Components/Grafico/grafico_donut';
import GraficoDeDispersao from './Components/Grafico/grafico_dispersao'
import GraficoDePizza from './Components/Grafico/grafico_pizza';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <GraficoDeBarras/>
    <GraficoRadar/>
    <GraficoDeLinha/>
    <GraficoDePizza/>    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

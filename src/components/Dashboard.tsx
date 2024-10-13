import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartData, ChartOptions } from 'chart.js';
import QRCodeGenerator from './QRCodeGenerator';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard: React.FC = () => {
  const [showQRGenerator, setShowQRGenerator] = useState(false);

  const feedbackData: ChartData<'bar'> = {
    labels: ['Excelente', 'Bueno', 'Regular', 'Malo', 'Muy Malo'],
    datasets: [
      {
        label: 'Cantidad de Opiniones',
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Resumen de Opiniones',
      },
    },
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Estadísticas de Opiniones</h2>
        <Bar data={feedbackData} options={options} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Opiniones Recientes</h3>
          <ul className="space-y-2">
            <li>
              <p className="font-medium">Juan Pérez</p>
              <p className="text-sm text-gray-600">Excelente servicio, muy recomendado.</p>
            </li>
            <li>
              <p className="font-medium">María García</p>
              <p className="text-sm text-gray-600">Buena atención, pero los precios son un poco altos.</p>
            </li>
          </ul>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Acciones Rápidas</h3>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors mb-2 w-full"
            onClick={() => setShowQRGenerator(true)}
          >
            Generar Código QR
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors w-full">
            Enviar Solicitud de Feedback
          </button>
        </div>
      </div>
      {showQRGenerator && (
        <QRCodeGenerator onClose={() => setShowQRGenerator(false)} />
      )}
    </div>
  );
};

export default Dashboard;
import React from 'react';
import { Bar } from 'react-chartjs-2';

const TopSellersChart = ({ data }) => {
  const sellers = data.map(entry => entry.seller);
  const sales = data.map(entry => entry.sales);

  const chartData = {
    labels: sellers, // Utiliser les noms des vendeurs comme catégories
    datasets: [
      {
        label: 'Ventes',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: sales,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: 'category', // Spécifier que l'axe des X est une échelle de catégorie
        labels: sellers,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Top 5 Vendeurs du Mois</h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default TopSellersChart;

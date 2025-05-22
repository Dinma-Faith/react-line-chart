import React from 'react';

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const LineChartData = ({ activeTab }) => {
  const labels = [
    '2025-04-01', '2025-04-02', '2025-04-03', '2025-04-05', '2025-04-10',
    '2025-04-12', '2025-04-15', '2025-04-20', '2025-04-28', '2025-04-30'
  ];

  const datasetsByTab = {
    download: [
      { label: 'Unknown', data: [15, 10, 20, 30, 35, 30, 25, 18, 22, 28], borderColor: '#aaa', backgroundColor: '#aaa', tension: 0.4, fill: false },
      { label: 'MTN', data: [200, 450, 300, 100, 400, 230, 330, 130, 350, 430], borderColor: '#B9FF5C', backgroundColor: '#B9FF5C', tension: 0.4, fill: false },
      { label: 'AIRTEL', data: [10, 25, 35, 20, 45, 25, 15, 5, 20, 30], borderColor: '#f97316', backgroundColor: '#f97316', tension: 0.4, fill: false },
      { label: 'Google', data: [10, 15, 9, 1300, 100, 60, 45, 30, 55, 40], borderColor: '#f0f', backgroundColor: '#f0f', tension: 0.4, fill: false },
      { label: 'Google LLC', data: [20, 35, 25, 30, 55, 40, 45, 38, 48, 50], borderColor: '#6a0dad', backgroundColor: '#6a0dad', tension: 0.4, fill: false },
      { label: 'Kkontech', data: [5, 30, 40, 15, 50, 20, 10, 35, 25, 45], borderColor: '#e22', backgroundColor: '#e22', tension: 0.4, fill: false },
    ],
    upload: [
      { label: 'MTN', data: [100, 200, 150, 80, 170, 140, 160, 120, 190, 210], borderColor: '#B9FF5C', backgroundColor: '#B9FF5C', tension: 0.4, fill: false },
      { label: 'AIRTEL', data: [8, 15, 20, 10, 18, 22, 17, 11, 14, 20], borderColor: '#f97316', backgroundColor: '#f97316', tension: 0.4, fill: false },
      { label: 'Google LLC', data: [18, 25, 22, 26, 32, 28, 30, 27, 25, 29], borderColor: '#6a0dad', backgroundColor: '#6a0dad', tension: 0.4, fill: false },
    ],
    ping: [
      { label: 'MTN', data: [50, 45, 55, 60, 48, 52, 47, 53, 50, 49], borderColor: '#B9FF5C', backgroundColor: '#B9FF5C', tension: 0.4, fill: false },
      { label: 'AIRTEL', data: [70, 65, 60, 75, 68, 72, 70, 66, 74, 69], borderColor: '#f97316', backgroundColor: '#f97316', tension: 0.4, fill: false },
      { label: 'Kkontech', data: [80, 85, 82, 90, 88, 84, 87, 83, 86, 89], borderColor: '#e22', backgroundColor: '#e22', tension: 0.4, fill: false },
    ],
  };

  const chartData = {
    labels,
    datasets: datasetsByTab[activeTab] || [],
  };

  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          boxWidth: 30,
          padding: 15,
        },
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: activeTab === 'ping' ? 'Ping (ms)' : 'Average Speed (Mbps)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
    },
  };

  return (
    <div className="chart-wrapper">
      {activeTab ? <Line data={chartData} options={commonOptions} /> : <p>Select a tab to display chart</p>}
    </div>
  );
};

export default LineChartData;

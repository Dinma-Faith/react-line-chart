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

const LineChart = () => {
  const data = {
    labels: [
      '2025-04-01','2025-04-02','2025-04-03', '2025-04-05', '2025-04-10','2025-04-12', '2025-04-15', '2025-04-20',
      '2025-04-28', '2025-04-30'
    ],
    datasets: [
    {
      label: 'Unknown',
      data: [15, 10, 20, 30, 35, 30, 25, 18, 22, 28],
      borderColor: '#aaa',
      backgroundColor: '#aaa',
      tension: 0.4,
      fill: false,
    },
      {
        label: 'MTN',
        data: [200, 450, 300, 100, 400, 230, 330, 130, 350, 430],
        borderColor: '#B9FF5C',
        backgroundColor: '#B9FF5C',
        tension: 0.4,
        fill: false,
      },
      {
      label: 'AIRTEL',
      data: [10, 25, 35, 20, 45, 25, 15, 5, 20, 30],
      borderColor: '#f97316',
      backgroundColor: '#f97316',
      tension: 0.4,
      fill: false,
    },
      {
        label: 'Google',
        data: [10, 15, 9, 1300, 100, 60, 45,30, 55, 40],
        borderColor: '#f0f',
        backgroundColor: '#f0f',
        tension: 0.4,
        fill: false,
      },
      {
      label: 'Google LLC',
      data: [20, 35, 25, 30, 55, 40, 45, 38, 48, 50],
      borderColor: '#6a0dad',
      backgroundColor: '#6a0dad',
      tension: 0.4,
      fill: false,
    },
      {
      label: 'Kkontech',
      data: [5, 30, 40, 15, 50, 20, 10, 35, 25, 45],
      borderColor: '#e22', // Red
      backgroundColor: '#e22',
      tension: 0.4,
      fill: false,
    },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          boxWidth: 30,
          padding: 15,
        }
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
          text: 'Average Download Speed (Mbps)',
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
    <div style={{ width: '100%', height: '400px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;

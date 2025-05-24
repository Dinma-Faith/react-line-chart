import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

export const getChartOptions = (activeTab) => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: 'top', labels: { boxWidth: 30, padding: 15 } },
    tooltip: { mode: 'index', intersect: false },
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
      title: { display: true, text: 'Date' },
    },
  },
});

import React, { useState } from 'react';
import ChartTabs from './ChartTabs';
import LineChartData from './LineChartData';
import '../css/LineChart.css';

const LineChart = () => {
  const [activeTab, setActiveTab] = useState('');

  return (
    <div className="chart-container">
      <ChartTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <h2>Internet Download Speed Graph For ISPs</h2>

      <LineChartData activeTab={activeTab} />
    </div>
  );
};

export default LineChart;

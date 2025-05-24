import React from "react";
import { Line } from "react-chartjs-2";
import { chartLabels } from "../chat-data/labels";
import { datasetsByTab } from "../chat-data/datasets";
import { getChartOptions } from "../chat-data/chart-options";

const LineChartData = ({ activeTab }) => {
  const chartData = {
    labels: chartLabels,
    datasets: datasetsByTab[activeTab] || [],
  };

  return (
    <div className="chart-wrapper">
      {activeTab && datasetsByTab[activeTab]?.length > 0 ? (
        <Line data={chartData} options={getChartOptions(activeTab)} />
      ) : (
        <p>Select a tab to display chart</p>
      )}
    </div>
  );
};

export default LineChartData;

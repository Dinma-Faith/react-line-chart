import React from 'react';
import '../../css/lineChart.css';

const ChartTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tab-buttons">
      <button
        className={`tab-button ${activeTab === 'download' ? 'active' : ''}`}
        onClick={() => setActiveTab('download')}
      >
        Download Speed
      </button>
      <button
        className={`tab-button ${activeTab === 'upload' ? 'active' : ''}`}
        onClick={() => setActiveTab('upload')}
      >
        Upload Speed
      </button>
      <button
        className={`tab-button ${activeTab === 'ping' ? 'active' : ''}`}
        onClick={() => setActiveTab('ping')}
      >
        Ping
      </button>
    </div>
  );
};

export default ChartTabs;

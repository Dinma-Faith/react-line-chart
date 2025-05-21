import LineChart from './components/LineChart';
import './components/css/lineChart.css';

function App() {
  return (
    <div className="App" style={{ padding: '1rem' }}>
      <h2>Internet Download Speed Graph For ISPs</h2>
      <LineChart />
    </div>
  );
}

export default App;

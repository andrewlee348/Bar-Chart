import React, { useState } from "react";
import BarChart from "./components/barchart/BarChart";

function App() {
  const [chartData, setChartData] = useState([45, 85, 32, 90]);
  const [labels, setLabels] = useState(["Jan", "Feb", "Mar", "Apr"]);
  const [chartWidth, setChartWidth] = useState(400);
  const [chartHeight, setChartHeight] = useState(300);
  const [bgColor, setBgColor] = useState("rgb(230,230,230)");
  const [barColor, setBarColor] = useState("rgb(65, 135, 245)");
  const [highlightColor, setHighlightColor] = useState("rgb(20, 70, 245)");

  const handleChartDataChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setChartData(event.target.value.split(",").map(Number));
  };

  const handleLabelsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLabels(event.target.value.split(","));
  };

  const handleChartWidthChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setChartWidth(Number(event.target.value));
  };

  const handleChartHeightChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setChartHeight(Number(event.target.value));
  };

  const handleBgColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBgColor(event.target.value);
  };

  const handleBarColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBarColor(event.target.value);
  };

  const handleHighlightColorChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setHighlightColor(event.target.value);
  };

  return (
    <div className="App">
      <h1>Bar Chart Component</h1>
      <form style={{ marginBottom: 20 }}>
        <div style={{ marginBottom: 5 }}>
          <label>Chart Data (comma-separated):</label>
          <input
            type="text"
            value={chartData.join(",")}
            onChange={handleChartDataChange}
          />
        </div>
        <div style={{ marginBottom: 5 }}>
          <label>Labels (comma-separated):</label>
          <input
            type="text"
            value={labels.join(",")}
            onChange={handleLabelsChange}
          />
        </div>
        <div style={{ marginBottom: 5 }}>
          <label>Chart Width:</label>
          <input
            type="number"
            value={chartWidth}
            onChange={handleChartWidthChange}
          />
        </div>
        <div style={{ marginBottom: 5 }}>
          <label>Chart Height:</label>
          <input
            type="number"
            value={chartHeight}
            onChange={handleChartHeightChange}
          />
        </div>
        <div style={{ marginBottom: 5 }}>
          <label>Background Color:</label>
          <input type="text" value={bgColor} onChange={handleBgColorChange} />
        </div>
        <div style={{ marginBottom: 5 }}>
          <label>Bar Color:</label>
          <input type="text" value={barColor} onChange={handleBarColorChange} />
        </div>
        <div style={{ marginBottom: 5 }}>
          <label>Highlight Color:</label>
          <input
            type="text"
            value={highlightColor}
            onChange={handleHighlightColorChange}
          />
        </div>
      </form>
      <BarChart
        chartData={chartData}
        chartLabels={labels}
        width={chartWidth}
        height={chartHeight}
        bgColor={bgColor}
        barColor={barColor}
        highlightColor={highlightColor}
      />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Bar from "../bar/Bar";

interface BChartProps {
  chartData: number[];
  width: number;
  height: number;
  onHover?: (value: number | null) => void;
  chartLabels?: string[];
  bgColor?: string;
  barColor?: string;
  highlightColor?: string;
}

const BChart: React.FC<BChartProps> = ({
  chartData,
  width,
  height,
  onHover,
  chartLabels,
  bgColor,
  barColor,
  highlightColor,
}) => {
  const maxValue = Math.max(...chartData);
  const barWidth = width / chartData.length;
  const background = bgColor ? bgColor : "rgb(230,230,230)";

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{
        backgroundColor: background,
        padding: "15px 10px 15px 10px",
        borderRadius: "20px",
      }}
    >
      {chartData.map((value, index) => (
        <Bar
          key={index}
          value={value}
          maxValue={maxValue}
          width={barWidth}
          height={height}
          x={index * barWidth}
          onHover={onHover}
          label={chartLabels ? chartLabels[index] : undefined}
          barColor={barColor ? barColor : "rgb(65, 135, 245)"}
          highlightColor={highlightColor ? highlightColor : "rgb(20, 70, 245)"}
        />
      ))}
    </svg>
  );
};

export default BChart;

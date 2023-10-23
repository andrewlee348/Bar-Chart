import React, { useState } from "react";
import BChart from "../bchart/BChart";

interface BarChartProps {
  chartData: number[];
  width: number;
  height: number;
  chartLabels?: string[];
  bgColor?: string;
  barColor?: string;
  highlightColor?: string;
}

class BarChart extends React.Component<BarChartProps> {
  constructor(props: BarChartProps) {
    super(props);
    this.state = {
      chartData: [],
      chartLabels: [],
      bgColor: "",
      barColor: "",
      highlightColor: "",
    };
  }
  componentDidMount() {
    this.setState({
      chartData: this.props.chartData,
      chartOptions: this.props.chartLabels,
      bgColor: this.props.bgColor,
      barColor: this.props.barColor,
      highlightColor: this.props.highlightColor,
    });
  }
  render() {
    const {
      chartData,
      chartLabels,
      width,
      height,
      bgColor,
      barColor,
      highlightColor,
    } = this.props;
    return (
      <BChart
        chartData={chartData}
        chartLabels={chartLabels}
        width={width}
        height={height}
        bgColor={bgColor}
        barColor={barColor}
        highlightColor={highlightColor}
      />
    );
  }
}

export default BarChart;

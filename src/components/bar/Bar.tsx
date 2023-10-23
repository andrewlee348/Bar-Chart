import React, { useState } from "react";

interface BarProps {
  value: number;
  maxValue: number;
  height: number;
  width: number;
  x: number;
  onHover?: (value: number | null) => void;
  label?: string;
  barColor?: string;
  highlightColor?: string;
}

const Bar: React.FC<BarProps> = ({
  value,
  maxValue,
  height,
  width,
  x,
  onHover,
  label,
  barColor,
  highlightColor,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const fullHeight = (value / maxValue) * height;
  const barHeight = label ? fullHeight - 50 : fullHeight - 25;
  const yOffset = label ? 25 : 0;
  const labelOffset = label ? 30 : 5;

  const gapPercentage = 10;
  const barWidth = width * (1 - gapPercentage / 100);
  const margin = width * (gapPercentage / 200);

  return (
    <g
      onMouseEnter={() => {
        setIsHovered(true);
        if (onHover) {
          onHover(value);
        }
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        if (onHover) {
          onHover(null);
        }
      }}
    >
      <rect
        width={barWidth}
        height={barHeight}
        fill={isHovered ? highlightColor : barColor} // Change color on hover
        x={x + margin}
        y={height - barHeight - yOffset}
        rx={5}
      />
      {/* Display a tooltip when hovered */}
      {isHovered && (
        <text
          x={x + margin + barWidth / 2}
          y={height - barHeight - labelOffset}
          textAnchor="middle"
        >
          {value}
        </text>
      )}
      {/* Display label under the bar */}
      {label && (
        <text x={x + margin + barWidth / 2} y={height - 5} textAnchor="middle">
          {label}
        </text>
      )}
    </g>
  );
};

export default Bar;

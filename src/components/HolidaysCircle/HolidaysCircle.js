import React from "react";
import "./HolidaysCircle.css";

function HolidaysCircle() {
  const circles = [
    { baseColor: "lightgray", color: "green", radius: 53, strokeWidth: 14, percentage: 75 }, // Inner circle
    { baseColor: "lightgray", color: "blue", radius: 80.08, strokeWidth: 14, percentage: 60 }, // Middle circle
    { baseColor: "lightgray", color: "gold", radius: 107.16, strokeWidth: 14, percentage: 45 }, // Outer circle
  ];

  return (
    <div className="holidays-circle">
      {/* Text in the center */}
      <div className="holiday-label">Holiday</div>
      <svg width="250" height="250" viewBox="0 0 250 250">
        {circles.map((circle, index) => {
          const circumference = 2 * Math.PI * circle.radius;
          const offset = circumference - (circle.percentage / 100) * circumference;

          return (
            <g key={index}>
              {/* Base Gray Ring */}
              <circle
                cx="125"
                cy="125"
                r={circle.radius}
                fill="transparent"
                stroke={circle.baseColor}
                strokeWidth={circle.strokeWidth}
              />
              {/* Colored Ring */}
              <circle
                cx="125"
                cy="125"
                r={circle.radius}
                fill="transparent"
                stroke={circle.color}
                strokeWidth={circle.strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default HolidaysCircle;

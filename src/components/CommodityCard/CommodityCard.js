import React from "react";
import "./CommodityCard.css";

function CommodityCard({ label, value, change, progress, color }) {
  return (
    <div className="commodity-card">
      <h3>{label}</h3>
      <p className="value">{value}</p>
      <p className={`change ${change >= 0 ? "positive" : "negative"}`}>
        {change >= 0 ? `+${change}%` : `${change}%`}
      </p>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
            backgroundColor: color,
          }}
        ></div>
      </div>
    </div>
  );
}

export default CommodityCard;

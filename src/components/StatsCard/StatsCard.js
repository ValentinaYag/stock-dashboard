import React from "react";
import "./StatsCard.css";

function StatsCard({title, value,subValue, percentage}){
    return(
        <div className="stats-card">
        <h3>{title}</h3>
        <p className="value">{value}</p>
        <p className="subValue">{value}</p>
        <p className={`percentage ${percentage >= 0 ? "positive" : "negative"}`}>
        {percentage >= 0 ? `+${percentage}%` : `${percentage}%`}
      </p>
        </div>
    );
};
export default StatsCard;
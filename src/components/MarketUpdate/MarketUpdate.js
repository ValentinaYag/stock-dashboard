import React, { useState } from "react";
import StatsCard from "../StatsCard/StatsCard";
import "./MarketUpdate.css";

function MarketUpdate() {
  const [activeTab, setActiveTab] = useState("All");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Data for the stats cards
  const statsData = {
    All: [
      { title: "Stock Name", value: "2,653,349,468.51", subValue: "2,035.64", percentage: -0.79 },
      { title: "Volume", value: "65,54,253", subValue: "36,641.20", percentage: 10.55 },
      { title: "Turnover", value: "65,54,253", subValue: "36,641.20", percentage: -0.01 },
      { title: "Circuits", value: "65,54,253", subValue: "36,641.20", percentage: -1.24 },
    ],
    Title1: [
      { title: "Stock Name", value: "1,234,567,890", subValue: "123,456", percentage: 2.5 },
    ],
    Title2: [
      { title: "Stock Name", value: "9,876,543,210", subValue: "98,765", percentage: -3.2 },
    ],
  };

  return (
    <div className="market-update">
      <div className="tabs">
        <button
          className={activeTab === "All" ? "active" : ""}
          onClick={() => handleTabClick("All")}
        >
          All
        </button>
        <button
          className={activeTab === "Title1" ? "active" : ""}
          onClick={() => handleTabClick("Title1")}
        >
          Title1
        </button>
        <button
          className={activeTab === "Title2" ? "active" : ""}
          onClick={() => handleTabClick("Title2")}
        >
          Title2
        </button>
      </div>

      <div className="stats-cards">
        {statsData[activeTab].map((data, index) => (
          <StatsCard
            key={index}
            title={data.title}
            value={data.value}
            subValue={data.subValue}
            percentage={data.percentage}
          />
        ))}
      </div>
    </div>
  );
}

export default MarketUpdate;
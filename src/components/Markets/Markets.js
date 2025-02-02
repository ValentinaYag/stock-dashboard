import React, { useState } from "react";
import "./Markets.css";

function Markets() {
  const [activeTab, setActiveTab] = useState("All");

  const marketData = {
    All: [
      { title: "Title 1", type: "ipo", price: "NPR23,495", change: 23.4 },
      { title: "Title 2", type: "ipo", price: "NPR15.9", change: -7.8 },
      { title: "Title 3", type: "ipo", price: "NPR15,978", change: -0.3 },
      { title: "Title 4", type: "ipo", price: "NPR495", change: 11.1 },
      { title: "Title 5", type: "ipo", price: "NPR267", change: 6.7 },
      { title: "Title 6", type: "ipo", price: "NPR0.49", change: -1.4 },
    ],
    NEPSE: [{ title: "NEPSE 1", type: "ipo", price: "NPR500", change: 5.5 }],
    Hydro: [{ title: "Hydro 1", type: "ipo", price: "NPR1,200", change: 3.2 }],
    IPOS: [{ title: "IPO 1", type: "ipo", price: "NPR300", change: 1.8 }],
    NFT: [{ title: "NFT 1", type: "ipo", price: "NPR1,000", change: -2.5 }],
  };

  return (
    <div className="markets">
      <h2>Markets</h2>
      <div className="tabs">
        {Object.keys(marketData).map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="market-table">
        {marketData[activeTab].map((item, index) => (
          <div className="market-row" key={index}>
            <span className="market-title">{item.title}</span>
            <span className="market-type">{item.type}</span>
            <span className="market-price">{item.price}</span>
            <span
              className={`market-change ${item.change >= 0 ? "positive" : "negative"
                }`}
            >
              {item.change >= 0 ? `+${item.change}%` : `${item.change}%`}
            </span>
          </div>
        ))}
      </div>
      <button className="view-all">View All</button>
    </div>
  );
}

export default Markets;
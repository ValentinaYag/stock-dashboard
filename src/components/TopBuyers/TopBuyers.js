import React from "react";
import "./TopBuyers.css";

function TopBuyers() {
  const buyers = [
    {
      avatar: "📈",
      description: "Title",
      title: "Some Buyer",
      percentage: 6.7,
    },
    {
      avatar: "📊",
      description: "Desc",
      title: "Another Buyer",
      percentage: 4.5,
    },
    {
      avatar: "💻",
      description: "Desc",
      title: "Third Buyer",
      percentage: 7.2,
    },
  ];

  return (
    <div className="top-buyers">
      <h2>Top Buyers</h2>
      <p>{new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
      <div className="buyers-table">
        {buyers.map((buyer, index) => (
          <div className="buyer-row" key={index}>
            <div className="buyer-avatar">
              <span>{buyer.avatar}</span>
            </div>
            <div className="buyer-info">
              <h3>{buyer.description}</h3>
              <p>{buyer.title}</p>
            </div>
            <div className={`buyer-percentage ${buyer.percentage >= 0 ? "positive" : "negative"}`}>
              {buyer.percentage >= 0 ? `+${buyer.percentage}%` : `${buyer.percentage}%`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopBuyers;
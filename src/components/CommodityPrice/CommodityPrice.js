import React from "react";
import CommodityCard from "../CommodityCard/CommodityCard";
import "./CommodityPrice.css";

function CommodityPrice() {
  const commodities = [
    { label: "Data 1", value: "1,567", change: 2.89, progress: 78, color: "blue" },
    { label: "Data 2", value: "12%", change: -2.89, progress: 16, color: "orange" },
    { label: "Data 3", value: "200", change: 2.89, progress: 36, color: "red" },
    { label: "Data 4", value: "5.51", change: 2.89, progress: 90, color: "green" },
  ];

  return (
    <div className="commodity-price">
      <h2>Commodity Price</h2>
      <p>Track the latest updates on commodity prices and trends.</p>
      <div className="commodity-cards">
        {commodities.map((commodity, index) => (
          <CommodityCard key={index} {...commodity} />
        ))}
      </div>
    </div>
  );
}

export default CommodityPrice;

import React, { useState } from "react";
import "./MarketUpdateTable.css";

function MarketUpdateTable() {
  const [activeTab, setActiveTab] = useState("Gainers");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tableData = {
    Gainers: [
      { symbol: "AAPL", ltp: "315.70", change: 1.45, quantity: 34823 },
      { symbol: "GOOGL", ltp: "1082.70", change: 0.95, quantity: 24567 },
    ],
    Losers: [
      { symbol: "AMZN", ltp: "1082.70", change: -1.12, quantity: 12564 },
    ],
    TopSectors: [
      { symbol: "Energy", ltp: "123.45", change: 0.65, quantity: 45678 },
    ],
  };

  return (
    <div className="market-update-table">
      <h2>Market Update</h2>
      <div className="tabs">
        <button
          className={activeTab === "Gainers" ? "active" : ""}
          onClick={() => handleTabClick("Gainers")}
        >
          Gainers
        </button>
        <button
          className={activeTab === "Losers" ? "active" : ""}
          onClick={() => handleTabClick("Losers")}
        >
          Losers
        </button>
        <button
          className={activeTab === "TopSectors" ? "active" : ""}
          onClick={() => handleTabClick("TopSectors")}
        >
          Top Sectors
        </button>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>LTP</th>
            <th>24h %</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {tableData[activeTab].map((row, index) => (
            <tr key={index}>
              <td>{row.symbol}</td>
              <td>{row.ltp}</td>
              <td className={row.change >= 0 ? "text-success" : "text-danger"}>
                {row.change >= 0 ? `+${row.change}%` : `${row.change}%`}
              </td>
              <td>{row.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MarketUpdateTable;
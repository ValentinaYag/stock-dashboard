import React, { useState } from "react";
import "./MarketUpdateTable.css";

function MarketUpdateTable() {
    const [activeTab, setActiveTab] = useState("Gainer");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const tableData = {
        Gainer: [
            {
                symbol: "AAPL",
                ltp: "315.70",
                change: 1.45,
                quantity: 34823,
                last7Days: [10, 20, 15, 25, 30, 20, 10],
            },
            {
                symbol: "GOOGL",
                ltp: "1082.70",
                change: -5.12,
                quantity: 24567,
                last7Days: [30, 20, 25, 10, 15, 30, 20],
            },
        ],
        Loser: [
            {
                symbol: "AMZN",
                ltp: "1082.70",
                change: -3.75,
                quantity: 12564,
                last7Days: [15, 25, 10, 30, 20, 15, 10],
            },
        ],
        TopSectors: [
            {
                symbol: "Energy",
                ltp: "123.45",
                change: 0.65,
                quantity: 45678,
                last7Days: [12, 18, 16, 22, 25, 20, 15],
            },
        ],
    };

    return (
        <div className="market-update-table">
            <h2>Market Update</h2>
            <div className="tabs">
                <button
                    className={activeTab === "Gainer" ? "active" : ""}
                    onClick={() => handleTabClick("Gainer")}
                >
                    Gainer
                </button>
                <button
                    className={activeTab === "Loser" ? "active" : ""}
                    onClick={() => handleTabClick("Loser")}
                >
                    Loser
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
                        <th>Last 7 Days</th>
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
                            <td>
                                <div className="mini-graph">
                                    <svg
                                        width="100"
                                        height="40"
                                        viewBox="0 0 100 40"
                                        preserveAspectRatio="xMidYMid meet" /* Ensures correct aspect ratio */
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        {/* Polygon (Shaded Area) */}
                                        <polygon
                                            fill={row.change >= 0 ? "rgba(0,128,0,0.2)" : "rgba(255,0,0,0.2)"} /* Green/Red */
                                            points={`${row.last7Days
                                                .map((value, idx) => {
                                                    const x = idx * (100 / (row.last7Days.length - 1));
                                                    const y = 40 - (value / 100) * 35; /* Scale and keep it in bounds */
                                                    return `${x},${y}`;
                                                })
                                                .join(" ")} 100,40 0,40`}
                                        />

                                        {/* Line Graph (Polyline) */}
                                        <polyline
                                            fill="none"
                                            stroke={row.change >= 0 ? "green" : "red"}
                                            strokeWidth="2"
                                            points={row.last7Days
                                                .map((value, idx) => {
                                                    const x = idx * (100 / (row.last7Days.length - 1));
                                                    const y = 40 - (value / 100) * 35; /* Adjust Y scaling */
                                                    return `${x},${y}`;
                                                })
                                                .join(" ")}
                                        />
                                    </svg>
                                </div>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );

}

export default MarketUpdateTable;
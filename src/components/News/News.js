import React from "react";
import "./News.css";

function News() {
    const newsData = [
        {
            title: "Stock Market Update",
            description: "Stay informed with the latest stock trends and updates.",
            icon: "📈",
          },
          {
            title: "Economic Forecast",
            description: "Predictions on market growth for the next quarter.",
            icon: "📊",
          },
          {
            title: "Tech Stocks Rising",
            description: "Technology companies lead the market gains this week.",
            icon: "💻",
          },
          {
            title: "Energy Sector News",
            description: "Energy stocks see a significant uptick in trading volume.",
            icon: "⚡",
          },
          {
            title: "Healthcare Trends",
            description: "Healthcare stocks remain stable amid global challenges.",
            icon: "🩺",
          },
          {
            title: "Cryptocurrency News",
            description: "Crypto markets experience volatility in recent trading.",
            icon: "₿",
          },
    ];

    return (
        <div className="news-selection">
            <h2>Major Highlights</h2>
            <div className="news-cards">
                {newsData.map((news, index)=>(
                    <div className="news-card" key={index}>
                    <div className="news-header">
                      <span className="news-icon">{news.icon}</span>
                      <h3 className="news-title">{news.title}</h3>
                    </div>
                    <p>{news.description}</p>
                  </div>
                ))}
            </div>
        </div>
    );
}
export default News;
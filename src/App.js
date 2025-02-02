import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MarketUpdate from "./components/MarketUpdate/MarketUpdate";
import MarketUpdateTable from "./components/MarketUpdateTable/MarketUpdateTable";
import CommodityPrice from "./components/CommodityPrice/CommodityPrice";
import News from "./components/News/News";
import TopBuyers from "./components/TopBuyers/TopBuyers";
import Markets from "./components/Markets/Markets";
import HolidaysCircle from "./components/HolidaysCircle/HolidaysCircle";

function App() {
  return (
    <div className="App">
    <Header />
    <MarketUpdate/>
    <MarketUpdateTable />
    <CommodityPrice/>
    <News />
    <div className="highlights-section">
        <div className="top-buyers">
          <TopBuyers />
        </div>
        <div className="holiday-circle">
          <HolidaysCircle />
        </div>
        <div className="markets">
          <Markets />
        </div>
      </div>
    </div>
  );
}

export default App;

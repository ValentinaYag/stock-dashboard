import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from "./components/Header/Header";
import MarketUpdate from "./components/MarketUpdate/MarketUpdate";
import MarketUpdateTable from "./components/MarketUpdateTable/MarketUpdateTable";
import CommodityPrice from "./components/CommodityPrice/CommodityPrice";
import News from "./components/News/News";
import TopBuyers from "./components/TopBuyers/TopBuyers";
import Markets from "./components/Markets/Markets";
import HolidaysCircle from "./components/HolidaysCircle/HolidaysCircle";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row mt-5">
          <Header />
        </div>
        <div className="row mt-5">
          <MarketUpdate />
        </div>
        <div className="row mt-5">
          <MarketUpdateTable />
        </div>
        <div className="row mt-5">
          <CommodityPrice />
        </div>
        <div className="row mt-5">
          <News />
        </div>
        <div className="row mt-5">
          <div className="col">
            <TopBuyers />
          </div>
          <div className="col">
            <HolidaysCircle />
          </div>
          <div className="col">
            <Markets />
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <Footer />
      </div>
    </div>
  );
}
export default App;
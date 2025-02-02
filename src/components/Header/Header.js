import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Daily updates of stock market</h1>
        <p>Stay informed with the latest stock market trends and updates.</p>
        <button className="get-started-btn">Get started now</button>
      </div>
    </header>
  );
}

export default Header;
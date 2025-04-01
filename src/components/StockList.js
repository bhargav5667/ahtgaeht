import React from "react";
import { Link } from "react-router-dom";

const stocks = ["GOOGL", "AAPL", "TSLA", "MSFT", "AMZN"];

const StockList = () => {
  return (
    <div>
      <h2>Stock Market</h2>
      <ul>
        {stocks.map(stock => (
          <li key={stock}>
            <Link to={`/stock/${stock}`}>{stock}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockList;

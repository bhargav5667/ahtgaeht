import React, { useState } from "react";
import StockData from "../components/StockData";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [symbol, setSymbol] = useState("GOOGL");

  return (
    <div>
      <h1>Stock Market Tracker</h1>
      <SearchBar onSearch={(query) => setSymbol(query)} />
      <StockData symbol={symbol} />
    </div>
  );
};

export default Home;

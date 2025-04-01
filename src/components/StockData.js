import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "ce0046c9867f411a94d0be527b1eb933"; 
const SYMBOL = "GOOGL"; 
const INTERVAL = "1min"; 

const StockData = () => {
  const [stock, setStock] = useState(null);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get(
          `https://api.twelvedata.com/time_series?symbol=${SYMBOL}&interval=${INTERVAL}&apikey=${API_KEY}`
        );
        setStock(response.data);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    fetchStockData();
  }, []);

  return (
    <div>
      <h2>{SYMBOL} Stock Data</h2>
      {stock ? <pre>{JSON.stringify(stock, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default StockData;

import React from "react";
import { useParams } from "react-router-dom";
import StockChart from "../components/StockChart";

const StockPage = () => {
  const { symbol } = useParams();

  return (
    <div>
      <h1>{symbol} Stock Details</h1>
      <StockChart symbol={symbol} />
    </div>
  );
};

export default StockPage;

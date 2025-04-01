import React, { useEffect, useState } from "react";
import { fetchStockData } from "../services/stockService";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const StockChart = ({ symbol }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getStockData = async () => {
      const stockData = await fetchStockData(symbol);
      setData(stockData.map(d => ({ ...d, datetime: new Date(d.datetime).toLocaleTimeString() })));
    };
    getStockData();
  }, [symbol]);

  return (
    <div>
      <h2>{symbol} Stock Price</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="datetime" />
          <YAxis domain={["dataMin", "dataMax"]} />
          <Tooltip />
          <Line type="monotone" dataKey="close" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockChart;

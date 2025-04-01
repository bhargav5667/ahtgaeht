import axios from "axios";

const API_KEY = "ce0046c9867f411a94d0be527b1eb933"; // Replace with your key
const BASE_URL = "https://api.twelvedata.com/";

export const fetchStockData = async (symbol) => {
  try {
    const response = await axios.get(`${BASE_URL}time_series`, {
      params: {
        symbol,
        interval: "1min",
        apikey: API_KEY,
      },
    });
    return response.data.values || [];
  } catch (error) {
    console.error("Error fetching stock data", error);
    return [];
  }
};

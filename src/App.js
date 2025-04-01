import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StockList from "./components/StockList";
import StockPage from "./pages/StockPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StockList />} />
        <Route path="/stock/:symbol" element={<StockPage />} />
      </Routes>
    </Router>
  );
}

export default App;

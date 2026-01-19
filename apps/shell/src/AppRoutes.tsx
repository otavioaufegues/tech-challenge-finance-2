import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Transactions from "./pages/Transactions/Transactions";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/transactions" element={<Transactions />} />
    </Routes>
  );
}
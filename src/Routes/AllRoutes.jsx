import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Components/HomePage";
import PricingPage from "../Components/PricingPage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plans" element={<PricingPage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;

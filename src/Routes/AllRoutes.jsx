import React from "react";
import { Route, Routes } from "react-router-dom";
import EducationPlanPage from "../Components/EducationPlanPage";
import EnterprisePage from "../Components/EnterprisePage";
import HomePage from "../Components/HomePage";
import LoginPage from "../Components/LoginPage";
import PricingPage from "../Components/PricingPage";
import SignUpPage from "../Components/SignUpPage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plans" element={<PricingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/enterprise" element={<EnterprisePage />} />
        <Route path="/plans/education" element={<EducationPlanPage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;

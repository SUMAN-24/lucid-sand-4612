import React from "react";
import { Route, Routes } from "react-router-dom";
import EducationPlanPage from "../Components/EducationPlanPage";
import EnterprisePage from "../Components/EnterprisePage";
import ErrorPage from "../Components/ErrorPage";
import ForgotPasswordPage from "../Components/ForgotPasswordPage";
import HomePage from "../Components/HomePage";
import LoginPage from "../Components/LoginPage";
import PresentationsPage from "../Components/PresentationsPage";
import PricingPage from "../Components/PricingPage";
import SignUpPage from "../Components/SignUpPage";
import PrivateRoute from "../hoc/PrivateRoute";

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
        <Route path="/auth/reset_passwords" element={<ForgotPasswordPage />} />
        <Route path="/:id" element={<ErrorPage/>} />
        <Route
          path="/app"
          element={
            <PrivateRoute>
              <PresentationsPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;

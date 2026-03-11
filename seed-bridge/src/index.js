import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Seedbridge from "./components/seed-bridge/seedbridge";
import CreateAccount from "./components/seed-bridge/CreateAccount";
import VerifyEmail from "./components/seed-bridge/VerifyEmail";
import Login from "./components/seed-bridge/login";
import ForgotPassword from "./components/seed-bridge/ForgotPassword";
import SetNewPassword from "./components/seed-bridge/SetNewPassword";
import PasswordResetSuccess from "./components/seed-bridge/PasswordResetSuccess";
import InvestorDashboard from "./components/seed-bridge/InvestorDashboard";
import SMADashboard from "./components/seed-bridge/SMADashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Seedbridge />} />
        <Route path="/create-account/:role" element={<CreateAccount />} />
        <Route path="/verify-email/:role" element={<VerifyEmail />} />
        <Route path="/login/:role" element={<Login />} />
        <Route path="/forgot-password/:role" element={<ForgotPassword />} />
        <Route path="/set-new-password/:role" element={<SetNewPassword />} />
        <Route path="/password-reset-success/:role" element={<PasswordResetSuccess />} />
        <Route path="/dashboard/investor" element={<InvestorDashboard />} />
        <Route path="/dashboard/sma" element={<SMADashboard />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
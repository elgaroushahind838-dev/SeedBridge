import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Seedbridge from "./components/seed-bridge/seedbridge";
import CreateSMA from "./components/seed-bridge/CreateSMA";
import CreateInvestor from "./components/seed-bridge/CreateInvestor"; 

import VerifyEmail from "./components/seed-bridge/VerifyEmail";

import Login from "./components/seed-bridge/login";
import ForgotPassword from "./components/seed-bridge/ForgotPassword";
import SetNewPassword from "./components/seed-bridge/SetNewPassword";
import PasswordResetSuccess from "./components/seed-bridge/PasswordResetSuccess";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Seedbridge />} />
        <Route path="/create-sma" element={<CreateSMA />} />
        <Route path="/create-investor" element={<CreateInvestor />} /> 
<Route path="/verify-email" element={<VerifyEmail />} />
 <Route path="/login" element={<Login />} />
 <Route path="/forgot-password" element={<ForgotPassword />} />
 <Route path="/set-new-password" element={<SetNewPassword />} />
 <Route path="/password-reset-success" element={<PasswordResetSuccess />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
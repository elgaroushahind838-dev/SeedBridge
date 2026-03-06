import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Seedbridge from "./components/seed-bridge/seedbridge";
import CreateSMA from "./components/seed-bridge/CreateSMA";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Seedbridge />} />
        <Route path="/create-sma" element={<CreateSMA />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
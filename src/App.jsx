// import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Layout from "./components/layouts/Layout";
import Calendar from "./pages/Calendar/Calendar";

function App() {
  return (
    <div id="dashboard">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/calendar" element={<Calendar />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

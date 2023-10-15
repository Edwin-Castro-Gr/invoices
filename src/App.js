import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormClient from "./pages/FormClient";
import FormProject from "./pages/FormProject";
import TableClient from "./pages/TableClient";
import TableProject from "./pages/TableProject";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Invoice from "./pages/Invoice";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/FormClient" element={<FormClient />} />
        <Route path="/FormProject" element={<FormProject />} />
        <Route path="/TableClient" element={<TableClient />} />
        <Route path="/TableProject" element={<TableProject />} />
        <Route path="/Invoice" element={<Invoice />} />

      </Routes>
    </BrowserRouter>
  );
}

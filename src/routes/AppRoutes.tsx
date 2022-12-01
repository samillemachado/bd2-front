import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutDefault from "../config/layout/Default";
import Home from "../pages/crud/Home";
import Login from "../pages/crud/Login";
import SignUp from "../pages/crud/SignUp";

const AppRoutes: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutDefault component={Login} />} />
          <Route
            path="/signup"
            element={<LayoutDefault component={SignUp} />}
          />
          <Route path="/home" element={<LayoutDefault component={Home} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;

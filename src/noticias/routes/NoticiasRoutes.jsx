import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Footer, Navbar } from "../../ui";
import { HomePage } from "../pages";

export const NoticiasRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
      <Footer />
    </>
  );
};

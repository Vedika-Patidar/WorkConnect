import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";


function App() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/register" />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      {/* <Route
        path="/jobseeker"
        element={
          user?.role === "jobseeker" ? (
            <JobSeekerDashboard />
          ) : (
            <Navigate to="/login" />
          )
        }
      /> */}
      {/* <Route
        path="/employer"
        element={
          user?.role === "employer" ? (
            <EmployerDashboard />
          ) : (
            <Navigate to="/login" />
          )
        }
      /> */}
    </Routes>
  );
}

export default App;

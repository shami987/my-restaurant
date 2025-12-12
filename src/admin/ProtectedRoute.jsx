// src/admin/ProtectedRoute.jsx
import React from "react";

// Pass-through ProtectedRoute (development mode)
// This removes authentication/role checks so admin routes are directly accessible.
export default function ProtectedRoute({ children }) {
  return <>{children}</>;
}

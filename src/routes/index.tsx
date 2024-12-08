// src/routes/index.tsx
import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { useAuth } from "../context/AuthContext";

const AuthSuccess = React.lazy(() => import("../pages/AuthSuccess"));
const AuthFailure = React.lazy(() => import("../pages/AuthFailure"));
const Settings = React.lazy(() => import("../pages/Settings"));
const Login = React.lazy(() => import("../pages/Login"));
const Signup = React.lazy(() => import("../pages/Signup"));
const PrivacyPolicy = React.lazy(() => import("../pages/PrivacyPolicy"));
const TermsOfService = React.lazy(() => import("../pages/TermsOfService"));

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated === undefined) {
    return <LoadingSpinner />;
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth-success" element={<AuthSuccess />} />
        <Route path="/auth-failure" element={<AuthFailure />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/tos" element={<TermsOfService />} />
        <Route path="/" element={<Navigate to="/settings" replace />} />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Suspense>
  );
}

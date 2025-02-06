import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import { useAuth } from '../context/AuthContext';

// Lazy load pages
const AuthSuccess = React.lazy(() => import('../pages/AuthSuccess'));
const AuthFailure = React.lazy(() => import('../pages/AuthFailure'));
const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const Financial = React.lazy(() => import('../pages/Financial'));
const Marketing = React.lazy(() => import('../pages/Marketing'));
const Insights = React.lazy(() => import('../pages/Insights'));
const Social = React.lazy(() => import('../pages/Social'));
const Settings = React.lazy(() => import('../pages/Settings'));
const Login = React.lazy(() => import('../pages/Login'));
const Signup = React.lazy(() => import('../pages/Signup'));
const PrivacyPolicy = React.lazy(() => import("../pages/PrivacyPolicy"));
const TermsOfService = React.lazy(() => import("../pages/TermsOfService"));

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth-success" element={<AuthSuccess />} />
        <Route path="/auth-failure" element={<AuthFailure />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/financial"
          element={
            <ProtectedRoute>
              <Financial />
            </ProtectedRoute>
          }
        />
        <Route
          path="/marketing"
          element={
            <ProtectedRoute>
              <Marketing />
            </ProtectedRoute>
          }
        />
        <Route
          path="/insights"
          element={
            <ProtectedRoute>
              <Insights />
            </ProtectedRoute>
          }
        />
        <Route
          path="/social"
          element={
            <ProtectedRoute>
              <Social />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Suspense>
  );
}
import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import { useAuth } from '../context/AuthContext';

// Lazy load pages
const AuthSuccess = React.lazy(() => import("../pages/AuthSuccess"));
const AuthFailure = React.lazy(() => import("../pages/AuthFailure"));
const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const Financial = React.lazy(() => import('../pages/Financial'));
const Marketing = React.lazy(() => import('../pages/Marketing'));
const Insights = React.lazy(() => import('../pages/Insights'));
const Social = React.lazy(() => import('../pages/Social'));
const Settings = React.lazy(() => import('../pages/Settings'));
// const Security = React.lazy(() => import('../pages/Security'));
const Login = React.lazy(() => import('../pages/Login'));
const Signup = React.lazy(() => import('../pages/Signup'));

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth-success" element={<AuthSuccess />} />
        <Route path="/auth-failure" element={<AuthFailure />} />
        <Route path="/" element={<Navigate to="/settings" replace />} />
        <Route path="/settings" element={ <Settings />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={<Navigate to="/settings" replace />} // Redirect root path to Settings
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/financial" element={<Financial />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/social" element={<Social />} />
        <Route path="/settings" element={<Settings />} />
        {/* <Route path="/security" element={<ProtectedRoute><Security /></ProtectedRoute>} /> */}
      </Routes>
    </Suspense>
  );
}

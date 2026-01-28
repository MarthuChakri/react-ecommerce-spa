import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Cart from "../pages/Cart";
import ProtectedRoute from "./ProtectedRoute";
import { useAuth } from "../context/AuthContext";

export default function AppRouter() {
  const { user } = useAuth();

  return (
    <Routes>
      {/* Default route */}
      <Route
        path="/"
        element={
          user ? (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      {/* Public Routes */}
      <Route
        path="/login"
        element={user ? <Navigate to="/" replace /> : <Login />}
      />

      <Route
        path="/signup"
        element={user ? <Navigate to="/" replace /> : <Signup />}
      />

      {/* Protected Routes */}
      <Route
        path="/products"
        element={
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        }
      />

      <Route
        path="/product/:id"
        element={
          <ProtectedRoute>
            <ProductDetail />
          </ProtectedRoute>
        }
      />

      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

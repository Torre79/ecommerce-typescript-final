import React from "react";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useAppContext();

  if (!user || user.role !== "admin") {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;

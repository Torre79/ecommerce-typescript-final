import React from "react";
import AdminPanel from "../components/Admin/AdminPanel";
import ProtectedRoute from "../components/Common/ProtectedRoute";

const AdminPage: React.FC = () => {
  return (
    <ProtectedRoute>
      <AdminPanel />
    </ProtectedRoute>
  );
};

export default AdminPage;

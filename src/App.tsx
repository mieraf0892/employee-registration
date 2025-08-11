import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { SidebarProvider } from "./context/SidebarContext";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegistrationPage";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import RequestsPage from "./pages/dashboard/RequestsPage";
import BillsPage from "./pages/dashboard/BillsPage";
import UsersPage from "./pages/dashboard/UsersPage";
import NotificationsPage from "./pages/dashboard/NotificationsPage";
import DashboardHomePage from "./pages/dashboard/DashboardHomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/dashboard/*"
        element={
          <ProtectedRoute>
            <SidebarProvider>
              <DashboardLayout />
            </SidebarProvider>
          </ProtectedRoute>
        }
      >
        <Route path="users" element={<UsersPage />} />
        <Route path="bills" element={<BillsPage />} />
        <Route path="requests" element={<RequestsPage />} />
        <Route path="notifications" element={<NotificationsPage />} />
        <Route index element={<DashboardHomePage />} />
        <Route path="*" element={<Navigate to="." />} /> {/* 404 fallback */}
      </Route>
      <Route path="*" element={<Navigate to="/" />} /> {/* 404 fallback */}
    </Routes>
  );
}

export default App;

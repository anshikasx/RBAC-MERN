import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "@/router/ProtectedRoute";
import AppLayout from "@/layouts/AppLayout";

import LoginPage from "@/pages/LoginPage";
import DashboardPage from "@/pages/DashboardPage";
import UsersPage from "@/pages/UsersPage.jsx";
import PostsPage from "@/pages/PostsPage";
import SettingsPage from "@/pages/SettingsPage";
import UnauthorizedPage from "@/pages/Unauthorized.jsx";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />

        {/* Admin group */}
        <Route element={<ProtectedRoute allow={["admin"]} />}>
          <Route path="/admin" element={<AppLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="posts" element={<PostsPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
        </Route>

        {/* Editor group */}
        <Route element={<ProtectedRoute allow={["editor"]} />}>
          <Route path="/editor" element={<AppLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="posts" element={<PostsPage />} />
          </Route>
        </Route>

        {/* Viewer group */}
        <Route element={<ProtectedRoute allow={["viewer"]} />}>
          <Route path="/viewer" element={<AppLayout />}>
            <Route index element={<DashboardPage />} />
          </Route>
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

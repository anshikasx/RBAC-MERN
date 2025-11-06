import { Navigate } from "react-router-dom";
import { useAuth } from "@/store/auth";

export default function RequireRole({ role, children }) {
  const user = useAuth((s) => s.user);
  if (!user) return <Navigate to="/login" replace />;
  if (user.role !== role) return <Navigate to="/dashboard" replace />;
  return children;
}

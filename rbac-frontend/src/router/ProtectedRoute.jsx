import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/store/auth";

export default function ProtectedRoute({ allow }) {
  const user = useAuth(s => s.user);
  const loading = useAuth(s => s.loading);
  const hydrated = useAuth(s => s.hydrated);
  const init = useAuth(s => s.init);

  useEffect(() => { if (!hydrated) init(); }, [hydrated, init]);

  if (!hydrated || loading) return <div className="p-8">Loading…</div>;
  if (!user) return <Navigate to="/login" replace />;
  if (!allow.includes(user.role)) return <Navigate to="/unauthorized" replace />;
  return <Outlet />;
}

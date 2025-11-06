import { useAuth } from "@/store/auth";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const user = useAuth((s) => s.user);
  const logout = useAuth((s) => s.logout);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="space-y-3 text-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-600">Hi, {user?.name || user?.email}! Role: <b>{user?.role}</b></p>
        <Button variant="secondary" onClick={logout}>Logout</Button>
      </div>
    </div>
  );
}

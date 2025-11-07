import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "@/store/auth.js";
import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AppSidebar() {
  const user = useAuth((s) => s.user);
  const logout = useAuth((s) => s.logout);
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const initials = user?.name
    ? user.name.split(" ").length > 1
      ? user.name.split(" ")[0][0] + user.name.split(" ").slice(-1)[0][0]
      : user.name.slice(0, 2)
    : "U";

  const MENU = {
    admin: [
      { label: "Dashboard", to: "/dashboard", icon: LayoutDashboard },
      { label: "Users", to: "/users", icon: Users },
      { label: "Posts", to: "/posts", icon: FileText },
      { label: "Settings", to: "/settings", icon: Settings },
    ],
    editor: [
      { label: "Dashboard", to: "/dashboard", icon: LayoutDashboard },
      { label: "My Posts", to: "/posts", icon: FileText },
    ],
    viewer: [
      { label: "Dashboard", to: "/dashboard", icon: LayoutDashboard },
    ],
  };

  const items = MENU[user?.role] || [];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside
      className={`h-screen bg-white border-r flex flex-col transition-all ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Header */}
      <div className={`flex items-center justify-between p-4 border-b`}>
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-primary rounded-lg" />
          {!collapsed && <h1 className="font-semibold text-lg">RBAC Panel</h1>}
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-600 text-sm"
        >
          {collapsed ? "›" : "‹"}
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 flex flex-col gap-1 p-3">
        {items.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                isActive
                  ? "bg-primary text-white font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              } ${collapsed ? "justify-center" : ""}`
            }
            end
          >
            <Icon className="h-5 w-5" />
            {!collapsed && <span>{label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Profile + Logout */}
      {user && (
        <div className="p-4 border-t">
          <div
            className={`flex items-center gap-3 mb-3 ${
              collapsed ? "justify-center" : ""
            }`}
          >
            <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center font-semibold">
              {initials.toUpperCase()}
            </div>
            {!collapsed && (
              <div>
                <p className="font-medium text-sm">{user?.name}</p>
                <Badge>{user?.role?.toUpperCase()}</Badge>
              </div>
            )}
          </div>

          <button
            onClick={handleLogout}
            className={`flex items-center gap-3 text-red-600 hover:bg-red-50 w-full px-3 py-2 rounded-lg text-sm ${
              collapsed ? "justify-center" : ""
            }`}
          >
            <LogOut className="h-5 w-5" />
            {!collapsed && "Logout"}
          </button>
        </div>
      )}
    </aside>
  );
}

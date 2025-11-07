import { useState } from "react";
import { Outlet } from "react-router-dom";
import AppSidebar from "@/components/dashboard/AppSidebar.jsx";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/store/auth.js";
import { Menu, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";

export default function AppLayout() {
  const user = useAuth((s) => s.user);
  const logout = useAuth((s) => s.logout);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <AppSidebar
        open={mobileOpen}
        collapsed={collapsed}
        onClose={() => setMobileOpen(false)}
      />

      {/* MAIN AREA */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="sticky top-0 z-10 border-b bg-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between p-3">
            {/* Left: Menu + Collapse button */}
            <div className="flex items-center gap-2">
              {/* Mobile toggle */}
              <Button
                className="md:hidden"
                variant="outline"
                onClick={() => setMobileOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>

              {/* Collapse toggle (desktop) */}
              <Button
                className="hidden md:inline-flex"
                variant="outline"
                onClick={() => setCollapsed((v) => !v)}
              >
                {collapsed ? (
                  <PanelLeftOpen className="h-5 w-5" />
                ) : (
                  <PanelLeftClose className="h-5 w-5" />
                )}
              </Button>

              <span className="ml-1 font-semibold">Dashboard</span>
            </div>

            {/* Right: User info */}
            <div className="flex items-center gap-3">
              <Avatar
                initials={(user?.name || user?.email)?.charAt(0).toUpperCase()}
              />
              <span className="hidden sm:inline text-sm">
                {user?.name || user?.email}
              </span>
              <Button variant="outline" onClick={logout}>
                Logout
              </Button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="mx-auto max-w-6xl p-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

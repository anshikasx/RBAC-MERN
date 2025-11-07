import StatsCardsGrid from "@/components/dashboard/StatsCardsGrid";
import RoleActions from "@/components/dashboard/RoleActions";
import RolePieChart from "@/components/dashboard/RolePieChart";
import RecentActivityTable from "@/components/dashboard/RecentActivityTable";

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold mb-1">Dashboard</h1>
        <p className="text-gray-600">Welcome to your dashboard!</p>
      </div>

      {/* Stats Cards */}
      <StatsCardsGrid />

      <RoleActions />


      {/* Pie Chart + Recent Activity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RolePieChart />
        <RecentActivityTable />
      </div>
    </div>
  );
}


import StatsCard from "./StatsCard";
import { Users, FileText, UserCheck, Clock } from "lucide-react";

export default function StatsCardsGrid() {
  const stats = [
    { title: "Total Users", value: 128, icon: Users, iconColor: "text-blue-600" },
    { title: "Total Posts", value: 342, icon: FileText, iconColor: "text-green-600" },
    { title: "Active Users", value: 89, icon: UserCheck, iconColor: "text-purple-600" },
    { title: "Pending Approvals", value: 12, icon: Clock, iconColor: "text-orange-600" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
      {stats.map((stat, index) => (
        <StatsCard
          key={index}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          iconColor={stat.iconColor}
        />
      ))}
    </div>
  );
}

import { Card, CardContent } from "@/components/ui/card";

/**
 * Props:
 * - title: string
 * - value: string | number
 * - icon: Lucide Icon Component
 * - iconColor?: string (optional Tailwind class)
 */
export default function StatsCard({ title, value, icon: Icon, iconColor = "text-primary" }) {
  return (
    <Card className="shadow-sm hover:shadow-md transition">
      <CardContent className="flex items-center justify-between p-4">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h3 className="text-2xl font-semibold">{value}</h3>
        </div>
        <div className={`p-3 rounded-lg bg-gray-100 ${iconColor}`}>
          <Icon className="h-5 w-5" />
        </div>
      </CardContent>
    </Card>
  );
}

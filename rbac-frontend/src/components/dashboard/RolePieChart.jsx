import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Admin", value: 3 },
  { name: "Editor", value: 5 },
  { name: "Viewer", value: 12 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

export default function RolePieChart() {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border">
      <h2 className="text-lg font-semibold mb-4">Users by Role</h2>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={90}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

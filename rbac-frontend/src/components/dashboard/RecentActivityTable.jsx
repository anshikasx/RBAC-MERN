export default function RecentActivityTable() {
    const activities = [
      { id: 1, user: "John Doe", action: "Logged in", time: "2 mins ago" },
      { id: 2, user: "Sarah Smith", action: "Created a post", time: "10 mins ago" },
      { id: 3, user: "Michael Lee", action: "Updated settings", time: "1 hour ago" },
      { id: 4, user: "Emily Davis", action: "Logged out", time: "2 hours ago" },
    ];
  
    return (
      <div className="bg-white p-5 rounded-lg shadow-sm mt-8">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="py-2">User</th>
              <th className="py-2">Action</th>
              <th className="py-2">Time</th>
            </tr>
          </thead>
  
          <tbody>
            {activities.map((item) => (
              <tr key={item.id} className="border-b last:border-none">
                <td className="py-3">{item.user}</td>
                <td className="py-3">{item.action}</td>
                <td className="py-3 text-gray-500">{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
import { useAuth } from "@/store/auth";
import { Button } from "@/components/ui/button";
import AddPostModal from "./AddPostModal";

export default function RoleActions() {
  const user = useAuth((s) => s.user);

  if (!user) return null;

  const role = user.role;

  const actionsByRole = {
    Admin: [
      { label: "Add User", onClick: () => alert("Add User clicked") },
      { label: "Manage Users", onClick: () => alert("Manage Users clicked") },
      { label: "View Reports", onClick: () => alert("View Reports clicked") },
    ],
    Editor: [
      { label: "Add Post", isModal: true },
      { label: "Manage Posts", onClick: () => alert("Manage Posts clicked") },
      { label: "View Reports", onClick: () => alert("View Reports clicked") },
    ],
    Viewer: [
      { label: "View Reports", onClick: () => alert("View Reports clicked") },
      { label: "Request Access", onClick: () => alert("Access Requested") },
    ],
  };

  const actions = actionsByRole[role] || [];

  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm flex gap-3 flex-wrap">
      {actions.map((action, index) => {
        if (action.isModal) {
          return (
            <AddPostModal key={index}>
              <Button variant="default">{action.label}</Button>
            </AddPostModal>
          );
        }

        return (
          <Button key={index} variant="outline" onClick={action.onClick}>
            {action.label}
          </Button>
        );
      })}
    </div>
  );
}


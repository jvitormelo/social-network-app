import { GroupCard } from "@/components/group-card";
import { LeaveGroupButton } from "../../_components/leave-group-button";

const groups = [
  {
    name: "Group Name",
    picture: "/placeholder.svg",
    members: 200,
  },
  {
    name: "Group Name",
    picture: "/placeholder.svg",
    members: 200,
  },
  {
    name: "Group Name",
    picture: "/placeholder.svg",
    members: 200,
  },
];

function UserGroupsPage() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {groups.map((group) => (
        <GroupCard
          footer={<LeaveGroupButton />}
          name={group.name}
          key={group.name}
          picture={group.picture}
          members={group.members}
        />
      ))}
    </div>
  );
}

export default UserGroupsPage;

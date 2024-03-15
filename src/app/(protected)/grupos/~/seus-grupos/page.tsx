import { GroupCard } from "@/components/group-card";
import { api } from "@/trpc/server";
import { LeaveGroupButton } from "../../_components/leave-group-button";

async function UserGroupsPage() {
  const groups = await api.groups.listUserGroups.query();

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

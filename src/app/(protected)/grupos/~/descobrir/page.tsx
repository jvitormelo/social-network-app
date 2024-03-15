import { GroupCard } from "@/components/group-card";
import { getDiscoverGroups } from "@/server/mock";
import { JoinGroupButton } from "../../_components/join-group-button";

async function DiscoverGroupsPage() {
  const groups = await getDiscoverGroups();

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {groups.map((group) => (
        <GroupCard
          footer={<JoinGroupButton group={group} />}
          name={group.name}
          key={group.name}
          picture={group.picture}
          members={group.members}
        />
      ))}
    </div>
  );
}

export default DiscoverGroupsPage;

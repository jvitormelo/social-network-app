import { GroupCard } from "@/components/group-card";
import { getDiscoverGroups } from "@/server/mock";
import { JoinGroupButton } from "../../_components/join-group-button";
import Link from "next/link";

async function DiscoverGroupsPage() {
  const groups = await getDiscoverGroups();

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {groups.map((group) => (
        <Link passHref href={`/grupos/${group.id}`} key={group.id}>
          <GroupCard
            footer={<JoinGroupButton group={group} />}
            name={group.name}
            picture={group.picture}
            members={group.members}
          />
        </Link>
      ))}
    </div>
  );
}

export default DiscoverGroupsPage;

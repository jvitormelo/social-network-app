"use client";

import { GroupCard } from "@/components/group-card";

import { api } from "@/trpc/react";
import Link from "next/link";
import { JoinGroupButton } from "../../_components/join-group-button";
import { SkeletonCard } from "@/components/skeleton-card";

function DiscoverGroupsPage() {
  const groupsQuery = api.groups.discoverGroups.useQuery();

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {groupsQuery.isLoading && (
        <>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </>
      )}
      {groupsQuery.data?.map((group) => (
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

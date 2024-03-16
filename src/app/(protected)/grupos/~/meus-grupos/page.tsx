"use client";

import { GroupCard } from "@/components/group-card";

import { LeaveGroupButton } from "../../_components/leave-group-button";
import { api } from "@/trpc/react";
import { SkeletonCard } from "@/components/skeleton-card";
import Link from "next/link";

function UserGroupsPage() {
  const groupsQuery = api.groups.listUserGroups.useQuery();

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
            footer={<LeaveGroupButton />}
            name={group.name}
            picture={group.picture}
            members={group.members}
          />
        </Link>
      ))}
    </div>
  );
}

export default UserGroupsPage;

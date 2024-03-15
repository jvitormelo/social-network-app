"use client";

import { api } from "@/trpc/react";
import { futimesSync } from "fs";
import { ChevronDown, ChevronUp, UsersIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function UserGroupColapse() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex flex-col">
      <button
        onClick={(e) => {
          setIsOpen(!isOpen);
        }}
        className="flex items-center gap-2 rounded-md p-3 text-sm font-medium leading-none hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <UsersIcon className="h-4 w-4" />
        Grupos Atalho
        <div className="ml-auto flex">
          {isOpen ? <ChevronUp></ChevronUp> : <ChevronDown></ChevronDown>}
        </div>
      </button>

      {isOpen && <ExpandedItems />}
    </div>
  );
}

function ExpandedItems() {
  const groupsQuery = api.groups.listUserGroups.useQuery();

  return (
    <div className="border-b pb-2 pl-6">
      {groupsQuery.data?.map((group) => (
        <Link
          className="flex items-center gap-2 rounded-md p-3 text-sm font-medium leading-none text-accent-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
          key={group.id}
          href={`/grupos/${group.id}`}
        >
          {group.name}
        </Link>
      ))}
    </div>
  );
}

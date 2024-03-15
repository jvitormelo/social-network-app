"use client";

import { api } from "@/trpc/react";
import { futimesSync } from "fs";
import { ChevronDown, ChevronUp, UsersIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function UserGroupColapse() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="flex">
        <Link
          className="flex w-3/4 items-center gap-2 rounded-md p-3 text-sm font-medium leading-none hover:bg-gray-100 dark:hover:bg-gray-800"
          href={"/grupos/~/descobrir"}
        >
          <UsersIcon className="h-4 w-4" />
          Grupos
        </Link>
        <button className="ml-auto">
          {isOpen ? (
            <ChevronUp
              className="ml-auto flex"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
            ></ChevronUp>
          ) : (
            <ChevronDown
              className="ml-auto flex"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
            ></ChevronDown>
          )}
        </button>
      </div>

      {isOpen && <ExpandedItems />}
    </div>
  );
}

function ExpandedItems() {
  const groupsQuery = api.groups.listUserGroups.useQuery();

  return (
    <div className="border-b py-2 pl-6">
      {groupsQuery.data?.map((group) => (
        <Link
          className="flex items-center gap-2 rounded-md p-3 text-sm font-medium leading-none hover:bg-gray-100 dark:hover:bg-gray-800"
          key={group.id}
          href={`/grupos/${group.id}`}
        >
          {group.name}
        </Link>
      ))}
    </div>
  );
}

"use client";

import { api } from "@/trpc/react";
import { Avatar } from "./ui/avatar";

export function UserInfo() {
  const userQuery = api.user.me.useQuery();

  return (
    <div className="flex items-center gap-4">
      <Avatar />
      <div>
        <h1 className="text-2xl font-bold  leading-none">
          {userQuery.data?.name}
        </h1>
      </div>
    </div>
  );
}

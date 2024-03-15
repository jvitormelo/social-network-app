"use server";

import { sleep } from "@/lib/utils";
import { type Group } from "@/types";

const discoverGroups: Group[] = [
  {
    id: "1",
    name: "Kekw",
    picture: "/placeholder.svg",
    members: 200,
  },
  {
    id: "2",
    name: "Hello Kitty",
    picture: "/placeholder.svg",
    members: 200,
  },
  {
    id: "3",
    name: "Matematicos da USP",
    picture: "/placeholder.svg",
    members: 200,
  },
  {
    id: "4",
    name: "Eu amo fisica",
    picture: "/placeholder.svg",
    members: 200,
  },
];

const userGroups: Group[] = [];

export async function getDiscoverGroups() {
  await sleep(1000);

  return discoverGroups;
}

export async function getUserGroups() {
  await sleep(1000);

  return userGroups;
}

export async function joinGroup(groupId: string) {
  await sleep(1000);
  const foundIndex = discoverGroups.findIndex((group) => group.id === groupId);

  if (foundIndex === -1) {
    throw new Error("Group not found");
  }

  const splicedGroup = discoverGroups.splice(foundIndex, 1);
  userGroups.push(...splicedGroup);
}

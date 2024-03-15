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

export async function addGroup(formData: FormData) {
  const name = formData.get("name");

  if (typeof name !== "string") {
    throw new Error("Invalid name");
  }
  await sleep(1000);
  const newGroup = {
    id: Date.now().toString(),
    name,
    picture: "/placeholder.svg",
    members: Math.floor(Math.random() * 100) + 1,
  };

  discoverGroups.push(newGroup);

  return newGroup;
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

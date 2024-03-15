"use server";

import { sleep } from "@/lib/utils";
import { type User, type Group, type Post } from "@/types";

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

const user: User = {
  id: "1",
  name: "Tracy Howard",
  picture: "/placeholder.svg",
};

const posts: Post[] = [
  {
    id: "1",
    user,
    content:
      "Just finished reading the latest book by @author123. What a journey! Highly recommended for all the book lovers out there. 📚❤️",
    imgSrc: "/placeholder.svg",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    user,
    content:
      "Just finished reading the latest book by @author123. What a journey! Highly recommended for all the book lovers out there. 📚❤️",
    imgSrc: "/placeholder.svg",
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    user,
    content:
      "Just wanted to share this amazing recipe I tried last night. It's a delicious spaghetti aglio e olio. 😋🍝",
    imgSrc: "/placeholder.svg",
    createdAt: new Date().toISOString(),
  },
];

const comments = [
  {
    id: "1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    createdAt: new Date().toISOString(),
    user: {
      name: "John Doe",
      id: "1",
      picture: "/placeholder.svg",
    },
  },

  {
    id: "2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    createdAt: new Date().toISOString(),
    user: {
      name: "Arthur Hao",
      id: "1",
      picture: "/placeholder.svg",
    },
  },
];

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

export async function getPosts() {
  await sleep(500);

  return posts;
}

export async function getPost(postId: string) {
  await sleep(500);
  const post = posts.find((post) => post.id === postId);

  if (!post) {
    throw new Error("Post not found");
  }

  return post;
}

export async function getComments(postId: string) {
  await sleep(500);

  return comments;
}

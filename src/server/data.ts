import { type Group, type Post, type User } from "@/types";

const group = {
  id: "991",
  name: "JASONNN",
  picture: "/placeholder.svg",
  members: 200,
};

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

const userGroups: Group[] = [group];

const user: User = {
  id: "1",
  name: "Tracy Howard",
  picture: "/placeholder.svg",
};

const posts: Post[] = [
  {
    id: "1",
    group: group,
    user,
    content:
      "Just finished reading the latest book by @author123. What a journey! Highly recommended for all the book lovers out there. 📚❤️",
    imgSrc: "/placeholder.svg",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    user,
    group: group,
    content:
      "Just finished reading the latest book by @author123. What a journey! Highly recommended for all the book lovers out there. 📚❤️",
    imgSrc: "/placeholder.svg",
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    user,
    group: group,
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

export const mockedData = {
  group,
  discoverGroups,
  userGroups,
  user,
  posts,
  comments,
};

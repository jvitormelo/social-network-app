import { type Group, type Post, type User } from "@/types";

const groups: Group[] = [
  {
    id: "1",
    name: "Astronomy Enthusiasts",
    picture: "/placeholder.svg",
    members: 1200,
  },
  {
    id: "2",
    name: "Culinary Masters",
    picture: "/placeholder.svg",
    members: 800,
  },
  {
    id: "3",
    name: "USP Mathematicians",
    picture: "/placeholder.svg",
    members: 500,
  },
  {
    id: "4",
    name: "Physics Lovers",
    picture: "/placeholder.svg",
    members: 700,
  },
  {
    id: "5",
    name: "Jason's Fan Club",
    picture: "/placeholder.svg",
    members: 300,
  },
];

const user: User = {
  id: "1",
  name: "Sanford Marshall Sampietri",
  picture: "/placeholder.svg",
};

const secondUser: User = {
  id: "2",
  name: "John Doe",
  picture: "/placeholder.svg",
};

const thirdUser: User = {
  id: "3",
  name: "Jane Doe",
  picture: "/placeholder.svg",
};

const posts: Post[] = [
  {
    id: "1",
    group: groups[0]!,
    user: secondUser,
    content:
      "Spotted Jupiter's moons through my telescope last night! 🌌🔭 #Astronomy",
    imgSrc: "https://picsum.photos/400/300",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    user: thirdUser,
    group: groups[1]!,
    content:
      "Baked a French Baguette following Julia Child's recipe. It was a hit! 🥖 #CulinaryMasters",
    imgSrc: "https://picsum.photos/400/300",
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    user,
    group: groups[2]!,
    content:
      "Just solved a complex mathematical problem. Feels good! 🧮 #Mathematics",
    imgSrc: "https://picsum.photos/400/300",
    createdAt: new Date().toISOString(),
  },
];

const userGroups = new Set<string>([groups[0]!.id]);

const comments = [
  {
    id: "1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    createdAt: new Date().toISOString(),
    user: secondUser,
  },

  {
    id: "2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    createdAt: new Date().toISOString(),
    user: user,
  },
];

export const mockedData = {
  groups,
  user,
  posts,
  comments,
  userGroups,
};

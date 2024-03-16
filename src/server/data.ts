import { type Comment, type Group, type Post, type User } from "@/types";

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
  name: "Shadow ",
  picture:
    "https://cdn.discordapp.com/attachments/1189249844833955911/1218423302197084160/the-eminence-in-shadow2000x1270.png?ex=66079c20&is=65f52720&hm=2799f997b27b70809d016a134b5cd12b65934eea5c4c31fe48d1187c0879ea3e&",
};

const secondUser: User = {
  id: "2",
  name: "John Doe",
  picture: "https://xsgames.co/randomusers/avatar.php?g=male",
};

const thirdUser: User = {
  id: "3",
  name: "Jane Doe",
  picture: "https://xsgames.co/randomusers/avatar.php?g=female",
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

const userGroups = new Set<string>([groups[2]!.id]);

const comments: Comment[] = [
  {
    id: "1",
    postId: "1",
    content: "This is the first comment for the first post.",
    createdAt: new Date().toISOString(),
    user: secondUser,
  },
  {
    id: "2",
    postId: "1",
    content: "This is the second comment for the first post.",
    createdAt: new Date().toISOString(),
    user: user,
  },
  {
    id: "3",
    postId: "2",
    content: "This is the first comment for the second post.",
    createdAt: new Date().toISOString(),
    user: thirdUser,
  },
  {
    id: "4",
    postId: "2",
    content: "This is the second comment for the second post.",
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

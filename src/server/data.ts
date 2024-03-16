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
  name: "Sanford Marshall Sampietri",
  picture:
    "https://cdn.discordapp.com/attachments/820471891051151371/1217203480767369387/image.png?ex=66032c14&is=65f0b714&hm=21b5abe8bef47850afc27bf73e433de00d8087d98096660d18538ac7003f47cf&",
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

export type Group = {
  id: string;
  name: string;
  picture: string;
  members: number;
};

export type User = {
  id: string;
  name: string;
  picture: string;
};

export type Post = {
  id: string;
  user: User;
  group: Group;
  content: string;
  imgSrc?: string;
  createdAt: string;
};

export type Comment = {
  id: string;
  user: User;
  content: string;
  postId: string;
  createdAt: string;
};

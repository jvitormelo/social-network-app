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
  content: string;
  imgSrc?: string;
};

import { sleep } from "@/lib/utils";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { mockedData } from "@/server/data";
import { type Post } from "@/types";
import { z } from "zod";

const postInput = z.object({
  content: z.string(),
  group: z.string(),
  file: z.string().optional(),
});

const editInput = z.object({ postId: z.string() }).merge(
  postInput.omit({
    group: true,
  }),
);

export const postRouter = createTRPCRouter({
  feed: protectedProcedure.query(async () => {
    await sleep(500);
    return mockedData.posts;
  }),
  list: protectedProcedure
    .input(
      z.object({
        groupId: z.string(),
      }),
    )
    .query(async ({ input }) => {
      await sleep(500);
      return mockedData.posts.filter((post) => post.group.id === input.groupId);
    }),

  create: protectedProcedure.input(postInput).mutation(({ input }) => {
    const newPost: Post = {
      id: Math.random().toString(),
      content: input.content,
      group: {
        id: input.group,
        name: "JASONNN",
        picture: "/placeholder.svg",
        members: 200,
      },
      user: {
        id: "1",
        name: "Tracy Howard",
        picture: "/placeholder.svg",
      },
      imgSrc: input.file ?? "",
      createdAt: new Date().toISOString(),
    };

    mockedData.posts.push(newPost);

    return newPost;
  }),

  edit: protectedProcedure.input(editInput).mutation(() => ({})),

  find: protectedProcedure.input(z.string()).query(async ({ input }) => {
    const post = mockedData.posts.find((post) => post.id === input);
    if (!post) {
      throw new Error("Post not found");
    }
    await sleep(500);
    return post;
  }),

  delete: protectedProcedure.input(z.string()).mutation(({ input }) => {
    mockedData.posts = mockedData.posts.filter((post) => post.id !== input);

    return true;
  }),

  listComments: protectedProcedure.input(z.string()).query(async () => {
    await sleep(500);
    return mockedData.comments;
  }),
});

import { sleep } from "@/lib/utils";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { mockedData } from "@/server/data";
import { type Post } from "@/types";
import { revalidatePath } from "next/cache";
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
    return mockedData.posts.sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  }),
  list: protectedProcedure
    .input(
      z.object({
        groupId: z.string(),
      }),
    )
    .query(async ({ input }) => {
      await sleep(500);
      return mockedData.posts
        .filter((post) => post.group.id === input.groupId)
        .sort((a, b) => {
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        });
    }),

  create: protectedProcedure.input(postInput).mutation(({ input }) => {
    const group = mockedData.groups.find((group) => group.id === input.group);
    const newPost: Post = {
      id: Math.random().toString(),
      content: input.content,
      group: group!,
      user: mockedData.user,
      imgSrc: "https://picsum.photos/600/400",
      createdAt: new Date().toISOString(),
    };

    mockedData.posts.push(newPost);

    revalidatePath(`/grupos/${input.group}`);

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
});

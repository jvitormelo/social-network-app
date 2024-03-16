import { sleep } from "@/lib/utils";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { mockedData } from "@/server/data";
import { z } from "zod";

const commentInput = z.object({
  content: z.string(),
  postId: z.string(),
});

export const commentRouter = createTRPCRouter({
  list: protectedProcedure.input(z.string()).query(async () => {
    await sleep(500);
    return mockedData.comments;
  }),

  create: protectedProcedure.input(commentInput).mutation(({ input }) => {
    const newComment = {
      id: Math.random().toString(),
      content: input.content,
      user: mockedData.user,
      createdAt: new Date().toISOString(),
      postId: input.postId,
    };

    mockedData.comments.push(newComment);

    return newComment;
  }),
});

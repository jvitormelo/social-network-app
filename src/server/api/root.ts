import { postRouter } from "@/server/api/routers/post";
import { createTRPCRouter } from "@/server/api/trpc";
import { groupRouter } from "./routers/group";
import { userRouter } from "./routers/user";
import { commentRouter } from "./routers/comment";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  user: userRouter,
  groups: groupRouter,
  comment: commentRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

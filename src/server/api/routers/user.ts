import { mockedData } from "@/server/data";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  // Probably is better to use the getServerAuthSession to get the current user
  // used this because is easy to mock
  me: protectedProcedure.query(async () => {
    return mockedData.user;
  }),
});

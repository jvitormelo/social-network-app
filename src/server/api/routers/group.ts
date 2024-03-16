import { mockedData } from "@/server/data";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { sleep } from "@/lib/utils";
import { z } from "zod";
import { type Group } from "@/types";

const groupInput = z.object({
  name: z.string(),
  picture: z.string(),
});

export const groupRouter = createTRPCRouter({
  create: protectedProcedure.input(groupInput).mutation(({ input }) => {
    const group: Group = {
      name: input.name,
      id: Date.now().toString(),
      members: 1,
      picture: input.picture,
    };
    mockedData.groups.push(group);
    mockedData.userGroups.add(group.id);
    // add ADMIN Role to user
    return group;
  }),
  listUserGroups: protectedProcedure.query(async () => {
    await sleep(500);
    return mockedData.groups.filter((group) =>
      mockedData.userGroups.has(group.id),
    );
  }),
  discoverGroups: protectedProcedure.query(async () => {
    await sleep(500);
    return mockedData.groups.filter(
      (group) => !mockedData.userGroups.has(group.id),
    );
  }),
  find: protectedProcedure.input(z.string()).query(async ({ input }) => {
    const group = mockedData.groups.find((group) => group.id === input);

    if (!group) {
      throw new Error("Group not found");
    }
    return group;
  }),
  join: protectedProcedure.input(z.string()).mutation(async ({ input }) => {
    await sleep(1000);

    mockedData.userGroups.add(input);
  }),
});

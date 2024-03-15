import { mockedData } from "@/server/data";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { sleep } from "@/lib/utils";
import { z } from "zod";
import { type Group } from "@/types";

const groupInput = z.object({
  name: z.string(),
  picture: z.string(),
});

export const groupsRouter = createTRPCRouter({
  create: protectedProcedure.input(groupInput).mutation(({ input }) => {
    const group: Group = {
      name: input.name,
      id: Date.now().toString(),
      members: 1,
      picture: input.picture,
    };
    mockedData.userGroups.push(group);
    return group;
  }),
  listUserGroups: protectedProcedure.query(async () => {
    await sleep(500);
    return mockedData.userGroups;
  }),
  discoverGroups: protectedProcedure.query(async () => {
    await sleep(500);
    return mockedData.discoverGroups;
  }),
  find: protectedProcedure.input(z.string()).query(async ({ input }) => {
    const group = [...mockedData.userGroups, ...mockedData.discoverGroups].find(
      (group) => group.id === input,
    );
    if (!group) {
      throw new Error("Group not found");
    }
    return group;
  }),
  join: protectedProcedure.input(z.string()).mutation(async ({ input }) => {
    await sleep(1000);
    const foundIndex = mockedData.discoverGroups.findIndex(
      (group) => group.id === input,
    );

    if (foundIndex === -1) {
      throw new Error("Group not found");
    }

    const splicedGroup = mockedData.discoverGroups.splice(foundIndex, 1);
    mockedData.userGroups.push(...splicedGroup);
  }),
});

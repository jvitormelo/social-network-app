"use client";

import { Button } from "@/components/ui/button";
import { openToast } from "@/lib/utils";
import { joinGroup } from "@/server/mock";
import { type Group } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function JoinGroupButton({ group }: { group: Group }) {
  const { mutate, isLoading } = useJoinGroup();

  return (
    <Button
      isLoading={isLoading}
      onClick={() => mutate(group.id)}
      className="invisible w-full opacity-0 transition-opacity duration-200 ease-in-out group-hover:visible group-hover:opacity-100"
    >
      Entrar
    </Button>
  );
}

function useJoinGroup() {
  const router = useRouter();
  return useMutation({
    mutationFn: async (groupId: string) => {
      await joinGroup(groupId);
      return true;
    },
    onSuccess() {
      openToast("Voce entrou no grupo!");

      router.refresh();
    },
  });
}

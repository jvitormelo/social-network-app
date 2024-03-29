"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/trpc/react";
import { type Group } from "@/types";
import { toast } from "sonner";

export function JoinGroupButton({ group }: { group: Group }) {
  const utils = api.useUtils();
  const { mutate, isLoading } = api.groups.join.useMutation({
    onSuccess() {
      toast.success("Voce entrou no grupo!");

      void utils.groups.listUserGroups.invalidate();
      void utils.groups.discoverGroups.invalidate();
    },
  });

  return (
    <Button
      isLoading={isLoading}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        mutate(group.id);
      }}
      className="invisible w-full opacity-0 transition-opacity duration-200 ease-in-out group-hover:visible group-hover:opacity-100"
    >
      Entrar
    </Button>
  );
}

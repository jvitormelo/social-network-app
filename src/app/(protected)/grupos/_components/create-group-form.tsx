"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { openToast } from "@/lib/utils";
import { addGroup } from "@/server/mock";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

// Todo > Create the Group Form, and then create the Edit/Create Group
export function CreateGroupForm() {
  const { mutate, isLoading } = useCreateGroup();
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        mutate(formData);
      }}
    >
      <label>
        Nome do Grupo
        <Input name="name" required placeholder="Nome do Grupo" type="text" />
      </label>

      <label>
        Imagem
        <Input required accept="image/*" type="file" />
      </label>

      <Button isLoading={isLoading} type="submit">
        Criar
      </Button>
    </form>
  );
}

function useCreateGroup() {
  const router = useRouter();

  return useMutation({
    mutationFn: addGroup,
    onSuccess(data) {
      openToast("Grupo criado com sucesso");

      router.push(`/grupos/${data.id}`);
    },
  });
}

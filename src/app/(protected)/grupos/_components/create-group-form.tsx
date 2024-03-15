"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

// Todo > Create the Group Form, and then create the Edit/Create Group
export function CreateGroupForm() {
  const router = useRouter();
  const { mutate, isLoading } = api.groups.create.useMutation({
    onSuccess(data) {
      toast.success("Grupo criado com sucesso");

      router.push(`/grupos/${data.id}`);
    },
  });
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        // TODO: Add picture
        mutate({
          name: formData.get("name") as string,
          picture: "WOWWW" as string,
        });
      }}
    >
      <div>
        <Label htmlFor="name">Nome do Grupo*</Label>
        <Input
          id="name"
          name="name"
          required
          placeholder="Nome do Grupo"
          type="text"
        />
      </div>
      <div>
        <Label>Imagem</Label>
        <Input accept="image/*" type="file" />
      </div>

      <Button isLoading={isLoading} type="submit">
        Criar
      </Button>
    </form>
  );
}

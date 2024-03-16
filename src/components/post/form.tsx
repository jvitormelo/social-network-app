"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { api } from "@/trpc/react";
import { type Post } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

type Props = {
  initialData?: Post;
};

export function PostForm({ initialData }: Props) {
  const search = useSearchParams();
  const userGroupsQuery = api.groups.listUserGroups.useQuery();
  const utils = api.useUtils();
  const router = useRouter();
  const createPostMutation = api.post.create.useMutation({
    onSuccess(_, variables) {
      toast.success("Post criado com sucesso");

      void utils.post.list.invalidate({
        groupId: variables.group,
      });

      void utils.post.feed.invalidate();

      router.push(`/grupos/${variables.group}`);
    },
  });

  const searchGroupId = search.get("id");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const group = formData.get("group") as string;
        const content = formData.get("content") as string;
        console.log({ group, content });
        // TODO handle img

        createPostMutation.mutate({
          group: group || searchGroupId!,
          content,
          file: "",
        });
      }}
      className="flex flex-col gap-4"
    >
      <div>
        <Label htmlFor="group">Grupo*</Label>
        <Select
          disabled={!!initialData?.group.id || !!searchGroupId}
          required={!initialData?.group.id}
          key={searchGroupId}
          defaultValue={searchGroupId ? searchGroupId : undefined}
          name="group"
        >
          <SelectTrigger>
            <SelectValue id="group" placeholder="Selecione o Grupo" />
          </SelectTrigger>
          <SelectContent>
            {userGroupsQuery.data?.map((group) => (
              <SelectItem key={group.id} value={group.id}>
                {group.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="content">Conteúdo*</Label>
        <Textarea
          id="content"
          name="content"
          required
          placeholder="O que você está pensando?"
          defaultValue={initialData?.content}
        />
      </div>

      <div>
        <Label htmlFor="img">Imagem</Label>
        <Input id="img" name="img" type="file" accept="image/*" />
      </div>

      <Button
        isLoading={createPostMutation.isLoading}
        type="submit"
        className="w-full"
      >
        Postar
      </Button>
    </form>
  );
}
